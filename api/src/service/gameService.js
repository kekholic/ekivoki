/* eslint-disable class-methods-use-this */

const { PrismaClient } = require('@prisma/client');
const GAME_STATUS = require('../actions/gameStatus');

const prisma = new PrismaClient();
const ApiError = require('../exceptions/apiError');
// const WSServer = require('../../app');

// const aWss = WSServer.getWss();

class GameService {
/*   gameConnections(ws, msg) {
    console.log('eebat');
    aWss.clients.forEach((client) => {
      client.send(JSON.stringify(msg));
    });
  }
  */
  async searchGame() {
    try {
      const allGame = await prisma.game.findMany({
        where: {
          status: {
            not: GAME_STATUS.END,
          },
        },
      });
      return allGame;
    } catch (error) {
      console.log(error);
      throw ApiError.BadRequest('Ошибка получения списка игр');
    }
  }

  async checkStatusGame(id) {
    try {
      const oneGame = await prisma.game.findUnique({
        where: { id },
      });
      console.log('oneGame', oneGame);
      return oneGame.status;
    } catch (error) {
      console.log(error);
      throw ApiError.BadRequest('Ошибка получения статуса игры');
    }
  }

  async createGame(title, password, maxPlayers, countPlayers, id, username) {
    try {
      const newGame = await prisma.game.create({
        data: {
          title,
          password,
          maxPlayers: +maxPlayers,
          countPlayers,
        },
      });
      if (!newGame) {
        throw ApiError.BadRequest('Не удалось создать игру');
      }
      delete newGame.createdAt;
      delete newGame.updatedAt;

      const userNgames = await prisma.userNGame.create({
        data: {
          gameId: newGame.id,
          userId: id,
        },
      });
      if (!userNgames) {
        throw ApiError.BadRequest('Не удалось добавить пользьзователя в игру игру');
      }

      const questions = await prisma.card.findMany({
        select: {
          id: true,
          questionForPlayers: true,
          questionForHost: true,
          type: true,
        },
      });
      console.log('QUESTIONS', questions);
      const resp = {
        game: {},
        user: {},
        questions: {},
      };

      resp.game = newGame;
      resp.user.username = username;
      resp.user.userId = id;
      resp.questions = questions;
      resp.questions.current = 1;
      return resp;
    } catch (error) {
      throw ApiError.BadRequest('Непредвиденая ошибка при создании игры');
    }
  }

  async connectionGame(id, user) {
    try {
      const gameBD = await prisma.game.update({
        where: { id },
        data: {
          countPlayers: {
            increment: 1,
          },
        },
      });
      delete gameBD.createdAt;
      delete gameBD.updatedAt;

      const userNGame = await prisma.userNGame.create({
        data: {
          gameId: gameBD.id,
          userId: user.id,
        },
      });

      const stateGame = await prisma.game.findUnique({
        where: { id },
        include: {
          UserNGame: {
            include: {
              User: {
                select: {
                  id: true,
                  username: true,
                },
              },
            },
          },
        },
      });

      const userList = stateGame.UserNGame.reduce((acc, curr) => {
        acc.push(curr.User);
        return acc;
      }, []);
      userList.sort((prev, curr) => prev.id - curr.id);
      const game = {
        game: gameBD,
        playersPriority: userList,
        progress: [],
        isHost: userList[0].id,
      };
      return game;
    } catch (error) {
      throw ApiError.BadRequest('Непредвиденая ошибка при подключении игры');
    }
  }

  async addGame(id, userId, username) {
    try {
      const userNgame = await prisma.userNGame.create({
        data: {
          gameId: Number(id),
          userId,
        },
      });
      return {
        gameId: userNgame.gameId,
        userId: userNgame.userId,
        username,
      };
    } catch (error) {
      throw ApiError.BadRequest('Непредвиденая ошибка при подключении игры');
    }
  }

  async startGame(id, status) {
    try {
      await prisma.game.update({
        where: { id },
        data: {
          status,
        },
      });
    } catch (error) {
      throw ApiError.BadRequest('Ошибка старта игры');
    }
  }

  async changeStatusGame(id, newStatus) {
    console.log('id', id, 'newStatus', newStatus);
    try {
      const game = await prisma.game.update({
        where: { id },
        data: {
          status: newStatus,
        },
      });
    } catch (error) {
      console.log(error);
      throw ApiError.BadRequest('Ошибка смены статуса игры');
    }
  }
}

module.exports = new GameService();

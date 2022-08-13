/* eslint-disable class-methods-use-this */
const { PrismaClient } = require('@prisma/client');
const gameService = require('../service/gameService');

const prisma = new PrismaClient();

class GameController {
  async createGame(req, res, next) {
    const { title, password, maxPlayers, countPlayers, id, username } =
      req.body;
    console.log("create game:",req.body);
    try {
      const newGame = await prisma.game.create({
        data: {
          title,
          password,
          maxPlayers: +maxPlayers,
          countPlayers,
          isPanding: true,
          isdone: false,
        },
      });

      const userNgames = await prisma.userNGame.create({
        data: {
          gameId: newGame.id,
          userId: id,
        },
      });
      const resp = {
        game: {},
        user: {},
      };

      resp.game = newGame;
      resp.user.username = username;
      resp.user.userId = id;
      res.json(resp);
    } catch (error) {
      next(error);
    }
  }

  async searchGame(req, res, next) {
    try {
      const allGame = await prisma.game.findMany({
        where: { isPanding: true },
      });
      res.json(allGame);
    } catch (error) {
      next(error);
    }
  }

  async connectionGame(req, res, next) {
    const { id, user } = req.body;
    console.log("connectionGame game:",req.body);
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
    console.log('gameBD: ', gameBD);
    const userNGame = await prisma.userNGame.create({
      data: {
        gameId: gameBD.id,
        userId: user.id,
      },
    });
    console.log('userNGame: ', userNGame);
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
    res.json(game);
  }

  async addGame(req, res, next) {
    const { id, userId, username } = req.body;
    console.log('addGame: ', req.body);

    try {
      const userNgame = await prisma.userNGame.create({
        data: {
          gameId: Number(id),
          userId,
        },
      });
      res.json({
        gameId: userNgame.gameId,
        userId: userNgame.userId,
        username,
      });
    } catch (error) {
      next(error);
    }
  }

  async endGame(req, res, next) {}

  async startGame(req, res, next) {
    const { id, isPanding } = req.body;
    try {
      const game = await prisma.game.update({
        where: { id },
        data: {
          isPanding,
        },
      });
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  }

  async start(ws, req) {
    ws.on('message', (msg) => {
      const mesg = JSON.parse(msg);
      switch (mesg.method) {
        case 'connection':
          gameService.gameConnections(ws, mesg);
          break;
        case 'draw':
          // broadcastConnection(ws, mesg);
          break;

        default:
          break;
      }
    });
  }
}

module.exports = new GameController();

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
        where: { status: GAME_STATUS.END },
      });
      return allGame;
    } catch (error) {
      console.log(error);
      throw ApiError.BadRequest('Ошибка получения списка игр');
    }
  }

  async checkStatusGame(id) {
    try {

    } catch (error) {
      throw ApiError.BadRequest('Ошибка получения статуса игры');
    }
  }

  async createGame() {

  }
}

module.exports = new GameService();

const gameRouter = require('express').Router();
const gameControllers = require('../controllers/gameControllers');

gameRouter.post('/', gameControllers.createGame);
gameRouter.get('/search', gameControllers.searchGame);
gameRouter.patch('/add', gameControllers.addGame);
gameRouter.patch('/start', gameControllers.startGame);
gameRouter.patch('/end', gameControllers.endGame);

module.exports = gameRouter;
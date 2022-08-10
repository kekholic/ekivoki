/* eslint-disable class-methods-use-this */
/* eslint-disable consistent-return */
const authService = require('../service/authService');

class AuthController {
  async registration(req, res, next) {
    try {
      const { email, password, username } = req.body;
      const userData = await authService.registration(
        email,
        password,
        username,
      );
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        httpsOnly: true,
      });
      delete userData.refreshToken;

      return res.json(userData);
    } catch (error) {
      next(error);
    }
  }

  async activate(req, res, next) {
    try {
      const codeActivation = req.params.link;
      await authService.activate(codeActivation);
      res.redirect('http://localhost:3000');
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await authService.login(email, password);
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      delete userData.refreshToken;

      return res.json(userData);
    } catch (error) {
      next(error);
    }
  }

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const token = await authService.logout(refreshToken);
      res.clearCookie('refreshToken');
      return res.json(token);
    } catch (error) {
      next(error);
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await authService.refresh(refreshToken);
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      const { accessToken } = userData;
      return res.json({ accessToken });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AuthController();

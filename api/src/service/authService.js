const bcrypt = require('bcrypt');
const uuid = require('uuid');
const { PrismaClient } = require('@prisma/client');

const ApiError = require('../exceptions/apiError');
const UserDto = require('../dtos/userDto');

const tokenService = require('./tokenService');
const mailService = require('./mailService');

const prisma = new PrismaClient();

class AuthService {
  static async registration(email, password, username) {
    try {
      const candidate = await prisma.user.findUnique({ where: { email } });
      if (candidate) {
        throw new Error(`Пользователь с почтовым адресом ${email} уже существует`);
      }
      const hashPassword = await bcrypt.hash(password, 8);
      const activateLink = uuid.v4();
      const user = await prisma.user.create({
        email,
        username,
        password: hashPassword,
        codeActivation: `${process.env.API_URL}/activate/${activateLink}`,
      });
      await mailService.sendActivationMail(
        email,
        `${process.env.API_URL}/activate/${activateLink}`,
      );
      const userDto = new UserDto(user);
      console.log(userDto);
      const tokens = tokenService.generateTokens({ ...userDto });
      await tokenService.saveToken(userDto.id, tokens);

      return {
        ...tokens,
        user: userDto,
      };
    } catch (error) {
      throw ApiError.BadRequest('Невалидные данные');
    }
  }

  async activate(link) {
    try {
      const user = prisma.user.findUnique({
        where: {
          codeActivation: `${process.env.API_URL}/activate/${link}`,
        },
      });
      if (!user) {
        throw ApiError.BadRequest('Неккоректная ссылка активации');
      }
      await prisma.user.update({
        where: { id: user.id },
        data: { isActivated: true },
      });
    } catch (error) {
      throw ApiError.BadRequest('Ошибка активации');
    }
  }

  async login(email, password) {
    try {
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) {
        throw ApiError.BadRequest('Пользователь с таким email не найден');
      }
      const isPassEquals = await bcrypt.compare(password, user.password);
      if (!isPassEquals) {
        throw ApiError.BadRequest('Неверный пароль');
      }
      const userDto = new UserDto(user);

      const tokens = tokenService.generateTokens({ ...userDto });
      await tokenService.saveToken(userDto.id, tokens);
      return { ...tokens, user: userDto };
    } catch (error) {
      throw ApiError.BadRequest('Ошибка входа');
    }
  }

  async logout(refreshToken) {
    try {
      const token = await tokenService.removeToken(refreshToken);
      return token;
    } catch (error) {
      throw ApiError.BadRequest('Ошибка выхода');
    }
  }

  async refresh(refreshToken) {
    try {
      if (!refreshToken) {
        throw ApiError.UnauthorizedError();
      }
      const userData = tokenService.validateRefreshToken(refreshToken);
      const tokenFromDb = await tokenService.findToken(refreshToken);
      if (!userData || !tokenFromDb) {
        throw ApiError.UnauthorizedError();
      }
      const user = await prisma.user.findUnique({ where: { id: userData.id } });
      const userDto = new UserDto(user);
      const tokens = tokenService.generateTokens({ ...userDto });

      await tokenService.saveToken(userDto.id, tokens.refreshToken);
      return { ...tokens, user: userDto };
    } catch (error) {
      throw ApiError.BadRequest('Ошибка обновления токена');
    }
  }
}

module.exports = new AuthService();

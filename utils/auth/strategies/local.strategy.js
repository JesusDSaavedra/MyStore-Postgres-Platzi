const { Strategy } = require('passport-local');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const UserService = require('./../../../services/user.service');

const service = new UserService();

const LocalStrategy = new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  async (email, password, done) => {
    try {
      const user = await service.findByEmail(email);
      if (!user) {
        done(boom.unauthorized('Sorry, this email does not exist.'), false);
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        done(boom.unauthorized('Wrong password.'), false);
      }
      delete user.dataValues.password;
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
);

module.exports = LocalStrategy;

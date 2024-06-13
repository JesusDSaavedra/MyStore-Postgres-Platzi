const { Sequelize } = require('sequelize');

const { config } = require('../config/config.js');
const setupModels = require('../db/models/index');

const options = {
  dialect: 'postgres',
  logging: config.isProd ? false : true,
};

if (config.isProd) {
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: false,
    },
  };
  options.dialectModule = require('pg');
}

const sequelize = new Sequelize(config.dbUrl, options);

setupModels(sequelize);

module.exports = sequelize;

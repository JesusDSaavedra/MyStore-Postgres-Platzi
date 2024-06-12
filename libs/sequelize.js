const { Sequelize } = require('sequelize');

const { config } = require('../config/config.js');
const setupModels = require('../db/models/index');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
// const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const options = {
  dialect: 'postgres',
  logging: true,
};

if (config.isProd) {
  options.dialectModule = require('pg');
}
// const sequelize = new Sequelize(URI, options);
const sequelize = new Sequelize(config.dbUrl, options);

setupModels(sequelize);

// sequelize.sync();

module.exports = sequelize;

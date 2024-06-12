const { config } = require('../config/config.js');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

// module.exports = {
//   development: {
//     url: URI,
//     dialect: 'postgres',
//     // dialect: 'mysql',
//   },
//   production: {
//     url: URI,
//     dialect: 'postgres',
//     // dialect: 'mysql',
//   },
// };

module.exports = {
  development: {
    url: config.dbUrl,
    dialect: config.dbEngine,
    // dialect: 'mysql',
  },
  production: {
    url: config.dbUrl,
    dialect: config.dbEngine, // postgres
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
};

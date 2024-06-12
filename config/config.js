require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  isProd: process.env.NODE_ENV || 'production',
  port: process.env.PORT || 3000,
  dbUser: process.env.DATABASE_USER,
  dbPassword: process.env.DATABASE_PASSWORD,
  dbHost: process.env.DATABASE_HOST,
  dbName: process.env.DATABASE_NAME,
  dbPort: process.env.DATABASE_PORT,
  dbEngine: process.env.DATABASE_ENGINE, // postgres
  dbUrl: process.env.DATABASE_URL,
};

module.exports = {
  config,
};

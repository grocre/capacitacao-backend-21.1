require("dotenv").config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_NAME, 
      user: process.env.DATABASE_USER, 
      password: process.env.DATABASE_PASSWORD, 
      port: 5432, 
    }, 
    migrations: {
      tableName: "migrations", 
      directory: `${__dirname}/src/database/migrations`
    }, 
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  },
};

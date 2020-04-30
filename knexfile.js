// Update with your config settings.

module.exports = {

  development: {
    client: 'postgres',
    connection: {
      database: 'knex_teste',
      user:     'docker',
      password: 'password'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  },
};

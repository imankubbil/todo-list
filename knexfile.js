// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host : '127.0.0.1',
      database : 'db_todolist_dev',
      user : 'postgres',
      password : 'imankubbil'
    },
    pool : {
      min : 2,
      max : 10
    },
    migrations : {
      tableName : 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'db_todolist_staging',
      user:     'postgres',
      password: 'imankubbil'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

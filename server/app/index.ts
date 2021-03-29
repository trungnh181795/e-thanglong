const knex = require('knex')({
    client: 'pg',
    verion: '13.2',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: '123456',
        database: 'e-thanglong'
    }
});
module.exports = {
    development2: {
        client: process.env.DB_CLIENT,
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE
        },
        migrations: {
            directory: './server/database/migrations'
        },
        seeds: {
            directory: './server/database/seeds'
        }
    }
}
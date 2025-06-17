// knexfile.js
export const development = {
    client: 'sqlite3',
    connection: {
        filename: './db/db.sqlite',
    },
    migration: {
        directory: './db/migration',
    },
    useNullAsDefault: true,
};
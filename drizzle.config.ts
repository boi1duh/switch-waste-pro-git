export default {
    schema: './db/schema.ts',
    out: './migrations',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.NETLIFY_DATABASE_URL || process.env.DATABASE_URL || 'postgresql://localhost:5432/switchwaste'
    }
};
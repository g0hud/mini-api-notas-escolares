module.exports = {
  production: {
    client: 'postgresql',
    connection: process.env.DB_URL,
  }
}

var databaseUrl = process.env.MONGOLAB_URI || "mongodb://localhost:27017/node-webscraper";

module.exports = {
  database: databaseUrl
}
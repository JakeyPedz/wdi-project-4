var databaseUrl = process.env.MONGOLAB_URI || "mongodb://localhost:27017/node-webscraper";

module.exports = {
  database: databaseUrl
}


// config is for universal stuff that you can link to in all files (just in the backend)
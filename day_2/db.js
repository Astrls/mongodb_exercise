require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;

const uri = process.env.DB_CONNECT;
const client = new MongoClient(uri, { useNewUrlParser: true });

module.exports = client
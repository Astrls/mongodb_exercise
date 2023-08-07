const MongoClient = require("mongodb").MongoClient;
const express = require("express");
const app = express();
const port = 3000;
require('dotenv').config()
app.use(express.json());

const uri = process.env.DB_CONNECT
const client = new MongoClient(uri, { useNewUrlParser: true });



const collection = client.db("test").collection("students");

const insertData = async () => {
  try {
    const myData = await collection.insertOne({
      name: "TEST",
      age: 23,
      grade: "A",
    })
     console.log(myData)
  } catch (err) {
    console.log(err)
  }
};

// insertData()

const testFunction = async () => {
  try {
    const blaBla = await collection.find().toArray();
    return blaBla;
  } catch (err) {
    console.log(err);
  }
};

app.get("/", async (req, res) => {
  try {
    const result = await testFunction();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`connected on port http://localhost:${port}`);
});

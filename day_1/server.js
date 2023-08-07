// App setup and module imports
const MongoClient = require("mongodb").MongoClient;
const express = require("express");
const app = express();
const port = 3000;
require('dotenv').config()
app.use(express.json());

// MongoDB setup
const uri = process.env.DB_CONNECT
const client = new MongoClient(uri, { useNewUrlParser: true });

//Creating/linking to test DB and collection
const collection = client.db("test").collection("students");

// Inserting test data in our specified collection
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

//Calling the function
insertData()

//Function to get all the data from our collection
const getData = async () => {
  try {
    const blaBla = await collection.find().toArray();
    return blaBla;
  } catch (err) {
    console.log(err);
  }
};

//Testing a route for a GET request and displaying the data from the collection
app.get("/", async (req, res) => {
  try {
    const result = await getData();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

//Hosting the server in localhost
app.listen(port, () => {
  console.log(`connected on port http://localhost:${port}`);
});

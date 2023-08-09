// App setup and module imports
const MongoClient = require("mongodb").MongoClient;
const client = require("./db.js");
const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;
app.use(express.json());

//Importing Schemas
const usersSchema = require('./schemas/users_schema.js')
const postSchema = require('./schemas/post_schema.js')
const commSchema = require('./schemas/comment_schema.js')
const communitySchema = require('./schemas/community_schema.js')

//Function to create Collections
const createColl = async (collection,schema) => {
  try {
    await client.db("redditClone").createCollection(collection, schema);
    console.log("collection created");
  } catch {
    console.log("found collection");
  }
};

//Creating Collections with restrictive schemas
createColl("users",usersSchema);
createColl("posts",postSchema)
createColl("comments",commSchema)
createColl("communities",communitySchema)

//Adding data to users
const userColl = client.db("redditClone").collection("users");
userColl.insertMany([
  {
    username: "astru",
    firstname: "Antoine",
    lastname: "Stru",
    password: "test",
    email: "antoine@test.com",
  },
  {
    username: "johndoe",
    firstname: "John",
    lastname: "Doe",
    password: "test2",
    email: "jdoe@test.com",
  },
]);

//Adding data to posts
const postColl = client.db("redditClone").collection("posts");
postColl.insertMany([
  {
    user_id: '64d386dc12002579ba7cc2b1',
    title: "this is a test",
    body: "I'm a cute little bunny lalala",
    upvotes: 0,
    downvotes: 0
  },
  {
    user_id: '64d386dc12002579ba7cc2b1',
    title: "second test",
    body: "I prefer kittens",
    upvotes: 0,
    downvotes: 0
  },
]);

//Adding data to comments
const commColl = client.db("redditClone").collection("comments");
commColl.insertMany([
  {
    user_id: '64d386dc12002579ba7cc2b1',
    body: "I'm commenting",
    upvotes: 0,
    downvotes: 0,
    created_at: new Date(),
  },
  {
    user_id: '64d386dc12002579ba7cc2b1',
    body: "I disagree",
    upvotes: 0,
    downvotes: 0,
    created_at: new Date(),
  },
]);

//Adding data to comments
const communityColl = client.db("redditClone").collection("communities");
communityColl.insertMany([
  {
    name: "Videogames",
    created_at: new Date(),
    members: ["64d386dc12002579ba7cc2b1"]
  },
  {
    name: "Cat lovers",
    created_at: new Date(),
    members: ["64d386dc12002579ba7cc2b1","64d3965079756243f0369616"]
  },
]);

//Hosting the server in localhost
app.listen(port, () => {
  console.log(`connected on port http://localhost:${port}`);
});

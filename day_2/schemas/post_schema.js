const postSchema = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["user_id", "title", "body", "upvotes", "downvotes"],
      properties: {
        user_id: {
          bsonType: "string",
        },
        title: {
          bsonType: "string",
        },
        body: {
          bsonType: "string",
        },
        upvotes: {
          bsonType: "int",
        },
        downvotes: {
          bsonType: "int",
        },
      },
    },
  },
};

module.exports = postSchema;

const commSchema = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["user_id", "body", "upvotes", "downvotes", "created_at"],
      properties: {
        user_id: {
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
        created_at: {
          bsonType: "date",
        },
      },
    },
  },
};

module.exports = commSchema;

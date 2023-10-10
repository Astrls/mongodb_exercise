const communitySchema = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "created_at", "members"],
      properties: {
        name: {
          bsonType: "string",
        },
        created_at: {
          bsonType: "date",
        },
        members: {
          bsonType: "array",
          items: {
            bsonType: "string",
          },
        },
      },
    },
  },
};

module.exports = communitySchema;

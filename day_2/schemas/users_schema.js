 const usersSchema = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["username", "firstname", "lastname", "password", "email"],
      properties: {
        username: {
          bsonType: "string",
        },
        firstname: {
          bsonType: "string",
        },
        lastname: {
          bsonType: "string",
        },
        username: {
          bsonType: "string",
        },
        email: {
          bsonType: "string",
        },
      },
    },
  },
}

module.exports = usersSchema;

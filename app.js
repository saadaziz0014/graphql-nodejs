const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const { typeDefs } = require("./typeDef");
const { queries } = require("./queries");
const axios = require("axios");

async function startServer() {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());

  const apolloServer = new ApolloServer({
    typeDefs: typeDefs,

    resolvers: {
      Todo: {
        user: async (todo) => {
          const { data } = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${todo.userId}`
          );
          return data;
        },
      },
      Query: queries,
    },
  });

  await apolloServer.start();

  app.use("/graphql", expressMiddleware(apolloServer));

  app.listen(4000, () => {
    console.log("Server started on http://localhost:4000/graphql");
  });
}

startServer();

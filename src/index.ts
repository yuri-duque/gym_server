import express from "express";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";

import resolvers from "./resolvers/resolvers";
import { readSchemas } from "./utils/readSchemas";

dotenv.config();
const PORT = process.env.PORT;

async function startApolloServer() {
  console.log("🚀 Starting server...");

  const typeDefs = readSchemas("src/graphql/schemas");

  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();

  server.applyMiddleware({ app });

  await new Promise<void>((resolve) => app.listen({ port: PORT }, resolve));

  console.log(`🚀 http://localhost:${PORT}${server.graphqlPath}`);
}

startApolloServer();

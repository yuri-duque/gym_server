import express from "express";
import { readFileSync } from "fs";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";

import resolvers from "./resolvers";

dotenv.config();
const PORT = process.env.PORT;

const typeDefs = readFileSync("./schema.graphql", { encoding: "utf-8" });

async function startApolloServer() {
  console.log("🚀 Starting server...");

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

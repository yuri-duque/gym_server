import express from "express";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./src/schema";
import resolvers from "./src/resolvers";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT;

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

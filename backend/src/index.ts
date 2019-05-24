import "reflect-metadata";
import * as path from "path";
import { createConnection } from "typeorm";
import { GraphQLServer } from "graphql-yoga";
import { importSchema } from "graphql-import";
import { resolvers } from "./resolvers";

const port = process.env.PORT || 8080;
const typeDefs = importSchema(path.resolve("./src/schema.graphql"));
const server = new GraphQLServer({ typeDefs, resolvers });

createConnection()
  .then(() => {
    server.start({ port }, () =>
      console.log(`Server is running on localhost:${port}`)
    );
  })
  .catch(err => {
    console.log("***** Failed to establish a database connection. *****");
    console.log(err);
  });

import "reflect-metadata";
import * as path from "path";
import { createConnection, Connection } from "typeorm";
import { GraphQLServer } from "graphql-yoga";
import { importSchema } from "graphql-import";
import { resolvers } from "./resolvers";

const port = process.env.PORT || 8080;

export class App {
  public server: GraphQLServer;
  public db: Connection;
  private httpServer: any;

  public constructor(server: GraphQLServer, db: Connection) {
    this.server = server;
    this.db = db;
  }

  public async start(port: number | string): Promise<void> {
    this.httpServer = await this.server.start({ port });
  }

  public async stop(): Promise<void> {
    await this.httpServer.close();
  }
}

export async function appFactory(): Promise<App> {
  const typeDefs = importSchema(path.resolve("./src/schema.graphql"));

  let connection: Connection;
  try {
    connection = await createConnection();
  } catch (err) {
    throw new Error("***** Failed to establish a database connection. *****");
    // log additional errors
  }

  return new App(new GraphQLServer({ typeDefs, resolvers }), connection);
}

(async function() {
  const app = await appFactory();

  await app.start(port);

  console.log(`Server is running on localhost:${port}`);
})();

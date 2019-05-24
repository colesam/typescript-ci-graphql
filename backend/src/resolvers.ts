import { IResolvers } from "graphql-tools";
import { GQL } from "./types/graphql";

export const resolvers: IResolvers = {
  Query: {
    hello: (_, { name }: GQL.HelloOnQueryArguments) => `By ${name || "World"}`
  }
  // Mutation: {
  //   register: (_, { email, password }: GQL.IRegisterOnMutationArguments) => {}
  // }
};

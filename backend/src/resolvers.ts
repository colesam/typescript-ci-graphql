import { IResolvers } from "graphql-tools";

export const resolvers: IResolvers = {
  Query: {
    hello: (_, { name }: GQL.IHelloOnQueryArguments) => `By ${name || "World"}`
  }
  // Mutation: {
  //   register: (_, { email, password }: GQL.IRegisterOnMutationArguments) => {}
  // }
};

import { IResolvers } from "graphql-tools";
import { GQL } from "./types/graphql";
import * as bcrypt from "bcryptjs";
import { User } from "./entity/User";

export const resolvers: IResolvers = {
  Query: {
    hello: (_, { name }: GQL.HelloOnQueryArguments) => `By ${name || "World"}`
  },
  Mutation: {
    register: async (
      _,
      { email, password }: GQL.RegisterOnMutationArguments
    ) => {
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = User.create({
        email,
        password: hashedPassword
      });
      await user.save();

      return true;
    }
  }
};

// graphql typescript definitions

/* eslint-disable */
export namespace GQL {
  interface GraphQLResponseRoot {
    data?: Query | Mutation;
    errors?: GraphQLResponseError[];
  }

  interface GraphQLResponseError {
    /** Required for all errors */
    message: string;
    locations?: GraphQLResponseErrorLocation[];
    /** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
    [propName: string]: any;
  }

  interface GraphQLResponseErrorLocation {
    line: number;
    column: number;
  }

  interface Query {
    __typename: "Query";
    hello: string;
  }

  interface HelloOnQueryArguments {
    name?: string | null;
  }

  interface Mutation {
    __typename: "Mutation";
    register: boolean | null;
  }

  interface RegisterOnMutationArguments {
    email: string;
    password: string;
  }
}
/* eslint-enable */

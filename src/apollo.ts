import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

const isLogedIn = localStorage.getItem("isLogedIn");
export const isLoggedInVar = makeVar(Boolean(isLogedIn));

export const client = new ApolloClient({
  uri: "http://146.56.189.84:4000",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isLoggedIn: {
            read() {
              return isLoggedInVar();
            },
          },
        },
      },
    },
  }),
});

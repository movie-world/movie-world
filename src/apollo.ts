import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

const isLogedIn = localStorage.getItem("isLogedIn");
export const isLoggedInVar = makeVar(Boolean(isLogedIn));

export const client = new ApolloClient({
  uri: "https://movie-world-server.herokuapp.com/",
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

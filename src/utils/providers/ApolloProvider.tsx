"use client";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    "User-Agent": "Whyareyouu",
    authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN ?? ""}`,
  },
}));

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

interface ApolloClientProviderProps {
  children: React.ReactNode;
}

export const ApolloClientProvider = ({
  children,
}: ApolloClientProviderProps) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

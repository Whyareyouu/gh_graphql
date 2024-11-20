"use client";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: "https://graphql.anilist.co",
});

const client = new ApolloClient({
  link: httpLink,
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

import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client/core";

const cache = new InMemoryCache();

const link = new HttpLink({
    uri: "http://localhost:4000/",
});

const client = new ApolloClient({
    link,
    cache
})

export default client 
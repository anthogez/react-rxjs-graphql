import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { WPGraphQL_URI as uri } from "./config";

const cache = new InMemoryCache();
const link = new HttpLink({ uri });
const client = new ApolloClient({ cache, link });

export default client;

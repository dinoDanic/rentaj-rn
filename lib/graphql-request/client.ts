import { GraphQLClient } from "graphql-request";

const endpoint = "https://rentaj-be-dev.dinosur.app/api";
// const endpoint = "http://localhost:8090/api"

export const _client = new GraphQLClient(endpoint);

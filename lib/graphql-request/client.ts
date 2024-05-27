import { GraphQLClient } from "graphql-request"

const endpoint = "https://rentaj-be-dev.dinosur.app/api/graphql"
// const endpoint = "http://localhost:4000/api/graphql"

export const _client = new GraphQLClient(endpoint)

import AsyncStorage from "@react-native-async-storage/async-storage"
import { GraphQLClient, RequestMiddleware } from "graphql-request"

import { asyncStorage } from "../async-storage"

// const endpoint = "https://rentaj-be-dev.dinosur.app/api/graphql"
const endpoint = "http://167.235.150.40:4000/api/graphql"
// const endpoint = "http://192.168.10.162:4000/api/graphql"
// const endpoint = "http://172.20.10.1/api/graphql"
// const endpoint = "http://localhost:4000/api/graphql"

const requestMiddleware: RequestMiddleware = async (request) => {
  const token = await AsyncStorage.getItem(asyncStorage.token)

  if (token) {
    return {
      ...request,
      headers: { ...request.headers, Authorization: `Bearer ${token}` },
    }
  }
  return request
}

export const _client = new GraphQLClient(endpoint as string, {
  requestMiddleware,
})

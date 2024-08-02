import AsyncStorage from "@react-native-async-storage/async-storage"
import { GraphQLClient, RequestDocument, RequestMiddleware, RequestOptions, Variables } from "graphql-request"

import { asyncStorage } from "../async-storage"

// const endpoint = "https://rentaj-be-dev.dinosur.app/api/graphql";
// const endpoint = "http://167.235.150.40:4000/api/graphql";
// const endpoint = "http://192.168.10.162:4000/api/graphql";
// const endpoint = "http://172.20.10.1/api/graphql";
const endpoint = "http://localhost:4000/api/graphql"

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

class ExtendedGraphQLClient extends GraphQLClient {
  async customRequest<T = any, V extends Variables = Variables>(
    document: RequestDocument,
    variables?: V,
    requestHeaders?: Headers
  ): Promise<T> {
    try {
      return await super.request<T, V>({ document, variables, requestHeaders } as RequestOptions<V, T>)
    } catch (error: any) {
      console.log("errrrrrrrror", error)
      // Handle unauthorized error (e.g., redirect to login)
      throw error
    }
  }
}

const _client = new ExtendedGraphQLClient(endpoint, { requestMiddleware })

export { _client }

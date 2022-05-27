import { createClient } from "./genql"
import CONFIG from "config"

console.log("Creating http grahql client for indexer")
export const httpClient = createClient({
  url: CONFIG.GRAPHQL_ENDPOINT,
})

console.log("Creating ws grahql client for indexer")
export const wsClient = createClient({
  url: CONFIG.GRAPHQL_ENDPOINT.replace(/http[s]*:\/\//, "ws://"),
  batch: true,
})

/**
 * GraphQL request Gateway
 * @param {Promise} request - the request to be sent -- httpClient.query() instance
 * @param  {...Function} middlewares - the middlewares to be applied to the request data
 * @returns data - the data returned from the request and middlewares
 * @throws error - the error returned from the request and middlewares
 */
export const graph = async (request: any, ...middlewares: any) => {
  try {
    let data = await request
    for (const middleware of middlewares) {
      data = middleware(data)
    }
    return data
  } catch (err) {
    console.log("GRAPH ERROR - ")
    throw err
  }
}

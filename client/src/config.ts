const CONFIG = {
  GRAPHQL_ENDPOINT:
    process.env.REACT_APP_GRAPHQL_ENDPOINT ||
    "http://localhost:42000/v1/graphql",

  CONTRACTS: {
    CRYPTO_CREDIT:
      process.env.REACT_APP_CRPTO_CREDIT_CONTRACT ||
      "KT1CWyZrnJaabUbJLoab3MUj4Uj6i48jDG1A",
  },

  RPC_NODE_URL:
    process.env.REACT_APP_RPC_NODE_URL || "https://ithacanet.smartpy.io/",
}

export default CONFIG

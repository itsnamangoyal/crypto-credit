import {
  linkTypeMap,
  createClient as createClientOriginal,
  generateGraphqlOperation,
  assertSameVersion,
} from '@genql/runtime'
import types from './types.esm'
var typeMap = linkTypeMap(types)
export * from './guards.esm'

export var version = '2.10.0'
assertSameVersion(version)

export var createClient = function(options) {
  options = options || {}
  var optionsCopy = {
    url: 'http://localhost:42000/v1/graphql',
    queryRoot: typeMap.Query,
    mutationRoot: typeMap.Mutation,
    subscriptionRoot: typeMap.Subscription,
  }
  for (var name in options) {
    optionsCopy[name] = options[name]
  }
  return createClientOriginal(optionsCopy)
}

export const enumdipdupContractConstraint = {
  dipdup_contract_pkey: 'dipdup_contract_pkey',
}

export const enumdipdupContractMetadataConstraint = {
  dipdup_contract_metadata_pkey: 'dipdup_contract_metadata_pkey',
  uid_dipdup_cont_network_1ae32f: 'uid_dipdup_cont_network_1ae32f',
}

export const enumdipdupContractMetadataSelectColumn = {
  contract: 'contract',
  created_at: 'created_at',
  id: 'id',
  metadata: 'metadata',
  network: 'network',
  update_id: 'update_id',
  updated_at: 'updated_at',
}

export const enumdipdupContractMetadataUpdateColumn = {
  contract: 'contract',
  created_at: 'created_at',
  id: 'id',
  metadata: 'metadata',
  network: 'network',
  update_id: 'update_id',
  updated_at: 'updated_at',
}

export const enumdipdupContractSelectColumn = {
  address: 'address',
  created_at: 'created_at',
  name: 'name',
  typename: 'typename',
  updated_at: 'updated_at',
}

export const enumdipdupContractUpdateColumn = {
  address: 'address',
  created_at: 'created_at',
  name: 'name',
  typename: 'typename',
  updated_at: 'updated_at',
}

export const enumdipdupHeadConstraint = {
  dipdup_head_pkey: 'dipdup_head_pkey',
}

export const enumdipdupHeadSelectColumn = {
  created_at: 'created_at',
  hash: 'hash',
  level: 'level',
  name: 'name',
  timestamp: 'timestamp',
  updated_at: 'updated_at',
}

export const enumdipdupHeadStatusSelectColumn = {
  name: 'name',
  status: 'status',
}

export const enumdipdupHeadUpdateColumn = {
  created_at: 'created_at',
  hash: 'hash',
  level: 'level',
  name: 'name',
  timestamp: 'timestamp',
  updated_at: 'updated_at',
}

export const enumdipdupIndexConstraint = {
  dipdup_index_pkey: 'dipdup_index_pkey',
}

export const enumdipdupIndexSelectColumn = {
  config_hash: 'config_hash',
  created_at: 'created_at',
  level: 'level',
  name: 'name',
  status: 'status',
  template: 'template',
  template_values: 'template_values',
  type: 'type',
  updated_at: 'updated_at',
}

export const enumdipdupIndexUpdateColumn = {
  config_hash: 'config_hash',
  created_at: 'created_at',
  level: 'level',
  name: 'name',
  status: 'status',
  template: 'template',
  template_values: 'template_values',
  type: 'type',
  updated_at: 'updated_at',
}

export const enumdipdupSchemaConstraint = {
  dipdup_schema_pkey: 'dipdup_schema_pkey',
}

export const enumdipdupSchemaSelectColumn = {
  created_at: 'created_at',
  hash: 'hash',
  name: 'name',
  reindex: 'reindex',
  updated_at: 'updated_at',
}

export const enumdipdupSchemaUpdateColumn = {
  created_at: 'created_at',
  hash: 'hash',
  name: 'name',
  reindex: 'reindex',
  updated_at: 'updated_at',
}

export const enumdipdupTokenMetadataConstraint = {
  dipdup_token_metadata_pkey: 'dipdup_token_metadata_pkey',
  uid_dipdup_toke_network_5d1a25: 'uid_dipdup_toke_network_5d1a25',
}

export const enumdipdupTokenMetadataSelectColumn = {
  contract: 'contract',
  created_at: 'created_at',
  id: 'id',
  metadata: 'metadata',
  network: 'network',
  token_id: 'token_id',
  update_id: 'update_id',
  updated_at: 'updated_at',
}

export const enumdipdupTokenMetadataUpdateColumn = {
  contract: 'contract',
  created_at: 'created_at',
  id: 'id',
  metadata: 'metadata',
  network: 'network',
  token_id: 'token_id',
  update_id: 'update_id',
  updated_at: 'updated_at',
}

export const enumipfsConstraint = {
  ipfs_pkey: 'ipfs_pkey',
  ipfs_uri_key: 'ipfs_uri_key',
}

export const enumipfsSelectColumn = {
  creator: 'creator',
  description: 'description',
  id: 'id',
  image: 'image',
  name: 'name',
  symbol: 'symbol',
  thumbnail: 'thumbnail',
  uri: 'uri',
}

export const enumipfsUpdateColumn = {
  creator: 'creator',
  description: 'description',
  id: 'id',
  image: 'image',
  name: 'name',
  symbol: 'symbol',
  thumbnail: 'thumbnail',
  uri: 'uri',
}

export const enumlistingConstraint = {
  listing_pkey: 'listing_pkey',
}

export const enumlistingSelectColumn = {
  accepted: 'accepted',
  amount: 'amount',
  cancelled: 'cancelled',
  created_at: 'created_at',
  creator: 'creator',
  duration: 'duration',
  id: 'id',
  interest: 'interest',
  token_id: 'token_id',
}

export const enumlistingUpdateColumn = {
  accepted: 'accepted',
  amount: 'amount',
  cancelled: 'cancelled',
  created_at: 'created_at',
  creator: 'creator',
  duration: 'duration',
  id: 'id',
  interest: 'interest',
  token_id: 'token_id',
}

export const enumloanConstraint = {
  loan_pkey: 'loan_pkey',
  loan_token_id_key: 'loan_token_id_key',
}

export const enumloanSelectColumn = {
  duration: 'duration',
  id: 'id',
  interest: 'interest',
  lender: 'lender',
  loanee: 'loanee',
  principal_amount: 'principal_amount',
  repaid: 'repaid',
  start_time: 'start_time',
  token_id: 'token_id',
}

export const enumloanUpdateColumn = {
  duration: 'duration',
  id: 'id',
  interest: 'interest',
  lender: 'lender',
  loanee: 'loanee',
  principal_amount: 'principal_amount',
  repaid: 'repaid',
  start_time: 'start_time',
  token_id: 'token_id',
}

export const enumofferConstraint = {
  offer_pkey: 'offer_pkey',
}

export const enumofferSelectColumn = {
  accepted: 'accepted',
  amount: 'amount',
  cancelled: 'cancelled',
  created_at: 'created_at',
  creator: 'creator',
  duration: 'duration',
  id: 'id',
  interest: 'interest',
  listing_id: 'listing_id',
}

export const enumofferUpdateColumn = {
  accepted: 'accepted',
  amount: 'amount',
  cancelled: 'cancelled',
  created_at: 'created_at',
  creator: 'creator',
  duration: 'duration',
  id: 'id',
  interest: 'interest',
  listing_id: 'listing_id',
}

export const enumorderBy = {
  asc: 'asc',
  asc_nulls_first: 'asc_nulls_first',
  asc_nulls_last: 'asc_nulls_last',
  desc: 'desc',
  desc_nulls_first: 'desc_nulls_first',
  desc_nulls_last: 'desc_nulls_last',
}

export const enumtokenConstraint = {
  token_pkey: 'token_pkey',
}

export const enumtokenSelectColumn = {
  address: 'address',
  id: 'id',
  ipfs_id: 'ipfs_id',
  owner: 'owner',
  token_id: 'token_id',
  uid: 'uid',
}

export const enumtokenUpdateColumn = {
  address: 'address',
  id: 'id',
  ipfs_id: 'ipfs_id',
  owner: 'owner',
  token_id: 'token_id',
  uid: 'uid',
}

export var generateQueryOp = function(fields) {
  return generateGraphqlOperation('query', typeMap.Query, fields)
}
export var generateMutationOp = function(fields) {
  return generateGraphqlOperation('mutation', typeMap.Mutation, fields)
}
export var generateSubscriptionOp = function(fields) {
  return generateGraphqlOperation('subscription', typeMap.Subscription, fields)
}
export var everything = {
  __scalar: true,
}

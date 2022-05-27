import {
  FieldsSelection,
  GraphqlOperation,
  ClientOptions,
  Observable,
} from '@genql/runtime'
import { SubscriptionClient } from 'subscriptions-transport-ws'
export * from './schema'
import {
  query_rootRequest,
  query_rootPromiseChain,
  query_root,
  mutation_rootRequest,
  mutation_rootPromiseChain,
  mutation_root,
  subscription_rootRequest,
  subscription_rootObservableChain,
  subscription_root,
} from './schema'
export declare const createClient: (options?: ClientOptions) => Client
export declare const everything: { __scalar: boolean }
export declare const version: string

export interface Client {
  wsClient?: SubscriptionClient

  query<R extends query_rootRequest>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<query_root, R>>

  mutation<R extends mutation_rootRequest>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<mutation_root, R>>

  subscription<R extends subscription_rootRequest>(
    request: R & { __name?: string },
  ): Observable<FieldsSelection<subscription_root, R>>

  chain: {
    query: query_rootPromiseChain

    mutation: mutation_rootPromiseChain

    subscription: subscription_rootObservableChain
  }
}

export type QueryResult<fields extends query_rootRequest> = FieldsSelection<
  query_root,
  fields
>

export declare const generateQueryOp: (
  fields: query_rootRequest & { __name?: string },
) => GraphqlOperation
export type MutationResult<
  fields extends mutation_rootRequest
> = FieldsSelection<mutation_root, fields>

export declare const generateMutationOp: (
  fields: mutation_rootRequest & { __name?: string },
) => GraphqlOperation
export type SubscriptionResult<
  fields extends subscription_rootRequest
> = FieldsSelection<subscription_root, fields>

export declare const generateSubscriptionOp: (
  fields: subscription_rootRequest & { __name?: string },
) => GraphqlOperation

export declare const enumdipdupContractConstraint: {
  readonly dipdup_contract_pkey: 'dipdup_contract_pkey'
}

export declare const enumdipdupContractMetadataConstraint: {
  readonly dipdup_contract_metadata_pkey: 'dipdup_contract_metadata_pkey'
  readonly uid_dipdup_cont_network_1ae32f: 'uid_dipdup_cont_network_1ae32f'
}

export declare const enumdipdupContractMetadataSelectColumn: {
  readonly contract: 'contract'
  readonly created_at: 'created_at'
  readonly id: 'id'
  readonly metadata: 'metadata'
  readonly network: 'network'
  readonly update_id: 'update_id'
  readonly updated_at: 'updated_at'
}

export declare const enumdipdupContractMetadataUpdateColumn: {
  readonly contract: 'contract'
  readonly created_at: 'created_at'
  readonly id: 'id'
  readonly metadata: 'metadata'
  readonly network: 'network'
  readonly update_id: 'update_id'
  readonly updated_at: 'updated_at'
}

export declare const enumdipdupContractSelectColumn: {
  readonly address: 'address'
  readonly created_at: 'created_at'
  readonly name: 'name'
  readonly typename: 'typename'
  readonly updated_at: 'updated_at'
}

export declare const enumdipdupContractUpdateColumn: {
  readonly address: 'address'
  readonly created_at: 'created_at'
  readonly name: 'name'
  readonly typename: 'typename'
  readonly updated_at: 'updated_at'
}

export declare const enumdipdupHeadConstraint: {
  readonly dipdup_head_pkey: 'dipdup_head_pkey'
}

export declare const enumdipdupHeadSelectColumn: {
  readonly created_at: 'created_at'
  readonly hash: 'hash'
  readonly level: 'level'
  readonly name: 'name'
  readonly timestamp: 'timestamp'
  readonly updated_at: 'updated_at'
}

export declare const enumdipdupHeadStatusSelectColumn: {
  readonly name: 'name'
  readonly status: 'status'
}

export declare const enumdipdupHeadUpdateColumn: {
  readonly created_at: 'created_at'
  readonly hash: 'hash'
  readonly level: 'level'
  readonly name: 'name'
  readonly timestamp: 'timestamp'
  readonly updated_at: 'updated_at'
}

export declare const enumdipdupIndexConstraint: {
  readonly dipdup_index_pkey: 'dipdup_index_pkey'
}

export declare const enumdipdupIndexSelectColumn: {
  readonly config_hash: 'config_hash'
  readonly created_at: 'created_at'
  readonly level: 'level'
  readonly name: 'name'
  readonly status: 'status'
  readonly template: 'template'
  readonly template_values: 'template_values'
  readonly type: 'type'
  readonly updated_at: 'updated_at'
}

export declare const enumdipdupIndexUpdateColumn: {
  readonly config_hash: 'config_hash'
  readonly created_at: 'created_at'
  readonly level: 'level'
  readonly name: 'name'
  readonly status: 'status'
  readonly template: 'template'
  readonly template_values: 'template_values'
  readonly type: 'type'
  readonly updated_at: 'updated_at'
}

export declare const enumdipdupSchemaConstraint: {
  readonly dipdup_schema_pkey: 'dipdup_schema_pkey'
}

export declare const enumdipdupSchemaSelectColumn: {
  readonly created_at: 'created_at'
  readonly hash: 'hash'
  readonly name: 'name'
  readonly reindex: 'reindex'
  readonly updated_at: 'updated_at'
}

export declare const enumdipdupSchemaUpdateColumn: {
  readonly created_at: 'created_at'
  readonly hash: 'hash'
  readonly name: 'name'
  readonly reindex: 'reindex'
  readonly updated_at: 'updated_at'
}

export declare const enumdipdupTokenMetadataConstraint: {
  readonly dipdup_token_metadata_pkey: 'dipdup_token_metadata_pkey'
  readonly uid_dipdup_toke_network_5d1a25: 'uid_dipdup_toke_network_5d1a25'
}

export declare const enumdipdupTokenMetadataSelectColumn: {
  readonly contract: 'contract'
  readonly created_at: 'created_at'
  readonly id: 'id'
  readonly metadata: 'metadata'
  readonly network: 'network'
  readonly token_id: 'token_id'
  readonly update_id: 'update_id'
  readonly updated_at: 'updated_at'
}

export declare const enumdipdupTokenMetadataUpdateColumn: {
  readonly contract: 'contract'
  readonly created_at: 'created_at'
  readonly id: 'id'
  readonly metadata: 'metadata'
  readonly network: 'network'
  readonly token_id: 'token_id'
  readonly update_id: 'update_id'
  readonly updated_at: 'updated_at'
}

export declare const enumipfsConstraint: {
  readonly ipfs_pkey: 'ipfs_pkey'
  readonly ipfs_uri_key: 'ipfs_uri_key'
}

export declare const enumipfsSelectColumn: {
  readonly creator: 'creator'
  readonly description: 'description'
  readonly id: 'id'
  readonly image: 'image'
  readonly name: 'name'
  readonly symbol: 'symbol'
  readonly thumbnail: 'thumbnail'
  readonly uri: 'uri'
}

export declare const enumipfsUpdateColumn: {
  readonly creator: 'creator'
  readonly description: 'description'
  readonly id: 'id'
  readonly image: 'image'
  readonly name: 'name'
  readonly symbol: 'symbol'
  readonly thumbnail: 'thumbnail'
  readonly uri: 'uri'
}

export declare const enumlistingConstraint: {
  readonly listing_pkey: 'listing_pkey'
}

export declare const enumlistingSelectColumn: {
  readonly accepted: 'accepted'
  readonly amount: 'amount'
  readonly cancelled: 'cancelled'
  readonly created_at: 'created_at'
  readonly creator: 'creator'
  readonly duration: 'duration'
  readonly id: 'id'
  readonly interest: 'interest'
  readonly token_id: 'token_id'
}

export declare const enumlistingUpdateColumn: {
  readonly accepted: 'accepted'
  readonly amount: 'amount'
  readonly cancelled: 'cancelled'
  readonly created_at: 'created_at'
  readonly creator: 'creator'
  readonly duration: 'duration'
  readonly id: 'id'
  readonly interest: 'interest'
  readonly token_id: 'token_id'
}

export declare const enumloanConstraint: {
  readonly loan_pkey: 'loan_pkey'
  readonly loan_token_id_key: 'loan_token_id_key'
}

export declare const enumloanSelectColumn: {
  readonly duration: 'duration'
  readonly id: 'id'
  readonly interest: 'interest'
  readonly lender: 'lender'
  readonly loanee: 'loanee'
  readonly principal_amount: 'principal_amount'
  readonly repaid: 'repaid'
  readonly start_time: 'start_time'
  readonly token_id: 'token_id'
}

export declare const enumloanUpdateColumn: {
  readonly duration: 'duration'
  readonly id: 'id'
  readonly interest: 'interest'
  readonly lender: 'lender'
  readonly loanee: 'loanee'
  readonly principal_amount: 'principal_amount'
  readonly repaid: 'repaid'
  readonly start_time: 'start_time'
  readonly token_id: 'token_id'
}

export declare const enumofferConstraint: {
  readonly offer_pkey: 'offer_pkey'
}

export declare const enumofferSelectColumn: {
  readonly accepted: 'accepted'
  readonly amount: 'amount'
  readonly cancelled: 'cancelled'
  readonly created_at: 'created_at'
  readonly creator: 'creator'
  readonly duration: 'duration'
  readonly id: 'id'
  readonly interest: 'interest'
  readonly listing_id: 'listing_id'
}

export declare const enumofferUpdateColumn: {
  readonly accepted: 'accepted'
  readonly amount: 'amount'
  readonly cancelled: 'cancelled'
  readonly created_at: 'created_at'
  readonly creator: 'creator'
  readonly duration: 'duration'
  readonly id: 'id'
  readonly interest: 'interest'
  readonly listing_id: 'listing_id'
}

export declare const enumorderBy: {
  readonly asc: 'asc'
  readonly asc_nulls_first: 'asc_nulls_first'
  readonly asc_nulls_last: 'asc_nulls_last'
  readonly desc: 'desc'
  readonly desc_nulls_first: 'desc_nulls_first'
  readonly desc_nulls_last: 'desc_nulls_last'
}

export declare const enumtokenConstraint: {
  readonly token_pkey: 'token_pkey'
}

export declare const enumtokenSelectColumn: {
  readonly address: 'address'
  readonly id: 'id'
  readonly ipfs_id: 'ipfs_id'
  readonly owner: 'owner'
  readonly token_id: 'token_id'
  readonly uid: 'uid'
}

export declare const enumtokenUpdateColumn: {
  readonly address: 'address'
  readonly id: 'id'
  readonly ipfs_id: 'ipfs_id'
  readonly owner: 'owner'
  readonly token_id: 'token_id'
  readonly uid: 'uid'
}

import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    Boolean: boolean,
    Float: number,
    Int: number,
    String: string,
    jsonb: any,
    timestamptz: any,
}


/** columns and relationships of "dipdup_contract" */
export interface dipdup_contract {
    address: Scalars['String']
    created_at: Scalars['timestamptz']
    name: Scalars['String']
    typename?: Scalars['String']
    updated_at: Scalars['timestamptz']
    __typename: 'dipdup_contract'
}


/** aggregated selection of "dipdup_contract" */
export interface dipdup_contract_aggregate {
    aggregate?: dipdup_contract_aggregate_fields
    nodes: dipdup_contract[]
    __typename: 'dipdup_contract_aggregate'
}


/** aggregate fields of "dipdup_contract" */
export interface dipdup_contract_aggregate_fields {
    count: Scalars['Int']
    max?: dipdup_contract_max_fields
    min?: dipdup_contract_min_fields
    __typename: 'dipdup_contract_aggregate_fields'
}


/** unique or primary key constraints on table "dipdup_contract" */
export type dipdup_contract_constraint = 'dipdup_contract_pkey'


/** aggregate max on columns */
export interface dipdup_contract_max_fields {
    address?: Scalars['String']
    created_at?: Scalars['timestamptz']
    name?: Scalars['String']
    typename?: Scalars['String']
    updated_at?: Scalars['timestamptz']
    __typename: 'dipdup_contract_max_fields'
}


/** columns and relationships of "dipdup_contract_metadata" */
export interface dipdup_contract_metadata {
    contract: Scalars['String']
    created_at: Scalars['timestamptz']
    id: Scalars['Int']
    metadata: Scalars['jsonb']
    network: Scalars['String']
    update_id: Scalars['Int']
    updated_at: Scalars['timestamptz']
    __typename: 'dipdup_contract_metadata'
}


/** aggregated selection of "dipdup_contract_metadata" */
export interface dipdup_contract_metadata_aggregate {
    aggregate?: dipdup_contract_metadata_aggregate_fields
    nodes: dipdup_contract_metadata[]
    __typename: 'dipdup_contract_metadata_aggregate'
}


/** aggregate fields of "dipdup_contract_metadata" */
export interface dipdup_contract_metadata_aggregate_fields {
    avg?: dipdup_contract_metadata_avg_fields
    count: Scalars['Int']
    max?: dipdup_contract_metadata_max_fields
    min?: dipdup_contract_metadata_min_fields
    stddev?: dipdup_contract_metadata_stddev_fields
    stddev_pop?: dipdup_contract_metadata_stddev_pop_fields
    stddev_samp?: dipdup_contract_metadata_stddev_samp_fields
    sum?: dipdup_contract_metadata_sum_fields
    var_pop?: dipdup_contract_metadata_var_pop_fields
    var_samp?: dipdup_contract_metadata_var_samp_fields
    variance?: dipdup_contract_metadata_variance_fields
    __typename: 'dipdup_contract_metadata_aggregate_fields'
}


/** aggregate avg on columns */
export interface dipdup_contract_metadata_avg_fields {
    id?: Scalars['Float']
    update_id?: Scalars['Float']
    __typename: 'dipdup_contract_metadata_avg_fields'
}


/** unique or primary key constraints on table "dipdup_contract_metadata" */
export type dipdup_contract_metadata_constraint = 'dipdup_contract_metadata_pkey' | 'uid_dipdup_cont_network_1ae32f'


/** aggregate max on columns */
export interface dipdup_contract_metadata_max_fields {
    contract?: Scalars['String']
    created_at?: Scalars['timestamptz']
    id?: Scalars['Int']
    network?: Scalars['String']
    update_id?: Scalars['Int']
    updated_at?: Scalars['timestamptz']
    __typename: 'dipdup_contract_metadata_max_fields'
}


/** aggregate min on columns */
export interface dipdup_contract_metadata_min_fields {
    contract?: Scalars['String']
    created_at?: Scalars['timestamptz']
    id?: Scalars['Int']
    network?: Scalars['String']
    update_id?: Scalars['Int']
    updated_at?: Scalars['timestamptz']
    __typename: 'dipdup_contract_metadata_min_fields'
}


/** response of any mutation on the table "dipdup_contract_metadata" */
export interface dipdup_contract_metadata_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: dipdup_contract_metadata[]
    __typename: 'dipdup_contract_metadata_mutation_response'
}


/** select columns of table "dipdup_contract_metadata" */
export type dipdup_contract_metadata_select_column = 'contract' | 'created_at' | 'id' | 'metadata' | 'network' | 'update_id' | 'updated_at'


/** aggregate stddev on columns */
export interface dipdup_contract_metadata_stddev_fields {
    id?: Scalars['Float']
    update_id?: Scalars['Float']
    __typename: 'dipdup_contract_metadata_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface dipdup_contract_metadata_stddev_pop_fields {
    id?: Scalars['Float']
    update_id?: Scalars['Float']
    __typename: 'dipdup_contract_metadata_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface dipdup_contract_metadata_stddev_samp_fields {
    id?: Scalars['Float']
    update_id?: Scalars['Float']
    __typename: 'dipdup_contract_metadata_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface dipdup_contract_metadata_sum_fields {
    id?: Scalars['Int']
    update_id?: Scalars['Int']
    __typename: 'dipdup_contract_metadata_sum_fields'
}


/** update columns of table "dipdup_contract_metadata" */
export type dipdup_contract_metadata_update_column = 'contract' | 'created_at' | 'id' | 'metadata' | 'network' | 'update_id' | 'updated_at'


/** aggregate var_pop on columns */
export interface dipdup_contract_metadata_var_pop_fields {
    id?: Scalars['Float']
    update_id?: Scalars['Float']
    __typename: 'dipdup_contract_metadata_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface dipdup_contract_metadata_var_samp_fields {
    id?: Scalars['Float']
    update_id?: Scalars['Float']
    __typename: 'dipdup_contract_metadata_var_samp_fields'
}


/** aggregate variance on columns */
export interface dipdup_contract_metadata_variance_fields {
    id?: Scalars['Float']
    update_id?: Scalars['Float']
    __typename: 'dipdup_contract_metadata_variance_fields'
}


/** aggregate min on columns */
export interface dipdup_contract_min_fields {
    address?: Scalars['String']
    created_at?: Scalars['timestamptz']
    name?: Scalars['String']
    typename?: Scalars['String']
    updated_at?: Scalars['timestamptz']
    __typename: 'dipdup_contract_min_fields'
}


/** response of any mutation on the table "dipdup_contract" */
export interface dipdup_contract_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: dipdup_contract[]
    __typename: 'dipdup_contract_mutation_response'
}


/** select columns of table "dipdup_contract" */
export type dipdup_contract_select_column = 'address' | 'created_at' | 'name' | 'typename' | 'updated_at'


/** update columns of table "dipdup_contract" */
export type dipdup_contract_update_column = 'address' | 'created_at' | 'name' | 'typename' | 'updated_at'


/** columns and relationships of "dipdup_head" */
export interface dipdup_head {
    created_at: Scalars['timestamptz']
    hash: Scalars['String']
    level: Scalars['Int']
    name: Scalars['String']
    timestamp: Scalars['timestamptz']
    updated_at: Scalars['timestamptz']
    __typename: 'dipdup_head'
}


/** aggregated selection of "dipdup_head" */
export interface dipdup_head_aggregate {
    aggregate?: dipdup_head_aggregate_fields
    nodes: dipdup_head[]
    __typename: 'dipdup_head_aggregate'
}


/** aggregate fields of "dipdup_head" */
export interface dipdup_head_aggregate_fields {
    avg?: dipdup_head_avg_fields
    count: Scalars['Int']
    max?: dipdup_head_max_fields
    min?: dipdup_head_min_fields
    stddev?: dipdup_head_stddev_fields
    stddev_pop?: dipdup_head_stddev_pop_fields
    stddev_samp?: dipdup_head_stddev_samp_fields
    sum?: dipdup_head_sum_fields
    var_pop?: dipdup_head_var_pop_fields
    var_samp?: dipdup_head_var_samp_fields
    variance?: dipdup_head_variance_fields
    __typename: 'dipdup_head_aggregate_fields'
}


/** aggregate avg on columns */
export interface dipdup_head_avg_fields {
    level?: Scalars['Float']
    __typename: 'dipdup_head_avg_fields'
}


/** unique or primary key constraints on table "dipdup_head" */
export type dipdup_head_constraint = 'dipdup_head_pkey'


/** aggregate max on columns */
export interface dipdup_head_max_fields {
    created_at?: Scalars['timestamptz']
    hash?: Scalars['String']
    level?: Scalars['Int']
    name?: Scalars['String']
    timestamp?: Scalars['timestamptz']
    updated_at?: Scalars['timestamptz']
    __typename: 'dipdup_head_max_fields'
}


/** aggregate min on columns */
export interface dipdup_head_min_fields {
    created_at?: Scalars['timestamptz']
    hash?: Scalars['String']
    level?: Scalars['Int']
    name?: Scalars['String']
    timestamp?: Scalars['timestamptz']
    updated_at?: Scalars['timestamptz']
    __typename: 'dipdup_head_min_fields'
}


/** response of any mutation on the table "dipdup_head" */
export interface dipdup_head_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: dipdup_head[]
    __typename: 'dipdup_head_mutation_response'
}


/** select columns of table "dipdup_head" */
export type dipdup_head_select_column = 'created_at' | 'hash' | 'level' | 'name' | 'timestamp' | 'updated_at'


/** columns and relationships of "dipdup_head_status" */
export interface dipdup_head_status {
    name?: Scalars['String']
    status?: Scalars['String']
    __typename: 'dipdup_head_status'
}


/** aggregated selection of "dipdup_head_status" */
export interface dipdup_head_status_aggregate {
    aggregate?: dipdup_head_status_aggregate_fields
    nodes: dipdup_head_status[]
    __typename: 'dipdup_head_status_aggregate'
}


/** aggregate fields of "dipdup_head_status" */
export interface dipdup_head_status_aggregate_fields {
    count: Scalars['Int']
    max?: dipdup_head_status_max_fields
    min?: dipdup_head_status_min_fields
    __typename: 'dipdup_head_status_aggregate_fields'
}


/** aggregate max on columns */
export interface dipdup_head_status_max_fields {
    name?: Scalars['String']
    status?: Scalars['String']
    __typename: 'dipdup_head_status_max_fields'
}


/** aggregate min on columns */
export interface dipdup_head_status_min_fields {
    name?: Scalars['String']
    status?: Scalars['String']
    __typename: 'dipdup_head_status_min_fields'
}


/** response of any mutation on the table "dipdup_head_status" */
export interface dipdup_head_status_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: dipdup_head_status[]
    __typename: 'dipdup_head_status_mutation_response'
}


/** select columns of table "dipdup_head_status" */
export type dipdup_head_status_select_column = 'name' | 'status'


/** aggregate stddev on columns */
export interface dipdup_head_stddev_fields {
    level?: Scalars['Float']
    __typename: 'dipdup_head_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface dipdup_head_stddev_pop_fields {
    level?: Scalars['Float']
    __typename: 'dipdup_head_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface dipdup_head_stddev_samp_fields {
    level?: Scalars['Float']
    __typename: 'dipdup_head_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface dipdup_head_sum_fields {
    level?: Scalars['Int']
    __typename: 'dipdup_head_sum_fields'
}


/** update columns of table "dipdup_head" */
export type dipdup_head_update_column = 'created_at' | 'hash' | 'level' | 'name' | 'timestamp' | 'updated_at'


/** aggregate var_pop on columns */
export interface dipdup_head_var_pop_fields {
    level?: Scalars['Float']
    __typename: 'dipdup_head_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface dipdup_head_var_samp_fields {
    level?: Scalars['Float']
    __typename: 'dipdup_head_var_samp_fields'
}


/** aggregate variance on columns */
export interface dipdup_head_variance_fields {
    level?: Scalars['Float']
    __typename: 'dipdup_head_variance_fields'
}


/** columns and relationships of "dipdup_index" */
export interface dipdup_index {
    config_hash: Scalars['String']
    created_at: Scalars['timestamptz']
    level: Scalars['Int']
    name: Scalars['String']
    /** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
    status: Scalars['String']
    template?: Scalars['String']
    template_values?: Scalars['jsonb']
    /** operation: operation\nbig_map: big_map\nhead: head\ntoken_transfer: token_transfer */
    type: Scalars['String']
    updated_at: Scalars['timestamptz']
    __typename: 'dipdup_index'
}


/** aggregated selection of "dipdup_index" */
export interface dipdup_index_aggregate {
    aggregate?: dipdup_index_aggregate_fields
    nodes: dipdup_index[]
    __typename: 'dipdup_index_aggregate'
}


/** aggregate fields of "dipdup_index" */
export interface dipdup_index_aggregate_fields {
    avg?: dipdup_index_avg_fields
    count: Scalars['Int']
    max?: dipdup_index_max_fields
    min?: dipdup_index_min_fields
    stddev?: dipdup_index_stddev_fields
    stddev_pop?: dipdup_index_stddev_pop_fields
    stddev_samp?: dipdup_index_stddev_samp_fields
    sum?: dipdup_index_sum_fields
    var_pop?: dipdup_index_var_pop_fields
    var_samp?: dipdup_index_var_samp_fields
    variance?: dipdup_index_variance_fields
    __typename: 'dipdup_index_aggregate_fields'
}


/** aggregate avg on columns */
export interface dipdup_index_avg_fields {
    level?: Scalars['Float']
    __typename: 'dipdup_index_avg_fields'
}


/** unique or primary key constraints on table "dipdup_index" */
export type dipdup_index_constraint = 'dipdup_index_pkey'


/** aggregate max on columns */
export interface dipdup_index_max_fields {
    config_hash?: Scalars['String']
    created_at?: Scalars['timestamptz']
    level?: Scalars['Int']
    name?: Scalars['String']
    /** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
    status?: Scalars['String']
    template?: Scalars['String']
    /** operation: operation\nbig_map: big_map\nhead: head\ntoken_transfer: token_transfer */
    type?: Scalars['String']
    updated_at?: Scalars['timestamptz']
    __typename: 'dipdup_index_max_fields'
}


/** aggregate min on columns */
export interface dipdup_index_min_fields {
    config_hash?: Scalars['String']
    created_at?: Scalars['timestamptz']
    level?: Scalars['Int']
    name?: Scalars['String']
    /** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
    status?: Scalars['String']
    template?: Scalars['String']
    /** operation: operation\nbig_map: big_map\nhead: head\ntoken_transfer: token_transfer */
    type?: Scalars['String']
    updated_at?: Scalars['timestamptz']
    __typename: 'dipdup_index_min_fields'
}


/** response of any mutation on the table "dipdup_index" */
export interface dipdup_index_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: dipdup_index[]
    __typename: 'dipdup_index_mutation_response'
}


/** select columns of table "dipdup_index" */
export type dipdup_index_select_column = 'config_hash' | 'created_at' | 'level' | 'name' | 'status' | 'template' | 'template_values' | 'type' | 'updated_at'


/** aggregate stddev on columns */
export interface dipdup_index_stddev_fields {
    level?: Scalars['Float']
    __typename: 'dipdup_index_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface dipdup_index_stddev_pop_fields {
    level?: Scalars['Float']
    __typename: 'dipdup_index_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface dipdup_index_stddev_samp_fields {
    level?: Scalars['Float']
    __typename: 'dipdup_index_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface dipdup_index_sum_fields {
    level?: Scalars['Int']
    __typename: 'dipdup_index_sum_fields'
}


/** update columns of table "dipdup_index" */
export type dipdup_index_update_column = 'config_hash' | 'created_at' | 'level' | 'name' | 'status' | 'template' | 'template_values' | 'type' | 'updated_at'


/** aggregate var_pop on columns */
export interface dipdup_index_var_pop_fields {
    level?: Scalars['Float']
    __typename: 'dipdup_index_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface dipdup_index_var_samp_fields {
    level?: Scalars['Float']
    __typename: 'dipdup_index_var_samp_fields'
}


/** aggregate variance on columns */
export interface dipdup_index_variance_fields {
    level?: Scalars['Float']
    __typename: 'dipdup_index_variance_fields'
}


/** columns and relationships of "dipdup_schema" */
export interface dipdup_schema {
    created_at: Scalars['timestamptz']
    hash: Scalars['String']
    name: Scalars['String']
    /** manual: manual\nmigration: migration\nrollback: rollback\nconfig_modified: config_modified\nschema_modified: schema_modified */
    reindex?: Scalars['String']
    updated_at: Scalars['timestamptz']
    __typename: 'dipdup_schema'
}


/** aggregated selection of "dipdup_schema" */
export interface dipdup_schema_aggregate {
    aggregate?: dipdup_schema_aggregate_fields
    nodes: dipdup_schema[]
    __typename: 'dipdup_schema_aggregate'
}


/** aggregate fields of "dipdup_schema" */
export interface dipdup_schema_aggregate_fields {
    count: Scalars['Int']
    max?: dipdup_schema_max_fields
    min?: dipdup_schema_min_fields
    __typename: 'dipdup_schema_aggregate_fields'
}


/** unique or primary key constraints on table "dipdup_schema" */
export type dipdup_schema_constraint = 'dipdup_schema_pkey'


/** aggregate max on columns */
export interface dipdup_schema_max_fields {
    created_at?: Scalars['timestamptz']
    hash?: Scalars['String']
    name?: Scalars['String']
    /** manual: manual\nmigration: migration\nrollback: rollback\nconfig_modified: config_modified\nschema_modified: schema_modified */
    reindex?: Scalars['String']
    updated_at?: Scalars['timestamptz']
    __typename: 'dipdup_schema_max_fields'
}


/** aggregate min on columns */
export interface dipdup_schema_min_fields {
    created_at?: Scalars['timestamptz']
    hash?: Scalars['String']
    name?: Scalars['String']
    /** manual: manual\nmigration: migration\nrollback: rollback\nconfig_modified: config_modified\nschema_modified: schema_modified */
    reindex?: Scalars['String']
    updated_at?: Scalars['timestamptz']
    __typename: 'dipdup_schema_min_fields'
}


/** response of any mutation on the table "dipdup_schema" */
export interface dipdup_schema_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: dipdup_schema[]
    __typename: 'dipdup_schema_mutation_response'
}


/** select columns of table "dipdup_schema" */
export type dipdup_schema_select_column = 'created_at' | 'hash' | 'name' | 'reindex' | 'updated_at'


/** update columns of table "dipdup_schema" */
export type dipdup_schema_update_column = 'created_at' | 'hash' | 'name' | 'reindex' | 'updated_at'


/** columns and relationships of "dipdup_token_metadata" */
export interface dipdup_token_metadata {
    contract: Scalars['String']
    created_at: Scalars['timestamptz']
    id: Scalars['Int']
    metadata: Scalars['jsonb']
    network: Scalars['String']
    token_id: Scalars['String']
    update_id: Scalars['Int']
    updated_at: Scalars['timestamptz']
    __typename: 'dipdup_token_metadata'
}


/** aggregated selection of "dipdup_token_metadata" */
export interface dipdup_token_metadata_aggregate {
    aggregate?: dipdup_token_metadata_aggregate_fields
    nodes: dipdup_token_metadata[]
    __typename: 'dipdup_token_metadata_aggregate'
}


/** aggregate fields of "dipdup_token_metadata" */
export interface dipdup_token_metadata_aggregate_fields {
    avg?: dipdup_token_metadata_avg_fields
    count: Scalars['Int']
    max?: dipdup_token_metadata_max_fields
    min?: dipdup_token_metadata_min_fields
    stddev?: dipdup_token_metadata_stddev_fields
    stddev_pop?: dipdup_token_metadata_stddev_pop_fields
    stddev_samp?: dipdup_token_metadata_stddev_samp_fields
    sum?: dipdup_token_metadata_sum_fields
    var_pop?: dipdup_token_metadata_var_pop_fields
    var_samp?: dipdup_token_metadata_var_samp_fields
    variance?: dipdup_token_metadata_variance_fields
    __typename: 'dipdup_token_metadata_aggregate_fields'
}


/** aggregate avg on columns */
export interface dipdup_token_metadata_avg_fields {
    id?: Scalars['Float']
    update_id?: Scalars['Float']
    __typename: 'dipdup_token_metadata_avg_fields'
}


/** unique or primary key constraints on table "dipdup_token_metadata" */
export type dipdup_token_metadata_constraint = 'dipdup_token_metadata_pkey' | 'uid_dipdup_toke_network_5d1a25'


/** aggregate max on columns */
export interface dipdup_token_metadata_max_fields {
    contract?: Scalars['String']
    created_at?: Scalars['timestamptz']
    id?: Scalars['Int']
    network?: Scalars['String']
    token_id?: Scalars['String']
    update_id?: Scalars['Int']
    updated_at?: Scalars['timestamptz']
    __typename: 'dipdup_token_metadata_max_fields'
}


/** aggregate min on columns */
export interface dipdup_token_metadata_min_fields {
    contract?: Scalars['String']
    created_at?: Scalars['timestamptz']
    id?: Scalars['Int']
    network?: Scalars['String']
    token_id?: Scalars['String']
    update_id?: Scalars['Int']
    updated_at?: Scalars['timestamptz']
    __typename: 'dipdup_token_metadata_min_fields'
}


/** response of any mutation on the table "dipdup_token_metadata" */
export interface dipdup_token_metadata_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: dipdup_token_metadata[]
    __typename: 'dipdup_token_metadata_mutation_response'
}


/** select columns of table "dipdup_token_metadata" */
export type dipdup_token_metadata_select_column = 'contract' | 'created_at' | 'id' | 'metadata' | 'network' | 'token_id' | 'update_id' | 'updated_at'


/** aggregate stddev on columns */
export interface dipdup_token_metadata_stddev_fields {
    id?: Scalars['Float']
    update_id?: Scalars['Float']
    __typename: 'dipdup_token_metadata_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface dipdup_token_metadata_stddev_pop_fields {
    id?: Scalars['Float']
    update_id?: Scalars['Float']
    __typename: 'dipdup_token_metadata_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface dipdup_token_metadata_stddev_samp_fields {
    id?: Scalars['Float']
    update_id?: Scalars['Float']
    __typename: 'dipdup_token_metadata_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface dipdup_token_metadata_sum_fields {
    id?: Scalars['Int']
    update_id?: Scalars['Int']
    __typename: 'dipdup_token_metadata_sum_fields'
}


/** update columns of table "dipdup_token_metadata" */
export type dipdup_token_metadata_update_column = 'contract' | 'created_at' | 'id' | 'metadata' | 'network' | 'token_id' | 'update_id' | 'updated_at'


/** aggregate var_pop on columns */
export interface dipdup_token_metadata_var_pop_fields {
    id?: Scalars['Float']
    update_id?: Scalars['Float']
    __typename: 'dipdup_token_metadata_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface dipdup_token_metadata_var_samp_fields {
    id?: Scalars['Float']
    update_id?: Scalars['Float']
    __typename: 'dipdup_token_metadata_var_samp_fields'
}


/** aggregate variance on columns */
export interface dipdup_token_metadata_variance_fields {
    id?: Scalars['Float']
    update_id?: Scalars['Float']
    __typename: 'dipdup_token_metadata_variance_fields'
}


/** columns and relationships of "ipfs" */
export interface ipfs {
    creator: Scalars['String']
    description: Scalars['String']
    id: Scalars['Int']
    image: Scalars['String']
    name: Scalars['String']
    symbol: Scalars['String']
    thumbnail: Scalars['String']
    /** An array relationship */
    token: token[]
    /** An aggregate relationship */
    token_aggregate: token_aggregate
    uri: Scalars['String']
    __typename: 'ipfs'
}


/** aggregated selection of "ipfs" */
export interface ipfs_aggregate {
    aggregate?: ipfs_aggregate_fields
    nodes: ipfs[]
    __typename: 'ipfs_aggregate'
}


/** aggregate fields of "ipfs" */
export interface ipfs_aggregate_fields {
    avg?: ipfs_avg_fields
    count: Scalars['Int']
    max?: ipfs_max_fields
    min?: ipfs_min_fields
    stddev?: ipfs_stddev_fields
    stddev_pop?: ipfs_stddev_pop_fields
    stddev_samp?: ipfs_stddev_samp_fields
    sum?: ipfs_sum_fields
    var_pop?: ipfs_var_pop_fields
    var_samp?: ipfs_var_samp_fields
    variance?: ipfs_variance_fields
    __typename: 'ipfs_aggregate_fields'
}


/** aggregate avg on columns */
export interface ipfs_avg_fields {
    id?: Scalars['Float']
    __typename: 'ipfs_avg_fields'
}


/** unique or primary key constraints on table "ipfs" */
export type ipfs_constraint = 'ipfs_pkey' | 'ipfs_uri_key'


/** aggregate max on columns */
export interface ipfs_max_fields {
    creator?: Scalars['String']
    description?: Scalars['String']
    id?: Scalars['Int']
    image?: Scalars['String']
    name?: Scalars['String']
    symbol?: Scalars['String']
    thumbnail?: Scalars['String']
    uri?: Scalars['String']
    __typename: 'ipfs_max_fields'
}


/** aggregate min on columns */
export interface ipfs_min_fields {
    creator?: Scalars['String']
    description?: Scalars['String']
    id?: Scalars['Int']
    image?: Scalars['String']
    name?: Scalars['String']
    symbol?: Scalars['String']
    thumbnail?: Scalars['String']
    uri?: Scalars['String']
    __typename: 'ipfs_min_fields'
}


/** response of any mutation on the table "ipfs" */
export interface ipfs_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: ipfs[]
    __typename: 'ipfs_mutation_response'
}


/** select columns of table "ipfs" */
export type ipfs_select_column = 'creator' | 'description' | 'id' | 'image' | 'name' | 'symbol' | 'thumbnail' | 'uri'


/** aggregate stddev on columns */
export interface ipfs_stddev_fields {
    id?: Scalars['Float']
    __typename: 'ipfs_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface ipfs_stddev_pop_fields {
    id?: Scalars['Float']
    __typename: 'ipfs_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface ipfs_stddev_samp_fields {
    id?: Scalars['Float']
    __typename: 'ipfs_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface ipfs_sum_fields {
    id?: Scalars['Int']
    __typename: 'ipfs_sum_fields'
}


/** update columns of table "ipfs" */
export type ipfs_update_column = 'creator' | 'description' | 'id' | 'image' | 'name' | 'symbol' | 'thumbnail' | 'uri'


/** aggregate var_pop on columns */
export interface ipfs_var_pop_fields {
    id?: Scalars['Float']
    __typename: 'ipfs_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface ipfs_var_samp_fields {
    id?: Scalars['Float']
    __typename: 'ipfs_var_samp_fields'
}


/** aggregate variance on columns */
export interface ipfs_variance_fields {
    id?: Scalars['Float']
    __typename: 'ipfs_variance_fields'
}


/** columns and relationships of "listing" */
export interface listing {
    accepted: Scalars['Boolean']
    amount: Scalars['Int']
    cancelled: Scalars['Boolean']
    created_at: Scalars['timestamptz']
    creator: Scalars['String']
    duration: Scalars['Int']
    id: Scalars['Int']
    interest: Scalars['Int']
    /** An array relationship */
    offers: offer[]
    /** An aggregate relationship */
    offers_aggregate: offer_aggregate
    /** An object relationship */
    token: token
    token_id: Scalars['Int']
    __typename: 'listing'
}


/** aggregated selection of "listing" */
export interface listing_aggregate {
    aggregate?: listing_aggregate_fields
    nodes: listing[]
    __typename: 'listing_aggregate'
}


/** aggregate fields of "listing" */
export interface listing_aggregate_fields {
    avg?: listing_avg_fields
    count: Scalars['Int']
    max?: listing_max_fields
    min?: listing_min_fields
    stddev?: listing_stddev_fields
    stddev_pop?: listing_stddev_pop_fields
    stddev_samp?: listing_stddev_samp_fields
    sum?: listing_sum_fields
    var_pop?: listing_var_pop_fields
    var_samp?: listing_var_samp_fields
    variance?: listing_variance_fields
    __typename: 'listing_aggregate_fields'
}


/** aggregate avg on columns */
export interface listing_avg_fields {
    amount?: Scalars['Float']
    duration?: Scalars['Float']
    id?: Scalars['Float']
    interest?: Scalars['Float']
    token_id?: Scalars['Float']
    __typename: 'listing_avg_fields'
}


/** unique or primary key constraints on table "listing" */
export type listing_constraint = 'listing_pkey'


/** aggregate max on columns */
export interface listing_max_fields {
    amount?: Scalars['Int']
    created_at?: Scalars['timestamptz']
    creator?: Scalars['String']
    duration?: Scalars['Int']
    id?: Scalars['Int']
    interest?: Scalars['Int']
    token_id?: Scalars['Int']
    __typename: 'listing_max_fields'
}


/** aggregate min on columns */
export interface listing_min_fields {
    amount?: Scalars['Int']
    created_at?: Scalars['timestamptz']
    creator?: Scalars['String']
    duration?: Scalars['Int']
    id?: Scalars['Int']
    interest?: Scalars['Int']
    token_id?: Scalars['Int']
    __typename: 'listing_min_fields'
}


/** response of any mutation on the table "listing" */
export interface listing_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: listing[]
    __typename: 'listing_mutation_response'
}


/** select columns of table "listing" */
export type listing_select_column = 'accepted' | 'amount' | 'cancelled' | 'created_at' | 'creator' | 'duration' | 'id' | 'interest' | 'token_id'


/** aggregate stddev on columns */
export interface listing_stddev_fields {
    amount?: Scalars['Float']
    duration?: Scalars['Float']
    id?: Scalars['Float']
    interest?: Scalars['Float']
    token_id?: Scalars['Float']
    __typename: 'listing_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface listing_stddev_pop_fields {
    amount?: Scalars['Float']
    duration?: Scalars['Float']
    id?: Scalars['Float']
    interest?: Scalars['Float']
    token_id?: Scalars['Float']
    __typename: 'listing_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface listing_stddev_samp_fields {
    amount?: Scalars['Float']
    duration?: Scalars['Float']
    id?: Scalars['Float']
    interest?: Scalars['Float']
    token_id?: Scalars['Float']
    __typename: 'listing_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface listing_sum_fields {
    amount?: Scalars['Int']
    duration?: Scalars['Int']
    id?: Scalars['Int']
    interest?: Scalars['Int']
    token_id?: Scalars['Int']
    __typename: 'listing_sum_fields'
}


/** update columns of table "listing" */
export type listing_update_column = 'accepted' | 'amount' | 'cancelled' | 'created_at' | 'creator' | 'duration' | 'id' | 'interest' | 'token_id'


/** aggregate var_pop on columns */
export interface listing_var_pop_fields {
    amount?: Scalars['Float']
    duration?: Scalars['Float']
    id?: Scalars['Float']
    interest?: Scalars['Float']
    token_id?: Scalars['Float']
    __typename: 'listing_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface listing_var_samp_fields {
    amount?: Scalars['Float']
    duration?: Scalars['Float']
    id?: Scalars['Float']
    interest?: Scalars['Float']
    token_id?: Scalars['Float']
    __typename: 'listing_var_samp_fields'
}


/** aggregate variance on columns */
export interface listing_variance_fields {
    amount?: Scalars['Float']
    duration?: Scalars['Float']
    id?: Scalars['Float']
    interest?: Scalars['Float']
    token_id?: Scalars['Float']
    __typename: 'listing_variance_fields'
}


/** columns and relationships of "loan" */
export interface loan {
    duration: Scalars['Int']
    id: Scalars['Int']
    interest: Scalars['Int']
    lender: Scalars['String']
    loanee: Scalars['String']
    principal_amount: Scalars['Int']
    repaid?: Scalars['Boolean']
    start_time: Scalars['timestamptz']
    /** An object relationship */
    token: token
    token_id: Scalars['Int']
    __typename: 'loan'
}


/** aggregated selection of "loan" */
export interface loan_aggregate {
    aggregate?: loan_aggregate_fields
    nodes: loan[]
    __typename: 'loan_aggregate'
}


/** aggregate fields of "loan" */
export interface loan_aggregate_fields {
    avg?: loan_avg_fields
    count: Scalars['Int']
    max?: loan_max_fields
    min?: loan_min_fields
    stddev?: loan_stddev_fields
    stddev_pop?: loan_stddev_pop_fields
    stddev_samp?: loan_stddev_samp_fields
    sum?: loan_sum_fields
    var_pop?: loan_var_pop_fields
    var_samp?: loan_var_samp_fields
    variance?: loan_variance_fields
    __typename: 'loan_aggregate_fields'
}


/** aggregate avg on columns */
export interface loan_avg_fields {
    duration?: Scalars['Float']
    id?: Scalars['Float']
    interest?: Scalars['Float']
    principal_amount?: Scalars['Float']
    token_id?: Scalars['Float']
    __typename: 'loan_avg_fields'
}


/** unique or primary key constraints on table "loan" */
export type loan_constraint = 'loan_pkey' | 'loan_token_id_key'


/** aggregate max on columns */
export interface loan_max_fields {
    duration?: Scalars['Int']
    id?: Scalars['Int']
    interest?: Scalars['Int']
    lender?: Scalars['String']
    loanee?: Scalars['String']
    principal_amount?: Scalars['Int']
    start_time?: Scalars['timestamptz']
    token_id?: Scalars['Int']
    __typename: 'loan_max_fields'
}


/** aggregate min on columns */
export interface loan_min_fields {
    duration?: Scalars['Int']
    id?: Scalars['Int']
    interest?: Scalars['Int']
    lender?: Scalars['String']
    loanee?: Scalars['String']
    principal_amount?: Scalars['Int']
    start_time?: Scalars['timestamptz']
    token_id?: Scalars['Int']
    __typename: 'loan_min_fields'
}


/** response of any mutation on the table "loan" */
export interface loan_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: loan[]
    __typename: 'loan_mutation_response'
}


/** select columns of table "loan" */
export type loan_select_column = 'duration' | 'id' | 'interest' | 'lender' | 'loanee' | 'principal_amount' | 'repaid' | 'start_time' | 'token_id'


/** aggregate stddev on columns */
export interface loan_stddev_fields {
    duration?: Scalars['Float']
    id?: Scalars['Float']
    interest?: Scalars['Float']
    principal_amount?: Scalars['Float']
    token_id?: Scalars['Float']
    __typename: 'loan_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface loan_stddev_pop_fields {
    duration?: Scalars['Float']
    id?: Scalars['Float']
    interest?: Scalars['Float']
    principal_amount?: Scalars['Float']
    token_id?: Scalars['Float']
    __typename: 'loan_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface loan_stddev_samp_fields {
    duration?: Scalars['Float']
    id?: Scalars['Float']
    interest?: Scalars['Float']
    principal_amount?: Scalars['Float']
    token_id?: Scalars['Float']
    __typename: 'loan_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface loan_sum_fields {
    duration?: Scalars['Int']
    id?: Scalars['Int']
    interest?: Scalars['Int']
    principal_amount?: Scalars['Int']
    token_id?: Scalars['Int']
    __typename: 'loan_sum_fields'
}


/** update columns of table "loan" */
export type loan_update_column = 'duration' | 'id' | 'interest' | 'lender' | 'loanee' | 'principal_amount' | 'repaid' | 'start_time' | 'token_id'


/** aggregate var_pop on columns */
export interface loan_var_pop_fields {
    duration?: Scalars['Float']
    id?: Scalars['Float']
    interest?: Scalars['Float']
    principal_amount?: Scalars['Float']
    token_id?: Scalars['Float']
    __typename: 'loan_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface loan_var_samp_fields {
    duration?: Scalars['Float']
    id?: Scalars['Float']
    interest?: Scalars['Float']
    principal_amount?: Scalars['Float']
    token_id?: Scalars['Float']
    __typename: 'loan_var_samp_fields'
}


/** aggregate variance on columns */
export interface loan_variance_fields {
    duration?: Scalars['Float']
    id?: Scalars['Float']
    interest?: Scalars['Float']
    principal_amount?: Scalars['Float']
    token_id?: Scalars['Float']
    __typename: 'loan_variance_fields'
}


/** mutation root */
export interface mutation_root {
    /** delete data from the table: "dipdup_contract" */
    delete_dipdup_contract?: dipdup_contract_mutation_response
    /** delete single row from the table: "dipdup_contract" */
    delete_dipdup_contract_by_pk?: dipdup_contract
    /** delete data from the table: "dipdup_contract_metadata" */
    delete_dipdup_contract_metadata?: dipdup_contract_metadata_mutation_response
    /** delete single row from the table: "dipdup_contract_metadata" */
    delete_dipdup_contract_metadata_by_pk?: dipdup_contract_metadata
    /** delete data from the table: "dipdup_head" */
    delete_dipdup_head?: dipdup_head_mutation_response
    /** delete single row from the table: "dipdup_head" */
    delete_dipdup_head_by_pk?: dipdup_head
    /** delete data from the table: "dipdup_head_status" */
    delete_dipdup_head_status?: dipdup_head_status_mutation_response
    /** delete data from the table: "dipdup_index" */
    delete_dipdup_index?: dipdup_index_mutation_response
    /** delete single row from the table: "dipdup_index" */
    delete_dipdup_index_by_pk?: dipdup_index
    /** delete data from the table: "dipdup_schema" */
    delete_dipdup_schema?: dipdup_schema_mutation_response
    /** delete single row from the table: "dipdup_schema" */
    delete_dipdup_schema_by_pk?: dipdup_schema
    /** delete data from the table: "dipdup_token_metadata" */
    delete_dipdup_token_metadata?: dipdup_token_metadata_mutation_response
    /** delete single row from the table: "dipdup_token_metadata" */
    delete_dipdup_token_metadata_by_pk?: dipdup_token_metadata
    /** delete data from the table: "ipfs" */
    delete_ipfs?: ipfs_mutation_response
    /** delete single row from the table: "ipfs" */
    delete_ipfs_by_pk?: ipfs
    /** delete data from the table: "listing" */
    delete_listing?: listing_mutation_response
    /** delete single row from the table: "listing" */
    delete_listing_by_pk?: listing
    /** delete data from the table: "loan" */
    delete_loan?: loan_mutation_response
    /** delete single row from the table: "loan" */
    delete_loan_by_pk?: loan
    /** delete data from the table: "offer" */
    delete_offer?: offer_mutation_response
    /** delete single row from the table: "offer" */
    delete_offer_by_pk?: offer
    /** delete data from the table: "token" */
    delete_token?: token_mutation_response
    /** delete single row from the table: "token" */
    delete_token_by_pk?: token
    /** insert data into the table: "dipdup_contract" */
    insert_dipdup_contract?: dipdup_contract_mutation_response
    /** insert data into the table: "dipdup_contract_metadata" */
    insert_dipdup_contract_metadata?: dipdup_contract_metadata_mutation_response
    /** insert a single row into the table: "dipdup_contract_metadata" */
    insert_dipdup_contract_metadata_one?: dipdup_contract_metadata
    /** insert a single row into the table: "dipdup_contract" */
    insert_dipdup_contract_one?: dipdup_contract
    /** insert data into the table: "dipdup_head" */
    insert_dipdup_head?: dipdup_head_mutation_response
    /** insert a single row into the table: "dipdup_head" */
    insert_dipdup_head_one?: dipdup_head
    /** insert data into the table: "dipdup_head_status" */
    insert_dipdup_head_status?: dipdup_head_status_mutation_response
    /** insert a single row into the table: "dipdup_head_status" */
    insert_dipdup_head_status_one?: dipdup_head_status
    /** insert data into the table: "dipdup_index" */
    insert_dipdup_index?: dipdup_index_mutation_response
    /** insert a single row into the table: "dipdup_index" */
    insert_dipdup_index_one?: dipdup_index
    /** insert data into the table: "dipdup_schema" */
    insert_dipdup_schema?: dipdup_schema_mutation_response
    /** insert a single row into the table: "dipdup_schema" */
    insert_dipdup_schema_one?: dipdup_schema
    /** insert data into the table: "dipdup_token_metadata" */
    insert_dipdup_token_metadata?: dipdup_token_metadata_mutation_response
    /** insert a single row into the table: "dipdup_token_metadata" */
    insert_dipdup_token_metadata_one?: dipdup_token_metadata
    /** insert data into the table: "ipfs" */
    insert_ipfs?: ipfs_mutation_response
    /** insert a single row into the table: "ipfs" */
    insert_ipfs_one?: ipfs
    /** insert data into the table: "listing" */
    insert_listing?: listing_mutation_response
    /** insert a single row into the table: "listing" */
    insert_listing_one?: listing
    /** insert data into the table: "loan" */
    insert_loan?: loan_mutation_response
    /** insert a single row into the table: "loan" */
    insert_loan_one?: loan
    /** insert data into the table: "offer" */
    insert_offer?: offer_mutation_response
    /** insert a single row into the table: "offer" */
    insert_offer_one?: offer
    /** insert data into the table: "token" */
    insert_token?: token_mutation_response
    /** insert a single row into the table: "token" */
    insert_token_one?: token
    /** update data of the table: "dipdup_contract" */
    update_dipdup_contract?: dipdup_contract_mutation_response
    /** update single row of the table: "dipdup_contract" */
    update_dipdup_contract_by_pk?: dipdup_contract
    /** update data of the table: "dipdup_contract_metadata" */
    update_dipdup_contract_metadata?: dipdup_contract_metadata_mutation_response
    /** update single row of the table: "dipdup_contract_metadata" */
    update_dipdup_contract_metadata_by_pk?: dipdup_contract_metadata
    /** update data of the table: "dipdup_head" */
    update_dipdup_head?: dipdup_head_mutation_response
    /** update single row of the table: "dipdup_head" */
    update_dipdup_head_by_pk?: dipdup_head
    /** update data of the table: "dipdup_head_status" */
    update_dipdup_head_status?: dipdup_head_status_mutation_response
    /** update data of the table: "dipdup_index" */
    update_dipdup_index?: dipdup_index_mutation_response
    /** update single row of the table: "dipdup_index" */
    update_dipdup_index_by_pk?: dipdup_index
    /** update data of the table: "dipdup_schema" */
    update_dipdup_schema?: dipdup_schema_mutation_response
    /** update single row of the table: "dipdup_schema" */
    update_dipdup_schema_by_pk?: dipdup_schema
    /** update data of the table: "dipdup_token_metadata" */
    update_dipdup_token_metadata?: dipdup_token_metadata_mutation_response
    /** update single row of the table: "dipdup_token_metadata" */
    update_dipdup_token_metadata_by_pk?: dipdup_token_metadata
    /** update data of the table: "ipfs" */
    update_ipfs?: ipfs_mutation_response
    /** update single row of the table: "ipfs" */
    update_ipfs_by_pk?: ipfs
    /** update data of the table: "listing" */
    update_listing?: listing_mutation_response
    /** update single row of the table: "listing" */
    update_listing_by_pk?: listing
    /** update data of the table: "loan" */
    update_loan?: loan_mutation_response
    /** update single row of the table: "loan" */
    update_loan_by_pk?: loan
    /** update data of the table: "offer" */
    update_offer?: offer_mutation_response
    /** update single row of the table: "offer" */
    update_offer_by_pk?: offer
    /** update data of the table: "token" */
    update_token?: token_mutation_response
    /** update single row of the table: "token" */
    update_token_by_pk?: token
    __typename: 'mutation_root'
}


/** columns and relationships of "offer" */
export interface offer {
    accepted: Scalars['Boolean']
    amount: Scalars['Int']
    cancelled: Scalars['Boolean']
    created_at: Scalars['timestamptz']
    creator: Scalars['String']
    duration: Scalars['Int']
    id: Scalars['Int']
    interest: Scalars['Int']
    /** An object relationship */
    listing: listing
    listing_id: Scalars['Int']
    __typename: 'offer'
}


/** aggregated selection of "offer" */
export interface offer_aggregate {
    aggregate?: offer_aggregate_fields
    nodes: offer[]
    __typename: 'offer_aggregate'
}


/** aggregate fields of "offer" */
export interface offer_aggregate_fields {
    avg?: offer_avg_fields
    count: Scalars['Int']
    max?: offer_max_fields
    min?: offer_min_fields
    stddev?: offer_stddev_fields
    stddev_pop?: offer_stddev_pop_fields
    stddev_samp?: offer_stddev_samp_fields
    sum?: offer_sum_fields
    var_pop?: offer_var_pop_fields
    var_samp?: offer_var_samp_fields
    variance?: offer_variance_fields
    __typename: 'offer_aggregate_fields'
}


/** aggregate avg on columns */
export interface offer_avg_fields {
    amount?: Scalars['Float']
    duration?: Scalars['Float']
    id?: Scalars['Float']
    interest?: Scalars['Float']
    listing_id?: Scalars['Float']
    __typename: 'offer_avg_fields'
}


/** unique or primary key constraints on table "offer" */
export type offer_constraint = 'offer_pkey'


/** aggregate max on columns */
export interface offer_max_fields {
    amount?: Scalars['Int']
    created_at?: Scalars['timestamptz']
    creator?: Scalars['String']
    duration?: Scalars['Int']
    id?: Scalars['Int']
    interest?: Scalars['Int']
    listing_id?: Scalars['Int']
    __typename: 'offer_max_fields'
}


/** aggregate min on columns */
export interface offer_min_fields {
    amount?: Scalars['Int']
    created_at?: Scalars['timestamptz']
    creator?: Scalars['String']
    duration?: Scalars['Int']
    id?: Scalars['Int']
    interest?: Scalars['Int']
    listing_id?: Scalars['Int']
    __typename: 'offer_min_fields'
}


/** response of any mutation on the table "offer" */
export interface offer_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: offer[]
    __typename: 'offer_mutation_response'
}


/** select columns of table "offer" */
export type offer_select_column = 'accepted' | 'amount' | 'cancelled' | 'created_at' | 'creator' | 'duration' | 'id' | 'interest' | 'listing_id'


/** aggregate stddev on columns */
export interface offer_stddev_fields {
    amount?: Scalars['Float']
    duration?: Scalars['Float']
    id?: Scalars['Float']
    interest?: Scalars['Float']
    listing_id?: Scalars['Float']
    __typename: 'offer_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface offer_stddev_pop_fields {
    amount?: Scalars['Float']
    duration?: Scalars['Float']
    id?: Scalars['Float']
    interest?: Scalars['Float']
    listing_id?: Scalars['Float']
    __typename: 'offer_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface offer_stddev_samp_fields {
    amount?: Scalars['Float']
    duration?: Scalars['Float']
    id?: Scalars['Float']
    interest?: Scalars['Float']
    listing_id?: Scalars['Float']
    __typename: 'offer_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface offer_sum_fields {
    amount?: Scalars['Int']
    duration?: Scalars['Int']
    id?: Scalars['Int']
    interest?: Scalars['Int']
    listing_id?: Scalars['Int']
    __typename: 'offer_sum_fields'
}


/** update columns of table "offer" */
export type offer_update_column = 'accepted' | 'amount' | 'cancelled' | 'created_at' | 'creator' | 'duration' | 'id' | 'interest' | 'listing_id'


/** aggregate var_pop on columns */
export interface offer_var_pop_fields {
    amount?: Scalars['Float']
    duration?: Scalars['Float']
    id?: Scalars['Float']
    interest?: Scalars['Float']
    listing_id?: Scalars['Float']
    __typename: 'offer_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface offer_var_samp_fields {
    amount?: Scalars['Float']
    duration?: Scalars['Float']
    id?: Scalars['Float']
    interest?: Scalars['Float']
    listing_id?: Scalars['Float']
    __typename: 'offer_var_samp_fields'
}


/** aggregate variance on columns */
export interface offer_variance_fields {
    amount?: Scalars['Float']
    duration?: Scalars['Float']
    id?: Scalars['Float']
    interest?: Scalars['Float']
    listing_id?: Scalars['Float']
    __typename: 'offer_variance_fields'
}


/** column ordering options */
export type order_by = 'asc' | 'asc_nulls_first' | 'asc_nulls_last' | 'desc' | 'desc_nulls_first' | 'desc_nulls_last'

export interface query_root {
    /** fetch data from the table: "dipdup_contract" */
    dipdup_contract: dipdup_contract[]
    /** fetch aggregated fields from the table: "dipdup_contract" */
    dipdup_contract_aggregate: dipdup_contract_aggregate
    /** fetch data from the table: "dipdup_contract" using primary key columns */
    dipdup_contract_by_pk?: dipdup_contract
    /** fetch data from the table: "dipdup_contract_metadata" */
    dipdup_contract_metadata: dipdup_contract_metadata[]
    /** fetch aggregated fields from the table: "dipdup_contract_metadata" */
    dipdup_contract_metadata_aggregate: dipdup_contract_metadata_aggregate
    /** fetch data from the table: "dipdup_contract_metadata" using primary key columns */
    dipdup_contract_metadata_by_pk?: dipdup_contract_metadata
    /** fetch data from the table: "dipdup_head" */
    dipdup_head: dipdup_head[]
    /** fetch aggregated fields from the table: "dipdup_head" */
    dipdup_head_aggregate: dipdup_head_aggregate
    /** fetch data from the table: "dipdup_head" using primary key columns */
    dipdup_head_by_pk?: dipdup_head
    /** fetch data from the table: "dipdup_head_status" */
    dipdup_head_status: dipdup_head_status[]
    /** fetch aggregated fields from the table: "dipdup_head_status" */
    dipdup_head_status_aggregate: dipdup_head_status_aggregate
    /** fetch data from the table: "dipdup_index" */
    dipdup_index: dipdup_index[]
    /** fetch aggregated fields from the table: "dipdup_index" */
    dipdup_index_aggregate: dipdup_index_aggregate
    /** fetch data from the table: "dipdup_index" using primary key columns */
    dipdup_index_by_pk?: dipdup_index
    /** fetch data from the table: "dipdup_schema" */
    dipdup_schema: dipdup_schema[]
    /** fetch aggregated fields from the table: "dipdup_schema" */
    dipdup_schema_aggregate: dipdup_schema_aggregate
    /** fetch data from the table: "dipdup_schema" using primary key columns */
    dipdup_schema_by_pk?: dipdup_schema
    /** fetch data from the table: "dipdup_token_metadata" */
    dipdup_token_metadata: dipdup_token_metadata[]
    /** fetch aggregated fields from the table: "dipdup_token_metadata" */
    dipdup_token_metadata_aggregate: dipdup_token_metadata_aggregate
    /** fetch data from the table: "dipdup_token_metadata" using primary key columns */
    dipdup_token_metadata_by_pk?: dipdup_token_metadata
    /** fetch data from the table: "ipfs" */
    ipfs: ipfs[]
    /** fetch aggregated fields from the table: "ipfs" */
    ipfs_aggregate: ipfs_aggregate
    /** fetch data from the table: "ipfs" using primary key columns */
    ipfs_by_pk?: ipfs
    /** An array relationship */
    listing: listing[]
    /** An aggregate relationship */
    listing_aggregate: listing_aggregate
    /** fetch data from the table: "listing" using primary key columns */
    listing_by_pk?: listing
    /** An array relationship */
    loan: loan[]
    /** An aggregate relationship */
    loan_aggregate: loan_aggregate
    /** fetch data from the table: "loan" using primary key columns */
    loan_by_pk?: loan
    /** fetch data from the table: "offer" */
    offer: offer[]
    /** fetch aggregated fields from the table: "offer" */
    offer_aggregate: offer_aggregate
    /** fetch data from the table: "offer" using primary key columns */
    offer_by_pk?: offer
    /** An array relationship */
    token: token[]
    /** An aggregate relationship */
    token_aggregate: token_aggregate
    /** fetch data from the table: "token" using primary key columns */
    token_by_pk?: token
    __typename: 'query_root'
}

export interface subscription_root {
    /** fetch data from the table: "dipdup_contract" */
    dipdup_contract: dipdup_contract[]
    /** fetch aggregated fields from the table: "dipdup_contract" */
    dipdup_contract_aggregate: dipdup_contract_aggregate
    /** fetch data from the table: "dipdup_contract" using primary key columns */
    dipdup_contract_by_pk?: dipdup_contract
    /** fetch data from the table: "dipdup_contract_metadata" */
    dipdup_contract_metadata: dipdup_contract_metadata[]
    /** fetch aggregated fields from the table: "dipdup_contract_metadata" */
    dipdup_contract_metadata_aggregate: dipdup_contract_metadata_aggregate
    /** fetch data from the table: "dipdup_contract_metadata" using primary key columns */
    dipdup_contract_metadata_by_pk?: dipdup_contract_metadata
    /** fetch data from the table: "dipdup_head" */
    dipdup_head: dipdup_head[]
    /** fetch aggregated fields from the table: "dipdup_head" */
    dipdup_head_aggregate: dipdup_head_aggregate
    /** fetch data from the table: "dipdup_head" using primary key columns */
    dipdup_head_by_pk?: dipdup_head
    /** fetch data from the table: "dipdup_head_status" */
    dipdup_head_status: dipdup_head_status[]
    /** fetch aggregated fields from the table: "dipdup_head_status" */
    dipdup_head_status_aggregate: dipdup_head_status_aggregate
    /** fetch data from the table: "dipdup_index" */
    dipdup_index: dipdup_index[]
    /** fetch aggregated fields from the table: "dipdup_index" */
    dipdup_index_aggregate: dipdup_index_aggregate
    /** fetch data from the table: "dipdup_index" using primary key columns */
    dipdup_index_by_pk?: dipdup_index
    /** fetch data from the table: "dipdup_schema" */
    dipdup_schema: dipdup_schema[]
    /** fetch aggregated fields from the table: "dipdup_schema" */
    dipdup_schema_aggregate: dipdup_schema_aggregate
    /** fetch data from the table: "dipdup_schema" using primary key columns */
    dipdup_schema_by_pk?: dipdup_schema
    /** fetch data from the table: "dipdup_token_metadata" */
    dipdup_token_metadata: dipdup_token_metadata[]
    /** fetch aggregated fields from the table: "dipdup_token_metadata" */
    dipdup_token_metadata_aggregate: dipdup_token_metadata_aggregate
    /** fetch data from the table: "dipdup_token_metadata" using primary key columns */
    dipdup_token_metadata_by_pk?: dipdup_token_metadata
    /** fetch data from the table: "ipfs" */
    ipfs: ipfs[]
    /** fetch aggregated fields from the table: "ipfs" */
    ipfs_aggregate: ipfs_aggregate
    /** fetch data from the table: "ipfs" using primary key columns */
    ipfs_by_pk?: ipfs
    /** An array relationship */
    listing: listing[]
    /** An aggregate relationship */
    listing_aggregate: listing_aggregate
    /** fetch data from the table: "listing" using primary key columns */
    listing_by_pk?: listing
    /** An array relationship */
    loan: loan[]
    /** An aggregate relationship */
    loan_aggregate: loan_aggregate
    /** fetch data from the table: "loan" using primary key columns */
    loan_by_pk?: loan
    /** fetch data from the table: "offer" */
    offer: offer[]
    /** fetch aggregated fields from the table: "offer" */
    offer_aggregate: offer_aggregate
    /** fetch data from the table: "offer" using primary key columns */
    offer_by_pk?: offer
    /** An array relationship */
    token: token[]
    /** An aggregate relationship */
    token_aggregate: token_aggregate
    /** fetch data from the table: "token" using primary key columns */
    token_by_pk?: token
    __typename: 'subscription_root'
}


/** columns and relationships of "token" */
export interface token {
    address: Scalars['String']
    id: Scalars['Int']
    /** An object relationship */
    ipfs?: ipfs
    ipfs_id?: Scalars['Int']
    /** An array relationship */
    listing: listing[]
    /** An aggregate relationship */
    listing_aggregate: listing_aggregate
    /** An array relationship */
    loan: loan[]
    /** An aggregate relationship */
    loan_aggregate: loan_aggregate
    owner: Scalars['String']
    token_id: Scalars['Int']
    uid: Scalars['Int']
    __typename: 'token'
}


/** aggregated selection of "token" */
export interface token_aggregate {
    aggregate?: token_aggregate_fields
    nodes: token[]
    __typename: 'token_aggregate'
}


/** aggregate fields of "token" */
export interface token_aggregate_fields {
    avg?: token_avg_fields
    count: Scalars['Int']
    max?: token_max_fields
    min?: token_min_fields
    stddev?: token_stddev_fields
    stddev_pop?: token_stddev_pop_fields
    stddev_samp?: token_stddev_samp_fields
    sum?: token_sum_fields
    var_pop?: token_var_pop_fields
    var_samp?: token_var_samp_fields
    variance?: token_variance_fields
    __typename: 'token_aggregate_fields'
}


/** aggregate avg on columns */
export interface token_avg_fields {
    id?: Scalars['Float']
    ipfs_id?: Scalars['Float']
    token_id?: Scalars['Float']
    uid?: Scalars['Float']
    __typename: 'token_avg_fields'
}


/** unique or primary key constraints on table "token" */
export type token_constraint = 'token_pkey'


/** aggregate max on columns */
export interface token_max_fields {
    address?: Scalars['String']
    id?: Scalars['Int']
    ipfs_id?: Scalars['Int']
    owner?: Scalars['String']
    token_id?: Scalars['Int']
    uid?: Scalars['Int']
    __typename: 'token_max_fields'
}


/** aggregate min on columns */
export interface token_min_fields {
    address?: Scalars['String']
    id?: Scalars['Int']
    ipfs_id?: Scalars['Int']
    owner?: Scalars['String']
    token_id?: Scalars['Int']
    uid?: Scalars['Int']
    __typename: 'token_min_fields'
}


/** response of any mutation on the table "token" */
export interface token_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: token[]
    __typename: 'token_mutation_response'
}


/** select columns of table "token" */
export type token_select_column = 'address' | 'id' | 'ipfs_id' | 'owner' | 'token_id' | 'uid'


/** aggregate stddev on columns */
export interface token_stddev_fields {
    id?: Scalars['Float']
    ipfs_id?: Scalars['Float']
    token_id?: Scalars['Float']
    uid?: Scalars['Float']
    __typename: 'token_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface token_stddev_pop_fields {
    id?: Scalars['Float']
    ipfs_id?: Scalars['Float']
    token_id?: Scalars['Float']
    uid?: Scalars['Float']
    __typename: 'token_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface token_stddev_samp_fields {
    id?: Scalars['Float']
    ipfs_id?: Scalars['Float']
    token_id?: Scalars['Float']
    uid?: Scalars['Float']
    __typename: 'token_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface token_sum_fields {
    id?: Scalars['Int']
    ipfs_id?: Scalars['Int']
    token_id?: Scalars['Int']
    uid?: Scalars['Int']
    __typename: 'token_sum_fields'
}


/** update columns of table "token" */
export type token_update_column = 'address' | 'id' | 'ipfs_id' | 'owner' | 'token_id' | 'uid'


/** aggregate var_pop on columns */
export interface token_var_pop_fields {
    id?: Scalars['Float']
    ipfs_id?: Scalars['Float']
    token_id?: Scalars['Float']
    uid?: Scalars['Float']
    __typename: 'token_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface token_var_samp_fields {
    id?: Scalars['Float']
    ipfs_id?: Scalars['Float']
    token_id?: Scalars['Float']
    uid?: Scalars['Float']
    __typename: 'token_var_samp_fields'
}


/** aggregate variance on columns */
export interface token_variance_fields {
    id?: Scalars['Float']
    ipfs_id?: Scalars['Float']
    token_id?: Scalars['Float']
    uid?: Scalars['Float']
    __typename: 'token_variance_fields'
}

export type Query = query_root
export type Mutation = mutation_root
export type Subscription = subscription_root


/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export interface Boolean_comparison_exp {_eq?: (Scalars['Boolean'] | null),_gt?: (Scalars['Boolean'] | null),_gte?: (Scalars['Boolean'] | null),_in?: (Scalars['Boolean'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['Boolean'] | null),_lte?: (Scalars['Boolean'] | null),_neq?: (Scalars['Boolean'] | null),_nin?: (Scalars['Boolean'][] | null)}


/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface Int_comparison_exp {_eq?: (Scalars['Int'] | null),_gt?: (Scalars['Int'] | null),_gte?: (Scalars['Int'] | null),_in?: (Scalars['Int'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['Int'] | null),_lte?: (Scalars['Int'] | null),_neq?: (Scalars['Int'] | null),_nin?: (Scalars['Int'][] | null)}


/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_comparison_exp {_eq?: (Scalars['String'] | null),_gt?: (Scalars['String'] | null),_gte?: (Scalars['String'] | null),
/** does the column match the given case-insensitive pattern */
_ilike?: (Scalars['String'] | null),_in?: (Scalars['String'][] | null),
/** does the column match the given POSIX regular expression, case insensitive */
_iregex?: (Scalars['String'] | null),_is_null?: (Scalars['Boolean'] | null),
/** does the column match the given pattern */
_like?: (Scalars['String'] | null),_lt?: (Scalars['String'] | null),_lte?: (Scalars['String'] | null),_neq?: (Scalars['String'] | null),
/** does the column NOT match the given case-insensitive pattern */
_nilike?: (Scalars['String'] | null),_nin?: (Scalars['String'][] | null),
/** does the column NOT match the given POSIX regular expression, case insensitive */
_niregex?: (Scalars['String'] | null),
/** does the column NOT match the given pattern */
_nlike?: (Scalars['String'] | null),
/** does the column NOT match the given POSIX regular expression, case sensitive */
_nregex?: (Scalars['String'] | null),
/** does the column NOT match the given SQL regular expression */
_nsimilar?: (Scalars['String'] | null),
/** does the column match the given POSIX regular expression, case sensitive */
_regex?: (Scalars['String'] | null),
/** does the column match the given SQL regular expression */
_similar?: (Scalars['String'] | null)}


/** columns and relationships of "dipdup_contract" */
export interface dipdup_contractRequest{
    address?: boolean | number
    created_at?: boolean | number
    name?: boolean | number
    typename?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "dipdup_contract" */
export interface dipdup_contract_aggregateRequest{
    aggregate?: dipdup_contract_aggregate_fieldsRequest
    nodes?: dipdup_contractRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "dipdup_contract" */
export interface dipdup_contract_aggregate_fieldsRequest{
    count?: [{columns?: (dipdup_contract_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: dipdup_contract_max_fieldsRequest
    min?: dipdup_contract_min_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dipdup_contract". All fields are combined with a logical 'AND'. */
export interface dipdup_contract_bool_exp {_and?: (dipdup_contract_bool_exp[] | null),_not?: (dipdup_contract_bool_exp | null),_or?: (dipdup_contract_bool_exp[] | null),address?: (String_comparison_exp | null),created_at?: (timestamptz_comparison_exp | null),name?: (String_comparison_exp | null),typename?: (String_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** input type for inserting data into table "dipdup_contract" */
export interface dipdup_contract_insert_input {address?: (Scalars['String'] | null),created_at?: (Scalars['timestamptz'] | null),name?: (Scalars['String'] | null),typename?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface dipdup_contract_max_fieldsRequest{
    address?: boolean | number
    created_at?: boolean | number
    name?: boolean | number
    typename?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "dipdup_contract_metadata" */
export interface dipdup_contract_metadataRequest{
    contract?: boolean | number
    created_at?: boolean | number
    id?: boolean | number
    metadata?: [{
    /** JSON select path */
    path?: (Scalars['String'] | null)}] | boolean | number
    network?: boolean | number
    update_id?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "dipdup_contract_metadata" */
export interface dipdup_contract_metadata_aggregateRequest{
    aggregate?: dipdup_contract_metadata_aggregate_fieldsRequest
    nodes?: dipdup_contract_metadataRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "dipdup_contract_metadata" */
export interface dipdup_contract_metadata_aggregate_fieldsRequest{
    avg?: dipdup_contract_metadata_avg_fieldsRequest
    count?: [{columns?: (dipdup_contract_metadata_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: dipdup_contract_metadata_max_fieldsRequest
    min?: dipdup_contract_metadata_min_fieldsRequest
    stddev?: dipdup_contract_metadata_stddev_fieldsRequest
    stddev_pop?: dipdup_contract_metadata_stddev_pop_fieldsRequest
    stddev_samp?: dipdup_contract_metadata_stddev_samp_fieldsRequest
    sum?: dipdup_contract_metadata_sum_fieldsRequest
    var_pop?: dipdup_contract_metadata_var_pop_fieldsRequest
    var_samp?: dipdup_contract_metadata_var_samp_fieldsRequest
    variance?: dipdup_contract_metadata_variance_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** append existing jsonb value of filtered columns with new jsonb value */
export interface dipdup_contract_metadata_append_input {metadata?: (Scalars['jsonb'] | null)}


/** aggregate avg on columns */
export interface dipdup_contract_metadata_avg_fieldsRequest{
    id?: boolean | number
    update_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dipdup_contract_metadata". All fields are combined with a logical 'AND'. */
export interface dipdup_contract_metadata_bool_exp {_and?: (dipdup_contract_metadata_bool_exp[] | null),_not?: (dipdup_contract_metadata_bool_exp | null),_or?: (dipdup_contract_metadata_bool_exp[] | null),contract?: (String_comparison_exp | null),created_at?: (timestamptz_comparison_exp | null),id?: (Int_comparison_exp | null),metadata?: (jsonb_comparison_exp | null),network?: (String_comparison_exp | null),update_id?: (Int_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export interface dipdup_contract_metadata_delete_at_path_input {metadata?: (Scalars['String'][] | null)}


/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export interface dipdup_contract_metadata_delete_elem_input {metadata?: (Scalars['Int'] | null)}


/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export interface dipdup_contract_metadata_delete_key_input {metadata?: (Scalars['String'] | null)}


/** input type for incrementing numeric columns in table "dipdup_contract_metadata" */
export interface dipdup_contract_metadata_inc_input {id?: (Scalars['Int'] | null),update_id?: (Scalars['Int'] | null)}


/** input type for inserting data into table "dipdup_contract_metadata" */
export interface dipdup_contract_metadata_insert_input {contract?: (Scalars['String'] | null),created_at?: (Scalars['timestamptz'] | null),id?: (Scalars['Int'] | null),metadata?: (Scalars['jsonb'] | null),network?: (Scalars['String'] | null),update_id?: (Scalars['Int'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface dipdup_contract_metadata_max_fieldsRequest{
    contract?: boolean | number
    created_at?: boolean | number
    id?: boolean | number
    network?: boolean | number
    update_id?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface dipdup_contract_metadata_min_fieldsRequest{
    contract?: boolean | number
    created_at?: boolean | number
    id?: boolean | number
    network?: boolean | number
    update_id?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "dipdup_contract_metadata" */
export interface dipdup_contract_metadata_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: dipdup_contract_metadataRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "dipdup_contract_metadata" */
export interface dipdup_contract_metadata_on_conflict {constraint: dipdup_contract_metadata_constraint,update_columns: dipdup_contract_metadata_update_column[],where?: (dipdup_contract_metadata_bool_exp | null)}


/** Ordering options when selecting data from "dipdup_contract_metadata". */
export interface dipdup_contract_metadata_order_by {contract?: (order_by | null),created_at?: (order_by | null),id?: (order_by | null),metadata?: (order_by | null),network?: (order_by | null),update_id?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: dipdup_contract_metadata */
export interface dipdup_contract_metadata_pk_columns_input {id: Scalars['Int']}


/** prepend existing jsonb value of filtered columns with new jsonb value */
export interface dipdup_contract_metadata_prepend_input {metadata?: (Scalars['jsonb'] | null)}


/** input type for updating data in table "dipdup_contract_metadata" */
export interface dipdup_contract_metadata_set_input {contract?: (Scalars['String'] | null),created_at?: (Scalars['timestamptz'] | null),id?: (Scalars['Int'] | null),metadata?: (Scalars['jsonb'] | null),network?: (Scalars['String'] | null),update_id?: (Scalars['Int'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate stddev on columns */
export interface dipdup_contract_metadata_stddev_fieldsRequest{
    id?: boolean | number
    update_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface dipdup_contract_metadata_stddev_pop_fieldsRequest{
    id?: boolean | number
    update_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface dipdup_contract_metadata_stddev_samp_fieldsRequest{
    id?: boolean | number
    update_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate sum on columns */
export interface dipdup_contract_metadata_sum_fieldsRequest{
    id?: boolean | number
    update_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_pop on columns */
export interface dipdup_contract_metadata_var_pop_fieldsRequest{
    id?: boolean | number
    update_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface dipdup_contract_metadata_var_samp_fieldsRequest{
    id?: boolean | number
    update_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface dipdup_contract_metadata_variance_fieldsRequest{
    id?: boolean | number
    update_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface dipdup_contract_min_fieldsRequest{
    address?: boolean | number
    created_at?: boolean | number
    name?: boolean | number
    typename?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "dipdup_contract" */
export interface dipdup_contract_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: dipdup_contractRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "dipdup_contract" */
export interface dipdup_contract_on_conflict {constraint: dipdup_contract_constraint,update_columns: dipdup_contract_update_column[],where?: (dipdup_contract_bool_exp | null)}


/** Ordering options when selecting data from "dipdup_contract". */
export interface dipdup_contract_order_by {address?: (order_by | null),created_at?: (order_by | null),name?: (order_by | null),typename?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: dipdup_contract */
export interface dipdup_contract_pk_columns_input {name: Scalars['String']}


/** input type for updating data in table "dipdup_contract" */
export interface dipdup_contract_set_input {address?: (Scalars['String'] | null),created_at?: (Scalars['timestamptz'] | null),name?: (Scalars['String'] | null),typename?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** columns and relationships of "dipdup_head" */
export interface dipdup_headRequest{
    created_at?: boolean | number
    hash?: boolean | number
    level?: boolean | number
    name?: boolean | number
    timestamp?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "dipdup_head" */
export interface dipdup_head_aggregateRequest{
    aggregate?: dipdup_head_aggregate_fieldsRequest
    nodes?: dipdup_headRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "dipdup_head" */
export interface dipdup_head_aggregate_fieldsRequest{
    avg?: dipdup_head_avg_fieldsRequest
    count?: [{columns?: (dipdup_head_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: dipdup_head_max_fieldsRequest
    min?: dipdup_head_min_fieldsRequest
    stddev?: dipdup_head_stddev_fieldsRequest
    stddev_pop?: dipdup_head_stddev_pop_fieldsRequest
    stddev_samp?: dipdup_head_stddev_samp_fieldsRequest
    sum?: dipdup_head_sum_fieldsRequest
    var_pop?: dipdup_head_var_pop_fieldsRequest
    var_samp?: dipdup_head_var_samp_fieldsRequest
    variance?: dipdup_head_variance_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate avg on columns */
export interface dipdup_head_avg_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dipdup_head". All fields are combined with a logical 'AND'. */
export interface dipdup_head_bool_exp {_and?: (dipdup_head_bool_exp[] | null),_not?: (dipdup_head_bool_exp | null),_or?: (dipdup_head_bool_exp[] | null),created_at?: (timestamptz_comparison_exp | null),hash?: (String_comparison_exp | null),level?: (Int_comparison_exp | null),name?: (String_comparison_exp | null),timestamp?: (timestamptz_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** input type for incrementing numeric columns in table "dipdup_head" */
export interface dipdup_head_inc_input {level?: (Scalars['Int'] | null)}


/** input type for inserting data into table "dipdup_head" */
export interface dipdup_head_insert_input {created_at?: (Scalars['timestamptz'] | null),hash?: (Scalars['String'] | null),level?: (Scalars['Int'] | null),name?: (Scalars['String'] | null),timestamp?: (Scalars['timestamptz'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface dipdup_head_max_fieldsRequest{
    created_at?: boolean | number
    hash?: boolean | number
    level?: boolean | number
    name?: boolean | number
    timestamp?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface dipdup_head_min_fieldsRequest{
    created_at?: boolean | number
    hash?: boolean | number
    level?: boolean | number
    name?: boolean | number
    timestamp?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "dipdup_head" */
export interface dipdup_head_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: dipdup_headRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "dipdup_head" */
export interface dipdup_head_on_conflict {constraint: dipdup_head_constraint,update_columns: dipdup_head_update_column[],where?: (dipdup_head_bool_exp | null)}


/** Ordering options when selecting data from "dipdup_head". */
export interface dipdup_head_order_by {created_at?: (order_by | null),hash?: (order_by | null),level?: (order_by | null),name?: (order_by | null),timestamp?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: dipdup_head */
export interface dipdup_head_pk_columns_input {name: Scalars['String']}


/** input type for updating data in table "dipdup_head" */
export interface dipdup_head_set_input {created_at?: (Scalars['timestamptz'] | null),hash?: (Scalars['String'] | null),level?: (Scalars['Int'] | null),name?: (Scalars['String'] | null),timestamp?: (Scalars['timestamptz'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** columns and relationships of "dipdup_head_status" */
export interface dipdup_head_statusRequest{
    name?: boolean | number
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "dipdup_head_status" */
export interface dipdup_head_status_aggregateRequest{
    aggregate?: dipdup_head_status_aggregate_fieldsRequest
    nodes?: dipdup_head_statusRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "dipdup_head_status" */
export interface dipdup_head_status_aggregate_fieldsRequest{
    count?: [{columns?: (dipdup_head_status_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: dipdup_head_status_max_fieldsRequest
    min?: dipdup_head_status_min_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dipdup_head_status". All fields are combined with a logical 'AND'. */
export interface dipdup_head_status_bool_exp {_and?: (dipdup_head_status_bool_exp[] | null),_not?: (dipdup_head_status_bool_exp | null),_or?: (dipdup_head_status_bool_exp[] | null),name?: (String_comparison_exp | null),status?: (String_comparison_exp | null)}


/** input type for inserting data into table "dipdup_head_status" */
export interface dipdup_head_status_insert_input {name?: (Scalars['String'] | null),status?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface dipdup_head_status_max_fieldsRequest{
    name?: boolean | number
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface dipdup_head_status_min_fieldsRequest{
    name?: boolean | number
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "dipdup_head_status" */
export interface dipdup_head_status_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: dipdup_head_statusRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Ordering options when selecting data from "dipdup_head_status". */
export interface dipdup_head_status_order_by {name?: (order_by | null),status?: (order_by | null)}


/** input type for updating data in table "dipdup_head_status" */
export interface dipdup_head_status_set_input {name?: (Scalars['String'] | null),status?: (Scalars['String'] | null)}


/** aggregate stddev on columns */
export interface dipdup_head_stddev_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface dipdup_head_stddev_pop_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface dipdup_head_stddev_samp_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate sum on columns */
export interface dipdup_head_sum_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_pop on columns */
export interface dipdup_head_var_pop_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface dipdup_head_var_samp_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface dipdup_head_variance_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "dipdup_index" */
export interface dipdup_indexRequest{
    config_hash?: boolean | number
    created_at?: boolean | number
    level?: boolean | number
    name?: boolean | number
    /** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
    status?: boolean | number
    template?: boolean | number
    template_values?: [{
    /** JSON select path */
    path?: (Scalars['String'] | null)}] | boolean | number
    /** operation: operation\nbig_map: big_map\nhead: head\ntoken_transfer: token_transfer */
    type?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "dipdup_index" */
export interface dipdup_index_aggregateRequest{
    aggregate?: dipdup_index_aggregate_fieldsRequest
    nodes?: dipdup_indexRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "dipdup_index" */
export interface dipdup_index_aggregate_fieldsRequest{
    avg?: dipdup_index_avg_fieldsRequest
    count?: [{columns?: (dipdup_index_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: dipdup_index_max_fieldsRequest
    min?: dipdup_index_min_fieldsRequest
    stddev?: dipdup_index_stddev_fieldsRequest
    stddev_pop?: dipdup_index_stddev_pop_fieldsRequest
    stddev_samp?: dipdup_index_stddev_samp_fieldsRequest
    sum?: dipdup_index_sum_fieldsRequest
    var_pop?: dipdup_index_var_pop_fieldsRequest
    var_samp?: dipdup_index_var_samp_fieldsRequest
    variance?: dipdup_index_variance_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** append existing jsonb value of filtered columns with new jsonb value */
export interface dipdup_index_append_input {template_values?: (Scalars['jsonb'] | null)}


/** aggregate avg on columns */
export interface dipdup_index_avg_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dipdup_index". All fields are combined with a logical 'AND'. */
export interface dipdup_index_bool_exp {_and?: (dipdup_index_bool_exp[] | null),_not?: (dipdup_index_bool_exp | null),_or?: (dipdup_index_bool_exp[] | null),config_hash?: (String_comparison_exp | null),created_at?: (timestamptz_comparison_exp | null),level?: (Int_comparison_exp | null),name?: (String_comparison_exp | null),status?: (String_comparison_exp | null),template?: (String_comparison_exp | null),template_values?: (jsonb_comparison_exp | null),type?: (String_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export interface dipdup_index_delete_at_path_input {template_values?: (Scalars['String'][] | null)}


/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export interface dipdup_index_delete_elem_input {template_values?: (Scalars['Int'] | null)}


/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export interface dipdup_index_delete_key_input {template_values?: (Scalars['String'] | null)}


/** input type for incrementing numeric columns in table "dipdup_index" */
export interface dipdup_index_inc_input {level?: (Scalars['Int'] | null)}


/** input type for inserting data into table "dipdup_index" */
export interface dipdup_index_insert_input {config_hash?: (Scalars['String'] | null),created_at?: (Scalars['timestamptz'] | null),level?: (Scalars['Int'] | null),name?: (Scalars['String'] | null),
/** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
status?: (Scalars['String'] | null),template?: (Scalars['String'] | null),template_values?: (Scalars['jsonb'] | null),
/** operation: operation\nbig_map: big_map\nhead: head\ntoken_transfer: token_transfer */
type?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface dipdup_index_max_fieldsRequest{
    config_hash?: boolean | number
    created_at?: boolean | number
    level?: boolean | number
    name?: boolean | number
    /** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
    status?: boolean | number
    template?: boolean | number
    /** operation: operation\nbig_map: big_map\nhead: head\ntoken_transfer: token_transfer */
    type?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface dipdup_index_min_fieldsRequest{
    config_hash?: boolean | number
    created_at?: boolean | number
    level?: boolean | number
    name?: boolean | number
    /** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
    status?: boolean | number
    template?: boolean | number
    /** operation: operation\nbig_map: big_map\nhead: head\ntoken_transfer: token_transfer */
    type?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "dipdup_index" */
export interface dipdup_index_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: dipdup_indexRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "dipdup_index" */
export interface dipdup_index_on_conflict {constraint: dipdup_index_constraint,update_columns: dipdup_index_update_column[],where?: (dipdup_index_bool_exp | null)}


/** Ordering options when selecting data from "dipdup_index". */
export interface dipdup_index_order_by {config_hash?: (order_by | null),created_at?: (order_by | null),level?: (order_by | null),name?: (order_by | null),status?: (order_by | null),template?: (order_by | null),template_values?: (order_by | null),type?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: dipdup_index */
export interface dipdup_index_pk_columns_input {name: Scalars['String']}


/** prepend existing jsonb value of filtered columns with new jsonb value */
export interface dipdup_index_prepend_input {template_values?: (Scalars['jsonb'] | null)}


/** input type for updating data in table "dipdup_index" */
export interface dipdup_index_set_input {config_hash?: (Scalars['String'] | null),created_at?: (Scalars['timestamptz'] | null),level?: (Scalars['Int'] | null),name?: (Scalars['String'] | null),
/** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
status?: (Scalars['String'] | null),template?: (Scalars['String'] | null),template_values?: (Scalars['jsonb'] | null),
/** operation: operation\nbig_map: big_map\nhead: head\ntoken_transfer: token_transfer */
type?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate stddev on columns */
export interface dipdup_index_stddev_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface dipdup_index_stddev_pop_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface dipdup_index_stddev_samp_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate sum on columns */
export interface dipdup_index_sum_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_pop on columns */
export interface dipdup_index_var_pop_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface dipdup_index_var_samp_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface dipdup_index_variance_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "dipdup_schema" */
export interface dipdup_schemaRequest{
    created_at?: boolean | number
    hash?: boolean | number
    name?: boolean | number
    /** manual: manual\nmigration: migration\nrollback: rollback\nconfig_modified: config_modified\nschema_modified: schema_modified */
    reindex?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "dipdup_schema" */
export interface dipdup_schema_aggregateRequest{
    aggregate?: dipdup_schema_aggregate_fieldsRequest
    nodes?: dipdup_schemaRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "dipdup_schema" */
export interface dipdup_schema_aggregate_fieldsRequest{
    count?: [{columns?: (dipdup_schema_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: dipdup_schema_max_fieldsRequest
    min?: dipdup_schema_min_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dipdup_schema". All fields are combined with a logical 'AND'. */
export interface dipdup_schema_bool_exp {_and?: (dipdup_schema_bool_exp[] | null),_not?: (dipdup_schema_bool_exp | null),_or?: (dipdup_schema_bool_exp[] | null),created_at?: (timestamptz_comparison_exp | null),hash?: (String_comparison_exp | null),name?: (String_comparison_exp | null),reindex?: (String_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** input type for inserting data into table "dipdup_schema" */
export interface dipdup_schema_insert_input {created_at?: (Scalars['timestamptz'] | null),hash?: (Scalars['String'] | null),name?: (Scalars['String'] | null),
/** manual: manual\nmigration: migration\nrollback: rollback\nconfig_modified: config_modified\nschema_modified: schema_modified */
reindex?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface dipdup_schema_max_fieldsRequest{
    created_at?: boolean | number
    hash?: boolean | number
    name?: boolean | number
    /** manual: manual\nmigration: migration\nrollback: rollback\nconfig_modified: config_modified\nschema_modified: schema_modified */
    reindex?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface dipdup_schema_min_fieldsRequest{
    created_at?: boolean | number
    hash?: boolean | number
    name?: boolean | number
    /** manual: manual\nmigration: migration\nrollback: rollback\nconfig_modified: config_modified\nschema_modified: schema_modified */
    reindex?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "dipdup_schema" */
export interface dipdup_schema_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: dipdup_schemaRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "dipdup_schema" */
export interface dipdup_schema_on_conflict {constraint: dipdup_schema_constraint,update_columns: dipdup_schema_update_column[],where?: (dipdup_schema_bool_exp | null)}


/** Ordering options when selecting data from "dipdup_schema". */
export interface dipdup_schema_order_by {created_at?: (order_by | null),hash?: (order_by | null),name?: (order_by | null),reindex?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: dipdup_schema */
export interface dipdup_schema_pk_columns_input {name: Scalars['String']}


/** input type for updating data in table "dipdup_schema" */
export interface dipdup_schema_set_input {created_at?: (Scalars['timestamptz'] | null),hash?: (Scalars['String'] | null),name?: (Scalars['String'] | null),
/** manual: manual\nmigration: migration\nrollback: rollback\nconfig_modified: config_modified\nschema_modified: schema_modified */
reindex?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** columns and relationships of "dipdup_token_metadata" */
export interface dipdup_token_metadataRequest{
    contract?: boolean | number
    created_at?: boolean | number
    id?: boolean | number
    metadata?: [{
    /** JSON select path */
    path?: (Scalars['String'] | null)}] | boolean | number
    network?: boolean | number
    token_id?: boolean | number
    update_id?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "dipdup_token_metadata" */
export interface dipdup_token_metadata_aggregateRequest{
    aggregate?: dipdup_token_metadata_aggregate_fieldsRequest
    nodes?: dipdup_token_metadataRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "dipdup_token_metadata" */
export interface dipdup_token_metadata_aggregate_fieldsRequest{
    avg?: dipdup_token_metadata_avg_fieldsRequest
    count?: [{columns?: (dipdup_token_metadata_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: dipdup_token_metadata_max_fieldsRequest
    min?: dipdup_token_metadata_min_fieldsRequest
    stddev?: dipdup_token_metadata_stddev_fieldsRequest
    stddev_pop?: dipdup_token_metadata_stddev_pop_fieldsRequest
    stddev_samp?: dipdup_token_metadata_stddev_samp_fieldsRequest
    sum?: dipdup_token_metadata_sum_fieldsRequest
    var_pop?: dipdup_token_metadata_var_pop_fieldsRequest
    var_samp?: dipdup_token_metadata_var_samp_fieldsRequest
    variance?: dipdup_token_metadata_variance_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** append existing jsonb value of filtered columns with new jsonb value */
export interface dipdup_token_metadata_append_input {metadata?: (Scalars['jsonb'] | null)}


/** aggregate avg on columns */
export interface dipdup_token_metadata_avg_fieldsRequest{
    id?: boolean | number
    update_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dipdup_token_metadata". All fields are combined with a logical 'AND'. */
export interface dipdup_token_metadata_bool_exp {_and?: (dipdup_token_metadata_bool_exp[] | null),_not?: (dipdup_token_metadata_bool_exp | null),_or?: (dipdup_token_metadata_bool_exp[] | null),contract?: (String_comparison_exp | null),created_at?: (timestamptz_comparison_exp | null),id?: (Int_comparison_exp | null),metadata?: (jsonb_comparison_exp | null),network?: (String_comparison_exp | null),token_id?: (String_comparison_exp | null),update_id?: (Int_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export interface dipdup_token_metadata_delete_at_path_input {metadata?: (Scalars['String'][] | null)}


/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export interface dipdup_token_metadata_delete_elem_input {metadata?: (Scalars['Int'] | null)}


/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export interface dipdup_token_metadata_delete_key_input {metadata?: (Scalars['String'] | null)}


/** input type for incrementing numeric columns in table "dipdup_token_metadata" */
export interface dipdup_token_metadata_inc_input {id?: (Scalars['Int'] | null),update_id?: (Scalars['Int'] | null)}


/** input type for inserting data into table "dipdup_token_metadata" */
export interface dipdup_token_metadata_insert_input {contract?: (Scalars['String'] | null),created_at?: (Scalars['timestamptz'] | null),id?: (Scalars['Int'] | null),metadata?: (Scalars['jsonb'] | null),network?: (Scalars['String'] | null),token_id?: (Scalars['String'] | null),update_id?: (Scalars['Int'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface dipdup_token_metadata_max_fieldsRequest{
    contract?: boolean | number
    created_at?: boolean | number
    id?: boolean | number
    network?: boolean | number
    token_id?: boolean | number
    update_id?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface dipdup_token_metadata_min_fieldsRequest{
    contract?: boolean | number
    created_at?: boolean | number
    id?: boolean | number
    network?: boolean | number
    token_id?: boolean | number
    update_id?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "dipdup_token_metadata" */
export interface dipdup_token_metadata_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: dipdup_token_metadataRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "dipdup_token_metadata" */
export interface dipdup_token_metadata_on_conflict {constraint: dipdup_token_metadata_constraint,update_columns: dipdup_token_metadata_update_column[],where?: (dipdup_token_metadata_bool_exp | null)}


/** Ordering options when selecting data from "dipdup_token_metadata". */
export interface dipdup_token_metadata_order_by {contract?: (order_by | null),created_at?: (order_by | null),id?: (order_by | null),metadata?: (order_by | null),network?: (order_by | null),token_id?: (order_by | null),update_id?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: dipdup_token_metadata */
export interface dipdup_token_metadata_pk_columns_input {id: Scalars['Int']}


/** prepend existing jsonb value of filtered columns with new jsonb value */
export interface dipdup_token_metadata_prepend_input {metadata?: (Scalars['jsonb'] | null)}


/** input type for updating data in table "dipdup_token_metadata" */
export interface dipdup_token_metadata_set_input {contract?: (Scalars['String'] | null),created_at?: (Scalars['timestamptz'] | null),id?: (Scalars['Int'] | null),metadata?: (Scalars['jsonb'] | null),network?: (Scalars['String'] | null),token_id?: (Scalars['String'] | null),update_id?: (Scalars['Int'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate stddev on columns */
export interface dipdup_token_metadata_stddev_fieldsRequest{
    id?: boolean | number
    update_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface dipdup_token_metadata_stddev_pop_fieldsRequest{
    id?: boolean | number
    update_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface dipdup_token_metadata_stddev_samp_fieldsRequest{
    id?: boolean | number
    update_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate sum on columns */
export interface dipdup_token_metadata_sum_fieldsRequest{
    id?: boolean | number
    update_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_pop on columns */
export interface dipdup_token_metadata_var_pop_fieldsRequest{
    id?: boolean | number
    update_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface dipdup_token_metadata_var_samp_fieldsRequest{
    id?: boolean | number
    update_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface dipdup_token_metadata_variance_fieldsRequest{
    id?: boolean | number
    update_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "ipfs" */
export interface ipfsRequest{
    creator?: boolean | number
    description?: boolean | number
    id?: boolean | number
    image?: boolean | number
    name?: boolean | number
    symbol?: boolean | number
    thumbnail?: boolean | number
    /** An array relationship */
    token?: [{
    /** distinct select on columns */
    distinct_on?: (token_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (token_order_by[] | null),
    /** filter the rows returned */
    where?: (token_bool_exp | null)},tokenRequest] | tokenRequest
    /** An aggregate relationship */
    token_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (token_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (token_order_by[] | null),
    /** filter the rows returned */
    where?: (token_bool_exp | null)},token_aggregateRequest] | token_aggregateRequest
    uri?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "ipfs" */
export interface ipfs_aggregateRequest{
    aggregate?: ipfs_aggregate_fieldsRequest
    nodes?: ipfsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "ipfs" */
export interface ipfs_aggregate_fieldsRequest{
    avg?: ipfs_avg_fieldsRequest
    count?: [{columns?: (ipfs_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: ipfs_max_fieldsRequest
    min?: ipfs_min_fieldsRequest
    stddev?: ipfs_stddev_fieldsRequest
    stddev_pop?: ipfs_stddev_pop_fieldsRequest
    stddev_samp?: ipfs_stddev_samp_fieldsRequest
    sum?: ipfs_sum_fieldsRequest
    var_pop?: ipfs_var_pop_fieldsRequest
    var_samp?: ipfs_var_samp_fieldsRequest
    variance?: ipfs_variance_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate avg on columns */
export interface ipfs_avg_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "ipfs". All fields are combined with a logical 'AND'. */
export interface ipfs_bool_exp {_and?: (ipfs_bool_exp[] | null),_not?: (ipfs_bool_exp | null),_or?: (ipfs_bool_exp[] | null),creator?: (String_comparison_exp | null),description?: (String_comparison_exp | null),id?: (Int_comparison_exp | null),image?: (String_comparison_exp | null),name?: (String_comparison_exp | null),symbol?: (String_comparison_exp | null),thumbnail?: (String_comparison_exp | null),token?: (token_bool_exp | null),uri?: (String_comparison_exp | null)}


/** input type for incrementing numeric columns in table "ipfs" */
export interface ipfs_inc_input {id?: (Scalars['Int'] | null)}


/** input type for inserting data into table "ipfs" */
export interface ipfs_insert_input {creator?: (Scalars['String'] | null),description?: (Scalars['String'] | null),id?: (Scalars['Int'] | null),image?: (Scalars['String'] | null),name?: (Scalars['String'] | null),symbol?: (Scalars['String'] | null),thumbnail?: (Scalars['String'] | null),token?: (token_arr_rel_insert_input | null),uri?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface ipfs_max_fieldsRequest{
    creator?: boolean | number
    description?: boolean | number
    id?: boolean | number
    image?: boolean | number
    name?: boolean | number
    symbol?: boolean | number
    thumbnail?: boolean | number
    uri?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface ipfs_min_fieldsRequest{
    creator?: boolean | number
    description?: boolean | number
    id?: boolean | number
    image?: boolean | number
    name?: boolean | number
    symbol?: boolean | number
    thumbnail?: boolean | number
    uri?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "ipfs" */
export interface ipfs_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: ipfsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "ipfs" */
export interface ipfs_obj_rel_insert_input {data: ipfs_insert_input,
/** upsert condition */
on_conflict?: (ipfs_on_conflict | null)}


/** on_conflict condition type for table "ipfs" */
export interface ipfs_on_conflict {constraint: ipfs_constraint,update_columns: ipfs_update_column[],where?: (ipfs_bool_exp | null)}


/** Ordering options when selecting data from "ipfs". */
export interface ipfs_order_by {creator?: (order_by | null),description?: (order_by | null),id?: (order_by | null),image?: (order_by | null),name?: (order_by | null),symbol?: (order_by | null),thumbnail?: (order_by | null),token_aggregate?: (token_aggregate_order_by | null),uri?: (order_by | null)}


/** primary key columns input for table: ipfs */
export interface ipfs_pk_columns_input {id: Scalars['Int']}


/** input type for updating data in table "ipfs" */
export interface ipfs_set_input {creator?: (Scalars['String'] | null),description?: (Scalars['String'] | null),id?: (Scalars['Int'] | null),image?: (Scalars['String'] | null),name?: (Scalars['String'] | null),symbol?: (Scalars['String'] | null),thumbnail?: (Scalars['String'] | null),uri?: (Scalars['String'] | null)}


/** aggregate stddev on columns */
export interface ipfs_stddev_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface ipfs_stddev_pop_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface ipfs_stddev_samp_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate sum on columns */
export interface ipfs_sum_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_pop on columns */
export interface ipfs_var_pop_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface ipfs_var_samp_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface ipfs_variance_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface jsonb_cast_exp {String?: (String_comparison_exp | null)}


/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export interface jsonb_comparison_exp {_cast?: (jsonb_cast_exp | null),
/** is the column contained in the given json value */
_contained_in?: (Scalars['jsonb'] | null),
/** does the column contain the given json value at the top level */
_contains?: (Scalars['jsonb'] | null),_eq?: (Scalars['jsonb'] | null),_gt?: (Scalars['jsonb'] | null),_gte?: (Scalars['jsonb'] | null),
/** does the string exist as a top-level key in the column */
_has_key?: (Scalars['String'] | null),
/** do all of these strings exist as top-level keys in the column */
_has_keys_all?: (Scalars['String'][] | null),
/** do any of these strings exist as top-level keys in the column */
_has_keys_any?: (Scalars['String'][] | null),_in?: (Scalars['jsonb'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['jsonb'] | null),_lte?: (Scalars['jsonb'] | null),_neq?: (Scalars['jsonb'] | null),_nin?: (Scalars['jsonb'][] | null)}


/** columns and relationships of "listing" */
export interface listingRequest{
    accepted?: boolean | number
    amount?: boolean | number
    cancelled?: boolean | number
    created_at?: boolean | number
    creator?: boolean | number
    duration?: boolean | number
    id?: boolean | number
    interest?: boolean | number
    /** An array relationship */
    offers?: [{
    /** distinct select on columns */
    distinct_on?: (offer_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (offer_order_by[] | null),
    /** filter the rows returned */
    where?: (offer_bool_exp | null)},offerRequest] | offerRequest
    /** An aggregate relationship */
    offers_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (offer_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (offer_order_by[] | null),
    /** filter the rows returned */
    where?: (offer_bool_exp | null)},offer_aggregateRequest] | offer_aggregateRequest
    /** An object relationship */
    token?: tokenRequest
    token_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "listing" */
export interface listing_aggregateRequest{
    aggregate?: listing_aggregate_fieldsRequest
    nodes?: listingRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "listing" */
export interface listing_aggregate_fieldsRequest{
    avg?: listing_avg_fieldsRequest
    count?: [{columns?: (listing_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: listing_max_fieldsRequest
    min?: listing_min_fieldsRequest
    stddev?: listing_stddev_fieldsRequest
    stddev_pop?: listing_stddev_pop_fieldsRequest
    stddev_samp?: listing_stddev_samp_fieldsRequest
    sum?: listing_sum_fieldsRequest
    var_pop?: listing_var_pop_fieldsRequest
    var_samp?: listing_var_samp_fieldsRequest
    variance?: listing_variance_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "listing" */
export interface listing_aggregate_order_by {avg?: (listing_avg_order_by | null),count?: (order_by | null),max?: (listing_max_order_by | null),min?: (listing_min_order_by | null),stddev?: (listing_stddev_order_by | null),stddev_pop?: (listing_stddev_pop_order_by | null),stddev_samp?: (listing_stddev_samp_order_by | null),sum?: (listing_sum_order_by | null),var_pop?: (listing_var_pop_order_by | null),var_samp?: (listing_var_samp_order_by | null),variance?: (listing_variance_order_by | null)}


/** input type for inserting array relation for remote table "listing" */
export interface listing_arr_rel_insert_input {data: listing_insert_input[],
/** upsert condition */
on_conflict?: (listing_on_conflict | null)}


/** aggregate avg on columns */
export interface listing_avg_fieldsRequest{
    amount?: boolean | number
    duration?: boolean | number
    id?: boolean | number
    interest?: boolean | number
    token_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "listing" */
export interface listing_avg_order_by {amount?: (order_by | null),duration?: (order_by | null),id?: (order_by | null),interest?: (order_by | null),token_id?: (order_by | null)}


/** Boolean expression to filter rows from the table "listing". All fields are combined with a logical 'AND'. */
export interface listing_bool_exp {_and?: (listing_bool_exp[] | null),_not?: (listing_bool_exp | null),_or?: (listing_bool_exp[] | null),accepted?: (Boolean_comparison_exp | null),amount?: (Int_comparison_exp | null),cancelled?: (Boolean_comparison_exp | null),created_at?: (timestamptz_comparison_exp | null),creator?: (String_comparison_exp | null),duration?: (Int_comparison_exp | null),id?: (Int_comparison_exp | null),interest?: (Int_comparison_exp | null),offers?: (offer_bool_exp | null),token?: (token_bool_exp | null),token_id?: (Int_comparison_exp | null)}


/** input type for incrementing numeric columns in table "listing" */
export interface listing_inc_input {amount?: (Scalars['Int'] | null),duration?: (Scalars['Int'] | null),id?: (Scalars['Int'] | null),interest?: (Scalars['Int'] | null),token_id?: (Scalars['Int'] | null)}


/** input type for inserting data into table "listing" */
export interface listing_insert_input {accepted?: (Scalars['Boolean'] | null),amount?: (Scalars['Int'] | null),cancelled?: (Scalars['Boolean'] | null),created_at?: (Scalars['timestamptz'] | null),creator?: (Scalars['String'] | null),duration?: (Scalars['Int'] | null),id?: (Scalars['Int'] | null),interest?: (Scalars['Int'] | null),offers?: (offer_arr_rel_insert_input | null),token?: (token_obj_rel_insert_input | null),token_id?: (Scalars['Int'] | null)}


/** aggregate max on columns */
export interface listing_max_fieldsRequest{
    amount?: boolean | number
    created_at?: boolean | number
    creator?: boolean | number
    duration?: boolean | number
    id?: boolean | number
    interest?: boolean | number
    token_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "listing" */
export interface listing_max_order_by {amount?: (order_by | null),created_at?: (order_by | null),creator?: (order_by | null),duration?: (order_by | null),id?: (order_by | null),interest?: (order_by | null),token_id?: (order_by | null)}


/** aggregate min on columns */
export interface listing_min_fieldsRequest{
    amount?: boolean | number
    created_at?: boolean | number
    creator?: boolean | number
    duration?: boolean | number
    id?: boolean | number
    interest?: boolean | number
    token_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "listing" */
export interface listing_min_order_by {amount?: (order_by | null),created_at?: (order_by | null),creator?: (order_by | null),duration?: (order_by | null),id?: (order_by | null),interest?: (order_by | null),token_id?: (order_by | null)}


/** response of any mutation on the table "listing" */
export interface listing_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: listingRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "listing" */
export interface listing_obj_rel_insert_input {data: listing_insert_input,
/** upsert condition */
on_conflict?: (listing_on_conflict | null)}


/** on_conflict condition type for table "listing" */
export interface listing_on_conflict {constraint: listing_constraint,update_columns: listing_update_column[],where?: (listing_bool_exp | null)}


/** Ordering options when selecting data from "listing". */
export interface listing_order_by {accepted?: (order_by | null),amount?: (order_by | null),cancelled?: (order_by | null),created_at?: (order_by | null),creator?: (order_by | null),duration?: (order_by | null),id?: (order_by | null),interest?: (order_by | null),offers_aggregate?: (offer_aggregate_order_by | null),token?: (token_order_by | null),token_id?: (order_by | null)}


/** primary key columns input for table: listing */
export interface listing_pk_columns_input {id: Scalars['Int']}


/** input type for updating data in table "listing" */
export interface listing_set_input {accepted?: (Scalars['Boolean'] | null),amount?: (Scalars['Int'] | null),cancelled?: (Scalars['Boolean'] | null),created_at?: (Scalars['timestamptz'] | null),creator?: (Scalars['String'] | null),duration?: (Scalars['Int'] | null),id?: (Scalars['Int'] | null),interest?: (Scalars['Int'] | null),token_id?: (Scalars['Int'] | null)}


/** aggregate stddev on columns */
export interface listing_stddev_fieldsRequest{
    amount?: boolean | number
    duration?: boolean | number
    id?: boolean | number
    interest?: boolean | number
    token_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "listing" */
export interface listing_stddev_order_by {amount?: (order_by | null),duration?: (order_by | null),id?: (order_by | null),interest?: (order_by | null),token_id?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface listing_stddev_pop_fieldsRequest{
    amount?: boolean | number
    duration?: boolean | number
    id?: boolean | number
    interest?: boolean | number
    token_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "listing" */
export interface listing_stddev_pop_order_by {amount?: (order_by | null),duration?: (order_by | null),id?: (order_by | null),interest?: (order_by | null),token_id?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface listing_stddev_samp_fieldsRequest{
    amount?: boolean | number
    duration?: boolean | number
    id?: boolean | number
    interest?: boolean | number
    token_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "listing" */
export interface listing_stddev_samp_order_by {amount?: (order_by | null),duration?: (order_by | null),id?: (order_by | null),interest?: (order_by | null),token_id?: (order_by | null)}


/** aggregate sum on columns */
export interface listing_sum_fieldsRequest{
    amount?: boolean | number
    duration?: boolean | number
    id?: boolean | number
    interest?: boolean | number
    token_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "listing" */
export interface listing_sum_order_by {amount?: (order_by | null),duration?: (order_by | null),id?: (order_by | null),interest?: (order_by | null),token_id?: (order_by | null)}


/** aggregate var_pop on columns */
export interface listing_var_pop_fieldsRequest{
    amount?: boolean | number
    duration?: boolean | number
    id?: boolean | number
    interest?: boolean | number
    token_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "listing" */
export interface listing_var_pop_order_by {amount?: (order_by | null),duration?: (order_by | null),id?: (order_by | null),interest?: (order_by | null),token_id?: (order_by | null)}


/** aggregate var_samp on columns */
export interface listing_var_samp_fieldsRequest{
    amount?: boolean | number
    duration?: boolean | number
    id?: boolean | number
    interest?: boolean | number
    token_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "listing" */
export interface listing_var_samp_order_by {amount?: (order_by | null),duration?: (order_by | null),id?: (order_by | null),interest?: (order_by | null),token_id?: (order_by | null)}


/** aggregate variance on columns */
export interface listing_variance_fieldsRequest{
    amount?: boolean | number
    duration?: boolean | number
    id?: boolean | number
    interest?: boolean | number
    token_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "listing" */
export interface listing_variance_order_by {amount?: (order_by | null),duration?: (order_by | null),id?: (order_by | null),interest?: (order_by | null),token_id?: (order_by | null)}


/** columns and relationships of "loan" */
export interface loanRequest{
    duration?: boolean | number
    id?: boolean | number
    interest?: boolean | number
    lender?: boolean | number
    loanee?: boolean | number
    principal_amount?: boolean | number
    repaid?: boolean | number
    start_time?: boolean | number
    /** An object relationship */
    token?: tokenRequest
    token_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "loan" */
export interface loan_aggregateRequest{
    aggregate?: loan_aggregate_fieldsRequest
    nodes?: loanRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "loan" */
export interface loan_aggregate_fieldsRequest{
    avg?: loan_avg_fieldsRequest
    count?: [{columns?: (loan_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: loan_max_fieldsRequest
    min?: loan_min_fieldsRequest
    stddev?: loan_stddev_fieldsRequest
    stddev_pop?: loan_stddev_pop_fieldsRequest
    stddev_samp?: loan_stddev_samp_fieldsRequest
    sum?: loan_sum_fieldsRequest
    var_pop?: loan_var_pop_fieldsRequest
    var_samp?: loan_var_samp_fieldsRequest
    variance?: loan_variance_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "loan" */
export interface loan_aggregate_order_by {avg?: (loan_avg_order_by | null),count?: (order_by | null),max?: (loan_max_order_by | null),min?: (loan_min_order_by | null),stddev?: (loan_stddev_order_by | null),stddev_pop?: (loan_stddev_pop_order_by | null),stddev_samp?: (loan_stddev_samp_order_by | null),sum?: (loan_sum_order_by | null),var_pop?: (loan_var_pop_order_by | null),var_samp?: (loan_var_samp_order_by | null),variance?: (loan_variance_order_by | null)}


/** input type for inserting array relation for remote table "loan" */
export interface loan_arr_rel_insert_input {data: loan_insert_input[],
/** upsert condition */
on_conflict?: (loan_on_conflict | null)}


/** aggregate avg on columns */
export interface loan_avg_fieldsRequest{
    duration?: boolean | number
    id?: boolean | number
    interest?: boolean | number
    principal_amount?: boolean | number
    token_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "loan" */
export interface loan_avg_order_by {duration?: (order_by | null),id?: (order_by | null),interest?: (order_by | null),principal_amount?: (order_by | null),token_id?: (order_by | null)}


/** Boolean expression to filter rows from the table "loan". All fields are combined with a logical 'AND'. */
export interface loan_bool_exp {_and?: (loan_bool_exp[] | null),_not?: (loan_bool_exp | null),_or?: (loan_bool_exp[] | null),duration?: (Int_comparison_exp | null),id?: (Int_comparison_exp | null),interest?: (Int_comparison_exp | null),lender?: (String_comparison_exp | null),loanee?: (String_comparison_exp | null),principal_amount?: (Int_comparison_exp | null),repaid?: (Boolean_comparison_exp | null),start_time?: (timestamptz_comparison_exp | null),token?: (token_bool_exp | null),token_id?: (Int_comparison_exp | null)}


/** input type for incrementing numeric columns in table "loan" */
export interface loan_inc_input {duration?: (Scalars['Int'] | null),id?: (Scalars['Int'] | null),interest?: (Scalars['Int'] | null),principal_amount?: (Scalars['Int'] | null),token_id?: (Scalars['Int'] | null)}


/** input type for inserting data into table "loan" */
export interface loan_insert_input {duration?: (Scalars['Int'] | null),id?: (Scalars['Int'] | null),interest?: (Scalars['Int'] | null),lender?: (Scalars['String'] | null),loanee?: (Scalars['String'] | null),principal_amount?: (Scalars['Int'] | null),repaid?: (Scalars['Boolean'] | null),start_time?: (Scalars['timestamptz'] | null),token?: (token_obj_rel_insert_input | null),token_id?: (Scalars['Int'] | null)}


/** aggregate max on columns */
export interface loan_max_fieldsRequest{
    duration?: boolean | number
    id?: boolean | number
    interest?: boolean | number
    lender?: boolean | number
    loanee?: boolean | number
    principal_amount?: boolean | number
    start_time?: boolean | number
    token_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "loan" */
export interface loan_max_order_by {duration?: (order_by | null),id?: (order_by | null),interest?: (order_by | null),lender?: (order_by | null),loanee?: (order_by | null),principal_amount?: (order_by | null),start_time?: (order_by | null),token_id?: (order_by | null)}


/** aggregate min on columns */
export interface loan_min_fieldsRequest{
    duration?: boolean | number
    id?: boolean | number
    interest?: boolean | number
    lender?: boolean | number
    loanee?: boolean | number
    principal_amount?: boolean | number
    start_time?: boolean | number
    token_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "loan" */
export interface loan_min_order_by {duration?: (order_by | null),id?: (order_by | null),interest?: (order_by | null),lender?: (order_by | null),loanee?: (order_by | null),principal_amount?: (order_by | null),start_time?: (order_by | null),token_id?: (order_by | null)}


/** response of any mutation on the table "loan" */
export interface loan_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: loanRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "loan" */
export interface loan_on_conflict {constraint: loan_constraint,update_columns: loan_update_column[],where?: (loan_bool_exp | null)}


/** Ordering options when selecting data from "loan". */
export interface loan_order_by {duration?: (order_by | null),id?: (order_by | null),interest?: (order_by | null),lender?: (order_by | null),loanee?: (order_by | null),principal_amount?: (order_by | null),repaid?: (order_by | null),start_time?: (order_by | null),token?: (token_order_by | null),token_id?: (order_by | null)}


/** primary key columns input for table: loan */
export interface loan_pk_columns_input {id: Scalars['Int']}


/** input type for updating data in table "loan" */
export interface loan_set_input {duration?: (Scalars['Int'] | null),id?: (Scalars['Int'] | null),interest?: (Scalars['Int'] | null),lender?: (Scalars['String'] | null),loanee?: (Scalars['String'] | null),principal_amount?: (Scalars['Int'] | null),repaid?: (Scalars['Boolean'] | null),start_time?: (Scalars['timestamptz'] | null),token_id?: (Scalars['Int'] | null)}


/** aggregate stddev on columns */
export interface loan_stddev_fieldsRequest{
    duration?: boolean | number
    id?: boolean | number
    interest?: boolean | number
    principal_amount?: boolean | number
    token_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "loan" */
export interface loan_stddev_order_by {duration?: (order_by | null),id?: (order_by | null),interest?: (order_by | null),principal_amount?: (order_by | null),token_id?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface loan_stddev_pop_fieldsRequest{
    duration?: boolean | number
    id?: boolean | number
    interest?: boolean | number
    principal_amount?: boolean | number
    token_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "loan" */
export interface loan_stddev_pop_order_by {duration?: (order_by | null),id?: (order_by | null),interest?: (order_by | null),principal_amount?: (order_by | null),token_id?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface loan_stddev_samp_fieldsRequest{
    duration?: boolean | number
    id?: boolean | number
    interest?: boolean | number
    principal_amount?: boolean | number
    token_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "loan" */
export interface loan_stddev_samp_order_by {duration?: (order_by | null),id?: (order_by | null),interest?: (order_by | null),principal_amount?: (order_by | null),token_id?: (order_by | null)}


/** aggregate sum on columns */
export interface loan_sum_fieldsRequest{
    duration?: boolean | number
    id?: boolean | number
    interest?: boolean | number
    principal_amount?: boolean | number
    token_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "loan" */
export interface loan_sum_order_by {duration?: (order_by | null),id?: (order_by | null),interest?: (order_by | null),principal_amount?: (order_by | null),token_id?: (order_by | null)}


/** aggregate var_pop on columns */
export interface loan_var_pop_fieldsRequest{
    duration?: boolean | number
    id?: boolean | number
    interest?: boolean | number
    principal_amount?: boolean | number
    token_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "loan" */
export interface loan_var_pop_order_by {duration?: (order_by | null),id?: (order_by | null),interest?: (order_by | null),principal_amount?: (order_by | null),token_id?: (order_by | null)}


/** aggregate var_samp on columns */
export interface loan_var_samp_fieldsRequest{
    duration?: boolean | number
    id?: boolean | number
    interest?: boolean | number
    principal_amount?: boolean | number
    token_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "loan" */
export interface loan_var_samp_order_by {duration?: (order_by | null),id?: (order_by | null),interest?: (order_by | null),principal_amount?: (order_by | null),token_id?: (order_by | null)}


/** aggregate variance on columns */
export interface loan_variance_fieldsRequest{
    duration?: boolean | number
    id?: boolean | number
    interest?: boolean | number
    principal_amount?: boolean | number
    token_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "loan" */
export interface loan_variance_order_by {duration?: (order_by | null),id?: (order_by | null),interest?: (order_by | null),principal_amount?: (order_by | null),token_id?: (order_by | null)}


/** mutation root */
export interface mutation_rootRequest{
    /** delete data from the table: "dipdup_contract" */
    delete_dipdup_contract?: [{
    /** filter the rows which have to be deleted */
    where: dipdup_contract_bool_exp},dipdup_contract_mutation_responseRequest]
    /** delete single row from the table: "dipdup_contract" */
    delete_dipdup_contract_by_pk?: [{name: Scalars['String']},dipdup_contractRequest]
    /** delete data from the table: "dipdup_contract_metadata" */
    delete_dipdup_contract_metadata?: [{
    /** filter the rows which have to be deleted */
    where: dipdup_contract_metadata_bool_exp},dipdup_contract_metadata_mutation_responseRequest]
    /** delete single row from the table: "dipdup_contract_metadata" */
    delete_dipdup_contract_metadata_by_pk?: [{id: Scalars['Int']},dipdup_contract_metadataRequest]
    /** delete data from the table: "dipdup_head" */
    delete_dipdup_head?: [{
    /** filter the rows which have to be deleted */
    where: dipdup_head_bool_exp},dipdup_head_mutation_responseRequest]
    /** delete single row from the table: "dipdup_head" */
    delete_dipdup_head_by_pk?: [{name: Scalars['String']},dipdup_headRequest]
    /** delete data from the table: "dipdup_head_status" */
    delete_dipdup_head_status?: [{
    /** filter the rows which have to be deleted */
    where: dipdup_head_status_bool_exp},dipdup_head_status_mutation_responseRequest]
    /** delete data from the table: "dipdup_index" */
    delete_dipdup_index?: [{
    /** filter the rows which have to be deleted */
    where: dipdup_index_bool_exp},dipdup_index_mutation_responseRequest]
    /** delete single row from the table: "dipdup_index" */
    delete_dipdup_index_by_pk?: [{name: Scalars['String']},dipdup_indexRequest]
    /** delete data from the table: "dipdup_schema" */
    delete_dipdup_schema?: [{
    /** filter the rows which have to be deleted */
    where: dipdup_schema_bool_exp},dipdup_schema_mutation_responseRequest]
    /** delete single row from the table: "dipdup_schema" */
    delete_dipdup_schema_by_pk?: [{name: Scalars['String']},dipdup_schemaRequest]
    /** delete data from the table: "dipdup_token_metadata" */
    delete_dipdup_token_metadata?: [{
    /** filter the rows which have to be deleted */
    where: dipdup_token_metadata_bool_exp},dipdup_token_metadata_mutation_responseRequest]
    /** delete single row from the table: "dipdup_token_metadata" */
    delete_dipdup_token_metadata_by_pk?: [{id: Scalars['Int']},dipdup_token_metadataRequest]
    /** delete data from the table: "ipfs" */
    delete_ipfs?: [{
    /** filter the rows which have to be deleted */
    where: ipfs_bool_exp},ipfs_mutation_responseRequest]
    /** delete single row from the table: "ipfs" */
    delete_ipfs_by_pk?: [{id: Scalars['Int']},ipfsRequest]
    /** delete data from the table: "listing" */
    delete_listing?: [{
    /** filter the rows which have to be deleted */
    where: listing_bool_exp},listing_mutation_responseRequest]
    /** delete single row from the table: "listing" */
    delete_listing_by_pk?: [{id: Scalars['Int']},listingRequest]
    /** delete data from the table: "loan" */
    delete_loan?: [{
    /** filter the rows which have to be deleted */
    where: loan_bool_exp},loan_mutation_responseRequest]
    /** delete single row from the table: "loan" */
    delete_loan_by_pk?: [{id: Scalars['Int']},loanRequest]
    /** delete data from the table: "offer" */
    delete_offer?: [{
    /** filter the rows which have to be deleted */
    where: offer_bool_exp},offer_mutation_responseRequest]
    /** delete single row from the table: "offer" */
    delete_offer_by_pk?: [{id: Scalars['Int']},offerRequest]
    /** delete data from the table: "token" */
    delete_token?: [{
    /** filter the rows which have to be deleted */
    where: token_bool_exp},token_mutation_responseRequest]
    /** delete single row from the table: "token" */
    delete_token_by_pk?: [{id: Scalars['Int']},tokenRequest]
    /** insert data into the table: "dipdup_contract" */
    insert_dipdup_contract?: [{
    /** the rows to be inserted */
    objects: dipdup_contract_insert_input[],
    /** upsert condition */
    on_conflict?: (dipdup_contract_on_conflict | null)},dipdup_contract_mutation_responseRequest]
    /** insert data into the table: "dipdup_contract_metadata" */
    insert_dipdup_contract_metadata?: [{
    /** the rows to be inserted */
    objects: dipdup_contract_metadata_insert_input[],
    /** upsert condition */
    on_conflict?: (dipdup_contract_metadata_on_conflict | null)},dipdup_contract_metadata_mutation_responseRequest]
    /** insert a single row into the table: "dipdup_contract_metadata" */
    insert_dipdup_contract_metadata_one?: [{
    /** the row to be inserted */
    object: dipdup_contract_metadata_insert_input,
    /** upsert condition */
    on_conflict?: (dipdup_contract_metadata_on_conflict | null)},dipdup_contract_metadataRequest]
    /** insert a single row into the table: "dipdup_contract" */
    insert_dipdup_contract_one?: [{
    /** the row to be inserted */
    object: dipdup_contract_insert_input,
    /** upsert condition */
    on_conflict?: (dipdup_contract_on_conflict | null)},dipdup_contractRequest]
    /** insert data into the table: "dipdup_head" */
    insert_dipdup_head?: [{
    /** the rows to be inserted */
    objects: dipdup_head_insert_input[],
    /** upsert condition */
    on_conflict?: (dipdup_head_on_conflict | null)},dipdup_head_mutation_responseRequest]
    /** insert a single row into the table: "dipdup_head" */
    insert_dipdup_head_one?: [{
    /** the row to be inserted */
    object: dipdup_head_insert_input,
    /** upsert condition */
    on_conflict?: (dipdup_head_on_conflict | null)},dipdup_headRequest]
    /** insert data into the table: "dipdup_head_status" */
    insert_dipdup_head_status?: [{
    /** the rows to be inserted */
    objects: dipdup_head_status_insert_input[]},dipdup_head_status_mutation_responseRequest]
    /** insert a single row into the table: "dipdup_head_status" */
    insert_dipdup_head_status_one?: [{
    /** the row to be inserted */
    object: dipdup_head_status_insert_input},dipdup_head_statusRequest]
    /** insert data into the table: "dipdup_index" */
    insert_dipdup_index?: [{
    /** the rows to be inserted */
    objects: dipdup_index_insert_input[],
    /** upsert condition */
    on_conflict?: (dipdup_index_on_conflict | null)},dipdup_index_mutation_responseRequest]
    /** insert a single row into the table: "dipdup_index" */
    insert_dipdup_index_one?: [{
    /** the row to be inserted */
    object: dipdup_index_insert_input,
    /** upsert condition */
    on_conflict?: (dipdup_index_on_conflict | null)},dipdup_indexRequest]
    /** insert data into the table: "dipdup_schema" */
    insert_dipdup_schema?: [{
    /** the rows to be inserted */
    objects: dipdup_schema_insert_input[],
    /** upsert condition */
    on_conflict?: (dipdup_schema_on_conflict | null)},dipdup_schema_mutation_responseRequest]
    /** insert a single row into the table: "dipdup_schema" */
    insert_dipdup_schema_one?: [{
    /** the row to be inserted */
    object: dipdup_schema_insert_input,
    /** upsert condition */
    on_conflict?: (dipdup_schema_on_conflict | null)},dipdup_schemaRequest]
    /** insert data into the table: "dipdup_token_metadata" */
    insert_dipdup_token_metadata?: [{
    /** the rows to be inserted */
    objects: dipdup_token_metadata_insert_input[],
    /** upsert condition */
    on_conflict?: (dipdup_token_metadata_on_conflict | null)},dipdup_token_metadata_mutation_responseRequest]
    /** insert a single row into the table: "dipdup_token_metadata" */
    insert_dipdup_token_metadata_one?: [{
    /** the row to be inserted */
    object: dipdup_token_metadata_insert_input,
    /** upsert condition */
    on_conflict?: (dipdup_token_metadata_on_conflict | null)},dipdup_token_metadataRequest]
    /** insert data into the table: "ipfs" */
    insert_ipfs?: [{
    /** the rows to be inserted */
    objects: ipfs_insert_input[],
    /** upsert condition */
    on_conflict?: (ipfs_on_conflict | null)},ipfs_mutation_responseRequest]
    /** insert a single row into the table: "ipfs" */
    insert_ipfs_one?: [{
    /** the row to be inserted */
    object: ipfs_insert_input,
    /** upsert condition */
    on_conflict?: (ipfs_on_conflict | null)},ipfsRequest]
    /** insert data into the table: "listing" */
    insert_listing?: [{
    /** the rows to be inserted */
    objects: listing_insert_input[],
    /** upsert condition */
    on_conflict?: (listing_on_conflict | null)},listing_mutation_responseRequest]
    /** insert a single row into the table: "listing" */
    insert_listing_one?: [{
    /** the row to be inserted */
    object: listing_insert_input,
    /** upsert condition */
    on_conflict?: (listing_on_conflict | null)},listingRequest]
    /** insert data into the table: "loan" */
    insert_loan?: [{
    /** the rows to be inserted */
    objects: loan_insert_input[],
    /** upsert condition */
    on_conflict?: (loan_on_conflict | null)},loan_mutation_responseRequest]
    /** insert a single row into the table: "loan" */
    insert_loan_one?: [{
    /** the row to be inserted */
    object: loan_insert_input,
    /** upsert condition */
    on_conflict?: (loan_on_conflict | null)},loanRequest]
    /** insert data into the table: "offer" */
    insert_offer?: [{
    /** the rows to be inserted */
    objects: offer_insert_input[],
    /** upsert condition */
    on_conflict?: (offer_on_conflict | null)},offer_mutation_responseRequest]
    /** insert a single row into the table: "offer" */
    insert_offer_one?: [{
    /** the row to be inserted */
    object: offer_insert_input,
    /** upsert condition */
    on_conflict?: (offer_on_conflict | null)},offerRequest]
    /** insert data into the table: "token" */
    insert_token?: [{
    /** the rows to be inserted */
    objects: token_insert_input[],
    /** upsert condition */
    on_conflict?: (token_on_conflict | null)},token_mutation_responseRequest]
    /** insert a single row into the table: "token" */
    insert_token_one?: [{
    /** the row to be inserted */
    object: token_insert_input,
    /** upsert condition */
    on_conflict?: (token_on_conflict | null)},tokenRequest]
    /** update data of the table: "dipdup_contract" */
    update_dipdup_contract?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (dipdup_contract_set_input | null),
    /** filter the rows which have to be updated */
    where: dipdup_contract_bool_exp},dipdup_contract_mutation_responseRequest]
    /** update single row of the table: "dipdup_contract" */
    update_dipdup_contract_by_pk?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (dipdup_contract_set_input | null),pk_columns: dipdup_contract_pk_columns_input},dipdup_contractRequest]
    /** update data of the table: "dipdup_contract_metadata" */
    update_dipdup_contract_metadata?: [{
    /** append existing jsonb value of filtered columns with new jsonb value */
    _append?: (dipdup_contract_metadata_append_input | null),
    /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
    _delete_at_path?: (dipdup_contract_metadata_delete_at_path_input | null),
    /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
    _delete_elem?: (dipdup_contract_metadata_delete_elem_input | null),
    /** delete key/value pair or string element. key/value pairs are matched based on their key value */
    _delete_key?: (dipdup_contract_metadata_delete_key_input | null),
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (dipdup_contract_metadata_inc_input | null),
    /** prepend existing jsonb value of filtered columns with new jsonb value */
    _prepend?: (dipdup_contract_metadata_prepend_input | null),
    /** sets the columns of the filtered rows to the given values */
    _set?: (dipdup_contract_metadata_set_input | null),
    /** filter the rows which have to be updated */
    where: dipdup_contract_metadata_bool_exp},dipdup_contract_metadata_mutation_responseRequest]
    /** update single row of the table: "dipdup_contract_metadata" */
    update_dipdup_contract_metadata_by_pk?: [{
    /** append existing jsonb value of filtered columns with new jsonb value */
    _append?: (dipdup_contract_metadata_append_input | null),
    /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
    _delete_at_path?: (dipdup_contract_metadata_delete_at_path_input | null),
    /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
    _delete_elem?: (dipdup_contract_metadata_delete_elem_input | null),
    /** delete key/value pair or string element. key/value pairs are matched based on their key value */
    _delete_key?: (dipdup_contract_metadata_delete_key_input | null),
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (dipdup_contract_metadata_inc_input | null),
    /** prepend existing jsonb value of filtered columns with new jsonb value */
    _prepend?: (dipdup_contract_metadata_prepend_input | null),
    /** sets the columns of the filtered rows to the given values */
    _set?: (dipdup_contract_metadata_set_input | null),pk_columns: dipdup_contract_metadata_pk_columns_input},dipdup_contract_metadataRequest]
    /** update data of the table: "dipdup_head" */
    update_dipdup_head?: [{
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (dipdup_head_inc_input | null),
    /** sets the columns of the filtered rows to the given values */
    _set?: (dipdup_head_set_input | null),
    /** filter the rows which have to be updated */
    where: dipdup_head_bool_exp},dipdup_head_mutation_responseRequest]
    /** update single row of the table: "dipdup_head" */
    update_dipdup_head_by_pk?: [{
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (dipdup_head_inc_input | null),
    /** sets the columns of the filtered rows to the given values */
    _set?: (dipdup_head_set_input | null),pk_columns: dipdup_head_pk_columns_input},dipdup_headRequest]
    /** update data of the table: "dipdup_head_status" */
    update_dipdup_head_status?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (dipdup_head_status_set_input | null),
    /** filter the rows which have to be updated */
    where: dipdup_head_status_bool_exp},dipdup_head_status_mutation_responseRequest]
    /** update data of the table: "dipdup_index" */
    update_dipdup_index?: [{
    /** append existing jsonb value of filtered columns with new jsonb value */
    _append?: (dipdup_index_append_input | null),
    /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
    _delete_at_path?: (dipdup_index_delete_at_path_input | null),
    /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
    _delete_elem?: (dipdup_index_delete_elem_input | null),
    /** delete key/value pair or string element. key/value pairs are matched based on their key value */
    _delete_key?: (dipdup_index_delete_key_input | null),
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (dipdup_index_inc_input | null),
    /** prepend existing jsonb value of filtered columns with new jsonb value */
    _prepend?: (dipdup_index_prepend_input | null),
    /** sets the columns of the filtered rows to the given values */
    _set?: (dipdup_index_set_input | null),
    /** filter the rows which have to be updated */
    where: dipdup_index_bool_exp},dipdup_index_mutation_responseRequest]
    /** update single row of the table: "dipdup_index" */
    update_dipdup_index_by_pk?: [{
    /** append existing jsonb value of filtered columns with new jsonb value */
    _append?: (dipdup_index_append_input | null),
    /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
    _delete_at_path?: (dipdup_index_delete_at_path_input | null),
    /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
    _delete_elem?: (dipdup_index_delete_elem_input | null),
    /** delete key/value pair or string element. key/value pairs are matched based on their key value */
    _delete_key?: (dipdup_index_delete_key_input | null),
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (dipdup_index_inc_input | null),
    /** prepend existing jsonb value of filtered columns with new jsonb value */
    _prepend?: (dipdup_index_prepend_input | null),
    /** sets the columns of the filtered rows to the given values */
    _set?: (dipdup_index_set_input | null),pk_columns: dipdup_index_pk_columns_input},dipdup_indexRequest]
    /** update data of the table: "dipdup_schema" */
    update_dipdup_schema?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (dipdup_schema_set_input | null),
    /** filter the rows which have to be updated */
    where: dipdup_schema_bool_exp},dipdup_schema_mutation_responseRequest]
    /** update single row of the table: "dipdup_schema" */
    update_dipdup_schema_by_pk?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (dipdup_schema_set_input | null),pk_columns: dipdup_schema_pk_columns_input},dipdup_schemaRequest]
    /** update data of the table: "dipdup_token_metadata" */
    update_dipdup_token_metadata?: [{
    /** append existing jsonb value of filtered columns with new jsonb value */
    _append?: (dipdup_token_metadata_append_input | null),
    /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
    _delete_at_path?: (dipdup_token_metadata_delete_at_path_input | null),
    /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
    _delete_elem?: (dipdup_token_metadata_delete_elem_input | null),
    /** delete key/value pair or string element. key/value pairs are matched based on their key value */
    _delete_key?: (dipdup_token_metadata_delete_key_input | null),
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (dipdup_token_metadata_inc_input | null),
    /** prepend existing jsonb value of filtered columns with new jsonb value */
    _prepend?: (dipdup_token_metadata_prepend_input | null),
    /** sets the columns of the filtered rows to the given values */
    _set?: (dipdup_token_metadata_set_input | null),
    /** filter the rows which have to be updated */
    where: dipdup_token_metadata_bool_exp},dipdup_token_metadata_mutation_responseRequest]
    /** update single row of the table: "dipdup_token_metadata" */
    update_dipdup_token_metadata_by_pk?: [{
    /** append existing jsonb value of filtered columns with new jsonb value */
    _append?: (dipdup_token_metadata_append_input | null),
    /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
    _delete_at_path?: (dipdup_token_metadata_delete_at_path_input | null),
    /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
    _delete_elem?: (dipdup_token_metadata_delete_elem_input | null),
    /** delete key/value pair or string element. key/value pairs are matched based on their key value */
    _delete_key?: (dipdup_token_metadata_delete_key_input | null),
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (dipdup_token_metadata_inc_input | null),
    /** prepend existing jsonb value of filtered columns with new jsonb value */
    _prepend?: (dipdup_token_metadata_prepend_input | null),
    /** sets the columns of the filtered rows to the given values */
    _set?: (dipdup_token_metadata_set_input | null),pk_columns: dipdup_token_metadata_pk_columns_input},dipdup_token_metadataRequest]
    /** update data of the table: "ipfs" */
    update_ipfs?: [{
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (ipfs_inc_input | null),
    /** sets the columns of the filtered rows to the given values */
    _set?: (ipfs_set_input | null),
    /** filter the rows which have to be updated */
    where: ipfs_bool_exp},ipfs_mutation_responseRequest]
    /** update single row of the table: "ipfs" */
    update_ipfs_by_pk?: [{
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (ipfs_inc_input | null),
    /** sets the columns of the filtered rows to the given values */
    _set?: (ipfs_set_input | null),pk_columns: ipfs_pk_columns_input},ipfsRequest]
    /** update data of the table: "listing" */
    update_listing?: [{
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (listing_inc_input | null),
    /** sets the columns of the filtered rows to the given values */
    _set?: (listing_set_input | null),
    /** filter the rows which have to be updated */
    where: listing_bool_exp},listing_mutation_responseRequest]
    /** update single row of the table: "listing" */
    update_listing_by_pk?: [{
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (listing_inc_input | null),
    /** sets the columns of the filtered rows to the given values */
    _set?: (listing_set_input | null),pk_columns: listing_pk_columns_input},listingRequest]
    /** update data of the table: "loan" */
    update_loan?: [{
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (loan_inc_input | null),
    /** sets the columns of the filtered rows to the given values */
    _set?: (loan_set_input | null),
    /** filter the rows which have to be updated */
    where: loan_bool_exp},loan_mutation_responseRequest]
    /** update single row of the table: "loan" */
    update_loan_by_pk?: [{
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (loan_inc_input | null),
    /** sets the columns of the filtered rows to the given values */
    _set?: (loan_set_input | null),pk_columns: loan_pk_columns_input},loanRequest]
    /** update data of the table: "offer" */
    update_offer?: [{
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (offer_inc_input | null),
    /** sets the columns of the filtered rows to the given values */
    _set?: (offer_set_input | null),
    /** filter the rows which have to be updated */
    where: offer_bool_exp},offer_mutation_responseRequest]
    /** update single row of the table: "offer" */
    update_offer_by_pk?: [{
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (offer_inc_input | null),
    /** sets the columns of the filtered rows to the given values */
    _set?: (offer_set_input | null),pk_columns: offer_pk_columns_input},offerRequest]
    /** update data of the table: "token" */
    update_token?: [{
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (token_inc_input | null),
    /** sets the columns of the filtered rows to the given values */
    _set?: (token_set_input | null),
    /** filter the rows which have to be updated */
    where: token_bool_exp},token_mutation_responseRequest]
    /** update single row of the table: "token" */
    update_token_by_pk?: [{
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (token_inc_input | null),
    /** sets the columns of the filtered rows to the given values */
    _set?: (token_set_input | null),pk_columns: token_pk_columns_input},tokenRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "offer" */
export interface offerRequest{
    accepted?: boolean | number
    amount?: boolean | number
    cancelled?: boolean | number
    created_at?: boolean | number
    creator?: boolean | number
    duration?: boolean | number
    id?: boolean | number
    interest?: boolean | number
    /** An object relationship */
    listing?: listingRequest
    listing_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "offer" */
export interface offer_aggregateRequest{
    aggregate?: offer_aggregate_fieldsRequest
    nodes?: offerRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "offer" */
export interface offer_aggregate_fieldsRequest{
    avg?: offer_avg_fieldsRequest
    count?: [{columns?: (offer_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: offer_max_fieldsRequest
    min?: offer_min_fieldsRequest
    stddev?: offer_stddev_fieldsRequest
    stddev_pop?: offer_stddev_pop_fieldsRequest
    stddev_samp?: offer_stddev_samp_fieldsRequest
    sum?: offer_sum_fieldsRequest
    var_pop?: offer_var_pop_fieldsRequest
    var_samp?: offer_var_samp_fieldsRequest
    variance?: offer_variance_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "offer" */
export interface offer_aggregate_order_by {avg?: (offer_avg_order_by | null),count?: (order_by | null),max?: (offer_max_order_by | null),min?: (offer_min_order_by | null),stddev?: (offer_stddev_order_by | null),stddev_pop?: (offer_stddev_pop_order_by | null),stddev_samp?: (offer_stddev_samp_order_by | null),sum?: (offer_sum_order_by | null),var_pop?: (offer_var_pop_order_by | null),var_samp?: (offer_var_samp_order_by | null),variance?: (offer_variance_order_by | null)}


/** input type for inserting array relation for remote table "offer" */
export interface offer_arr_rel_insert_input {data: offer_insert_input[],
/** upsert condition */
on_conflict?: (offer_on_conflict | null)}


/** aggregate avg on columns */
export interface offer_avg_fieldsRequest{
    amount?: boolean | number
    duration?: boolean | number
    id?: boolean | number
    interest?: boolean | number
    listing_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "offer" */
export interface offer_avg_order_by {amount?: (order_by | null),duration?: (order_by | null),id?: (order_by | null),interest?: (order_by | null),listing_id?: (order_by | null)}


/** Boolean expression to filter rows from the table "offer". All fields are combined with a logical 'AND'. */
export interface offer_bool_exp {_and?: (offer_bool_exp[] | null),_not?: (offer_bool_exp | null),_or?: (offer_bool_exp[] | null),accepted?: (Boolean_comparison_exp | null),amount?: (Int_comparison_exp | null),cancelled?: (Boolean_comparison_exp | null),created_at?: (timestamptz_comparison_exp | null),creator?: (String_comparison_exp | null),duration?: (Int_comparison_exp | null),id?: (Int_comparison_exp | null),interest?: (Int_comparison_exp | null),listing?: (listing_bool_exp | null),listing_id?: (Int_comparison_exp | null)}


/** input type for incrementing numeric columns in table "offer" */
export interface offer_inc_input {amount?: (Scalars['Int'] | null),duration?: (Scalars['Int'] | null),id?: (Scalars['Int'] | null),interest?: (Scalars['Int'] | null),listing_id?: (Scalars['Int'] | null)}


/** input type for inserting data into table "offer" */
export interface offer_insert_input {accepted?: (Scalars['Boolean'] | null),amount?: (Scalars['Int'] | null),cancelled?: (Scalars['Boolean'] | null),created_at?: (Scalars['timestamptz'] | null),creator?: (Scalars['String'] | null),duration?: (Scalars['Int'] | null),id?: (Scalars['Int'] | null),interest?: (Scalars['Int'] | null),listing?: (listing_obj_rel_insert_input | null),listing_id?: (Scalars['Int'] | null)}


/** aggregate max on columns */
export interface offer_max_fieldsRequest{
    amount?: boolean | number
    created_at?: boolean | number
    creator?: boolean | number
    duration?: boolean | number
    id?: boolean | number
    interest?: boolean | number
    listing_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "offer" */
export interface offer_max_order_by {amount?: (order_by | null),created_at?: (order_by | null),creator?: (order_by | null),duration?: (order_by | null),id?: (order_by | null),interest?: (order_by | null),listing_id?: (order_by | null)}


/** aggregate min on columns */
export interface offer_min_fieldsRequest{
    amount?: boolean | number
    created_at?: boolean | number
    creator?: boolean | number
    duration?: boolean | number
    id?: boolean | number
    interest?: boolean | number
    listing_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "offer" */
export interface offer_min_order_by {amount?: (order_by | null),created_at?: (order_by | null),creator?: (order_by | null),duration?: (order_by | null),id?: (order_by | null),interest?: (order_by | null),listing_id?: (order_by | null)}


/** response of any mutation on the table "offer" */
export interface offer_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: offerRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "offer" */
export interface offer_on_conflict {constraint: offer_constraint,update_columns: offer_update_column[],where?: (offer_bool_exp | null)}


/** Ordering options when selecting data from "offer". */
export interface offer_order_by {accepted?: (order_by | null),amount?: (order_by | null),cancelled?: (order_by | null),created_at?: (order_by | null),creator?: (order_by | null),duration?: (order_by | null),id?: (order_by | null),interest?: (order_by | null),listing?: (listing_order_by | null),listing_id?: (order_by | null)}


/** primary key columns input for table: offer */
export interface offer_pk_columns_input {id: Scalars['Int']}


/** input type for updating data in table "offer" */
export interface offer_set_input {accepted?: (Scalars['Boolean'] | null),amount?: (Scalars['Int'] | null),cancelled?: (Scalars['Boolean'] | null),created_at?: (Scalars['timestamptz'] | null),creator?: (Scalars['String'] | null),duration?: (Scalars['Int'] | null),id?: (Scalars['Int'] | null),interest?: (Scalars['Int'] | null),listing_id?: (Scalars['Int'] | null)}


/** aggregate stddev on columns */
export interface offer_stddev_fieldsRequest{
    amount?: boolean | number
    duration?: boolean | number
    id?: boolean | number
    interest?: boolean | number
    listing_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "offer" */
export interface offer_stddev_order_by {amount?: (order_by | null),duration?: (order_by | null),id?: (order_by | null),interest?: (order_by | null),listing_id?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface offer_stddev_pop_fieldsRequest{
    amount?: boolean | number
    duration?: boolean | number
    id?: boolean | number
    interest?: boolean | number
    listing_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "offer" */
export interface offer_stddev_pop_order_by {amount?: (order_by | null),duration?: (order_by | null),id?: (order_by | null),interest?: (order_by | null),listing_id?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface offer_stddev_samp_fieldsRequest{
    amount?: boolean | number
    duration?: boolean | number
    id?: boolean | number
    interest?: boolean | number
    listing_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "offer" */
export interface offer_stddev_samp_order_by {amount?: (order_by | null),duration?: (order_by | null),id?: (order_by | null),interest?: (order_by | null),listing_id?: (order_by | null)}


/** aggregate sum on columns */
export interface offer_sum_fieldsRequest{
    amount?: boolean | number
    duration?: boolean | number
    id?: boolean | number
    interest?: boolean | number
    listing_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "offer" */
export interface offer_sum_order_by {amount?: (order_by | null),duration?: (order_by | null),id?: (order_by | null),interest?: (order_by | null),listing_id?: (order_by | null)}


/** aggregate var_pop on columns */
export interface offer_var_pop_fieldsRequest{
    amount?: boolean | number
    duration?: boolean | number
    id?: boolean | number
    interest?: boolean | number
    listing_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "offer" */
export interface offer_var_pop_order_by {amount?: (order_by | null),duration?: (order_by | null),id?: (order_by | null),interest?: (order_by | null),listing_id?: (order_by | null)}


/** aggregate var_samp on columns */
export interface offer_var_samp_fieldsRequest{
    amount?: boolean | number
    duration?: boolean | number
    id?: boolean | number
    interest?: boolean | number
    listing_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "offer" */
export interface offer_var_samp_order_by {amount?: (order_by | null),duration?: (order_by | null),id?: (order_by | null),interest?: (order_by | null),listing_id?: (order_by | null)}


/** aggregate variance on columns */
export interface offer_variance_fieldsRequest{
    amount?: boolean | number
    duration?: boolean | number
    id?: boolean | number
    interest?: boolean | number
    listing_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "offer" */
export interface offer_variance_order_by {amount?: (order_by | null),duration?: (order_by | null),id?: (order_by | null),interest?: (order_by | null),listing_id?: (order_by | null)}

export interface query_rootRequest{
    /** fetch data from the table: "dipdup_contract" */
    dipdup_contract?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_contract_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_contract_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_contract_bool_exp | null)},dipdup_contractRequest] | dipdup_contractRequest
    /** fetch aggregated fields from the table: "dipdup_contract" */
    dipdup_contract_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_contract_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_contract_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_contract_bool_exp | null)},dipdup_contract_aggregateRequest] | dipdup_contract_aggregateRequest
    /** fetch data from the table: "dipdup_contract" using primary key columns */
    dipdup_contract_by_pk?: [{name: Scalars['String']},dipdup_contractRequest]
    /** fetch data from the table: "dipdup_contract_metadata" */
    dipdup_contract_metadata?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_contract_metadata_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_contract_metadata_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_contract_metadata_bool_exp | null)},dipdup_contract_metadataRequest] | dipdup_contract_metadataRequest
    /** fetch aggregated fields from the table: "dipdup_contract_metadata" */
    dipdup_contract_metadata_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_contract_metadata_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_contract_metadata_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_contract_metadata_bool_exp | null)},dipdup_contract_metadata_aggregateRequest] | dipdup_contract_metadata_aggregateRequest
    /** fetch data from the table: "dipdup_contract_metadata" using primary key columns */
    dipdup_contract_metadata_by_pk?: [{id: Scalars['Int']},dipdup_contract_metadataRequest]
    /** fetch data from the table: "dipdup_head" */
    dipdup_head?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_head_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_head_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_head_bool_exp | null)},dipdup_headRequest] | dipdup_headRequest
    /** fetch aggregated fields from the table: "dipdup_head" */
    dipdup_head_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_head_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_head_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_head_bool_exp | null)},dipdup_head_aggregateRequest] | dipdup_head_aggregateRequest
    /** fetch data from the table: "dipdup_head" using primary key columns */
    dipdup_head_by_pk?: [{name: Scalars['String']},dipdup_headRequest]
    /** fetch data from the table: "dipdup_head_status" */
    dipdup_head_status?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_head_status_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_head_status_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_head_status_bool_exp | null)},dipdup_head_statusRequest] | dipdup_head_statusRequest
    /** fetch aggregated fields from the table: "dipdup_head_status" */
    dipdup_head_status_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_head_status_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_head_status_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_head_status_bool_exp | null)},dipdup_head_status_aggregateRequest] | dipdup_head_status_aggregateRequest
    /** fetch data from the table: "dipdup_index" */
    dipdup_index?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_index_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_index_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_index_bool_exp | null)},dipdup_indexRequest] | dipdup_indexRequest
    /** fetch aggregated fields from the table: "dipdup_index" */
    dipdup_index_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_index_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_index_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_index_bool_exp | null)},dipdup_index_aggregateRequest] | dipdup_index_aggregateRequest
    /** fetch data from the table: "dipdup_index" using primary key columns */
    dipdup_index_by_pk?: [{name: Scalars['String']},dipdup_indexRequest]
    /** fetch data from the table: "dipdup_schema" */
    dipdup_schema?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_schema_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_schema_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_schema_bool_exp | null)},dipdup_schemaRequest] | dipdup_schemaRequest
    /** fetch aggregated fields from the table: "dipdup_schema" */
    dipdup_schema_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_schema_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_schema_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_schema_bool_exp | null)},dipdup_schema_aggregateRequest] | dipdup_schema_aggregateRequest
    /** fetch data from the table: "dipdup_schema" using primary key columns */
    dipdup_schema_by_pk?: [{name: Scalars['String']},dipdup_schemaRequest]
    /** fetch data from the table: "dipdup_token_metadata" */
    dipdup_token_metadata?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_token_metadata_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_token_metadata_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_token_metadata_bool_exp | null)},dipdup_token_metadataRequest] | dipdup_token_metadataRequest
    /** fetch aggregated fields from the table: "dipdup_token_metadata" */
    dipdup_token_metadata_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_token_metadata_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_token_metadata_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_token_metadata_bool_exp | null)},dipdup_token_metadata_aggregateRequest] | dipdup_token_metadata_aggregateRequest
    /** fetch data from the table: "dipdup_token_metadata" using primary key columns */
    dipdup_token_metadata_by_pk?: [{id: Scalars['Int']},dipdup_token_metadataRequest]
    /** fetch data from the table: "ipfs" */
    ipfs?: [{
    /** distinct select on columns */
    distinct_on?: (ipfs_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (ipfs_order_by[] | null),
    /** filter the rows returned */
    where?: (ipfs_bool_exp | null)},ipfsRequest] | ipfsRequest
    /** fetch aggregated fields from the table: "ipfs" */
    ipfs_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (ipfs_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (ipfs_order_by[] | null),
    /** filter the rows returned */
    where?: (ipfs_bool_exp | null)},ipfs_aggregateRequest] | ipfs_aggregateRequest
    /** fetch data from the table: "ipfs" using primary key columns */
    ipfs_by_pk?: [{id: Scalars['Int']},ipfsRequest]
    /** An array relationship */
    listing?: [{
    /** distinct select on columns */
    distinct_on?: (listing_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (listing_order_by[] | null),
    /** filter the rows returned */
    where?: (listing_bool_exp | null)},listingRequest] | listingRequest
    /** An aggregate relationship */
    listing_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (listing_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (listing_order_by[] | null),
    /** filter the rows returned */
    where?: (listing_bool_exp | null)},listing_aggregateRequest] | listing_aggregateRequest
    /** fetch data from the table: "listing" using primary key columns */
    listing_by_pk?: [{id: Scalars['Int']},listingRequest]
    /** An array relationship */
    loan?: [{
    /** distinct select on columns */
    distinct_on?: (loan_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (loan_order_by[] | null),
    /** filter the rows returned */
    where?: (loan_bool_exp | null)},loanRequest] | loanRequest
    /** An aggregate relationship */
    loan_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (loan_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (loan_order_by[] | null),
    /** filter the rows returned */
    where?: (loan_bool_exp | null)},loan_aggregateRequest] | loan_aggregateRequest
    /** fetch data from the table: "loan" using primary key columns */
    loan_by_pk?: [{id: Scalars['Int']},loanRequest]
    /** fetch data from the table: "offer" */
    offer?: [{
    /** distinct select on columns */
    distinct_on?: (offer_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (offer_order_by[] | null),
    /** filter the rows returned */
    where?: (offer_bool_exp | null)},offerRequest] | offerRequest
    /** fetch aggregated fields from the table: "offer" */
    offer_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (offer_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (offer_order_by[] | null),
    /** filter the rows returned */
    where?: (offer_bool_exp | null)},offer_aggregateRequest] | offer_aggregateRequest
    /** fetch data from the table: "offer" using primary key columns */
    offer_by_pk?: [{id: Scalars['Int']},offerRequest]
    /** An array relationship */
    token?: [{
    /** distinct select on columns */
    distinct_on?: (token_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (token_order_by[] | null),
    /** filter the rows returned */
    where?: (token_bool_exp | null)},tokenRequest] | tokenRequest
    /** An aggregate relationship */
    token_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (token_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (token_order_by[] | null),
    /** filter the rows returned */
    where?: (token_bool_exp | null)},token_aggregateRequest] | token_aggregateRequest
    /** fetch data from the table: "token" using primary key columns */
    token_by_pk?: [{id: Scalars['Int']},tokenRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface subscription_rootRequest{
    /** fetch data from the table: "dipdup_contract" */
    dipdup_contract?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_contract_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_contract_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_contract_bool_exp | null)},dipdup_contractRequest] | dipdup_contractRequest
    /** fetch aggregated fields from the table: "dipdup_contract" */
    dipdup_contract_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_contract_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_contract_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_contract_bool_exp | null)},dipdup_contract_aggregateRequest] | dipdup_contract_aggregateRequest
    /** fetch data from the table: "dipdup_contract" using primary key columns */
    dipdup_contract_by_pk?: [{name: Scalars['String']},dipdup_contractRequest]
    /** fetch data from the table: "dipdup_contract_metadata" */
    dipdup_contract_metadata?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_contract_metadata_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_contract_metadata_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_contract_metadata_bool_exp | null)},dipdup_contract_metadataRequest] | dipdup_contract_metadataRequest
    /** fetch aggregated fields from the table: "dipdup_contract_metadata" */
    dipdup_contract_metadata_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_contract_metadata_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_contract_metadata_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_contract_metadata_bool_exp | null)},dipdup_contract_metadata_aggregateRequest] | dipdup_contract_metadata_aggregateRequest
    /** fetch data from the table: "dipdup_contract_metadata" using primary key columns */
    dipdup_contract_metadata_by_pk?: [{id: Scalars['Int']},dipdup_contract_metadataRequest]
    /** fetch data from the table: "dipdup_head" */
    dipdup_head?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_head_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_head_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_head_bool_exp | null)},dipdup_headRequest] | dipdup_headRequest
    /** fetch aggregated fields from the table: "dipdup_head" */
    dipdup_head_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_head_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_head_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_head_bool_exp | null)},dipdup_head_aggregateRequest] | dipdup_head_aggregateRequest
    /** fetch data from the table: "dipdup_head" using primary key columns */
    dipdup_head_by_pk?: [{name: Scalars['String']},dipdup_headRequest]
    /** fetch data from the table: "dipdup_head_status" */
    dipdup_head_status?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_head_status_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_head_status_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_head_status_bool_exp | null)},dipdup_head_statusRequest] | dipdup_head_statusRequest
    /** fetch aggregated fields from the table: "dipdup_head_status" */
    dipdup_head_status_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_head_status_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_head_status_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_head_status_bool_exp | null)},dipdup_head_status_aggregateRequest] | dipdup_head_status_aggregateRequest
    /** fetch data from the table: "dipdup_index" */
    dipdup_index?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_index_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_index_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_index_bool_exp | null)},dipdup_indexRequest] | dipdup_indexRequest
    /** fetch aggregated fields from the table: "dipdup_index" */
    dipdup_index_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_index_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_index_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_index_bool_exp | null)},dipdup_index_aggregateRequest] | dipdup_index_aggregateRequest
    /** fetch data from the table: "dipdup_index" using primary key columns */
    dipdup_index_by_pk?: [{name: Scalars['String']},dipdup_indexRequest]
    /** fetch data from the table: "dipdup_schema" */
    dipdup_schema?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_schema_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_schema_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_schema_bool_exp | null)},dipdup_schemaRequest] | dipdup_schemaRequest
    /** fetch aggregated fields from the table: "dipdup_schema" */
    dipdup_schema_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_schema_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_schema_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_schema_bool_exp | null)},dipdup_schema_aggregateRequest] | dipdup_schema_aggregateRequest
    /** fetch data from the table: "dipdup_schema" using primary key columns */
    dipdup_schema_by_pk?: [{name: Scalars['String']},dipdup_schemaRequest]
    /** fetch data from the table: "dipdup_token_metadata" */
    dipdup_token_metadata?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_token_metadata_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_token_metadata_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_token_metadata_bool_exp | null)},dipdup_token_metadataRequest] | dipdup_token_metadataRequest
    /** fetch aggregated fields from the table: "dipdup_token_metadata" */
    dipdup_token_metadata_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_token_metadata_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_token_metadata_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_token_metadata_bool_exp | null)},dipdup_token_metadata_aggregateRequest] | dipdup_token_metadata_aggregateRequest
    /** fetch data from the table: "dipdup_token_metadata" using primary key columns */
    dipdup_token_metadata_by_pk?: [{id: Scalars['Int']},dipdup_token_metadataRequest]
    /** fetch data from the table: "ipfs" */
    ipfs?: [{
    /** distinct select on columns */
    distinct_on?: (ipfs_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (ipfs_order_by[] | null),
    /** filter the rows returned */
    where?: (ipfs_bool_exp | null)},ipfsRequest] | ipfsRequest
    /** fetch aggregated fields from the table: "ipfs" */
    ipfs_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (ipfs_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (ipfs_order_by[] | null),
    /** filter the rows returned */
    where?: (ipfs_bool_exp | null)},ipfs_aggregateRequest] | ipfs_aggregateRequest
    /** fetch data from the table: "ipfs" using primary key columns */
    ipfs_by_pk?: [{id: Scalars['Int']},ipfsRequest]
    /** An array relationship */
    listing?: [{
    /** distinct select on columns */
    distinct_on?: (listing_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (listing_order_by[] | null),
    /** filter the rows returned */
    where?: (listing_bool_exp | null)},listingRequest] | listingRequest
    /** An aggregate relationship */
    listing_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (listing_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (listing_order_by[] | null),
    /** filter the rows returned */
    where?: (listing_bool_exp | null)},listing_aggregateRequest] | listing_aggregateRequest
    /** fetch data from the table: "listing" using primary key columns */
    listing_by_pk?: [{id: Scalars['Int']},listingRequest]
    /** An array relationship */
    loan?: [{
    /** distinct select on columns */
    distinct_on?: (loan_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (loan_order_by[] | null),
    /** filter the rows returned */
    where?: (loan_bool_exp | null)},loanRequest] | loanRequest
    /** An aggregate relationship */
    loan_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (loan_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (loan_order_by[] | null),
    /** filter the rows returned */
    where?: (loan_bool_exp | null)},loan_aggregateRequest] | loan_aggregateRequest
    /** fetch data from the table: "loan" using primary key columns */
    loan_by_pk?: [{id: Scalars['Int']},loanRequest]
    /** fetch data from the table: "offer" */
    offer?: [{
    /** distinct select on columns */
    distinct_on?: (offer_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (offer_order_by[] | null),
    /** filter the rows returned */
    where?: (offer_bool_exp | null)},offerRequest] | offerRequest
    /** fetch aggregated fields from the table: "offer" */
    offer_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (offer_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (offer_order_by[] | null),
    /** filter the rows returned */
    where?: (offer_bool_exp | null)},offer_aggregateRequest] | offer_aggregateRequest
    /** fetch data from the table: "offer" using primary key columns */
    offer_by_pk?: [{id: Scalars['Int']},offerRequest]
    /** An array relationship */
    token?: [{
    /** distinct select on columns */
    distinct_on?: (token_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (token_order_by[] | null),
    /** filter the rows returned */
    where?: (token_bool_exp | null)},tokenRequest] | tokenRequest
    /** An aggregate relationship */
    token_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (token_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (token_order_by[] | null),
    /** filter the rows returned */
    where?: (token_bool_exp | null)},token_aggregateRequest] | token_aggregateRequest
    /** fetch data from the table: "token" using primary key columns */
    token_by_pk?: [{id: Scalars['Int']},tokenRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface timestamptz_comparison_exp {_eq?: (Scalars['timestamptz'] | null),_gt?: (Scalars['timestamptz'] | null),_gte?: (Scalars['timestamptz'] | null),_in?: (Scalars['timestamptz'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['timestamptz'] | null),_lte?: (Scalars['timestamptz'] | null),_neq?: (Scalars['timestamptz'] | null),_nin?: (Scalars['timestamptz'][] | null)}


/** columns and relationships of "token" */
export interface tokenRequest{
    address?: boolean | number
    id?: boolean | number
    /** An object relationship */
    ipfs?: ipfsRequest
    ipfs_id?: boolean | number
    /** An array relationship */
    listing?: [{
    /** distinct select on columns */
    distinct_on?: (listing_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (listing_order_by[] | null),
    /** filter the rows returned */
    where?: (listing_bool_exp | null)},listingRequest] | listingRequest
    /** An aggregate relationship */
    listing_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (listing_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (listing_order_by[] | null),
    /** filter the rows returned */
    where?: (listing_bool_exp | null)},listing_aggregateRequest] | listing_aggregateRequest
    /** An array relationship */
    loan?: [{
    /** distinct select on columns */
    distinct_on?: (loan_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (loan_order_by[] | null),
    /** filter the rows returned */
    where?: (loan_bool_exp | null)},loanRequest] | loanRequest
    /** An aggregate relationship */
    loan_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (loan_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (loan_order_by[] | null),
    /** filter the rows returned */
    where?: (loan_bool_exp | null)},loan_aggregateRequest] | loan_aggregateRequest
    owner?: boolean | number
    token_id?: boolean | number
    uid?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "token" */
export interface token_aggregateRequest{
    aggregate?: token_aggregate_fieldsRequest
    nodes?: tokenRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "token" */
export interface token_aggregate_fieldsRequest{
    avg?: token_avg_fieldsRequest
    count?: [{columns?: (token_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: token_max_fieldsRequest
    min?: token_min_fieldsRequest
    stddev?: token_stddev_fieldsRequest
    stddev_pop?: token_stddev_pop_fieldsRequest
    stddev_samp?: token_stddev_samp_fieldsRequest
    sum?: token_sum_fieldsRequest
    var_pop?: token_var_pop_fieldsRequest
    var_samp?: token_var_samp_fieldsRequest
    variance?: token_variance_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "token" */
export interface token_aggregate_order_by {avg?: (token_avg_order_by | null),count?: (order_by | null),max?: (token_max_order_by | null),min?: (token_min_order_by | null),stddev?: (token_stddev_order_by | null),stddev_pop?: (token_stddev_pop_order_by | null),stddev_samp?: (token_stddev_samp_order_by | null),sum?: (token_sum_order_by | null),var_pop?: (token_var_pop_order_by | null),var_samp?: (token_var_samp_order_by | null),variance?: (token_variance_order_by | null)}


/** input type for inserting array relation for remote table "token" */
export interface token_arr_rel_insert_input {data: token_insert_input[],
/** upsert condition */
on_conflict?: (token_on_conflict | null)}


/** aggregate avg on columns */
export interface token_avg_fieldsRequest{
    id?: boolean | number
    ipfs_id?: boolean | number
    token_id?: boolean | number
    uid?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "token" */
export interface token_avg_order_by {id?: (order_by | null),ipfs_id?: (order_by | null),token_id?: (order_by | null),uid?: (order_by | null)}


/** Boolean expression to filter rows from the table "token". All fields are combined with a logical 'AND'. */
export interface token_bool_exp {_and?: (token_bool_exp[] | null),_not?: (token_bool_exp | null),_or?: (token_bool_exp[] | null),address?: (String_comparison_exp | null),id?: (Int_comparison_exp | null),ipfs?: (ipfs_bool_exp | null),ipfs_id?: (Int_comparison_exp | null),listing?: (listing_bool_exp | null),loan?: (loan_bool_exp | null),owner?: (String_comparison_exp | null),token_id?: (Int_comparison_exp | null),uid?: (Int_comparison_exp | null)}


/** input type for incrementing numeric columns in table "token" */
export interface token_inc_input {id?: (Scalars['Int'] | null),ipfs_id?: (Scalars['Int'] | null),token_id?: (Scalars['Int'] | null),uid?: (Scalars['Int'] | null)}


/** input type for inserting data into table "token" */
export interface token_insert_input {address?: (Scalars['String'] | null),id?: (Scalars['Int'] | null),ipfs?: (ipfs_obj_rel_insert_input | null),ipfs_id?: (Scalars['Int'] | null),listing?: (listing_arr_rel_insert_input | null),loan?: (loan_arr_rel_insert_input | null),owner?: (Scalars['String'] | null),token_id?: (Scalars['Int'] | null),uid?: (Scalars['Int'] | null)}


/** aggregate max on columns */
export interface token_max_fieldsRequest{
    address?: boolean | number
    id?: boolean | number
    ipfs_id?: boolean | number
    owner?: boolean | number
    token_id?: boolean | number
    uid?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "token" */
export interface token_max_order_by {address?: (order_by | null),id?: (order_by | null),ipfs_id?: (order_by | null),owner?: (order_by | null),token_id?: (order_by | null),uid?: (order_by | null)}


/** aggregate min on columns */
export interface token_min_fieldsRequest{
    address?: boolean | number
    id?: boolean | number
    ipfs_id?: boolean | number
    owner?: boolean | number
    token_id?: boolean | number
    uid?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "token" */
export interface token_min_order_by {address?: (order_by | null),id?: (order_by | null),ipfs_id?: (order_by | null),owner?: (order_by | null),token_id?: (order_by | null),uid?: (order_by | null)}


/** response of any mutation on the table "token" */
export interface token_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: tokenRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "token" */
export interface token_obj_rel_insert_input {data: token_insert_input,
/** upsert condition */
on_conflict?: (token_on_conflict | null)}


/** on_conflict condition type for table "token" */
export interface token_on_conflict {constraint: token_constraint,update_columns: token_update_column[],where?: (token_bool_exp | null)}


/** Ordering options when selecting data from "token". */
export interface token_order_by {address?: (order_by | null),id?: (order_by | null),ipfs?: (ipfs_order_by | null),ipfs_id?: (order_by | null),listing_aggregate?: (listing_aggregate_order_by | null),loan_aggregate?: (loan_aggregate_order_by | null),owner?: (order_by | null),token_id?: (order_by | null),uid?: (order_by | null)}


/** primary key columns input for table: token */
export interface token_pk_columns_input {id: Scalars['Int']}


/** input type for updating data in table "token" */
export interface token_set_input {address?: (Scalars['String'] | null),id?: (Scalars['Int'] | null),ipfs_id?: (Scalars['Int'] | null),owner?: (Scalars['String'] | null),token_id?: (Scalars['Int'] | null),uid?: (Scalars['Int'] | null)}


/** aggregate stddev on columns */
export interface token_stddev_fieldsRequest{
    id?: boolean | number
    ipfs_id?: boolean | number
    token_id?: boolean | number
    uid?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "token" */
export interface token_stddev_order_by {id?: (order_by | null),ipfs_id?: (order_by | null),token_id?: (order_by | null),uid?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface token_stddev_pop_fieldsRequest{
    id?: boolean | number
    ipfs_id?: boolean | number
    token_id?: boolean | number
    uid?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "token" */
export interface token_stddev_pop_order_by {id?: (order_by | null),ipfs_id?: (order_by | null),token_id?: (order_by | null),uid?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface token_stddev_samp_fieldsRequest{
    id?: boolean | number
    ipfs_id?: boolean | number
    token_id?: boolean | number
    uid?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "token" */
export interface token_stddev_samp_order_by {id?: (order_by | null),ipfs_id?: (order_by | null),token_id?: (order_by | null),uid?: (order_by | null)}


/** aggregate sum on columns */
export interface token_sum_fieldsRequest{
    id?: boolean | number
    ipfs_id?: boolean | number
    token_id?: boolean | number
    uid?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "token" */
export interface token_sum_order_by {id?: (order_by | null),ipfs_id?: (order_by | null),token_id?: (order_by | null),uid?: (order_by | null)}


/** aggregate var_pop on columns */
export interface token_var_pop_fieldsRequest{
    id?: boolean | number
    ipfs_id?: boolean | number
    token_id?: boolean | number
    uid?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "token" */
export interface token_var_pop_order_by {id?: (order_by | null),ipfs_id?: (order_by | null),token_id?: (order_by | null),uid?: (order_by | null)}


/** aggregate var_samp on columns */
export interface token_var_samp_fieldsRequest{
    id?: boolean | number
    ipfs_id?: boolean | number
    token_id?: boolean | number
    uid?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "token" */
export interface token_var_samp_order_by {id?: (order_by | null),ipfs_id?: (order_by | null),token_id?: (order_by | null),uid?: (order_by | null)}


/** aggregate variance on columns */
export interface token_variance_fieldsRequest{
    id?: boolean | number
    ipfs_id?: boolean | number
    token_id?: boolean | number
    uid?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "token" */
export interface token_variance_order_by {id?: (order_by | null),ipfs_id?: (order_by | null),token_id?: (order_by | null),uid?: (order_by | null)}

export type QueryRequest = query_rootRequest
export type MutationRequest = mutation_rootRequest
export type SubscriptionRequest = subscription_rootRequest


const dipdup_contract_possibleTypes: string[] = ['dipdup_contract']
export const isdipdup_contract = (obj?: { __typename?: any } | null): obj is dipdup_contract => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_contract"')
  return dipdup_contract_possibleTypes.includes(obj.__typename)
}



const dipdup_contract_aggregate_possibleTypes: string[] = ['dipdup_contract_aggregate']
export const isdipdup_contract_aggregate = (obj?: { __typename?: any } | null): obj is dipdup_contract_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_contract_aggregate"')
  return dipdup_contract_aggregate_possibleTypes.includes(obj.__typename)
}



const dipdup_contract_aggregate_fields_possibleTypes: string[] = ['dipdup_contract_aggregate_fields']
export const isdipdup_contract_aggregate_fields = (obj?: { __typename?: any } | null): obj is dipdup_contract_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_contract_aggregate_fields"')
  return dipdup_contract_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_contract_max_fields_possibleTypes: string[] = ['dipdup_contract_max_fields']
export const isdipdup_contract_max_fields = (obj?: { __typename?: any } | null): obj is dipdup_contract_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_contract_max_fields"')
  return dipdup_contract_max_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_contract_metadata_possibleTypes: string[] = ['dipdup_contract_metadata']
export const isdipdup_contract_metadata = (obj?: { __typename?: any } | null): obj is dipdup_contract_metadata => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_contract_metadata"')
  return dipdup_contract_metadata_possibleTypes.includes(obj.__typename)
}



const dipdup_contract_metadata_aggregate_possibleTypes: string[] = ['dipdup_contract_metadata_aggregate']
export const isdipdup_contract_metadata_aggregate = (obj?: { __typename?: any } | null): obj is dipdup_contract_metadata_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_contract_metadata_aggregate"')
  return dipdup_contract_metadata_aggregate_possibleTypes.includes(obj.__typename)
}



const dipdup_contract_metadata_aggregate_fields_possibleTypes: string[] = ['dipdup_contract_metadata_aggregate_fields']
export const isdipdup_contract_metadata_aggregate_fields = (obj?: { __typename?: any } | null): obj is dipdup_contract_metadata_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_contract_metadata_aggregate_fields"')
  return dipdup_contract_metadata_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_contract_metadata_avg_fields_possibleTypes: string[] = ['dipdup_contract_metadata_avg_fields']
export const isdipdup_contract_metadata_avg_fields = (obj?: { __typename?: any } | null): obj is dipdup_contract_metadata_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_contract_metadata_avg_fields"')
  return dipdup_contract_metadata_avg_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_contract_metadata_max_fields_possibleTypes: string[] = ['dipdup_contract_metadata_max_fields']
export const isdipdup_contract_metadata_max_fields = (obj?: { __typename?: any } | null): obj is dipdup_contract_metadata_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_contract_metadata_max_fields"')
  return dipdup_contract_metadata_max_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_contract_metadata_min_fields_possibleTypes: string[] = ['dipdup_contract_metadata_min_fields']
export const isdipdup_contract_metadata_min_fields = (obj?: { __typename?: any } | null): obj is dipdup_contract_metadata_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_contract_metadata_min_fields"')
  return dipdup_contract_metadata_min_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_contract_metadata_mutation_response_possibleTypes: string[] = ['dipdup_contract_metadata_mutation_response']
export const isdipdup_contract_metadata_mutation_response = (obj?: { __typename?: any } | null): obj is dipdup_contract_metadata_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_contract_metadata_mutation_response"')
  return dipdup_contract_metadata_mutation_response_possibleTypes.includes(obj.__typename)
}



const dipdup_contract_metadata_stddev_fields_possibleTypes: string[] = ['dipdup_contract_metadata_stddev_fields']
export const isdipdup_contract_metadata_stddev_fields = (obj?: { __typename?: any } | null): obj is dipdup_contract_metadata_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_contract_metadata_stddev_fields"')
  return dipdup_contract_metadata_stddev_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_contract_metadata_stddev_pop_fields_possibleTypes: string[] = ['dipdup_contract_metadata_stddev_pop_fields']
export const isdipdup_contract_metadata_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is dipdup_contract_metadata_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_contract_metadata_stddev_pop_fields"')
  return dipdup_contract_metadata_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_contract_metadata_stddev_samp_fields_possibleTypes: string[] = ['dipdup_contract_metadata_stddev_samp_fields']
export const isdipdup_contract_metadata_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is dipdup_contract_metadata_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_contract_metadata_stddev_samp_fields"')
  return dipdup_contract_metadata_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_contract_metadata_sum_fields_possibleTypes: string[] = ['dipdup_contract_metadata_sum_fields']
export const isdipdup_contract_metadata_sum_fields = (obj?: { __typename?: any } | null): obj is dipdup_contract_metadata_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_contract_metadata_sum_fields"')
  return dipdup_contract_metadata_sum_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_contract_metadata_var_pop_fields_possibleTypes: string[] = ['dipdup_contract_metadata_var_pop_fields']
export const isdipdup_contract_metadata_var_pop_fields = (obj?: { __typename?: any } | null): obj is dipdup_contract_metadata_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_contract_metadata_var_pop_fields"')
  return dipdup_contract_metadata_var_pop_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_contract_metadata_var_samp_fields_possibleTypes: string[] = ['dipdup_contract_metadata_var_samp_fields']
export const isdipdup_contract_metadata_var_samp_fields = (obj?: { __typename?: any } | null): obj is dipdup_contract_metadata_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_contract_metadata_var_samp_fields"')
  return dipdup_contract_metadata_var_samp_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_contract_metadata_variance_fields_possibleTypes: string[] = ['dipdup_contract_metadata_variance_fields']
export const isdipdup_contract_metadata_variance_fields = (obj?: { __typename?: any } | null): obj is dipdup_contract_metadata_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_contract_metadata_variance_fields"')
  return dipdup_contract_metadata_variance_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_contract_min_fields_possibleTypes: string[] = ['dipdup_contract_min_fields']
export const isdipdup_contract_min_fields = (obj?: { __typename?: any } | null): obj is dipdup_contract_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_contract_min_fields"')
  return dipdup_contract_min_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_contract_mutation_response_possibleTypes: string[] = ['dipdup_contract_mutation_response']
export const isdipdup_contract_mutation_response = (obj?: { __typename?: any } | null): obj is dipdup_contract_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_contract_mutation_response"')
  return dipdup_contract_mutation_response_possibleTypes.includes(obj.__typename)
}



const dipdup_head_possibleTypes: string[] = ['dipdup_head']
export const isdipdup_head = (obj?: { __typename?: any } | null): obj is dipdup_head => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head"')
  return dipdup_head_possibleTypes.includes(obj.__typename)
}



const dipdup_head_aggregate_possibleTypes: string[] = ['dipdup_head_aggregate']
export const isdipdup_head_aggregate = (obj?: { __typename?: any } | null): obj is dipdup_head_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head_aggregate"')
  return dipdup_head_aggregate_possibleTypes.includes(obj.__typename)
}



const dipdup_head_aggregate_fields_possibleTypes: string[] = ['dipdup_head_aggregate_fields']
export const isdipdup_head_aggregate_fields = (obj?: { __typename?: any } | null): obj is dipdup_head_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head_aggregate_fields"')
  return dipdup_head_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_head_avg_fields_possibleTypes: string[] = ['dipdup_head_avg_fields']
export const isdipdup_head_avg_fields = (obj?: { __typename?: any } | null): obj is dipdup_head_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head_avg_fields"')
  return dipdup_head_avg_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_head_max_fields_possibleTypes: string[] = ['dipdup_head_max_fields']
export const isdipdup_head_max_fields = (obj?: { __typename?: any } | null): obj is dipdup_head_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head_max_fields"')
  return dipdup_head_max_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_head_min_fields_possibleTypes: string[] = ['dipdup_head_min_fields']
export const isdipdup_head_min_fields = (obj?: { __typename?: any } | null): obj is dipdup_head_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head_min_fields"')
  return dipdup_head_min_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_head_mutation_response_possibleTypes: string[] = ['dipdup_head_mutation_response']
export const isdipdup_head_mutation_response = (obj?: { __typename?: any } | null): obj is dipdup_head_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head_mutation_response"')
  return dipdup_head_mutation_response_possibleTypes.includes(obj.__typename)
}



const dipdup_head_status_possibleTypes: string[] = ['dipdup_head_status']
export const isdipdup_head_status = (obj?: { __typename?: any } | null): obj is dipdup_head_status => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head_status"')
  return dipdup_head_status_possibleTypes.includes(obj.__typename)
}



const dipdup_head_status_aggregate_possibleTypes: string[] = ['dipdup_head_status_aggregate']
export const isdipdup_head_status_aggregate = (obj?: { __typename?: any } | null): obj is dipdup_head_status_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head_status_aggregate"')
  return dipdup_head_status_aggregate_possibleTypes.includes(obj.__typename)
}



const dipdup_head_status_aggregate_fields_possibleTypes: string[] = ['dipdup_head_status_aggregate_fields']
export const isdipdup_head_status_aggregate_fields = (obj?: { __typename?: any } | null): obj is dipdup_head_status_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head_status_aggregate_fields"')
  return dipdup_head_status_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_head_status_max_fields_possibleTypes: string[] = ['dipdup_head_status_max_fields']
export const isdipdup_head_status_max_fields = (obj?: { __typename?: any } | null): obj is dipdup_head_status_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head_status_max_fields"')
  return dipdup_head_status_max_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_head_status_min_fields_possibleTypes: string[] = ['dipdup_head_status_min_fields']
export const isdipdup_head_status_min_fields = (obj?: { __typename?: any } | null): obj is dipdup_head_status_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head_status_min_fields"')
  return dipdup_head_status_min_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_head_status_mutation_response_possibleTypes: string[] = ['dipdup_head_status_mutation_response']
export const isdipdup_head_status_mutation_response = (obj?: { __typename?: any } | null): obj is dipdup_head_status_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head_status_mutation_response"')
  return dipdup_head_status_mutation_response_possibleTypes.includes(obj.__typename)
}



const dipdup_head_stddev_fields_possibleTypes: string[] = ['dipdup_head_stddev_fields']
export const isdipdup_head_stddev_fields = (obj?: { __typename?: any } | null): obj is dipdup_head_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head_stddev_fields"')
  return dipdup_head_stddev_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_head_stddev_pop_fields_possibleTypes: string[] = ['dipdup_head_stddev_pop_fields']
export const isdipdup_head_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is dipdup_head_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head_stddev_pop_fields"')
  return dipdup_head_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_head_stddev_samp_fields_possibleTypes: string[] = ['dipdup_head_stddev_samp_fields']
export const isdipdup_head_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is dipdup_head_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head_stddev_samp_fields"')
  return dipdup_head_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_head_sum_fields_possibleTypes: string[] = ['dipdup_head_sum_fields']
export const isdipdup_head_sum_fields = (obj?: { __typename?: any } | null): obj is dipdup_head_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head_sum_fields"')
  return dipdup_head_sum_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_head_var_pop_fields_possibleTypes: string[] = ['dipdup_head_var_pop_fields']
export const isdipdup_head_var_pop_fields = (obj?: { __typename?: any } | null): obj is dipdup_head_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head_var_pop_fields"')
  return dipdup_head_var_pop_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_head_var_samp_fields_possibleTypes: string[] = ['dipdup_head_var_samp_fields']
export const isdipdup_head_var_samp_fields = (obj?: { __typename?: any } | null): obj is dipdup_head_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head_var_samp_fields"')
  return dipdup_head_var_samp_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_head_variance_fields_possibleTypes: string[] = ['dipdup_head_variance_fields']
export const isdipdup_head_variance_fields = (obj?: { __typename?: any } | null): obj is dipdup_head_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head_variance_fields"')
  return dipdup_head_variance_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_index_possibleTypes: string[] = ['dipdup_index']
export const isdipdup_index = (obj?: { __typename?: any } | null): obj is dipdup_index => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_index"')
  return dipdup_index_possibleTypes.includes(obj.__typename)
}



const dipdup_index_aggregate_possibleTypes: string[] = ['dipdup_index_aggregate']
export const isdipdup_index_aggregate = (obj?: { __typename?: any } | null): obj is dipdup_index_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_index_aggregate"')
  return dipdup_index_aggregate_possibleTypes.includes(obj.__typename)
}



const dipdup_index_aggregate_fields_possibleTypes: string[] = ['dipdup_index_aggregate_fields']
export const isdipdup_index_aggregate_fields = (obj?: { __typename?: any } | null): obj is dipdup_index_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_index_aggregate_fields"')
  return dipdup_index_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_index_avg_fields_possibleTypes: string[] = ['dipdup_index_avg_fields']
export const isdipdup_index_avg_fields = (obj?: { __typename?: any } | null): obj is dipdup_index_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_index_avg_fields"')
  return dipdup_index_avg_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_index_max_fields_possibleTypes: string[] = ['dipdup_index_max_fields']
export const isdipdup_index_max_fields = (obj?: { __typename?: any } | null): obj is dipdup_index_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_index_max_fields"')
  return dipdup_index_max_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_index_min_fields_possibleTypes: string[] = ['dipdup_index_min_fields']
export const isdipdup_index_min_fields = (obj?: { __typename?: any } | null): obj is dipdup_index_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_index_min_fields"')
  return dipdup_index_min_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_index_mutation_response_possibleTypes: string[] = ['dipdup_index_mutation_response']
export const isdipdup_index_mutation_response = (obj?: { __typename?: any } | null): obj is dipdup_index_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_index_mutation_response"')
  return dipdup_index_mutation_response_possibleTypes.includes(obj.__typename)
}



const dipdup_index_stddev_fields_possibleTypes: string[] = ['dipdup_index_stddev_fields']
export const isdipdup_index_stddev_fields = (obj?: { __typename?: any } | null): obj is dipdup_index_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_index_stddev_fields"')
  return dipdup_index_stddev_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_index_stddev_pop_fields_possibleTypes: string[] = ['dipdup_index_stddev_pop_fields']
export const isdipdup_index_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is dipdup_index_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_index_stddev_pop_fields"')
  return dipdup_index_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_index_stddev_samp_fields_possibleTypes: string[] = ['dipdup_index_stddev_samp_fields']
export const isdipdup_index_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is dipdup_index_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_index_stddev_samp_fields"')
  return dipdup_index_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_index_sum_fields_possibleTypes: string[] = ['dipdup_index_sum_fields']
export const isdipdup_index_sum_fields = (obj?: { __typename?: any } | null): obj is dipdup_index_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_index_sum_fields"')
  return dipdup_index_sum_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_index_var_pop_fields_possibleTypes: string[] = ['dipdup_index_var_pop_fields']
export const isdipdup_index_var_pop_fields = (obj?: { __typename?: any } | null): obj is dipdup_index_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_index_var_pop_fields"')
  return dipdup_index_var_pop_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_index_var_samp_fields_possibleTypes: string[] = ['dipdup_index_var_samp_fields']
export const isdipdup_index_var_samp_fields = (obj?: { __typename?: any } | null): obj is dipdup_index_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_index_var_samp_fields"')
  return dipdup_index_var_samp_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_index_variance_fields_possibleTypes: string[] = ['dipdup_index_variance_fields']
export const isdipdup_index_variance_fields = (obj?: { __typename?: any } | null): obj is dipdup_index_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_index_variance_fields"')
  return dipdup_index_variance_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_schema_possibleTypes: string[] = ['dipdup_schema']
export const isdipdup_schema = (obj?: { __typename?: any } | null): obj is dipdup_schema => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_schema"')
  return dipdup_schema_possibleTypes.includes(obj.__typename)
}



const dipdup_schema_aggregate_possibleTypes: string[] = ['dipdup_schema_aggregate']
export const isdipdup_schema_aggregate = (obj?: { __typename?: any } | null): obj is dipdup_schema_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_schema_aggregate"')
  return dipdup_schema_aggregate_possibleTypes.includes(obj.__typename)
}



const dipdup_schema_aggregate_fields_possibleTypes: string[] = ['dipdup_schema_aggregate_fields']
export const isdipdup_schema_aggregate_fields = (obj?: { __typename?: any } | null): obj is dipdup_schema_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_schema_aggregate_fields"')
  return dipdup_schema_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_schema_max_fields_possibleTypes: string[] = ['dipdup_schema_max_fields']
export const isdipdup_schema_max_fields = (obj?: { __typename?: any } | null): obj is dipdup_schema_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_schema_max_fields"')
  return dipdup_schema_max_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_schema_min_fields_possibleTypes: string[] = ['dipdup_schema_min_fields']
export const isdipdup_schema_min_fields = (obj?: { __typename?: any } | null): obj is dipdup_schema_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_schema_min_fields"')
  return dipdup_schema_min_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_schema_mutation_response_possibleTypes: string[] = ['dipdup_schema_mutation_response']
export const isdipdup_schema_mutation_response = (obj?: { __typename?: any } | null): obj is dipdup_schema_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_schema_mutation_response"')
  return dipdup_schema_mutation_response_possibleTypes.includes(obj.__typename)
}



const dipdup_token_metadata_possibleTypes: string[] = ['dipdup_token_metadata']
export const isdipdup_token_metadata = (obj?: { __typename?: any } | null): obj is dipdup_token_metadata => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_token_metadata"')
  return dipdup_token_metadata_possibleTypes.includes(obj.__typename)
}



const dipdup_token_metadata_aggregate_possibleTypes: string[] = ['dipdup_token_metadata_aggregate']
export const isdipdup_token_metadata_aggregate = (obj?: { __typename?: any } | null): obj is dipdup_token_metadata_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_token_metadata_aggregate"')
  return dipdup_token_metadata_aggregate_possibleTypes.includes(obj.__typename)
}



const dipdup_token_metadata_aggregate_fields_possibleTypes: string[] = ['dipdup_token_metadata_aggregate_fields']
export const isdipdup_token_metadata_aggregate_fields = (obj?: { __typename?: any } | null): obj is dipdup_token_metadata_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_token_metadata_aggregate_fields"')
  return dipdup_token_metadata_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_token_metadata_avg_fields_possibleTypes: string[] = ['dipdup_token_metadata_avg_fields']
export const isdipdup_token_metadata_avg_fields = (obj?: { __typename?: any } | null): obj is dipdup_token_metadata_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_token_metadata_avg_fields"')
  return dipdup_token_metadata_avg_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_token_metadata_max_fields_possibleTypes: string[] = ['dipdup_token_metadata_max_fields']
export const isdipdup_token_metadata_max_fields = (obj?: { __typename?: any } | null): obj is dipdup_token_metadata_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_token_metadata_max_fields"')
  return dipdup_token_metadata_max_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_token_metadata_min_fields_possibleTypes: string[] = ['dipdup_token_metadata_min_fields']
export const isdipdup_token_metadata_min_fields = (obj?: { __typename?: any } | null): obj is dipdup_token_metadata_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_token_metadata_min_fields"')
  return dipdup_token_metadata_min_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_token_metadata_mutation_response_possibleTypes: string[] = ['dipdup_token_metadata_mutation_response']
export const isdipdup_token_metadata_mutation_response = (obj?: { __typename?: any } | null): obj is dipdup_token_metadata_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_token_metadata_mutation_response"')
  return dipdup_token_metadata_mutation_response_possibleTypes.includes(obj.__typename)
}



const dipdup_token_metadata_stddev_fields_possibleTypes: string[] = ['dipdup_token_metadata_stddev_fields']
export const isdipdup_token_metadata_stddev_fields = (obj?: { __typename?: any } | null): obj is dipdup_token_metadata_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_token_metadata_stddev_fields"')
  return dipdup_token_metadata_stddev_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_token_metadata_stddev_pop_fields_possibleTypes: string[] = ['dipdup_token_metadata_stddev_pop_fields']
export const isdipdup_token_metadata_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is dipdup_token_metadata_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_token_metadata_stddev_pop_fields"')
  return dipdup_token_metadata_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_token_metadata_stddev_samp_fields_possibleTypes: string[] = ['dipdup_token_metadata_stddev_samp_fields']
export const isdipdup_token_metadata_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is dipdup_token_metadata_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_token_metadata_stddev_samp_fields"')
  return dipdup_token_metadata_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_token_metadata_sum_fields_possibleTypes: string[] = ['dipdup_token_metadata_sum_fields']
export const isdipdup_token_metadata_sum_fields = (obj?: { __typename?: any } | null): obj is dipdup_token_metadata_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_token_metadata_sum_fields"')
  return dipdup_token_metadata_sum_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_token_metadata_var_pop_fields_possibleTypes: string[] = ['dipdup_token_metadata_var_pop_fields']
export const isdipdup_token_metadata_var_pop_fields = (obj?: { __typename?: any } | null): obj is dipdup_token_metadata_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_token_metadata_var_pop_fields"')
  return dipdup_token_metadata_var_pop_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_token_metadata_var_samp_fields_possibleTypes: string[] = ['dipdup_token_metadata_var_samp_fields']
export const isdipdup_token_metadata_var_samp_fields = (obj?: { __typename?: any } | null): obj is dipdup_token_metadata_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_token_metadata_var_samp_fields"')
  return dipdup_token_metadata_var_samp_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_token_metadata_variance_fields_possibleTypes: string[] = ['dipdup_token_metadata_variance_fields']
export const isdipdup_token_metadata_variance_fields = (obj?: { __typename?: any } | null): obj is dipdup_token_metadata_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_token_metadata_variance_fields"')
  return dipdup_token_metadata_variance_fields_possibleTypes.includes(obj.__typename)
}



const ipfs_possibleTypes: string[] = ['ipfs']
export const isipfs = (obj?: { __typename?: any } | null): obj is ipfs => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isipfs"')
  return ipfs_possibleTypes.includes(obj.__typename)
}



const ipfs_aggregate_possibleTypes: string[] = ['ipfs_aggregate']
export const isipfs_aggregate = (obj?: { __typename?: any } | null): obj is ipfs_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isipfs_aggregate"')
  return ipfs_aggregate_possibleTypes.includes(obj.__typename)
}



const ipfs_aggregate_fields_possibleTypes: string[] = ['ipfs_aggregate_fields']
export const isipfs_aggregate_fields = (obj?: { __typename?: any } | null): obj is ipfs_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isipfs_aggregate_fields"')
  return ipfs_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const ipfs_avg_fields_possibleTypes: string[] = ['ipfs_avg_fields']
export const isipfs_avg_fields = (obj?: { __typename?: any } | null): obj is ipfs_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isipfs_avg_fields"')
  return ipfs_avg_fields_possibleTypes.includes(obj.__typename)
}



const ipfs_max_fields_possibleTypes: string[] = ['ipfs_max_fields']
export const isipfs_max_fields = (obj?: { __typename?: any } | null): obj is ipfs_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isipfs_max_fields"')
  return ipfs_max_fields_possibleTypes.includes(obj.__typename)
}



const ipfs_min_fields_possibleTypes: string[] = ['ipfs_min_fields']
export const isipfs_min_fields = (obj?: { __typename?: any } | null): obj is ipfs_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isipfs_min_fields"')
  return ipfs_min_fields_possibleTypes.includes(obj.__typename)
}



const ipfs_mutation_response_possibleTypes: string[] = ['ipfs_mutation_response']
export const isipfs_mutation_response = (obj?: { __typename?: any } | null): obj is ipfs_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isipfs_mutation_response"')
  return ipfs_mutation_response_possibleTypes.includes(obj.__typename)
}



const ipfs_stddev_fields_possibleTypes: string[] = ['ipfs_stddev_fields']
export const isipfs_stddev_fields = (obj?: { __typename?: any } | null): obj is ipfs_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isipfs_stddev_fields"')
  return ipfs_stddev_fields_possibleTypes.includes(obj.__typename)
}



const ipfs_stddev_pop_fields_possibleTypes: string[] = ['ipfs_stddev_pop_fields']
export const isipfs_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is ipfs_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isipfs_stddev_pop_fields"')
  return ipfs_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



const ipfs_stddev_samp_fields_possibleTypes: string[] = ['ipfs_stddev_samp_fields']
export const isipfs_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is ipfs_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isipfs_stddev_samp_fields"')
  return ipfs_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



const ipfs_sum_fields_possibleTypes: string[] = ['ipfs_sum_fields']
export const isipfs_sum_fields = (obj?: { __typename?: any } | null): obj is ipfs_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isipfs_sum_fields"')
  return ipfs_sum_fields_possibleTypes.includes(obj.__typename)
}



const ipfs_var_pop_fields_possibleTypes: string[] = ['ipfs_var_pop_fields']
export const isipfs_var_pop_fields = (obj?: { __typename?: any } | null): obj is ipfs_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isipfs_var_pop_fields"')
  return ipfs_var_pop_fields_possibleTypes.includes(obj.__typename)
}



const ipfs_var_samp_fields_possibleTypes: string[] = ['ipfs_var_samp_fields']
export const isipfs_var_samp_fields = (obj?: { __typename?: any } | null): obj is ipfs_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isipfs_var_samp_fields"')
  return ipfs_var_samp_fields_possibleTypes.includes(obj.__typename)
}



const ipfs_variance_fields_possibleTypes: string[] = ['ipfs_variance_fields']
export const isipfs_variance_fields = (obj?: { __typename?: any } | null): obj is ipfs_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isipfs_variance_fields"')
  return ipfs_variance_fields_possibleTypes.includes(obj.__typename)
}



const listing_possibleTypes: string[] = ['listing']
export const islisting = (obj?: { __typename?: any } | null): obj is listing => {
  if (!obj?.__typename) throw new Error('__typename is missing in "islisting"')
  return listing_possibleTypes.includes(obj.__typename)
}



const listing_aggregate_possibleTypes: string[] = ['listing_aggregate']
export const islisting_aggregate = (obj?: { __typename?: any } | null): obj is listing_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "islisting_aggregate"')
  return listing_aggregate_possibleTypes.includes(obj.__typename)
}



const listing_aggregate_fields_possibleTypes: string[] = ['listing_aggregate_fields']
export const islisting_aggregate_fields = (obj?: { __typename?: any } | null): obj is listing_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "islisting_aggregate_fields"')
  return listing_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const listing_avg_fields_possibleTypes: string[] = ['listing_avg_fields']
export const islisting_avg_fields = (obj?: { __typename?: any } | null): obj is listing_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "islisting_avg_fields"')
  return listing_avg_fields_possibleTypes.includes(obj.__typename)
}



const listing_max_fields_possibleTypes: string[] = ['listing_max_fields']
export const islisting_max_fields = (obj?: { __typename?: any } | null): obj is listing_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "islisting_max_fields"')
  return listing_max_fields_possibleTypes.includes(obj.__typename)
}



const listing_min_fields_possibleTypes: string[] = ['listing_min_fields']
export const islisting_min_fields = (obj?: { __typename?: any } | null): obj is listing_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "islisting_min_fields"')
  return listing_min_fields_possibleTypes.includes(obj.__typename)
}



const listing_mutation_response_possibleTypes: string[] = ['listing_mutation_response']
export const islisting_mutation_response = (obj?: { __typename?: any } | null): obj is listing_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "islisting_mutation_response"')
  return listing_mutation_response_possibleTypes.includes(obj.__typename)
}



const listing_stddev_fields_possibleTypes: string[] = ['listing_stddev_fields']
export const islisting_stddev_fields = (obj?: { __typename?: any } | null): obj is listing_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "islisting_stddev_fields"')
  return listing_stddev_fields_possibleTypes.includes(obj.__typename)
}



const listing_stddev_pop_fields_possibleTypes: string[] = ['listing_stddev_pop_fields']
export const islisting_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is listing_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "islisting_stddev_pop_fields"')
  return listing_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



const listing_stddev_samp_fields_possibleTypes: string[] = ['listing_stddev_samp_fields']
export const islisting_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is listing_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "islisting_stddev_samp_fields"')
  return listing_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



const listing_sum_fields_possibleTypes: string[] = ['listing_sum_fields']
export const islisting_sum_fields = (obj?: { __typename?: any } | null): obj is listing_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "islisting_sum_fields"')
  return listing_sum_fields_possibleTypes.includes(obj.__typename)
}



const listing_var_pop_fields_possibleTypes: string[] = ['listing_var_pop_fields']
export const islisting_var_pop_fields = (obj?: { __typename?: any } | null): obj is listing_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "islisting_var_pop_fields"')
  return listing_var_pop_fields_possibleTypes.includes(obj.__typename)
}



const listing_var_samp_fields_possibleTypes: string[] = ['listing_var_samp_fields']
export const islisting_var_samp_fields = (obj?: { __typename?: any } | null): obj is listing_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "islisting_var_samp_fields"')
  return listing_var_samp_fields_possibleTypes.includes(obj.__typename)
}



const listing_variance_fields_possibleTypes: string[] = ['listing_variance_fields']
export const islisting_variance_fields = (obj?: { __typename?: any } | null): obj is listing_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "islisting_variance_fields"')
  return listing_variance_fields_possibleTypes.includes(obj.__typename)
}



const loan_possibleTypes: string[] = ['loan']
export const isloan = (obj?: { __typename?: any } | null): obj is loan => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isloan"')
  return loan_possibleTypes.includes(obj.__typename)
}



const loan_aggregate_possibleTypes: string[] = ['loan_aggregate']
export const isloan_aggregate = (obj?: { __typename?: any } | null): obj is loan_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isloan_aggregate"')
  return loan_aggregate_possibleTypes.includes(obj.__typename)
}



const loan_aggregate_fields_possibleTypes: string[] = ['loan_aggregate_fields']
export const isloan_aggregate_fields = (obj?: { __typename?: any } | null): obj is loan_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isloan_aggregate_fields"')
  return loan_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const loan_avg_fields_possibleTypes: string[] = ['loan_avg_fields']
export const isloan_avg_fields = (obj?: { __typename?: any } | null): obj is loan_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isloan_avg_fields"')
  return loan_avg_fields_possibleTypes.includes(obj.__typename)
}



const loan_max_fields_possibleTypes: string[] = ['loan_max_fields']
export const isloan_max_fields = (obj?: { __typename?: any } | null): obj is loan_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isloan_max_fields"')
  return loan_max_fields_possibleTypes.includes(obj.__typename)
}



const loan_min_fields_possibleTypes: string[] = ['loan_min_fields']
export const isloan_min_fields = (obj?: { __typename?: any } | null): obj is loan_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isloan_min_fields"')
  return loan_min_fields_possibleTypes.includes(obj.__typename)
}



const loan_mutation_response_possibleTypes: string[] = ['loan_mutation_response']
export const isloan_mutation_response = (obj?: { __typename?: any } | null): obj is loan_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isloan_mutation_response"')
  return loan_mutation_response_possibleTypes.includes(obj.__typename)
}



const loan_stddev_fields_possibleTypes: string[] = ['loan_stddev_fields']
export const isloan_stddev_fields = (obj?: { __typename?: any } | null): obj is loan_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isloan_stddev_fields"')
  return loan_stddev_fields_possibleTypes.includes(obj.__typename)
}



const loan_stddev_pop_fields_possibleTypes: string[] = ['loan_stddev_pop_fields']
export const isloan_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is loan_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isloan_stddev_pop_fields"')
  return loan_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



const loan_stddev_samp_fields_possibleTypes: string[] = ['loan_stddev_samp_fields']
export const isloan_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is loan_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isloan_stddev_samp_fields"')
  return loan_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



const loan_sum_fields_possibleTypes: string[] = ['loan_sum_fields']
export const isloan_sum_fields = (obj?: { __typename?: any } | null): obj is loan_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isloan_sum_fields"')
  return loan_sum_fields_possibleTypes.includes(obj.__typename)
}



const loan_var_pop_fields_possibleTypes: string[] = ['loan_var_pop_fields']
export const isloan_var_pop_fields = (obj?: { __typename?: any } | null): obj is loan_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isloan_var_pop_fields"')
  return loan_var_pop_fields_possibleTypes.includes(obj.__typename)
}



const loan_var_samp_fields_possibleTypes: string[] = ['loan_var_samp_fields']
export const isloan_var_samp_fields = (obj?: { __typename?: any } | null): obj is loan_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isloan_var_samp_fields"')
  return loan_var_samp_fields_possibleTypes.includes(obj.__typename)
}



const loan_variance_fields_possibleTypes: string[] = ['loan_variance_fields']
export const isloan_variance_fields = (obj?: { __typename?: any } | null): obj is loan_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isloan_variance_fields"')
  return loan_variance_fields_possibleTypes.includes(obj.__typename)
}



const mutation_root_possibleTypes: string[] = ['mutation_root']
export const ismutation_root = (obj?: { __typename?: any } | null): obj is mutation_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismutation_root"')
  return mutation_root_possibleTypes.includes(obj.__typename)
}



const offer_possibleTypes: string[] = ['offer']
export const isoffer = (obj?: { __typename?: any } | null): obj is offer => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isoffer"')
  return offer_possibleTypes.includes(obj.__typename)
}



const offer_aggregate_possibleTypes: string[] = ['offer_aggregate']
export const isoffer_aggregate = (obj?: { __typename?: any } | null): obj is offer_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isoffer_aggregate"')
  return offer_aggregate_possibleTypes.includes(obj.__typename)
}



const offer_aggregate_fields_possibleTypes: string[] = ['offer_aggregate_fields']
export const isoffer_aggregate_fields = (obj?: { __typename?: any } | null): obj is offer_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isoffer_aggregate_fields"')
  return offer_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const offer_avg_fields_possibleTypes: string[] = ['offer_avg_fields']
export const isoffer_avg_fields = (obj?: { __typename?: any } | null): obj is offer_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isoffer_avg_fields"')
  return offer_avg_fields_possibleTypes.includes(obj.__typename)
}



const offer_max_fields_possibleTypes: string[] = ['offer_max_fields']
export const isoffer_max_fields = (obj?: { __typename?: any } | null): obj is offer_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isoffer_max_fields"')
  return offer_max_fields_possibleTypes.includes(obj.__typename)
}



const offer_min_fields_possibleTypes: string[] = ['offer_min_fields']
export const isoffer_min_fields = (obj?: { __typename?: any } | null): obj is offer_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isoffer_min_fields"')
  return offer_min_fields_possibleTypes.includes(obj.__typename)
}



const offer_mutation_response_possibleTypes: string[] = ['offer_mutation_response']
export const isoffer_mutation_response = (obj?: { __typename?: any } | null): obj is offer_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isoffer_mutation_response"')
  return offer_mutation_response_possibleTypes.includes(obj.__typename)
}



const offer_stddev_fields_possibleTypes: string[] = ['offer_stddev_fields']
export const isoffer_stddev_fields = (obj?: { __typename?: any } | null): obj is offer_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isoffer_stddev_fields"')
  return offer_stddev_fields_possibleTypes.includes(obj.__typename)
}



const offer_stddev_pop_fields_possibleTypes: string[] = ['offer_stddev_pop_fields']
export const isoffer_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is offer_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isoffer_stddev_pop_fields"')
  return offer_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



const offer_stddev_samp_fields_possibleTypes: string[] = ['offer_stddev_samp_fields']
export const isoffer_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is offer_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isoffer_stddev_samp_fields"')
  return offer_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



const offer_sum_fields_possibleTypes: string[] = ['offer_sum_fields']
export const isoffer_sum_fields = (obj?: { __typename?: any } | null): obj is offer_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isoffer_sum_fields"')
  return offer_sum_fields_possibleTypes.includes(obj.__typename)
}



const offer_var_pop_fields_possibleTypes: string[] = ['offer_var_pop_fields']
export const isoffer_var_pop_fields = (obj?: { __typename?: any } | null): obj is offer_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isoffer_var_pop_fields"')
  return offer_var_pop_fields_possibleTypes.includes(obj.__typename)
}



const offer_var_samp_fields_possibleTypes: string[] = ['offer_var_samp_fields']
export const isoffer_var_samp_fields = (obj?: { __typename?: any } | null): obj is offer_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isoffer_var_samp_fields"')
  return offer_var_samp_fields_possibleTypes.includes(obj.__typename)
}



const offer_variance_fields_possibleTypes: string[] = ['offer_variance_fields']
export const isoffer_variance_fields = (obj?: { __typename?: any } | null): obj is offer_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isoffer_variance_fields"')
  return offer_variance_fields_possibleTypes.includes(obj.__typename)
}



const query_root_possibleTypes: string[] = ['query_root']
export const isquery_root = (obj?: { __typename?: any } | null): obj is query_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isquery_root"')
  return query_root_possibleTypes.includes(obj.__typename)
}



const subscription_root_possibleTypes: string[] = ['subscription_root']
export const issubscription_root = (obj?: { __typename?: any } | null): obj is subscription_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "issubscription_root"')
  return subscription_root_possibleTypes.includes(obj.__typename)
}



const token_possibleTypes: string[] = ['token']
export const istoken = (obj?: { __typename?: any } | null): obj is token => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istoken"')
  return token_possibleTypes.includes(obj.__typename)
}



const token_aggregate_possibleTypes: string[] = ['token_aggregate']
export const istoken_aggregate = (obj?: { __typename?: any } | null): obj is token_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istoken_aggregate"')
  return token_aggregate_possibleTypes.includes(obj.__typename)
}



const token_aggregate_fields_possibleTypes: string[] = ['token_aggregate_fields']
export const istoken_aggregate_fields = (obj?: { __typename?: any } | null): obj is token_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istoken_aggregate_fields"')
  return token_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const token_avg_fields_possibleTypes: string[] = ['token_avg_fields']
export const istoken_avg_fields = (obj?: { __typename?: any } | null): obj is token_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istoken_avg_fields"')
  return token_avg_fields_possibleTypes.includes(obj.__typename)
}



const token_max_fields_possibleTypes: string[] = ['token_max_fields']
export const istoken_max_fields = (obj?: { __typename?: any } | null): obj is token_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istoken_max_fields"')
  return token_max_fields_possibleTypes.includes(obj.__typename)
}



const token_min_fields_possibleTypes: string[] = ['token_min_fields']
export const istoken_min_fields = (obj?: { __typename?: any } | null): obj is token_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istoken_min_fields"')
  return token_min_fields_possibleTypes.includes(obj.__typename)
}



const token_mutation_response_possibleTypes: string[] = ['token_mutation_response']
export const istoken_mutation_response = (obj?: { __typename?: any } | null): obj is token_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istoken_mutation_response"')
  return token_mutation_response_possibleTypes.includes(obj.__typename)
}



const token_stddev_fields_possibleTypes: string[] = ['token_stddev_fields']
export const istoken_stddev_fields = (obj?: { __typename?: any } | null): obj is token_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istoken_stddev_fields"')
  return token_stddev_fields_possibleTypes.includes(obj.__typename)
}



const token_stddev_pop_fields_possibleTypes: string[] = ['token_stddev_pop_fields']
export const istoken_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is token_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istoken_stddev_pop_fields"')
  return token_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



const token_stddev_samp_fields_possibleTypes: string[] = ['token_stddev_samp_fields']
export const istoken_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is token_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istoken_stddev_samp_fields"')
  return token_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



const token_sum_fields_possibleTypes: string[] = ['token_sum_fields']
export const istoken_sum_fields = (obj?: { __typename?: any } | null): obj is token_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istoken_sum_fields"')
  return token_sum_fields_possibleTypes.includes(obj.__typename)
}



const token_var_pop_fields_possibleTypes: string[] = ['token_var_pop_fields']
export const istoken_var_pop_fields = (obj?: { __typename?: any } | null): obj is token_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istoken_var_pop_fields"')
  return token_var_pop_fields_possibleTypes.includes(obj.__typename)
}



const token_var_samp_fields_possibleTypes: string[] = ['token_var_samp_fields']
export const istoken_var_samp_fields = (obj?: { __typename?: any } | null): obj is token_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istoken_var_samp_fields"')
  return token_var_samp_fields_possibleTypes.includes(obj.__typename)
}



const token_variance_fields_possibleTypes: string[] = ['token_variance_fields']
export const istoken_variance_fields = (obj?: { __typename?: any } | null): obj is token_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istoken_variance_fields"')
  return token_variance_fields_possibleTypes.includes(obj.__typename)
}



/** columns and relationships of "dipdup_contract" */
export interface dipdup_contractPromiseChain{
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    typename: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_contract" */
export interface dipdup_contractObservableChain{
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    typename: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}


/** aggregated selection of "dipdup_contract" */
export interface dipdup_contract_aggregatePromiseChain{
    aggregate: (dipdup_contract_aggregate_fieldsPromiseChain & {get: <R extends dipdup_contract_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Promise<FieldsSelection<dipdup_contract, R>[]>})
}


/** aggregated selection of "dipdup_contract" */
export interface dipdup_contract_aggregateObservableChain{
    aggregate: (dipdup_contract_aggregate_fieldsObservableChain & {get: <R extends dipdup_contract_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Observable<FieldsSelection<dipdup_contract, R>[]>})
}


/** aggregate fields of "dipdup_contract" */
export interface dipdup_contract_aggregate_fieldsPromiseChain{
    count: ((args?: {columns?: (dipdup_contract_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (dipdup_contract_max_fieldsPromiseChain & {get: <R extends dipdup_contract_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_max_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract_max_fields, R> | undefined)>}),
    min: (dipdup_contract_min_fieldsPromiseChain & {get: <R extends dipdup_contract_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_min_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract_min_fields, R> | undefined)>})
}


/** aggregate fields of "dipdup_contract" */
export interface dipdup_contract_aggregate_fieldsObservableChain{
    count: ((args?: {columns?: (dipdup_contract_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (dipdup_contract_max_fieldsObservableChain & {get: <R extends dipdup_contract_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_max_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract_max_fields, R> | undefined)>}),
    min: (dipdup_contract_min_fieldsObservableChain & {get: <R extends dipdup_contract_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_min_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract_min_fields, R> | undefined)>})
}


/** aggregate max on columns */
export interface dipdup_contract_max_fieldsPromiseChain{
    address: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    typename: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate max on columns */
export interface dipdup_contract_max_fieldsObservableChain{
    address: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    typename: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
}


/** columns and relationships of "dipdup_contract_metadata" */
export interface dipdup_contract_metadataPromiseChain{
    contract: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    metadata: ((args?: {
/** JSON select path */
path?: (Scalars['String'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Promise<Scalars['jsonb']>})&({get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Promise<Scalars['jsonb']>}),
    network: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_contract_metadata" */
export interface dipdup_contract_metadataObservableChain{
    contract: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    metadata: ((args?: {
/** JSON select path */
path?: (Scalars['String'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Observable<Scalars['jsonb']>})&({get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Observable<Scalars['jsonb']>}),
    network: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}


/** aggregated selection of "dipdup_contract_metadata" */
export interface dipdup_contract_metadata_aggregatePromiseChain{
    aggregate: (dipdup_contract_metadata_aggregate_fieldsPromiseChain & {get: <R extends dipdup_contract_metadata_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract_metadata_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata, R>[]) => Promise<FieldsSelection<dipdup_contract_metadata, R>[]>})
}


/** aggregated selection of "dipdup_contract_metadata" */
export interface dipdup_contract_metadata_aggregateObservableChain{
    aggregate: (dipdup_contract_metadata_aggregate_fieldsObservableChain & {get: <R extends dipdup_contract_metadata_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract_metadata_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata, R>[]) => Observable<FieldsSelection<dipdup_contract_metadata, R>[]>})
}


/** aggregate fields of "dipdup_contract_metadata" */
export interface dipdup_contract_metadata_aggregate_fieldsPromiseChain{
    avg: (dipdup_contract_metadata_avg_fieldsPromiseChain & {get: <R extends dipdup_contract_metadata_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata_avg_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract_metadata_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (dipdup_contract_metadata_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (dipdup_contract_metadata_max_fieldsPromiseChain & {get: <R extends dipdup_contract_metadata_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata_max_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract_metadata_max_fields, R> | undefined)>}),
    min: (dipdup_contract_metadata_min_fieldsPromiseChain & {get: <R extends dipdup_contract_metadata_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata_min_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract_metadata_min_fields, R> | undefined)>}),
    stddev: (dipdup_contract_metadata_stddev_fieldsPromiseChain & {get: <R extends dipdup_contract_metadata_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata_stddev_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract_metadata_stddev_fields, R> | undefined)>}),
    stddev_pop: (dipdup_contract_metadata_stddev_pop_fieldsPromiseChain & {get: <R extends dipdup_contract_metadata_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata_stddev_pop_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract_metadata_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (dipdup_contract_metadata_stddev_samp_fieldsPromiseChain & {get: <R extends dipdup_contract_metadata_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata_stddev_samp_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract_metadata_stddev_samp_fields, R> | undefined)>}),
    sum: (dipdup_contract_metadata_sum_fieldsPromiseChain & {get: <R extends dipdup_contract_metadata_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata_sum_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract_metadata_sum_fields, R> | undefined)>}),
    var_pop: (dipdup_contract_metadata_var_pop_fieldsPromiseChain & {get: <R extends dipdup_contract_metadata_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata_var_pop_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract_metadata_var_pop_fields, R> | undefined)>}),
    var_samp: (dipdup_contract_metadata_var_samp_fieldsPromiseChain & {get: <R extends dipdup_contract_metadata_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata_var_samp_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract_metadata_var_samp_fields, R> | undefined)>}),
    variance: (dipdup_contract_metadata_variance_fieldsPromiseChain & {get: <R extends dipdup_contract_metadata_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata_variance_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract_metadata_variance_fields, R> | undefined)>})
}


/** aggregate fields of "dipdup_contract_metadata" */
export interface dipdup_contract_metadata_aggregate_fieldsObservableChain{
    avg: (dipdup_contract_metadata_avg_fieldsObservableChain & {get: <R extends dipdup_contract_metadata_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata_avg_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract_metadata_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (dipdup_contract_metadata_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (dipdup_contract_metadata_max_fieldsObservableChain & {get: <R extends dipdup_contract_metadata_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata_max_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract_metadata_max_fields, R> | undefined)>}),
    min: (dipdup_contract_metadata_min_fieldsObservableChain & {get: <R extends dipdup_contract_metadata_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata_min_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract_metadata_min_fields, R> | undefined)>}),
    stddev: (dipdup_contract_metadata_stddev_fieldsObservableChain & {get: <R extends dipdup_contract_metadata_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata_stddev_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract_metadata_stddev_fields, R> | undefined)>}),
    stddev_pop: (dipdup_contract_metadata_stddev_pop_fieldsObservableChain & {get: <R extends dipdup_contract_metadata_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata_stddev_pop_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract_metadata_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (dipdup_contract_metadata_stddev_samp_fieldsObservableChain & {get: <R extends dipdup_contract_metadata_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata_stddev_samp_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract_metadata_stddev_samp_fields, R> | undefined)>}),
    sum: (dipdup_contract_metadata_sum_fieldsObservableChain & {get: <R extends dipdup_contract_metadata_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata_sum_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract_metadata_sum_fields, R> | undefined)>}),
    var_pop: (dipdup_contract_metadata_var_pop_fieldsObservableChain & {get: <R extends dipdup_contract_metadata_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata_var_pop_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract_metadata_var_pop_fields, R> | undefined)>}),
    var_samp: (dipdup_contract_metadata_var_samp_fieldsObservableChain & {get: <R extends dipdup_contract_metadata_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata_var_samp_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract_metadata_var_samp_fields, R> | undefined)>}),
    variance: (dipdup_contract_metadata_variance_fieldsObservableChain & {get: <R extends dipdup_contract_metadata_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata_variance_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract_metadata_variance_fields, R> | undefined)>})
}


/** aggregate avg on columns */
export interface dipdup_contract_metadata_avg_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate avg on columns */
export interface dipdup_contract_metadata_avg_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate max on columns */
export interface dipdup_contract_metadata_max_fieldsPromiseChain{
    contract: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    network: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate max on columns */
export interface dipdup_contract_metadata_max_fieldsObservableChain{
    contract: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    network: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate min on columns */
export interface dipdup_contract_metadata_min_fieldsPromiseChain{
    contract: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    network: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate min on columns */
export interface dipdup_contract_metadata_min_fieldsObservableChain{
    contract: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    network: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
}


/** response of any mutation on the table "dipdup_contract_metadata" */
export interface dipdup_contract_metadata_mutation_responsePromiseChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata, R>[]) => Promise<FieldsSelection<dipdup_contract_metadata, R>[]>})
}


/** response of any mutation on the table "dipdup_contract_metadata" */
export interface dipdup_contract_metadata_mutation_responseObservableChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata, R>[]) => Observable<FieldsSelection<dipdup_contract_metadata, R>[]>})
}


/** aggregate stddev on columns */
export interface dipdup_contract_metadata_stddev_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev on columns */
export interface dipdup_contract_metadata_stddev_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface dipdup_contract_metadata_stddev_pop_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface dipdup_contract_metadata_stddev_pop_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface dipdup_contract_metadata_stddev_samp_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface dipdup_contract_metadata_stddev_samp_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate sum on columns */
export interface dipdup_contract_metadata_sum_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** aggregate sum on columns */
export interface dipdup_contract_metadata_sum_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface dipdup_contract_metadata_var_pop_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface dipdup_contract_metadata_var_pop_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface dipdup_contract_metadata_var_samp_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface dipdup_contract_metadata_var_samp_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface dipdup_contract_metadata_variance_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface dipdup_contract_metadata_variance_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate min on columns */
export interface dipdup_contract_min_fieldsPromiseChain{
    address: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    typename: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate min on columns */
export interface dipdup_contract_min_fieldsObservableChain{
    address: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    typename: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
}


/** response of any mutation on the table "dipdup_contract" */
export interface dipdup_contract_mutation_responsePromiseChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Promise<FieldsSelection<dipdup_contract, R>[]>})
}


/** response of any mutation on the table "dipdup_contract" */
export interface dipdup_contract_mutation_responseObservableChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Observable<FieldsSelection<dipdup_contract, R>[]>})
}


/** columns and relationships of "dipdup_head" */
export interface dipdup_headPromiseChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_head" */
export interface dipdup_headObservableChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}


/** aggregated selection of "dipdup_head" */
export interface dipdup_head_aggregatePromiseChain{
    aggregate: (dipdup_head_aggregate_fieldsPromiseChain & {get: <R extends dipdup_head_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_head_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Promise<FieldsSelection<dipdup_head, R>[]>})
}


/** aggregated selection of "dipdup_head" */
export interface dipdup_head_aggregateObservableChain{
    aggregate: (dipdup_head_aggregate_fieldsObservableChain & {get: <R extends dipdup_head_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_head_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Observable<FieldsSelection<dipdup_head, R>[]>})
}


/** aggregate fields of "dipdup_head" */
export interface dipdup_head_aggregate_fieldsPromiseChain{
    avg: (dipdup_head_avg_fieldsPromiseChain & {get: <R extends dipdup_head_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_avg_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_head_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (dipdup_head_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (dipdup_head_max_fieldsPromiseChain & {get: <R extends dipdup_head_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_max_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_head_max_fields, R> | undefined)>}),
    min: (dipdup_head_min_fieldsPromiseChain & {get: <R extends dipdup_head_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_min_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_head_min_fields, R> | undefined)>}),
    stddev: (dipdup_head_stddev_fieldsPromiseChain & {get: <R extends dipdup_head_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_stddev_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_head_stddev_fields, R> | undefined)>}),
    stddev_pop: (dipdup_head_stddev_pop_fieldsPromiseChain & {get: <R extends dipdup_head_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_stddev_pop_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_head_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (dipdup_head_stddev_samp_fieldsPromiseChain & {get: <R extends dipdup_head_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_stddev_samp_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_head_stddev_samp_fields, R> | undefined)>}),
    sum: (dipdup_head_sum_fieldsPromiseChain & {get: <R extends dipdup_head_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_sum_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_head_sum_fields, R> | undefined)>}),
    var_pop: (dipdup_head_var_pop_fieldsPromiseChain & {get: <R extends dipdup_head_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_var_pop_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_head_var_pop_fields, R> | undefined)>}),
    var_samp: (dipdup_head_var_samp_fieldsPromiseChain & {get: <R extends dipdup_head_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_var_samp_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_head_var_samp_fields, R> | undefined)>}),
    variance: (dipdup_head_variance_fieldsPromiseChain & {get: <R extends dipdup_head_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_variance_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_head_variance_fields, R> | undefined)>})
}


/** aggregate fields of "dipdup_head" */
export interface dipdup_head_aggregate_fieldsObservableChain{
    avg: (dipdup_head_avg_fieldsObservableChain & {get: <R extends dipdup_head_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_avg_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_head_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (dipdup_head_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (dipdup_head_max_fieldsObservableChain & {get: <R extends dipdup_head_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_max_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_head_max_fields, R> | undefined)>}),
    min: (dipdup_head_min_fieldsObservableChain & {get: <R extends dipdup_head_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_min_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_head_min_fields, R> | undefined)>}),
    stddev: (dipdup_head_stddev_fieldsObservableChain & {get: <R extends dipdup_head_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_stddev_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_head_stddev_fields, R> | undefined)>}),
    stddev_pop: (dipdup_head_stddev_pop_fieldsObservableChain & {get: <R extends dipdup_head_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_stddev_pop_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_head_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (dipdup_head_stddev_samp_fieldsObservableChain & {get: <R extends dipdup_head_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_stddev_samp_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_head_stddev_samp_fields, R> | undefined)>}),
    sum: (dipdup_head_sum_fieldsObservableChain & {get: <R extends dipdup_head_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_sum_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_head_sum_fields, R> | undefined)>}),
    var_pop: (dipdup_head_var_pop_fieldsObservableChain & {get: <R extends dipdup_head_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_var_pop_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_head_var_pop_fields, R> | undefined)>}),
    var_samp: (dipdup_head_var_samp_fieldsObservableChain & {get: <R extends dipdup_head_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_var_samp_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_head_var_samp_fields, R> | undefined)>}),
    variance: (dipdup_head_variance_fieldsObservableChain & {get: <R extends dipdup_head_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_variance_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_head_variance_fields, R> | undefined)>})
}


/** aggregate avg on columns */
export interface dipdup_head_avg_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate avg on columns */
export interface dipdup_head_avg_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate max on columns */
export interface dipdup_head_max_fieldsPromiseChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate max on columns */
export interface dipdup_head_max_fieldsObservableChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate min on columns */
export interface dipdup_head_min_fieldsPromiseChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate min on columns */
export interface dipdup_head_min_fieldsObservableChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
}


/** response of any mutation on the table "dipdup_head" */
export interface dipdup_head_mutation_responsePromiseChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Promise<FieldsSelection<dipdup_head, R>[]>})
}


/** response of any mutation on the table "dipdup_head" */
export interface dipdup_head_mutation_responseObservableChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Observable<FieldsSelection<dipdup_head, R>[]>})
}


/** columns and relationships of "dipdup_head_status" */
export interface dipdup_head_statusPromiseChain{
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    status: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** columns and relationships of "dipdup_head_status" */
export interface dipdup_head_statusObservableChain{
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    status: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** aggregated selection of "dipdup_head_status" */
export interface dipdup_head_status_aggregatePromiseChain{
    aggregate: (dipdup_head_status_aggregate_fieldsPromiseChain & {get: <R extends dipdup_head_status_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_status_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_head_status_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status, R>[]) => Promise<FieldsSelection<dipdup_head_status, R>[]>})
}


/** aggregated selection of "dipdup_head_status" */
export interface dipdup_head_status_aggregateObservableChain{
    aggregate: (dipdup_head_status_aggregate_fieldsObservableChain & {get: <R extends dipdup_head_status_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_status_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_head_status_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status, R>[]) => Observable<FieldsSelection<dipdup_head_status, R>[]>})
}


/** aggregate fields of "dipdup_head_status" */
export interface dipdup_head_status_aggregate_fieldsPromiseChain{
    count: ((args?: {columns?: (dipdup_head_status_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (dipdup_head_status_max_fieldsPromiseChain & {get: <R extends dipdup_head_status_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_status_max_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_head_status_max_fields, R> | undefined)>}),
    min: (dipdup_head_status_min_fieldsPromiseChain & {get: <R extends dipdup_head_status_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_status_min_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_head_status_min_fields, R> | undefined)>})
}


/** aggregate fields of "dipdup_head_status" */
export interface dipdup_head_status_aggregate_fieldsObservableChain{
    count: ((args?: {columns?: (dipdup_head_status_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (dipdup_head_status_max_fieldsObservableChain & {get: <R extends dipdup_head_status_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_status_max_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_head_status_max_fields, R> | undefined)>}),
    min: (dipdup_head_status_min_fieldsObservableChain & {get: <R extends dipdup_head_status_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_status_min_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_head_status_min_fields, R> | undefined)>})
}


/** aggregate max on columns */
export interface dipdup_head_status_max_fieldsPromiseChain{
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    status: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate max on columns */
export interface dipdup_head_status_max_fieldsObservableChain{
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    status: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface dipdup_head_status_min_fieldsPromiseChain{
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    status: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface dipdup_head_status_min_fieldsObservableChain{
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    status: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** response of any mutation on the table "dipdup_head_status" */
export interface dipdup_head_status_mutation_responsePromiseChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status, R>[]) => Promise<FieldsSelection<dipdup_head_status, R>[]>})
}


/** response of any mutation on the table "dipdup_head_status" */
export interface dipdup_head_status_mutation_responseObservableChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status, R>[]) => Observable<FieldsSelection<dipdup_head_status, R>[]>})
}


/** aggregate stddev on columns */
export interface dipdup_head_stddev_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev on columns */
export interface dipdup_head_stddev_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface dipdup_head_stddev_pop_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface dipdup_head_stddev_pop_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface dipdup_head_stddev_samp_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface dipdup_head_stddev_samp_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate sum on columns */
export interface dipdup_head_sum_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** aggregate sum on columns */
export interface dipdup_head_sum_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface dipdup_head_var_pop_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface dipdup_head_var_pop_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface dipdup_head_var_samp_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface dipdup_head_var_samp_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface dipdup_head_variance_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface dipdup_head_variance_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** columns and relationships of "dipdup_index" */
export interface dipdup_indexPromiseChain{
    config_hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
status: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    template: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    template_values: ((args?: {
/** JSON select path */
path?: (Scalars['String'] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['jsonb'] | undefined)) => Promise<(Scalars['jsonb'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['jsonb'] | undefined)) => Promise<(Scalars['jsonb'] | undefined)>}),
    
/** operation: operation\nbig_map: big_map\nhead: head\ntoken_transfer: token_transfer */
type: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_index" */
export interface dipdup_indexObservableChain{
    config_hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
status: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    template: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    template_values: ((args?: {
/** JSON select path */
path?: (Scalars['String'] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['jsonb'] | undefined)) => Observable<(Scalars['jsonb'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['jsonb'] | undefined)) => Observable<(Scalars['jsonb'] | undefined)>}),
    
/** operation: operation\nbig_map: big_map\nhead: head\ntoken_transfer: token_transfer */
type: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}


/** aggregated selection of "dipdup_index" */
export interface dipdup_index_aggregatePromiseChain{
    aggregate: (dipdup_index_aggregate_fieldsPromiseChain & {get: <R extends dipdup_index_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_index_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Promise<FieldsSelection<dipdup_index, R>[]>})
}


/** aggregated selection of "dipdup_index" */
export interface dipdup_index_aggregateObservableChain{
    aggregate: (dipdup_index_aggregate_fieldsObservableChain & {get: <R extends dipdup_index_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_index_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Observable<FieldsSelection<dipdup_index, R>[]>})
}


/** aggregate fields of "dipdup_index" */
export interface dipdup_index_aggregate_fieldsPromiseChain{
    avg: (dipdup_index_avg_fieldsPromiseChain & {get: <R extends dipdup_index_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_avg_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_index_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (dipdup_index_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (dipdup_index_max_fieldsPromiseChain & {get: <R extends dipdup_index_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_max_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_index_max_fields, R> | undefined)>}),
    min: (dipdup_index_min_fieldsPromiseChain & {get: <R extends dipdup_index_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_min_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_index_min_fields, R> | undefined)>}),
    stddev: (dipdup_index_stddev_fieldsPromiseChain & {get: <R extends dipdup_index_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_stddev_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_index_stddev_fields, R> | undefined)>}),
    stddev_pop: (dipdup_index_stddev_pop_fieldsPromiseChain & {get: <R extends dipdup_index_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_stddev_pop_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_index_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (dipdup_index_stddev_samp_fieldsPromiseChain & {get: <R extends dipdup_index_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_stddev_samp_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_index_stddev_samp_fields, R> | undefined)>}),
    sum: (dipdup_index_sum_fieldsPromiseChain & {get: <R extends dipdup_index_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_sum_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_index_sum_fields, R> | undefined)>}),
    var_pop: (dipdup_index_var_pop_fieldsPromiseChain & {get: <R extends dipdup_index_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_var_pop_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_index_var_pop_fields, R> | undefined)>}),
    var_samp: (dipdup_index_var_samp_fieldsPromiseChain & {get: <R extends dipdup_index_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_var_samp_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_index_var_samp_fields, R> | undefined)>}),
    variance: (dipdup_index_variance_fieldsPromiseChain & {get: <R extends dipdup_index_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_variance_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_index_variance_fields, R> | undefined)>})
}


/** aggregate fields of "dipdup_index" */
export interface dipdup_index_aggregate_fieldsObservableChain{
    avg: (dipdup_index_avg_fieldsObservableChain & {get: <R extends dipdup_index_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_avg_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_index_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (dipdup_index_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (dipdup_index_max_fieldsObservableChain & {get: <R extends dipdup_index_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_max_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_index_max_fields, R> | undefined)>}),
    min: (dipdup_index_min_fieldsObservableChain & {get: <R extends dipdup_index_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_min_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_index_min_fields, R> | undefined)>}),
    stddev: (dipdup_index_stddev_fieldsObservableChain & {get: <R extends dipdup_index_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_stddev_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_index_stddev_fields, R> | undefined)>}),
    stddev_pop: (dipdup_index_stddev_pop_fieldsObservableChain & {get: <R extends dipdup_index_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_stddev_pop_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_index_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (dipdup_index_stddev_samp_fieldsObservableChain & {get: <R extends dipdup_index_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_stddev_samp_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_index_stddev_samp_fields, R> | undefined)>}),
    sum: (dipdup_index_sum_fieldsObservableChain & {get: <R extends dipdup_index_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_sum_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_index_sum_fields, R> | undefined)>}),
    var_pop: (dipdup_index_var_pop_fieldsObservableChain & {get: <R extends dipdup_index_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_var_pop_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_index_var_pop_fields, R> | undefined)>}),
    var_samp: (dipdup_index_var_samp_fieldsObservableChain & {get: <R extends dipdup_index_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_var_samp_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_index_var_samp_fields, R> | undefined)>}),
    variance: (dipdup_index_variance_fieldsObservableChain & {get: <R extends dipdup_index_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_variance_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_index_variance_fields, R> | undefined)>})
}


/** aggregate avg on columns */
export interface dipdup_index_avg_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate avg on columns */
export interface dipdup_index_avg_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate max on columns */
export interface dipdup_index_max_fieldsPromiseChain{
    config_hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
status: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    template: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** operation: operation\nbig_map: big_map\nhead: head\ntoken_transfer: token_transfer */
type: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate max on columns */
export interface dipdup_index_max_fieldsObservableChain{
    config_hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
status: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    template: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** operation: operation\nbig_map: big_map\nhead: head\ntoken_transfer: token_transfer */
type: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate min on columns */
export interface dipdup_index_min_fieldsPromiseChain{
    config_hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
status: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    template: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** operation: operation\nbig_map: big_map\nhead: head\ntoken_transfer: token_transfer */
type: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate min on columns */
export interface dipdup_index_min_fieldsObservableChain{
    config_hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
status: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    template: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** operation: operation\nbig_map: big_map\nhead: head\ntoken_transfer: token_transfer */
type: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
}


/** response of any mutation on the table "dipdup_index" */
export interface dipdup_index_mutation_responsePromiseChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Promise<FieldsSelection<dipdup_index, R>[]>})
}


/** response of any mutation on the table "dipdup_index" */
export interface dipdup_index_mutation_responseObservableChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Observable<FieldsSelection<dipdup_index, R>[]>})
}


/** aggregate stddev on columns */
export interface dipdup_index_stddev_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev on columns */
export interface dipdup_index_stddev_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface dipdup_index_stddev_pop_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface dipdup_index_stddev_pop_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface dipdup_index_stddev_samp_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface dipdup_index_stddev_samp_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate sum on columns */
export interface dipdup_index_sum_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** aggregate sum on columns */
export interface dipdup_index_sum_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface dipdup_index_var_pop_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface dipdup_index_var_pop_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface dipdup_index_var_samp_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface dipdup_index_var_samp_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface dipdup_index_variance_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface dipdup_index_variance_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** columns and relationships of "dipdup_schema" */
export interface dipdup_schemaPromiseChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** manual: manual\nmigration: migration\nrollback: rollback\nconfig_modified: config_modified\nschema_modified: schema_modified */
reindex: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_schema" */
export interface dipdup_schemaObservableChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** manual: manual\nmigration: migration\nrollback: rollback\nconfig_modified: config_modified\nschema_modified: schema_modified */
reindex: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}


/** aggregated selection of "dipdup_schema" */
export interface dipdup_schema_aggregatePromiseChain{
    aggregate: (dipdup_schema_aggregate_fieldsPromiseChain & {get: <R extends dipdup_schema_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_schema_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Promise<FieldsSelection<dipdup_schema, R>[]>})
}


/** aggregated selection of "dipdup_schema" */
export interface dipdup_schema_aggregateObservableChain{
    aggregate: (dipdup_schema_aggregate_fieldsObservableChain & {get: <R extends dipdup_schema_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_schema_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Observable<FieldsSelection<dipdup_schema, R>[]>})
}


/** aggregate fields of "dipdup_schema" */
export interface dipdup_schema_aggregate_fieldsPromiseChain{
    count: ((args?: {columns?: (dipdup_schema_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (dipdup_schema_max_fieldsPromiseChain & {get: <R extends dipdup_schema_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema_max_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_schema_max_fields, R> | undefined)>}),
    min: (dipdup_schema_min_fieldsPromiseChain & {get: <R extends dipdup_schema_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema_min_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_schema_min_fields, R> | undefined)>})
}


/** aggregate fields of "dipdup_schema" */
export interface dipdup_schema_aggregate_fieldsObservableChain{
    count: ((args?: {columns?: (dipdup_schema_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (dipdup_schema_max_fieldsObservableChain & {get: <R extends dipdup_schema_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema_max_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_schema_max_fields, R> | undefined)>}),
    min: (dipdup_schema_min_fieldsObservableChain & {get: <R extends dipdup_schema_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema_min_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_schema_min_fields, R> | undefined)>})
}


/** aggregate max on columns */
export interface dipdup_schema_max_fieldsPromiseChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** manual: manual\nmigration: migration\nrollback: rollback\nconfig_modified: config_modified\nschema_modified: schema_modified */
reindex: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate max on columns */
export interface dipdup_schema_max_fieldsObservableChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** manual: manual\nmigration: migration\nrollback: rollback\nconfig_modified: config_modified\nschema_modified: schema_modified */
reindex: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate min on columns */
export interface dipdup_schema_min_fieldsPromiseChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** manual: manual\nmigration: migration\nrollback: rollback\nconfig_modified: config_modified\nschema_modified: schema_modified */
reindex: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate min on columns */
export interface dipdup_schema_min_fieldsObservableChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** manual: manual\nmigration: migration\nrollback: rollback\nconfig_modified: config_modified\nschema_modified: schema_modified */
reindex: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
}


/** response of any mutation on the table "dipdup_schema" */
export interface dipdup_schema_mutation_responsePromiseChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Promise<FieldsSelection<dipdup_schema, R>[]>})
}


/** response of any mutation on the table "dipdup_schema" */
export interface dipdup_schema_mutation_responseObservableChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Observable<FieldsSelection<dipdup_schema, R>[]>})
}


/** columns and relationships of "dipdup_token_metadata" */
export interface dipdup_token_metadataPromiseChain{
    contract: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    metadata: ((args?: {
/** JSON select path */
path?: (Scalars['String'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Promise<Scalars['jsonb']>})&({get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Promise<Scalars['jsonb']>}),
    network: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_token_metadata" */
export interface dipdup_token_metadataObservableChain{
    contract: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    metadata: ((args?: {
/** JSON select path */
path?: (Scalars['String'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Observable<Scalars['jsonb']>})&({get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Observable<Scalars['jsonb']>}),
    network: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}


/** aggregated selection of "dipdup_token_metadata" */
export interface dipdup_token_metadata_aggregatePromiseChain{
    aggregate: (dipdup_token_metadata_aggregate_fieldsPromiseChain & {get: <R extends dipdup_token_metadata_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_token_metadata_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata, R>[]) => Promise<FieldsSelection<dipdup_token_metadata, R>[]>})
}


/** aggregated selection of "dipdup_token_metadata" */
export interface dipdup_token_metadata_aggregateObservableChain{
    aggregate: (dipdup_token_metadata_aggregate_fieldsObservableChain & {get: <R extends dipdup_token_metadata_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_token_metadata_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata, R>[]) => Observable<FieldsSelection<dipdup_token_metadata, R>[]>})
}


/** aggregate fields of "dipdup_token_metadata" */
export interface dipdup_token_metadata_aggregate_fieldsPromiseChain{
    avg: (dipdup_token_metadata_avg_fieldsPromiseChain & {get: <R extends dipdup_token_metadata_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata_avg_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_token_metadata_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (dipdup_token_metadata_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (dipdup_token_metadata_max_fieldsPromiseChain & {get: <R extends dipdup_token_metadata_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata_max_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_token_metadata_max_fields, R> | undefined)>}),
    min: (dipdup_token_metadata_min_fieldsPromiseChain & {get: <R extends dipdup_token_metadata_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata_min_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_token_metadata_min_fields, R> | undefined)>}),
    stddev: (dipdup_token_metadata_stddev_fieldsPromiseChain & {get: <R extends dipdup_token_metadata_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata_stddev_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_token_metadata_stddev_fields, R> | undefined)>}),
    stddev_pop: (dipdup_token_metadata_stddev_pop_fieldsPromiseChain & {get: <R extends dipdup_token_metadata_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata_stddev_pop_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_token_metadata_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (dipdup_token_metadata_stddev_samp_fieldsPromiseChain & {get: <R extends dipdup_token_metadata_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata_stddev_samp_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_token_metadata_stddev_samp_fields, R> | undefined)>}),
    sum: (dipdup_token_metadata_sum_fieldsPromiseChain & {get: <R extends dipdup_token_metadata_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata_sum_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_token_metadata_sum_fields, R> | undefined)>}),
    var_pop: (dipdup_token_metadata_var_pop_fieldsPromiseChain & {get: <R extends dipdup_token_metadata_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata_var_pop_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_token_metadata_var_pop_fields, R> | undefined)>}),
    var_samp: (dipdup_token_metadata_var_samp_fieldsPromiseChain & {get: <R extends dipdup_token_metadata_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata_var_samp_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_token_metadata_var_samp_fields, R> | undefined)>}),
    variance: (dipdup_token_metadata_variance_fieldsPromiseChain & {get: <R extends dipdup_token_metadata_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata_variance_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_token_metadata_variance_fields, R> | undefined)>})
}


/** aggregate fields of "dipdup_token_metadata" */
export interface dipdup_token_metadata_aggregate_fieldsObservableChain{
    avg: (dipdup_token_metadata_avg_fieldsObservableChain & {get: <R extends dipdup_token_metadata_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata_avg_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_token_metadata_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (dipdup_token_metadata_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (dipdup_token_metadata_max_fieldsObservableChain & {get: <R extends dipdup_token_metadata_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata_max_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_token_metadata_max_fields, R> | undefined)>}),
    min: (dipdup_token_metadata_min_fieldsObservableChain & {get: <R extends dipdup_token_metadata_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata_min_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_token_metadata_min_fields, R> | undefined)>}),
    stddev: (dipdup_token_metadata_stddev_fieldsObservableChain & {get: <R extends dipdup_token_metadata_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata_stddev_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_token_metadata_stddev_fields, R> | undefined)>}),
    stddev_pop: (dipdup_token_metadata_stddev_pop_fieldsObservableChain & {get: <R extends dipdup_token_metadata_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata_stddev_pop_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_token_metadata_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (dipdup_token_metadata_stddev_samp_fieldsObservableChain & {get: <R extends dipdup_token_metadata_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata_stddev_samp_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_token_metadata_stddev_samp_fields, R> | undefined)>}),
    sum: (dipdup_token_metadata_sum_fieldsObservableChain & {get: <R extends dipdup_token_metadata_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata_sum_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_token_metadata_sum_fields, R> | undefined)>}),
    var_pop: (dipdup_token_metadata_var_pop_fieldsObservableChain & {get: <R extends dipdup_token_metadata_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata_var_pop_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_token_metadata_var_pop_fields, R> | undefined)>}),
    var_samp: (dipdup_token_metadata_var_samp_fieldsObservableChain & {get: <R extends dipdup_token_metadata_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata_var_samp_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_token_metadata_var_samp_fields, R> | undefined)>}),
    variance: (dipdup_token_metadata_variance_fieldsObservableChain & {get: <R extends dipdup_token_metadata_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata_variance_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_token_metadata_variance_fields, R> | undefined)>})
}


/** aggregate avg on columns */
export interface dipdup_token_metadata_avg_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate avg on columns */
export interface dipdup_token_metadata_avg_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate max on columns */
export interface dipdup_token_metadata_max_fieldsPromiseChain{
    contract: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    network: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate max on columns */
export interface dipdup_token_metadata_max_fieldsObservableChain{
    contract: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    network: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate min on columns */
export interface dipdup_token_metadata_min_fieldsPromiseChain{
    contract: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    network: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate min on columns */
export interface dipdup_token_metadata_min_fieldsObservableChain{
    contract: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    network: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
}


/** response of any mutation on the table "dipdup_token_metadata" */
export interface dipdup_token_metadata_mutation_responsePromiseChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata, R>[]) => Promise<FieldsSelection<dipdup_token_metadata, R>[]>})
}


/** response of any mutation on the table "dipdup_token_metadata" */
export interface dipdup_token_metadata_mutation_responseObservableChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata, R>[]) => Observable<FieldsSelection<dipdup_token_metadata, R>[]>})
}


/** aggregate stddev on columns */
export interface dipdup_token_metadata_stddev_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev on columns */
export interface dipdup_token_metadata_stddev_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface dipdup_token_metadata_stddev_pop_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface dipdup_token_metadata_stddev_pop_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface dipdup_token_metadata_stddev_samp_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface dipdup_token_metadata_stddev_samp_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate sum on columns */
export interface dipdup_token_metadata_sum_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** aggregate sum on columns */
export interface dipdup_token_metadata_sum_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface dipdup_token_metadata_var_pop_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface dipdup_token_metadata_var_pop_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface dipdup_token_metadata_var_samp_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface dipdup_token_metadata_var_samp_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface dipdup_token_metadata_variance_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface dipdup_token_metadata_variance_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** columns and relationships of "ipfs" */
export interface ipfsPromiseChain{
    creator: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    description: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    image: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    symbol: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    thumbnail: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** An array relationship */
token: ((args?: {
/** distinct select on columns */
distinct_on?: (token_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (token_order_by[] | null),
/** filter the rows returned */
where?: (token_bool_exp | null)}) => {get: <R extends tokenRequest>(request: R, defaultValue?: FieldsSelection<token, R>[]) => Promise<FieldsSelection<token, R>[]>})&({get: <R extends tokenRequest>(request: R, defaultValue?: FieldsSelection<token, R>[]) => Promise<FieldsSelection<token, R>[]>}),
    
/** An aggregate relationship */
token_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (token_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (token_order_by[] | null),
/** filter the rows returned */
where?: (token_bool_exp | null)}) => token_aggregatePromiseChain & {get: <R extends token_aggregateRequest>(request: R, defaultValue?: FieldsSelection<token_aggregate, R>) => Promise<FieldsSelection<token_aggregate, R>>})&(token_aggregatePromiseChain & {get: <R extends token_aggregateRequest>(request: R, defaultValue?: FieldsSelection<token_aggregate, R>) => Promise<FieldsSelection<token_aggregate, R>>}),
    uri: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}


/** columns and relationships of "ipfs" */
export interface ipfsObservableChain{
    creator: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    description: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    image: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    symbol: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    thumbnail: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** An array relationship */
token: ((args?: {
/** distinct select on columns */
distinct_on?: (token_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (token_order_by[] | null),
/** filter the rows returned */
where?: (token_bool_exp | null)}) => {get: <R extends tokenRequest>(request: R, defaultValue?: FieldsSelection<token, R>[]) => Observable<FieldsSelection<token, R>[]>})&({get: <R extends tokenRequest>(request: R, defaultValue?: FieldsSelection<token, R>[]) => Observable<FieldsSelection<token, R>[]>}),
    
/** An aggregate relationship */
token_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (token_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (token_order_by[] | null),
/** filter the rows returned */
where?: (token_bool_exp | null)}) => token_aggregateObservableChain & {get: <R extends token_aggregateRequest>(request: R, defaultValue?: FieldsSelection<token_aggregate, R>) => Observable<FieldsSelection<token_aggregate, R>>})&(token_aggregateObservableChain & {get: <R extends token_aggregateRequest>(request: R, defaultValue?: FieldsSelection<token_aggregate, R>) => Observable<FieldsSelection<token_aggregate, R>>}),
    uri: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}


/** aggregated selection of "ipfs" */
export interface ipfs_aggregatePromiseChain{
    aggregate: (ipfs_aggregate_fieldsPromiseChain & {get: <R extends ipfs_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ipfs_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<ipfs_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends ipfsRequest>(request: R, defaultValue?: FieldsSelection<ipfs, R>[]) => Promise<FieldsSelection<ipfs, R>[]>})
}


/** aggregated selection of "ipfs" */
export interface ipfs_aggregateObservableChain{
    aggregate: (ipfs_aggregate_fieldsObservableChain & {get: <R extends ipfs_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ipfs_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<ipfs_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends ipfsRequest>(request: R, defaultValue?: FieldsSelection<ipfs, R>[]) => Observable<FieldsSelection<ipfs, R>[]>})
}


/** aggregate fields of "ipfs" */
export interface ipfs_aggregate_fieldsPromiseChain{
    avg: (ipfs_avg_fieldsPromiseChain & {get: <R extends ipfs_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ipfs_avg_fields, R> | undefined)) => Promise<(FieldsSelection<ipfs_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (ipfs_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (ipfs_max_fieldsPromiseChain & {get: <R extends ipfs_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ipfs_max_fields, R> | undefined)) => Promise<(FieldsSelection<ipfs_max_fields, R> | undefined)>}),
    min: (ipfs_min_fieldsPromiseChain & {get: <R extends ipfs_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ipfs_min_fields, R> | undefined)) => Promise<(FieldsSelection<ipfs_min_fields, R> | undefined)>}),
    stddev: (ipfs_stddev_fieldsPromiseChain & {get: <R extends ipfs_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ipfs_stddev_fields, R> | undefined)) => Promise<(FieldsSelection<ipfs_stddev_fields, R> | undefined)>}),
    stddev_pop: (ipfs_stddev_pop_fieldsPromiseChain & {get: <R extends ipfs_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ipfs_stddev_pop_fields, R> | undefined)) => Promise<(FieldsSelection<ipfs_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (ipfs_stddev_samp_fieldsPromiseChain & {get: <R extends ipfs_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ipfs_stddev_samp_fields, R> | undefined)) => Promise<(FieldsSelection<ipfs_stddev_samp_fields, R> | undefined)>}),
    sum: (ipfs_sum_fieldsPromiseChain & {get: <R extends ipfs_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ipfs_sum_fields, R> | undefined)) => Promise<(FieldsSelection<ipfs_sum_fields, R> | undefined)>}),
    var_pop: (ipfs_var_pop_fieldsPromiseChain & {get: <R extends ipfs_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ipfs_var_pop_fields, R> | undefined)) => Promise<(FieldsSelection<ipfs_var_pop_fields, R> | undefined)>}),
    var_samp: (ipfs_var_samp_fieldsPromiseChain & {get: <R extends ipfs_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ipfs_var_samp_fields, R> | undefined)) => Promise<(FieldsSelection<ipfs_var_samp_fields, R> | undefined)>}),
    variance: (ipfs_variance_fieldsPromiseChain & {get: <R extends ipfs_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ipfs_variance_fields, R> | undefined)) => Promise<(FieldsSelection<ipfs_variance_fields, R> | undefined)>})
}


/** aggregate fields of "ipfs" */
export interface ipfs_aggregate_fieldsObservableChain{
    avg: (ipfs_avg_fieldsObservableChain & {get: <R extends ipfs_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ipfs_avg_fields, R> | undefined)) => Observable<(FieldsSelection<ipfs_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (ipfs_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (ipfs_max_fieldsObservableChain & {get: <R extends ipfs_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ipfs_max_fields, R> | undefined)) => Observable<(FieldsSelection<ipfs_max_fields, R> | undefined)>}),
    min: (ipfs_min_fieldsObservableChain & {get: <R extends ipfs_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ipfs_min_fields, R> | undefined)) => Observable<(FieldsSelection<ipfs_min_fields, R> | undefined)>}),
    stddev: (ipfs_stddev_fieldsObservableChain & {get: <R extends ipfs_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ipfs_stddev_fields, R> | undefined)) => Observable<(FieldsSelection<ipfs_stddev_fields, R> | undefined)>}),
    stddev_pop: (ipfs_stddev_pop_fieldsObservableChain & {get: <R extends ipfs_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ipfs_stddev_pop_fields, R> | undefined)) => Observable<(FieldsSelection<ipfs_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (ipfs_stddev_samp_fieldsObservableChain & {get: <R extends ipfs_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ipfs_stddev_samp_fields, R> | undefined)) => Observable<(FieldsSelection<ipfs_stddev_samp_fields, R> | undefined)>}),
    sum: (ipfs_sum_fieldsObservableChain & {get: <R extends ipfs_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ipfs_sum_fields, R> | undefined)) => Observable<(FieldsSelection<ipfs_sum_fields, R> | undefined)>}),
    var_pop: (ipfs_var_pop_fieldsObservableChain & {get: <R extends ipfs_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ipfs_var_pop_fields, R> | undefined)) => Observable<(FieldsSelection<ipfs_var_pop_fields, R> | undefined)>}),
    var_samp: (ipfs_var_samp_fieldsObservableChain & {get: <R extends ipfs_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ipfs_var_samp_fields, R> | undefined)) => Observable<(FieldsSelection<ipfs_var_samp_fields, R> | undefined)>}),
    variance: (ipfs_variance_fieldsObservableChain & {get: <R extends ipfs_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ipfs_variance_fields, R> | undefined)) => Observable<(FieldsSelection<ipfs_variance_fields, R> | undefined)>})
}


/** aggregate avg on columns */
export interface ipfs_avg_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate avg on columns */
export interface ipfs_avg_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate max on columns */
export interface ipfs_max_fieldsPromiseChain{
    creator: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    image: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    symbol: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    thumbnail: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    uri: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate max on columns */
export interface ipfs_max_fieldsObservableChain{
    creator: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    image: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    symbol: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    thumbnail: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    uri: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface ipfs_min_fieldsPromiseChain{
    creator: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    image: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    symbol: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    thumbnail: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    uri: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface ipfs_min_fieldsObservableChain{
    creator: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    image: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    symbol: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    thumbnail: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    uri: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** response of any mutation on the table "ipfs" */
export interface ipfs_mutation_responsePromiseChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends ipfsRequest>(request: R, defaultValue?: FieldsSelection<ipfs, R>[]) => Promise<FieldsSelection<ipfs, R>[]>})
}


/** response of any mutation on the table "ipfs" */
export interface ipfs_mutation_responseObservableChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends ipfsRequest>(request: R, defaultValue?: FieldsSelection<ipfs, R>[]) => Observable<FieldsSelection<ipfs, R>[]>})
}


/** aggregate stddev on columns */
export interface ipfs_stddev_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev on columns */
export interface ipfs_stddev_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface ipfs_stddev_pop_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface ipfs_stddev_pop_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface ipfs_stddev_samp_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface ipfs_stddev_samp_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate sum on columns */
export interface ipfs_sum_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** aggregate sum on columns */
export interface ipfs_sum_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface ipfs_var_pop_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface ipfs_var_pop_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface ipfs_var_samp_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface ipfs_var_samp_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface ipfs_variance_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface ipfs_variance_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** columns and relationships of "listing" */
export interface listingPromiseChain{
    accepted: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    cancelled: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    creator: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    duration: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    interest: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** An array relationship */
offers: ((args?: {
/** distinct select on columns */
distinct_on?: (offer_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (offer_order_by[] | null),
/** filter the rows returned */
where?: (offer_bool_exp | null)}) => {get: <R extends offerRequest>(request: R, defaultValue?: FieldsSelection<offer, R>[]) => Promise<FieldsSelection<offer, R>[]>})&({get: <R extends offerRequest>(request: R, defaultValue?: FieldsSelection<offer, R>[]) => Promise<FieldsSelection<offer, R>[]>}),
    
/** An aggregate relationship */
offers_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (offer_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (offer_order_by[] | null),
/** filter the rows returned */
where?: (offer_bool_exp | null)}) => offer_aggregatePromiseChain & {get: <R extends offer_aggregateRequest>(request: R, defaultValue?: FieldsSelection<offer_aggregate, R>) => Promise<FieldsSelection<offer_aggregate, R>>})&(offer_aggregatePromiseChain & {get: <R extends offer_aggregateRequest>(request: R, defaultValue?: FieldsSelection<offer_aggregate, R>) => Promise<FieldsSelection<offer_aggregate, R>>}),
    
/** An object relationship */
token: (tokenPromiseChain & {get: <R extends tokenRequest>(request: R, defaultValue?: FieldsSelection<token, R>) => Promise<FieldsSelection<token, R>>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}


/** columns and relationships of "listing" */
export interface listingObservableChain{
    accepted: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    cancelled: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    creator: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    duration: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    interest: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** An array relationship */
offers: ((args?: {
/** distinct select on columns */
distinct_on?: (offer_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (offer_order_by[] | null),
/** filter the rows returned */
where?: (offer_bool_exp | null)}) => {get: <R extends offerRequest>(request: R, defaultValue?: FieldsSelection<offer, R>[]) => Observable<FieldsSelection<offer, R>[]>})&({get: <R extends offerRequest>(request: R, defaultValue?: FieldsSelection<offer, R>[]) => Observable<FieldsSelection<offer, R>[]>}),
    
/** An aggregate relationship */
offers_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (offer_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (offer_order_by[] | null),
/** filter the rows returned */
where?: (offer_bool_exp | null)}) => offer_aggregateObservableChain & {get: <R extends offer_aggregateRequest>(request: R, defaultValue?: FieldsSelection<offer_aggregate, R>) => Observable<FieldsSelection<offer_aggregate, R>>})&(offer_aggregateObservableChain & {get: <R extends offer_aggregateRequest>(request: R, defaultValue?: FieldsSelection<offer_aggregate, R>) => Observable<FieldsSelection<offer_aggregate, R>>}),
    
/** An object relationship */
token: (tokenObservableChain & {get: <R extends tokenRequest>(request: R, defaultValue?: FieldsSelection<token, R>) => Observable<FieldsSelection<token, R>>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}


/** aggregated selection of "listing" */
export interface listing_aggregatePromiseChain{
    aggregate: (listing_aggregate_fieldsPromiseChain & {get: <R extends listing_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<listing_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<listing_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends listingRequest>(request: R, defaultValue?: FieldsSelection<listing, R>[]) => Promise<FieldsSelection<listing, R>[]>})
}


/** aggregated selection of "listing" */
export interface listing_aggregateObservableChain{
    aggregate: (listing_aggregate_fieldsObservableChain & {get: <R extends listing_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<listing_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<listing_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends listingRequest>(request: R, defaultValue?: FieldsSelection<listing, R>[]) => Observable<FieldsSelection<listing, R>[]>})
}


/** aggregate fields of "listing" */
export interface listing_aggregate_fieldsPromiseChain{
    avg: (listing_avg_fieldsPromiseChain & {get: <R extends listing_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<listing_avg_fields, R> | undefined)) => Promise<(FieldsSelection<listing_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (listing_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (listing_max_fieldsPromiseChain & {get: <R extends listing_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<listing_max_fields, R> | undefined)) => Promise<(FieldsSelection<listing_max_fields, R> | undefined)>}),
    min: (listing_min_fieldsPromiseChain & {get: <R extends listing_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<listing_min_fields, R> | undefined)) => Promise<(FieldsSelection<listing_min_fields, R> | undefined)>}),
    stddev: (listing_stddev_fieldsPromiseChain & {get: <R extends listing_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<listing_stddev_fields, R> | undefined)) => Promise<(FieldsSelection<listing_stddev_fields, R> | undefined)>}),
    stddev_pop: (listing_stddev_pop_fieldsPromiseChain & {get: <R extends listing_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<listing_stddev_pop_fields, R> | undefined)) => Promise<(FieldsSelection<listing_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (listing_stddev_samp_fieldsPromiseChain & {get: <R extends listing_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<listing_stddev_samp_fields, R> | undefined)) => Promise<(FieldsSelection<listing_stddev_samp_fields, R> | undefined)>}),
    sum: (listing_sum_fieldsPromiseChain & {get: <R extends listing_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<listing_sum_fields, R> | undefined)) => Promise<(FieldsSelection<listing_sum_fields, R> | undefined)>}),
    var_pop: (listing_var_pop_fieldsPromiseChain & {get: <R extends listing_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<listing_var_pop_fields, R> | undefined)) => Promise<(FieldsSelection<listing_var_pop_fields, R> | undefined)>}),
    var_samp: (listing_var_samp_fieldsPromiseChain & {get: <R extends listing_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<listing_var_samp_fields, R> | undefined)) => Promise<(FieldsSelection<listing_var_samp_fields, R> | undefined)>}),
    variance: (listing_variance_fieldsPromiseChain & {get: <R extends listing_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<listing_variance_fields, R> | undefined)) => Promise<(FieldsSelection<listing_variance_fields, R> | undefined)>})
}


/** aggregate fields of "listing" */
export interface listing_aggregate_fieldsObservableChain{
    avg: (listing_avg_fieldsObservableChain & {get: <R extends listing_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<listing_avg_fields, R> | undefined)) => Observable<(FieldsSelection<listing_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (listing_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (listing_max_fieldsObservableChain & {get: <R extends listing_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<listing_max_fields, R> | undefined)) => Observable<(FieldsSelection<listing_max_fields, R> | undefined)>}),
    min: (listing_min_fieldsObservableChain & {get: <R extends listing_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<listing_min_fields, R> | undefined)) => Observable<(FieldsSelection<listing_min_fields, R> | undefined)>}),
    stddev: (listing_stddev_fieldsObservableChain & {get: <R extends listing_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<listing_stddev_fields, R> | undefined)) => Observable<(FieldsSelection<listing_stddev_fields, R> | undefined)>}),
    stddev_pop: (listing_stddev_pop_fieldsObservableChain & {get: <R extends listing_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<listing_stddev_pop_fields, R> | undefined)) => Observable<(FieldsSelection<listing_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (listing_stddev_samp_fieldsObservableChain & {get: <R extends listing_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<listing_stddev_samp_fields, R> | undefined)) => Observable<(FieldsSelection<listing_stddev_samp_fields, R> | undefined)>}),
    sum: (listing_sum_fieldsObservableChain & {get: <R extends listing_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<listing_sum_fields, R> | undefined)) => Observable<(FieldsSelection<listing_sum_fields, R> | undefined)>}),
    var_pop: (listing_var_pop_fieldsObservableChain & {get: <R extends listing_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<listing_var_pop_fields, R> | undefined)) => Observable<(FieldsSelection<listing_var_pop_fields, R> | undefined)>}),
    var_samp: (listing_var_samp_fieldsObservableChain & {get: <R extends listing_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<listing_var_samp_fields, R> | undefined)) => Observable<(FieldsSelection<listing_var_samp_fields, R> | undefined)>}),
    variance: (listing_variance_fieldsObservableChain & {get: <R extends listing_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<listing_variance_fields, R> | undefined)) => Observable<(FieldsSelection<listing_variance_fields, R> | undefined)>})
}


/** aggregate avg on columns */
export interface listing_avg_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate avg on columns */
export interface listing_avg_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate max on columns */
export interface listing_max_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    creator: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** aggregate max on columns */
export interface listing_max_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    creator: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** aggregate min on columns */
export interface listing_min_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    creator: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** aggregate min on columns */
export interface listing_min_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    creator: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** response of any mutation on the table "listing" */
export interface listing_mutation_responsePromiseChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends listingRequest>(request: R, defaultValue?: FieldsSelection<listing, R>[]) => Promise<FieldsSelection<listing, R>[]>})
}


/** response of any mutation on the table "listing" */
export interface listing_mutation_responseObservableChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends listingRequest>(request: R, defaultValue?: FieldsSelection<listing, R>[]) => Observable<FieldsSelection<listing, R>[]>})
}


/** aggregate stddev on columns */
export interface listing_stddev_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev on columns */
export interface listing_stddev_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface listing_stddev_pop_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface listing_stddev_pop_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface listing_stddev_samp_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface listing_stddev_samp_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate sum on columns */
export interface listing_sum_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** aggregate sum on columns */
export interface listing_sum_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface listing_var_pop_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface listing_var_pop_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface listing_var_samp_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface listing_var_samp_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface listing_variance_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface listing_variance_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** columns and relationships of "loan" */
export interface loanPromiseChain{
    duration: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    interest: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    lender: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    loanee: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    principal_amount: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    repaid: ({get: (request?: boolean|number, defaultValue?: (Scalars['Boolean'] | undefined)) => Promise<(Scalars['Boolean'] | undefined)>}),
    start_time: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    
/** An object relationship */
token: (tokenPromiseChain & {get: <R extends tokenRequest>(request: R, defaultValue?: FieldsSelection<token, R>) => Promise<FieldsSelection<token, R>>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}


/** columns and relationships of "loan" */
export interface loanObservableChain{
    duration: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    interest: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    lender: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    loanee: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    principal_amount: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    repaid: ({get: (request?: boolean|number, defaultValue?: (Scalars['Boolean'] | undefined)) => Observable<(Scalars['Boolean'] | undefined)>}),
    start_time: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    
/** An object relationship */
token: (tokenObservableChain & {get: <R extends tokenRequest>(request: R, defaultValue?: FieldsSelection<token, R>) => Observable<FieldsSelection<token, R>>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}


/** aggregated selection of "loan" */
export interface loan_aggregatePromiseChain{
    aggregate: (loan_aggregate_fieldsPromiseChain & {get: <R extends loan_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<loan_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<loan_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends loanRequest>(request: R, defaultValue?: FieldsSelection<loan, R>[]) => Promise<FieldsSelection<loan, R>[]>})
}


/** aggregated selection of "loan" */
export interface loan_aggregateObservableChain{
    aggregate: (loan_aggregate_fieldsObservableChain & {get: <R extends loan_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<loan_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<loan_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends loanRequest>(request: R, defaultValue?: FieldsSelection<loan, R>[]) => Observable<FieldsSelection<loan, R>[]>})
}


/** aggregate fields of "loan" */
export interface loan_aggregate_fieldsPromiseChain{
    avg: (loan_avg_fieldsPromiseChain & {get: <R extends loan_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<loan_avg_fields, R> | undefined)) => Promise<(FieldsSelection<loan_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (loan_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (loan_max_fieldsPromiseChain & {get: <R extends loan_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<loan_max_fields, R> | undefined)) => Promise<(FieldsSelection<loan_max_fields, R> | undefined)>}),
    min: (loan_min_fieldsPromiseChain & {get: <R extends loan_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<loan_min_fields, R> | undefined)) => Promise<(FieldsSelection<loan_min_fields, R> | undefined)>}),
    stddev: (loan_stddev_fieldsPromiseChain & {get: <R extends loan_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<loan_stddev_fields, R> | undefined)) => Promise<(FieldsSelection<loan_stddev_fields, R> | undefined)>}),
    stddev_pop: (loan_stddev_pop_fieldsPromiseChain & {get: <R extends loan_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<loan_stddev_pop_fields, R> | undefined)) => Promise<(FieldsSelection<loan_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (loan_stddev_samp_fieldsPromiseChain & {get: <R extends loan_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<loan_stddev_samp_fields, R> | undefined)) => Promise<(FieldsSelection<loan_stddev_samp_fields, R> | undefined)>}),
    sum: (loan_sum_fieldsPromiseChain & {get: <R extends loan_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<loan_sum_fields, R> | undefined)) => Promise<(FieldsSelection<loan_sum_fields, R> | undefined)>}),
    var_pop: (loan_var_pop_fieldsPromiseChain & {get: <R extends loan_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<loan_var_pop_fields, R> | undefined)) => Promise<(FieldsSelection<loan_var_pop_fields, R> | undefined)>}),
    var_samp: (loan_var_samp_fieldsPromiseChain & {get: <R extends loan_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<loan_var_samp_fields, R> | undefined)) => Promise<(FieldsSelection<loan_var_samp_fields, R> | undefined)>}),
    variance: (loan_variance_fieldsPromiseChain & {get: <R extends loan_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<loan_variance_fields, R> | undefined)) => Promise<(FieldsSelection<loan_variance_fields, R> | undefined)>})
}


/** aggregate fields of "loan" */
export interface loan_aggregate_fieldsObservableChain{
    avg: (loan_avg_fieldsObservableChain & {get: <R extends loan_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<loan_avg_fields, R> | undefined)) => Observable<(FieldsSelection<loan_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (loan_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (loan_max_fieldsObservableChain & {get: <R extends loan_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<loan_max_fields, R> | undefined)) => Observable<(FieldsSelection<loan_max_fields, R> | undefined)>}),
    min: (loan_min_fieldsObservableChain & {get: <R extends loan_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<loan_min_fields, R> | undefined)) => Observable<(FieldsSelection<loan_min_fields, R> | undefined)>}),
    stddev: (loan_stddev_fieldsObservableChain & {get: <R extends loan_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<loan_stddev_fields, R> | undefined)) => Observable<(FieldsSelection<loan_stddev_fields, R> | undefined)>}),
    stddev_pop: (loan_stddev_pop_fieldsObservableChain & {get: <R extends loan_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<loan_stddev_pop_fields, R> | undefined)) => Observable<(FieldsSelection<loan_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (loan_stddev_samp_fieldsObservableChain & {get: <R extends loan_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<loan_stddev_samp_fields, R> | undefined)) => Observable<(FieldsSelection<loan_stddev_samp_fields, R> | undefined)>}),
    sum: (loan_sum_fieldsObservableChain & {get: <R extends loan_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<loan_sum_fields, R> | undefined)) => Observable<(FieldsSelection<loan_sum_fields, R> | undefined)>}),
    var_pop: (loan_var_pop_fieldsObservableChain & {get: <R extends loan_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<loan_var_pop_fields, R> | undefined)) => Observable<(FieldsSelection<loan_var_pop_fields, R> | undefined)>}),
    var_samp: (loan_var_samp_fieldsObservableChain & {get: <R extends loan_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<loan_var_samp_fields, R> | undefined)) => Observable<(FieldsSelection<loan_var_samp_fields, R> | undefined)>}),
    variance: (loan_variance_fieldsObservableChain & {get: <R extends loan_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<loan_variance_fields, R> | undefined)) => Observable<(FieldsSelection<loan_variance_fields, R> | undefined)>})
}


/** aggregate avg on columns */
export interface loan_avg_fieldsPromiseChain{
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    principal_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate avg on columns */
export interface loan_avg_fieldsObservableChain{
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    principal_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate max on columns */
export interface loan_max_fieldsPromiseChain{
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    lender: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    loanee: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    principal_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    start_time: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** aggregate max on columns */
export interface loan_max_fieldsObservableChain{
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    lender: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    loanee: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    principal_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    start_time: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** aggregate min on columns */
export interface loan_min_fieldsPromiseChain{
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    lender: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    loanee: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    principal_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    start_time: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** aggregate min on columns */
export interface loan_min_fieldsObservableChain{
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    lender: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    loanee: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    principal_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    start_time: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** response of any mutation on the table "loan" */
export interface loan_mutation_responsePromiseChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends loanRequest>(request: R, defaultValue?: FieldsSelection<loan, R>[]) => Promise<FieldsSelection<loan, R>[]>})
}


/** response of any mutation on the table "loan" */
export interface loan_mutation_responseObservableChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends loanRequest>(request: R, defaultValue?: FieldsSelection<loan, R>[]) => Observable<FieldsSelection<loan, R>[]>})
}


/** aggregate stddev on columns */
export interface loan_stddev_fieldsPromiseChain{
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    principal_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev on columns */
export interface loan_stddev_fieldsObservableChain{
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    principal_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface loan_stddev_pop_fieldsPromiseChain{
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    principal_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface loan_stddev_pop_fieldsObservableChain{
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    principal_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface loan_stddev_samp_fieldsPromiseChain{
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    principal_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface loan_stddev_samp_fieldsObservableChain{
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    principal_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate sum on columns */
export interface loan_sum_fieldsPromiseChain{
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    principal_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** aggregate sum on columns */
export interface loan_sum_fieldsObservableChain{
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    principal_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface loan_var_pop_fieldsPromiseChain{
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    principal_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface loan_var_pop_fieldsObservableChain{
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    principal_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface loan_var_samp_fieldsPromiseChain{
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    principal_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface loan_var_samp_fieldsObservableChain{
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    principal_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface loan_variance_fieldsPromiseChain{
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    principal_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface loan_variance_fieldsObservableChain{
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    principal_amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** mutation root */
export interface mutation_rootPromiseChain{
    
/** delete data from the table: "dipdup_contract" */
delete_dipdup_contract: ((args: {
/** filter the rows which have to be deleted */
where: dipdup_contract_bool_exp}) => dipdup_contract_mutation_responsePromiseChain & {get: <R extends dipdup_contract_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_mutation_response, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "dipdup_contract" */
delete_dipdup_contract_by_pk: ((args: {name: Scalars['String']}) => dipdup_contractPromiseChain & {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract, R> | undefined)>}),
    
/** delete data from the table: "dipdup_contract_metadata" */
delete_dipdup_contract_metadata: ((args: {
/** filter the rows which have to be deleted */
where: dipdup_contract_metadata_bool_exp}) => dipdup_contract_metadata_mutation_responsePromiseChain & {get: <R extends dipdup_contract_metadata_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata_mutation_response, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract_metadata_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "dipdup_contract_metadata" */
delete_dipdup_contract_metadata_by_pk: ((args: {id: Scalars['Int']}) => dipdup_contract_metadataPromiseChain & {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract_metadata, R> | undefined)>}),
    
/** delete data from the table: "dipdup_head" */
delete_dipdup_head: ((args: {
/** filter the rows which have to be deleted */
where: dipdup_head_bool_exp}) => dipdup_head_mutation_responsePromiseChain & {get: <R extends dipdup_head_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_mutation_response, R> | undefined)) => Promise<(FieldsSelection<dipdup_head_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "dipdup_head" */
delete_dipdup_head_by_pk: ((args: {name: Scalars['String']}) => dipdup_headPromiseChain & {get: <R extends dipdup_headRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head, R> | undefined)) => Promise<(FieldsSelection<dipdup_head, R> | undefined)>}),
    
/** delete data from the table: "dipdup_head_status" */
delete_dipdup_head_status: ((args: {
/** filter the rows which have to be deleted */
where: dipdup_head_status_bool_exp}) => dipdup_head_status_mutation_responsePromiseChain & {get: <R extends dipdup_head_status_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_status_mutation_response, R> | undefined)) => Promise<(FieldsSelection<dipdup_head_status_mutation_response, R> | undefined)>}),
    
/** delete data from the table: "dipdup_index" */
delete_dipdup_index: ((args: {
/** filter the rows which have to be deleted */
where: dipdup_index_bool_exp}) => dipdup_index_mutation_responsePromiseChain & {get: <R extends dipdup_index_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_mutation_response, R> | undefined)) => Promise<(FieldsSelection<dipdup_index_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "dipdup_index" */
delete_dipdup_index_by_pk: ((args: {name: Scalars['String']}) => dipdup_indexPromiseChain & {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index, R> | undefined)) => Promise<(FieldsSelection<dipdup_index, R> | undefined)>}),
    
/** delete data from the table: "dipdup_schema" */
delete_dipdup_schema: ((args: {
/** filter the rows which have to be deleted */
where: dipdup_schema_bool_exp}) => dipdup_schema_mutation_responsePromiseChain & {get: <R extends dipdup_schema_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema_mutation_response, R> | undefined)) => Promise<(FieldsSelection<dipdup_schema_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "dipdup_schema" */
delete_dipdup_schema_by_pk: ((args: {name: Scalars['String']}) => dipdup_schemaPromiseChain & {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema, R> | undefined)) => Promise<(FieldsSelection<dipdup_schema, R> | undefined)>}),
    
/** delete data from the table: "dipdup_token_metadata" */
delete_dipdup_token_metadata: ((args: {
/** filter the rows which have to be deleted */
where: dipdup_token_metadata_bool_exp}) => dipdup_token_metadata_mutation_responsePromiseChain & {get: <R extends dipdup_token_metadata_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata_mutation_response, R> | undefined)) => Promise<(FieldsSelection<dipdup_token_metadata_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "dipdup_token_metadata" */
delete_dipdup_token_metadata_by_pk: ((args: {id: Scalars['Int']}) => dipdup_token_metadataPromiseChain & {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata, R> | undefined)) => Promise<(FieldsSelection<dipdup_token_metadata, R> | undefined)>}),
    
/** delete data from the table: "ipfs" */
delete_ipfs: ((args: {
/** filter the rows which have to be deleted */
where: ipfs_bool_exp}) => ipfs_mutation_responsePromiseChain & {get: <R extends ipfs_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<ipfs_mutation_response, R> | undefined)) => Promise<(FieldsSelection<ipfs_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "ipfs" */
delete_ipfs_by_pk: ((args: {id: Scalars['Int']}) => ipfsPromiseChain & {get: <R extends ipfsRequest>(request: R, defaultValue?: (FieldsSelection<ipfs, R> | undefined)) => Promise<(FieldsSelection<ipfs, R> | undefined)>}),
    
/** delete data from the table: "listing" */
delete_listing: ((args: {
/** filter the rows which have to be deleted */
where: listing_bool_exp}) => listing_mutation_responsePromiseChain & {get: <R extends listing_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<listing_mutation_response, R> | undefined)) => Promise<(FieldsSelection<listing_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "listing" */
delete_listing_by_pk: ((args: {id: Scalars['Int']}) => listingPromiseChain & {get: <R extends listingRequest>(request: R, defaultValue?: (FieldsSelection<listing, R> | undefined)) => Promise<(FieldsSelection<listing, R> | undefined)>}),
    
/** delete data from the table: "loan" */
delete_loan: ((args: {
/** filter the rows which have to be deleted */
where: loan_bool_exp}) => loan_mutation_responsePromiseChain & {get: <R extends loan_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<loan_mutation_response, R> | undefined)) => Promise<(FieldsSelection<loan_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "loan" */
delete_loan_by_pk: ((args: {id: Scalars['Int']}) => loanPromiseChain & {get: <R extends loanRequest>(request: R, defaultValue?: (FieldsSelection<loan, R> | undefined)) => Promise<(FieldsSelection<loan, R> | undefined)>}),
    
/** delete data from the table: "offer" */
delete_offer: ((args: {
/** filter the rows which have to be deleted */
where: offer_bool_exp}) => offer_mutation_responsePromiseChain & {get: <R extends offer_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<offer_mutation_response, R> | undefined)) => Promise<(FieldsSelection<offer_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "offer" */
delete_offer_by_pk: ((args: {id: Scalars['Int']}) => offerPromiseChain & {get: <R extends offerRequest>(request: R, defaultValue?: (FieldsSelection<offer, R> | undefined)) => Promise<(FieldsSelection<offer, R> | undefined)>}),
    
/** delete data from the table: "token" */
delete_token: ((args: {
/** filter the rows which have to be deleted */
where: token_bool_exp}) => token_mutation_responsePromiseChain & {get: <R extends token_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<token_mutation_response, R> | undefined)) => Promise<(FieldsSelection<token_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "token" */
delete_token_by_pk: ((args: {id: Scalars['Int']}) => tokenPromiseChain & {get: <R extends tokenRequest>(request: R, defaultValue?: (FieldsSelection<token, R> | undefined)) => Promise<(FieldsSelection<token, R> | undefined)>}),
    
/** insert data into the table: "dipdup_contract" */
insert_dipdup_contract: ((args: {
/** the rows to be inserted */
objects: dipdup_contract_insert_input[],
/** upsert condition */
on_conflict?: (dipdup_contract_on_conflict | null)}) => dipdup_contract_mutation_responsePromiseChain & {get: <R extends dipdup_contract_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_mutation_response, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract_mutation_response, R> | undefined)>}),
    
/** insert data into the table: "dipdup_contract_metadata" */
insert_dipdup_contract_metadata: ((args: {
/** the rows to be inserted */
objects: dipdup_contract_metadata_insert_input[],
/** upsert condition */
on_conflict?: (dipdup_contract_metadata_on_conflict | null)}) => dipdup_contract_metadata_mutation_responsePromiseChain & {get: <R extends dipdup_contract_metadata_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata_mutation_response, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract_metadata_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "dipdup_contract_metadata" */
insert_dipdup_contract_metadata_one: ((args: {
/** the row to be inserted */
object: dipdup_contract_metadata_insert_input,
/** upsert condition */
on_conflict?: (dipdup_contract_metadata_on_conflict | null)}) => dipdup_contract_metadataPromiseChain & {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract_metadata, R> | undefined)>}),
    
/** insert a single row into the table: "dipdup_contract" */
insert_dipdup_contract_one: ((args: {
/** the row to be inserted */
object: dipdup_contract_insert_input,
/** upsert condition */
on_conflict?: (dipdup_contract_on_conflict | null)}) => dipdup_contractPromiseChain & {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract, R> | undefined)>}),
    
/** insert data into the table: "dipdup_head" */
insert_dipdup_head: ((args: {
/** the rows to be inserted */
objects: dipdup_head_insert_input[],
/** upsert condition */
on_conflict?: (dipdup_head_on_conflict | null)}) => dipdup_head_mutation_responsePromiseChain & {get: <R extends dipdup_head_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_mutation_response, R> | undefined)) => Promise<(FieldsSelection<dipdup_head_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "dipdup_head" */
insert_dipdup_head_one: ((args: {
/** the row to be inserted */
object: dipdup_head_insert_input,
/** upsert condition */
on_conflict?: (dipdup_head_on_conflict | null)}) => dipdup_headPromiseChain & {get: <R extends dipdup_headRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head, R> | undefined)) => Promise<(FieldsSelection<dipdup_head, R> | undefined)>}),
    
/** insert data into the table: "dipdup_head_status" */
insert_dipdup_head_status: ((args: {
/** the rows to be inserted */
objects: dipdup_head_status_insert_input[]}) => dipdup_head_status_mutation_responsePromiseChain & {get: <R extends dipdup_head_status_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_status_mutation_response, R> | undefined)) => Promise<(FieldsSelection<dipdup_head_status_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "dipdup_head_status" */
insert_dipdup_head_status_one: ((args: {
/** the row to be inserted */
object: dipdup_head_status_insert_input}) => dipdup_head_statusPromiseChain & {get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_status, R> | undefined)) => Promise<(FieldsSelection<dipdup_head_status, R> | undefined)>}),
    
/** insert data into the table: "dipdup_index" */
insert_dipdup_index: ((args: {
/** the rows to be inserted */
objects: dipdup_index_insert_input[],
/** upsert condition */
on_conflict?: (dipdup_index_on_conflict | null)}) => dipdup_index_mutation_responsePromiseChain & {get: <R extends dipdup_index_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_mutation_response, R> | undefined)) => Promise<(FieldsSelection<dipdup_index_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "dipdup_index" */
insert_dipdup_index_one: ((args: {
/** the row to be inserted */
object: dipdup_index_insert_input,
/** upsert condition */
on_conflict?: (dipdup_index_on_conflict | null)}) => dipdup_indexPromiseChain & {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index, R> | undefined)) => Promise<(FieldsSelection<dipdup_index, R> | undefined)>}),
    
/** insert data into the table: "dipdup_schema" */
insert_dipdup_schema: ((args: {
/** the rows to be inserted */
objects: dipdup_schema_insert_input[],
/** upsert condition */
on_conflict?: (dipdup_schema_on_conflict | null)}) => dipdup_schema_mutation_responsePromiseChain & {get: <R extends dipdup_schema_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema_mutation_response, R> | undefined)) => Promise<(FieldsSelection<dipdup_schema_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "dipdup_schema" */
insert_dipdup_schema_one: ((args: {
/** the row to be inserted */
object: dipdup_schema_insert_input,
/** upsert condition */
on_conflict?: (dipdup_schema_on_conflict | null)}) => dipdup_schemaPromiseChain & {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema, R> | undefined)) => Promise<(FieldsSelection<dipdup_schema, R> | undefined)>}),
    
/** insert data into the table: "dipdup_token_metadata" */
insert_dipdup_token_metadata: ((args: {
/** the rows to be inserted */
objects: dipdup_token_metadata_insert_input[],
/** upsert condition */
on_conflict?: (dipdup_token_metadata_on_conflict | null)}) => dipdup_token_metadata_mutation_responsePromiseChain & {get: <R extends dipdup_token_metadata_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata_mutation_response, R> | undefined)) => Promise<(FieldsSelection<dipdup_token_metadata_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "dipdup_token_metadata" */
insert_dipdup_token_metadata_one: ((args: {
/** the row to be inserted */
object: dipdup_token_metadata_insert_input,
/** upsert condition */
on_conflict?: (dipdup_token_metadata_on_conflict | null)}) => dipdup_token_metadataPromiseChain & {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata, R> | undefined)) => Promise<(FieldsSelection<dipdup_token_metadata, R> | undefined)>}),
    
/** insert data into the table: "ipfs" */
insert_ipfs: ((args: {
/** the rows to be inserted */
objects: ipfs_insert_input[],
/** upsert condition */
on_conflict?: (ipfs_on_conflict | null)}) => ipfs_mutation_responsePromiseChain & {get: <R extends ipfs_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<ipfs_mutation_response, R> | undefined)) => Promise<(FieldsSelection<ipfs_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "ipfs" */
insert_ipfs_one: ((args: {
/** the row to be inserted */
object: ipfs_insert_input,
/** upsert condition */
on_conflict?: (ipfs_on_conflict | null)}) => ipfsPromiseChain & {get: <R extends ipfsRequest>(request: R, defaultValue?: (FieldsSelection<ipfs, R> | undefined)) => Promise<(FieldsSelection<ipfs, R> | undefined)>}),
    
/** insert data into the table: "listing" */
insert_listing: ((args: {
/** the rows to be inserted */
objects: listing_insert_input[],
/** upsert condition */
on_conflict?: (listing_on_conflict | null)}) => listing_mutation_responsePromiseChain & {get: <R extends listing_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<listing_mutation_response, R> | undefined)) => Promise<(FieldsSelection<listing_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "listing" */
insert_listing_one: ((args: {
/** the row to be inserted */
object: listing_insert_input,
/** upsert condition */
on_conflict?: (listing_on_conflict | null)}) => listingPromiseChain & {get: <R extends listingRequest>(request: R, defaultValue?: (FieldsSelection<listing, R> | undefined)) => Promise<(FieldsSelection<listing, R> | undefined)>}),
    
/** insert data into the table: "loan" */
insert_loan: ((args: {
/** the rows to be inserted */
objects: loan_insert_input[],
/** upsert condition */
on_conflict?: (loan_on_conflict | null)}) => loan_mutation_responsePromiseChain & {get: <R extends loan_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<loan_mutation_response, R> | undefined)) => Promise<(FieldsSelection<loan_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "loan" */
insert_loan_one: ((args: {
/** the row to be inserted */
object: loan_insert_input,
/** upsert condition */
on_conflict?: (loan_on_conflict | null)}) => loanPromiseChain & {get: <R extends loanRequest>(request: R, defaultValue?: (FieldsSelection<loan, R> | undefined)) => Promise<(FieldsSelection<loan, R> | undefined)>}),
    
/** insert data into the table: "offer" */
insert_offer: ((args: {
/** the rows to be inserted */
objects: offer_insert_input[],
/** upsert condition */
on_conflict?: (offer_on_conflict | null)}) => offer_mutation_responsePromiseChain & {get: <R extends offer_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<offer_mutation_response, R> | undefined)) => Promise<(FieldsSelection<offer_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "offer" */
insert_offer_one: ((args: {
/** the row to be inserted */
object: offer_insert_input,
/** upsert condition */
on_conflict?: (offer_on_conflict | null)}) => offerPromiseChain & {get: <R extends offerRequest>(request: R, defaultValue?: (FieldsSelection<offer, R> | undefined)) => Promise<(FieldsSelection<offer, R> | undefined)>}),
    
/** insert data into the table: "token" */
insert_token: ((args: {
/** the rows to be inserted */
objects: token_insert_input[],
/** upsert condition */
on_conflict?: (token_on_conflict | null)}) => token_mutation_responsePromiseChain & {get: <R extends token_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<token_mutation_response, R> | undefined)) => Promise<(FieldsSelection<token_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "token" */
insert_token_one: ((args: {
/** the row to be inserted */
object: token_insert_input,
/** upsert condition */
on_conflict?: (token_on_conflict | null)}) => tokenPromiseChain & {get: <R extends tokenRequest>(request: R, defaultValue?: (FieldsSelection<token, R> | undefined)) => Promise<(FieldsSelection<token, R> | undefined)>}),
    
/** update data of the table: "dipdup_contract" */
update_dipdup_contract: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (dipdup_contract_set_input | null),
/** filter the rows which have to be updated */
where: dipdup_contract_bool_exp}) => dipdup_contract_mutation_responsePromiseChain & {get: <R extends dipdup_contract_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_mutation_response, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "dipdup_contract" */
update_dipdup_contract_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (dipdup_contract_set_input | null),pk_columns: dipdup_contract_pk_columns_input}) => dipdup_contractPromiseChain & {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract, R> | undefined)>}),
    
/** update data of the table: "dipdup_contract_metadata" */
update_dipdup_contract_metadata: ((args: {
/** append existing jsonb value of filtered columns with new jsonb value */
_append?: (dipdup_contract_metadata_append_input | null),
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
_delete_at_path?: (dipdup_contract_metadata_delete_at_path_input | null),
/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
_delete_elem?: (dipdup_contract_metadata_delete_elem_input | null),
/** delete key/value pair or string element. key/value pairs are matched based on their key value */
_delete_key?: (dipdup_contract_metadata_delete_key_input | null),
/** increments the numeric columns with given value of the filtered values */
_inc?: (dipdup_contract_metadata_inc_input | null),
/** prepend existing jsonb value of filtered columns with new jsonb value */
_prepend?: (dipdup_contract_metadata_prepend_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (dipdup_contract_metadata_set_input | null),
/** filter the rows which have to be updated */
where: dipdup_contract_metadata_bool_exp}) => dipdup_contract_metadata_mutation_responsePromiseChain & {get: <R extends dipdup_contract_metadata_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata_mutation_response, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract_metadata_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "dipdup_contract_metadata" */
update_dipdup_contract_metadata_by_pk: ((args: {
/** append existing jsonb value of filtered columns with new jsonb value */
_append?: (dipdup_contract_metadata_append_input | null),
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
_delete_at_path?: (dipdup_contract_metadata_delete_at_path_input | null),
/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
_delete_elem?: (dipdup_contract_metadata_delete_elem_input | null),
/** delete key/value pair or string element. key/value pairs are matched based on their key value */
_delete_key?: (dipdup_contract_metadata_delete_key_input | null),
/** increments the numeric columns with given value of the filtered values */
_inc?: (dipdup_contract_metadata_inc_input | null),
/** prepend existing jsonb value of filtered columns with new jsonb value */
_prepend?: (dipdup_contract_metadata_prepend_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (dipdup_contract_metadata_set_input | null),pk_columns: dipdup_contract_metadata_pk_columns_input}) => dipdup_contract_metadataPromiseChain & {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract_metadata, R> | undefined)>}),
    
/** update data of the table: "dipdup_head" */
update_dipdup_head: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (dipdup_head_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (dipdup_head_set_input | null),
/** filter the rows which have to be updated */
where: dipdup_head_bool_exp}) => dipdup_head_mutation_responsePromiseChain & {get: <R extends dipdup_head_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_mutation_response, R> | undefined)) => Promise<(FieldsSelection<dipdup_head_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "dipdup_head" */
update_dipdup_head_by_pk: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (dipdup_head_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (dipdup_head_set_input | null),pk_columns: dipdup_head_pk_columns_input}) => dipdup_headPromiseChain & {get: <R extends dipdup_headRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head, R> | undefined)) => Promise<(FieldsSelection<dipdup_head, R> | undefined)>}),
    
/** update data of the table: "dipdup_head_status" */
update_dipdup_head_status: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (dipdup_head_status_set_input | null),
/** filter the rows which have to be updated */
where: dipdup_head_status_bool_exp}) => dipdup_head_status_mutation_responsePromiseChain & {get: <R extends dipdup_head_status_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_status_mutation_response, R> | undefined)) => Promise<(FieldsSelection<dipdup_head_status_mutation_response, R> | undefined)>}),
    
/** update data of the table: "dipdup_index" */
update_dipdup_index: ((args: {
/** append existing jsonb value of filtered columns with new jsonb value */
_append?: (dipdup_index_append_input | null),
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
_delete_at_path?: (dipdup_index_delete_at_path_input | null),
/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
_delete_elem?: (dipdup_index_delete_elem_input | null),
/** delete key/value pair or string element. key/value pairs are matched based on their key value */
_delete_key?: (dipdup_index_delete_key_input | null),
/** increments the numeric columns with given value of the filtered values */
_inc?: (dipdup_index_inc_input | null),
/** prepend existing jsonb value of filtered columns with new jsonb value */
_prepend?: (dipdup_index_prepend_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (dipdup_index_set_input | null),
/** filter the rows which have to be updated */
where: dipdup_index_bool_exp}) => dipdup_index_mutation_responsePromiseChain & {get: <R extends dipdup_index_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_mutation_response, R> | undefined)) => Promise<(FieldsSelection<dipdup_index_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "dipdup_index" */
update_dipdup_index_by_pk: ((args: {
/** append existing jsonb value of filtered columns with new jsonb value */
_append?: (dipdup_index_append_input | null),
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
_delete_at_path?: (dipdup_index_delete_at_path_input | null),
/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
_delete_elem?: (dipdup_index_delete_elem_input | null),
/** delete key/value pair or string element. key/value pairs are matched based on their key value */
_delete_key?: (dipdup_index_delete_key_input | null),
/** increments the numeric columns with given value of the filtered values */
_inc?: (dipdup_index_inc_input | null),
/** prepend existing jsonb value of filtered columns with new jsonb value */
_prepend?: (dipdup_index_prepend_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (dipdup_index_set_input | null),pk_columns: dipdup_index_pk_columns_input}) => dipdup_indexPromiseChain & {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index, R> | undefined)) => Promise<(FieldsSelection<dipdup_index, R> | undefined)>}),
    
/** update data of the table: "dipdup_schema" */
update_dipdup_schema: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (dipdup_schema_set_input | null),
/** filter the rows which have to be updated */
where: dipdup_schema_bool_exp}) => dipdup_schema_mutation_responsePromiseChain & {get: <R extends dipdup_schema_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema_mutation_response, R> | undefined)) => Promise<(FieldsSelection<dipdup_schema_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "dipdup_schema" */
update_dipdup_schema_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (dipdup_schema_set_input | null),pk_columns: dipdup_schema_pk_columns_input}) => dipdup_schemaPromiseChain & {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema, R> | undefined)) => Promise<(FieldsSelection<dipdup_schema, R> | undefined)>}),
    
/** update data of the table: "dipdup_token_metadata" */
update_dipdup_token_metadata: ((args: {
/** append existing jsonb value of filtered columns with new jsonb value */
_append?: (dipdup_token_metadata_append_input | null),
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
_delete_at_path?: (dipdup_token_metadata_delete_at_path_input | null),
/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
_delete_elem?: (dipdup_token_metadata_delete_elem_input | null),
/** delete key/value pair or string element. key/value pairs are matched based on their key value */
_delete_key?: (dipdup_token_metadata_delete_key_input | null),
/** increments the numeric columns with given value of the filtered values */
_inc?: (dipdup_token_metadata_inc_input | null),
/** prepend existing jsonb value of filtered columns with new jsonb value */
_prepend?: (dipdup_token_metadata_prepend_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (dipdup_token_metadata_set_input | null),
/** filter the rows which have to be updated */
where: dipdup_token_metadata_bool_exp}) => dipdup_token_metadata_mutation_responsePromiseChain & {get: <R extends dipdup_token_metadata_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata_mutation_response, R> | undefined)) => Promise<(FieldsSelection<dipdup_token_metadata_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "dipdup_token_metadata" */
update_dipdup_token_metadata_by_pk: ((args: {
/** append existing jsonb value of filtered columns with new jsonb value */
_append?: (dipdup_token_metadata_append_input | null),
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
_delete_at_path?: (dipdup_token_metadata_delete_at_path_input | null),
/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
_delete_elem?: (dipdup_token_metadata_delete_elem_input | null),
/** delete key/value pair or string element. key/value pairs are matched based on their key value */
_delete_key?: (dipdup_token_metadata_delete_key_input | null),
/** increments the numeric columns with given value of the filtered values */
_inc?: (dipdup_token_metadata_inc_input | null),
/** prepend existing jsonb value of filtered columns with new jsonb value */
_prepend?: (dipdup_token_metadata_prepend_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (dipdup_token_metadata_set_input | null),pk_columns: dipdup_token_metadata_pk_columns_input}) => dipdup_token_metadataPromiseChain & {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata, R> | undefined)) => Promise<(FieldsSelection<dipdup_token_metadata, R> | undefined)>}),
    
/** update data of the table: "ipfs" */
update_ipfs: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (ipfs_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (ipfs_set_input | null),
/** filter the rows which have to be updated */
where: ipfs_bool_exp}) => ipfs_mutation_responsePromiseChain & {get: <R extends ipfs_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<ipfs_mutation_response, R> | undefined)) => Promise<(FieldsSelection<ipfs_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "ipfs" */
update_ipfs_by_pk: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (ipfs_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (ipfs_set_input | null),pk_columns: ipfs_pk_columns_input}) => ipfsPromiseChain & {get: <R extends ipfsRequest>(request: R, defaultValue?: (FieldsSelection<ipfs, R> | undefined)) => Promise<(FieldsSelection<ipfs, R> | undefined)>}),
    
/** update data of the table: "listing" */
update_listing: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (listing_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (listing_set_input | null),
/** filter the rows which have to be updated */
where: listing_bool_exp}) => listing_mutation_responsePromiseChain & {get: <R extends listing_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<listing_mutation_response, R> | undefined)) => Promise<(FieldsSelection<listing_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "listing" */
update_listing_by_pk: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (listing_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (listing_set_input | null),pk_columns: listing_pk_columns_input}) => listingPromiseChain & {get: <R extends listingRequest>(request: R, defaultValue?: (FieldsSelection<listing, R> | undefined)) => Promise<(FieldsSelection<listing, R> | undefined)>}),
    
/** update data of the table: "loan" */
update_loan: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (loan_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (loan_set_input | null),
/** filter the rows which have to be updated */
where: loan_bool_exp}) => loan_mutation_responsePromiseChain & {get: <R extends loan_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<loan_mutation_response, R> | undefined)) => Promise<(FieldsSelection<loan_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "loan" */
update_loan_by_pk: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (loan_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (loan_set_input | null),pk_columns: loan_pk_columns_input}) => loanPromiseChain & {get: <R extends loanRequest>(request: R, defaultValue?: (FieldsSelection<loan, R> | undefined)) => Promise<(FieldsSelection<loan, R> | undefined)>}),
    
/** update data of the table: "offer" */
update_offer: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (offer_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (offer_set_input | null),
/** filter the rows which have to be updated */
where: offer_bool_exp}) => offer_mutation_responsePromiseChain & {get: <R extends offer_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<offer_mutation_response, R> | undefined)) => Promise<(FieldsSelection<offer_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "offer" */
update_offer_by_pk: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (offer_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (offer_set_input | null),pk_columns: offer_pk_columns_input}) => offerPromiseChain & {get: <R extends offerRequest>(request: R, defaultValue?: (FieldsSelection<offer, R> | undefined)) => Promise<(FieldsSelection<offer, R> | undefined)>}),
    
/** update data of the table: "token" */
update_token: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (token_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (token_set_input | null),
/** filter the rows which have to be updated */
where: token_bool_exp}) => token_mutation_responsePromiseChain & {get: <R extends token_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<token_mutation_response, R> | undefined)) => Promise<(FieldsSelection<token_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "token" */
update_token_by_pk: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (token_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (token_set_input | null),pk_columns: token_pk_columns_input}) => tokenPromiseChain & {get: <R extends tokenRequest>(request: R, defaultValue?: (FieldsSelection<token, R> | undefined)) => Promise<(FieldsSelection<token, R> | undefined)>})
}


/** mutation root */
export interface mutation_rootObservableChain{
    
/** delete data from the table: "dipdup_contract" */
delete_dipdup_contract: ((args: {
/** filter the rows which have to be deleted */
where: dipdup_contract_bool_exp}) => dipdup_contract_mutation_responseObservableChain & {get: <R extends dipdup_contract_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_mutation_response, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "dipdup_contract" */
delete_dipdup_contract_by_pk: ((args: {name: Scalars['String']}) => dipdup_contractObservableChain & {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract, R> | undefined)>}),
    
/** delete data from the table: "dipdup_contract_metadata" */
delete_dipdup_contract_metadata: ((args: {
/** filter the rows which have to be deleted */
where: dipdup_contract_metadata_bool_exp}) => dipdup_contract_metadata_mutation_responseObservableChain & {get: <R extends dipdup_contract_metadata_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata_mutation_response, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract_metadata_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "dipdup_contract_metadata" */
delete_dipdup_contract_metadata_by_pk: ((args: {id: Scalars['Int']}) => dipdup_contract_metadataObservableChain & {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract_metadata, R> | undefined)>}),
    
/** delete data from the table: "dipdup_head" */
delete_dipdup_head: ((args: {
/** filter the rows which have to be deleted */
where: dipdup_head_bool_exp}) => dipdup_head_mutation_responseObservableChain & {get: <R extends dipdup_head_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_mutation_response, R> | undefined)) => Observable<(FieldsSelection<dipdup_head_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "dipdup_head" */
delete_dipdup_head_by_pk: ((args: {name: Scalars['String']}) => dipdup_headObservableChain & {get: <R extends dipdup_headRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head, R> | undefined)) => Observable<(FieldsSelection<dipdup_head, R> | undefined)>}),
    
/** delete data from the table: "dipdup_head_status" */
delete_dipdup_head_status: ((args: {
/** filter the rows which have to be deleted */
where: dipdup_head_status_bool_exp}) => dipdup_head_status_mutation_responseObservableChain & {get: <R extends dipdup_head_status_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_status_mutation_response, R> | undefined)) => Observable<(FieldsSelection<dipdup_head_status_mutation_response, R> | undefined)>}),
    
/** delete data from the table: "dipdup_index" */
delete_dipdup_index: ((args: {
/** filter the rows which have to be deleted */
where: dipdup_index_bool_exp}) => dipdup_index_mutation_responseObservableChain & {get: <R extends dipdup_index_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_mutation_response, R> | undefined)) => Observable<(FieldsSelection<dipdup_index_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "dipdup_index" */
delete_dipdup_index_by_pk: ((args: {name: Scalars['String']}) => dipdup_indexObservableChain & {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index, R> | undefined)) => Observable<(FieldsSelection<dipdup_index, R> | undefined)>}),
    
/** delete data from the table: "dipdup_schema" */
delete_dipdup_schema: ((args: {
/** filter the rows which have to be deleted */
where: dipdup_schema_bool_exp}) => dipdup_schema_mutation_responseObservableChain & {get: <R extends dipdup_schema_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema_mutation_response, R> | undefined)) => Observable<(FieldsSelection<dipdup_schema_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "dipdup_schema" */
delete_dipdup_schema_by_pk: ((args: {name: Scalars['String']}) => dipdup_schemaObservableChain & {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema, R> | undefined)) => Observable<(FieldsSelection<dipdup_schema, R> | undefined)>}),
    
/** delete data from the table: "dipdup_token_metadata" */
delete_dipdup_token_metadata: ((args: {
/** filter the rows which have to be deleted */
where: dipdup_token_metadata_bool_exp}) => dipdup_token_metadata_mutation_responseObservableChain & {get: <R extends dipdup_token_metadata_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata_mutation_response, R> | undefined)) => Observable<(FieldsSelection<dipdup_token_metadata_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "dipdup_token_metadata" */
delete_dipdup_token_metadata_by_pk: ((args: {id: Scalars['Int']}) => dipdup_token_metadataObservableChain & {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata, R> | undefined)) => Observable<(FieldsSelection<dipdup_token_metadata, R> | undefined)>}),
    
/** delete data from the table: "ipfs" */
delete_ipfs: ((args: {
/** filter the rows which have to be deleted */
where: ipfs_bool_exp}) => ipfs_mutation_responseObservableChain & {get: <R extends ipfs_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<ipfs_mutation_response, R> | undefined)) => Observable<(FieldsSelection<ipfs_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "ipfs" */
delete_ipfs_by_pk: ((args: {id: Scalars['Int']}) => ipfsObservableChain & {get: <R extends ipfsRequest>(request: R, defaultValue?: (FieldsSelection<ipfs, R> | undefined)) => Observable<(FieldsSelection<ipfs, R> | undefined)>}),
    
/** delete data from the table: "listing" */
delete_listing: ((args: {
/** filter the rows which have to be deleted */
where: listing_bool_exp}) => listing_mutation_responseObservableChain & {get: <R extends listing_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<listing_mutation_response, R> | undefined)) => Observable<(FieldsSelection<listing_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "listing" */
delete_listing_by_pk: ((args: {id: Scalars['Int']}) => listingObservableChain & {get: <R extends listingRequest>(request: R, defaultValue?: (FieldsSelection<listing, R> | undefined)) => Observable<(FieldsSelection<listing, R> | undefined)>}),
    
/** delete data from the table: "loan" */
delete_loan: ((args: {
/** filter the rows which have to be deleted */
where: loan_bool_exp}) => loan_mutation_responseObservableChain & {get: <R extends loan_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<loan_mutation_response, R> | undefined)) => Observable<(FieldsSelection<loan_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "loan" */
delete_loan_by_pk: ((args: {id: Scalars['Int']}) => loanObservableChain & {get: <R extends loanRequest>(request: R, defaultValue?: (FieldsSelection<loan, R> | undefined)) => Observable<(FieldsSelection<loan, R> | undefined)>}),
    
/** delete data from the table: "offer" */
delete_offer: ((args: {
/** filter the rows which have to be deleted */
where: offer_bool_exp}) => offer_mutation_responseObservableChain & {get: <R extends offer_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<offer_mutation_response, R> | undefined)) => Observable<(FieldsSelection<offer_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "offer" */
delete_offer_by_pk: ((args: {id: Scalars['Int']}) => offerObservableChain & {get: <R extends offerRequest>(request: R, defaultValue?: (FieldsSelection<offer, R> | undefined)) => Observable<(FieldsSelection<offer, R> | undefined)>}),
    
/** delete data from the table: "token" */
delete_token: ((args: {
/** filter the rows which have to be deleted */
where: token_bool_exp}) => token_mutation_responseObservableChain & {get: <R extends token_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<token_mutation_response, R> | undefined)) => Observable<(FieldsSelection<token_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "token" */
delete_token_by_pk: ((args: {id: Scalars['Int']}) => tokenObservableChain & {get: <R extends tokenRequest>(request: R, defaultValue?: (FieldsSelection<token, R> | undefined)) => Observable<(FieldsSelection<token, R> | undefined)>}),
    
/** insert data into the table: "dipdup_contract" */
insert_dipdup_contract: ((args: {
/** the rows to be inserted */
objects: dipdup_contract_insert_input[],
/** upsert condition */
on_conflict?: (dipdup_contract_on_conflict | null)}) => dipdup_contract_mutation_responseObservableChain & {get: <R extends dipdup_contract_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_mutation_response, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract_mutation_response, R> | undefined)>}),
    
/** insert data into the table: "dipdup_contract_metadata" */
insert_dipdup_contract_metadata: ((args: {
/** the rows to be inserted */
objects: dipdup_contract_metadata_insert_input[],
/** upsert condition */
on_conflict?: (dipdup_contract_metadata_on_conflict | null)}) => dipdup_contract_metadata_mutation_responseObservableChain & {get: <R extends dipdup_contract_metadata_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata_mutation_response, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract_metadata_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "dipdup_contract_metadata" */
insert_dipdup_contract_metadata_one: ((args: {
/** the row to be inserted */
object: dipdup_contract_metadata_insert_input,
/** upsert condition */
on_conflict?: (dipdup_contract_metadata_on_conflict | null)}) => dipdup_contract_metadataObservableChain & {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract_metadata, R> | undefined)>}),
    
/** insert a single row into the table: "dipdup_contract" */
insert_dipdup_contract_one: ((args: {
/** the row to be inserted */
object: dipdup_contract_insert_input,
/** upsert condition */
on_conflict?: (dipdup_contract_on_conflict | null)}) => dipdup_contractObservableChain & {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract, R> | undefined)>}),
    
/** insert data into the table: "dipdup_head" */
insert_dipdup_head: ((args: {
/** the rows to be inserted */
objects: dipdup_head_insert_input[],
/** upsert condition */
on_conflict?: (dipdup_head_on_conflict | null)}) => dipdup_head_mutation_responseObservableChain & {get: <R extends dipdup_head_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_mutation_response, R> | undefined)) => Observable<(FieldsSelection<dipdup_head_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "dipdup_head" */
insert_dipdup_head_one: ((args: {
/** the row to be inserted */
object: dipdup_head_insert_input,
/** upsert condition */
on_conflict?: (dipdup_head_on_conflict | null)}) => dipdup_headObservableChain & {get: <R extends dipdup_headRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head, R> | undefined)) => Observable<(FieldsSelection<dipdup_head, R> | undefined)>}),
    
/** insert data into the table: "dipdup_head_status" */
insert_dipdup_head_status: ((args: {
/** the rows to be inserted */
objects: dipdup_head_status_insert_input[]}) => dipdup_head_status_mutation_responseObservableChain & {get: <R extends dipdup_head_status_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_status_mutation_response, R> | undefined)) => Observable<(FieldsSelection<dipdup_head_status_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "dipdup_head_status" */
insert_dipdup_head_status_one: ((args: {
/** the row to be inserted */
object: dipdup_head_status_insert_input}) => dipdup_head_statusObservableChain & {get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_status, R> | undefined)) => Observable<(FieldsSelection<dipdup_head_status, R> | undefined)>}),
    
/** insert data into the table: "dipdup_index" */
insert_dipdup_index: ((args: {
/** the rows to be inserted */
objects: dipdup_index_insert_input[],
/** upsert condition */
on_conflict?: (dipdup_index_on_conflict | null)}) => dipdup_index_mutation_responseObservableChain & {get: <R extends dipdup_index_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_mutation_response, R> | undefined)) => Observable<(FieldsSelection<dipdup_index_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "dipdup_index" */
insert_dipdup_index_one: ((args: {
/** the row to be inserted */
object: dipdup_index_insert_input,
/** upsert condition */
on_conflict?: (dipdup_index_on_conflict | null)}) => dipdup_indexObservableChain & {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index, R> | undefined)) => Observable<(FieldsSelection<dipdup_index, R> | undefined)>}),
    
/** insert data into the table: "dipdup_schema" */
insert_dipdup_schema: ((args: {
/** the rows to be inserted */
objects: dipdup_schema_insert_input[],
/** upsert condition */
on_conflict?: (dipdup_schema_on_conflict | null)}) => dipdup_schema_mutation_responseObservableChain & {get: <R extends dipdup_schema_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema_mutation_response, R> | undefined)) => Observable<(FieldsSelection<dipdup_schema_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "dipdup_schema" */
insert_dipdup_schema_one: ((args: {
/** the row to be inserted */
object: dipdup_schema_insert_input,
/** upsert condition */
on_conflict?: (dipdup_schema_on_conflict | null)}) => dipdup_schemaObservableChain & {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema, R> | undefined)) => Observable<(FieldsSelection<dipdup_schema, R> | undefined)>}),
    
/** insert data into the table: "dipdup_token_metadata" */
insert_dipdup_token_metadata: ((args: {
/** the rows to be inserted */
objects: dipdup_token_metadata_insert_input[],
/** upsert condition */
on_conflict?: (dipdup_token_metadata_on_conflict | null)}) => dipdup_token_metadata_mutation_responseObservableChain & {get: <R extends dipdup_token_metadata_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata_mutation_response, R> | undefined)) => Observable<(FieldsSelection<dipdup_token_metadata_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "dipdup_token_metadata" */
insert_dipdup_token_metadata_one: ((args: {
/** the row to be inserted */
object: dipdup_token_metadata_insert_input,
/** upsert condition */
on_conflict?: (dipdup_token_metadata_on_conflict | null)}) => dipdup_token_metadataObservableChain & {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata, R> | undefined)) => Observable<(FieldsSelection<dipdup_token_metadata, R> | undefined)>}),
    
/** insert data into the table: "ipfs" */
insert_ipfs: ((args: {
/** the rows to be inserted */
objects: ipfs_insert_input[],
/** upsert condition */
on_conflict?: (ipfs_on_conflict | null)}) => ipfs_mutation_responseObservableChain & {get: <R extends ipfs_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<ipfs_mutation_response, R> | undefined)) => Observable<(FieldsSelection<ipfs_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "ipfs" */
insert_ipfs_one: ((args: {
/** the row to be inserted */
object: ipfs_insert_input,
/** upsert condition */
on_conflict?: (ipfs_on_conflict | null)}) => ipfsObservableChain & {get: <R extends ipfsRequest>(request: R, defaultValue?: (FieldsSelection<ipfs, R> | undefined)) => Observable<(FieldsSelection<ipfs, R> | undefined)>}),
    
/** insert data into the table: "listing" */
insert_listing: ((args: {
/** the rows to be inserted */
objects: listing_insert_input[],
/** upsert condition */
on_conflict?: (listing_on_conflict | null)}) => listing_mutation_responseObservableChain & {get: <R extends listing_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<listing_mutation_response, R> | undefined)) => Observable<(FieldsSelection<listing_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "listing" */
insert_listing_one: ((args: {
/** the row to be inserted */
object: listing_insert_input,
/** upsert condition */
on_conflict?: (listing_on_conflict | null)}) => listingObservableChain & {get: <R extends listingRequest>(request: R, defaultValue?: (FieldsSelection<listing, R> | undefined)) => Observable<(FieldsSelection<listing, R> | undefined)>}),
    
/** insert data into the table: "loan" */
insert_loan: ((args: {
/** the rows to be inserted */
objects: loan_insert_input[],
/** upsert condition */
on_conflict?: (loan_on_conflict | null)}) => loan_mutation_responseObservableChain & {get: <R extends loan_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<loan_mutation_response, R> | undefined)) => Observable<(FieldsSelection<loan_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "loan" */
insert_loan_one: ((args: {
/** the row to be inserted */
object: loan_insert_input,
/** upsert condition */
on_conflict?: (loan_on_conflict | null)}) => loanObservableChain & {get: <R extends loanRequest>(request: R, defaultValue?: (FieldsSelection<loan, R> | undefined)) => Observable<(FieldsSelection<loan, R> | undefined)>}),
    
/** insert data into the table: "offer" */
insert_offer: ((args: {
/** the rows to be inserted */
objects: offer_insert_input[],
/** upsert condition */
on_conflict?: (offer_on_conflict | null)}) => offer_mutation_responseObservableChain & {get: <R extends offer_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<offer_mutation_response, R> | undefined)) => Observable<(FieldsSelection<offer_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "offer" */
insert_offer_one: ((args: {
/** the row to be inserted */
object: offer_insert_input,
/** upsert condition */
on_conflict?: (offer_on_conflict | null)}) => offerObservableChain & {get: <R extends offerRequest>(request: R, defaultValue?: (FieldsSelection<offer, R> | undefined)) => Observable<(FieldsSelection<offer, R> | undefined)>}),
    
/** insert data into the table: "token" */
insert_token: ((args: {
/** the rows to be inserted */
objects: token_insert_input[],
/** upsert condition */
on_conflict?: (token_on_conflict | null)}) => token_mutation_responseObservableChain & {get: <R extends token_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<token_mutation_response, R> | undefined)) => Observable<(FieldsSelection<token_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "token" */
insert_token_one: ((args: {
/** the row to be inserted */
object: token_insert_input,
/** upsert condition */
on_conflict?: (token_on_conflict | null)}) => tokenObservableChain & {get: <R extends tokenRequest>(request: R, defaultValue?: (FieldsSelection<token, R> | undefined)) => Observable<(FieldsSelection<token, R> | undefined)>}),
    
/** update data of the table: "dipdup_contract" */
update_dipdup_contract: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (dipdup_contract_set_input | null),
/** filter the rows which have to be updated */
where: dipdup_contract_bool_exp}) => dipdup_contract_mutation_responseObservableChain & {get: <R extends dipdup_contract_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_mutation_response, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "dipdup_contract" */
update_dipdup_contract_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (dipdup_contract_set_input | null),pk_columns: dipdup_contract_pk_columns_input}) => dipdup_contractObservableChain & {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract, R> | undefined)>}),
    
/** update data of the table: "dipdup_contract_metadata" */
update_dipdup_contract_metadata: ((args: {
/** append existing jsonb value of filtered columns with new jsonb value */
_append?: (dipdup_contract_metadata_append_input | null),
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
_delete_at_path?: (dipdup_contract_metadata_delete_at_path_input | null),
/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
_delete_elem?: (dipdup_contract_metadata_delete_elem_input | null),
/** delete key/value pair or string element. key/value pairs are matched based on their key value */
_delete_key?: (dipdup_contract_metadata_delete_key_input | null),
/** increments the numeric columns with given value of the filtered values */
_inc?: (dipdup_contract_metadata_inc_input | null),
/** prepend existing jsonb value of filtered columns with new jsonb value */
_prepend?: (dipdup_contract_metadata_prepend_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (dipdup_contract_metadata_set_input | null),
/** filter the rows which have to be updated */
where: dipdup_contract_metadata_bool_exp}) => dipdup_contract_metadata_mutation_responseObservableChain & {get: <R extends dipdup_contract_metadata_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata_mutation_response, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract_metadata_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "dipdup_contract_metadata" */
update_dipdup_contract_metadata_by_pk: ((args: {
/** append existing jsonb value of filtered columns with new jsonb value */
_append?: (dipdup_contract_metadata_append_input | null),
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
_delete_at_path?: (dipdup_contract_metadata_delete_at_path_input | null),
/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
_delete_elem?: (dipdup_contract_metadata_delete_elem_input | null),
/** delete key/value pair or string element. key/value pairs are matched based on their key value */
_delete_key?: (dipdup_contract_metadata_delete_key_input | null),
/** increments the numeric columns with given value of the filtered values */
_inc?: (dipdup_contract_metadata_inc_input | null),
/** prepend existing jsonb value of filtered columns with new jsonb value */
_prepend?: (dipdup_contract_metadata_prepend_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (dipdup_contract_metadata_set_input | null),pk_columns: dipdup_contract_metadata_pk_columns_input}) => dipdup_contract_metadataObservableChain & {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract_metadata, R> | undefined)>}),
    
/** update data of the table: "dipdup_head" */
update_dipdup_head: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (dipdup_head_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (dipdup_head_set_input | null),
/** filter the rows which have to be updated */
where: dipdup_head_bool_exp}) => dipdup_head_mutation_responseObservableChain & {get: <R extends dipdup_head_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_mutation_response, R> | undefined)) => Observable<(FieldsSelection<dipdup_head_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "dipdup_head" */
update_dipdup_head_by_pk: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (dipdup_head_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (dipdup_head_set_input | null),pk_columns: dipdup_head_pk_columns_input}) => dipdup_headObservableChain & {get: <R extends dipdup_headRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head, R> | undefined)) => Observable<(FieldsSelection<dipdup_head, R> | undefined)>}),
    
/** update data of the table: "dipdup_head_status" */
update_dipdup_head_status: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (dipdup_head_status_set_input | null),
/** filter the rows which have to be updated */
where: dipdup_head_status_bool_exp}) => dipdup_head_status_mutation_responseObservableChain & {get: <R extends dipdup_head_status_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_status_mutation_response, R> | undefined)) => Observable<(FieldsSelection<dipdup_head_status_mutation_response, R> | undefined)>}),
    
/** update data of the table: "dipdup_index" */
update_dipdup_index: ((args: {
/** append existing jsonb value of filtered columns with new jsonb value */
_append?: (dipdup_index_append_input | null),
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
_delete_at_path?: (dipdup_index_delete_at_path_input | null),
/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
_delete_elem?: (dipdup_index_delete_elem_input | null),
/** delete key/value pair or string element. key/value pairs are matched based on their key value */
_delete_key?: (dipdup_index_delete_key_input | null),
/** increments the numeric columns with given value of the filtered values */
_inc?: (dipdup_index_inc_input | null),
/** prepend existing jsonb value of filtered columns with new jsonb value */
_prepend?: (dipdup_index_prepend_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (dipdup_index_set_input | null),
/** filter the rows which have to be updated */
where: dipdup_index_bool_exp}) => dipdup_index_mutation_responseObservableChain & {get: <R extends dipdup_index_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_mutation_response, R> | undefined)) => Observable<(FieldsSelection<dipdup_index_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "dipdup_index" */
update_dipdup_index_by_pk: ((args: {
/** append existing jsonb value of filtered columns with new jsonb value */
_append?: (dipdup_index_append_input | null),
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
_delete_at_path?: (dipdup_index_delete_at_path_input | null),
/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
_delete_elem?: (dipdup_index_delete_elem_input | null),
/** delete key/value pair or string element. key/value pairs are matched based on their key value */
_delete_key?: (dipdup_index_delete_key_input | null),
/** increments the numeric columns with given value of the filtered values */
_inc?: (dipdup_index_inc_input | null),
/** prepend existing jsonb value of filtered columns with new jsonb value */
_prepend?: (dipdup_index_prepend_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (dipdup_index_set_input | null),pk_columns: dipdup_index_pk_columns_input}) => dipdup_indexObservableChain & {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index, R> | undefined)) => Observable<(FieldsSelection<dipdup_index, R> | undefined)>}),
    
/** update data of the table: "dipdup_schema" */
update_dipdup_schema: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (dipdup_schema_set_input | null),
/** filter the rows which have to be updated */
where: dipdup_schema_bool_exp}) => dipdup_schema_mutation_responseObservableChain & {get: <R extends dipdup_schema_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema_mutation_response, R> | undefined)) => Observable<(FieldsSelection<dipdup_schema_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "dipdup_schema" */
update_dipdup_schema_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (dipdup_schema_set_input | null),pk_columns: dipdup_schema_pk_columns_input}) => dipdup_schemaObservableChain & {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema, R> | undefined)) => Observable<(FieldsSelection<dipdup_schema, R> | undefined)>}),
    
/** update data of the table: "dipdup_token_metadata" */
update_dipdup_token_metadata: ((args: {
/** append existing jsonb value of filtered columns with new jsonb value */
_append?: (dipdup_token_metadata_append_input | null),
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
_delete_at_path?: (dipdup_token_metadata_delete_at_path_input | null),
/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
_delete_elem?: (dipdup_token_metadata_delete_elem_input | null),
/** delete key/value pair or string element. key/value pairs are matched based on their key value */
_delete_key?: (dipdup_token_metadata_delete_key_input | null),
/** increments the numeric columns with given value of the filtered values */
_inc?: (dipdup_token_metadata_inc_input | null),
/** prepend existing jsonb value of filtered columns with new jsonb value */
_prepend?: (dipdup_token_metadata_prepend_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (dipdup_token_metadata_set_input | null),
/** filter the rows which have to be updated */
where: dipdup_token_metadata_bool_exp}) => dipdup_token_metadata_mutation_responseObservableChain & {get: <R extends dipdup_token_metadata_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata_mutation_response, R> | undefined)) => Observable<(FieldsSelection<dipdup_token_metadata_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "dipdup_token_metadata" */
update_dipdup_token_metadata_by_pk: ((args: {
/** append existing jsonb value of filtered columns with new jsonb value */
_append?: (dipdup_token_metadata_append_input | null),
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
_delete_at_path?: (dipdup_token_metadata_delete_at_path_input | null),
/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
_delete_elem?: (dipdup_token_metadata_delete_elem_input | null),
/** delete key/value pair or string element. key/value pairs are matched based on their key value */
_delete_key?: (dipdup_token_metadata_delete_key_input | null),
/** increments the numeric columns with given value of the filtered values */
_inc?: (dipdup_token_metadata_inc_input | null),
/** prepend existing jsonb value of filtered columns with new jsonb value */
_prepend?: (dipdup_token_metadata_prepend_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (dipdup_token_metadata_set_input | null),pk_columns: dipdup_token_metadata_pk_columns_input}) => dipdup_token_metadataObservableChain & {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata, R> | undefined)) => Observable<(FieldsSelection<dipdup_token_metadata, R> | undefined)>}),
    
/** update data of the table: "ipfs" */
update_ipfs: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (ipfs_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (ipfs_set_input | null),
/** filter the rows which have to be updated */
where: ipfs_bool_exp}) => ipfs_mutation_responseObservableChain & {get: <R extends ipfs_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<ipfs_mutation_response, R> | undefined)) => Observable<(FieldsSelection<ipfs_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "ipfs" */
update_ipfs_by_pk: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (ipfs_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (ipfs_set_input | null),pk_columns: ipfs_pk_columns_input}) => ipfsObservableChain & {get: <R extends ipfsRequest>(request: R, defaultValue?: (FieldsSelection<ipfs, R> | undefined)) => Observable<(FieldsSelection<ipfs, R> | undefined)>}),
    
/** update data of the table: "listing" */
update_listing: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (listing_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (listing_set_input | null),
/** filter the rows which have to be updated */
where: listing_bool_exp}) => listing_mutation_responseObservableChain & {get: <R extends listing_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<listing_mutation_response, R> | undefined)) => Observable<(FieldsSelection<listing_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "listing" */
update_listing_by_pk: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (listing_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (listing_set_input | null),pk_columns: listing_pk_columns_input}) => listingObservableChain & {get: <R extends listingRequest>(request: R, defaultValue?: (FieldsSelection<listing, R> | undefined)) => Observable<(FieldsSelection<listing, R> | undefined)>}),
    
/** update data of the table: "loan" */
update_loan: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (loan_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (loan_set_input | null),
/** filter the rows which have to be updated */
where: loan_bool_exp}) => loan_mutation_responseObservableChain & {get: <R extends loan_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<loan_mutation_response, R> | undefined)) => Observable<(FieldsSelection<loan_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "loan" */
update_loan_by_pk: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (loan_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (loan_set_input | null),pk_columns: loan_pk_columns_input}) => loanObservableChain & {get: <R extends loanRequest>(request: R, defaultValue?: (FieldsSelection<loan, R> | undefined)) => Observable<(FieldsSelection<loan, R> | undefined)>}),
    
/** update data of the table: "offer" */
update_offer: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (offer_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (offer_set_input | null),
/** filter the rows which have to be updated */
where: offer_bool_exp}) => offer_mutation_responseObservableChain & {get: <R extends offer_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<offer_mutation_response, R> | undefined)) => Observable<(FieldsSelection<offer_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "offer" */
update_offer_by_pk: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (offer_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (offer_set_input | null),pk_columns: offer_pk_columns_input}) => offerObservableChain & {get: <R extends offerRequest>(request: R, defaultValue?: (FieldsSelection<offer, R> | undefined)) => Observable<(FieldsSelection<offer, R> | undefined)>}),
    
/** update data of the table: "token" */
update_token: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (token_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (token_set_input | null),
/** filter the rows which have to be updated */
where: token_bool_exp}) => token_mutation_responseObservableChain & {get: <R extends token_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<token_mutation_response, R> | undefined)) => Observable<(FieldsSelection<token_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "token" */
update_token_by_pk: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (token_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (token_set_input | null),pk_columns: token_pk_columns_input}) => tokenObservableChain & {get: <R extends tokenRequest>(request: R, defaultValue?: (FieldsSelection<token, R> | undefined)) => Observable<(FieldsSelection<token, R> | undefined)>})
}


/** columns and relationships of "offer" */
export interface offerPromiseChain{
    accepted: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    cancelled: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    creator: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    duration: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    interest: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** An object relationship */
listing: (listingPromiseChain & {get: <R extends listingRequest>(request: R, defaultValue?: FieldsSelection<listing, R>) => Promise<FieldsSelection<listing, R>>}),
    listing_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}


/** columns and relationships of "offer" */
export interface offerObservableChain{
    accepted: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    cancelled: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    creator: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    duration: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    interest: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** An object relationship */
listing: (listingObservableChain & {get: <R extends listingRequest>(request: R, defaultValue?: FieldsSelection<listing, R>) => Observable<FieldsSelection<listing, R>>}),
    listing_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}


/** aggregated selection of "offer" */
export interface offer_aggregatePromiseChain{
    aggregate: (offer_aggregate_fieldsPromiseChain & {get: <R extends offer_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<offer_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<offer_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends offerRequest>(request: R, defaultValue?: FieldsSelection<offer, R>[]) => Promise<FieldsSelection<offer, R>[]>})
}


/** aggregated selection of "offer" */
export interface offer_aggregateObservableChain{
    aggregate: (offer_aggregate_fieldsObservableChain & {get: <R extends offer_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<offer_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<offer_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends offerRequest>(request: R, defaultValue?: FieldsSelection<offer, R>[]) => Observable<FieldsSelection<offer, R>[]>})
}


/** aggregate fields of "offer" */
export interface offer_aggregate_fieldsPromiseChain{
    avg: (offer_avg_fieldsPromiseChain & {get: <R extends offer_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<offer_avg_fields, R> | undefined)) => Promise<(FieldsSelection<offer_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (offer_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (offer_max_fieldsPromiseChain & {get: <R extends offer_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<offer_max_fields, R> | undefined)) => Promise<(FieldsSelection<offer_max_fields, R> | undefined)>}),
    min: (offer_min_fieldsPromiseChain & {get: <R extends offer_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<offer_min_fields, R> | undefined)) => Promise<(FieldsSelection<offer_min_fields, R> | undefined)>}),
    stddev: (offer_stddev_fieldsPromiseChain & {get: <R extends offer_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<offer_stddev_fields, R> | undefined)) => Promise<(FieldsSelection<offer_stddev_fields, R> | undefined)>}),
    stddev_pop: (offer_stddev_pop_fieldsPromiseChain & {get: <R extends offer_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<offer_stddev_pop_fields, R> | undefined)) => Promise<(FieldsSelection<offer_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (offer_stddev_samp_fieldsPromiseChain & {get: <R extends offer_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<offer_stddev_samp_fields, R> | undefined)) => Promise<(FieldsSelection<offer_stddev_samp_fields, R> | undefined)>}),
    sum: (offer_sum_fieldsPromiseChain & {get: <R extends offer_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<offer_sum_fields, R> | undefined)) => Promise<(FieldsSelection<offer_sum_fields, R> | undefined)>}),
    var_pop: (offer_var_pop_fieldsPromiseChain & {get: <R extends offer_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<offer_var_pop_fields, R> | undefined)) => Promise<(FieldsSelection<offer_var_pop_fields, R> | undefined)>}),
    var_samp: (offer_var_samp_fieldsPromiseChain & {get: <R extends offer_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<offer_var_samp_fields, R> | undefined)) => Promise<(FieldsSelection<offer_var_samp_fields, R> | undefined)>}),
    variance: (offer_variance_fieldsPromiseChain & {get: <R extends offer_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<offer_variance_fields, R> | undefined)) => Promise<(FieldsSelection<offer_variance_fields, R> | undefined)>})
}


/** aggregate fields of "offer" */
export interface offer_aggregate_fieldsObservableChain{
    avg: (offer_avg_fieldsObservableChain & {get: <R extends offer_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<offer_avg_fields, R> | undefined)) => Observable<(FieldsSelection<offer_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (offer_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (offer_max_fieldsObservableChain & {get: <R extends offer_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<offer_max_fields, R> | undefined)) => Observable<(FieldsSelection<offer_max_fields, R> | undefined)>}),
    min: (offer_min_fieldsObservableChain & {get: <R extends offer_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<offer_min_fields, R> | undefined)) => Observable<(FieldsSelection<offer_min_fields, R> | undefined)>}),
    stddev: (offer_stddev_fieldsObservableChain & {get: <R extends offer_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<offer_stddev_fields, R> | undefined)) => Observable<(FieldsSelection<offer_stddev_fields, R> | undefined)>}),
    stddev_pop: (offer_stddev_pop_fieldsObservableChain & {get: <R extends offer_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<offer_stddev_pop_fields, R> | undefined)) => Observable<(FieldsSelection<offer_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (offer_stddev_samp_fieldsObservableChain & {get: <R extends offer_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<offer_stddev_samp_fields, R> | undefined)) => Observable<(FieldsSelection<offer_stddev_samp_fields, R> | undefined)>}),
    sum: (offer_sum_fieldsObservableChain & {get: <R extends offer_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<offer_sum_fields, R> | undefined)) => Observable<(FieldsSelection<offer_sum_fields, R> | undefined)>}),
    var_pop: (offer_var_pop_fieldsObservableChain & {get: <R extends offer_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<offer_var_pop_fields, R> | undefined)) => Observable<(FieldsSelection<offer_var_pop_fields, R> | undefined)>}),
    var_samp: (offer_var_samp_fieldsObservableChain & {get: <R extends offer_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<offer_var_samp_fields, R> | undefined)) => Observable<(FieldsSelection<offer_var_samp_fields, R> | undefined)>}),
    variance: (offer_variance_fieldsObservableChain & {get: <R extends offer_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<offer_variance_fields, R> | undefined)) => Observable<(FieldsSelection<offer_variance_fields, R> | undefined)>})
}


/** aggregate avg on columns */
export interface offer_avg_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    listing_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate avg on columns */
export interface offer_avg_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    listing_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate max on columns */
export interface offer_max_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    creator: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    listing_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** aggregate max on columns */
export interface offer_max_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    creator: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    listing_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** aggregate min on columns */
export interface offer_min_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    creator: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    listing_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** aggregate min on columns */
export interface offer_min_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    creator: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    listing_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** response of any mutation on the table "offer" */
export interface offer_mutation_responsePromiseChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends offerRequest>(request: R, defaultValue?: FieldsSelection<offer, R>[]) => Promise<FieldsSelection<offer, R>[]>})
}


/** response of any mutation on the table "offer" */
export interface offer_mutation_responseObservableChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends offerRequest>(request: R, defaultValue?: FieldsSelection<offer, R>[]) => Observable<FieldsSelection<offer, R>[]>})
}


/** aggregate stddev on columns */
export interface offer_stddev_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    listing_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev on columns */
export interface offer_stddev_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    listing_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface offer_stddev_pop_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    listing_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface offer_stddev_pop_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    listing_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface offer_stddev_samp_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    listing_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface offer_stddev_samp_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    listing_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate sum on columns */
export interface offer_sum_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    listing_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** aggregate sum on columns */
export interface offer_sum_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    listing_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface offer_var_pop_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    listing_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface offer_var_pop_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    listing_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface offer_var_samp_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    listing_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface offer_var_samp_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    listing_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface offer_variance_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    listing_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface offer_variance_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    interest: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    listing_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}

export interface query_rootPromiseChain{
    
/** fetch data from the table: "dipdup_contract" */
dipdup_contract: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_bool_exp | null)}) => {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Promise<FieldsSelection<dipdup_contract, R>[]>})&({get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Promise<FieldsSelection<dipdup_contract, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_contract" */
dipdup_contract_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_bool_exp | null)}) => dipdup_contract_aggregatePromiseChain & {get: <R extends dipdup_contract_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_aggregate, R>) => Promise<FieldsSelection<dipdup_contract_aggregate, R>>})&(dipdup_contract_aggregatePromiseChain & {get: <R extends dipdup_contract_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_aggregate, R>) => Promise<FieldsSelection<dipdup_contract_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_contract" using primary key columns */
dipdup_contract_by_pk: ((args: {name: Scalars['String']}) => dipdup_contractPromiseChain & {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_contract_metadata" */
dipdup_contract_metadata: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_metadata_bool_exp | null)}) => {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata, R>[]) => Promise<FieldsSelection<dipdup_contract_metadata, R>[]>})&({get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata, R>[]) => Promise<FieldsSelection<dipdup_contract_metadata, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_contract_metadata" */
dipdup_contract_metadata_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_metadata_bool_exp | null)}) => dipdup_contract_metadata_aggregatePromiseChain & {get: <R extends dipdup_contract_metadata_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata_aggregate, R>) => Promise<FieldsSelection<dipdup_contract_metadata_aggregate, R>>})&(dipdup_contract_metadata_aggregatePromiseChain & {get: <R extends dipdup_contract_metadata_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata_aggregate, R>) => Promise<FieldsSelection<dipdup_contract_metadata_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_contract_metadata" using primary key columns */
dipdup_contract_metadata_by_pk: ((args: {id: Scalars['Int']}) => dipdup_contract_metadataPromiseChain & {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract_metadata, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_head" */
dipdup_head: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_bool_exp | null)}) => {get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Promise<FieldsSelection<dipdup_head, R>[]>})&({get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Promise<FieldsSelection<dipdup_head, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_head" */
dipdup_head_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_bool_exp | null)}) => dipdup_head_aggregatePromiseChain & {get: <R extends dipdup_head_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_aggregate, R>) => Promise<FieldsSelection<dipdup_head_aggregate, R>>})&(dipdup_head_aggregatePromiseChain & {get: <R extends dipdup_head_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_aggregate, R>) => Promise<FieldsSelection<dipdup_head_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_head" using primary key columns */
dipdup_head_by_pk: ((args: {name: Scalars['String']}) => dipdup_headPromiseChain & {get: <R extends dipdup_headRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head, R> | undefined)) => Promise<(FieldsSelection<dipdup_head, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_head_status" */
dipdup_head_status: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_status_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_status_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_status_bool_exp | null)}) => {get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status, R>[]) => Promise<FieldsSelection<dipdup_head_status, R>[]>})&({get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status, R>[]) => Promise<FieldsSelection<dipdup_head_status, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_head_status" */
dipdup_head_status_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_status_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_status_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_status_bool_exp | null)}) => dipdup_head_status_aggregatePromiseChain & {get: <R extends dipdup_head_status_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status_aggregate, R>) => Promise<FieldsSelection<dipdup_head_status_aggregate, R>>})&(dipdup_head_status_aggregatePromiseChain & {get: <R extends dipdup_head_status_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status_aggregate, R>) => Promise<FieldsSelection<dipdup_head_status_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_index" */
dipdup_index: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_index_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_index_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_index_bool_exp | null)}) => {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Promise<FieldsSelection<dipdup_index, R>[]>})&({get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Promise<FieldsSelection<dipdup_index, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_index" */
dipdup_index_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_index_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_index_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_index_bool_exp | null)}) => dipdup_index_aggregatePromiseChain & {get: <R extends dipdup_index_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index_aggregate, R>) => Promise<FieldsSelection<dipdup_index_aggregate, R>>})&(dipdup_index_aggregatePromiseChain & {get: <R extends dipdup_index_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index_aggregate, R>) => Promise<FieldsSelection<dipdup_index_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_index" using primary key columns */
dipdup_index_by_pk: ((args: {name: Scalars['String']}) => dipdup_indexPromiseChain & {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index, R> | undefined)) => Promise<(FieldsSelection<dipdup_index, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_schema" */
dipdup_schema: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_schema_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_schema_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_schema_bool_exp | null)}) => {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Promise<FieldsSelection<dipdup_schema, R>[]>})&({get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Promise<FieldsSelection<dipdup_schema, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_schema" */
dipdup_schema_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_schema_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_schema_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_schema_bool_exp | null)}) => dipdup_schema_aggregatePromiseChain & {get: <R extends dipdup_schema_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema_aggregate, R>) => Promise<FieldsSelection<dipdup_schema_aggregate, R>>})&(dipdup_schema_aggregatePromiseChain & {get: <R extends dipdup_schema_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema_aggregate, R>) => Promise<FieldsSelection<dipdup_schema_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_schema" using primary key columns */
dipdup_schema_by_pk: ((args: {name: Scalars['String']}) => dipdup_schemaPromiseChain & {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema, R> | undefined)) => Promise<(FieldsSelection<dipdup_schema, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_token_metadata" */
dipdup_token_metadata: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_token_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_token_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_token_metadata_bool_exp | null)}) => {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata, R>[]) => Promise<FieldsSelection<dipdup_token_metadata, R>[]>})&({get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata, R>[]) => Promise<FieldsSelection<dipdup_token_metadata, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_token_metadata" */
dipdup_token_metadata_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_token_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_token_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_token_metadata_bool_exp | null)}) => dipdup_token_metadata_aggregatePromiseChain & {get: <R extends dipdup_token_metadata_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata_aggregate, R>) => Promise<FieldsSelection<dipdup_token_metadata_aggregate, R>>})&(dipdup_token_metadata_aggregatePromiseChain & {get: <R extends dipdup_token_metadata_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata_aggregate, R>) => Promise<FieldsSelection<dipdup_token_metadata_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_token_metadata" using primary key columns */
dipdup_token_metadata_by_pk: ((args: {id: Scalars['Int']}) => dipdup_token_metadataPromiseChain & {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata, R> | undefined)) => Promise<(FieldsSelection<dipdup_token_metadata, R> | undefined)>}),
    
/** fetch data from the table: "ipfs" */
ipfs: ((args?: {
/** distinct select on columns */
distinct_on?: (ipfs_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ipfs_order_by[] | null),
/** filter the rows returned */
where?: (ipfs_bool_exp | null)}) => {get: <R extends ipfsRequest>(request: R, defaultValue?: FieldsSelection<ipfs, R>[]) => Promise<FieldsSelection<ipfs, R>[]>})&({get: <R extends ipfsRequest>(request: R, defaultValue?: FieldsSelection<ipfs, R>[]) => Promise<FieldsSelection<ipfs, R>[]>}),
    
/** fetch aggregated fields from the table: "ipfs" */
ipfs_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (ipfs_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ipfs_order_by[] | null),
/** filter the rows returned */
where?: (ipfs_bool_exp | null)}) => ipfs_aggregatePromiseChain & {get: <R extends ipfs_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ipfs_aggregate, R>) => Promise<FieldsSelection<ipfs_aggregate, R>>})&(ipfs_aggregatePromiseChain & {get: <R extends ipfs_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ipfs_aggregate, R>) => Promise<FieldsSelection<ipfs_aggregate, R>>}),
    
/** fetch data from the table: "ipfs" using primary key columns */
ipfs_by_pk: ((args: {id: Scalars['Int']}) => ipfsPromiseChain & {get: <R extends ipfsRequest>(request: R, defaultValue?: (FieldsSelection<ipfs, R> | undefined)) => Promise<(FieldsSelection<ipfs, R> | undefined)>}),
    
/** An array relationship */
listing: ((args?: {
/** distinct select on columns */
distinct_on?: (listing_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (listing_order_by[] | null),
/** filter the rows returned */
where?: (listing_bool_exp | null)}) => {get: <R extends listingRequest>(request: R, defaultValue?: FieldsSelection<listing, R>[]) => Promise<FieldsSelection<listing, R>[]>})&({get: <R extends listingRequest>(request: R, defaultValue?: FieldsSelection<listing, R>[]) => Promise<FieldsSelection<listing, R>[]>}),
    
/** An aggregate relationship */
listing_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (listing_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (listing_order_by[] | null),
/** filter the rows returned */
where?: (listing_bool_exp | null)}) => listing_aggregatePromiseChain & {get: <R extends listing_aggregateRequest>(request: R, defaultValue?: FieldsSelection<listing_aggregate, R>) => Promise<FieldsSelection<listing_aggregate, R>>})&(listing_aggregatePromiseChain & {get: <R extends listing_aggregateRequest>(request: R, defaultValue?: FieldsSelection<listing_aggregate, R>) => Promise<FieldsSelection<listing_aggregate, R>>}),
    
/** fetch data from the table: "listing" using primary key columns */
listing_by_pk: ((args: {id: Scalars['Int']}) => listingPromiseChain & {get: <R extends listingRequest>(request: R, defaultValue?: (FieldsSelection<listing, R> | undefined)) => Promise<(FieldsSelection<listing, R> | undefined)>}),
    
/** An array relationship */
loan: ((args?: {
/** distinct select on columns */
distinct_on?: (loan_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (loan_order_by[] | null),
/** filter the rows returned */
where?: (loan_bool_exp | null)}) => {get: <R extends loanRequest>(request: R, defaultValue?: FieldsSelection<loan, R>[]) => Promise<FieldsSelection<loan, R>[]>})&({get: <R extends loanRequest>(request: R, defaultValue?: FieldsSelection<loan, R>[]) => Promise<FieldsSelection<loan, R>[]>}),
    
/** An aggregate relationship */
loan_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (loan_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (loan_order_by[] | null),
/** filter the rows returned */
where?: (loan_bool_exp | null)}) => loan_aggregatePromiseChain & {get: <R extends loan_aggregateRequest>(request: R, defaultValue?: FieldsSelection<loan_aggregate, R>) => Promise<FieldsSelection<loan_aggregate, R>>})&(loan_aggregatePromiseChain & {get: <R extends loan_aggregateRequest>(request: R, defaultValue?: FieldsSelection<loan_aggregate, R>) => Promise<FieldsSelection<loan_aggregate, R>>}),
    
/** fetch data from the table: "loan" using primary key columns */
loan_by_pk: ((args: {id: Scalars['Int']}) => loanPromiseChain & {get: <R extends loanRequest>(request: R, defaultValue?: (FieldsSelection<loan, R> | undefined)) => Promise<(FieldsSelection<loan, R> | undefined)>}),
    
/** fetch data from the table: "offer" */
offer: ((args?: {
/** distinct select on columns */
distinct_on?: (offer_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (offer_order_by[] | null),
/** filter the rows returned */
where?: (offer_bool_exp | null)}) => {get: <R extends offerRequest>(request: R, defaultValue?: FieldsSelection<offer, R>[]) => Promise<FieldsSelection<offer, R>[]>})&({get: <R extends offerRequest>(request: R, defaultValue?: FieldsSelection<offer, R>[]) => Promise<FieldsSelection<offer, R>[]>}),
    
/** fetch aggregated fields from the table: "offer" */
offer_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (offer_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (offer_order_by[] | null),
/** filter the rows returned */
where?: (offer_bool_exp | null)}) => offer_aggregatePromiseChain & {get: <R extends offer_aggregateRequest>(request: R, defaultValue?: FieldsSelection<offer_aggregate, R>) => Promise<FieldsSelection<offer_aggregate, R>>})&(offer_aggregatePromiseChain & {get: <R extends offer_aggregateRequest>(request: R, defaultValue?: FieldsSelection<offer_aggregate, R>) => Promise<FieldsSelection<offer_aggregate, R>>}),
    
/** fetch data from the table: "offer" using primary key columns */
offer_by_pk: ((args: {id: Scalars['Int']}) => offerPromiseChain & {get: <R extends offerRequest>(request: R, defaultValue?: (FieldsSelection<offer, R> | undefined)) => Promise<(FieldsSelection<offer, R> | undefined)>}),
    
/** An array relationship */
token: ((args?: {
/** distinct select on columns */
distinct_on?: (token_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (token_order_by[] | null),
/** filter the rows returned */
where?: (token_bool_exp | null)}) => {get: <R extends tokenRequest>(request: R, defaultValue?: FieldsSelection<token, R>[]) => Promise<FieldsSelection<token, R>[]>})&({get: <R extends tokenRequest>(request: R, defaultValue?: FieldsSelection<token, R>[]) => Promise<FieldsSelection<token, R>[]>}),
    
/** An aggregate relationship */
token_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (token_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (token_order_by[] | null),
/** filter the rows returned */
where?: (token_bool_exp | null)}) => token_aggregatePromiseChain & {get: <R extends token_aggregateRequest>(request: R, defaultValue?: FieldsSelection<token_aggregate, R>) => Promise<FieldsSelection<token_aggregate, R>>})&(token_aggregatePromiseChain & {get: <R extends token_aggregateRequest>(request: R, defaultValue?: FieldsSelection<token_aggregate, R>) => Promise<FieldsSelection<token_aggregate, R>>}),
    
/** fetch data from the table: "token" using primary key columns */
token_by_pk: ((args: {id: Scalars['Int']}) => tokenPromiseChain & {get: <R extends tokenRequest>(request: R, defaultValue?: (FieldsSelection<token, R> | undefined)) => Promise<(FieldsSelection<token, R> | undefined)>})
}

export interface query_rootObservableChain{
    
/** fetch data from the table: "dipdup_contract" */
dipdup_contract: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_bool_exp | null)}) => {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Observable<FieldsSelection<dipdup_contract, R>[]>})&({get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Observable<FieldsSelection<dipdup_contract, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_contract" */
dipdup_contract_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_bool_exp | null)}) => dipdup_contract_aggregateObservableChain & {get: <R extends dipdup_contract_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_aggregate, R>) => Observable<FieldsSelection<dipdup_contract_aggregate, R>>})&(dipdup_contract_aggregateObservableChain & {get: <R extends dipdup_contract_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_aggregate, R>) => Observable<FieldsSelection<dipdup_contract_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_contract" using primary key columns */
dipdup_contract_by_pk: ((args: {name: Scalars['String']}) => dipdup_contractObservableChain & {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_contract_metadata" */
dipdup_contract_metadata: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_metadata_bool_exp | null)}) => {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata, R>[]) => Observable<FieldsSelection<dipdup_contract_metadata, R>[]>})&({get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata, R>[]) => Observable<FieldsSelection<dipdup_contract_metadata, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_contract_metadata" */
dipdup_contract_metadata_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_metadata_bool_exp | null)}) => dipdup_contract_metadata_aggregateObservableChain & {get: <R extends dipdup_contract_metadata_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata_aggregate, R>) => Observable<FieldsSelection<dipdup_contract_metadata_aggregate, R>>})&(dipdup_contract_metadata_aggregateObservableChain & {get: <R extends dipdup_contract_metadata_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata_aggregate, R>) => Observable<FieldsSelection<dipdup_contract_metadata_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_contract_metadata" using primary key columns */
dipdup_contract_metadata_by_pk: ((args: {id: Scalars['Int']}) => dipdup_contract_metadataObservableChain & {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract_metadata, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_head" */
dipdup_head: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_bool_exp | null)}) => {get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Observable<FieldsSelection<dipdup_head, R>[]>})&({get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Observable<FieldsSelection<dipdup_head, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_head" */
dipdup_head_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_bool_exp | null)}) => dipdup_head_aggregateObservableChain & {get: <R extends dipdup_head_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_aggregate, R>) => Observable<FieldsSelection<dipdup_head_aggregate, R>>})&(dipdup_head_aggregateObservableChain & {get: <R extends dipdup_head_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_aggregate, R>) => Observable<FieldsSelection<dipdup_head_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_head" using primary key columns */
dipdup_head_by_pk: ((args: {name: Scalars['String']}) => dipdup_headObservableChain & {get: <R extends dipdup_headRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head, R> | undefined)) => Observable<(FieldsSelection<dipdup_head, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_head_status" */
dipdup_head_status: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_status_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_status_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_status_bool_exp | null)}) => {get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status, R>[]) => Observable<FieldsSelection<dipdup_head_status, R>[]>})&({get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status, R>[]) => Observable<FieldsSelection<dipdup_head_status, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_head_status" */
dipdup_head_status_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_status_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_status_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_status_bool_exp | null)}) => dipdup_head_status_aggregateObservableChain & {get: <R extends dipdup_head_status_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status_aggregate, R>) => Observable<FieldsSelection<dipdup_head_status_aggregate, R>>})&(dipdup_head_status_aggregateObservableChain & {get: <R extends dipdup_head_status_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status_aggregate, R>) => Observable<FieldsSelection<dipdup_head_status_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_index" */
dipdup_index: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_index_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_index_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_index_bool_exp | null)}) => {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Observable<FieldsSelection<dipdup_index, R>[]>})&({get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Observable<FieldsSelection<dipdup_index, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_index" */
dipdup_index_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_index_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_index_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_index_bool_exp | null)}) => dipdup_index_aggregateObservableChain & {get: <R extends dipdup_index_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index_aggregate, R>) => Observable<FieldsSelection<dipdup_index_aggregate, R>>})&(dipdup_index_aggregateObservableChain & {get: <R extends dipdup_index_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index_aggregate, R>) => Observable<FieldsSelection<dipdup_index_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_index" using primary key columns */
dipdup_index_by_pk: ((args: {name: Scalars['String']}) => dipdup_indexObservableChain & {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index, R> | undefined)) => Observable<(FieldsSelection<dipdup_index, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_schema" */
dipdup_schema: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_schema_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_schema_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_schema_bool_exp | null)}) => {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Observable<FieldsSelection<dipdup_schema, R>[]>})&({get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Observable<FieldsSelection<dipdup_schema, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_schema" */
dipdup_schema_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_schema_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_schema_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_schema_bool_exp | null)}) => dipdup_schema_aggregateObservableChain & {get: <R extends dipdup_schema_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema_aggregate, R>) => Observable<FieldsSelection<dipdup_schema_aggregate, R>>})&(dipdup_schema_aggregateObservableChain & {get: <R extends dipdup_schema_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema_aggregate, R>) => Observable<FieldsSelection<dipdup_schema_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_schema" using primary key columns */
dipdup_schema_by_pk: ((args: {name: Scalars['String']}) => dipdup_schemaObservableChain & {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema, R> | undefined)) => Observable<(FieldsSelection<dipdup_schema, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_token_metadata" */
dipdup_token_metadata: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_token_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_token_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_token_metadata_bool_exp | null)}) => {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata, R>[]) => Observable<FieldsSelection<dipdup_token_metadata, R>[]>})&({get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata, R>[]) => Observable<FieldsSelection<dipdup_token_metadata, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_token_metadata" */
dipdup_token_metadata_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_token_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_token_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_token_metadata_bool_exp | null)}) => dipdup_token_metadata_aggregateObservableChain & {get: <R extends dipdup_token_metadata_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata_aggregate, R>) => Observable<FieldsSelection<dipdup_token_metadata_aggregate, R>>})&(dipdup_token_metadata_aggregateObservableChain & {get: <R extends dipdup_token_metadata_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata_aggregate, R>) => Observable<FieldsSelection<dipdup_token_metadata_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_token_metadata" using primary key columns */
dipdup_token_metadata_by_pk: ((args: {id: Scalars['Int']}) => dipdup_token_metadataObservableChain & {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata, R> | undefined)) => Observable<(FieldsSelection<dipdup_token_metadata, R> | undefined)>}),
    
/** fetch data from the table: "ipfs" */
ipfs: ((args?: {
/** distinct select on columns */
distinct_on?: (ipfs_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ipfs_order_by[] | null),
/** filter the rows returned */
where?: (ipfs_bool_exp | null)}) => {get: <R extends ipfsRequest>(request: R, defaultValue?: FieldsSelection<ipfs, R>[]) => Observable<FieldsSelection<ipfs, R>[]>})&({get: <R extends ipfsRequest>(request: R, defaultValue?: FieldsSelection<ipfs, R>[]) => Observable<FieldsSelection<ipfs, R>[]>}),
    
/** fetch aggregated fields from the table: "ipfs" */
ipfs_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (ipfs_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ipfs_order_by[] | null),
/** filter the rows returned */
where?: (ipfs_bool_exp | null)}) => ipfs_aggregateObservableChain & {get: <R extends ipfs_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ipfs_aggregate, R>) => Observable<FieldsSelection<ipfs_aggregate, R>>})&(ipfs_aggregateObservableChain & {get: <R extends ipfs_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ipfs_aggregate, R>) => Observable<FieldsSelection<ipfs_aggregate, R>>}),
    
/** fetch data from the table: "ipfs" using primary key columns */
ipfs_by_pk: ((args: {id: Scalars['Int']}) => ipfsObservableChain & {get: <R extends ipfsRequest>(request: R, defaultValue?: (FieldsSelection<ipfs, R> | undefined)) => Observable<(FieldsSelection<ipfs, R> | undefined)>}),
    
/** An array relationship */
listing: ((args?: {
/** distinct select on columns */
distinct_on?: (listing_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (listing_order_by[] | null),
/** filter the rows returned */
where?: (listing_bool_exp | null)}) => {get: <R extends listingRequest>(request: R, defaultValue?: FieldsSelection<listing, R>[]) => Observable<FieldsSelection<listing, R>[]>})&({get: <R extends listingRequest>(request: R, defaultValue?: FieldsSelection<listing, R>[]) => Observable<FieldsSelection<listing, R>[]>}),
    
/** An aggregate relationship */
listing_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (listing_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (listing_order_by[] | null),
/** filter the rows returned */
where?: (listing_bool_exp | null)}) => listing_aggregateObservableChain & {get: <R extends listing_aggregateRequest>(request: R, defaultValue?: FieldsSelection<listing_aggregate, R>) => Observable<FieldsSelection<listing_aggregate, R>>})&(listing_aggregateObservableChain & {get: <R extends listing_aggregateRequest>(request: R, defaultValue?: FieldsSelection<listing_aggregate, R>) => Observable<FieldsSelection<listing_aggregate, R>>}),
    
/** fetch data from the table: "listing" using primary key columns */
listing_by_pk: ((args: {id: Scalars['Int']}) => listingObservableChain & {get: <R extends listingRequest>(request: R, defaultValue?: (FieldsSelection<listing, R> | undefined)) => Observable<(FieldsSelection<listing, R> | undefined)>}),
    
/** An array relationship */
loan: ((args?: {
/** distinct select on columns */
distinct_on?: (loan_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (loan_order_by[] | null),
/** filter the rows returned */
where?: (loan_bool_exp | null)}) => {get: <R extends loanRequest>(request: R, defaultValue?: FieldsSelection<loan, R>[]) => Observable<FieldsSelection<loan, R>[]>})&({get: <R extends loanRequest>(request: R, defaultValue?: FieldsSelection<loan, R>[]) => Observable<FieldsSelection<loan, R>[]>}),
    
/** An aggregate relationship */
loan_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (loan_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (loan_order_by[] | null),
/** filter the rows returned */
where?: (loan_bool_exp | null)}) => loan_aggregateObservableChain & {get: <R extends loan_aggregateRequest>(request: R, defaultValue?: FieldsSelection<loan_aggregate, R>) => Observable<FieldsSelection<loan_aggregate, R>>})&(loan_aggregateObservableChain & {get: <R extends loan_aggregateRequest>(request: R, defaultValue?: FieldsSelection<loan_aggregate, R>) => Observable<FieldsSelection<loan_aggregate, R>>}),
    
/** fetch data from the table: "loan" using primary key columns */
loan_by_pk: ((args: {id: Scalars['Int']}) => loanObservableChain & {get: <R extends loanRequest>(request: R, defaultValue?: (FieldsSelection<loan, R> | undefined)) => Observable<(FieldsSelection<loan, R> | undefined)>}),
    
/** fetch data from the table: "offer" */
offer: ((args?: {
/** distinct select on columns */
distinct_on?: (offer_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (offer_order_by[] | null),
/** filter the rows returned */
where?: (offer_bool_exp | null)}) => {get: <R extends offerRequest>(request: R, defaultValue?: FieldsSelection<offer, R>[]) => Observable<FieldsSelection<offer, R>[]>})&({get: <R extends offerRequest>(request: R, defaultValue?: FieldsSelection<offer, R>[]) => Observable<FieldsSelection<offer, R>[]>}),
    
/** fetch aggregated fields from the table: "offer" */
offer_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (offer_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (offer_order_by[] | null),
/** filter the rows returned */
where?: (offer_bool_exp | null)}) => offer_aggregateObservableChain & {get: <R extends offer_aggregateRequest>(request: R, defaultValue?: FieldsSelection<offer_aggregate, R>) => Observable<FieldsSelection<offer_aggregate, R>>})&(offer_aggregateObservableChain & {get: <R extends offer_aggregateRequest>(request: R, defaultValue?: FieldsSelection<offer_aggregate, R>) => Observable<FieldsSelection<offer_aggregate, R>>}),
    
/** fetch data from the table: "offer" using primary key columns */
offer_by_pk: ((args: {id: Scalars['Int']}) => offerObservableChain & {get: <R extends offerRequest>(request: R, defaultValue?: (FieldsSelection<offer, R> | undefined)) => Observable<(FieldsSelection<offer, R> | undefined)>}),
    
/** An array relationship */
token: ((args?: {
/** distinct select on columns */
distinct_on?: (token_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (token_order_by[] | null),
/** filter the rows returned */
where?: (token_bool_exp | null)}) => {get: <R extends tokenRequest>(request: R, defaultValue?: FieldsSelection<token, R>[]) => Observable<FieldsSelection<token, R>[]>})&({get: <R extends tokenRequest>(request: R, defaultValue?: FieldsSelection<token, R>[]) => Observable<FieldsSelection<token, R>[]>}),
    
/** An aggregate relationship */
token_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (token_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (token_order_by[] | null),
/** filter the rows returned */
where?: (token_bool_exp | null)}) => token_aggregateObservableChain & {get: <R extends token_aggregateRequest>(request: R, defaultValue?: FieldsSelection<token_aggregate, R>) => Observable<FieldsSelection<token_aggregate, R>>})&(token_aggregateObservableChain & {get: <R extends token_aggregateRequest>(request: R, defaultValue?: FieldsSelection<token_aggregate, R>) => Observable<FieldsSelection<token_aggregate, R>>}),
    
/** fetch data from the table: "token" using primary key columns */
token_by_pk: ((args: {id: Scalars['Int']}) => tokenObservableChain & {get: <R extends tokenRequest>(request: R, defaultValue?: (FieldsSelection<token, R> | undefined)) => Observable<(FieldsSelection<token, R> | undefined)>})
}

export interface subscription_rootPromiseChain{
    
/** fetch data from the table: "dipdup_contract" */
dipdup_contract: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_bool_exp | null)}) => {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Promise<FieldsSelection<dipdup_contract, R>[]>})&({get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Promise<FieldsSelection<dipdup_contract, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_contract" */
dipdup_contract_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_bool_exp | null)}) => dipdup_contract_aggregatePromiseChain & {get: <R extends dipdup_contract_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_aggregate, R>) => Promise<FieldsSelection<dipdup_contract_aggregate, R>>})&(dipdup_contract_aggregatePromiseChain & {get: <R extends dipdup_contract_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_aggregate, R>) => Promise<FieldsSelection<dipdup_contract_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_contract" using primary key columns */
dipdup_contract_by_pk: ((args: {name: Scalars['String']}) => dipdup_contractPromiseChain & {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_contract_metadata" */
dipdup_contract_metadata: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_metadata_bool_exp | null)}) => {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata, R>[]) => Promise<FieldsSelection<dipdup_contract_metadata, R>[]>})&({get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata, R>[]) => Promise<FieldsSelection<dipdup_contract_metadata, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_contract_metadata" */
dipdup_contract_metadata_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_metadata_bool_exp | null)}) => dipdup_contract_metadata_aggregatePromiseChain & {get: <R extends dipdup_contract_metadata_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata_aggregate, R>) => Promise<FieldsSelection<dipdup_contract_metadata_aggregate, R>>})&(dipdup_contract_metadata_aggregatePromiseChain & {get: <R extends dipdup_contract_metadata_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata_aggregate, R>) => Promise<FieldsSelection<dipdup_contract_metadata_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_contract_metadata" using primary key columns */
dipdup_contract_metadata_by_pk: ((args: {id: Scalars['Int']}) => dipdup_contract_metadataPromiseChain & {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract_metadata, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_head" */
dipdup_head: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_bool_exp | null)}) => {get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Promise<FieldsSelection<dipdup_head, R>[]>})&({get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Promise<FieldsSelection<dipdup_head, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_head" */
dipdup_head_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_bool_exp | null)}) => dipdup_head_aggregatePromiseChain & {get: <R extends dipdup_head_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_aggregate, R>) => Promise<FieldsSelection<dipdup_head_aggregate, R>>})&(dipdup_head_aggregatePromiseChain & {get: <R extends dipdup_head_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_aggregate, R>) => Promise<FieldsSelection<dipdup_head_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_head" using primary key columns */
dipdup_head_by_pk: ((args: {name: Scalars['String']}) => dipdup_headPromiseChain & {get: <R extends dipdup_headRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head, R> | undefined)) => Promise<(FieldsSelection<dipdup_head, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_head_status" */
dipdup_head_status: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_status_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_status_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_status_bool_exp | null)}) => {get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status, R>[]) => Promise<FieldsSelection<dipdup_head_status, R>[]>})&({get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status, R>[]) => Promise<FieldsSelection<dipdup_head_status, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_head_status" */
dipdup_head_status_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_status_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_status_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_status_bool_exp | null)}) => dipdup_head_status_aggregatePromiseChain & {get: <R extends dipdup_head_status_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status_aggregate, R>) => Promise<FieldsSelection<dipdup_head_status_aggregate, R>>})&(dipdup_head_status_aggregatePromiseChain & {get: <R extends dipdup_head_status_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status_aggregate, R>) => Promise<FieldsSelection<dipdup_head_status_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_index" */
dipdup_index: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_index_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_index_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_index_bool_exp | null)}) => {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Promise<FieldsSelection<dipdup_index, R>[]>})&({get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Promise<FieldsSelection<dipdup_index, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_index" */
dipdup_index_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_index_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_index_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_index_bool_exp | null)}) => dipdup_index_aggregatePromiseChain & {get: <R extends dipdup_index_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index_aggregate, R>) => Promise<FieldsSelection<dipdup_index_aggregate, R>>})&(dipdup_index_aggregatePromiseChain & {get: <R extends dipdup_index_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index_aggregate, R>) => Promise<FieldsSelection<dipdup_index_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_index" using primary key columns */
dipdup_index_by_pk: ((args: {name: Scalars['String']}) => dipdup_indexPromiseChain & {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index, R> | undefined)) => Promise<(FieldsSelection<dipdup_index, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_schema" */
dipdup_schema: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_schema_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_schema_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_schema_bool_exp | null)}) => {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Promise<FieldsSelection<dipdup_schema, R>[]>})&({get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Promise<FieldsSelection<dipdup_schema, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_schema" */
dipdup_schema_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_schema_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_schema_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_schema_bool_exp | null)}) => dipdup_schema_aggregatePromiseChain & {get: <R extends dipdup_schema_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema_aggregate, R>) => Promise<FieldsSelection<dipdup_schema_aggregate, R>>})&(dipdup_schema_aggregatePromiseChain & {get: <R extends dipdup_schema_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema_aggregate, R>) => Promise<FieldsSelection<dipdup_schema_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_schema" using primary key columns */
dipdup_schema_by_pk: ((args: {name: Scalars['String']}) => dipdup_schemaPromiseChain & {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema, R> | undefined)) => Promise<(FieldsSelection<dipdup_schema, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_token_metadata" */
dipdup_token_metadata: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_token_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_token_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_token_metadata_bool_exp | null)}) => {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata, R>[]) => Promise<FieldsSelection<dipdup_token_metadata, R>[]>})&({get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata, R>[]) => Promise<FieldsSelection<dipdup_token_metadata, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_token_metadata" */
dipdup_token_metadata_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_token_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_token_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_token_metadata_bool_exp | null)}) => dipdup_token_metadata_aggregatePromiseChain & {get: <R extends dipdup_token_metadata_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata_aggregate, R>) => Promise<FieldsSelection<dipdup_token_metadata_aggregate, R>>})&(dipdup_token_metadata_aggregatePromiseChain & {get: <R extends dipdup_token_metadata_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata_aggregate, R>) => Promise<FieldsSelection<dipdup_token_metadata_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_token_metadata" using primary key columns */
dipdup_token_metadata_by_pk: ((args: {id: Scalars['Int']}) => dipdup_token_metadataPromiseChain & {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata, R> | undefined)) => Promise<(FieldsSelection<dipdup_token_metadata, R> | undefined)>}),
    
/** fetch data from the table: "ipfs" */
ipfs: ((args?: {
/** distinct select on columns */
distinct_on?: (ipfs_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ipfs_order_by[] | null),
/** filter the rows returned */
where?: (ipfs_bool_exp | null)}) => {get: <R extends ipfsRequest>(request: R, defaultValue?: FieldsSelection<ipfs, R>[]) => Promise<FieldsSelection<ipfs, R>[]>})&({get: <R extends ipfsRequest>(request: R, defaultValue?: FieldsSelection<ipfs, R>[]) => Promise<FieldsSelection<ipfs, R>[]>}),
    
/** fetch aggregated fields from the table: "ipfs" */
ipfs_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (ipfs_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ipfs_order_by[] | null),
/** filter the rows returned */
where?: (ipfs_bool_exp | null)}) => ipfs_aggregatePromiseChain & {get: <R extends ipfs_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ipfs_aggregate, R>) => Promise<FieldsSelection<ipfs_aggregate, R>>})&(ipfs_aggregatePromiseChain & {get: <R extends ipfs_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ipfs_aggregate, R>) => Promise<FieldsSelection<ipfs_aggregate, R>>}),
    
/** fetch data from the table: "ipfs" using primary key columns */
ipfs_by_pk: ((args: {id: Scalars['Int']}) => ipfsPromiseChain & {get: <R extends ipfsRequest>(request: R, defaultValue?: (FieldsSelection<ipfs, R> | undefined)) => Promise<(FieldsSelection<ipfs, R> | undefined)>}),
    
/** An array relationship */
listing: ((args?: {
/** distinct select on columns */
distinct_on?: (listing_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (listing_order_by[] | null),
/** filter the rows returned */
where?: (listing_bool_exp | null)}) => {get: <R extends listingRequest>(request: R, defaultValue?: FieldsSelection<listing, R>[]) => Promise<FieldsSelection<listing, R>[]>})&({get: <R extends listingRequest>(request: R, defaultValue?: FieldsSelection<listing, R>[]) => Promise<FieldsSelection<listing, R>[]>}),
    
/** An aggregate relationship */
listing_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (listing_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (listing_order_by[] | null),
/** filter the rows returned */
where?: (listing_bool_exp | null)}) => listing_aggregatePromiseChain & {get: <R extends listing_aggregateRequest>(request: R, defaultValue?: FieldsSelection<listing_aggregate, R>) => Promise<FieldsSelection<listing_aggregate, R>>})&(listing_aggregatePromiseChain & {get: <R extends listing_aggregateRequest>(request: R, defaultValue?: FieldsSelection<listing_aggregate, R>) => Promise<FieldsSelection<listing_aggregate, R>>}),
    
/** fetch data from the table: "listing" using primary key columns */
listing_by_pk: ((args: {id: Scalars['Int']}) => listingPromiseChain & {get: <R extends listingRequest>(request: R, defaultValue?: (FieldsSelection<listing, R> | undefined)) => Promise<(FieldsSelection<listing, R> | undefined)>}),
    
/** An array relationship */
loan: ((args?: {
/** distinct select on columns */
distinct_on?: (loan_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (loan_order_by[] | null),
/** filter the rows returned */
where?: (loan_bool_exp | null)}) => {get: <R extends loanRequest>(request: R, defaultValue?: FieldsSelection<loan, R>[]) => Promise<FieldsSelection<loan, R>[]>})&({get: <R extends loanRequest>(request: R, defaultValue?: FieldsSelection<loan, R>[]) => Promise<FieldsSelection<loan, R>[]>}),
    
/** An aggregate relationship */
loan_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (loan_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (loan_order_by[] | null),
/** filter the rows returned */
where?: (loan_bool_exp | null)}) => loan_aggregatePromiseChain & {get: <R extends loan_aggregateRequest>(request: R, defaultValue?: FieldsSelection<loan_aggregate, R>) => Promise<FieldsSelection<loan_aggregate, R>>})&(loan_aggregatePromiseChain & {get: <R extends loan_aggregateRequest>(request: R, defaultValue?: FieldsSelection<loan_aggregate, R>) => Promise<FieldsSelection<loan_aggregate, R>>}),
    
/** fetch data from the table: "loan" using primary key columns */
loan_by_pk: ((args: {id: Scalars['Int']}) => loanPromiseChain & {get: <R extends loanRequest>(request: R, defaultValue?: (FieldsSelection<loan, R> | undefined)) => Promise<(FieldsSelection<loan, R> | undefined)>}),
    
/** fetch data from the table: "offer" */
offer: ((args?: {
/** distinct select on columns */
distinct_on?: (offer_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (offer_order_by[] | null),
/** filter the rows returned */
where?: (offer_bool_exp | null)}) => {get: <R extends offerRequest>(request: R, defaultValue?: FieldsSelection<offer, R>[]) => Promise<FieldsSelection<offer, R>[]>})&({get: <R extends offerRequest>(request: R, defaultValue?: FieldsSelection<offer, R>[]) => Promise<FieldsSelection<offer, R>[]>}),
    
/** fetch aggregated fields from the table: "offer" */
offer_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (offer_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (offer_order_by[] | null),
/** filter the rows returned */
where?: (offer_bool_exp | null)}) => offer_aggregatePromiseChain & {get: <R extends offer_aggregateRequest>(request: R, defaultValue?: FieldsSelection<offer_aggregate, R>) => Promise<FieldsSelection<offer_aggregate, R>>})&(offer_aggregatePromiseChain & {get: <R extends offer_aggregateRequest>(request: R, defaultValue?: FieldsSelection<offer_aggregate, R>) => Promise<FieldsSelection<offer_aggregate, R>>}),
    
/** fetch data from the table: "offer" using primary key columns */
offer_by_pk: ((args: {id: Scalars['Int']}) => offerPromiseChain & {get: <R extends offerRequest>(request: R, defaultValue?: (FieldsSelection<offer, R> | undefined)) => Promise<(FieldsSelection<offer, R> | undefined)>}),
    
/** An array relationship */
token: ((args?: {
/** distinct select on columns */
distinct_on?: (token_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (token_order_by[] | null),
/** filter the rows returned */
where?: (token_bool_exp | null)}) => {get: <R extends tokenRequest>(request: R, defaultValue?: FieldsSelection<token, R>[]) => Promise<FieldsSelection<token, R>[]>})&({get: <R extends tokenRequest>(request: R, defaultValue?: FieldsSelection<token, R>[]) => Promise<FieldsSelection<token, R>[]>}),
    
/** An aggregate relationship */
token_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (token_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (token_order_by[] | null),
/** filter the rows returned */
where?: (token_bool_exp | null)}) => token_aggregatePromiseChain & {get: <R extends token_aggregateRequest>(request: R, defaultValue?: FieldsSelection<token_aggregate, R>) => Promise<FieldsSelection<token_aggregate, R>>})&(token_aggregatePromiseChain & {get: <R extends token_aggregateRequest>(request: R, defaultValue?: FieldsSelection<token_aggregate, R>) => Promise<FieldsSelection<token_aggregate, R>>}),
    
/** fetch data from the table: "token" using primary key columns */
token_by_pk: ((args: {id: Scalars['Int']}) => tokenPromiseChain & {get: <R extends tokenRequest>(request: R, defaultValue?: (FieldsSelection<token, R> | undefined)) => Promise<(FieldsSelection<token, R> | undefined)>})
}

export interface subscription_rootObservableChain{
    
/** fetch data from the table: "dipdup_contract" */
dipdup_contract: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_bool_exp | null)}) => {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Observable<FieldsSelection<dipdup_contract, R>[]>})&({get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Observable<FieldsSelection<dipdup_contract, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_contract" */
dipdup_contract_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_bool_exp | null)}) => dipdup_contract_aggregateObservableChain & {get: <R extends dipdup_contract_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_aggregate, R>) => Observable<FieldsSelection<dipdup_contract_aggregate, R>>})&(dipdup_contract_aggregateObservableChain & {get: <R extends dipdup_contract_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_aggregate, R>) => Observable<FieldsSelection<dipdup_contract_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_contract" using primary key columns */
dipdup_contract_by_pk: ((args: {name: Scalars['String']}) => dipdup_contractObservableChain & {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_contract_metadata" */
dipdup_contract_metadata: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_metadata_bool_exp | null)}) => {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata, R>[]) => Observable<FieldsSelection<dipdup_contract_metadata, R>[]>})&({get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata, R>[]) => Observable<FieldsSelection<dipdup_contract_metadata, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_contract_metadata" */
dipdup_contract_metadata_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_metadata_bool_exp | null)}) => dipdup_contract_metadata_aggregateObservableChain & {get: <R extends dipdup_contract_metadata_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata_aggregate, R>) => Observable<FieldsSelection<dipdup_contract_metadata_aggregate, R>>})&(dipdup_contract_metadata_aggregateObservableChain & {get: <R extends dipdup_contract_metadata_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata_aggregate, R>) => Observable<FieldsSelection<dipdup_contract_metadata_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_contract_metadata" using primary key columns */
dipdup_contract_metadata_by_pk: ((args: {id: Scalars['Int']}) => dipdup_contract_metadataObservableChain & {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract_metadata, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_head" */
dipdup_head: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_bool_exp | null)}) => {get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Observable<FieldsSelection<dipdup_head, R>[]>})&({get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Observable<FieldsSelection<dipdup_head, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_head" */
dipdup_head_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_bool_exp | null)}) => dipdup_head_aggregateObservableChain & {get: <R extends dipdup_head_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_aggregate, R>) => Observable<FieldsSelection<dipdup_head_aggregate, R>>})&(dipdup_head_aggregateObservableChain & {get: <R extends dipdup_head_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_aggregate, R>) => Observable<FieldsSelection<dipdup_head_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_head" using primary key columns */
dipdup_head_by_pk: ((args: {name: Scalars['String']}) => dipdup_headObservableChain & {get: <R extends dipdup_headRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head, R> | undefined)) => Observable<(FieldsSelection<dipdup_head, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_head_status" */
dipdup_head_status: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_status_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_status_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_status_bool_exp | null)}) => {get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status, R>[]) => Observable<FieldsSelection<dipdup_head_status, R>[]>})&({get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status, R>[]) => Observable<FieldsSelection<dipdup_head_status, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_head_status" */
dipdup_head_status_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_status_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_status_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_status_bool_exp | null)}) => dipdup_head_status_aggregateObservableChain & {get: <R extends dipdup_head_status_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status_aggregate, R>) => Observable<FieldsSelection<dipdup_head_status_aggregate, R>>})&(dipdup_head_status_aggregateObservableChain & {get: <R extends dipdup_head_status_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status_aggregate, R>) => Observable<FieldsSelection<dipdup_head_status_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_index" */
dipdup_index: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_index_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_index_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_index_bool_exp | null)}) => {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Observable<FieldsSelection<dipdup_index, R>[]>})&({get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Observable<FieldsSelection<dipdup_index, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_index" */
dipdup_index_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_index_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_index_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_index_bool_exp | null)}) => dipdup_index_aggregateObservableChain & {get: <R extends dipdup_index_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index_aggregate, R>) => Observable<FieldsSelection<dipdup_index_aggregate, R>>})&(dipdup_index_aggregateObservableChain & {get: <R extends dipdup_index_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index_aggregate, R>) => Observable<FieldsSelection<dipdup_index_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_index" using primary key columns */
dipdup_index_by_pk: ((args: {name: Scalars['String']}) => dipdup_indexObservableChain & {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index, R> | undefined)) => Observable<(FieldsSelection<dipdup_index, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_schema" */
dipdup_schema: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_schema_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_schema_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_schema_bool_exp | null)}) => {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Observable<FieldsSelection<dipdup_schema, R>[]>})&({get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Observable<FieldsSelection<dipdup_schema, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_schema" */
dipdup_schema_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_schema_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_schema_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_schema_bool_exp | null)}) => dipdup_schema_aggregateObservableChain & {get: <R extends dipdup_schema_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema_aggregate, R>) => Observable<FieldsSelection<dipdup_schema_aggregate, R>>})&(dipdup_schema_aggregateObservableChain & {get: <R extends dipdup_schema_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema_aggregate, R>) => Observable<FieldsSelection<dipdup_schema_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_schema" using primary key columns */
dipdup_schema_by_pk: ((args: {name: Scalars['String']}) => dipdup_schemaObservableChain & {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema, R> | undefined)) => Observable<(FieldsSelection<dipdup_schema, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_token_metadata" */
dipdup_token_metadata: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_token_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_token_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_token_metadata_bool_exp | null)}) => {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata, R>[]) => Observable<FieldsSelection<dipdup_token_metadata, R>[]>})&({get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata, R>[]) => Observable<FieldsSelection<dipdup_token_metadata, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_token_metadata" */
dipdup_token_metadata_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_token_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_token_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_token_metadata_bool_exp | null)}) => dipdup_token_metadata_aggregateObservableChain & {get: <R extends dipdup_token_metadata_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata_aggregate, R>) => Observable<FieldsSelection<dipdup_token_metadata_aggregate, R>>})&(dipdup_token_metadata_aggregateObservableChain & {get: <R extends dipdup_token_metadata_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata_aggregate, R>) => Observable<FieldsSelection<dipdup_token_metadata_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_token_metadata" using primary key columns */
dipdup_token_metadata_by_pk: ((args: {id: Scalars['Int']}) => dipdup_token_metadataObservableChain & {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata, R> | undefined)) => Observable<(FieldsSelection<dipdup_token_metadata, R> | undefined)>}),
    
/** fetch data from the table: "ipfs" */
ipfs: ((args?: {
/** distinct select on columns */
distinct_on?: (ipfs_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ipfs_order_by[] | null),
/** filter the rows returned */
where?: (ipfs_bool_exp | null)}) => {get: <R extends ipfsRequest>(request: R, defaultValue?: FieldsSelection<ipfs, R>[]) => Observable<FieldsSelection<ipfs, R>[]>})&({get: <R extends ipfsRequest>(request: R, defaultValue?: FieldsSelection<ipfs, R>[]) => Observable<FieldsSelection<ipfs, R>[]>}),
    
/** fetch aggregated fields from the table: "ipfs" */
ipfs_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (ipfs_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ipfs_order_by[] | null),
/** filter the rows returned */
where?: (ipfs_bool_exp | null)}) => ipfs_aggregateObservableChain & {get: <R extends ipfs_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ipfs_aggregate, R>) => Observable<FieldsSelection<ipfs_aggregate, R>>})&(ipfs_aggregateObservableChain & {get: <R extends ipfs_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ipfs_aggregate, R>) => Observable<FieldsSelection<ipfs_aggregate, R>>}),
    
/** fetch data from the table: "ipfs" using primary key columns */
ipfs_by_pk: ((args: {id: Scalars['Int']}) => ipfsObservableChain & {get: <R extends ipfsRequest>(request: R, defaultValue?: (FieldsSelection<ipfs, R> | undefined)) => Observable<(FieldsSelection<ipfs, R> | undefined)>}),
    
/** An array relationship */
listing: ((args?: {
/** distinct select on columns */
distinct_on?: (listing_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (listing_order_by[] | null),
/** filter the rows returned */
where?: (listing_bool_exp | null)}) => {get: <R extends listingRequest>(request: R, defaultValue?: FieldsSelection<listing, R>[]) => Observable<FieldsSelection<listing, R>[]>})&({get: <R extends listingRequest>(request: R, defaultValue?: FieldsSelection<listing, R>[]) => Observable<FieldsSelection<listing, R>[]>}),
    
/** An aggregate relationship */
listing_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (listing_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (listing_order_by[] | null),
/** filter the rows returned */
where?: (listing_bool_exp | null)}) => listing_aggregateObservableChain & {get: <R extends listing_aggregateRequest>(request: R, defaultValue?: FieldsSelection<listing_aggregate, R>) => Observable<FieldsSelection<listing_aggregate, R>>})&(listing_aggregateObservableChain & {get: <R extends listing_aggregateRequest>(request: R, defaultValue?: FieldsSelection<listing_aggregate, R>) => Observable<FieldsSelection<listing_aggregate, R>>}),
    
/** fetch data from the table: "listing" using primary key columns */
listing_by_pk: ((args: {id: Scalars['Int']}) => listingObservableChain & {get: <R extends listingRequest>(request: R, defaultValue?: (FieldsSelection<listing, R> | undefined)) => Observable<(FieldsSelection<listing, R> | undefined)>}),
    
/** An array relationship */
loan: ((args?: {
/** distinct select on columns */
distinct_on?: (loan_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (loan_order_by[] | null),
/** filter the rows returned */
where?: (loan_bool_exp | null)}) => {get: <R extends loanRequest>(request: R, defaultValue?: FieldsSelection<loan, R>[]) => Observable<FieldsSelection<loan, R>[]>})&({get: <R extends loanRequest>(request: R, defaultValue?: FieldsSelection<loan, R>[]) => Observable<FieldsSelection<loan, R>[]>}),
    
/** An aggregate relationship */
loan_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (loan_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (loan_order_by[] | null),
/** filter the rows returned */
where?: (loan_bool_exp | null)}) => loan_aggregateObservableChain & {get: <R extends loan_aggregateRequest>(request: R, defaultValue?: FieldsSelection<loan_aggregate, R>) => Observable<FieldsSelection<loan_aggregate, R>>})&(loan_aggregateObservableChain & {get: <R extends loan_aggregateRequest>(request: R, defaultValue?: FieldsSelection<loan_aggregate, R>) => Observable<FieldsSelection<loan_aggregate, R>>}),
    
/** fetch data from the table: "loan" using primary key columns */
loan_by_pk: ((args: {id: Scalars['Int']}) => loanObservableChain & {get: <R extends loanRequest>(request: R, defaultValue?: (FieldsSelection<loan, R> | undefined)) => Observable<(FieldsSelection<loan, R> | undefined)>}),
    
/** fetch data from the table: "offer" */
offer: ((args?: {
/** distinct select on columns */
distinct_on?: (offer_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (offer_order_by[] | null),
/** filter the rows returned */
where?: (offer_bool_exp | null)}) => {get: <R extends offerRequest>(request: R, defaultValue?: FieldsSelection<offer, R>[]) => Observable<FieldsSelection<offer, R>[]>})&({get: <R extends offerRequest>(request: R, defaultValue?: FieldsSelection<offer, R>[]) => Observable<FieldsSelection<offer, R>[]>}),
    
/** fetch aggregated fields from the table: "offer" */
offer_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (offer_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (offer_order_by[] | null),
/** filter the rows returned */
where?: (offer_bool_exp | null)}) => offer_aggregateObservableChain & {get: <R extends offer_aggregateRequest>(request: R, defaultValue?: FieldsSelection<offer_aggregate, R>) => Observable<FieldsSelection<offer_aggregate, R>>})&(offer_aggregateObservableChain & {get: <R extends offer_aggregateRequest>(request: R, defaultValue?: FieldsSelection<offer_aggregate, R>) => Observable<FieldsSelection<offer_aggregate, R>>}),
    
/** fetch data from the table: "offer" using primary key columns */
offer_by_pk: ((args: {id: Scalars['Int']}) => offerObservableChain & {get: <R extends offerRequest>(request: R, defaultValue?: (FieldsSelection<offer, R> | undefined)) => Observable<(FieldsSelection<offer, R> | undefined)>}),
    
/** An array relationship */
token: ((args?: {
/** distinct select on columns */
distinct_on?: (token_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (token_order_by[] | null),
/** filter the rows returned */
where?: (token_bool_exp | null)}) => {get: <R extends tokenRequest>(request: R, defaultValue?: FieldsSelection<token, R>[]) => Observable<FieldsSelection<token, R>[]>})&({get: <R extends tokenRequest>(request: R, defaultValue?: FieldsSelection<token, R>[]) => Observable<FieldsSelection<token, R>[]>}),
    
/** An aggregate relationship */
token_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (token_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (token_order_by[] | null),
/** filter the rows returned */
where?: (token_bool_exp | null)}) => token_aggregateObservableChain & {get: <R extends token_aggregateRequest>(request: R, defaultValue?: FieldsSelection<token_aggregate, R>) => Observable<FieldsSelection<token_aggregate, R>>})&(token_aggregateObservableChain & {get: <R extends token_aggregateRequest>(request: R, defaultValue?: FieldsSelection<token_aggregate, R>) => Observable<FieldsSelection<token_aggregate, R>>}),
    
/** fetch data from the table: "token" using primary key columns */
token_by_pk: ((args: {id: Scalars['Int']}) => tokenObservableChain & {get: <R extends tokenRequest>(request: R, defaultValue?: (FieldsSelection<token, R> | undefined)) => Observable<(FieldsSelection<token, R> | undefined)>})
}


/** columns and relationships of "token" */
export interface tokenPromiseChain{
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** An object relationship */
ipfs: (ipfsPromiseChain & {get: <R extends ipfsRequest>(request: R, defaultValue?: (FieldsSelection<ipfs, R> | undefined)) => Promise<(FieldsSelection<ipfs, R> | undefined)>}),
    ipfs_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    
/** An array relationship */
listing: ((args?: {
/** distinct select on columns */
distinct_on?: (listing_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (listing_order_by[] | null),
/** filter the rows returned */
where?: (listing_bool_exp | null)}) => {get: <R extends listingRequest>(request: R, defaultValue?: FieldsSelection<listing, R>[]) => Promise<FieldsSelection<listing, R>[]>})&({get: <R extends listingRequest>(request: R, defaultValue?: FieldsSelection<listing, R>[]) => Promise<FieldsSelection<listing, R>[]>}),
    
/** An aggregate relationship */
listing_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (listing_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (listing_order_by[] | null),
/** filter the rows returned */
where?: (listing_bool_exp | null)}) => listing_aggregatePromiseChain & {get: <R extends listing_aggregateRequest>(request: R, defaultValue?: FieldsSelection<listing_aggregate, R>) => Promise<FieldsSelection<listing_aggregate, R>>})&(listing_aggregatePromiseChain & {get: <R extends listing_aggregateRequest>(request: R, defaultValue?: FieldsSelection<listing_aggregate, R>) => Promise<FieldsSelection<listing_aggregate, R>>}),
    
/** An array relationship */
loan: ((args?: {
/** distinct select on columns */
distinct_on?: (loan_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (loan_order_by[] | null),
/** filter the rows returned */
where?: (loan_bool_exp | null)}) => {get: <R extends loanRequest>(request: R, defaultValue?: FieldsSelection<loan, R>[]) => Promise<FieldsSelection<loan, R>[]>})&({get: <R extends loanRequest>(request: R, defaultValue?: FieldsSelection<loan, R>[]) => Promise<FieldsSelection<loan, R>[]>}),
    
/** An aggregate relationship */
loan_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (loan_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (loan_order_by[] | null),
/** filter the rows returned */
where?: (loan_bool_exp | null)}) => loan_aggregatePromiseChain & {get: <R extends loan_aggregateRequest>(request: R, defaultValue?: FieldsSelection<loan_aggregate, R>) => Promise<FieldsSelection<loan_aggregate, R>>})&(loan_aggregatePromiseChain & {get: <R extends loan_aggregateRequest>(request: R, defaultValue?: FieldsSelection<loan_aggregate, R>) => Promise<FieldsSelection<loan_aggregate, R>>}),
    owner: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    uid: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}


/** columns and relationships of "token" */
export interface tokenObservableChain{
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** An object relationship */
ipfs: (ipfsObservableChain & {get: <R extends ipfsRequest>(request: R, defaultValue?: (FieldsSelection<ipfs, R> | undefined)) => Observable<(FieldsSelection<ipfs, R> | undefined)>}),
    ipfs_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    
/** An array relationship */
listing: ((args?: {
/** distinct select on columns */
distinct_on?: (listing_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (listing_order_by[] | null),
/** filter the rows returned */
where?: (listing_bool_exp | null)}) => {get: <R extends listingRequest>(request: R, defaultValue?: FieldsSelection<listing, R>[]) => Observable<FieldsSelection<listing, R>[]>})&({get: <R extends listingRequest>(request: R, defaultValue?: FieldsSelection<listing, R>[]) => Observable<FieldsSelection<listing, R>[]>}),
    
/** An aggregate relationship */
listing_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (listing_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (listing_order_by[] | null),
/** filter the rows returned */
where?: (listing_bool_exp | null)}) => listing_aggregateObservableChain & {get: <R extends listing_aggregateRequest>(request: R, defaultValue?: FieldsSelection<listing_aggregate, R>) => Observable<FieldsSelection<listing_aggregate, R>>})&(listing_aggregateObservableChain & {get: <R extends listing_aggregateRequest>(request: R, defaultValue?: FieldsSelection<listing_aggregate, R>) => Observable<FieldsSelection<listing_aggregate, R>>}),
    
/** An array relationship */
loan: ((args?: {
/** distinct select on columns */
distinct_on?: (loan_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (loan_order_by[] | null),
/** filter the rows returned */
where?: (loan_bool_exp | null)}) => {get: <R extends loanRequest>(request: R, defaultValue?: FieldsSelection<loan, R>[]) => Observable<FieldsSelection<loan, R>[]>})&({get: <R extends loanRequest>(request: R, defaultValue?: FieldsSelection<loan, R>[]) => Observable<FieldsSelection<loan, R>[]>}),
    
/** An aggregate relationship */
loan_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (loan_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (loan_order_by[] | null),
/** filter the rows returned */
where?: (loan_bool_exp | null)}) => loan_aggregateObservableChain & {get: <R extends loan_aggregateRequest>(request: R, defaultValue?: FieldsSelection<loan_aggregate, R>) => Observable<FieldsSelection<loan_aggregate, R>>})&(loan_aggregateObservableChain & {get: <R extends loan_aggregateRequest>(request: R, defaultValue?: FieldsSelection<loan_aggregate, R>) => Observable<FieldsSelection<loan_aggregate, R>>}),
    owner: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    uid: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}


/** aggregated selection of "token" */
export interface token_aggregatePromiseChain{
    aggregate: (token_aggregate_fieldsPromiseChain & {get: <R extends token_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<token_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends tokenRequest>(request: R, defaultValue?: FieldsSelection<token, R>[]) => Promise<FieldsSelection<token, R>[]>})
}


/** aggregated selection of "token" */
export interface token_aggregateObservableChain{
    aggregate: (token_aggregate_fieldsObservableChain & {get: <R extends token_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<token_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends tokenRequest>(request: R, defaultValue?: FieldsSelection<token, R>[]) => Observable<FieldsSelection<token, R>[]>})
}


/** aggregate fields of "token" */
export interface token_aggregate_fieldsPromiseChain{
    avg: (token_avg_fieldsPromiseChain & {get: <R extends token_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_avg_fields, R> | undefined)) => Promise<(FieldsSelection<token_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (token_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (token_max_fieldsPromiseChain & {get: <R extends token_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_max_fields, R> | undefined)) => Promise<(FieldsSelection<token_max_fields, R> | undefined)>}),
    min: (token_min_fieldsPromiseChain & {get: <R extends token_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_min_fields, R> | undefined)) => Promise<(FieldsSelection<token_min_fields, R> | undefined)>}),
    stddev: (token_stddev_fieldsPromiseChain & {get: <R extends token_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_stddev_fields, R> | undefined)) => Promise<(FieldsSelection<token_stddev_fields, R> | undefined)>}),
    stddev_pop: (token_stddev_pop_fieldsPromiseChain & {get: <R extends token_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_stddev_pop_fields, R> | undefined)) => Promise<(FieldsSelection<token_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (token_stddev_samp_fieldsPromiseChain & {get: <R extends token_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_stddev_samp_fields, R> | undefined)) => Promise<(FieldsSelection<token_stddev_samp_fields, R> | undefined)>}),
    sum: (token_sum_fieldsPromiseChain & {get: <R extends token_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_sum_fields, R> | undefined)) => Promise<(FieldsSelection<token_sum_fields, R> | undefined)>}),
    var_pop: (token_var_pop_fieldsPromiseChain & {get: <R extends token_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_var_pop_fields, R> | undefined)) => Promise<(FieldsSelection<token_var_pop_fields, R> | undefined)>}),
    var_samp: (token_var_samp_fieldsPromiseChain & {get: <R extends token_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_var_samp_fields, R> | undefined)) => Promise<(FieldsSelection<token_var_samp_fields, R> | undefined)>}),
    variance: (token_variance_fieldsPromiseChain & {get: <R extends token_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_variance_fields, R> | undefined)) => Promise<(FieldsSelection<token_variance_fields, R> | undefined)>})
}


/** aggregate fields of "token" */
export interface token_aggregate_fieldsObservableChain{
    avg: (token_avg_fieldsObservableChain & {get: <R extends token_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_avg_fields, R> | undefined)) => Observable<(FieldsSelection<token_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (token_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (token_max_fieldsObservableChain & {get: <R extends token_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_max_fields, R> | undefined)) => Observable<(FieldsSelection<token_max_fields, R> | undefined)>}),
    min: (token_min_fieldsObservableChain & {get: <R extends token_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_min_fields, R> | undefined)) => Observable<(FieldsSelection<token_min_fields, R> | undefined)>}),
    stddev: (token_stddev_fieldsObservableChain & {get: <R extends token_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_stddev_fields, R> | undefined)) => Observable<(FieldsSelection<token_stddev_fields, R> | undefined)>}),
    stddev_pop: (token_stddev_pop_fieldsObservableChain & {get: <R extends token_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_stddev_pop_fields, R> | undefined)) => Observable<(FieldsSelection<token_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (token_stddev_samp_fieldsObservableChain & {get: <R extends token_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_stddev_samp_fields, R> | undefined)) => Observable<(FieldsSelection<token_stddev_samp_fields, R> | undefined)>}),
    sum: (token_sum_fieldsObservableChain & {get: <R extends token_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_sum_fields, R> | undefined)) => Observable<(FieldsSelection<token_sum_fields, R> | undefined)>}),
    var_pop: (token_var_pop_fieldsObservableChain & {get: <R extends token_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_var_pop_fields, R> | undefined)) => Observable<(FieldsSelection<token_var_pop_fields, R> | undefined)>}),
    var_samp: (token_var_samp_fieldsObservableChain & {get: <R extends token_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_var_samp_fields, R> | undefined)) => Observable<(FieldsSelection<token_var_samp_fields, R> | undefined)>}),
    variance: (token_variance_fieldsObservableChain & {get: <R extends token_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_variance_fields, R> | undefined)) => Observable<(FieldsSelection<token_variance_fields, R> | undefined)>})
}


/** aggregate avg on columns */
export interface token_avg_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    ipfs_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    uid: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate avg on columns */
export interface token_avg_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    ipfs_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    uid: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate max on columns */
export interface token_max_fieldsPromiseChain{
    address: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    ipfs_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    owner: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    uid: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** aggregate max on columns */
export interface token_max_fieldsObservableChain{
    address: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    ipfs_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    owner: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    uid: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** aggregate min on columns */
export interface token_min_fieldsPromiseChain{
    address: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    ipfs_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    owner: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    uid: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** aggregate min on columns */
export interface token_min_fieldsObservableChain{
    address: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    ipfs_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    owner: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    uid: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** response of any mutation on the table "token" */
export interface token_mutation_responsePromiseChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends tokenRequest>(request: R, defaultValue?: FieldsSelection<token, R>[]) => Promise<FieldsSelection<token, R>[]>})
}


/** response of any mutation on the table "token" */
export interface token_mutation_responseObservableChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends tokenRequest>(request: R, defaultValue?: FieldsSelection<token, R>[]) => Observable<FieldsSelection<token, R>[]>})
}


/** aggregate stddev on columns */
export interface token_stddev_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    ipfs_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    uid: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev on columns */
export interface token_stddev_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    ipfs_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    uid: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface token_stddev_pop_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    ipfs_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    uid: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface token_stddev_pop_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    ipfs_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    uid: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface token_stddev_samp_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    ipfs_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    uid: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface token_stddev_samp_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    ipfs_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    uid: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate sum on columns */
export interface token_sum_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    ipfs_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    uid: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** aggregate sum on columns */
export interface token_sum_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    ipfs_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    uid: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface token_var_pop_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    ipfs_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    uid: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface token_var_pop_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    ipfs_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    uid: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface token_var_samp_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    ipfs_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    uid: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface token_var_samp_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    ipfs_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    uid: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface token_variance_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    ipfs_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    uid: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface token_variance_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    ipfs_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    uid: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}
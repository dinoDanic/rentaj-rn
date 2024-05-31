/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation createSession($input: CreateSessionInput!) {\n  createSession(input: $input) {\n    token\n    user {\n      id\n      email\n    }\n  }\n}": types.CreateSessionDocument,
    "query categories {\n  categories {\n    id\n    name\n  }\n}\n\nquery parentCategories {\n  parentCategories {\n    id\n    name\n    imageUrl\n  }\n}": types.CategoriesDocument,
    "query myListings {\n  me {\n    items {\n      id\n      name\n      pricePerDay\n    }\n  }\n}": types.MyListingsDocument,
    "query searchItems($after: String, $before: String, $first: Int, $last: Int, $input: SearchInput) {\n  searchItems(\n    after: $after\n    before: $before\n    first: $first\n    last: $last\n    input: $input\n  ) {\n    edges {\n      cursor\n      node {\n        name\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nquery searchPage($after: String, $before: String, $first: Int, $last: Int, $input: SearchInput) {\n  searchItems(\n    after: $after\n    before: $before\n    first: $first\n    last: $last\n    input: $input\n  ) {\n    edges {\n      cursor\n      node {\n        name\n        pricePerDay\n        delivery\n        location {\n          city\n        }\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n  searchCategories(input: $input) {\n    id\n    name\n    itemsCount\n  }\n}\n\nquery searchCategories($input: SearchInput) {\n  searchCategories(input: $input) {\n    id\n    name\n  }\n}": types.SearchItemsDocument,
    "query me {\n  me {\n    account {\n      id\n      email\n    }\n  }\n}": types.MeDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation createSession($input: CreateSessionInput!) {\n  createSession(input: $input) {\n    token\n    user {\n      id\n      email\n    }\n  }\n}"): (typeof documents)["mutation createSession($input: CreateSessionInput!) {\n  createSession(input: $input) {\n    token\n    user {\n      id\n      email\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query categories {\n  categories {\n    id\n    name\n  }\n}\n\nquery parentCategories {\n  parentCategories {\n    id\n    name\n    imageUrl\n  }\n}"): (typeof documents)["query categories {\n  categories {\n    id\n    name\n  }\n}\n\nquery parentCategories {\n  parentCategories {\n    id\n    name\n    imageUrl\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query myListings {\n  me {\n    items {\n      id\n      name\n      pricePerDay\n    }\n  }\n}"): (typeof documents)["query myListings {\n  me {\n    items {\n      id\n      name\n      pricePerDay\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query searchItems($after: String, $before: String, $first: Int, $last: Int, $input: SearchInput) {\n  searchItems(\n    after: $after\n    before: $before\n    first: $first\n    last: $last\n    input: $input\n  ) {\n    edges {\n      cursor\n      node {\n        name\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nquery searchPage($after: String, $before: String, $first: Int, $last: Int, $input: SearchInput) {\n  searchItems(\n    after: $after\n    before: $before\n    first: $first\n    last: $last\n    input: $input\n  ) {\n    edges {\n      cursor\n      node {\n        name\n        pricePerDay\n        delivery\n        location {\n          city\n        }\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n  searchCategories(input: $input) {\n    id\n    name\n    itemsCount\n  }\n}\n\nquery searchCategories($input: SearchInput) {\n  searchCategories(input: $input) {\n    id\n    name\n  }\n}"): (typeof documents)["query searchItems($after: String, $before: String, $first: Int, $last: Int, $input: SearchInput) {\n  searchItems(\n    after: $after\n    before: $before\n    first: $first\n    last: $last\n    input: $input\n  ) {\n    edges {\n      cursor\n      node {\n        name\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nquery searchPage($after: String, $before: String, $first: Int, $last: Int, $input: SearchInput) {\n  searchItems(\n    after: $after\n    before: $before\n    first: $first\n    last: $last\n    input: $input\n  ) {\n    edges {\n      cursor\n      node {\n        name\n        pricePerDay\n        delivery\n        location {\n          city\n        }\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n  searchCategories(input: $input) {\n    id\n    name\n    itemsCount\n  }\n}\n\nquery searchCategories($input: SearchInput) {\n  searchCategories(input: $input) {\n    id\n    name\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query me {\n  me {\n    account {\n      id\n      email\n    }\n  }\n}"): (typeof documents)["query me {\n  me {\n    account {\n      id\n      email\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
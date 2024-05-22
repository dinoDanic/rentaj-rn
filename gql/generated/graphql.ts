/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Category = {
  __typename?: 'Category';
  childCategories?: Maybe<Array<Maybe<Category>>>;
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  parentCategory?: Maybe<Category>;
};

export type CreateItemInput = {
  categoryId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateOrderInput = {
  delivery: Scalars['Boolean']['input'];
  endDate: Scalars['String']['input'];
  itemId: Scalars['ID']['input'];
  pickUp: Scalars['Boolean']['input'];
  renterId: Scalars['ID']['input'];
  startDate: Scalars['String']['input'];
  status: OrderStatus;
};

export type CreateSessionInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Item = {
  __typename?: 'Item';
  name: Scalars['String']['output'];
};

export type Me = {
  __typename?: 'Me';
  account?: Maybe<User>;
  orders?: Maybe<Array<Maybe<Order>>>;
};

export type Order = {
  __typename?: 'Order';
  delivery: Scalars['Boolean']['output'];
  endDate: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  pickUp: Scalars['Boolean']['output'];
  startDate: Scalars['String']['output'];
  status: OrderStatus;
};

export enum OrderStatus {
  Completed = 'COMPLETED',
  Declined = 'DECLINED',
  Draft = 'DRAFT',
  WaitingForRenter = 'WAITING_FOR_RENTER'
}

export type RootMutationType = {
  __typename?: 'RootMutationType';
  /** Create a item */
  createItem?: Maybe<Item>;
  /** Create a order */
  createOrder?: Maybe<Order>;
  /** Create a session */
  createSession?: Maybe<Session>;
  /** Create a new user */
  createUser?: Maybe<User>;
};


export type RootMutationTypeCreateItemArgs = {
  input?: InputMaybe<CreateItemInput>;
};


export type RootMutationTypeCreateOrderArgs = {
  input?: InputMaybe<CreateOrderInput>;
};


export type RootMutationTypeCreateSessionArgs = {
  input?: InputMaybe<CreateSessionInput>;
};


export type RootMutationTypeCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  /** Get Categories */
  categories?: Maybe<Array<Maybe<Category>>>;
  /** Get me */
  me?: Maybe<Me>;
  /** Get Parent Categories */
  parentCategories?: Maybe<Array<Maybe<Category>>>;
  /** search categories */
  searchCategories?: Maybe<Array<Maybe<Category>>>;
  /** search items */
  searchItems?: Maybe<Array<Maybe<Item>>>;
};


export type RootQueryTypeSearchCategoriesArgs = {
  input?: InputMaybe<SearchInput>;
};


export type RootQueryTypeSearchItemsArgs = {
  input?: InputMaybe<SearchInput>;
};

export type SearchInput = {
  query?: InputMaybe<Scalars['String']['input']>;
};

export type Session = {
  __typename?: 'Session';
  token: Scalars['String']['output'];
  user: User;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type CreateSessionMutationVariables = Exact<{
  input: CreateSessionInput;
}>;


export type CreateSessionMutation = { __typename?: 'RootMutationType', createSession?: { __typename?: 'Session', token: string, user: { __typename?: 'User', id: string } } | null };

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { __typename?: 'RootQueryType', categories?: Array<{ __typename?: 'Category', id: string, name: string } | null> | null };

export type ParentCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type ParentCategoriesQuery = { __typename?: 'RootQueryType', parentCategories?: Array<{ __typename?: 'Category', id: string, name: string, imageUrl?: string | null } | null> | null };


export const CreateSessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createSession"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateSessionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSession"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateSessionMutation, CreateSessionMutationVariables>;
export const CategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CategoriesQuery, CategoriesQueryVariables>;
export const ParentCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"parentCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parentCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}}]}}]} as unknown as DocumentNode<ParentCategoriesQuery, ParentCategoriesQueryVariables>;
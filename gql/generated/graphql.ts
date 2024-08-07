/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core"

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> = T | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** A custom scalar for Decimal values */
  Decimal: { input: any; output: any }
}

export type AddImageToItemInput = {
  imageUrl: Scalars["String"]["input"]
  itemId: Scalars["ID"]["input"]
  name: Scalars["String"]["input"]
}

export type Category = {
  __typename?: "Category"
  childCategories?: Maybe<Array<Maybe<Category>>>
  id: Scalars["ID"]["output"]
  imageUrl?: Maybe<Scalars["String"]["output"]>
  items?: Maybe<Array<Maybe<Item>>>
  itemsCount?: Maybe<Scalars["Int"]["output"]>
  name: Scalars["String"]["output"]
  parentCategory?: Maybe<Category>
}

export type CategoryByIdInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>
}

export type Company = {
  __typename?: "Company"
  id: Scalars["ID"]["output"]
  iob: Scalars["String"]["output"]
  location: Location
  name: Scalars["String"]["output"]
}

export type CreateItemInput = {
  capara: Scalars["Decimal"]["input"]
  categoryId: Scalars["String"]["input"]
  delivery: Scalars["Boolean"]["input"]
  description?: InputMaybe<Scalars["String"]["input"]>
  locationId: Scalars["String"]["input"]
  name: Scalars["String"]["input"]
  pickUp: Scalars["Boolean"]["input"]
  pricePerDay: Scalars["Decimal"]["input"]
}

export type CreateOrderInput = {
  delivery: Scalars["Boolean"]["input"]
  endDate: Scalars["String"]["input"]
  itemId: Scalars["ID"]["input"]
  pickUp: Scalars["Boolean"]["input"]
  renterId: Scalars["ID"]["input"]
  startDate: Scalars["String"]["input"]
  status: OrderStatus
}

export type CreateSessionInput = {
  email: Scalars["String"]["input"]
  password: Scalars["String"]["input"]
}

export type CreateUserInput = {
  email: Scalars["String"]["input"]
  password: Scalars["String"]["input"]
}

export type FilterItems = {
  active?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type Image = {
  __typename?: "Image"
  id: Scalars["ID"]["output"]
  imageUrl: Scalars["String"]["output"]
  name: Scalars["String"]["output"]
}

export type Item = {
  __typename?: "Item"
  availabilitySevenDays?: Maybe<Array<Maybe<ItemAvailability>>>
  capara?: Maybe<Scalars["Decimal"]["output"]>
  category: Category
  delivery: Scalars["Boolean"]["output"]
  description?: Maybe<Scalars["String"]["output"]>
  id: Scalars["ID"]["output"]
  images?: Maybe<Array<Maybe<Image>>>
  insertedAt?: Maybe<Scalars["String"]["output"]>
  location: Location
  name: Scalars["String"]["output"]
  pickUp: Scalars["Boolean"]["output"]
  pricePerDay: Scalars["Decimal"]["output"]
  updatedAt?: Maybe<Scalars["String"]["output"]>
  user: User
  userId: Scalars["ID"]["output"]
}

export type ItemAvailability = {
  __typename?: "ItemAvailability"
  available: Scalars["Boolean"]["output"]
  date: Scalars["String"]["output"]
}

export type ItemByIdInput = {
  itemId: Scalars["ID"]["input"]
}

export type ItemConnection = {
  __typename?: "ItemConnection"
  edges?: Maybe<Array<Maybe<ItemEdge>>>
  pageInfo: PageInfo
}

export type ItemEdge = {
  __typename?: "ItemEdge"
  cursor?: Maybe<Scalars["String"]["output"]>
  node?: Maybe<Item>
}

export type Location = {
  __typename?: "Location"
  address: Scalars["String"]["output"]
  city: Scalars["String"]["output"]
  id: Scalars["ID"]["output"]
  lat: Scalars["String"]["output"]
  long: Scalars["String"]["output"]
  postalCode: Scalars["Int"]["output"]
}

export type Me = {
  __typename?: "Me"
  account?: Maybe<User>
  company?: Maybe<Company>
  items?: Maybe<Array<Maybe<Item>>>
  orders?: Maybe<Array<Maybe<Order>>>
}

export type MeItemsArgs = {
  input?: InputMaybe<FilterItems>
}

export type Order = {
  __typename?: "Order"
  delivery: Scalars["Boolean"]["output"]
  endDate: Scalars["String"]["output"]
  id: Scalars["ID"]["output"]
  pickUp: Scalars["Boolean"]["output"]
  startDate: Scalars["String"]["output"]
  status: OrderStatus
}

export enum OrderStatus {
  Completed = "COMPLETED",
  Declined = "DECLINED",
  Draft = "DRAFT",
  WaitingForRenter = "WAITING_FOR_RENTER",
}

export type PageInfo = {
  __typename?: "PageInfo"
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]["output"]>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"]["output"]
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"]["output"]
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]["output"]>
}

export type RootMutationType = {
  __typename?: "RootMutationType"
  /** add image */
  addImageToItem?: Maybe<Image>
  /** Create a item */
  createItem?: Maybe<Item>
  /** Create a order */
  createOrder?: Maybe<Order>
  /** Create a session */
  createSession?: Maybe<Session>
  /** Create a new user */
  createUser?: Maybe<User>
  /** delete a item */
  deleteItem?: Maybe<Scalars["Boolean"]["output"]>
  /** update a item */
  updateItem?: Maybe<Item>
}

export type RootMutationTypeAddImageToItemArgs = {
  input?: InputMaybe<AddImageToItemInput>
}

export type RootMutationTypeCreateItemArgs = {
  input?: InputMaybe<CreateItemInput>
}

export type RootMutationTypeCreateOrderArgs = {
  input?: InputMaybe<CreateOrderInput>
}

export type RootMutationTypeCreateSessionArgs = {
  input?: InputMaybe<CreateSessionInput>
}

export type RootMutationTypeCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>
}

export type RootMutationTypeDeleteItemArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>
}

export type RootMutationTypeUpdateItemArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>
  input?: InputMaybe<UpdateItemInput>
}

export type RootQueryType = {
  __typename?: "RootQueryType"
  /** Get Categories */
  categories?: Maybe<Array<Maybe<Category>>>
  /** get category by id */
  categoryById?: Maybe<Category>
  /** get item by id */
  itemById?: Maybe<Item>
  /** Get me */
  me?: Maybe<Me>
  /** Get Parent Categories */
  parentCategories?: Maybe<Array<Maybe<Category>>>
  /** search categories */
  searchCategories?: Maybe<Array<Maybe<Category>>>
  searchItems?: Maybe<ItemConnection>
  /** search items */
  searchItemsBk?: Maybe<Array<Maybe<Item>>>
}

export type RootQueryTypeCategoryByIdArgs = {
  input?: InputMaybe<CategoryByIdInput>
}

export type RootQueryTypeItemByIdArgs = {
  input?: InputMaybe<ItemByIdInput>
}

export type RootQueryTypeSearchCategoriesArgs = {
  input?: InputMaybe<SearchInput>
}

export type RootQueryTypeSearchItemsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  before?: InputMaybe<Scalars["String"]["input"]>
  first?: InputMaybe<Scalars["Int"]["input"]>
  input?: InputMaybe<SearchInput>
  last?: InputMaybe<Scalars["Int"]["input"]>
}

export type RootQueryTypeSearchItemsBkArgs = {
  input?: InputMaybe<SearchInput>
}

export type SearchInput = {
  query?: InputMaybe<Scalars["String"]["input"]>
}

export type Session = {
  __typename?: "Session"
  token: Scalars["String"]["output"]
  user: User
}

export type UpdateItemInput = {
  capara?: InputMaybe<Scalars["Decimal"]["input"]>
  delivery?: InputMaybe<Scalars["Boolean"]["input"]>
  description?: InputMaybe<Scalars["String"]["input"]>
  pickUp?: InputMaybe<Scalars["Boolean"]["input"]>
  pricePerDay?: InputMaybe<Scalars["Decimal"]["input"]>
}

export type User = {
  __typename?: "User"
  company?: Maybe<Company>
  contactNumber: Scalars["String"]["output"]
  email: Scalars["String"]["output"]
  id: Scalars["ID"]["output"]
}

export type CreateSessionMutationVariables = Exact<{
  input: CreateSessionInput
}>

export type CreateSessionMutation = {
  __typename?: "RootMutationType"
  createSession?: {
    __typename?: "Session"
    token: string
    user: { __typename?: "User"; id: string; email: string; contactNumber: string }
  } | null
}

export type CategoriesQueryVariables = Exact<{ [key: string]: never }>

export type CategoriesQuery = {
  __typename?: "RootQueryType"
  categories?: Array<{ __typename?: "Category"; id: string; name: string } | null> | null
}

export type ParentCategoriesQueryVariables = Exact<{ [key: string]: never }>

export type ParentCategoriesQuery = {
  __typename?: "RootQueryType"
  parentCategories?: Array<{
    __typename?: "Category"
    id: string
    name: string
    imageUrl?: string | null
  } | null> | null
}

export type SelectParentCategoriesQueryVariables = Exact<{ [key: string]: never }>

export type SelectParentCategoriesQuery = {
  __typename?: "RootQueryType"
  parentCategories?: Array<{
    __typename?: "Category"
    id: string
    name: string
    imageUrl?: string | null
    childCategories?: Array<{ __typename?: "Category"; id: string; name: string } | null> | null
  } | null> | null
}

export type CategoryByIdQueryVariables = Exact<{
  input?: InputMaybe<CategoryByIdInput>
}>

export type CategoryByIdQuery = {
  __typename?: "RootQueryType"
  categoryById?: {
    __typename?: "Category"
    id: string
    name: string
    childCategories?: Array<{
      __typename?: "Category"
      id: string
      name: string
      childCategories?: Array<{ __typename?: "Category"; id: string; name: string } | null> | null
    } | null> | null
  } | null
}

export type AddImageToItemMutationVariables = Exact<{
  input?: InputMaybe<AddImageToItemInput>
}>

export type AddImageToItemMutation = {
  __typename?: "RootMutationType"
  addImageToItem?: { __typename?: "Image"; id: string } | null
}

export type MyListingsQueryVariables = Exact<{
  input?: InputMaybe<FilterItems>
}>

export type MyListingsQuery = {
  __typename?: "RootQueryType"
  me?: {
    __typename?: "Me"
    items?: Array<{
      __typename?: "Item"
      id: string
      name: string
      pricePerDay: any
      images?: Array<{ __typename?: "Image"; imageUrl: string } | null> | null
    } | null> | null
  } | null
}

export type ItemByIdQueryVariables = Exact<{
  input?: InputMaybe<ItemByIdInput>
}>

export type ItemByIdQuery = {
  __typename?: "RootQueryType"
  itemById?: {
    __typename?: "Item"
    insertedAt?: string | null
    capara?: any | null
    delivery: boolean
    description?: string | null
    id: string
    name: string
    pickUp: boolean
    pricePerDay: any
    images?: Array<{ __typename?: "Image"; id: string; imageUrl: string } | null> | null
    availabilitySevenDays?: Array<{ __typename?: "ItemAvailability"; available: boolean; date: string } | null> | null
    user: {
      __typename?: "User"
      id: string
      email: string
      contactNumber: string
      company?: { __typename?: "Company"; id: string; name: string } | null
    }
    category: { __typename?: "Category"; name: string }
    location: { __typename?: "Location"; address: string; city: string; id: string; lat: string; long: string }
  } | null
}

export type CreateItemMutationVariables = Exact<{
  input?: InputMaybe<CreateItemInput>
}>

export type CreateItemMutation = {
  __typename?: "RootMutationType"
  createItem?: { __typename?: "Item"; id: string } | null
}

export type UpdateItemMutationVariables = Exact<{
  id?: InputMaybe<Scalars["ID"]["input"]>
  input?: InputMaybe<UpdateItemInput>
}>

export type UpdateItemMutation = {
  __typename?: "RootMutationType"
  updateItem?: { __typename?: "Item"; id: string } | null
}

export type DeleteItemMutationVariables = Exact<{
  id?: InputMaybe<Scalars["ID"]["input"]>
}>

export type DeleteItemMutation = { __typename?: "RootMutationType"; deleteItem?: boolean | null }

export type SearchItemsQueryVariables = Exact<{
  after?: InputMaybe<Scalars["String"]["input"]>
  before?: InputMaybe<Scalars["String"]["input"]>
  first?: InputMaybe<Scalars["Int"]["input"]>
  last?: InputMaybe<Scalars["Int"]["input"]>
  input?: InputMaybe<SearchInput>
}>

export type SearchItemsQuery = {
  __typename?: "RootQueryType"
  searchItems?: {
    __typename?: "ItemConnection"
    edges?: Array<{
      __typename?: "ItemEdge"
      cursor?: string | null
      node?: { __typename?: "Item"; name: string } | null
    } | null> | null
    pageInfo: {
      __typename?: "PageInfo"
      endCursor?: string | null
      hasNextPage: boolean
      hasPreviousPage: boolean
      startCursor?: string | null
    }
  } | null
}

export type SearchPageQueryVariables = Exact<{
  after?: InputMaybe<Scalars["String"]["input"]>
  before?: InputMaybe<Scalars["String"]["input"]>
  first?: InputMaybe<Scalars["Int"]["input"]>
  last?: InputMaybe<Scalars["Int"]["input"]>
  input?: InputMaybe<SearchInput>
}>

export type SearchPageQuery = {
  __typename?: "RootQueryType"
  searchItems?: {
    __typename?: "ItemConnection"
    edges?: Array<{
      __typename?: "ItemEdge"
      cursor?: string | null
      node?: {
        __typename?: "Item"
        id: string
        name: string
        pricePerDay: any
        delivery: boolean
        images?: Array<{ __typename?: "Image"; imageUrl: string } | null> | null
        location: { __typename?: "Location"; city: string }
      } | null
    } | null> | null
    pageInfo: {
      __typename?: "PageInfo"
      endCursor?: string | null
      hasNextPage: boolean
      hasPreviousPage: boolean
      startCursor?: string | null
    }
  } | null
  searchCategories?: Array<{
    __typename?: "Category"
    id: string
    name: string
    imageUrl?: string | null
    itemsCount?: number | null
  } | null> | null
}

export type SearchCategoriesQueryVariables = Exact<{
  input?: InputMaybe<SearchInput>
}>

export type SearchCategoriesQuery = {
  __typename?: "RootQueryType"
  searchCategories?: Array<{ __typename?: "Category"; id: string; name: string } | null> | null
}

export type MeQueryVariables = Exact<{ [key: string]: never }>

export type MeQuery = {
  __typename?: "RootQueryType"
  me?: {
    __typename?: "Me"
    account?: { __typename?: "User"; id: string; email: string; contactNumber: string } | null
  } | null
}

export const CreateSessionDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "createSession" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "CreateSessionInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createSession" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "token" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      { kind: "Field", name: { kind: "Name", value: "contactNumber" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateSessionMutation, CreateSessionMutationVariables>
export const CategoriesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "categories" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "categories" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CategoriesQuery, CategoriesQueryVariables>
export const ParentCategoriesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "parentCategories" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "parentCategories" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ParentCategoriesQuery, ParentCategoriesQueryVariables>
export const SelectParentCategoriesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "selectParentCategories" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "parentCategories" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "childCategories" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SelectParentCategoriesQuery, SelectParentCategoriesQueryVariables>
export const CategoryByIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "categoryById" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "CategoryByIdInput" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "categoryById" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "childCategories" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "childCategories" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CategoryByIdQuery, CategoryByIdQueryVariables>
export const AddImageToItemDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "addImageToItem" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "AddImageToItemInput" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "addImageToItem" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AddImageToItemMutation, AddImageToItemMutationVariables>
export const MyListingsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "myListings" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "FilterItems" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "me" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "input" },
                      value: { kind: "Variable", name: { kind: "Name", value: "input" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "pricePerDay" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "images" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "imageUrl" } }],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MyListingsQuery, MyListingsQueryVariables>
export const ItemByIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "itemById" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "ItemByIdInput" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "itemById" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "images" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "insertedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "availabilitySevenDays" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "available" } },
                      { kind: "Field", name: { kind: "Name", value: "date" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      { kind: "Field", name: { kind: "Name", value: "contactNumber" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "company" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "category" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "Field", name: { kind: "Name", value: "name" } }],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "capara" } },
                { kind: "Field", name: { kind: "Name", value: "delivery" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "location" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "address" } },
                      { kind: "Field", name: { kind: "Name", value: "city" } },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "lat" } },
                      { kind: "Field", name: { kind: "Name", value: "long" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "pickUp" } },
                { kind: "Field", name: { kind: "Name", value: "pricePerDay" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ItemByIdQuery, ItemByIdQueryVariables>
export const CreateItemDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "createItem" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "CreateItemInput" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createItem" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateItemMutation, CreateItemMutationVariables>
export const UpdateItemDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "updateItem" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "UpdateItemInput" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateItem" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateItemMutation, UpdateItemMutationVariables>
export const DeleteItemDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "deleteItem" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteItem" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DeleteItemMutation, DeleteItemMutationVariables>
export const SearchItemsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "searchItems" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "SearchInput" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "searchItems" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "cursor" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "name" } }],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "pageInfo" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "endCursor" } },
                      { kind: "Field", name: { kind: "Name", value: "hasNextPage" } },
                      { kind: "Field", name: { kind: "Name", value: "hasPreviousPage" } },
                      { kind: "Field", name: { kind: "Name", value: "startCursor" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SearchItemsQuery, SearchItemsQueryVariables>
export const SearchPageDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "searchPage" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "SearchInput" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "searchItems" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "cursor" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "images" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [{ kind: "Field", name: { kind: "Name", value: "imageUrl" } }],
                              },
                            },
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "pricePerDay" } },
                            { kind: "Field", name: { kind: "Name", value: "delivery" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "location" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [{ kind: "Field", name: { kind: "Name", value: "city" } }],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "pageInfo" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "endCursor" } },
                      { kind: "Field", name: { kind: "Name", value: "hasNextPage" } },
                      { kind: "Field", name: { kind: "Name", value: "hasPreviousPage" } },
                      { kind: "Field", name: { kind: "Name", value: "startCursor" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "searchCategories" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
                { kind: "Field", name: { kind: "Name", value: "itemsCount" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SearchPageQuery, SearchPageQueryVariables>
export const SearchCategoriesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "searchCategories" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "SearchInput" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "searchCategories" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SearchCategoriesQuery, SearchCategoriesQueryVariables>
export const MeDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "me" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "me" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "account" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      { kind: "Field", name: { kind: "Name", value: "contactNumber" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MeQuery, MeQueryVariables>

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

export type ClientCar = {
  __typename?: 'ClientCar';
  brand: Scalars['String']['output'];
  condition: Scalars['String']['output'];
  dimension?: Maybe<Dimension>;
  discription?: Maybe<Scalars['String']['output']>;
  engineDetails?: Maybe<EngineDetails>;
  features?: Maybe<Array<Maybe<Feature>>>;
  generalInfo?: Maybe<GeneralInfo>;
  id: Scalars['Int']['output'];
  images?: Maybe<Array<Maybe<ClientCarImage>>>;
  location?: Maybe<Location>;
  model: Scalars['String']['output'];
  price?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
  year?: Maybe<Scalars['Int']['output']>;
};

export type ClientCarImage = {
  __typename?: 'ClientCarImage';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type Dimension = {
  __typename?: 'Dimension';
  cargoVolume?: Maybe<Scalars['Int']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  length?: Maybe<Scalars['Int']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type DimensionInput = {
  cargoVolume?: InputMaybe<Scalars['Int']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  length?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type EngineDetails = {
  __typename?: 'EngineDetails';
  drivetrain?: Maybe<Scalars['String']['output']>;
  engineCapacity?: Maybe<Scalars['Int']['output']>;
  fuelType?: Maybe<Scalars['String']['output']>;
  milage?: Maybe<Scalars['Int']['output']>;
  power?: Maybe<Scalars['Int']['output']>;
  transmission?: Maybe<Scalars['String']['output']>;
};

export type EngineDetailsInput = {
  drivetrain?: InputMaybe<Scalars['String']['input']>;
  engineCapacity?: InputMaybe<Scalars['Int']['input']>;
  fuelType?: InputMaybe<Scalars['String']['input']>;
  milage?: InputMaybe<Scalars['Int']['input']>;
  power?: InputMaybe<Scalars['Int']['input']>;
  transmission?: InputMaybe<Scalars['String']['input']>;
};

export type Feature = {
  __typename?: 'Feature';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type GeneralInfo = {
  __typename?: 'GeneralInfo';
  bodyType?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  passangerCapacity?: Maybe<Scalars['Int']['output']>;
};

export type GeneralInfoInput = {
  bodyType?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  passangerCapacity?: InputMaybe<Scalars['Int']['input']>;
};

export type Location = {
  __typename?: 'Location';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
};

export type LocationInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createClientCar?: Maybe<MutationClientCar>;
  deleteCar?: Maybe<MutationClientCar>;
};


export type MutationCreateClientCarArgs = {
  car?: InputMaybe<SellForm>;
};


export type MutationDeleteCarArgs = {
  id: Scalars['Int']['input'];
};

export type MutationClientCar = {
  __typename?: 'MutationClientCar';
  car?: Maybe<ClientCar>;
  isSuccess: Scalars['Boolean']['output'];
  message: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  clientCarimages?: Maybe<Array<Maybe<ClientCarImage>>>;
  clientCars?: Maybe<Array<Maybe<ClientCar>>>;
};

export type SellForm = {
  brand: Scalars['String']['input'];
  condition: Scalars['String']['input'];
  dimension?: InputMaybe<DimensionInput>;
  discription?: InputMaybe<Scalars['String']['input']>;
  engineDetails?: InputMaybe<EngineDetailsInput>;
  features?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  generalInfo?: InputMaybe<GeneralInfoInput>;
  location?: InputMaybe<LocationInput>;
  model: Scalars['String']['input'];
  picturesId?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  price?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateClientCarMutationVariables = Exact<{
  car?: InputMaybe<SellForm>;
}>;


export type CreateClientCarMutation = { __typename?: 'Mutation', createClientCar?: { __typename?: 'MutationClientCar', isSuccess: boolean } | null };

export type GetClientCarsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetClientCarsQuery = { __typename?: 'Query', clientCars?: Array<{ __typename?: 'ClientCar', id: number, brand: string, images?: Array<{ __typename?: 'ClientCarImage', id: number, name: string } | null> | null } | null> | null };

export type DeleteClientCarMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteClientCarMutation = { __typename?: 'Mutation', deleteCar?: { __typename?: 'MutationClientCar', isSuccess: boolean } | null };


export const CreateClientCarDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateClientCar"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"car"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SellForm"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createClientCar"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"car"},"value":{"kind":"Variable","name":{"kind":"Name","value":"car"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isSuccess"}}]}}]}}]} as unknown as DocumentNode<CreateClientCarMutation, CreateClientCarMutationVariables>;
export const GetClientCarsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClientCars"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientCars"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetClientCarsQuery, GetClientCarsQueryVariables>;
export const DeleteClientCarDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteClientCar"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCar"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isSuccess"}}]}}]}}]} as unknown as DocumentNode<DeleteClientCarMutation, DeleteClientCarMutationVariables>;
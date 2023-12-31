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
    "\n  mutation CreateClientCar($car: SellForm) {\n    createClientCar(car: $car) {\n      isSuccess\n    }\n  }\n": types.CreateClientCarDocument,
    "\n  query GetLists {\n    lists {\n      countries\n      cities\n      brands\n      models\n      years\n      bodyTypes\n      colors\n      fuelTypes\n      transmissions\n      drivetrains\n      features\n    }\n  }\n": types.GetListsDocument,
    "\n  query GetClientCars{\n    clientCars {\n      id\n      brand\n      images {\n        id\n        name\n      }\n    } \n  }\n": types.GetClientCarsDocument,
    "\n  mutation DeleteClientCar($id: Int!) {\n    deleteCar(id: $id) {\n      isSuccess\n    }\n  }\n": types.DeleteClientCarDocument,
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
export function graphql(source: "\n  mutation CreateClientCar($car: SellForm) {\n    createClientCar(car: $car) {\n      isSuccess\n    }\n  }\n"): (typeof documents)["\n  mutation CreateClientCar($car: SellForm) {\n    createClientCar(car: $car) {\n      isSuccess\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetLists {\n    lists {\n      countries\n      cities\n      brands\n      models\n      years\n      bodyTypes\n      colors\n      fuelTypes\n      transmissions\n      drivetrains\n      features\n    }\n  }\n"): (typeof documents)["\n  query GetLists {\n    lists {\n      countries\n      cities\n      brands\n      models\n      years\n      bodyTypes\n      colors\n      fuelTypes\n      transmissions\n      drivetrains\n      features\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetClientCars{\n    clientCars {\n      id\n      brand\n      images {\n        id\n        name\n      }\n    } \n  }\n"): (typeof documents)["\n  query GetClientCars{\n    clientCars {\n      id\n      brand\n      images {\n        id\n        name\n      }\n    } \n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteClientCar($id: Int!) {\n    deleteCar(id: $id) {\n      isSuccess\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteClientCar($id: Int!) {\n    deleteCar(id: $id) {\n      isSuccess\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
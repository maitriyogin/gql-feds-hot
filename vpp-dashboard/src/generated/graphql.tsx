import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Car = {
  __typename?: 'Car';
  batterySize?: Maybe<Scalars['Int']>;
  charger?: Maybe<Charger>;
  chargerId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  model?: Maybe<Scalars['String']>;
  modelYear?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  registrationNumber?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
  vin?: Maybe<Scalars['String']>;
};

export type CarInput = {
  batterySize?: InputMaybe<Scalars['Int']>;
  chargerId?: InputMaybe<Scalars['String']>;
  model?: InputMaybe<Scalars['String']>;
  modelYear?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  registrationNumber?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
  vin?: InputMaybe<Scalars['String']>;
};

export type CarUpdateInput = {
  batterySize?: InputMaybe<Scalars['Int']>;
  chargerId?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  model?: InputMaybe<Scalars['String']>;
  modelYear?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  registrationNumber?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
  vin?: InputMaybe<Scalars['String']>;
};

export type Charger = {
  __typename?: 'Charger';
  cars?: Maybe<Array<Maybe<Car>>>;
  color?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  productName?: Maybe<Scalars['String']>;
  serialNumber?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
  vendor?: Maybe<Scalars['String']>;
};

export type ChargerInput = {
  color?: InputMaybe<Scalars['String']>;
  productName?: InputMaybe<Scalars['String']>;
  serialNumber?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
  vendor?: InputMaybe<Scalars['String']>;
};

export type ChargerUpdateInput = {
  color?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  productName?: InputMaybe<Scalars['String']>;
  serialNumber?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
  vendor?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addCar?: Maybe<Car>;
  addCharger?: Maybe<Charger>;
  addUser?: Maybe<User>;
  deleteCar?: Maybe<Scalars['String']>;
  deleteCharger?: Maybe<Scalars['String']>;
  deleteUser?: Maybe<Scalars['String']>;
  updateCar?: Maybe<Car>;
  updateCharger?: Maybe<Charger>;
  updateUser?: Maybe<User>;
};


export type MutationAddCarArgs = {
  car: CarInput;
};


export type MutationAddChargerArgs = {
  charger: ChargerInput;
};


export type MutationAddUserArgs = {
  user: UserInput;
};


export type MutationDeleteCarArgs = {
  id: Scalars['String'];
};


export type MutationDeleteChargerArgs = {
  id: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};


export type MutationUpdateCarArgs = {
  car: CarUpdateInput;
};


export type MutationUpdateChargerArgs = {
  charger: ChargerUpdateInput;
};


export type MutationUpdateUserArgs = {
  user: UserUpdateInput;
};

export type Query = {
  __typename?: 'Query';
  cars?: Maybe<Array<Maybe<Car>>>;
  chargers?: Maybe<Array<Maybe<Charger>>>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type User = {
  __typename?: 'User';
  address?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  cars?: Maybe<Array<Maybe<Car>>>;
  chargers?: Maybe<Array<Maybe<Charger>>>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  nationalSecurity?: Maybe<Scalars['String']>;
};

export type UserInput = {
  address?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  nationalSecurity?: InputMaybe<Scalars['String']>;
};

export type UserUpdateInput = {
  address?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  lastName?: InputMaybe<Scalars['String']>;
  nationalSecurity?: InputMaybe<Scalars['String']>;
};

export type UserFragmentFragment = { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, address?: string | null, email?: string | null, nationalSecurity?: string | null, age?: number | null };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, address?: string | null, email?: string | null, nationalSecurity?: string | null, age?: number | null } | null> | null };

export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  id
  firstName
  lastName
  address
  email
  address
  nationalSecurity
  age
}
    `;
export const UsersDocument = gql`
    query Users {
  users {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
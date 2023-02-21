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

export enum TypeReps {
  Isometria = 'ISOMETRIA',
  Repeticoes = 'REPETICOES',
  RepeticoesMaximo = 'REPETICOES_MAXIMO',
  Tempo = 'TEMPO'
}

export enum TypeTime {
  Minutos = 'MINUTOS',
  Segundos = 'SEGUNDOS'
}

export enum TypeWeights {
  Kg = 'KG',
  Placas = 'PLACAS'
}

export type Workout = {
  __typename?: 'Workout';
  gifName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  reps?: Maybe<Array<Maybe<Scalars['Int']>>>;
  rest?: Maybe<Scalars['Int']>;
  sets?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['Int']>;
  typeReps: TypeReps;
  typeRest?: Maybe<TypeTime>;
  typeTime?: Maybe<TypeTime>;
  typeWeights?: Maybe<TypeWeights>;
  weights?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type Worksheets = {
  __typename?: 'Worksheets';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  workouts?: Maybe<Array<Maybe<Workout>>>;
};

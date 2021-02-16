import { GraphQLResolveInfo } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Calendar = {
  __typename?: 'Calendar';
  day?: Maybe<Scalars['Int']>;
  day_id?: Maybe<Scalars['String']>;
  day_of_week?: Maybe<Scalars['Int']>;
  day_of_year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  quarter?: Maybe<Scalars['Int']>;
  week_of_year?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type Event = {
  __typename?: 'Event';
  eventId: Scalars['ID'];
  journal?: Maybe<Journal>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
};

export type Journal = {
  __typename?: 'Journal';
  id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createEvent: Event;
  getAccessToken: Auth;
  getToken: Auth;
  signIn: Auth;
  signUp: Auth;
};


export type MutationGetAccessTokenArgs = {
  refreshToken: Scalars['String'];
};


export type MutationGetTokenArgs = {
  refreshToken: Scalars['String'];
};


export type MutationSignInArgs = {
  data: LoginInput;
};


export type MutationSignUpArgs = {
  data: SignupInput;
};

export type Query = {
  __typename?: 'Query';
  date?: Maybe<Calendar>;
  dates?: Maybe<Array<Maybe<Calendar>>>;
  me?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryMeArgs = {
  id: Scalars['Int'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SignupInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  profile: ProfileInput;
};

export type ProfileInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  profile?: Maybe<Profile>;
};

export type Profile = {
  __typename?: 'Profile';
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  lastName?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
};

export type Auth = {
  __typename?: 'Auth';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
  token: Scalars['String'];
  user: User;
};

export type GetTodayQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodayQuery = (
  { __typename?: 'Query' }
  & { date?: Maybe<(
    { __typename?: 'Calendar' }
    & Pick<Calendar, 'day' | 'month' | 'week_of_year'>
  )> }
);


export const GetTodayDocument = gql`
    query getToday {
  date {
    day
    month
    week_of_year
  }
}
    `;

/**
 * __useGetTodayQuery__
 *
 * To run a query within a React component, call `useGetTodayQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodayQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodayQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTodayQuery(baseOptions?: Apollo.QueryHookOptions<GetTodayQuery, GetTodayQueryVariables>) {
        return Apollo.useQuery<GetTodayQuery, GetTodayQueryVariables>(GetTodayDocument, baseOptions);
      }
export function useGetTodayLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodayQuery, GetTodayQueryVariables>) {
          return Apollo.useLazyQuery<GetTodayQuery, GetTodayQueryVariables>(GetTodayDocument, baseOptions);
        }
export type GetTodayQueryHookResult = ReturnType<typeof useGetTodayQuery>;
export type GetTodayLazyQueryHookResult = ReturnType<typeof useGetTodayLazyQuery>;
export type GetTodayQueryResult = Apollo.QueryResult<GetTodayQuery, GetTodayQueryVariables>;


export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Calendar: ResolverTypeWrapper<Calendar>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Event: ResolverTypeWrapper<Event>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Journal: ResolverTypeWrapper<Journal>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  LoginInput: LoginInput;
  SignupInput: SignupInput;
  ProfileInput: ProfileInput;
  User: ResolverTypeWrapper<User>;
  Profile: ResolverTypeWrapper<Profile>;
  Auth: ResolverTypeWrapper<Auth>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Calendar: Calendar;
  Int: Scalars['Int'];
  String: Scalars['String'];
  Event: Event;
  ID: Scalars['ID'];
  Journal: Journal;
  Mutation: {};
  Query: {};
  LoginInput: LoginInput;
  SignupInput: SignupInput;
  ProfileInput: ProfileInput;
  User: User;
  Profile: Profile;
  Auth: Auth;
  Boolean: Scalars['Boolean'];
};

export type CalendarResolvers<ContextType = any, ParentType extends ResolversParentTypes['Calendar'] = ResolversParentTypes['Calendar']> = {
  day?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  day_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  day_of_week?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  day_of_year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  month?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  quarter?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  week_of_year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventResolvers<ContextType = any, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = {
  eventId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  journal?: Resolver<Maybe<ResolversTypes['Journal']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JournalResolvers<ContextType = any, ParentType extends ResolversParentTypes['Journal'] = ResolversParentTypes['Journal']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createEvent?: Resolver<ResolversTypes['Event'], ParentType, ContextType>;
  getAccessToken?: Resolver<ResolversTypes['Auth'], ParentType, ContextType, RequireFields<MutationGetAccessTokenArgs, 'refreshToken'>>;
  getToken?: Resolver<ResolversTypes['Auth'], ParentType, ContextType, RequireFields<MutationGetTokenArgs, 'refreshToken'>>;
  signIn?: Resolver<ResolversTypes['Auth'], ParentType, ContextType, RequireFields<MutationSignInArgs, 'data'>>;
  signUp?: Resolver<ResolversTypes['Auth'], ParentType, ContextType, RequireFields<MutationSignUpArgs, 'data'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  date?: Resolver<Maybe<ResolversTypes['Calendar']>, ParentType, ContextType>;
  dates?: Resolver<Maybe<Array<Maybe<ResolversTypes['Calendar']>>>, ParentType, ContextType>;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryMeArgs, 'id'>>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['Profile']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['Profile'] = ResolversParentTypes['Profile']> = {
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthResolvers<ContextType = any, ParentType extends ResolversParentTypes['Auth'] = ResolversParentTypes['Auth']> = {
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refreshToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Calendar?: CalendarResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  Journal?: JournalResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Profile?: ProfileResolvers<ContextType>;
  Auth?: AuthResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

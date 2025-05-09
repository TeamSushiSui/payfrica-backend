
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model AccountDetails
 * 
 */
export type AccountDetails = $Result.DefaultSelection<Prisma.$AccountDetailsPayload>
/**
 * Model Country
 * 
 */
export type Country = $Result.DefaultSelection<Prisma.$CountryPayload>
/**
 * Model Tokens
 * 
 */
export type Tokens = $Result.DefaultSelection<Prisma.$TokensPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model PayfricaAgents
 * 
 */
export type PayfricaAgents = $Result.DefaultSelection<Prisma.$PayfricaAgentsPayload>
/**
 * Model Agent
 * 
 */
export type Agent = $Result.DefaultSelection<Prisma.$AgentPayload>
/**
 * Model WithdrawRequest
 * 
 */
export type WithdrawRequest = $Result.DefaultSelection<Prisma.$WithdrawRequestPayload>
/**
 * Model DepositRequest
 * 
 */
export type DepositRequest = $Result.DefaultSelection<Prisma.$DepositRequestPayload>
/**
 * Model Cursor
 * 
 */
export type Cursor = $Result.DefaultSelection<Prisma.$CursorPayload>
/**
 * Model Pool
 * 
 */
export type Pool = $Result.DefaultSelection<Prisma.$PoolPayload>
/**
 * Model LiquidityProvider
 * 
 */
export type LiquidityProvider = $Result.DefaultSelection<Prisma.$LiquidityProviderPayload>
/**
 * Model SwapFee
 * 
 */
export type SwapFee = $Result.DefaultSelection<Prisma.$SwapFeePayload>
/**
 * Model PoolEvent
 * 
 */
export type PoolEvent = $Result.DefaultSelection<Prisma.$PoolEventPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TransactionType: {
  SWAP: 'SWAP',
  SEND: 'SEND',
  RECEIVE: 'RECEIVE',
  DEPOSIT: 'DEPOSIT',
  WITHDRAW: 'WITHDRAW'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]


export const TransactionStatus: {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]


export const WithdrawStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type WithdrawStatus = (typeof WithdrawStatus)[keyof typeof WithdrawStatus]


export const DepositStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type DepositStatus = (typeof DepositStatus)[keyof typeof DepositStatus]

}

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

export type WithdrawStatus = $Enums.WithdrawStatus

export const WithdrawStatus: typeof $Enums.WithdrawStatus

export type DepositStatus = $Enums.DepositStatus

export const DepositStatus: typeof $Enums.DepositStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accountDetails`: Exposes CRUD operations for the **AccountDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccountDetails
    * const accountDetails = await prisma.accountDetails.findMany()
    * ```
    */
  get accountDetails(): Prisma.AccountDetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.country`: Exposes CRUD operations for the **Country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.CountryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tokens`: Exposes CRUD operations for the **Tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.tokens.findMany()
    * ```
    */
  get tokens(): Prisma.TokensDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payfricaAgents`: Exposes CRUD operations for the **PayfricaAgents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PayfricaAgents
    * const payfricaAgents = await prisma.payfricaAgents.findMany()
    * ```
    */
  get payfricaAgents(): Prisma.PayfricaAgentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agent`: Exposes CRUD operations for the **Agent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agents
    * const agents = await prisma.agent.findMany()
    * ```
    */
  get agent(): Prisma.AgentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.withdrawRequest`: Exposes CRUD operations for the **WithdrawRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WithdrawRequests
    * const withdrawRequests = await prisma.withdrawRequest.findMany()
    * ```
    */
  get withdrawRequest(): Prisma.WithdrawRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.depositRequest`: Exposes CRUD operations for the **DepositRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DepositRequests
    * const depositRequests = await prisma.depositRequest.findMany()
    * ```
    */
  get depositRequest(): Prisma.DepositRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cursor`: Exposes CRUD operations for the **Cursor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cursors
    * const cursors = await prisma.cursor.findMany()
    * ```
    */
  get cursor(): Prisma.CursorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pool`: Exposes CRUD operations for the **Pool** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pools
    * const pools = await prisma.pool.findMany()
    * ```
    */
  get pool(): Prisma.PoolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.liquidityProvider`: Exposes CRUD operations for the **LiquidityProvider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LiquidityProviders
    * const liquidityProviders = await prisma.liquidityProvider.findMany()
    * ```
    */
  get liquidityProvider(): Prisma.LiquidityProviderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.swapFee`: Exposes CRUD operations for the **SwapFee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SwapFees
    * const swapFees = await prisma.swapFee.findMany()
    * ```
    */
  get swapFee(): Prisma.SwapFeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.poolEvent`: Exposes CRUD operations for the **PoolEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PoolEvents
    * const poolEvents = await prisma.poolEvent.findMany()
    * ```
    */
  get poolEvent(): Prisma.PoolEventDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    AccountDetails: 'AccountDetails',
    Country: 'Country',
    Tokens: 'Tokens',
    Transaction: 'Transaction',
    PayfricaAgents: 'PayfricaAgents',
    Agent: 'Agent',
    WithdrawRequest: 'WithdrawRequest',
    DepositRequest: 'DepositRequest',
    Cursor: 'Cursor',
    Pool: 'Pool',
    LiquidityProvider: 'LiquidityProvider',
    SwapFee: 'SwapFee',
    PoolEvent: 'PoolEvent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "accountDetails" | "country" | "tokens" | "transaction" | "payfricaAgents" | "agent" | "withdrawRequest" | "depositRequest" | "cursor" | "pool" | "liquidityProvider" | "swapFee" | "poolEvent"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      AccountDetails: {
        payload: Prisma.$AccountDetailsPayload<ExtArgs>
        fields: Prisma.AccountDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDetailsPayload>
          }
          findFirst: {
            args: Prisma.AccountDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDetailsPayload>
          }
          findMany: {
            args: Prisma.AccountDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDetailsPayload>[]
          }
          create: {
            args: Prisma.AccountDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDetailsPayload>
          }
          createMany: {
            args: Prisma.AccountDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccountDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDetailsPayload>
          }
          update: {
            args: Prisma.AccountDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDetailsPayload>
          }
          deleteMany: {
            args: Prisma.AccountDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDetailsPayload>
          }
          aggregate: {
            args: Prisma.AccountDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccountDetails>
          }
          groupBy: {
            args: Prisma.AccountDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountDetailsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AccountDetailsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AccountDetailsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AccountDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<AccountDetailsCountAggregateOutputType> | number
          }
        }
      }
      Country: {
        payload: Prisma.$CountryPayload<ExtArgs>
        fields: Prisma.CountryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findFirst: {
            args: Prisma.CountryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findMany: {
            args: Prisma.CountryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          create: {
            args: Prisma.CountryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          createMany: {
            args: Prisma.CountryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CountryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          update: {
            args: Prisma.CountryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          deleteMany: {
            args: Prisma.CountryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CountryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CountryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          aggregate: {
            args: Prisma.CountryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountry>
          }
          groupBy: {
            args: Prisma.CountryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CountryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CountryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CountryCountArgs<ExtArgs>
            result: $Utils.Optional<CountryCountAggregateOutputType> | number
          }
        }
      }
      Tokens: {
        payload: Prisma.$TokensPayload<ExtArgs>
        fields: Prisma.TokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          findFirst: {
            args: Prisma.TokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          findMany: {
            args: Prisma.TokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>[]
          }
          create: {
            args: Prisma.TokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          createMany: {
            args: Prisma.TokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          update: {
            args: Prisma.TokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          deleteMany: {
            args: Prisma.TokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          aggregate: {
            args: Prisma.TokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokens>
          }
          groupBy: {
            args: Prisma.TokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokensGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TokensFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TokensAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TokensCountArgs<ExtArgs>
            result: $Utils.Optional<TokensCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TransactionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TransactionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      PayfricaAgents: {
        payload: Prisma.$PayfricaAgentsPayload<ExtArgs>
        fields: Prisma.PayfricaAgentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayfricaAgentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayfricaAgentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayfricaAgentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayfricaAgentsPayload>
          }
          findFirst: {
            args: Prisma.PayfricaAgentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayfricaAgentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayfricaAgentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayfricaAgentsPayload>
          }
          findMany: {
            args: Prisma.PayfricaAgentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayfricaAgentsPayload>[]
          }
          create: {
            args: Prisma.PayfricaAgentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayfricaAgentsPayload>
          }
          createMany: {
            args: Prisma.PayfricaAgentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PayfricaAgentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayfricaAgentsPayload>
          }
          update: {
            args: Prisma.PayfricaAgentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayfricaAgentsPayload>
          }
          deleteMany: {
            args: Prisma.PayfricaAgentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayfricaAgentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PayfricaAgentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayfricaAgentsPayload>
          }
          aggregate: {
            args: Prisma.PayfricaAgentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayfricaAgents>
          }
          groupBy: {
            args: Prisma.PayfricaAgentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayfricaAgentsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PayfricaAgentsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PayfricaAgentsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PayfricaAgentsCountArgs<ExtArgs>
            result: $Utils.Optional<PayfricaAgentsCountAggregateOutputType> | number
          }
        }
      }
      Agent: {
        payload: Prisma.$AgentPayload<ExtArgs>
        fields: Prisma.AgentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          findFirst: {
            args: Prisma.AgentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          findMany: {
            args: Prisma.AgentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          create: {
            args: Prisma.AgentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          createMany: {
            args: Prisma.AgentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AgentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          update: {
            args: Prisma.AgentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          deleteMany: {
            args: Prisma.AgentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AgentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          aggregate: {
            args: Prisma.AgentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgent>
          }
          groupBy: {
            args: Prisma.AgentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AgentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AgentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AgentCountArgs<ExtArgs>
            result: $Utils.Optional<AgentCountAggregateOutputType> | number
          }
        }
      }
      WithdrawRequest: {
        payload: Prisma.$WithdrawRequestPayload<ExtArgs>
        fields: Prisma.WithdrawRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WithdrawRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WithdrawRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawRequestPayload>
          }
          findFirst: {
            args: Prisma.WithdrawRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WithdrawRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawRequestPayload>
          }
          findMany: {
            args: Prisma.WithdrawRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawRequestPayload>[]
          }
          create: {
            args: Prisma.WithdrawRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawRequestPayload>
          }
          createMany: {
            args: Prisma.WithdrawRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WithdrawRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawRequestPayload>
          }
          update: {
            args: Prisma.WithdrawRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawRequestPayload>
          }
          deleteMany: {
            args: Prisma.WithdrawRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WithdrawRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WithdrawRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawRequestPayload>
          }
          aggregate: {
            args: Prisma.WithdrawRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWithdrawRequest>
          }
          groupBy: {
            args: Prisma.WithdrawRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<WithdrawRequestGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.WithdrawRequestFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.WithdrawRequestAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.WithdrawRequestCountArgs<ExtArgs>
            result: $Utils.Optional<WithdrawRequestCountAggregateOutputType> | number
          }
        }
      }
      DepositRequest: {
        payload: Prisma.$DepositRequestPayload<ExtArgs>
        fields: Prisma.DepositRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepositRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepositRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositRequestPayload>
          }
          findFirst: {
            args: Prisma.DepositRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepositRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositRequestPayload>
          }
          findMany: {
            args: Prisma.DepositRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositRequestPayload>[]
          }
          create: {
            args: Prisma.DepositRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositRequestPayload>
          }
          createMany: {
            args: Prisma.DepositRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DepositRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositRequestPayload>
          }
          update: {
            args: Prisma.DepositRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositRequestPayload>
          }
          deleteMany: {
            args: Prisma.DepositRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepositRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DepositRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositRequestPayload>
          }
          aggregate: {
            args: Prisma.DepositRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepositRequest>
          }
          groupBy: {
            args: Prisma.DepositRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepositRequestGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DepositRequestFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DepositRequestAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DepositRequestCountArgs<ExtArgs>
            result: $Utils.Optional<DepositRequestCountAggregateOutputType> | number
          }
        }
      }
      Cursor: {
        payload: Prisma.$CursorPayload<ExtArgs>
        fields: Prisma.CursorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CursorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CursorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursorPayload>
          }
          findFirst: {
            args: Prisma.CursorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CursorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursorPayload>
          }
          findMany: {
            args: Prisma.CursorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursorPayload>[]
          }
          create: {
            args: Prisma.CursorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursorPayload>
          }
          createMany: {
            args: Prisma.CursorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CursorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursorPayload>
          }
          update: {
            args: Prisma.CursorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursorPayload>
          }
          deleteMany: {
            args: Prisma.CursorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CursorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CursorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursorPayload>
          }
          aggregate: {
            args: Prisma.CursorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCursor>
          }
          groupBy: {
            args: Prisma.CursorGroupByArgs<ExtArgs>
            result: $Utils.Optional<CursorGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CursorFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CursorAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CursorCountArgs<ExtArgs>
            result: $Utils.Optional<CursorCountAggregateOutputType> | number
          }
        }
      }
      Pool: {
        payload: Prisma.$PoolPayload<ExtArgs>
        fields: Prisma.PoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload>
          }
          findFirst: {
            args: Prisma.PoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload>
          }
          findMany: {
            args: Prisma.PoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload>[]
          }
          create: {
            args: Prisma.PoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload>
          }
          createMany: {
            args: Prisma.PoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload>
          }
          update: {
            args: Prisma.PoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload>
          }
          deleteMany: {
            args: Prisma.PoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload>
          }
          aggregate: {
            args: Prisma.PoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePool>
          }
          groupBy: {
            args: Prisma.PoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<PoolGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PoolFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PoolAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PoolCountArgs<ExtArgs>
            result: $Utils.Optional<PoolCountAggregateOutputType> | number
          }
        }
      }
      LiquidityProvider: {
        payload: Prisma.$LiquidityProviderPayload<ExtArgs>
        fields: Prisma.LiquidityProviderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LiquidityProviderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiquidityProviderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LiquidityProviderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiquidityProviderPayload>
          }
          findFirst: {
            args: Prisma.LiquidityProviderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiquidityProviderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LiquidityProviderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiquidityProviderPayload>
          }
          findMany: {
            args: Prisma.LiquidityProviderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiquidityProviderPayload>[]
          }
          create: {
            args: Prisma.LiquidityProviderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiquidityProviderPayload>
          }
          createMany: {
            args: Prisma.LiquidityProviderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LiquidityProviderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiquidityProviderPayload>
          }
          update: {
            args: Prisma.LiquidityProviderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiquidityProviderPayload>
          }
          deleteMany: {
            args: Prisma.LiquidityProviderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LiquidityProviderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LiquidityProviderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiquidityProviderPayload>
          }
          aggregate: {
            args: Prisma.LiquidityProviderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLiquidityProvider>
          }
          groupBy: {
            args: Prisma.LiquidityProviderGroupByArgs<ExtArgs>
            result: $Utils.Optional<LiquidityProviderGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.LiquidityProviderFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.LiquidityProviderAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.LiquidityProviderCountArgs<ExtArgs>
            result: $Utils.Optional<LiquidityProviderCountAggregateOutputType> | number
          }
        }
      }
      SwapFee: {
        payload: Prisma.$SwapFeePayload<ExtArgs>
        fields: Prisma.SwapFeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SwapFeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwapFeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SwapFeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwapFeePayload>
          }
          findFirst: {
            args: Prisma.SwapFeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwapFeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SwapFeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwapFeePayload>
          }
          findMany: {
            args: Prisma.SwapFeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwapFeePayload>[]
          }
          create: {
            args: Prisma.SwapFeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwapFeePayload>
          }
          createMany: {
            args: Prisma.SwapFeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SwapFeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwapFeePayload>
          }
          update: {
            args: Prisma.SwapFeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwapFeePayload>
          }
          deleteMany: {
            args: Prisma.SwapFeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SwapFeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SwapFeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwapFeePayload>
          }
          aggregate: {
            args: Prisma.SwapFeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSwapFee>
          }
          groupBy: {
            args: Prisma.SwapFeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SwapFeeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SwapFeeFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SwapFeeAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SwapFeeCountArgs<ExtArgs>
            result: $Utils.Optional<SwapFeeCountAggregateOutputType> | number
          }
        }
      }
      PoolEvent: {
        payload: Prisma.$PoolEventPayload<ExtArgs>
        fields: Prisma.PoolEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PoolEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PoolEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolEventPayload>
          }
          findFirst: {
            args: Prisma.PoolEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PoolEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolEventPayload>
          }
          findMany: {
            args: Prisma.PoolEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolEventPayload>[]
          }
          create: {
            args: Prisma.PoolEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolEventPayload>
          }
          createMany: {
            args: Prisma.PoolEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PoolEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolEventPayload>
          }
          update: {
            args: Prisma.PoolEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolEventPayload>
          }
          deleteMany: {
            args: Prisma.PoolEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PoolEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PoolEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolEventPayload>
          }
          aggregate: {
            args: Prisma.PoolEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePoolEvent>
          }
          groupBy: {
            args: Prisma.PoolEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<PoolEventGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PoolEventFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PoolEventAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PoolEventCountArgs<ExtArgs>
            result: $Utils.Optional<PoolEventCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    accountDetails?: AccountDetailsOmit
    country?: CountryOmit
    tokens?: TokensOmit
    transaction?: TransactionOmit
    payfricaAgents?: PayfricaAgentsOmit
    agent?: AgentOmit
    withdrawRequest?: WithdrawRequestOmit
    depositRequest?: DepositRequestOmit
    cursor?: CursorOmit
    pool?: PoolOmit
    liquidityProvider?: LiquidityProviderOmit
    swapFee?: SwapFeeOmit
    poolEvent?: PoolEventOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    transactions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type CountryCountOutputType
   */

  export type CountryCountOutputType = {
    User: number
  }

  export type CountryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | CountryCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCountOutputType
     */
    select?: CountryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type TokensCountOutputType
   */

  export type TokensCountOutputType = {
    Country: number
  }

  export type TokensCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Country?: boolean | TokensCountOutputTypeCountCountryArgs
  }

  // Custom InputTypes
  /**
   * TokensCountOutputType without action
   */
  export type TokensCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokensCountOutputType
     */
    select?: TokensCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TokensCountOutputType without action
   */
  export type TokensCountOutputTypeCountCountryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
  }


  /**
   * Count Type PoolCountOutputType
   */

  export type PoolCountOutputType = {
    liquidityProviders: number
    swapFees: number
  }

  export type PoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    liquidityProviders?: boolean | PoolCountOutputTypeCountLiquidityProvidersArgs
    swapFees?: boolean | PoolCountOutputTypeCountSwapFeesArgs
  }

  // Custom InputTypes
  /**
   * PoolCountOutputType without action
   */
  export type PoolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolCountOutputType
     */
    select?: PoolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PoolCountOutputType without action
   */
  export type PoolCountOutputTypeCountLiquidityProvidersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LiquidityProviderWhereInput
  }

  /**
   * PoolCountOutputType without action
   */
  export type PoolCountOutputTypeCountSwapFeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SwapFeeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    address: string | null
    username: string | null
    language: string | null
    countryname: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    address: string | null
    username: string | null
    language: string | null
    countryname: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    address: number
    username: number
    language: number
    countryname: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    address?: true
    username?: true
    language?: true
    countryname?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    address?: true
    username?: true
    language?: true
    countryname?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    address?: true
    username?: true
    language?: true
    countryname?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    address: string
    username: string | null
    language: string
    countryname: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    address?: boolean
    username?: boolean
    language?: boolean
    countryname?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    country?: boolean | User$countryArgs<ExtArgs>
    accountDetails?: boolean | User$accountDetailsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    address?: boolean
    username?: boolean
    language?: boolean
    countryname?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"address" | "username" | "language" | "countryname" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | User$countryArgs<ExtArgs>
    accountDetails?: boolean | User$accountDetailsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      country: Prisma.$CountryPayload<ExtArgs> | null
      accountDetails: Prisma.$AccountDetailsPayload<ExtArgs> | null
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      address: string
      username: string | null
      language: string
      countryname: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `address`
     * const userWithAddressOnly = await prisma.user.findMany({ select: { address: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    country<T extends User$countryArgs<ExtArgs> = {}>(args?: Subset<T, User$countryArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    accountDetails<T extends User$accountDetailsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountDetailsArgs<ExtArgs>>): Prisma__AccountDetailsClient<$Result.GetResult<Prisma.$AccountDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly address: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly language: FieldRef<"User", 'String'>
    readonly countryname: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.country
   */
  export type User$countryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    where?: CountryWhereInput
  }

  /**
   * User.accountDetails
   */
  export type User$accountDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDetails
     */
    select?: AccountDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDetails
     */
    omit?: AccountDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDetailsInclude<ExtArgs> | null
    where?: AccountDetailsWhereInput
  }

  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model AccountDetails
   */

  export type AggregateAccountDetails = {
    _count: AccountDetailsCountAggregateOutputType | null
    _min: AccountDetailsMinAggregateOutputType | null
    _max: AccountDetailsMaxAggregateOutputType | null
  }

  export type AccountDetailsMinAggregateOutputType = {
    id: string | null
    accountNumber: string | null
    name: string | null
    bank: string | null
    userId: string | null
  }

  export type AccountDetailsMaxAggregateOutputType = {
    id: string | null
    accountNumber: string | null
    name: string | null
    bank: string | null
    userId: string | null
  }

  export type AccountDetailsCountAggregateOutputType = {
    id: number
    accountNumber: number
    name: number
    bank: number
    userId: number
    _all: number
  }


  export type AccountDetailsMinAggregateInputType = {
    id?: true
    accountNumber?: true
    name?: true
    bank?: true
    userId?: true
  }

  export type AccountDetailsMaxAggregateInputType = {
    id?: true
    accountNumber?: true
    name?: true
    bank?: true
    userId?: true
  }

  export type AccountDetailsCountAggregateInputType = {
    id?: true
    accountNumber?: true
    name?: true
    bank?: true
    userId?: true
    _all?: true
  }

  export type AccountDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountDetails to aggregate.
     */
    where?: AccountDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountDetails to fetch.
     */
    orderBy?: AccountDetailsOrderByWithRelationInput | AccountDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccountDetails
    **/
    _count?: true | AccountDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountDetailsMaxAggregateInputType
  }

  export type GetAccountDetailsAggregateType<T extends AccountDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateAccountDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccountDetails[P]>
      : GetScalarType<T[P], AggregateAccountDetails[P]>
  }




  export type AccountDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountDetailsWhereInput
    orderBy?: AccountDetailsOrderByWithAggregationInput | AccountDetailsOrderByWithAggregationInput[]
    by: AccountDetailsScalarFieldEnum[] | AccountDetailsScalarFieldEnum
    having?: AccountDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountDetailsCountAggregateInputType | true
    _min?: AccountDetailsMinAggregateInputType
    _max?: AccountDetailsMaxAggregateInputType
  }

  export type AccountDetailsGroupByOutputType = {
    id: string
    accountNumber: string
    name: string
    bank: string
    userId: string
    _count: AccountDetailsCountAggregateOutputType | null
    _min: AccountDetailsMinAggregateOutputType | null
    _max: AccountDetailsMaxAggregateOutputType | null
  }

  type GetAccountDetailsGroupByPayload<T extends AccountDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], AccountDetailsGroupByOutputType[P]>
        }
      >
    >


  export type AccountDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountNumber?: boolean
    name?: boolean
    bank?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountDetails"]>



  export type AccountDetailsSelectScalar = {
    id?: boolean
    accountNumber?: boolean
    name?: boolean
    bank?: boolean
    userId?: boolean
  }

  export type AccountDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountNumber" | "name" | "bank" | "userId", ExtArgs["result"]["accountDetails"]>
  export type AccountDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccountDetails"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountNumber: string
      name: string
      bank: string
      userId: string
    }, ExtArgs["result"]["accountDetails"]>
    composites: {}
  }

  type AccountDetailsGetPayload<S extends boolean | null | undefined | AccountDetailsDefaultArgs> = $Result.GetResult<Prisma.$AccountDetailsPayload, S>

  type AccountDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountDetailsCountAggregateInputType | true
    }

  export interface AccountDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccountDetails'], meta: { name: 'AccountDetails' } }
    /**
     * Find zero or one AccountDetails that matches the filter.
     * @param {AccountDetailsFindUniqueArgs} args - Arguments to find a AccountDetails
     * @example
     * // Get one AccountDetails
     * const accountDetails = await prisma.accountDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountDetailsFindUniqueArgs>(args: SelectSubset<T, AccountDetailsFindUniqueArgs<ExtArgs>>): Prisma__AccountDetailsClient<$Result.GetResult<Prisma.$AccountDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AccountDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountDetailsFindUniqueOrThrowArgs} args - Arguments to find a AccountDetails
     * @example
     * // Get one AccountDetails
     * const accountDetails = await prisma.accountDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountDetailsClient<$Result.GetResult<Prisma.$AccountDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccountDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountDetailsFindFirstArgs} args - Arguments to find a AccountDetails
     * @example
     * // Get one AccountDetails
     * const accountDetails = await prisma.accountDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountDetailsFindFirstArgs>(args?: SelectSubset<T, AccountDetailsFindFirstArgs<ExtArgs>>): Prisma__AccountDetailsClient<$Result.GetResult<Prisma.$AccountDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccountDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountDetailsFindFirstOrThrowArgs} args - Arguments to find a AccountDetails
     * @example
     * // Get one AccountDetails
     * const accountDetails = await prisma.accountDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountDetailsClient<$Result.GetResult<Prisma.$AccountDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AccountDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccountDetails
     * const accountDetails = await prisma.accountDetails.findMany()
     * 
     * // Get first 10 AccountDetails
     * const accountDetails = await prisma.accountDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountDetailsWithIdOnly = await prisma.accountDetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountDetailsFindManyArgs>(args?: SelectSubset<T, AccountDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AccountDetails.
     * @param {AccountDetailsCreateArgs} args - Arguments to create a AccountDetails.
     * @example
     * // Create one AccountDetails
     * const AccountDetails = await prisma.accountDetails.create({
     *   data: {
     *     // ... data to create a AccountDetails
     *   }
     * })
     * 
     */
    create<T extends AccountDetailsCreateArgs>(args: SelectSubset<T, AccountDetailsCreateArgs<ExtArgs>>): Prisma__AccountDetailsClient<$Result.GetResult<Prisma.$AccountDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AccountDetails.
     * @param {AccountDetailsCreateManyArgs} args - Arguments to create many AccountDetails.
     * @example
     * // Create many AccountDetails
     * const accountDetails = await prisma.accountDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountDetailsCreateManyArgs>(args?: SelectSubset<T, AccountDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AccountDetails.
     * @param {AccountDetailsDeleteArgs} args - Arguments to delete one AccountDetails.
     * @example
     * // Delete one AccountDetails
     * const AccountDetails = await prisma.accountDetails.delete({
     *   where: {
     *     // ... filter to delete one AccountDetails
     *   }
     * })
     * 
     */
    delete<T extends AccountDetailsDeleteArgs>(args: SelectSubset<T, AccountDetailsDeleteArgs<ExtArgs>>): Prisma__AccountDetailsClient<$Result.GetResult<Prisma.$AccountDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AccountDetails.
     * @param {AccountDetailsUpdateArgs} args - Arguments to update one AccountDetails.
     * @example
     * // Update one AccountDetails
     * const accountDetails = await prisma.accountDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountDetailsUpdateArgs>(args: SelectSubset<T, AccountDetailsUpdateArgs<ExtArgs>>): Prisma__AccountDetailsClient<$Result.GetResult<Prisma.$AccountDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AccountDetails.
     * @param {AccountDetailsDeleteManyArgs} args - Arguments to filter AccountDetails to delete.
     * @example
     * // Delete a few AccountDetails
     * const { count } = await prisma.accountDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDetailsDeleteManyArgs>(args?: SelectSubset<T, AccountDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccountDetails
     * const accountDetails = await prisma.accountDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountDetailsUpdateManyArgs>(args: SelectSubset<T, AccountDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AccountDetails.
     * @param {AccountDetailsUpsertArgs} args - Arguments to update or create a AccountDetails.
     * @example
     * // Update or create a AccountDetails
     * const accountDetails = await prisma.accountDetails.upsert({
     *   create: {
     *     // ... data to create a AccountDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccountDetails we want to update
     *   }
     * })
     */
    upsert<T extends AccountDetailsUpsertArgs>(args: SelectSubset<T, AccountDetailsUpsertArgs<ExtArgs>>): Prisma__AccountDetailsClient<$Result.GetResult<Prisma.$AccountDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AccountDetails that matches the filter.
     * @param {AccountDetailsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const accountDetails = await prisma.accountDetails.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AccountDetailsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a AccountDetails.
     * @param {AccountDetailsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const accountDetails = await prisma.accountDetails.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AccountDetailsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of AccountDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountDetailsCountArgs} args - Arguments to filter AccountDetails to count.
     * @example
     * // Count the number of AccountDetails
     * const count = await prisma.accountDetails.count({
     *   where: {
     *     // ... the filter for the AccountDetails we want to count
     *   }
     * })
    **/
    count<T extends AccountDetailsCountArgs>(
      args?: Subset<T, AccountDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccountDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountDetailsAggregateArgs>(args: Subset<T, AccountDetailsAggregateArgs>): Prisma.PrismaPromise<GetAccountDetailsAggregateType<T>>

    /**
     * Group by AccountDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountDetailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountDetailsGroupByArgs['orderBy'] }
        : { orderBy?: AccountDetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccountDetails model
   */
  readonly fields: AccountDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccountDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AccountDetails model
   */
  interface AccountDetailsFieldRefs {
    readonly id: FieldRef<"AccountDetails", 'String'>
    readonly accountNumber: FieldRef<"AccountDetails", 'String'>
    readonly name: FieldRef<"AccountDetails", 'String'>
    readonly bank: FieldRef<"AccountDetails", 'String'>
    readonly userId: FieldRef<"AccountDetails", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AccountDetails findUnique
   */
  export type AccountDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDetails
     */
    select?: AccountDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDetails
     */
    omit?: AccountDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDetailsInclude<ExtArgs> | null
    /**
     * Filter, which AccountDetails to fetch.
     */
    where: AccountDetailsWhereUniqueInput
  }

  /**
   * AccountDetails findUniqueOrThrow
   */
  export type AccountDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDetails
     */
    select?: AccountDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDetails
     */
    omit?: AccountDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDetailsInclude<ExtArgs> | null
    /**
     * Filter, which AccountDetails to fetch.
     */
    where: AccountDetailsWhereUniqueInput
  }

  /**
   * AccountDetails findFirst
   */
  export type AccountDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDetails
     */
    select?: AccountDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDetails
     */
    omit?: AccountDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDetailsInclude<ExtArgs> | null
    /**
     * Filter, which AccountDetails to fetch.
     */
    where?: AccountDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountDetails to fetch.
     */
    orderBy?: AccountDetailsOrderByWithRelationInput | AccountDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountDetails.
     */
    cursor?: AccountDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountDetails.
     */
    distinct?: AccountDetailsScalarFieldEnum | AccountDetailsScalarFieldEnum[]
  }

  /**
   * AccountDetails findFirstOrThrow
   */
  export type AccountDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDetails
     */
    select?: AccountDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDetails
     */
    omit?: AccountDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDetailsInclude<ExtArgs> | null
    /**
     * Filter, which AccountDetails to fetch.
     */
    where?: AccountDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountDetails to fetch.
     */
    orderBy?: AccountDetailsOrderByWithRelationInput | AccountDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountDetails.
     */
    cursor?: AccountDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountDetails.
     */
    distinct?: AccountDetailsScalarFieldEnum | AccountDetailsScalarFieldEnum[]
  }

  /**
   * AccountDetails findMany
   */
  export type AccountDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDetails
     */
    select?: AccountDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDetails
     */
    omit?: AccountDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDetailsInclude<ExtArgs> | null
    /**
     * Filter, which AccountDetails to fetch.
     */
    where?: AccountDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountDetails to fetch.
     */
    orderBy?: AccountDetailsOrderByWithRelationInput | AccountDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccountDetails.
     */
    cursor?: AccountDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountDetails.
     */
    skip?: number
    distinct?: AccountDetailsScalarFieldEnum | AccountDetailsScalarFieldEnum[]
  }

  /**
   * AccountDetails create
   */
  export type AccountDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDetails
     */
    select?: AccountDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDetails
     */
    omit?: AccountDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a AccountDetails.
     */
    data: XOR<AccountDetailsCreateInput, AccountDetailsUncheckedCreateInput>
  }

  /**
   * AccountDetails createMany
   */
  export type AccountDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccountDetails.
     */
    data: AccountDetailsCreateManyInput | AccountDetailsCreateManyInput[]
  }

  /**
   * AccountDetails update
   */
  export type AccountDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDetails
     */
    select?: AccountDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDetails
     */
    omit?: AccountDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a AccountDetails.
     */
    data: XOR<AccountDetailsUpdateInput, AccountDetailsUncheckedUpdateInput>
    /**
     * Choose, which AccountDetails to update.
     */
    where: AccountDetailsWhereUniqueInput
  }

  /**
   * AccountDetails updateMany
   */
  export type AccountDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccountDetails.
     */
    data: XOR<AccountDetailsUpdateManyMutationInput, AccountDetailsUncheckedUpdateManyInput>
    /**
     * Filter which AccountDetails to update
     */
    where?: AccountDetailsWhereInput
    /**
     * Limit how many AccountDetails to update.
     */
    limit?: number
  }

  /**
   * AccountDetails upsert
   */
  export type AccountDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDetails
     */
    select?: AccountDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDetails
     */
    omit?: AccountDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the AccountDetails to update in case it exists.
     */
    where: AccountDetailsWhereUniqueInput
    /**
     * In case the AccountDetails found by the `where` argument doesn't exist, create a new AccountDetails with this data.
     */
    create: XOR<AccountDetailsCreateInput, AccountDetailsUncheckedCreateInput>
    /**
     * In case the AccountDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountDetailsUpdateInput, AccountDetailsUncheckedUpdateInput>
  }

  /**
   * AccountDetails delete
   */
  export type AccountDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDetails
     */
    select?: AccountDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDetails
     */
    omit?: AccountDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDetailsInclude<ExtArgs> | null
    /**
     * Filter which AccountDetails to delete.
     */
    where: AccountDetailsWhereUniqueInput
  }

  /**
   * AccountDetails deleteMany
   */
  export type AccountDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountDetails to delete
     */
    where?: AccountDetailsWhereInput
    /**
     * Limit how many AccountDetails to delete.
     */
    limit?: number
  }

  /**
   * AccountDetails findRaw
   */
  export type AccountDetailsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AccountDetails aggregateRaw
   */
  export type AccountDetailsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AccountDetails without action
   */
  export type AccountDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDetails
     */
    select?: AccountDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDetails
     */
    omit?: AccountDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDetailsInclude<ExtArgs> | null
  }


  /**
   * Model Country
   */

  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryMinAggregateOutputType = {
    currencySymbol: string | null
    name: string | null
    baseTokencoinType: string | null
  }

  export type CountryMaxAggregateOutputType = {
    currencySymbol: string | null
    name: string | null
    baseTokencoinType: string | null
  }

  export type CountryCountAggregateOutputType = {
    currencySymbol: number
    name: number
    baseTokencoinType: number
    _all: number
  }


  export type CountryMinAggregateInputType = {
    currencySymbol?: true
    name?: true
    baseTokencoinType?: true
  }

  export type CountryMaxAggregateInputType = {
    currencySymbol?: true
    name?: true
    baseTokencoinType?: true
  }

  export type CountryCountAggregateInputType = {
    currencySymbol?: true
    name?: true
    baseTokencoinType?: true
    _all?: true
  }

  export type CountryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Country to aggregate.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type CountryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithAggregationInput | CountryOrderByWithAggregationInput[]
    by: CountryScalarFieldEnum[] | CountryScalarFieldEnum
    having?: CountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }

  export type CountryGroupByOutputType = {
    currencySymbol: string
    name: string
    baseTokencoinType: string
    _count: CountryCountAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends CountryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type CountrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    currencySymbol?: boolean
    name?: boolean
    baseTokencoinType?: boolean
    baseToken?: boolean | Country$baseTokenArgs<ExtArgs>
    User?: boolean | Country$UserArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["country"]>



  export type CountrySelectScalar = {
    currencySymbol?: boolean
    name?: boolean
    baseTokencoinType?: boolean
  }

  export type CountryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"currencySymbol" | "name" | "baseTokencoinType", ExtArgs["result"]["country"]>
  export type CountryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baseToken?: boolean | Country$baseTokenArgs<ExtArgs>
    User?: boolean | Country$UserArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CountryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Country"
    objects: {
      baseToken: Prisma.$TokensPayload<ExtArgs> | null
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      currencySymbol: string
      name: string
      baseTokencoinType: string
    }, ExtArgs["result"]["country"]>
    composites: {}
  }

  type CountryGetPayload<S extends boolean | null | undefined | CountryDefaultArgs> = $Result.GetResult<Prisma.$CountryPayload, S>

  type CountryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CountryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CountryCountAggregateInputType | true
    }

  export interface CountryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Country'], meta: { name: 'Country' } }
    /**
     * Find zero or one Country that matches the filter.
     * @param {CountryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CountryFindUniqueArgs>(args: SelectSubset<T, CountryFindUniqueArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Country that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CountryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CountryFindUniqueOrThrowArgs>(args: SelectSubset<T, CountryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CountryFindFirstArgs>(args?: SelectSubset<T, CountryFindFirstArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CountryFindFirstOrThrowArgs>(args?: SelectSubset<T, CountryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `currencySymbol`
     * const countryWithCurrencySymbolOnly = await prisma.country.findMany({ select: { currencySymbol: true } })
     * 
     */
    findMany<T extends CountryFindManyArgs>(args?: SelectSubset<T, CountryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Country.
     * @param {CountryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
     */
    create<T extends CountryCreateArgs>(args: SelectSubset<T, CountryCreateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Countries.
     * @param {CountryCreateManyArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CountryCreateManyArgs>(args?: SelectSubset<T, CountryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Country.
     * @param {CountryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
     */
    delete<T extends CountryDeleteArgs>(args: SelectSubset<T, CountryDeleteArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Country.
     * @param {CountryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CountryUpdateArgs>(args: SelectSubset<T, CountryUpdateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Countries.
     * @param {CountryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CountryDeleteManyArgs>(args?: SelectSubset<T, CountryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CountryUpdateManyArgs>(args: SelectSubset<T, CountryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Country.
     * @param {CountryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
     */
    upsert<T extends CountryUpsertArgs>(args: SelectSubset<T, CountryUpsertArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Countries that matches the filter.
     * @param {CountryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const country = await prisma.country.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CountryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Country.
     * @param {CountryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const country = await prisma.country.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CountryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountryCountArgs>(
      args?: Subset<T, CountryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryGroupByArgs['orderBy'] }
        : { orderBy?: CountryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Country model
   */
  readonly fields: CountryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    baseToken<T extends Country$baseTokenArgs<ExtArgs> = {}>(args?: Subset<T, Country$baseTokenArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    User<T extends Country$UserArgs<ExtArgs> = {}>(args?: Subset<T, Country$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Country model
   */
  interface CountryFieldRefs {
    readonly currencySymbol: FieldRef<"Country", 'String'>
    readonly name: FieldRef<"Country", 'String'>
    readonly baseTokencoinType: FieldRef<"Country", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Country findUnique
   */
  export type CountryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findUniqueOrThrow
   */
  export type CountryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findFirst
   */
  export type CountryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findFirstOrThrow
   */
  export type CountryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findMany
   */
  export type CountryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country create
   */
  export type CountryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to create a Country.
     */
    data: XOR<CountryCreateInput, CountryUncheckedCreateInput>
  }

  /**
   * Country createMany
   */
  export type CountryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
  }

  /**
   * Country update
   */
  export type CountryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to update a Country.
     */
    data: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
    /**
     * Choose, which Country to update.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country updateMany
   */
  export type CountryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
  }

  /**
   * Country upsert
   */
  export type CountryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The filter to search for the Country to update in case it exists.
     */
    where: CountryWhereUniqueInput
    /**
     * In case the Country found by the `where` argument doesn't exist, create a new Country with this data.
     */
    create: XOR<CountryCreateInput, CountryUncheckedCreateInput>
    /**
     * In case the Country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
  }

  /**
   * Country delete
   */
  export type CountryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter which Country to delete.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country deleteMany
   */
  export type CountryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Countries to delete
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to delete.
     */
    limit?: number
  }

  /**
   * Country findRaw
   */
  export type CountryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Country aggregateRaw
   */
  export type CountryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Country.baseToken
   */
  export type Country$baseTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    where?: TokensWhereInput
  }

  /**
   * Country.User
   */
  export type Country$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Country without action
   */
  export type CountryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
  }


  /**
   * Model Tokens
   */

  export type AggregateTokens = {
    _count: TokensCountAggregateOutputType | null
    _avg: TokensAvgAggregateOutputType | null
    _sum: TokensSumAggregateOutputType | null
    _min: TokensMinAggregateOutputType | null
    _max: TokensMaxAggregateOutputType | null
  }

  export type TokensAvgAggregateOutputType = {
    decimals: number | null
  }

  export type TokensSumAggregateOutputType = {
    decimals: number | null
  }

  export type TokensMinAggregateOutputType = {
    name: string | null
    decimals: number | null
    symbol: string | null
    coinType: string | null
  }

  export type TokensMaxAggregateOutputType = {
    name: string | null
    decimals: number | null
    symbol: string | null
    coinType: string | null
  }

  export type TokensCountAggregateOutputType = {
    name: number
    decimals: number
    symbol: number
    coinType: number
    _all: number
  }


  export type TokensAvgAggregateInputType = {
    decimals?: true
  }

  export type TokensSumAggregateInputType = {
    decimals?: true
  }

  export type TokensMinAggregateInputType = {
    name?: true
    decimals?: true
    symbol?: true
    coinType?: true
  }

  export type TokensMaxAggregateInputType = {
    name?: true
    decimals?: true
    symbol?: true
    coinType?: true
  }

  export type TokensCountAggregateInputType = {
    name?: true
    decimals?: true
    symbol?: true
    coinType?: true
    _all?: true
  }

  export type TokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to aggregate.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokensAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokensSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokensMaxAggregateInputType
  }

  export type GetTokensAggregateType<T extends TokensAggregateArgs> = {
        [P in keyof T & keyof AggregateTokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokens[P]>
      : GetScalarType<T[P], AggregateTokens[P]>
  }




  export type TokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokensWhereInput
    orderBy?: TokensOrderByWithAggregationInput | TokensOrderByWithAggregationInput[]
    by: TokensScalarFieldEnum[] | TokensScalarFieldEnum
    having?: TokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokensCountAggregateInputType | true
    _avg?: TokensAvgAggregateInputType
    _sum?: TokensSumAggregateInputType
    _min?: TokensMinAggregateInputType
    _max?: TokensMaxAggregateInputType
  }

  export type TokensGroupByOutputType = {
    name: string
    decimals: number
    symbol: string
    coinType: string
    _count: TokensCountAggregateOutputType | null
    _avg: TokensAvgAggregateOutputType | null
    _sum: TokensSumAggregateOutputType | null
    _min: TokensMinAggregateOutputType | null
    _max: TokensMaxAggregateOutputType | null
  }

  type GetTokensGroupByPayload<T extends TokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokensGroupByOutputType[P]>
            : GetScalarType<T[P], TokensGroupByOutputType[P]>
        }
      >
    >


  export type TokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    decimals?: boolean
    symbol?: boolean
    coinType?: boolean
    Country?: boolean | Tokens$CountryArgs<ExtArgs>
    _count?: boolean | TokensCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokens"]>



  export type TokensSelectScalar = {
    name?: boolean
    decimals?: boolean
    symbol?: boolean
    coinType?: boolean
  }

  export type TokensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name" | "decimals" | "symbol" | "coinType", ExtArgs["result"]["tokens"]>
  export type TokensInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Country?: boolean | Tokens$CountryArgs<ExtArgs>
    _count?: boolean | TokensCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tokens"
    objects: {
      Country: Prisma.$CountryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      name: string
      decimals: number
      symbol: string
      coinType: string
    }, ExtArgs["result"]["tokens"]>
    composites: {}
  }

  type TokensGetPayload<S extends boolean | null | undefined | TokensDefaultArgs> = $Result.GetResult<Prisma.$TokensPayload, S>

  type TokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokensCountAggregateInputType | true
    }

  export interface TokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tokens'], meta: { name: 'Tokens' } }
    /**
     * Find zero or one Tokens that matches the filter.
     * @param {TokensFindUniqueArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokensFindUniqueArgs>(args: SelectSubset<T, TokensFindUniqueArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tokens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokensFindUniqueOrThrowArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokensFindUniqueOrThrowArgs>(args: SelectSubset<T, TokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensFindFirstArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokensFindFirstArgs>(args?: SelectSubset<T, TokensFindFirstArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensFindFirstOrThrowArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokensFindFirstOrThrowArgs>(args?: SelectSubset<T, TokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.tokens.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.tokens.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const tokensWithNameOnly = await prisma.tokens.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends TokensFindManyArgs>(args?: SelectSubset<T, TokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tokens.
     * @param {TokensCreateArgs} args - Arguments to create a Tokens.
     * @example
     * // Create one Tokens
     * const Tokens = await prisma.tokens.create({
     *   data: {
     *     // ... data to create a Tokens
     *   }
     * })
     * 
     */
    create<T extends TokensCreateArgs>(args: SelectSubset<T, TokensCreateArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {TokensCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const tokens = await prisma.tokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokensCreateManyArgs>(args?: SelectSubset<T, TokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tokens.
     * @param {TokensDeleteArgs} args - Arguments to delete one Tokens.
     * @example
     * // Delete one Tokens
     * const Tokens = await prisma.tokens.delete({
     *   where: {
     *     // ... filter to delete one Tokens
     *   }
     * })
     * 
     */
    delete<T extends TokensDeleteArgs>(args: SelectSubset<T, TokensDeleteArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tokens.
     * @param {TokensUpdateArgs} args - Arguments to update one Tokens.
     * @example
     * // Update one Tokens
     * const tokens = await prisma.tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokensUpdateArgs>(args: SelectSubset<T, TokensUpdateArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokensDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokensDeleteManyArgs>(args?: SelectSubset<T, TokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const tokens = await prisma.tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokensUpdateManyArgs>(args: SelectSubset<T, TokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tokens.
     * @param {TokensUpsertArgs} args - Arguments to update or create a Tokens.
     * @example
     * // Update or create a Tokens
     * const tokens = await prisma.tokens.upsert({
     *   create: {
     *     // ... data to create a Tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tokens we want to update
     *   }
     * })
     */
    upsert<T extends TokensUpsertArgs>(args: SelectSubset<T, TokensUpsertArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * @param {TokensFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const tokens = await prisma.tokens.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TokensFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Tokens.
     * @param {TokensAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const tokens = await prisma.tokens.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TokensAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.tokens.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokensCountArgs>(
      args?: Subset<T, TokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokensAggregateArgs>(args: Subset<T, TokensAggregateArgs>): Prisma.PrismaPromise<GetTokensAggregateType<T>>

    /**
     * Group by Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokensGroupByArgs['orderBy'] }
        : { orderBy?: TokensGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tokens model
   */
  readonly fields: TokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Country<T extends Tokens$CountryArgs<ExtArgs> = {}>(args?: Subset<T, Tokens$CountryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tokens model
   */
  interface TokensFieldRefs {
    readonly name: FieldRef<"Tokens", 'String'>
    readonly decimals: FieldRef<"Tokens", 'Int'>
    readonly symbol: FieldRef<"Tokens", 'String'>
    readonly coinType: FieldRef<"Tokens", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tokens findUnique
   */
  export type TokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where: TokensWhereUniqueInput
  }

  /**
   * Tokens findUniqueOrThrow
   */
  export type TokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where: TokensWhereUniqueInput
  }

  /**
   * Tokens findFirst
   */
  export type TokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * Tokens findFirstOrThrow
   */
  export type TokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * Tokens findMany
   */
  export type TokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * Tokens create
   */
  export type TokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * The data needed to create a Tokens.
     */
    data: XOR<TokensCreateInput, TokensUncheckedCreateInput>
  }

  /**
   * Tokens createMany
   */
  export type TokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokensCreateManyInput | TokensCreateManyInput[]
  }

  /**
   * Tokens update
   */
  export type TokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * The data needed to update a Tokens.
     */
    data: XOR<TokensUpdateInput, TokensUncheckedUpdateInput>
    /**
     * Choose, which Tokens to update.
     */
    where: TokensWhereUniqueInput
  }

  /**
   * Tokens updateMany
   */
  export type TokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokensUpdateManyMutationInput, TokensUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokensWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Tokens upsert
   */
  export type TokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * The filter to search for the Tokens to update in case it exists.
     */
    where: TokensWhereUniqueInput
    /**
     * In case the Tokens found by the `where` argument doesn't exist, create a new Tokens with this data.
     */
    create: XOR<TokensCreateInput, TokensUncheckedCreateInput>
    /**
     * In case the Tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokensUpdateInput, TokensUncheckedUpdateInput>
  }

  /**
   * Tokens delete
   */
  export type TokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * Filter which Tokens to delete.
     */
    where: TokensWhereUniqueInput
  }

  /**
   * Tokens deleteMany
   */
  export type TokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokensWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Tokens findRaw
   */
  export type TokensFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Tokens aggregateRaw
   */
  export type TokensAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Tokens.Country
   */
  export type Tokens$CountryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    cursor?: CountryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Tokens without action
   */
  export type TokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    fees: number | null
    incomingAmount: number | null
    outgoingAmount: number | null
  }

  export type TransactionSumAggregateOutputType = {
    fees: number | null
    incomingAmount: number | null
    outgoingAmount: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    transactionId: string | null
    type: $Enums.TransactionType | null
    interactedWith: string | null
    date: Date | null
    status: $Enums.TransactionStatus | null
    fees: number | null
    incomingAsset: string | null
    incomingAmount: number | null
    outgoingAsset: string | null
    outgoingAmount: number | null
    userId: string | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    transactionId: string | null
    type: $Enums.TransactionType | null
    interactedWith: string | null
    date: Date | null
    status: $Enums.TransactionStatus | null
    fees: number | null
    incomingAsset: string | null
    incomingAmount: number | null
    outgoingAsset: string | null
    outgoingAmount: number | null
    userId: string | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    transactionId: number
    type: number
    interactedWith: number
    date: number
    status: number
    fees: number
    incomingAsset: number
    incomingAmount: number
    outgoingAsset: number
    outgoingAmount: number
    userId: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    fees?: true
    incomingAmount?: true
    outgoingAmount?: true
  }

  export type TransactionSumAggregateInputType = {
    fees?: true
    incomingAmount?: true
    outgoingAmount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    transactionId?: true
    type?: true
    interactedWith?: true
    date?: true
    status?: true
    fees?: true
    incomingAsset?: true
    incomingAmount?: true
    outgoingAsset?: true
    outgoingAmount?: true
    userId?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    transactionId?: true
    type?: true
    interactedWith?: true
    date?: true
    status?: true
    fees?: true
    incomingAsset?: true
    incomingAmount?: true
    outgoingAsset?: true
    outgoingAmount?: true
    userId?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    transactionId?: true
    type?: true
    interactedWith?: true
    date?: true
    status?: true
    fees?: true
    incomingAsset?: true
    incomingAmount?: true
    outgoingAsset?: true
    outgoingAmount?: true
    userId?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    transactionId: string
    type: $Enums.TransactionType
    interactedWith: string | null
    date: Date
    status: $Enums.TransactionStatus
    fees: number
    incomingAsset: string | null
    incomingAmount: number | null
    outgoingAsset: string | null
    outgoingAmount: number | null
    userId: string
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    type?: boolean
    interactedWith?: boolean
    date?: boolean
    status?: boolean
    fees?: boolean
    incomingAsset?: boolean
    incomingAmount?: boolean
    outgoingAsset?: boolean
    outgoingAmount?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>



  export type TransactionSelectScalar = {
    id?: boolean
    transactionId?: boolean
    type?: boolean
    interactedWith?: boolean
    date?: boolean
    status?: boolean
    fees?: boolean
    incomingAsset?: boolean
    incomingAmount?: boolean
    outgoingAsset?: boolean
    outgoingAmount?: boolean
    userId?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "transactionId" | "type" | "interactedWith" | "date" | "status" | "fees" | "incomingAsset" | "incomingAmount" | "outgoingAsset" | "outgoingAmount" | "userId", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      transactionId: string
      type: $Enums.TransactionType
      interactedWith: string | null
      date: Date
      status: $Enums.TransactionStatus
      fees: number
      incomingAsset: string | null
      incomingAmount: number | null
      outgoingAsset: string | null
      outgoingAmount: number | null
      userId: string
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * @param {TransactionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const transaction = await prisma.transaction.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TransactionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Transaction.
     * @param {TransactionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const transaction = await prisma.transaction.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TransactionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly transactionId: FieldRef<"Transaction", 'String'>
    readonly type: FieldRef<"Transaction", 'TransactionType'>
    readonly interactedWith: FieldRef<"Transaction", 'String'>
    readonly date: FieldRef<"Transaction", 'DateTime'>
    readonly status: FieldRef<"Transaction", 'TransactionStatus'>
    readonly fees: FieldRef<"Transaction", 'Float'>
    readonly incomingAsset: FieldRef<"Transaction", 'String'>
    readonly incomingAmount: FieldRef<"Transaction", 'Float'>
    readonly outgoingAsset: FieldRef<"Transaction", 'String'>
    readonly outgoingAmount: FieldRef<"Transaction", 'Float'>
    readonly userId: FieldRef<"Transaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction findRaw
   */
  export type TransactionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Transaction aggregateRaw
   */
  export type TransactionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model PayfricaAgents
   */

  export type AggregatePayfricaAgents = {
    _count: PayfricaAgentsCountAggregateOutputType | null
    _min: PayfricaAgentsMinAggregateOutputType | null
    _max: PayfricaAgentsMaxAggregateOutputType | null
  }

  export type PayfricaAgentsMinAggregateOutputType = {
    id: string | null
  }

  export type PayfricaAgentsMaxAggregateOutputType = {
    id: string | null
  }

  export type PayfricaAgentsCountAggregateOutputType = {
    id: number
    validTypes: number
    agents: number
    _all: number
  }


  export type PayfricaAgentsMinAggregateInputType = {
    id?: true
  }

  export type PayfricaAgentsMaxAggregateInputType = {
    id?: true
  }

  export type PayfricaAgentsCountAggregateInputType = {
    id?: true
    validTypes?: true
    agents?: true
    _all?: true
  }

  export type PayfricaAgentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayfricaAgents to aggregate.
     */
    where?: PayfricaAgentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayfricaAgents to fetch.
     */
    orderBy?: PayfricaAgentsOrderByWithRelationInput | PayfricaAgentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayfricaAgentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayfricaAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayfricaAgents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PayfricaAgents
    **/
    _count?: true | PayfricaAgentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayfricaAgentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayfricaAgentsMaxAggregateInputType
  }

  export type GetPayfricaAgentsAggregateType<T extends PayfricaAgentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayfricaAgents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayfricaAgents[P]>
      : GetScalarType<T[P], AggregatePayfricaAgents[P]>
  }




  export type PayfricaAgentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayfricaAgentsWhereInput
    orderBy?: PayfricaAgentsOrderByWithAggregationInput | PayfricaAgentsOrderByWithAggregationInput[]
    by: PayfricaAgentsScalarFieldEnum[] | PayfricaAgentsScalarFieldEnum
    having?: PayfricaAgentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayfricaAgentsCountAggregateInputType | true
    _min?: PayfricaAgentsMinAggregateInputType
    _max?: PayfricaAgentsMaxAggregateInputType
  }

  export type PayfricaAgentsGroupByOutputType = {
    id: string
    validTypes: JsonValue
    agents: JsonValue
    _count: PayfricaAgentsCountAggregateOutputType | null
    _min: PayfricaAgentsMinAggregateOutputType | null
    _max: PayfricaAgentsMaxAggregateOutputType | null
  }

  type GetPayfricaAgentsGroupByPayload<T extends PayfricaAgentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayfricaAgentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayfricaAgentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayfricaAgentsGroupByOutputType[P]>
            : GetScalarType<T[P], PayfricaAgentsGroupByOutputType[P]>
        }
      >
    >


  export type PayfricaAgentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    validTypes?: boolean
    agents?: boolean
  }, ExtArgs["result"]["payfricaAgents"]>



  export type PayfricaAgentsSelectScalar = {
    id?: boolean
    validTypes?: boolean
    agents?: boolean
  }

  export type PayfricaAgentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "validTypes" | "agents", ExtArgs["result"]["payfricaAgents"]>

  export type $PayfricaAgentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PayfricaAgents"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      validTypes: Prisma.JsonValue
      agents: Prisma.JsonValue
    }, ExtArgs["result"]["payfricaAgents"]>
    composites: {}
  }

  type PayfricaAgentsGetPayload<S extends boolean | null | undefined | PayfricaAgentsDefaultArgs> = $Result.GetResult<Prisma.$PayfricaAgentsPayload, S>

  type PayfricaAgentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayfricaAgentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayfricaAgentsCountAggregateInputType | true
    }

  export interface PayfricaAgentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PayfricaAgents'], meta: { name: 'PayfricaAgents' } }
    /**
     * Find zero or one PayfricaAgents that matches the filter.
     * @param {PayfricaAgentsFindUniqueArgs} args - Arguments to find a PayfricaAgents
     * @example
     * // Get one PayfricaAgents
     * const payfricaAgents = await prisma.payfricaAgents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayfricaAgentsFindUniqueArgs>(args: SelectSubset<T, PayfricaAgentsFindUniqueArgs<ExtArgs>>): Prisma__PayfricaAgentsClient<$Result.GetResult<Prisma.$PayfricaAgentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PayfricaAgents that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayfricaAgentsFindUniqueOrThrowArgs} args - Arguments to find a PayfricaAgents
     * @example
     * // Get one PayfricaAgents
     * const payfricaAgents = await prisma.payfricaAgents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayfricaAgentsFindUniqueOrThrowArgs>(args: SelectSubset<T, PayfricaAgentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayfricaAgentsClient<$Result.GetResult<Prisma.$PayfricaAgentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayfricaAgents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayfricaAgentsFindFirstArgs} args - Arguments to find a PayfricaAgents
     * @example
     * // Get one PayfricaAgents
     * const payfricaAgents = await prisma.payfricaAgents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayfricaAgentsFindFirstArgs>(args?: SelectSubset<T, PayfricaAgentsFindFirstArgs<ExtArgs>>): Prisma__PayfricaAgentsClient<$Result.GetResult<Prisma.$PayfricaAgentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayfricaAgents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayfricaAgentsFindFirstOrThrowArgs} args - Arguments to find a PayfricaAgents
     * @example
     * // Get one PayfricaAgents
     * const payfricaAgents = await prisma.payfricaAgents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayfricaAgentsFindFirstOrThrowArgs>(args?: SelectSubset<T, PayfricaAgentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayfricaAgentsClient<$Result.GetResult<Prisma.$PayfricaAgentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PayfricaAgents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayfricaAgentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PayfricaAgents
     * const payfricaAgents = await prisma.payfricaAgents.findMany()
     * 
     * // Get first 10 PayfricaAgents
     * const payfricaAgents = await prisma.payfricaAgents.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payfricaAgentsWithIdOnly = await prisma.payfricaAgents.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayfricaAgentsFindManyArgs>(args?: SelectSubset<T, PayfricaAgentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayfricaAgentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PayfricaAgents.
     * @param {PayfricaAgentsCreateArgs} args - Arguments to create a PayfricaAgents.
     * @example
     * // Create one PayfricaAgents
     * const PayfricaAgents = await prisma.payfricaAgents.create({
     *   data: {
     *     // ... data to create a PayfricaAgents
     *   }
     * })
     * 
     */
    create<T extends PayfricaAgentsCreateArgs>(args: SelectSubset<T, PayfricaAgentsCreateArgs<ExtArgs>>): Prisma__PayfricaAgentsClient<$Result.GetResult<Prisma.$PayfricaAgentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PayfricaAgents.
     * @param {PayfricaAgentsCreateManyArgs} args - Arguments to create many PayfricaAgents.
     * @example
     * // Create many PayfricaAgents
     * const payfricaAgents = await prisma.payfricaAgents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayfricaAgentsCreateManyArgs>(args?: SelectSubset<T, PayfricaAgentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PayfricaAgents.
     * @param {PayfricaAgentsDeleteArgs} args - Arguments to delete one PayfricaAgents.
     * @example
     * // Delete one PayfricaAgents
     * const PayfricaAgents = await prisma.payfricaAgents.delete({
     *   where: {
     *     // ... filter to delete one PayfricaAgents
     *   }
     * })
     * 
     */
    delete<T extends PayfricaAgentsDeleteArgs>(args: SelectSubset<T, PayfricaAgentsDeleteArgs<ExtArgs>>): Prisma__PayfricaAgentsClient<$Result.GetResult<Prisma.$PayfricaAgentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PayfricaAgents.
     * @param {PayfricaAgentsUpdateArgs} args - Arguments to update one PayfricaAgents.
     * @example
     * // Update one PayfricaAgents
     * const payfricaAgents = await prisma.payfricaAgents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayfricaAgentsUpdateArgs>(args: SelectSubset<T, PayfricaAgentsUpdateArgs<ExtArgs>>): Prisma__PayfricaAgentsClient<$Result.GetResult<Prisma.$PayfricaAgentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PayfricaAgents.
     * @param {PayfricaAgentsDeleteManyArgs} args - Arguments to filter PayfricaAgents to delete.
     * @example
     * // Delete a few PayfricaAgents
     * const { count } = await prisma.payfricaAgents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayfricaAgentsDeleteManyArgs>(args?: SelectSubset<T, PayfricaAgentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayfricaAgents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayfricaAgentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PayfricaAgents
     * const payfricaAgents = await prisma.payfricaAgents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayfricaAgentsUpdateManyArgs>(args: SelectSubset<T, PayfricaAgentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PayfricaAgents.
     * @param {PayfricaAgentsUpsertArgs} args - Arguments to update or create a PayfricaAgents.
     * @example
     * // Update or create a PayfricaAgents
     * const payfricaAgents = await prisma.payfricaAgents.upsert({
     *   create: {
     *     // ... data to create a PayfricaAgents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PayfricaAgents we want to update
     *   }
     * })
     */
    upsert<T extends PayfricaAgentsUpsertArgs>(args: SelectSubset<T, PayfricaAgentsUpsertArgs<ExtArgs>>): Prisma__PayfricaAgentsClient<$Result.GetResult<Prisma.$PayfricaAgentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PayfricaAgents that matches the filter.
     * @param {PayfricaAgentsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const payfricaAgents = await prisma.payfricaAgents.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PayfricaAgentsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a PayfricaAgents.
     * @param {PayfricaAgentsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const payfricaAgents = await prisma.payfricaAgents.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PayfricaAgentsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of PayfricaAgents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayfricaAgentsCountArgs} args - Arguments to filter PayfricaAgents to count.
     * @example
     * // Count the number of PayfricaAgents
     * const count = await prisma.payfricaAgents.count({
     *   where: {
     *     // ... the filter for the PayfricaAgents we want to count
     *   }
     * })
    **/
    count<T extends PayfricaAgentsCountArgs>(
      args?: Subset<T, PayfricaAgentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayfricaAgentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PayfricaAgents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayfricaAgentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PayfricaAgentsAggregateArgs>(args: Subset<T, PayfricaAgentsAggregateArgs>): Prisma.PrismaPromise<GetPayfricaAgentsAggregateType<T>>

    /**
     * Group by PayfricaAgents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayfricaAgentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PayfricaAgentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayfricaAgentsGroupByArgs['orderBy'] }
        : { orderBy?: PayfricaAgentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PayfricaAgentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayfricaAgentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PayfricaAgents model
   */
  readonly fields: PayfricaAgentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PayfricaAgents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayfricaAgentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PayfricaAgents model
   */
  interface PayfricaAgentsFieldRefs {
    readonly id: FieldRef<"PayfricaAgents", 'String'>
    readonly validTypes: FieldRef<"PayfricaAgents", 'Json'>
    readonly agents: FieldRef<"PayfricaAgents", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * PayfricaAgents findUnique
   */
  export type PayfricaAgentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayfricaAgents
     */
    select?: PayfricaAgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayfricaAgents
     */
    omit?: PayfricaAgentsOmit<ExtArgs> | null
    /**
     * Filter, which PayfricaAgents to fetch.
     */
    where: PayfricaAgentsWhereUniqueInput
  }

  /**
   * PayfricaAgents findUniqueOrThrow
   */
  export type PayfricaAgentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayfricaAgents
     */
    select?: PayfricaAgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayfricaAgents
     */
    omit?: PayfricaAgentsOmit<ExtArgs> | null
    /**
     * Filter, which PayfricaAgents to fetch.
     */
    where: PayfricaAgentsWhereUniqueInput
  }

  /**
   * PayfricaAgents findFirst
   */
  export type PayfricaAgentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayfricaAgents
     */
    select?: PayfricaAgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayfricaAgents
     */
    omit?: PayfricaAgentsOmit<ExtArgs> | null
    /**
     * Filter, which PayfricaAgents to fetch.
     */
    where?: PayfricaAgentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayfricaAgents to fetch.
     */
    orderBy?: PayfricaAgentsOrderByWithRelationInput | PayfricaAgentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayfricaAgents.
     */
    cursor?: PayfricaAgentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayfricaAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayfricaAgents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayfricaAgents.
     */
    distinct?: PayfricaAgentsScalarFieldEnum | PayfricaAgentsScalarFieldEnum[]
  }

  /**
   * PayfricaAgents findFirstOrThrow
   */
  export type PayfricaAgentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayfricaAgents
     */
    select?: PayfricaAgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayfricaAgents
     */
    omit?: PayfricaAgentsOmit<ExtArgs> | null
    /**
     * Filter, which PayfricaAgents to fetch.
     */
    where?: PayfricaAgentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayfricaAgents to fetch.
     */
    orderBy?: PayfricaAgentsOrderByWithRelationInput | PayfricaAgentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayfricaAgents.
     */
    cursor?: PayfricaAgentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayfricaAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayfricaAgents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayfricaAgents.
     */
    distinct?: PayfricaAgentsScalarFieldEnum | PayfricaAgentsScalarFieldEnum[]
  }

  /**
   * PayfricaAgents findMany
   */
  export type PayfricaAgentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayfricaAgents
     */
    select?: PayfricaAgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayfricaAgents
     */
    omit?: PayfricaAgentsOmit<ExtArgs> | null
    /**
     * Filter, which PayfricaAgents to fetch.
     */
    where?: PayfricaAgentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayfricaAgents to fetch.
     */
    orderBy?: PayfricaAgentsOrderByWithRelationInput | PayfricaAgentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PayfricaAgents.
     */
    cursor?: PayfricaAgentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayfricaAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayfricaAgents.
     */
    skip?: number
    distinct?: PayfricaAgentsScalarFieldEnum | PayfricaAgentsScalarFieldEnum[]
  }

  /**
   * PayfricaAgents create
   */
  export type PayfricaAgentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayfricaAgents
     */
    select?: PayfricaAgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayfricaAgents
     */
    omit?: PayfricaAgentsOmit<ExtArgs> | null
    /**
     * The data needed to create a PayfricaAgents.
     */
    data: XOR<PayfricaAgentsCreateInput, PayfricaAgentsUncheckedCreateInput>
  }

  /**
   * PayfricaAgents createMany
   */
  export type PayfricaAgentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PayfricaAgents.
     */
    data: PayfricaAgentsCreateManyInput | PayfricaAgentsCreateManyInput[]
  }

  /**
   * PayfricaAgents update
   */
  export type PayfricaAgentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayfricaAgents
     */
    select?: PayfricaAgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayfricaAgents
     */
    omit?: PayfricaAgentsOmit<ExtArgs> | null
    /**
     * The data needed to update a PayfricaAgents.
     */
    data: XOR<PayfricaAgentsUpdateInput, PayfricaAgentsUncheckedUpdateInput>
    /**
     * Choose, which PayfricaAgents to update.
     */
    where: PayfricaAgentsWhereUniqueInput
  }

  /**
   * PayfricaAgents updateMany
   */
  export type PayfricaAgentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PayfricaAgents.
     */
    data: XOR<PayfricaAgentsUpdateManyMutationInput, PayfricaAgentsUncheckedUpdateManyInput>
    /**
     * Filter which PayfricaAgents to update
     */
    where?: PayfricaAgentsWhereInput
    /**
     * Limit how many PayfricaAgents to update.
     */
    limit?: number
  }

  /**
   * PayfricaAgents upsert
   */
  export type PayfricaAgentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayfricaAgents
     */
    select?: PayfricaAgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayfricaAgents
     */
    omit?: PayfricaAgentsOmit<ExtArgs> | null
    /**
     * The filter to search for the PayfricaAgents to update in case it exists.
     */
    where: PayfricaAgentsWhereUniqueInput
    /**
     * In case the PayfricaAgents found by the `where` argument doesn't exist, create a new PayfricaAgents with this data.
     */
    create: XOR<PayfricaAgentsCreateInput, PayfricaAgentsUncheckedCreateInput>
    /**
     * In case the PayfricaAgents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayfricaAgentsUpdateInput, PayfricaAgentsUncheckedUpdateInput>
  }

  /**
   * PayfricaAgents delete
   */
  export type PayfricaAgentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayfricaAgents
     */
    select?: PayfricaAgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayfricaAgents
     */
    omit?: PayfricaAgentsOmit<ExtArgs> | null
    /**
     * Filter which PayfricaAgents to delete.
     */
    where: PayfricaAgentsWhereUniqueInput
  }

  /**
   * PayfricaAgents deleteMany
   */
  export type PayfricaAgentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayfricaAgents to delete
     */
    where?: PayfricaAgentsWhereInput
    /**
     * Limit how many PayfricaAgents to delete.
     */
    limit?: number
  }

  /**
   * PayfricaAgents findRaw
   */
  export type PayfricaAgentsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PayfricaAgents aggregateRaw
   */
  export type PayfricaAgentsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PayfricaAgents without action
   */
  export type PayfricaAgentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayfricaAgents
     */
    select?: PayfricaAgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayfricaAgents
     */
    omit?: PayfricaAgentsOmit<ExtArgs> | null
  }


  /**
   * Model Agent
   */

  export type AggregateAgent = {
    _count: AgentCountAggregateOutputType | null
    _avg: AgentAvgAggregateOutputType | null
    _sum: AgentSumAggregateOutputType | null
    _min: AgentMinAggregateOutputType | null
    _max: AgentMaxAggregateOutputType | null
  }

  export type AgentAvgAggregateOutputType = {
    balance: number | null
    totalSuccessfulWithdrawals: number | null
    totalPendingWithdrawals: number | null
    totalSuccessfulWithdrawalsAmount: number | null
    totalPendingWithdrawalsAmount: number | null
    totalSuccessfulDeposits: number | null
    totalPendingDeposits: number | null
    totalSuccessfulDepositsAmount: number | null
    totalPendingDepositsAmount: number | null
    totalUnsuccessfulDeposits: number | null
    maxWithdrawLimit: number | null
    maxDepositLimit: number | null
    minWithdrawLimit: number | null
    minDepositLimit: number | null
  }

  export type AgentSumAggregateOutputType = {
    balance: bigint | null
    totalSuccessfulWithdrawals: number | null
    totalPendingWithdrawals: number | null
    totalSuccessfulWithdrawalsAmount: bigint | null
    totalPendingWithdrawalsAmount: bigint | null
    totalSuccessfulDeposits: bigint | null
    totalPendingDeposits: bigint | null
    totalSuccessfulDepositsAmount: bigint | null
    totalPendingDepositsAmount: bigint | null
    totalUnsuccessfulDeposits: number | null
    maxWithdrawLimit: bigint | null
    maxDepositLimit: bigint | null
    minWithdrawLimit: bigint | null
    minDepositLimit: bigint | null
  }

  export type AgentMinAggregateOutputType = {
    id: string | null
    addr: string | null
    balance: bigint | null
    coinType: string | null
    accountNumber: string | null
    bank: string | null
    name: string | null
    totalSuccessfulWithdrawals: number | null
    totalPendingWithdrawals: number | null
    totalSuccessfulWithdrawalsAmount: bigint | null
    totalPendingWithdrawalsAmount: bigint | null
    totalSuccessfulDeposits: bigint | null
    totalPendingDeposits: bigint | null
    totalSuccessfulDepositsAmount: bigint | null
    totalPendingDepositsAmount: bigint | null
    totalUnsuccessfulDeposits: number | null
    maxWithdrawLimit: bigint | null
    maxDepositLimit: bigint | null
    minWithdrawLimit: bigint | null
    minDepositLimit: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgentMaxAggregateOutputType = {
    id: string | null
    addr: string | null
    balance: bigint | null
    coinType: string | null
    accountNumber: string | null
    bank: string | null
    name: string | null
    totalSuccessfulWithdrawals: number | null
    totalPendingWithdrawals: number | null
    totalSuccessfulWithdrawalsAmount: bigint | null
    totalPendingWithdrawalsAmount: bigint | null
    totalSuccessfulDeposits: bigint | null
    totalPendingDeposits: bigint | null
    totalSuccessfulDepositsAmount: bigint | null
    totalPendingDepositsAmount: bigint | null
    totalUnsuccessfulDeposits: number | null
    maxWithdrawLimit: bigint | null
    maxDepositLimit: bigint | null
    minWithdrawLimit: bigint | null
    minDepositLimit: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgentCountAggregateOutputType = {
    id: number
    addr: number
    balance: number
    coinType: number
    accountNumber: number
    bank: number
    name: number
    pendingWithdrawals: number
    successfulWithdrawals: number
    totalSuccessfulWithdrawals: number
    totalPendingWithdrawals: number
    totalSuccessfulWithdrawalsAmount: number
    totalPendingWithdrawalsAmount: number
    pendingDeposits: number
    successfulDeposits: number
    totalSuccessfulDeposits: number
    totalPendingDeposits: number
    totalSuccessfulDepositsAmount: number
    totalPendingDepositsAmount: number
    unsuccessfulDeposits: number
    totalUnsuccessfulDeposits: number
    maxWithdrawLimit: number
    maxDepositLimit: number
    minWithdrawLimit: number
    minDepositLimit: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AgentAvgAggregateInputType = {
    balance?: true
    totalSuccessfulWithdrawals?: true
    totalPendingWithdrawals?: true
    totalSuccessfulWithdrawalsAmount?: true
    totalPendingWithdrawalsAmount?: true
    totalSuccessfulDeposits?: true
    totalPendingDeposits?: true
    totalSuccessfulDepositsAmount?: true
    totalPendingDepositsAmount?: true
    totalUnsuccessfulDeposits?: true
    maxWithdrawLimit?: true
    maxDepositLimit?: true
    minWithdrawLimit?: true
    minDepositLimit?: true
  }

  export type AgentSumAggregateInputType = {
    balance?: true
    totalSuccessfulWithdrawals?: true
    totalPendingWithdrawals?: true
    totalSuccessfulWithdrawalsAmount?: true
    totalPendingWithdrawalsAmount?: true
    totalSuccessfulDeposits?: true
    totalPendingDeposits?: true
    totalSuccessfulDepositsAmount?: true
    totalPendingDepositsAmount?: true
    totalUnsuccessfulDeposits?: true
    maxWithdrawLimit?: true
    maxDepositLimit?: true
    minWithdrawLimit?: true
    minDepositLimit?: true
  }

  export type AgentMinAggregateInputType = {
    id?: true
    addr?: true
    balance?: true
    coinType?: true
    accountNumber?: true
    bank?: true
    name?: true
    totalSuccessfulWithdrawals?: true
    totalPendingWithdrawals?: true
    totalSuccessfulWithdrawalsAmount?: true
    totalPendingWithdrawalsAmount?: true
    totalSuccessfulDeposits?: true
    totalPendingDeposits?: true
    totalSuccessfulDepositsAmount?: true
    totalPendingDepositsAmount?: true
    totalUnsuccessfulDeposits?: true
    maxWithdrawLimit?: true
    maxDepositLimit?: true
    minWithdrawLimit?: true
    minDepositLimit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgentMaxAggregateInputType = {
    id?: true
    addr?: true
    balance?: true
    coinType?: true
    accountNumber?: true
    bank?: true
    name?: true
    totalSuccessfulWithdrawals?: true
    totalPendingWithdrawals?: true
    totalSuccessfulWithdrawalsAmount?: true
    totalPendingWithdrawalsAmount?: true
    totalSuccessfulDeposits?: true
    totalPendingDeposits?: true
    totalSuccessfulDepositsAmount?: true
    totalPendingDepositsAmount?: true
    totalUnsuccessfulDeposits?: true
    maxWithdrawLimit?: true
    maxDepositLimit?: true
    minWithdrawLimit?: true
    minDepositLimit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgentCountAggregateInputType = {
    id?: true
    addr?: true
    balance?: true
    coinType?: true
    accountNumber?: true
    bank?: true
    name?: true
    pendingWithdrawals?: true
    successfulWithdrawals?: true
    totalSuccessfulWithdrawals?: true
    totalPendingWithdrawals?: true
    totalSuccessfulWithdrawalsAmount?: true
    totalPendingWithdrawalsAmount?: true
    pendingDeposits?: true
    successfulDeposits?: true
    totalSuccessfulDeposits?: true
    totalPendingDeposits?: true
    totalSuccessfulDepositsAmount?: true
    totalPendingDepositsAmount?: true
    unsuccessfulDeposits?: true
    totalUnsuccessfulDeposits?: true
    maxWithdrawLimit?: true
    maxDepositLimit?: true
    minWithdrawLimit?: true
    minDepositLimit?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AgentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agent to aggregate.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agents
    **/
    _count?: true | AgentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgentMaxAggregateInputType
  }

  export type GetAgentAggregateType<T extends AgentAggregateArgs> = {
        [P in keyof T & keyof AggregateAgent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgent[P]>
      : GetScalarType<T[P], AggregateAgent[P]>
  }




  export type AgentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentWhereInput
    orderBy?: AgentOrderByWithAggregationInput | AgentOrderByWithAggregationInput[]
    by: AgentScalarFieldEnum[] | AgentScalarFieldEnum
    having?: AgentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentCountAggregateInputType | true
    _avg?: AgentAvgAggregateInputType
    _sum?: AgentSumAggregateInputType
    _min?: AgentMinAggregateInputType
    _max?: AgentMaxAggregateInputType
  }

  export type AgentGroupByOutputType = {
    id: string
    addr: string
    balance: bigint
    coinType: string
    accountNumber: string
    bank: string
    name: string
    pendingWithdrawals: string[]
    successfulWithdrawals: string[]
    totalSuccessfulWithdrawals: number
    totalPendingWithdrawals: number
    totalSuccessfulWithdrawalsAmount: bigint
    totalPendingWithdrawalsAmount: bigint
    pendingDeposits: string[]
    successfulDeposits: string[]
    totalSuccessfulDeposits: bigint
    totalPendingDeposits: bigint
    totalSuccessfulDepositsAmount: bigint
    totalPendingDepositsAmount: bigint
    unsuccessfulDeposits: string[]
    totalUnsuccessfulDeposits: number
    maxWithdrawLimit: bigint
    maxDepositLimit: bigint
    minWithdrawLimit: bigint
    minDepositLimit: bigint
    createdAt: Date
    updatedAt: Date
    _count: AgentCountAggregateOutputType | null
    _avg: AgentAvgAggregateOutputType | null
    _sum: AgentSumAggregateOutputType | null
    _min: AgentMinAggregateOutputType | null
    _max: AgentMaxAggregateOutputType | null
  }

  type GetAgentGroupByPayload<T extends AgentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentGroupByOutputType[P]>
            : GetScalarType<T[P], AgentGroupByOutputType[P]>
        }
      >
    >


  export type AgentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    addr?: boolean
    balance?: boolean
    coinType?: boolean
    accountNumber?: boolean
    bank?: boolean
    name?: boolean
    pendingWithdrawals?: boolean
    successfulWithdrawals?: boolean
    totalSuccessfulWithdrawals?: boolean
    totalPendingWithdrawals?: boolean
    totalSuccessfulWithdrawalsAmount?: boolean
    totalPendingWithdrawalsAmount?: boolean
    pendingDeposits?: boolean
    successfulDeposits?: boolean
    totalSuccessfulDeposits?: boolean
    totalPendingDeposits?: boolean
    totalSuccessfulDepositsAmount?: boolean
    totalPendingDepositsAmount?: boolean
    unsuccessfulDeposits?: boolean
    totalUnsuccessfulDeposits?: boolean
    maxWithdrawLimit?: boolean
    maxDepositLimit?: boolean
    minWithdrawLimit?: boolean
    minDepositLimit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["agent"]>



  export type AgentSelectScalar = {
    id?: boolean
    addr?: boolean
    balance?: boolean
    coinType?: boolean
    accountNumber?: boolean
    bank?: boolean
    name?: boolean
    pendingWithdrawals?: boolean
    successfulWithdrawals?: boolean
    totalSuccessfulWithdrawals?: boolean
    totalPendingWithdrawals?: boolean
    totalSuccessfulWithdrawalsAmount?: boolean
    totalPendingWithdrawalsAmount?: boolean
    pendingDeposits?: boolean
    successfulDeposits?: boolean
    totalSuccessfulDeposits?: boolean
    totalPendingDeposits?: boolean
    totalSuccessfulDepositsAmount?: boolean
    totalPendingDepositsAmount?: boolean
    unsuccessfulDeposits?: boolean
    totalUnsuccessfulDeposits?: boolean
    maxWithdrawLimit?: boolean
    maxDepositLimit?: boolean
    minWithdrawLimit?: boolean
    minDepositLimit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AgentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "addr" | "balance" | "coinType" | "accountNumber" | "bank" | "name" | "pendingWithdrawals" | "successfulWithdrawals" | "totalSuccessfulWithdrawals" | "totalPendingWithdrawals" | "totalSuccessfulWithdrawalsAmount" | "totalPendingWithdrawalsAmount" | "pendingDeposits" | "successfulDeposits" | "totalSuccessfulDeposits" | "totalPendingDeposits" | "totalSuccessfulDepositsAmount" | "totalPendingDepositsAmount" | "unsuccessfulDeposits" | "totalUnsuccessfulDeposits" | "maxWithdrawLimit" | "maxDepositLimit" | "minWithdrawLimit" | "minDepositLimit" | "createdAt" | "updatedAt", ExtArgs["result"]["agent"]>

  export type $AgentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      addr: string
      balance: bigint
      coinType: string
      accountNumber: string
      bank: string
      name: string
      pendingWithdrawals: string[]
      successfulWithdrawals: string[]
      totalSuccessfulWithdrawals: number
      totalPendingWithdrawals: number
      totalSuccessfulWithdrawalsAmount: bigint
      totalPendingWithdrawalsAmount: bigint
      pendingDeposits: string[]
      successfulDeposits: string[]
      totalSuccessfulDeposits: bigint
      totalPendingDeposits: bigint
      totalSuccessfulDepositsAmount: bigint
      totalPendingDepositsAmount: bigint
      unsuccessfulDeposits: string[]
      totalUnsuccessfulDeposits: number
      maxWithdrawLimit: bigint
      maxDepositLimit: bigint
      minWithdrawLimit: bigint
      minDepositLimit: bigint
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["agent"]>
    composites: {}
  }

  type AgentGetPayload<S extends boolean | null | undefined | AgentDefaultArgs> = $Result.GetResult<Prisma.$AgentPayload, S>

  type AgentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgentCountAggregateInputType | true
    }

  export interface AgentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agent'], meta: { name: 'Agent' } }
    /**
     * Find zero or one Agent that matches the filter.
     * @param {AgentFindUniqueArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgentFindUniqueArgs>(args: SelectSubset<T, AgentFindUniqueArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgentFindUniqueOrThrowArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgentFindUniqueOrThrowArgs>(args: SelectSubset<T, AgentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindFirstArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgentFindFirstArgs>(args?: SelectSubset<T, AgentFindFirstArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindFirstOrThrowArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgentFindFirstOrThrowArgs>(args?: SelectSubset<T, AgentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agents
     * const agents = await prisma.agent.findMany()
     * 
     * // Get first 10 Agents
     * const agents = await prisma.agent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agentWithIdOnly = await prisma.agent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgentFindManyArgs>(args?: SelectSubset<T, AgentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agent.
     * @param {AgentCreateArgs} args - Arguments to create a Agent.
     * @example
     * // Create one Agent
     * const Agent = await prisma.agent.create({
     *   data: {
     *     // ... data to create a Agent
     *   }
     * })
     * 
     */
    create<T extends AgentCreateArgs>(args: SelectSubset<T, AgentCreateArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agents.
     * @param {AgentCreateManyArgs} args - Arguments to create many Agents.
     * @example
     * // Create many Agents
     * const agent = await prisma.agent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgentCreateManyArgs>(args?: SelectSubset<T, AgentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Agent.
     * @param {AgentDeleteArgs} args - Arguments to delete one Agent.
     * @example
     * // Delete one Agent
     * const Agent = await prisma.agent.delete({
     *   where: {
     *     // ... filter to delete one Agent
     *   }
     * })
     * 
     */
    delete<T extends AgentDeleteArgs>(args: SelectSubset<T, AgentDeleteArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agent.
     * @param {AgentUpdateArgs} args - Arguments to update one Agent.
     * @example
     * // Update one Agent
     * const agent = await prisma.agent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgentUpdateArgs>(args: SelectSubset<T, AgentUpdateArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agents.
     * @param {AgentDeleteManyArgs} args - Arguments to filter Agents to delete.
     * @example
     * // Delete a few Agents
     * const { count } = await prisma.agent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgentDeleteManyArgs>(args?: SelectSubset<T, AgentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agents
     * const agent = await prisma.agent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgentUpdateManyArgs>(args: SelectSubset<T, AgentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Agent.
     * @param {AgentUpsertArgs} args - Arguments to update or create a Agent.
     * @example
     * // Update or create a Agent
     * const agent = await prisma.agent.upsert({
     *   create: {
     *     // ... data to create a Agent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agent we want to update
     *   }
     * })
     */
    upsert<T extends AgentUpsertArgs>(args: SelectSubset<T, AgentUpsertArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agents that matches the filter.
     * @param {AgentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const agent = await prisma.agent.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AgentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Agent.
     * @param {AgentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const agent = await prisma.agent.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AgentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentCountArgs} args - Arguments to filter Agents to count.
     * @example
     * // Count the number of Agents
     * const count = await prisma.agent.count({
     *   where: {
     *     // ... the filter for the Agents we want to count
     *   }
     * })
    **/
    count<T extends AgentCountArgs>(
      args?: Subset<T, AgentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgentAggregateArgs>(args: Subset<T, AgentAggregateArgs>): Prisma.PrismaPromise<GetAgentAggregateType<T>>

    /**
     * Group by Agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AgentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgentGroupByArgs['orderBy'] }
        : { orderBy?: AgentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agent model
   */
  readonly fields: AgentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Agent model
   */
  interface AgentFieldRefs {
    readonly id: FieldRef<"Agent", 'String'>
    readonly addr: FieldRef<"Agent", 'String'>
    readonly balance: FieldRef<"Agent", 'BigInt'>
    readonly coinType: FieldRef<"Agent", 'String'>
    readonly accountNumber: FieldRef<"Agent", 'String'>
    readonly bank: FieldRef<"Agent", 'String'>
    readonly name: FieldRef<"Agent", 'String'>
    readonly pendingWithdrawals: FieldRef<"Agent", 'String[]'>
    readonly successfulWithdrawals: FieldRef<"Agent", 'String[]'>
    readonly totalSuccessfulWithdrawals: FieldRef<"Agent", 'Int'>
    readonly totalPendingWithdrawals: FieldRef<"Agent", 'Int'>
    readonly totalSuccessfulWithdrawalsAmount: FieldRef<"Agent", 'BigInt'>
    readonly totalPendingWithdrawalsAmount: FieldRef<"Agent", 'BigInt'>
    readonly pendingDeposits: FieldRef<"Agent", 'String[]'>
    readonly successfulDeposits: FieldRef<"Agent", 'String[]'>
    readonly totalSuccessfulDeposits: FieldRef<"Agent", 'BigInt'>
    readonly totalPendingDeposits: FieldRef<"Agent", 'BigInt'>
    readonly totalSuccessfulDepositsAmount: FieldRef<"Agent", 'BigInt'>
    readonly totalPendingDepositsAmount: FieldRef<"Agent", 'BigInt'>
    readonly unsuccessfulDeposits: FieldRef<"Agent", 'String[]'>
    readonly totalUnsuccessfulDeposits: FieldRef<"Agent", 'Int'>
    readonly maxWithdrawLimit: FieldRef<"Agent", 'BigInt'>
    readonly maxDepositLimit: FieldRef<"Agent", 'BigInt'>
    readonly minWithdrawLimit: FieldRef<"Agent", 'BigInt'>
    readonly minDepositLimit: FieldRef<"Agent", 'BigInt'>
    readonly createdAt: FieldRef<"Agent", 'DateTime'>
    readonly updatedAt: FieldRef<"Agent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Agent findUnique
   */
  export type AgentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent findUniqueOrThrow
   */
  export type AgentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent findFirst
   */
  export type AgentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent findFirstOrThrow
   */
  export type AgentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent findMany
   */
  export type AgentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Filter, which Agents to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent create
   */
  export type AgentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * The data needed to create a Agent.
     */
    data: XOR<AgentCreateInput, AgentUncheckedCreateInput>
  }

  /**
   * Agent createMany
   */
  export type AgentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agents.
     */
    data: AgentCreateManyInput | AgentCreateManyInput[]
  }

  /**
   * Agent update
   */
  export type AgentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * The data needed to update a Agent.
     */
    data: XOR<AgentUpdateInput, AgentUncheckedUpdateInput>
    /**
     * Choose, which Agent to update.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent updateMany
   */
  export type AgentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agents.
     */
    data: XOR<AgentUpdateManyMutationInput, AgentUncheckedUpdateManyInput>
    /**
     * Filter which Agents to update
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to update.
     */
    limit?: number
  }

  /**
   * Agent upsert
   */
  export type AgentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * The filter to search for the Agent to update in case it exists.
     */
    where: AgentWhereUniqueInput
    /**
     * In case the Agent found by the `where` argument doesn't exist, create a new Agent with this data.
     */
    create: XOR<AgentCreateInput, AgentUncheckedCreateInput>
    /**
     * In case the Agent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgentUpdateInput, AgentUncheckedUpdateInput>
  }

  /**
   * Agent delete
   */
  export type AgentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Filter which Agent to delete.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent deleteMany
   */
  export type AgentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agents to delete
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to delete.
     */
    limit?: number
  }

  /**
   * Agent findRaw
   */
  export type AgentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Agent aggregateRaw
   */
  export type AgentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Agent without action
   */
  export type AgentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
  }


  /**
   * Model WithdrawRequest
   */

  export type AggregateWithdrawRequest = {
    _count: WithdrawRequestCountAggregateOutputType | null
    _avg: WithdrawRequestAvgAggregateOutputType | null
    _sum: WithdrawRequestSumAggregateOutputType | null
    _min: WithdrawRequestMinAggregateOutputType | null
    _max: WithdrawRequestMaxAggregateOutputType | null
  }

  export type WithdrawRequestAvgAggregateOutputType = {
    amount: number | null
  }

  export type WithdrawRequestSumAggregateOutputType = {
    amount: bigint | null
  }

  export type WithdrawRequestMinAggregateOutputType = {
    id: string | null
    amount: bigint | null
    user: string | null
    agentId: string | null
    coinType: string | null
    status: $Enums.WithdrawStatus | null
    requestTime: Date | null
    statusTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WithdrawRequestMaxAggregateOutputType = {
    id: string | null
    amount: bigint | null
    user: string | null
    agentId: string | null
    coinType: string | null
    status: $Enums.WithdrawStatus | null
    requestTime: Date | null
    statusTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WithdrawRequestCountAggregateOutputType = {
    id: number
    amount: number
    user: number
    agentId: number
    coinType: number
    status: number
    requestTime: number
    statusTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WithdrawRequestAvgAggregateInputType = {
    amount?: true
  }

  export type WithdrawRequestSumAggregateInputType = {
    amount?: true
  }

  export type WithdrawRequestMinAggregateInputType = {
    id?: true
    amount?: true
    user?: true
    agentId?: true
    coinType?: true
    status?: true
    requestTime?: true
    statusTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WithdrawRequestMaxAggregateInputType = {
    id?: true
    amount?: true
    user?: true
    agentId?: true
    coinType?: true
    status?: true
    requestTime?: true
    statusTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WithdrawRequestCountAggregateInputType = {
    id?: true
    amount?: true
    user?: true
    agentId?: true
    coinType?: true
    status?: true
    requestTime?: true
    statusTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WithdrawRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WithdrawRequest to aggregate.
     */
    where?: WithdrawRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WithdrawRequests to fetch.
     */
    orderBy?: WithdrawRequestOrderByWithRelationInput | WithdrawRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WithdrawRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WithdrawRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WithdrawRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WithdrawRequests
    **/
    _count?: true | WithdrawRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WithdrawRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WithdrawRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WithdrawRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WithdrawRequestMaxAggregateInputType
  }

  export type GetWithdrawRequestAggregateType<T extends WithdrawRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateWithdrawRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWithdrawRequest[P]>
      : GetScalarType<T[P], AggregateWithdrawRequest[P]>
  }




  export type WithdrawRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WithdrawRequestWhereInput
    orderBy?: WithdrawRequestOrderByWithAggregationInput | WithdrawRequestOrderByWithAggregationInput[]
    by: WithdrawRequestScalarFieldEnum[] | WithdrawRequestScalarFieldEnum
    having?: WithdrawRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WithdrawRequestCountAggregateInputType | true
    _avg?: WithdrawRequestAvgAggregateInputType
    _sum?: WithdrawRequestSumAggregateInputType
    _min?: WithdrawRequestMinAggregateInputType
    _max?: WithdrawRequestMaxAggregateInputType
  }

  export type WithdrawRequestGroupByOutputType = {
    id: string
    amount: bigint
    user: string
    agentId: string
    coinType: string
    status: $Enums.WithdrawStatus
    requestTime: Date
    statusTime: Date | null
    createdAt: Date
    updatedAt: Date
    _count: WithdrawRequestCountAggregateOutputType | null
    _avg: WithdrawRequestAvgAggregateOutputType | null
    _sum: WithdrawRequestSumAggregateOutputType | null
    _min: WithdrawRequestMinAggregateOutputType | null
    _max: WithdrawRequestMaxAggregateOutputType | null
  }

  type GetWithdrawRequestGroupByPayload<T extends WithdrawRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WithdrawRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WithdrawRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WithdrawRequestGroupByOutputType[P]>
            : GetScalarType<T[P], WithdrawRequestGroupByOutputType[P]>
        }
      >
    >


  export type WithdrawRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    user?: boolean
    agentId?: boolean
    coinType?: boolean
    status?: boolean
    requestTime?: boolean
    statusTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["withdrawRequest"]>



  export type WithdrawRequestSelectScalar = {
    id?: boolean
    amount?: boolean
    user?: boolean
    agentId?: boolean
    coinType?: boolean
    status?: boolean
    requestTime?: boolean
    statusTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WithdrawRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "user" | "agentId" | "coinType" | "status" | "requestTime" | "statusTime" | "createdAt" | "updatedAt", ExtArgs["result"]["withdrawRequest"]>

  export type $WithdrawRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WithdrawRequest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: bigint
      user: string
      agentId: string
      coinType: string
      status: $Enums.WithdrawStatus
      requestTime: Date
      statusTime: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["withdrawRequest"]>
    composites: {}
  }

  type WithdrawRequestGetPayload<S extends boolean | null | undefined | WithdrawRequestDefaultArgs> = $Result.GetResult<Prisma.$WithdrawRequestPayload, S>

  type WithdrawRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WithdrawRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WithdrawRequestCountAggregateInputType | true
    }

  export interface WithdrawRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WithdrawRequest'], meta: { name: 'WithdrawRequest' } }
    /**
     * Find zero or one WithdrawRequest that matches the filter.
     * @param {WithdrawRequestFindUniqueArgs} args - Arguments to find a WithdrawRequest
     * @example
     * // Get one WithdrawRequest
     * const withdrawRequest = await prisma.withdrawRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WithdrawRequestFindUniqueArgs>(args: SelectSubset<T, WithdrawRequestFindUniqueArgs<ExtArgs>>): Prisma__WithdrawRequestClient<$Result.GetResult<Prisma.$WithdrawRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WithdrawRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WithdrawRequestFindUniqueOrThrowArgs} args - Arguments to find a WithdrawRequest
     * @example
     * // Get one WithdrawRequest
     * const withdrawRequest = await prisma.withdrawRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WithdrawRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, WithdrawRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WithdrawRequestClient<$Result.GetResult<Prisma.$WithdrawRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WithdrawRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawRequestFindFirstArgs} args - Arguments to find a WithdrawRequest
     * @example
     * // Get one WithdrawRequest
     * const withdrawRequest = await prisma.withdrawRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WithdrawRequestFindFirstArgs>(args?: SelectSubset<T, WithdrawRequestFindFirstArgs<ExtArgs>>): Prisma__WithdrawRequestClient<$Result.GetResult<Prisma.$WithdrawRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WithdrawRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawRequestFindFirstOrThrowArgs} args - Arguments to find a WithdrawRequest
     * @example
     * // Get one WithdrawRequest
     * const withdrawRequest = await prisma.withdrawRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WithdrawRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, WithdrawRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__WithdrawRequestClient<$Result.GetResult<Prisma.$WithdrawRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WithdrawRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WithdrawRequests
     * const withdrawRequests = await prisma.withdrawRequest.findMany()
     * 
     * // Get first 10 WithdrawRequests
     * const withdrawRequests = await prisma.withdrawRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const withdrawRequestWithIdOnly = await prisma.withdrawRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WithdrawRequestFindManyArgs>(args?: SelectSubset<T, WithdrawRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WithdrawRequest.
     * @param {WithdrawRequestCreateArgs} args - Arguments to create a WithdrawRequest.
     * @example
     * // Create one WithdrawRequest
     * const WithdrawRequest = await prisma.withdrawRequest.create({
     *   data: {
     *     // ... data to create a WithdrawRequest
     *   }
     * })
     * 
     */
    create<T extends WithdrawRequestCreateArgs>(args: SelectSubset<T, WithdrawRequestCreateArgs<ExtArgs>>): Prisma__WithdrawRequestClient<$Result.GetResult<Prisma.$WithdrawRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WithdrawRequests.
     * @param {WithdrawRequestCreateManyArgs} args - Arguments to create many WithdrawRequests.
     * @example
     * // Create many WithdrawRequests
     * const withdrawRequest = await prisma.withdrawRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WithdrawRequestCreateManyArgs>(args?: SelectSubset<T, WithdrawRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WithdrawRequest.
     * @param {WithdrawRequestDeleteArgs} args - Arguments to delete one WithdrawRequest.
     * @example
     * // Delete one WithdrawRequest
     * const WithdrawRequest = await prisma.withdrawRequest.delete({
     *   where: {
     *     // ... filter to delete one WithdrawRequest
     *   }
     * })
     * 
     */
    delete<T extends WithdrawRequestDeleteArgs>(args: SelectSubset<T, WithdrawRequestDeleteArgs<ExtArgs>>): Prisma__WithdrawRequestClient<$Result.GetResult<Prisma.$WithdrawRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WithdrawRequest.
     * @param {WithdrawRequestUpdateArgs} args - Arguments to update one WithdrawRequest.
     * @example
     * // Update one WithdrawRequest
     * const withdrawRequest = await prisma.withdrawRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WithdrawRequestUpdateArgs>(args: SelectSubset<T, WithdrawRequestUpdateArgs<ExtArgs>>): Prisma__WithdrawRequestClient<$Result.GetResult<Prisma.$WithdrawRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WithdrawRequests.
     * @param {WithdrawRequestDeleteManyArgs} args - Arguments to filter WithdrawRequests to delete.
     * @example
     * // Delete a few WithdrawRequests
     * const { count } = await prisma.withdrawRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WithdrawRequestDeleteManyArgs>(args?: SelectSubset<T, WithdrawRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WithdrawRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WithdrawRequests
     * const withdrawRequest = await prisma.withdrawRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WithdrawRequestUpdateManyArgs>(args: SelectSubset<T, WithdrawRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WithdrawRequest.
     * @param {WithdrawRequestUpsertArgs} args - Arguments to update or create a WithdrawRequest.
     * @example
     * // Update or create a WithdrawRequest
     * const withdrawRequest = await prisma.withdrawRequest.upsert({
     *   create: {
     *     // ... data to create a WithdrawRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WithdrawRequest we want to update
     *   }
     * })
     */
    upsert<T extends WithdrawRequestUpsertArgs>(args: SelectSubset<T, WithdrawRequestUpsertArgs<ExtArgs>>): Prisma__WithdrawRequestClient<$Result.GetResult<Prisma.$WithdrawRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WithdrawRequests that matches the filter.
     * @param {WithdrawRequestFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const withdrawRequest = await prisma.withdrawRequest.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: WithdrawRequestFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a WithdrawRequest.
     * @param {WithdrawRequestAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const withdrawRequest = await prisma.withdrawRequest.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: WithdrawRequestAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of WithdrawRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawRequestCountArgs} args - Arguments to filter WithdrawRequests to count.
     * @example
     * // Count the number of WithdrawRequests
     * const count = await prisma.withdrawRequest.count({
     *   where: {
     *     // ... the filter for the WithdrawRequests we want to count
     *   }
     * })
    **/
    count<T extends WithdrawRequestCountArgs>(
      args?: Subset<T, WithdrawRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WithdrawRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WithdrawRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WithdrawRequestAggregateArgs>(args: Subset<T, WithdrawRequestAggregateArgs>): Prisma.PrismaPromise<GetWithdrawRequestAggregateType<T>>

    /**
     * Group by WithdrawRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WithdrawRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WithdrawRequestGroupByArgs['orderBy'] }
        : { orderBy?: WithdrawRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WithdrawRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWithdrawRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WithdrawRequest model
   */
  readonly fields: WithdrawRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WithdrawRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WithdrawRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WithdrawRequest model
   */
  interface WithdrawRequestFieldRefs {
    readonly id: FieldRef<"WithdrawRequest", 'String'>
    readonly amount: FieldRef<"WithdrawRequest", 'BigInt'>
    readonly user: FieldRef<"WithdrawRequest", 'String'>
    readonly agentId: FieldRef<"WithdrawRequest", 'String'>
    readonly coinType: FieldRef<"WithdrawRequest", 'String'>
    readonly status: FieldRef<"WithdrawRequest", 'WithdrawStatus'>
    readonly requestTime: FieldRef<"WithdrawRequest", 'DateTime'>
    readonly statusTime: FieldRef<"WithdrawRequest", 'DateTime'>
    readonly createdAt: FieldRef<"WithdrawRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"WithdrawRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WithdrawRequest findUnique
   */
  export type WithdrawRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawRequest
     */
    select?: WithdrawRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawRequest
     */
    omit?: WithdrawRequestOmit<ExtArgs> | null
    /**
     * Filter, which WithdrawRequest to fetch.
     */
    where: WithdrawRequestWhereUniqueInput
  }

  /**
   * WithdrawRequest findUniqueOrThrow
   */
  export type WithdrawRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawRequest
     */
    select?: WithdrawRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawRequest
     */
    omit?: WithdrawRequestOmit<ExtArgs> | null
    /**
     * Filter, which WithdrawRequest to fetch.
     */
    where: WithdrawRequestWhereUniqueInput
  }

  /**
   * WithdrawRequest findFirst
   */
  export type WithdrawRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawRequest
     */
    select?: WithdrawRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawRequest
     */
    omit?: WithdrawRequestOmit<ExtArgs> | null
    /**
     * Filter, which WithdrawRequest to fetch.
     */
    where?: WithdrawRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WithdrawRequests to fetch.
     */
    orderBy?: WithdrawRequestOrderByWithRelationInput | WithdrawRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WithdrawRequests.
     */
    cursor?: WithdrawRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WithdrawRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WithdrawRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WithdrawRequests.
     */
    distinct?: WithdrawRequestScalarFieldEnum | WithdrawRequestScalarFieldEnum[]
  }

  /**
   * WithdrawRequest findFirstOrThrow
   */
  export type WithdrawRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawRequest
     */
    select?: WithdrawRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawRequest
     */
    omit?: WithdrawRequestOmit<ExtArgs> | null
    /**
     * Filter, which WithdrawRequest to fetch.
     */
    where?: WithdrawRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WithdrawRequests to fetch.
     */
    orderBy?: WithdrawRequestOrderByWithRelationInput | WithdrawRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WithdrawRequests.
     */
    cursor?: WithdrawRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WithdrawRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WithdrawRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WithdrawRequests.
     */
    distinct?: WithdrawRequestScalarFieldEnum | WithdrawRequestScalarFieldEnum[]
  }

  /**
   * WithdrawRequest findMany
   */
  export type WithdrawRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawRequest
     */
    select?: WithdrawRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawRequest
     */
    omit?: WithdrawRequestOmit<ExtArgs> | null
    /**
     * Filter, which WithdrawRequests to fetch.
     */
    where?: WithdrawRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WithdrawRequests to fetch.
     */
    orderBy?: WithdrawRequestOrderByWithRelationInput | WithdrawRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WithdrawRequests.
     */
    cursor?: WithdrawRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WithdrawRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WithdrawRequests.
     */
    skip?: number
    distinct?: WithdrawRequestScalarFieldEnum | WithdrawRequestScalarFieldEnum[]
  }

  /**
   * WithdrawRequest create
   */
  export type WithdrawRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawRequest
     */
    select?: WithdrawRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawRequest
     */
    omit?: WithdrawRequestOmit<ExtArgs> | null
    /**
     * The data needed to create a WithdrawRequest.
     */
    data: XOR<WithdrawRequestCreateInput, WithdrawRequestUncheckedCreateInput>
  }

  /**
   * WithdrawRequest createMany
   */
  export type WithdrawRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WithdrawRequests.
     */
    data: WithdrawRequestCreateManyInput | WithdrawRequestCreateManyInput[]
  }

  /**
   * WithdrawRequest update
   */
  export type WithdrawRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawRequest
     */
    select?: WithdrawRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawRequest
     */
    omit?: WithdrawRequestOmit<ExtArgs> | null
    /**
     * The data needed to update a WithdrawRequest.
     */
    data: XOR<WithdrawRequestUpdateInput, WithdrawRequestUncheckedUpdateInput>
    /**
     * Choose, which WithdrawRequest to update.
     */
    where: WithdrawRequestWhereUniqueInput
  }

  /**
   * WithdrawRequest updateMany
   */
  export type WithdrawRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WithdrawRequests.
     */
    data: XOR<WithdrawRequestUpdateManyMutationInput, WithdrawRequestUncheckedUpdateManyInput>
    /**
     * Filter which WithdrawRequests to update
     */
    where?: WithdrawRequestWhereInput
    /**
     * Limit how many WithdrawRequests to update.
     */
    limit?: number
  }

  /**
   * WithdrawRequest upsert
   */
  export type WithdrawRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawRequest
     */
    select?: WithdrawRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawRequest
     */
    omit?: WithdrawRequestOmit<ExtArgs> | null
    /**
     * The filter to search for the WithdrawRequest to update in case it exists.
     */
    where: WithdrawRequestWhereUniqueInput
    /**
     * In case the WithdrawRequest found by the `where` argument doesn't exist, create a new WithdrawRequest with this data.
     */
    create: XOR<WithdrawRequestCreateInput, WithdrawRequestUncheckedCreateInput>
    /**
     * In case the WithdrawRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WithdrawRequestUpdateInput, WithdrawRequestUncheckedUpdateInput>
  }

  /**
   * WithdrawRequest delete
   */
  export type WithdrawRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawRequest
     */
    select?: WithdrawRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawRequest
     */
    omit?: WithdrawRequestOmit<ExtArgs> | null
    /**
     * Filter which WithdrawRequest to delete.
     */
    where: WithdrawRequestWhereUniqueInput
  }

  /**
   * WithdrawRequest deleteMany
   */
  export type WithdrawRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WithdrawRequests to delete
     */
    where?: WithdrawRequestWhereInput
    /**
     * Limit how many WithdrawRequests to delete.
     */
    limit?: number
  }

  /**
   * WithdrawRequest findRaw
   */
  export type WithdrawRequestFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * WithdrawRequest aggregateRaw
   */
  export type WithdrawRequestAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * WithdrawRequest without action
   */
  export type WithdrawRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawRequest
     */
    select?: WithdrawRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawRequest
     */
    omit?: WithdrawRequestOmit<ExtArgs> | null
  }


  /**
   * Model DepositRequest
   */

  export type AggregateDepositRequest = {
    _count: DepositRequestCountAggregateOutputType | null
    _avg: DepositRequestAvgAggregateOutputType | null
    _sum: DepositRequestSumAggregateOutputType | null
    _min: DepositRequestMinAggregateOutputType | null
    _max: DepositRequestMaxAggregateOutputType | null
  }

  export type DepositRequestAvgAggregateOutputType = {
    amount: number | null
  }

  export type DepositRequestSumAggregateOutputType = {
    amount: bigint | null
  }

  export type DepositRequestMinAggregateOutputType = {
    id: string | null
    amount: bigint | null
    user: string | null
    agentId: string | null
    successfulAgentId: string | null
    coinType: string | null
    comment: string | null
    status: $Enums.DepositStatus | null
    requestTime: Date | null
    statusTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepositRequestMaxAggregateOutputType = {
    id: string | null
    amount: bigint | null
    user: string | null
    agentId: string | null
    successfulAgentId: string | null
    coinType: string | null
    comment: string | null
    status: $Enums.DepositStatus | null
    requestTime: Date | null
    statusTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepositRequestCountAggregateOutputType = {
    id: number
    amount: number
    user: number
    agentId: number
    successfulAgentId: number
    coinType: number
    comment: number
    status: number
    requestTime: number
    statusTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DepositRequestAvgAggregateInputType = {
    amount?: true
  }

  export type DepositRequestSumAggregateInputType = {
    amount?: true
  }

  export type DepositRequestMinAggregateInputType = {
    id?: true
    amount?: true
    user?: true
    agentId?: true
    successfulAgentId?: true
    coinType?: true
    comment?: true
    status?: true
    requestTime?: true
    statusTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepositRequestMaxAggregateInputType = {
    id?: true
    amount?: true
    user?: true
    agentId?: true
    successfulAgentId?: true
    coinType?: true
    comment?: true
    status?: true
    requestTime?: true
    statusTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepositRequestCountAggregateInputType = {
    id?: true
    amount?: true
    user?: true
    agentId?: true
    successfulAgentId?: true
    coinType?: true
    comment?: true
    status?: true
    requestTime?: true
    statusTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DepositRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DepositRequest to aggregate.
     */
    where?: DepositRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepositRequests to fetch.
     */
    orderBy?: DepositRequestOrderByWithRelationInput | DepositRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepositRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepositRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepositRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DepositRequests
    **/
    _count?: true | DepositRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepositRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepositRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepositRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepositRequestMaxAggregateInputType
  }

  export type GetDepositRequestAggregateType<T extends DepositRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateDepositRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepositRequest[P]>
      : GetScalarType<T[P], AggregateDepositRequest[P]>
  }




  export type DepositRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepositRequestWhereInput
    orderBy?: DepositRequestOrderByWithAggregationInput | DepositRequestOrderByWithAggregationInput[]
    by: DepositRequestScalarFieldEnum[] | DepositRequestScalarFieldEnum
    having?: DepositRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepositRequestCountAggregateInputType | true
    _avg?: DepositRequestAvgAggregateInputType
    _sum?: DepositRequestSumAggregateInputType
    _min?: DepositRequestMinAggregateInputType
    _max?: DepositRequestMaxAggregateInputType
  }

  export type DepositRequestGroupByOutputType = {
    id: string
    amount: bigint
    user: string
    agentId: string
    successfulAgentId: string | null
    coinType: string
    comment: string
    status: $Enums.DepositStatus
    requestTime: Date
    statusTime: Date | null
    createdAt: Date
    updatedAt: Date
    _count: DepositRequestCountAggregateOutputType | null
    _avg: DepositRequestAvgAggregateOutputType | null
    _sum: DepositRequestSumAggregateOutputType | null
    _min: DepositRequestMinAggregateOutputType | null
    _max: DepositRequestMaxAggregateOutputType | null
  }

  type GetDepositRequestGroupByPayload<T extends DepositRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepositRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepositRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepositRequestGroupByOutputType[P]>
            : GetScalarType<T[P], DepositRequestGroupByOutputType[P]>
        }
      >
    >


  export type DepositRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    user?: boolean
    agentId?: boolean
    successfulAgentId?: boolean
    coinType?: boolean
    comment?: boolean
    status?: boolean
    requestTime?: boolean
    statusTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["depositRequest"]>



  export type DepositRequestSelectScalar = {
    id?: boolean
    amount?: boolean
    user?: boolean
    agentId?: boolean
    successfulAgentId?: boolean
    coinType?: boolean
    comment?: boolean
    status?: boolean
    requestTime?: boolean
    statusTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DepositRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "user" | "agentId" | "successfulAgentId" | "coinType" | "comment" | "status" | "requestTime" | "statusTime" | "createdAt" | "updatedAt", ExtArgs["result"]["depositRequest"]>

  export type $DepositRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DepositRequest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: bigint
      user: string
      agentId: string
      successfulAgentId: string | null
      coinType: string
      comment: string
      status: $Enums.DepositStatus
      requestTime: Date
      statusTime: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["depositRequest"]>
    composites: {}
  }

  type DepositRequestGetPayload<S extends boolean | null | undefined | DepositRequestDefaultArgs> = $Result.GetResult<Prisma.$DepositRequestPayload, S>

  type DepositRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepositRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepositRequestCountAggregateInputType | true
    }

  export interface DepositRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DepositRequest'], meta: { name: 'DepositRequest' } }
    /**
     * Find zero or one DepositRequest that matches the filter.
     * @param {DepositRequestFindUniqueArgs} args - Arguments to find a DepositRequest
     * @example
     * // Get one DepositRequest
     * const depositRequest = await prisma.depositRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepositRequestFindUniqueArgs>(args: SelectSubset<T, DepositRequestFindUniqueArgs<ExtArgs>>): Prisma__DepositRequestClient<$Result.GetResult<Prisma.$DepositRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DepositRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepositRequestFindUniqueOrThrowArgs} args - Arguments to find a DepositRequest
     * @example
     * // Get one DepositRequest
     * const depositRequest = await prisma.depositRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepositRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, DepositRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepositRequestClient<$Result.GetResult<Prisma.$DepositRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DepositRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositRequestFindFirstArgs} args - Arguments to find a DepositRequest
     * @example
     * // Get one DepositRequest
     * const depositRequest = await prisma.depositRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepositRequestFindFirstArgs>(args?: SelectSubset<T, DepositRequestFindFirstArgs<ExtArgs>>): Prisma__DepositRequestClient<$Result.GetResult<Prisma.$DepositRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DepositRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositRequestFindFirstOrThrowArgs} args - Arguments to find a DepositRequest
     * @example
     * // Get one DepositRequest
     * const depositRequest = await prisma.depositRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepositRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, DepositRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepositRequestClient<$Result.GetResult<Prisma.$DepositRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DepositRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DepositRequests
     * const depositRequests = await prisma.depositRequest.findMany()
     * 
     * // Get first 10 DepositRequests
     * const depositRequests = await prisma.depositRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const depositRequestWithIdOnly = await prisma.depositRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepositRequestFindManyArgs>(args?: SelectSubset<T, DepositRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DepositRequest.
     * @param {DepositRequestCreateArgs} args - Arguments to create a DepositRequest.
     * @example
     * // Create one DepositRequest
     * const DepositRequest = await prisma.depositRequest.create({
     *   data: {
     *     // ... data to create a DepositRequest
     *   }
     * })
     * 
     */
    create<T extends DepositRequestCreateArgs>(args: SelectSubset<T, DepositRequestCreateArgs<ExtArgs>>): Prisma__DepositRequestClient<$Result.GetResult<Prisma.$DepositRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DepositRequests.
     * @param {DepositRequestCreateManyArgs} args - Arguments to create many DepositRequests.
     * @example
     * // Create many DepositRequests
     * const depositRequest = await prisma.depositRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepositRequestCreateManyArgs>(args?: SelectSubset<T, DepositRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DepositRequest.
     * @param {DepositRequestDeleteArgs} args - Arguments to delete one DepositRequest.
     * @example
     * // Delete one DepositRequest
     * const DepositRequest = await prisma.depositRequest.delete({
     *   where: {
     *     // ... filter to delete one DepositRequest
     *   }
     * })
     * 
     */
    delete<T extends DepositRequestDeleteArgs>(args: SelectSubset<T, DepositRequestDeleteArgs<ExtArgs>>): Prisma__DepositRequestClient<$Result.GetResult<Prisma.$DepositRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DepositRequest.
     * @param {DepositRequestUpdateArgs} args - Arguments to update one DepositRequest.
     * @example
     * // Update one DepositRequest
     * const depositRequest = await prisma.depositRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepositRequestUpdateArgs>(args: SelectSubset<T, DepositRequestUpdateArgs<ExtArgs>>): Prisma__DepositRequestClient<$Result.GetResult<Prisma.$DepositRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DepositRequests.
     * @param {DepositRequestDeleteManyArgs} args - Arguments to filter DepositRequests to delete.
     * @example
     * // Delete a few DepositRequests
     * const { count } = await prisma.depositRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepositRequestDeleteManyArgs>(args?: SelectSubset<T, DepositRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DepositRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DepositRequests
     * const depositRequest = await prisma.depositRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepositRequestUpdateManyArgs>(args: SelectSubset<T, DepositRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DepositRequest.
     * @param {DepositRequestUpsertArgs} args - Arguments to update or create a DepositRequest.
     * @example
     * // Update or create a DepositRequest
     * const depositRequest = await prisma.depositRequest.upsert({
     *   create: {
     *     // ... data to create a DepositRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DepositRequest we want to update
     *   }
     * })
     */
    upsert<T extends DepositRequestUpsertArgs>(args: SelectSubset<T, DepositRequestUpsertArgs<ExtArgs>>): Prisma__DepositRequestClient<$Result.GetResult<Prisma.$DepositRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DepositRequests that matches the filter.
     * @param {DepositRequestFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const depositRequest = await prisma.depositRequest.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DepositRequestFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a DepositRequest.
     * @param {DepositRequestAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const depositRequest = await prisma.depositRequest.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DepositRequestAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of DepositRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositRequestCountArgs} args - Arguments to filter DepositRequests to count.
     * @example
     * // Count the number of DepositRequests
     * const count = await prisma.depositRequest.count({
     *   where: {
     *     // ... the filter for the DepositRequests we want to count
     *   }
     * })
    **/
    count<T extends DepositRequestCountArgs>(
      args?: Subset<T, DepositRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepositRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DepositRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepositRequestAggregateArgs>(args: Subset<T, DepositRequestAggregateArgs>): Prisma.PrismaPromise<GetDepositRequestAggregateType<T>>

    /**
     * Group by DepositRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepositRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepositRequestGroupByArgs['orderBy'] }
        : { orderBy?: DepositRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepositRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepositRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DepositRequest model
   */
  readonly fields: DepositRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DepositRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepositRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DepositRequest model
   */
  interface DepositRequestFieldRefs {
    readonly id: FieldRef<"DepositRequest", 'String'>
    readonly amount: FieldRef<"DepositRequest", 'BigInt'>
    readonly user: FieldRef<"DepositRequest", 'String'>
    readonly agentId: FieldRef<"DepositRequest", 'String'>
    readonly successfulAgentId: FieldRef<"DepositRequest", 'String'>
    readonly coinType: FieldRef<"DepositRequest", 'String'>
    readonly comment: FieldRef<"DepositRequest", 'String'>
    readonly status: FieldRef<"DepositRequest", 'DepositStatus'>
    readonly requestTime: FieldRef<"DepositRequest", 'DateTime'>
    readonly statusTime: FieldRef<"DepositRequest", 'DateTime'>
    readonly createdAt: FieldRef<"DepositRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"DepositRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DepositRequest findUnique
   */
  export type DepositRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositRequest
     */
    select?: DepositRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositRequest
     */
    omit?: DepositRequestOmit<ExtArgs> | null
    /**
     * Filter, which DepositRequest to fetch.
     */
    where: DepositRequestWhereUniqueInput
  }

  /**
   * DepositRequest findUniqueOrThrow
   */
  export type DepositRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositRequest
     */
    select?: DepositRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositRequest
     */
    omit?: DepositRequestOmit<ExtArgs> | null
    /**
     * Filter, which DepositRequest to fetch.
     */
    where: DepositRequestWhereUniqueInput
  }

  /**
   * DepositRequest findFirst
   */
  export type DepositRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositRequest
     */
    select?: DepositRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositRequest
     */
    omit?: DepositRequestOmit<ExtArgs> | null
    /**
     * Filter, which DepositRequest to fetch.
     */
    where?: DepositRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepositRequests to fetch.
     */
    orderBy?: DepositRequestOrderByWithRelationInput | DepositRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DepositRequests.
     */
    cursor?: DepositRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepositRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepositRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DepositRequests.
     */
    distinct?: DepositRequestScalarFieldEnum | DepositRequestScalarFieldEnum[]
  }

  /**
   * DepositRequest findFirstOrThrow
   */
  export type DepositRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositRequest
     */
    select?: DepositRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositRequest
     */
    omit?: DepositRequestOmit<ExtArgs> | null
    /**
     * Filter, which DepositRequest to fetch.
     */
    where?: DepositRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepositRequests to fetch.
     */
    orderBy?: DepositRequestOrderByWithRelationInput | DepositRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DepositRequests.
     */
    cursor?: DepositRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepositRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepositRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DepositRequests.
     */
    distinct?: DepositRequestScalarFieldEnum | DepositRequestScalarFieldEnum[]
  }

  /**
   * DepositRequest findMany
   */
  export type DepositRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositRequest
     */
    select?: DepositRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositRequest
     */
    omit?: DepositRequestOmit<ExtArgs> | null
    /**
     * Filter, which DepositRequests to fetch.
     */
    where?: DepositRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepositRequests to fetch.
     */
    orderBy?: DepositRequestOrderByWithRelationInput | DepositRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DepositRequests.
     */
    cursor?: DepositRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepositRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepositRequests.
     */
    skip?: number
    distinct?: DepositRequestScalarFieldEnum | DepositRequestScalarFieldEnum[]
  }

  /**
   * DepositRequest create
   */
  export type DepositRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositRequest
     */
    select?: DepositRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositRequest
     */
    omit?: DepositRequestOmit<ExtArgs> | null
    /**
     * The data needed to create a DepositRequest.
     */
    data: XOR<DepositRequestCreateInput, DepositRequestUncheckedCreateInput>
  }

  /**
   * DepositRequest createMany
   */
  export type DepositRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DepositRequests.
     */
    data: DepositRequestCreateManyInput | DepositRequestCreateManyInput[]
  }

  /**
   * DepositRequest update
   */
  export type DepositRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositRequest
     */
    select?: DepositRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositRequest
     */
    omit?: DepositRequestOmit<ExtArgs> | null
    /**
     * The data needed to update a DepositRequest.
     */
    data: XOR<DepositRequestUpdateInput, DepositRequestUncheckedUpdateInput>
    /**
     * Choose, which DepositRequest to update.
     */
    where: DepositRequestWhereUniqueInput
  }

  /**
   * DepositRequest updateMany
   */
  export type DepositRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DepositRequests.
     */
    data: XOR<DepositRequestUpdateManyMutationInput, DepositRequestUncheckedUpdateManyInput>
    /**
     * Filter which DepositRequests to update
     */
    where?: DepositRequestWhereInput
    /**
     * Limit how many DepositRequests to update.
     */
    limit?: number
  }

  /**
   * DepositRequest upsert
   */
  export type DepositRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositRequest
     */
    select?: DepositRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositRequest
     */
    omit?: DepositRequestOmit<ExtArgs> | null
    /**
     * The filter to search for the DepositRequest to update in case it exists.
     */
    where: DepositRequestWhereUniqueInput
    /**
     * In case the DepositRequest found by the `where` argument doesn't exist, create a new DepositRequest with this data.
     */
    create: XOR<DepositRequestCreateInput, DepositRequestUncheckedCreateInput>
    /**
     * In case the DepositRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepositRequestUpdateInput, DepositRequestUncheckedUpdateInput>
  }

  /**
   * DepositRequest delete
   */
  export type DepositRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositRequest
     */
    select?: DepositRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositRequest
     */
    omit?: DepositRequestOmit<ExtArgs> | null
    /**
     * Filter which DepositRequest to delete.
     */
    where: DepositRequestWhereUniqueInput
  }

  /**
   * DepositRequest deleteMany
   */
  export type DepositRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DepositRequests to delete
     */
    where?: DepositRequestWhereInput
    /**
     * Limit how many DepositRequests to delete.
     */
    limit?: number
  }

  /**
   * DepositRequest findRaw
   */
  export type DepositRequestFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DepositRequest aggregateRaw
   */
  export type DepositRequestAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DepositRequest without action
   */
  export type DepositRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositRequest
     */
    select?: DepositRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositRequest
     */
    omit?: DepositRequestOmit<ExtArgs> | null
  }


  /**
   * Model Cursor
   */

  export type AggregateCursor = {
    _count: CursorCountAggregateOutputType | null
    _min: CursorMinAggregateOutputType | null
    _max: CursorMaxAggregateOutputType | null
  }

  export type CursorMinAggregateOutputType = {
    id: string | null
    eventSeq: string | null
    txDigest: string | null
  }

  export type CursorMaxAggregateOutputType = {
    id: string | null
    eventSeq: string | null
    txDigest: string | null
  }

  export type CursorCountAggregateOutputType = {
    id: number
    eventSeq: number
    txDigest: number
    _all: number
  }


  export type CursorMinAggregateInputType = {
    id?: true
    eventSeq?: true
    txDigest?: true
  }

  export type CursorMaxAggregateInputType = {
    id?: true
    eventSeq?: true
    txDigest?: true
  }

  export type CursorCountAggregateInputType = {
    id?: true
    eventSeq?: true
    txDigest?: true
    _all?: true
  }

  export type CursorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cursor to aggregate.
     */
    where?: CursorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursors to fetch.
     */
    orderBy?: CursorOrderByWithRelationInput | CursorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CursorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cursors
    **/
    _count?: true | CursorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CursorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CursorMaxAggregateInputType
  }

  export type GetCursorAggregateType<T extends CursorAggregateArgs> = {
        [P in keyof T & keyof AggregateCursor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCursor[P]>
      : GetScalarType<T[P], AggregateCursor[P]>
  }




  export type CursorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CursorWhereInput
    orderBy?: CursorOrderByWithAggregationInput | CursorOrderByWithAggregationInput[]
    by: CursorScalarFieldEnum[] | CursorScalarFieldEnum
    having?: CursorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CursorCountAggregateInputType | true
    _min?: CursorMinAggregateInputType
    _max?: CursorMaxAggregateInputType
  }

  export type CursorGroupByOutputType = {
    id: string
    eventSeq: string
    txDigest: string
    _count: CursorCountAggregateOutputType | null
    _min: CursorMinAggregateOutputType | null
    _max: CursorMaxAggregateOutputType | null
  }

  type GetCursorGroupByPayload<T extends CursorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CursorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CursorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CursorGroupByOutputType[P]>
            : GetScalarType<T[P], CursorGroupByOutputType[P]>
        }
      >
    >


  export type CursorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventSeq?: boolean
    txDigest?: boolean
  }, ExtArgs["result"]["cursor"]>



  export type CursorSelectScalar = {
    id?: boolean
    eventSeq?: boolean
    txDigest?: boolean
  }

  export type CursorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventSeq" | "txDigest", ExtArgs["result"]["cursor"]>

  export type $CursorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cursor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventSeq: string
      txDigest: string
    }, ExtArgs["result"]["cursor"]>
    composites: {}
  }

  type CursorGetPayload<S extends boolean | null | undefined | CursorDefaultArgs> = $Result.GetResult<Prisma.$CursorPayload, S>

  type CursorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CursorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CursorCountAggregateInputType | true
    }

  export interface CursorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cursor'], meta: { name: 'Cursor' } }
    /**
     * Find zero or one Cursor that matches the filter.
     * @param {CursorFindUniqueArgs} args - Arguments to find a Cursor
     * @example
     * // Get one Cursor
     * const cursor = await prisma.cursor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CursorFindUniqueArgs>(args: SelectSubset<T, CursorFindUniqueArgs<ExtArgs>>): Prisma__CursorClient<$Result.GetResult<Prisma.$CursorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cursor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CursorFindUniqueOrThrowArgs} args - Arguments to find a Cursor
     * @example
     * // Get one Cursor
     * const cursor = await prisma.cursor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CursorFindUniqueOrThrowArgs>(args: SelectSubset<T, CursorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CursorClient<$Result.GetResult<Prisma.$CursorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cursor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursorFindFirstArgs} args - Arguments to find a Cursor
     * @example
     * // Get one Cursor
     * const cursor = await prisma.cursor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CursorFindFirstArgs>(args?: SelectSubset<T, CursorFindFirstArgs<ExtArgs>>): Prisma__CursorClient<$Result.GetResult<Prisma.$CursorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cursor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursorFindFirstOrThrowArgs} args - Arguments to find a Cursor
     * @example
     * // Get one Cursor
     * const cursor = await prisma.cursor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CursorFindFirstOrThrowArgs>(args?: SelectSubset<T, CursorFindFirstOrThrowArgs<ExtArgs>>): Prisma__CursorClient<$Result.GetResult<Prisma.$CursorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cursors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cursors
     * const cursors = await prisma.cursor.findMany()
     * 
     * // Get first 10 Cursors
     * const cursors = await prisma.cursor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cursorWithIdOnly = await prisma.cursor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CursorFindManyArgs>(args?: SelectSubset<T, CursorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cursor.
     * @param {CursorCreateArgs} args - Arguments to create a Cursor.
     * @example
     * // Create one Cursor
     * const Cursor = await prisma.cursor.create({
     *   data: {
     *     // ... data to create a Cursor
     *   }
     * })
     * 
     */
    create<T extends CursorCreateArgs>(args: SelectSubset<T, CursorCreateArgs<ExtArgs>>): Prisma__CursorClient<$Result.GetResult<Prisma.$CursorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cursors.
     * @param {CursorCreateManyArgs} args - Arguments to create many Cursors.
     * @example
     * // Create many Cursors
     * const cursor = await prisma.cursor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CursorCreateManyArgs>(args?: SelectSubset<T, CursorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cursor.
     * @param {CursorDeleteArgs} args - Arguments to delete one Cursor.
     * @example
     * // Delete one Cursor
     * const Cursor = await prisma.cursor.delete({
     *   where: {
     *     // ... filter to delete one Cursor
     *   }
     * })
     * 
     */
    delete<T extends CursorDeleteArgs>(args: SelectSubset<T, CursorDeleteArgs<ExtArgs>>): Prisma__CursorClient<$Result.GetResult<Prisma.$CursorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cursor.
     * @param {CursorUpdateArgs} args - Arguments to update one Cursor.
     * @example
     * // Update one Cursor
     * const cursor = await prisma.cursor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CursorUpdateArgs>(args: SelectSubset<T, CursorUpdateArgs<ExtArgs>>): Prisma__CursorClient<$Result.GetResult<Prisma.$CursorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cursors.
     * @param {CursorDeleteManyArgs} args - Arguments to filter Cursors to delete.
     * @example
     * // Delete a few Cursors
     * const { count } = await prisma.cursor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CursorDeleteManyArgs>(args?: SelectSubset<T, CursorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cursors
     * const cursor = await prisma.cursor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CursorUpdateManyArgs>(args: SelectSubset<T, CursorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cursor.
     * @param {CursorUpsertArgs} args - Arguments to update or create a Cursor.
     * @example
     * // Update or create a Cursor
     * const cursor = await prisma.cursor.upsert({
     *   create: {
     *     // ... data to create a Cursor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cursor we want to update
     *   }
     * })
     */
    upsert<T extends CursorUpsertArgs>(args: SelectSubset<T, CursorUpsertArgs<ExtArgs>>): Prisma__CursorClient<$Result.GetResult<Prisma.$CursorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cursors that matches the filter.
     * @param {CursorFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const cursor = await prisma.cursor.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CursorFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Cursor.
     * @param {CursorAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const cursor = await prisma.cursor.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CursorAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Cursors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursorCountArgs} args - Arguments to filter Cursors to count.
     * @example
     * // Count the number of Cursors
     * const count = await prisma.cursor.count({
     *   where: {
     *     // ... the filter for the Cursors we want to count
     *   }
     * })
    **/
    count<T extends CursorCountArgs>(
      args?: Subset<T, CursorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CursorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cursor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CursorAggregateArgs>(args: Subset<T, CursorAggregateArgs>): Prisma.PrismaPromise<GetCursorAggregateType<T>>

    /**
     * Group by Cursor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CursorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CursorGroupByArgs['orderBy'] }
        : { orderBy?: CursorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CursorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCursorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cursor model
   */
  readonly fields: CursorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cursor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CursorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cursor model
   */
  interface CursorFieldRefs {
    readonly id: FieldRef<"Cursor", 'String'>
    readonly eventSeq: FieldRef<"Cursor", 'String'>
    readonly txDigest: FieldRef<"Cursor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cursor findUnique
   */
  export type CursorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursor
     */
    select?: CursorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cursor
     */
    omit?: CursorOmit<ExtArgs> | null
    /**
     * Filter, which Cursor to fetch.
     */
    where: CursorWhereUniqueInput
  }

  /**
   * Cursor findUniqueOrThrow
   */
  export type CursorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursor
     */
    select?: CursorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cursor
     */
    omit?: CursorOmit<ExtArgs> | null
    /**
     * Filter, which Cursor to fetch.
     */
    where: CursorWhereUniqueInput
  }

  /**
   * Cursor findFirst
   */
  export type CursorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursor
     */
    select?: CursorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cursor
     */
    omit?: CursorOmit<ExtArgs> | null
    /**
     * Filter, which Cursor to fetch.
     */
    where?: CursorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursors to fetch.
     */
    orderBy?: CursorOrderByWithRelationInput | CursorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cursors.
     */
    cursor?: CursorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cursors.
     */
    distinct?: CursorScalarFieldEnum | CursorScalarFieldEnum[]
  }

  /**
   * Cursor findFirstOrThrow
   */
  export type CursorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursor
     */
    select?: CursorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cursor
     */
    omit?: CursorOmit<ExtArgs> | null
    /**
     * Filter, which Cursor to fetch.
     */
    where?: CursorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursors to fetch.
     */
    orderBy?: CursorOrderByWithRelationInput | CursorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cursors.
     */
    cursor?: CursorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cursors.
     */
    distinct?: CursorScalarFieldEnum | CursorScalarFieldEnum[]
  }

  /**
   * Cursor findMany
   */
  export type CursorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursor
     */
    select?: CursorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cursor
     */
    omit?: CursorOmit<ExtArgs> | null
    /**
     * Filter, which Cursors to fetch.
     */
    where?: CursorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursors to fetch.
     */
    orderBy?: CursorOrderByWithRelationInput | CursorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cursors.
     */
    cursor?: CursorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursors.
     */
    skip?: number
    distinct?: CursorScalarFieldEnum | CursorScalarFieldEnum[]
  }

  /**
   * Cursor create
   */
  export type CursorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursor
     */
    select?: CursorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cursor
     */
    omit?: CursorOmit<ExtArgs> | null
    /**
     * The data needed to create a Cursor.
     */
    data: XOR<CursorCreateInput, CursorUncheckedCreateInput>
  }

  /**
   * Cursor createMany
   */
  export type CursorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cursors.
     */
    data: CursorCreateManyInput | CursorCreateManyInput[]
  }

  /**
   * Cursor update
   */
  export type CursorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursor
     */
    select?: CursorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cursor
     */
    omit?: CursorOmit<ExtArgs> | null
    /**
     * The data needed to update a Cursor.
     */
    data: XOR<CursorUpdateInput, CursorUncheckedUpdateInput>
    /**
     * Choose, which Cursor to update.
     */
    where: CursorWhereUniqueInput
  }

  /**
   * Cursor updateMany
   */
  export type CursorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cursors.
     */
    data: XOR<CursorUpdateManyMutationInput, CursorUncheckedUpdateManyInput>
    /**
     * Filter which Cursors to update
     */
    where?: CursorWhereInput
    /**
     * Limit how many Cursors to update.
     */
    limit?: number
  }

  /**
   * Cursor upsert
   */
  export type CursorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursor
     */
    select?: CursorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cursor
     */
    omit?: CursorOmit<ExtArgs> | null
    /**
     * The filter to search for the Cursor to update in case it exists.
     */
    where: CursorWhereUniqueInput
    /**
     * In case the Cursor found by the `where` argument doesn't exist, create a new Cursor with this data.
     */
    create: XOR<CursorCreateInput, CursorUncheckedCreateInput>
    /**
     * In case the Cursor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CursorUpdateInput, CursorUncheckedUpdateInput>
  }

  /**
   * Cursor delete
   */
  export type CursorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursor
     */
    select?: CursorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cursor
     */
    omit?: CursorOmit<ExtArgs> | null
    /**
     * Filter which Cursor to delete.
     */
    where: CursorWhereUniqueInput
  }

  /**
   * Cursor deleteMany
   */
  export type CursorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cursors to delete
     */
    where?: CursorWhereInput
    /**
     * Limit how many Cursors to delete.
     */
    limit?: number
  }

  /**
   * Cursor findRaw
   */
  export type CursorFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Cursor aggregateRaw
   */
  export type CursorAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Cursor without action
   */
  export type CursorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursor
     */
    select?: CursorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cursor
     */
    omit?: CursorOmit<ExtArgs> | null
  }


  /**
   * Model Pool
   */

  export type AggregatePool = {
    _count: PoolCountAggregateOutputType | null
    _avg: PoolAvgAggregateOutputType | null
    _sum: PoolSumAggregateOutputType | null
    _min: PoolMinAggregateOutputType | null
    _max: PoolMaxAggregateOutputType | null
  }

  export type PoolAvgAggregateOutputType = {
    coinBalance: number | null
    rewardsBalance: number | null
    feeDecimal: number | null
    defaultFees: number | null
    coinDecimal: number | null
    ratesDollar: number | null
  }

  export type PoolSumAggregateOutputType = {
    coinBalance: bigint | null
    rewardsBalance: bigint | null
    feeDecimal: number | null
    defaultFees: number | null
    coinDecimal: number | null
    ratesDollar: number | null
  }

  export type PoolMinAggregateOutputType = {
    id: string | null
    coinType: string | null
    coinName: string | null
    coinBalance: bigint | null
    rewardsBalance: bigint | null
    feeDecimal: number | null
    defaultFees: number | null
    coinDecimal: number | null
    ratesDollar: number | null
    createdAt: Date | null
  }

  export type PoolMaxAggregateOutputType = {
    id: string | null
    coinType: string | null
    coinName: string | null
    coinBalance: bigint | null
    rewardsBalance: bigint | null
    feeDecimal: number | null
    defaultFees: number | null
    coinDecimal: number | null
    ratesDollar: number | null
    createdAt: Date | null
  }

  export type PoolCountAggregateOutputType = {
    id: number
    coinType: number
    coinName: number
    coinBalance: number
    rewardsBalance: number
    feeDecimal: number
    defaultFees: number
    coinDecimal: number
    ratesDollar: number
    createdAt: number
    _all: number
  }


  export type PoolAvgAggregateInputType = {
    coinBalance?: true
    rewardsBalance?: true
    feeDecimal?: true
    defaultFees?: true
    coinDecimal?: true
    ratesDollar?: true
  }

  export type PoolSumAggregateInputType = {
    coinBalance?: true
    rewardsBalance?: true
    feeDecimal?: true
    defaultFees?: true
    coinDecimal?: true
    ratesDollar?: true
  }

  export type PoolMinAggregateInputType = {
    id?: true
    coinType?: true
    coinName?: true
    coinBalance?: true
    rewardsBalance?: true
    feeDecimal?: true
    defaultFees?: true
    coinDecimal?: true
    ratesDollar?: true
    createdAt?: true
  }

  export type PoolMaxAggregateInputType = {
    id?: true
    coinType?: true
    coinName?: true
    coinBalance?: true
    rewardsBalance?: true
    feeDecimal?: true
    defaultFees?: true
    coinDecimal?: true
    ratesDollar?: true
    createdAt?: true
  }

  export type PoolCountAggregateInputType = {
    id?: true
    coinType?: true
    coinName?: true
    coinBalance?: true
    rewardsBalance?: true
    feeDecimal?: true
    defaultFees?: true
    coinDecimal?: true
    ratesDollar?: true
    createdAt?: true
    _all?: true
  }

  export type PoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pool to aggregate.
     */
    where?: PoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pools to fetch.
     */
    orderBy?: PoolOrderByWithRelationInput | PoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pools
    **/
    _count?: true | PoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PoolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PoolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PoolMaxAggregateInputType
  }

  export type GetPoolAggregateType<T extends PoolAggregateArgs> = {
        [P in keyof T & keyof AggregatePool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePool[P]>
      : GetScalarType<T[P], AggregatePool[P]>
  }




  export type PoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PoolWhereInput
    orderBy?: PoolOrderByWithAggregationInput | PoolOrderByWithAggregationInput[]
    by: PoolScalarFieldEnum[] | PoolScalarFieldEnum
    having?: PoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PoolCountAggregateInputType | true
    _avg?: PoolAvgAggregateInputType
    _sum?: PoolSumAggregateInputType
    _min?: PoolMinAggregateInputType
    _max?: PoolMaxAggregateInputType
  }

  export type PoolGroupByOutputType = {
    id: string
    coinType: string
    coinName: string
    coinBalance: bigint
    rewardsBalance: bigint
    feeDecimal: number
    defaultFees: number | null
    coinDecimal: number
    ratesDollar: number
    createdAt: Date
    _count: PoolCountAggregateOutputType | null
    _avg: PoolAvgAggregateOutputType | null
    _sum: PoolSumAggregateOutputType | null
    _min: PoolMinAggregateOutputType | null
    _max: PoolMaxAggregateOutputType | null
  }

  type GetPoolGroupByPayload<T extends PoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PoolGroupByOutputType[P]>
            : GetScalarType<T[P], PoolGroupByOutputType[P]>
        }
      >
    >


  export type PoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coinType?: boolean
    coinName?: boolean
    coinBalance?: boolean
    rewardsBalance?: boolean
    feeDecimal?: boolean
    defaultFees?: boolean
    coinDecimal?: boolean
    ratesDollar?: boolean
    createdAt?: boolean
    liquidityProviders?: boolean | Pool$liquidityProvidersArgs<ExtArgs>
    swapFees?: boolean | Pool$swapFeesArgs<ExtArgs>
    _count?: boolean | PoolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pool"]>



  export type PoolSelectScalar = {
    id?: boolean
    coinType?: boolean
    coinName?: boolean
    coinBalance?: boolean
    rewardsBalance?: boolean
    feeDecimal?: boolean
    defaultFees?: boolean
    coinDecimal?: boolean
    ratesDollar?: boolean
    createdAt?: boolean
  }

  export type PoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "coinType" | "coinName" | "coinBalance" | "rewardsBalance" | "feeDecimal" | "defaultFees" | "coinDecimal" | "ratesDollar" | "createdAt", ExtArgs["result"]["pool"]>
  export type PoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    liquidityProviders?: boolean | Pool$liquidityProvidersArgs<ExtArgs>
    swapFees?: boolean | Pool$swapFeesArgs<ExtArgs>
    _count?: boolean | PoolCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pool"
    objects: {
      liquidityProviders: Prisma.$LiquidityProviderPayload<ExtArgs>[]
      swapFees: Prisma.$SwapFeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      coinType: string
      coinName: string
      coinBalance: bigint
      rewardsBalance: bigint
      feeDecimal: number
      defaultFees: number | null
      coinDecimal: number
      ratesDollar: number
      createdAt: Date
    }, ExtArgs["result"]["pool"]>
    composites: {}
  }

  type PoolGetPayload<S extends boolean | null | undefined | PoolDefaultArgs> = $Result.GetResult<Prisma.$PoolPayload, S>

  type PoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PoolCountAggregateInputType | true
    }

  export interface PoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pool'], meta: { name: 'Pool' } }
    /**
     * Find zero or one Pool that matches the filter.
     * @param {PoolFindUniqueArgs} args - Arguments to find a Pool
     * @example
     * // Get one Pool
     * const pool = await prisma.pool.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PoolFindUniqueArgs>(args: SelectSubset<T, PoolFindUniqueArgs<ExtArgs>>): Prisma__PoolClient<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pool that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PoolFindUniqueOrThrowArgs} args - Arguments to find a Pool
     * @example
     * // Get one Pool
     * const pool = await prisma.pool.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PoolFindUniqueOrThrowArgs>(args: SelectSubset<T, PoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PoolClient<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pool that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolFindFirstArgs} args - Arguments to find a Pool
     * @example
     * // Get one Pool
     * const pool = await prisma.pool.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PoolFindFirstArgs>(args?: SelectSubset<T, PoolFindFirstArgs<ExtArgs>>): Prisma__PoolClient<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pool that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolFindFirstOrThrowArgs} args - Arguments to find a Pool
     * @example
     * // Get one Pool
     * const pool = await prisma.pool.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PoolFindFirstOrThrowArgs>(args?: SelectSubset<T, PoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__PoolClient<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pools
     * const pools = await prisma.pool.findMany()
     * 
     * // Get first 10 Pools
     * const pools = await prisma.pool.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const poolWithIdOnly = await prisma.pool.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PoolFindManyArgs>(args?: SelectSubset<T, PoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pool.
     * @param {PoolCreateArgs} args - Arguments to create a Pool.
     * @example
     * // Create one Pool
     * const Pool = await prisma.pool.create({
     *   data: {
     *     // ... data to create a Pool
     *   }
     * })
     * 
     */
    create<T extends PoolCreateArgs>(args: SelectSubset<T, PoolCreateArgs<ExtArgs>>): Prisma__PoolClient<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pools.
     * @param {PoolCreateManyArgs} args - Arguments to create many Pools.
     * @example
     * // Create many Pools
     * const pool = await prisma.pool.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PoolCreateManyArgs>(args?: SelectSubset<T, PoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pool.
     * @param {PoolDeleteArgs} args - Arguments to delete one Pool.
     * @example
     * // Delete one Pool
     * const Pool = await prisma.pool.delete({
     *   where: {
     *     // ... filter to delete one Pool
     *   }
     * })
     * 
     */
    delete<T extends PoolDeleteArgs>(args: SelectSubset<T, PoolDeleteArgs<ExtArgs>>): Prisma__PoolClient<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pool.
     * @param {PoolUpdateArgs} args - Arguments to update one Pool.
     * @example
     * // Update one Pool
     * const pool = await prisma.pool.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PoolUpdateArgs>(args: SelectSubset<T, PoolUpdateArgs<ExtArgs>>): Prisma__PoolClient<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pools.
     * @param {PoolDeleteManyArgs} args - Arguments to filter Pools to delete.
     * @example
     * // Delete a few Pools
     * const { count } = await prisma.pool.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PoolDeleteManyArgs>(args?: SelectSubset<T, PoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pools
     * const pool = await prisma.pool.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PoolUpdateManyArgs>(args: SelectSubset<T, PoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pool.
     * @param {PoolUpsertArgs} args - Arguments to update or create a Pool.
     * @example
     * // Update or create a Pool
     * const pool = await prisma.pool.upsert({
     *   create: {
     *     // ... data to create a Pool
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pool we want to update
     *   }
     * })
     */
    upsert<T extends PoolUpsertArgs>(args: SelectSubset<T, PoolUpsertArgs<ExtArgs>>): Prisma__PoolClient<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pools that matches the filter.
     * @param {PoolFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const pool = await prisma.pool.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PoolFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Pool.
     * @param {PoolAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const pool = await prisma.pool.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PoolAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Pools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolCountArgs} args - Arguments to filter Pools to count.
     * @example
     * // Count the number of Pools
     * const count = await prisma.pool.count({
     *   where: {
     *     // ... the filter for the Pools we want to count
     *   }
     * })
    **/
    count<T extends PoolCountArgs>(
      args?: Subset<T, PoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PoolAggregateArgs>(args: Subset<T, PoolAggregateArgs>): Prisma.PrismaPromise<GetPoolAggregateType<T>>

    /**
     * Group by Pool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PoolGroupByArgs['orderBy'] }
        : { orderBy?: PoolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pool model
   */
  readonly fields: PoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pool.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    liquidityProviders<T extends Pool$liquidityProvidersArgs<ExtArgs> = {}>(args?: Subset<T, Pool$liquidityProvidersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiquidityProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    swapFees<T extends Pool$swapFeesArgs<ExtArgs> = {}>(args?: Subset<T, Pool$swapFeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwapFeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pool model
   */
  interface PoolFieldRefs {
    readonly id: FieldRef<"Pool", 'String'>
    readonly coinType: FieldRef<"Pool", 'String'>
    readonly coinName: FieldRef<"Pool", 'String'>
    readonly coinBalance: FieldRef<"Pool", 'BigInt'>
    readonly rewardsBalance: FieldRef<"Pool", 'BigInt'>
    readonly feeDecimal: FieldRef<"Pool", 'Int'>
    readonly defaultFees: FieldRef<"Pool", 'Int'>
    readonly coinDecimal: FieldRef<"Pool", 'Int'>
    readonly ratesDollar: FieldRef<"Pool", 'Float'>
    readonly createdAt: FieldRef<"Pool", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pool findUnique
   */
  export type PoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInclude<ExtArgs> | null
    /**
     * Filter, which Pool to fetch.
     */
    where: PoolWhereUniqueInput
  }

  /**
   * Pool findUniqueOrThrow
   */
  export type PoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInclude<ExtArgs> | null
    /**
     * Filter, which Pool to fetch.
     */
    where: PoolWhereUniqueInput
  }

  /**
   * Pool findFirst
   */
  export type PoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInclude<ExtArgs> | null
    /**
     * Filter, which Pool to fetch.
     */
    where?: PoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pools to fetch.
     */
    orderBy?: PoolOrderByWithRelationInput | PoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pools.
     */
    cursor?: PoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pools.
     */
    distinct?: PoolScalarFieldEnum | PoolScalarFieldEnum[]
  }

  /**
   * Pool findFirstOrThrow
   */
  export type PoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInclude<ExtArgs> | null
    /**
     * Filter, which Pool to fetch.
     */
    where?: PoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pools to fetch.
     */
    orderBy?: PoolOrderByWithRelationInput | PoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pools.
     */
    cursor?: PoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pools.
     */
    distinct?: PoolScalarFieldEnum | PoolScalarFieldEnum[]
  }

  /**
   * Pool findMany
   */
  export type PoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInclude<ExtArgs> | null
    /**
     * Filter, which Pools to fetch.
     */
    where?: PoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pools to fetch.
     */
    orderBy?: PoolOrderByWithRelationInput | PoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pools.
     */
    cursor?: PoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pools.
     */
    skip?: number
    distinct?: PoolScalarFieldEnum | PoolScalarFieldEnum[]
  }

  /**
   * Pool create
   */
  export type PoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInclude<ExtArgs> | null
    /**
     * The data needed to create a Pool.
     */
    data: XOR<PoolCreateInput, PoolUncheckedCreateInput>
  }

  /**
   * Pool createMany
   */
  export type PoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pools.
     */
    data: PoolCreateManyInput | PoolCreateManyInput[]
  }

  /**
   * Pool update
   */
  export type PoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInclude<ExtArgs> | null
    /**
     * The data needed to update a Pool.
     */
    data: XOR<PoolUpdateInput, PoolUncheckedUpdateInput>
    /**
     * Choose, which Pool to update.
     */
    where: PoolWhereUniqueInput
  }

  /**
   * Pool updateMany
   */
  export type PoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pools.
     */
    data: XOR<PoolUpdateManyMutationInput, PoolUncheckedUpdateManyInput>
    /**
     * Filter which Pools to update
     */
    where?: PoolWhereInput
    /**
     * Limit how many Pools to update.
     */
    limit?: number
  }

  /**
   * Pool upsert
   */
  export type PoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInclude<ExtArgs> | null
    /**
     * The filter to search for the Pool to update in case it exists.
     */
    where: PoolWhereUniqueInput
    /**
     * In case the Pool found by the `where` argument doesn't exist, create a new Pool with this data.
     */
    create: XOR<PoolCreateInput, PoolUncheckedCreateInput>
    /**
     * In case the Pool was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PoolUpdateInput, PoolUncheckedUpdateInput>
  }

  /**
   * Pool delete
   */
  export type PoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInclude<ExtArgs> | null
    /**
     * Filter which Pool to delete.
     */
    where: PoolWhereUniqueInput
  }

  /**
   * Pool deleteMany
   */
  export type PoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pools to delete
     */
    where?: PoolWhereInput
    /**
     * Limit how many Pools to delete.
     */
    limit?: number
  }

  /**
   * Pool findRaw
   */
  export type PoolFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Pool aggregateRaw
   */
  export type PoolAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Pool.liquidityProviders
   */
  export type Pool$liquidityProvidersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiquidityProvider
     */
    select?: LiquidityProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiquidityProvider
     */
    omit?: LiquidityProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiquidityProviderInclude<ExtArgs> | null
    where?: LiquidityProviderWhereInput
    orderBy?: LiquidityProviderOrderByWithRelationInput | LiquidityProviderOrderByWithRelationInput[]
    cursor?: LiquidityProviderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LiquidityProviderScalarFieldEnum | LiquidityProviderScalarFieldEnum[]
  }

  /**
   * Pool.swapFees
   */
  export type Pool$swapFeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapFee
     */
    select?: SwapFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapFee
     */
    omit?: SwapFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapFeeInclude<ExtArgs> | null
    where?: SwapFeeWhereInput
    orderBy?: SwapFeeOrderByWithRelationInput | SwapFeeOrderByWithRelationInput[]
    cursor?: SwapFeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SwapFeeScalarFieldEnum | SwapFeeScalarFieldEnum[]
  }

  /**
   * Pool without action
   */
  export type PoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInclude<ExtArgs> | null
  }


  /**
   * Model LiquidityProvider
   */

  export type AggregateLiquidityProvider = {
    _count: LiquidityProviderCountAggregateOutputType | null
    _avg: LiquidityProviderAvgAggregateOutputType | null
    _sum: LiquidityProviderSumAggregateOutputType | null
    _min: LiquidityProviderMinAggregateOutputType | null
    _max: LiquidityProviderMaxAggregateOutputType | null
  }

  export type LiquidityProviderAvgAggregateOutputType = {
    amount: number | null
    rewards: number | null
  }

  export type LiquidityProviderSumAggregateOutputType = {
    amount: bigint | null
    rewards: bigint | null
  }

  export type LiquidityProviderMinAggregateOutputType = {
    id: string | null
    poolId: string | null
    provider: string | null
    amount: bigint | null
    rewards: bigint | null
  }

  export type LiquidityProviderMaxAggregateOutputType = {
    id: string | null
    poolId: string | null
    provider: string | null
    amount: bigint | null
    rewards: bigint | null
  }

  export type LiquidityProviderCountAggregateOutputType = {
    id: number
    poolId: number
    provider: number
    amount: number
    rewards: number
    _all: number
  }


  export type LiquidityProviderAvgAggregateInputType = {
    amount?: true
    rewards?: true
  }

  export type LiquidityProviderSumAggregateInputType = {
    amount?: true
    rewards?: true
  }

  export type LiquidityProviderMinAggregateInputType = {
    id?: true
    poolId?: true
    provider?: true
    amount?: true
    rewards?: true
  }

  export type LiquidityProviderMaxAggregateInputType = {
    id?: true
    poolId?: true
    provider?: true
    amount?: true
    rewards?: true
  }

  export type LiquidityProviderCountAggregateInputType = {
    id?: true
    poolId?: true
    provider?: true
    amount?: true
    rewards?: true
    _all?: true
  }

  export type LiquidityProviderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LiquidityProvider to aggregate.
     */
    where?: LiquidityProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiquidityProviders to fetch.
     */
    orderBy?: LiquidityProviderOrderByWithRelationInput | LiquidityProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LiquidityProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiquidityProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiquidityProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LiquidityProviders
    **/
    _count?: true | LiquidityProviderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LiquidityProviderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LiquidityProviderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LiquidityProviderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LiquidityProviderMaxAggregateInputType
  }

  export type GetLiquidityProviderAggregateType<T extends LiquidityProviderAggregateArgs> = {
        [P in keyof T & keyof AggregateLiquidityProvider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLiquidityProvider[P]>
      : GetScalarType<T[P], AggregateLiquidityProvider[P]>
  }




  export type LiquidityProviderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LiquidityProviderWhereInput
    orderBy?: LiquidityProviderOrderByWithAggregationInput | LiquidityProviderOrderByWithAggregationInput[]
    by: LiquidityProviderScalarFieldEnum[] | LiquidityProviderScalarFieldEnum
    having?: LiquidityProviderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LiquidityProviderCountAggregateInputType | true
    _avg?: LiquidityProviderAvgAggregateInputType
    _sum?: LiquidityProviderSumAggregateInputType
    _min?: LiquidityProviderMinAggregateInputType
    _max?: LiquidityProviderMaxAggregateInputType
  }

  export type LiquidityProviderGroupByOutputType = {
    id: string
    poolId: string
    provider: string
    amount: bigint
    rewards: bigint
    _count: LiquidityProviderCountAggregateOutputType | null
    _avg: LiquidityProviderAvgAggregateOutputType | null
    _sum: LiquidityProviderSumAggregateOutputType | null
    _min: LiquidityProviderMinAggregateOutputType | null
    _max: LiquidityProviderMaxAggregateOutputType | null
  }

  type GetLiquidityProviderGroupByPayload<T extends LiquidityProviderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LiquidityProviderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LiquidityProviderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LiquidityProviderGroupByOutputType[P]>
            : GetScalarType<T[P], LiquidityProviderGroupByOutputType[P]>
        }
      >
    >


  export type LiquidityProviderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    poolId?: boolean
    provider?: boolean
    amount?: boolean
    rewards?: boolean
    pool?: boolean | PoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["liquidityProvider"]>



  export type LiquidityProviderSelectScalar = {
    id?: boolean
    poolId?: boolean
    provider?: boolean
    amount?: boolean
    rewards?: boolean
  }

  export type LiquidityProviderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "poolId" | "provider" | "amount" | "rewards", ExtArgs["result"]["liquidityProvider"]>
  export type LiquidityProviderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pool?: boolean | PoolDefaultArgs<ExtArgs>
  }

  export type $LiquidityProviderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LiquidityProvider"
    objects: {
      pool: Prisma.$PoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      poolId: string
      provider: string
      amount: bigint
      rewards: bigint
    }, ExtArgs["result"]["liquidityProvider"]>
    composites: {}
  }

  type LiquidityProviderGetPayload<S extends boolean | null | undefined | LiquidityProviderDefaultArgs> = $Result.GetResult<Prisma.$LiquidityProviderPayload, S>

  type LiquidityProviderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LiquidityProviderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LiquidityProviderCountAggregateInputType | true
    }

  export interface LiquidityProviderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LiquidityProvider'], meta: { name: 'LiquidityProvider' } }
    /**
     * Find zero or one LiquidityProvider that matches the filter.
     * @param {LiquidityProviderFindUniqueArgs} args - Arguments to find a LiquidityProvider
     * @example
     * // Get one LiquidityProvider
     * const liquidityProvider = await prisma.liquidityProvider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LiquidityProviderFindUniqueArgs>(args: SelectSubset<T, LiquidityProviderFindUniqueArgs<ExtArgs>>): Prisma__LiquidityProviderClient<$Result.GetResult<Prisma.$LiquidityProviderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LiquidityProvider that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LiquidityProviderFindUniqueOrThrowArgs} args - Arguments to find a LiquidityProvider
     * @example
     * // Get one LiquidityProvider
     * const liquidityProvider = await prisma.liquidityProvider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LiquidityProviderFindUniqueOrThrowArgs>(args: SelectSubset<T, LiquidityProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LiquidityProviderClient<$Result.GetResult<Prisma.$LiquidityProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LiquidityProvider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiquidityProviderFindFirstArgs} args - Arguments to find a LiquidityProvider
     * @example
     * // Get one LiquidityProvider
     * const liquidityProvider = await prisma.liquidityProvider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LiquidityProviderFindFirstArgs>(args?: SelectSubset<T, LiquidityProviderFindFirstArgs<ExtArgs>>): Prisma__LiquidityProviderClient<$Result.GetResult<Prisma.$LiquidityProviderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LiquidityProvider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiquidityProviderFindFirstOrThrowArgs} args - Arguments to find a LiquidityProvider
     * @example
     * // Get one LiquidityProvider
     * const liquidityProvider = await prisma.liquidityProvider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LiquidityProviderFindFirstOrThrowArgs>(args?: SelectSubset<T, LiquidityProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma__LiquidityProviderClient<$Result.GetResult<Prisma.$LiquidityProviderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LiquidityProviders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiquidityProviderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LiquidityProviders
     * const liquidityProviders = await prisma.liquidityProvider.findMany()
     * 
     * // Get first 10 LiquidityProviders
     * const liquidityProviders = await prisma.liquidityProvider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const liquidityProviderWithIdOnly = await prisma.liquidityProvider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LiquidityProviderFindManyArgs>(args?: SelectSubset<T, LiquidityProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiquidityProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LiquidityProvider.
     * @param {LiquidityProviderCreateArgs} args - Arguments to create a LiquidityProvider.
     * @example
     * // Create one LiquidityProvider
     * const LiquidityProvider = await prisma.liquidityProvider.create({
     *   data: {
     *     // ... data to create a LiquidityProvider
     *   }
     * })
     * 
     */
    create<T extends LiquidityProviderCreateArgs>(args: SelectSubset<T, LiquidityProviderCreateArgs<ExtArgs>>): Prisma__LiquidityProviderClient<$Result.GetResult<Prisma.$LiquidityProviderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LiquidityProviders.
     * @param {LiquidityProviderCreateManyArgs} args - Arguments to create many LiquidityProviders.
     * @example
     * // Create many LiquidityProviders
     * const liquidityProvider = await prisma.liquidityProvider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LiquidityProviderCreateManyArgs>(args?: SelectSubset<T, LiquidityProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LiquidityProvider.
     * @param {LiquidityProviderDeleteArgs} args - Arguments to delete one LiquidityProvider.
     * @example
     * // Delete one LiquidityProvider
     * const LiquidityProvider = await prisma.liquidityProvider.delete({
     *   where: {
     *     // ... filter to delete one LiquidityProvider
     *   }
     * })
     * 
     */
    delete<T extends LiquidityProviderDeleteArgs>(args: SelectSubset<T, LiquidityProviderDeleteArgs<ExtArgs>>): Prisma__LiquidityProviderClient<$Result.GetResult<Prisma.$LiquidityProviderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LiquidityProvider.
     * @param {LiquidityProviderUpdateArgs} args - Arguments to update one LiquidityProvider.
     * @example
     * // Update one LiquidityProvider
     * const liquidityProvider = await prisma.liquidityProvider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LiquidityProviderUpdateArgs>(args: SelectSubset<T, LiquidityProviderUpdateArgs<ExtArgs>>): Prisma__LiquidityProviderClient<$Result.GetResult<Prisma.$LiquidityProviderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LiquidityProviders.
     * @param {LiquidityProviderDeleteManyArgs} args - Arguments to filter LiquidityProviders to delete.
     * @example
     * // Delete a few LiquidityProviders
     * const { count } = await prisma.liquidityProvider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LiquidityProviderDeleteManyArgs>(args?: SelectSubset<T, LiquidityProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LiquidityProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiquidityProviderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LiquidityProviders
     * const liquidityProvider = await prisma.liquidityProvider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LiquidityProviderUpdateManyArgs>(args: SelectSubset<T, LiquidityProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LiquidityProvider.
     * @param {LiquidityProviderUpsertArgs} args - Arguments to update or create a LiquidityProvider.
     * @example
     * // Update or create a LiquidityProvider
     * const liquidityProvider = await prisma.liquidityProvider.upsert({
     *   create: {
     *     // ... data to create a LiquidityProvider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LiquidityProvider we want to update
     *   }
     * })
     */
    upsert<T extends LiquidityProviderUpsertArgs>(args: SelectSubset<T, LiquidityProviderUpsertArgs<ExtArgs>>): Prisma__LiquidityProviderClient<$Result.GetResult<Prisma.$LiquidityProviderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LiquidityProviders that matches the filter.
     * @param {LiquidityProviderFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const liquidityProvider = await prisma.liquidityProvider.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: LiquidityProviderFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a LiquidityProvider.
     * @param {LiquidityProviderAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const liquidityProvider = await prisma.liquidityProvider.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: LiquidityProviderAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of LiquidityProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiquidityProviderCountArgs} args - Arguments to filter LiquidityProviders to count.
     * @example
     * // Count the number of LiquidityProviders
     * const count = await prisma.liquidityProvider.count({
     *   where: {
     *     // ... the filter for the LiquidityProviders we want to count
     *   }
     * })
    **/
    count<T extends LiquidityProviderCountArgs>(
      args?: Subset<T, LiquidityProviderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LiquidityProviderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LiquidityProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiquidityProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LiquidityProviderAggregateArgs>(args: Subset<T, LiquidityProviderAggregateArgs>): Prisma.PrismaPromise<GetLiquidityProviderAggregateType<T>>

    /**
     * Group by LiquidityProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiquidityProviderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LiquidityProviderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LiquidityProviderGroupByArgs['orderBy'] }
        : { orderBy?: LiquidityProviderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LiquidityProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLiquidityProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LiquidityProvider model
   */
  readonly fields: LiquidityProviderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LiquidityProvider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LiquidityProviderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pool<T extends PoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PoolDefaultArgs<ExtArgs>>): Prisma__PoolClient<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LiquidityProvider model
   */
  interface LiquidityProviderFieldRefs {
    readonly id: FieldRef<"LiquidityProvider", 'String'>
    readonly poolId: FieldRef<"LiquidityProvider", 'String'>
    readonly provider: FieldRef<"LiquidityProvider", 'String'>
    readonly amount: FieldRef<"LiquidityProvider", 'BigInt'>
    readonly rewards: FieldRef<"LiquidityProvider", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * LiquidityProvider findUnique
   */
  export type LiquidityProviderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiquidityProvider
     */
    select?: LiquidityProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiquidityProvider
     */
    omit?: LiquidityProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiquidityProviderInclude<ExtArgs> | null
    /**
     * Filter, which LiquidityProvider to fetch.
     */
    where: LiquidityProviderWhereUniqueInput
  }

  /**
   * LiquidityProvider findUniqueOrThrow
   */
  export type LiquidityProviderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiquidityProvider
     */
    select?: LiquidityProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiquidityProvider
     */
    omit?: LiquidityProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiquidityProviderInclude<ExtArgs> | null
    /**
     * Filter, which LiquidityProvider to fetch.
     */
    where: LiquidityProviderWhereUniqueInput
  }

  /**
   * LiquidityProvider findFirst
   */
  export type LiquidityProviderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiquidityProvider
     */
    select?: LiquidityProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiquidityProvider
     */
    omit?: LiquidityProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiquidityProviderInclude<ExtArgs> | null
    /**
     * Filter, which LiquidityProvider to fetch.
     */
    where?: LiquidityProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiquidityProviders to fetch.
     */
    orderBy?: LiquidityProviderOrderByWithRelationInput | LiquidityProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LiquidityProviders.
     */
    cursor?: LiquidityProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiquidityProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiquidityProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LiquidityProviders.
     */
    distinct?: LiquidityProviderScalarFieldEnum | LiquidityProviderScalarFieldEnum[]
  }

  /**
   * LiquidityProvider findFirstOrThrow
   */
  export type LiquidityProviderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiquidityProvider
     */
    select?: LiquidityProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiquidityProvider
     */
    omit?: LiquidityProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiquidityProviderInclude<ExtArgs> | null
    /**
     * Filter, which LiquidityProvider to fetch.
     */
    where?: LiquidityProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiquidityProviders to fetch.
     */
    orderBy?: LiquidityProviderOrderByWithRelationInput | LiquidityProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LiquidityProviders.
     */
    cursor?: LiquidityProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiquidityProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiquidityProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LiquidityProviders.
     */
    distinct?: LiquidityProviderScalarFieldEnum | LiquidityProviderScalarFieldEnum[]
  }

  /**
   * LiquidityProvider findMany
   */
  export type LiquidityProviderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiquidityProvider
     */
    select?: LiquidityProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiquidityProvider
     */
    omit?: LiquidityProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiquidityProviderInclude<ExtArgs> | null
    /**
     * Filter, which LiquidityProviders to fetch.
     */
    where?: LiquidityProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiquidityProviders to fetch.
     */
    orderBy?: LiquidityProviderOrderByWithRelationInput | LiquidityProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LiquidityProviders.
     */
    cursor?: LiquidityProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiquidityProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiquidityProviders.
     */
    skip?: number
    distinct?: LiquidityProviderScalarFieldEnum | LiquidityProviderScalarFieldEnum[]
  }

  /**
   * LiquidityProvider create
   */
  export type LiquidityProviderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiquidityProvider
     */
    select?: LiquidityProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiquidityProvider
     */
    omit?: LiquidityProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiquidityProviderInclude<ExtArgs> | null
    /**
     * The data needed to create a LiquidityProvider.
     */
    data: XOR<LiquidityProviderCreateInput, LiquidityProviderUncheckedCreateInput>
  }

  /**
   * LiquidityProvider createMany
   */
  export type LiquidityProviderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LiquidityProviders.
     */
    data: LiquidityProviderCreateManyInput | LiquidityProviderCreateManyInput[]
  }

  /**
   * LiquidityProvider update
   */
  export type LiquidityProviderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiquidityProvider
     */
    select?: LiquidityProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiquidityProvider
     */
    omit?: LiquidityProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiquidityProviderInclude<ExtArgs> | null
    /**
     * The data needed to update a LiquidityProvider.
     */
    data: XOR<LiquidityProviderUpdateInput, LiquidityProviderUncheckedUpdateInput>
    /**
     * Choose, which LiquidityProvider to update.
     */
    where: LiquidityProviderWhereUniqueInput
  }

  /**
   * LiquidityProvider updateMany
   */
  export type LiquidityProviderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LiquidityProviders.
     */
    data: XOR<LiquidityProviderUpdateManyMutationInput, LiquidityProviderUncheckedUpdateManyInput>
    /**
     * Filter which LiquidityProviders to update
     */
    where?: LiquidityProviderWhereInput
    /**
     * Limit how many LiquidityProviders to update.
     */
    limit?: number
  }

  /**
   * LiquidityProvider upsert
   */
  export type LiquidityProviderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiquidityProvider
     */
    select?: LiquidityProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiquidityProvider
     */
    omit?: LiquidityProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiquidityProviderInclude<ExtArgs> | null
    /**
     * The filter to search for the LiquidityProvider to update in case it exists.
     */
    where: LiquidityProviderWhereUniqueInput
    /**
     * In case the LiquidityProvider found by the `where` argument doesn't exist, create a new LiquidityProvider with this data.
     */
    create: XOR<LiquidityProviderCreateInput, LiquidityProviderUncheckedCreateInput>
    /**
     * In case the LiquidityProvider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LiquidityProviderUpdateInput, LiquidityProviderUncheckedUpdateInput>
  }

  /**
   * LiquidityProvider delete
   */
  export type LiquidityProviderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiquidityProvider
     */
    select?: LiquidityProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiquidityProvider
     */
    omit?: LiquidityProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiquidityProviderInclude<ExtArgs> | null
    /**
     * Filter which LiquidityProvider to delete.
     */
    where: LiquidityProviderWhereUniqueInput
  }

  /**
   * LiquidityProvider deleteMany
   */
  export type LiquidityProviderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LiquidityProviders to delete
     */
    where?: LiquidityProviderWhereInput
    /**
     * Limit how many LiquidityProviders to delete.
     */
    limit?: number
  }

  /**
   * LiquidityProvider findRaw
   */
  export type LiquidityProviderFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * LiquidityProvider aggregateRaw
   */
  export type LiquidityProviderAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * LiquidityProvider without action
   */
  export type LiquidityProviderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiquidityProvider
     */
    select?: LiquidityProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiquidityProvider
     */
    omit?: LiquidityProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiquidityProviderInclude<ExtArgs> | null
  }


  /**
   * Model SwapFee
   */

  export type AggregateSwapFee = {
    _count: SwapFeeCountAggregateOutputType | null
    _avg: SwapFeeAvgAggregateOutputType | null
    _sum: SwapFeeSumAggregateOutputType | null
    _min: SwapFeeMinAggregateOutputType | null
    _max: SwapFeeMaxAggregateOutputType | null
  }

  export type SwapFeeAvgAggregateOutputType = {
    threshold: number | null
    fee: number | null
  }

  export type SwapFeeSumAggregateOutputType = {
    threshold: bigint | null
    fee: number | null
  }

  export type SwapFeeMinAggregateOutputType = {
    id: string | null
    poolId: string | null
    threshold: bigint | null
    fee: number | null
  }

  export type SwapFeeMaxAggregateOutputType = {
    id: string | null
    poolId: string | null
    threshold: bigint | null
    fee: number | null
  }

  export type SwapFeeCountAggregateOutputType = {
    id: number
    poolId: number
    threshold: number
    fee: number
    _all: number
  }


  export type SwapFeeAvgAggregateInputType = {
    threshold?: true
    fee?: true
  }

  export type SwapFeeSumAggregateInputType = {
    threshold?: true
    fee?: true
  }

  export type SwapFeeMinAggregateInputType = {
    id?: true
    poolId?: true
    threshold?: true
    fee?: true
  }

  export type SwapFeeMaxAggregateInputType = {
    id?: true
    poolId?: true
    threshold?: true
    fee?: true
  }

  export type SwapFeeCountAggregateInputType = {
    id?: true
    poolId?: true
    threshold?: true
    fee?: true
    _all?: true
  }

  export type SwapFeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SwapFee to aggregate.
     */
    where?: SwapFeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SwapFees to fetch.
     */
    orderBy?: SwapFeeOrderByWithRelationInput | SwapFeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SwapFeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SwapFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SwapFees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SwapFees
    **/
    _count?: true | SwapFeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SwapFeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SwapFeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SwapFeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SwapFeeMaxAggregateInputType
  }

  export type GetSwapFeeAggregateType<T extends SwapFeeAggregateArgs> = {
        [P in keyof T & keyof AggregateSwapFee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSwapFee[P]>
      : GetScalarType<T[P], AggregateSwapFee[P]>
  }




  export type SwapFeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SwapFeeWhereInput
    orderBy?: SwapFeeOrderByWithAggregationInput | SwapFeeOrderByWithAggregationInput[]
    by: SwapFeeScalarFieldEnum[] | SwapFeeScalarFieldEnum
    having?: SwapFeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SwapFeeCountAggregateInputType | true
    _avg?: SwapFeeAvgAggregateInputType
    _sum?: SwapFeeSumAggregateInputType
    _min?: SwapFeeMinAggregateInputType
    _max?: SwapFeeMaxAggregateInputType
  }

  export type SwapFeeGroupByOutputType = {
    id: string
    poolId: string
    threshold: bigint
    fee: number
    _count: SwapFeeCountAggregateOutputType | null
    _avg: SwapFeeAvgAggregateOutputType | null
    _sum: SwapFeeSumAggregateOutputType | null
    _min: SwapFeeMinAggregateOutputType | null
    _max: SwapFeeMaxAggregateOutputType | null
  }

  type GetSwapFeeGroupByPayload<T extends SwapFeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SwapFeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SwapFeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SwapFeeGroupByOutputType[P]>
            : GetScalarType<T[P], SwapFeeGroupByOutputType[P]>
        }
      >
    >


  export type SwapFeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    poolId?: boolean
    threshold?: boolean
    fee?: boolean
    pool?: boolean | PoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["swapFee"]>



  export type SwapFeeSelectScalar = {
    id?: boolean
    poolId?: boolean
    threshold?: boolean
    fee?: boolean
  }

  export type SwapFeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "poolId" | "threshold" | "fee", ExtArgs["result"]["swapFee"]>
  export type SwapFeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pool?: boolean | PoolDefaultArgs<ExtArgs>
  }

  export type $SwapFeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SwapFee"
    objects: {
      pool: Prisma.$PoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      poolId: string
      threshold: bigint
      fee: number
    }, ExtArgs["result"]["swapFee"]>
    composites: {}
  }

  type SwapFeeGetPayload<S extends boolean | null | undefined | SwapFeeDefaultArgs> = $Result.GetResult<Prisma.$SwapFeePayload, S>

  type SwapFeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SwapFeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SwapFeeCountAggregateInputType | true
    }

  export interface SwapFeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SwapFee'], meta: { name: 'SwapFee' } }
    /**
     * Find zero or one SwapFee that matches the filter.
     * @param {SwapFeeFindUniqueArgs} args - Arguments to find a SwapFee
     * @example
     * // Get one SwapFee
     * const swapFee = await prisma.swapFee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SwapFeeFindUniqueArgs>(args: SelectSubset<T, SwapFeeFindUniqueArgs<ExtArgs>>): Prisma__SwapFeeClient<$Result.GetResult<Prisma.$SwapFeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SwapFee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SwapFeeFindUniqueOrThrowArgs} args - Arguments to find a SwapFee
     * @example
     * // Get one SwapFee
     * const swapFee = await prisma.swapFee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SwapFeeFindUniqueOrThrowArgs>(args: SelectSubset<T, SwapFeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SwapFeeClient<$Result.GetResult<Prisma.$SwapFeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SwapFee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwapFeeFindFirstArgs} args - Arguments to find a SwapFee
     * @example
     * // Get one SwapFee
     * const swapFee = await prisma.swapFee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SwapFeeFindFirstArgs>(args?: SelectSubset<T, SwapFeeFindFirstArgs<ExtArgs>>): Prisma__SwapFeeClient<$Result.GetResult<Prisma.$SwapFeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SwapFee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwapFeeFindFirstOrThrowArgs} args - Arguments to find a SwapFee
     * @example
     * // Get one SwapFee
     * const swapFee = await prisma.swapFee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SwapFeeFindFirstOrThrowArgs>(args?: SelectSubset<T, SwapFeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__SwapFeeClient<$Result.GetResult<Prisma.$SwapFeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SwapFees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwapFeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SwapFees
     * const swapFees = await prisma.swapFee.findMany()
     * 
     * // Get first 10 SwapFees
     * const swapFees = await prisma.swapFee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const swapFeeWithIdOnly = await prisma.swapFee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SwapFeeFindManyArgs>(args?: SelectSubset<T, SwapFeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwapFeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SwapFee.
     * @param {SwapFeeCreateArgs} args - Arguments to create a SwapFee.
     * @example
     * // Create one SwapFee
     * const SwapFee = await prisma.swapFee.create({
     *   data: {
     *     // ... data to create a SwapFee
     *   }
     * })
     * 
     */
    create<T extends SwapFeeCreateArgs>(args: SelectSubset<T, SwapFeeCreateArgs<ExtArgs>>): Prisma__SwapFeeClient<$Result.GetResult<Prisma.$SwapFeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SwapFees.
     * @param {SwapFeeCreateManyArgs} args - Arguments to create many SwapFees.
     * @example
     * // Create many SwapFees
     * const swapFee = await prisma.swapFee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SwapFeeCreateManyArgs>(args?: SelectSubset<T, SwapFeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SwapFee.
     * @param {SwapFeeDeleteArgs} args - Arguments to delete one SwapFee.
     * @example
     * // Delete one SwapFee
     * const SwapFee = await prisma.swapFee.delete({
     *   where: {
     *     // ... filter to delete one SwapFee
     *   }
     * })
     * 
     */
    delete<T extends SwapFeeDeleteArgs>(args: SelectSubset<T, SwapFeeDeleteArgs<ExtArgs>>): Prisma__SwapFeeClient<$Result.GetResult<Prisma.$SwapFeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SwapFee.
     * @param {SwapFeeUpdateArgs} args - Arguments to update one SwapFee.
     * @example
     * // Update one SwapFee
     * const swapFee = await prisma.swapFee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SwapFeeUpdateArgs>(args: SelectSubset<T, SwapFeeUpdateArgs<ExtArgs>>): Prisma__SwapFeeClient<$Result.GetResult<Prisma.$SwapFeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SwapFees.
     * @param {SwapFeeDeleteManyArgs} args - Arguments to filter SwapFees to delete.
     * @example
     * // Delete a few SwapFees
     * const { count } = await prisma.swapFee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SwapFeeDeleteManyArgs>(args?: SelectSubset<T, SwapFeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SwapFees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwapFeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SwapFees
     * const swapFee = await prisma.swapFee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SwapFeeUpdateManyArgs>(args: SelectSubset<T, SwapFeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SwapFee.
     * @param {SwapFeeUpsertArgs} args - Arguments to update or create a SwapFee.
     * @example
     * // Update or create a SwapFee
     * const swapFee = await prisma.swapFee.upsert({
     *   create: {
     *     // ... data to create a SwapFee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SwapFee we want to update
     *   }
     * })
     */
    upsert<T extends SwapFeeUpsertArgs>(args: SelectSubset<T, SwapFeeUpsertArgs<ExtArgs>>): Prisma__SwapFeeClient<$Result.GetResult<Prisma.$SwapFeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SwapFees that matches the filter.
     * @param {SwapFeeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const swapFee = await prisma.swapFee.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SwapFeeFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SwapFee.
     * @param {SwapFeeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const swapFee = await prisma.swapFee.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SwapFeeAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of SwapFees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwapFeeCountArgs} args - Arguments to filter SwapFees to count.
     * @example
     * // Count the number of SwapFees
     * const count = await prisma.swapFee.count({
     *   where: {
     *     // ... the filter for the SwapFees we want to count
     *   }
     * })
    **/
    count<T extends SwapFeeCountArgs>(
      args?: Subset<T, SwapFeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SwapFeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SwapFee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwapFeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SwapFeeAggregateArgs>(args: Subset<T, SwapFeeAggregateArgs>): Prisma.PrismaPromise<GetSwapFeeAggregateType<T>>

    /**
     * Group by SwapFee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwapFeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SwapFeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SwapFeeGroupByArgs['orderBy'] }
        : { orderBy?: SwapFeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SwapFeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSwapFeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SwapFee model
   */
  readonly fields: SwapFeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SwapFee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SwapFeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pool<T extends PoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PoolDefaultArgs<ExtArgs>>): Prisma__PoolClient<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SwapFee model
   */
  interface SwapFeeFieldRefs {
    readonly id: FieldRef<"SwapFee", 'String'>
    readonly poolId: FieldRef<"SwapFee", 'String'>
    readonly threshold: FieldRef<"SwapFee", 'BigInt'>
    readonly fee: FieldRef<"SwapFee", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SwapFee findUnique
   */
  export type SwapFeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapFee
     */
    select?: SwapFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapFee
     */
    omit?: SwapFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapFeeInclude<ExtArgs> | null
    /**
     * Filter, which SwapFee to fetch.
     */
    where: SwapFeeWhereUniqueInput
  }

  /**
   * SwapFee findUniqueOrThrow
   */
  export type SwapFeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapFee
     */
    select?: SwapFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapFee
     */
    omit?: SwapFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapFeeInclude<ExtArgs> | null
    /**
     * Filter, which SwapFee to fetch.
     */
    where: SwapFeeWhereUniqueInput
  }

  /**
   * SwapFee findFirst
   */
  export type SwapFeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapFee
     */
    select?: SwapFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapFee
     */
    omit?: SwapFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapFeeInclude<ExtArgs> | null
    /**
     * Filter, which SwapFee to fetch.
     */
    where?: SwapFeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SwapFees to fetch.
     */
    orderBy?: SwapFeeOrderByWithRelationInput | SwapFeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SwapFees.
     */
    cursor?: SwapFeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SwapFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SwapFees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SwapFees.
     */
    distinct?: SwapFeeScalarFieldEnum | SwapFeeScalarFieldEnum[]
  }

  /**
   * SwapFee findFirstOrThrow
   */
  export type SwapFeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapFee
     */
    select?: SwapFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapFee
     */
    omit?: SwapFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapFeeInclude<ExtArgs> | null
    /**
     * Filter, which SwapFee to fetch.
     */
    where?: SwapFeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SwapFees to fetch.
     */
    orderBy?: SwapFeeOrderByWithRelationInput | SwapFeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SwapFees.
     */
    cursor?: SwapFeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SwapFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SwapFees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SwapFees.
     */
    distinct?: SwapFeeScalarFieldEnum | SwapFeeScalarFieldEnum[]
  }

  /**
   * SwapFee findMany
   */
  export type SwapFeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapFee
     */
    select?: SwapFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapFee
     */
    omit?: SwapFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapFeeInclude<ExtArgs> | null
    /**
     * Filter, which SwapFees to fetch.
     */
    where?: SwapFeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SwapFees to fetch.
     */
    orderBy?: SwapFeeOrderByWithRelationInput | SwapFeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SwapFees.
     */
    cursor?: SwapFeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SwapFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SwapFees.
     */
    skip?: number
    distinct?: SwapFeeScalarFieldEnum | SwapFeeScalarFieldEnum[]
  }

  /**
   * SwapFee create
   */
  export type SwapFeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapFee
     */
    select?: SwapFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapFee
     */
    omit?: SwapFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapFeeInclude<ExtArgs> | null
    /**
     * The data needed to create a SwapFee.
     */
    data: XOR<SwapFeeCreateInput, SwapFeeUncheckedCreateInput>
  }

  /**
   * SwapFee createMany
   */
  export type SwapFeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SwapFees.
     */
    data: SwapFeeCreateManyInput | SwapFeeCreateManyInput[]
  }

  /**
   * SwapFee update
   */
  export type SwapFeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapFee
     */
    select?: SwapFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapFee
     */
    omit?: SwapFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapFeeInclude<ExtArgs> | null
    /**
     * The data needed to update a SwapFee.
     */
    data: XOR<SwapFeeUpdateInput, SwapFeeUncheckedUpdateInput>
    /**
     * Choose, which SwapFee to update.
     */
    where: SwapFeeWhereUniqueInput
  }

  /**
   * SwapFee updateMany
   */
  export type SwapFeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SwapFees.
     */
    data: XOR<SwapFeeUpdateManyMutationInput, SwapFeeUncheckedUpdateManyInput>
    /**
     * Filter which SwapFees to update
     */
    where?: SwapFeeWhereInput
    /**
     * Limit how many SwapFees to update.
     */
    limit?: number
  }

  /**
   * SwapFee upsert
   */
  export type SwapFeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapFee
     */
    select?: SwapFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapFee
     */
    omit?: SwapFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapFeeInclude<ExtArgs> | null
    /**
     * The filter to search for the SwapFee to update in case it exists.
     */
    where: SwapFeeWhereUniqueInput
    /**
     * In case the SwapFee found by the `where` argument doesn't exist, create a new SwapFee with this data.
     */
    create: XOR<SwapFeeCreateInput, SwapFeeUncheckedCreateInput>
    /**
     * In case the SwapFee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SwapFeeUpdateInput, SwapFeeUncheckedUpdateInput>
  }

  /**
   * SwapFee delete
   */
  export type SwapFeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapFee
     */
    select?: SwapFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapFee
     */
    omit?: SwapFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapFeeInclude<ExtArgs> | null
    /**
     * Filter which SwapFee to delete.
     */
    where: SwapFeeWhereUniqueInput
  }

  /**
   * SwapFee deleteMany
   */
  export type SwapFeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SwapFees to delete
     */
    where?: SwapFeeWhereInput
    /**
     * Limit how many SwapFees to delete.
     */
    limit?: number
  }

  /**
   * SwapFee findRaw
   */
  export type SwapFeeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SwapFee aggregateRaw
   */
  export type SwapFeeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SwapFee without action
   */
  export type SwapFeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapFee
     */
    select?: SwapFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapFee
     */
    omit?: SwapFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapFeeInclude<ExtArgs> | null
  }


  /**
   * Model PoolEvent
   */

  export type AggregatePoolEvent = {
    _count: PoolEventCountAggregateOutputType | null
    _min: PoolEventMinAggregateOutputType | null
    _max: PoolEventMaxAggregateOutputType | null
  }

  export type PoolEventMinAggregateOutputType = {
    id: string | null
    eventType: string | null
    poolId: string | null
    coinType: string | null
    timestamp: Date | null
  }

  export type PoolEventMaxAggregateOutputType = {
    id: string | null
    eventType: string | null
    poolId: string | null
    coinType: string | null
    timestamp: Date | null
  }

  export type PoolEventCountAggregateOutputType = {
    id: number
    eventType: number
    poolId: number
    coinType: number
    details: number
    timestamp: number
    _all: number
  }


  export type PoolEventMinAggregateInputType = {
    id?: true
    eventType?: true
    poolId?: true
    coinType?: true
    timestamp?: true
  }

  export type PoolEventMaxAggregateInputType = {
    id?: true
    eventType?: true
    poolId?: true
    coinType?: true
    timestamp?: true
  }

  export type PoolEventCountAggregateInputType = {
    id?: true
    eventType?: true
    poolId?: true
    coinType?: true
    details?: true
    timestamp?: true
    _all?: true
  }

  export type PoolEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PoolEvent to aggregate.
     */
    where?: PoolEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoolEvents to fetch.
     */
    orderBy?: PoolEventOrderByWithRelationInput | PoolEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PoolEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoolEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoolEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PoolEvents
    **/
    _count?: true | PoolEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PoolEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PoolEventMaxAggregateInputType
  }

  export type GetPoolEventAggregateType<T extends PoolEventAggregateArgs> = {
        [P in keyof T & keyof AggregatePoolEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoolEvent[P]>
      : GetScalarType<T[P], AggregatePoolEvent[P]>
  }




  export type PoolEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PoolEventWhereInput
    orderBy?: PoolEventOrderByWithAggregationInput | PoolEventOrderByWithAggregationInput[]
    by: PoolEventScalarFieldEnum[] | PoolEventScalarFieldEnum
    having?: PoolEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PoolEventCountAggregateInputType | true
    _min?: PoolEventMinAggregateInputType
    _max?: PoolEventMaxAggregateInputType
  }

  export type PoolEventGroupByOutputType = {
    id: string
    eventType: string
    poolId: string
    coinType: string
    details: JsonValue
    timestamp: Date
    _count: PoolEventCountAggregateOutputType | null
    _min: PoolEventMinAggregateOutputType | null
    _max: PoolEventMaxAggregateOutputType | null
  }

  type GetPoolEventGroupByPayload<T extends PoolEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PoolEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PoolEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PoolEventGroupByOutputType[P]>
            : GetScalarType<T[P], PoolEventGroupByOutputType[P]>
        }
      >
    >


  export type PoolEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventType?: boolean
    poolId?: boolean
    coinType?: boolean
    details?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["poolEvent"]>



  export type PoolEventSelectScalar = {
    id?: boolean
    eventType?: boolean
    poolId?: boolean
    coinType?: boolean
    details?: boolean
    timestamp?: boolean
  }

  export type PoolEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventType" | "poolId" | "coinType" | "details" | "timestamp", ExtArgs["result"]["poolEvent"]>

  export type $PoolEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PoolEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventType: string
      poolId: string
      coinType: string
      details: Prisma.JsonValue
      timestamp: Date
    }, ExtArgs["result"]["poolEvent"]>
    composites: {}
  }

  type PoolEventGetPayload<S extends boolean | null | undefined | PoolEventDefaultArgs> = $Result.GetResult<Prisma.$PoolEventPayload, S>

  type PoolEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PoolEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PoolEventCountAggregateInputType | true
    }

  export interface PoolEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PoolEvent'], meta: { name: 'PoolEvent' } }
    /**
     * Find zero or one PoolEvent that matches the filter.
     * @param {PoolEventFindUniqueArgs} args - Arguments to find a PoolEvent
     * @example
     * // Get one PoolEvent
     * const poolEvent = await prisma.poolEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PoolEventFindUniqueArgs>(args: SelectSubset<T, PoolEventFindUniqueArgs<ExtArgs>>): Prisma__PoolEventClient<$Result.GetResult<Prisma.$PoolEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PoolEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PoolEventFindUniqueOrThrowArgs} args - Arguments to find a PoolEvent
     * @example
     * // Get one PoolEvent
     * const poolEvent = await prisma.poolEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PoolEventFindUniqueOrThrowArgs>(args: SelectSubset<T, PoolEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PoolEventClient<$Result.GetResult<Prisma.$PoolEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PoolEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolEventFindFirstArgs} args - Arguments to find a PoolEvent
     * @example
     * // Get one PoolEvent
     * const poolEvent = await prisma.poolEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PoolEventFindFirstArgs>(args?: SelectSubset<T, PoolEventFindFirstArgs<ExtArgs>>): Prisma__PoolEventClient<$Result.GetResult<Prisma.$PoolEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PoolEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolEventFindFirstOrThrowArgs} args - Arguments to find a PoolEvent
     * @example
     * // Get one PoolEvent
     * const poolEvent = await prisma.poolEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PoolEventFindFirstOrThrowArgs>(args?: SelectSubset<T, PoolEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__PoolEventClient<$Result.GetResult<Prisma.$PoolEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PoolEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PoolEvents
     * const poolEvents = await prisma.poolEvent.findMany()
     * 
     * // Get first 10 PoolEvents
     * const poolEvents = await prisma.poolEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const poolEventWithIdOnly = await prisma.poolEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PoolEventFindManyArgs>(args?: SelectSubset<T, PoolEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PoolEvent.
     * @param {PoolEventCreateArgs} args - Arguments to create a PoolEvent.
     * @example
     * // Create one PoolEvent
     * const PoolEvent = await prisma.poolEvent.create({
     *   data: {
     *     // ... data to create a PoolEvent
     *   }
     * })
     * 
     */
    create<T extends PoolEventCreateArgs>(args: SelectSubset<T, PoolEventCreateArgs<ExtArgs>>): Prisma__PoolEventClient<$Result.GetResult<Prisma.$PoolEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PoolEvents.
     * @param {PoolEventCreateManyArgs} args - Arguments to create many PoolEvents.
     * @example
     * // Create many PoolEvents
     * const poolEvent = await prisma.poolEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PoolEventCreateManyArgs>(args?: SelectSubset<T, PoolEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PoolEvent.
     * @param {PoolEventDeleteArgs} args - Arguments to delete one PoolEvent.
     * @example
     * // Delete one PoolEvent
     * const PoolEvent = await prisma.poolEvent.delete({
     *   where: {
     *     // ... filter to delete one PoolEvent
     *   }
     * })
     * 
     */
    delete<T extends PoolEventDeleteArgs>(args: SelectSubset<T, PoolEventDeleteArgs<ExtArgs>>): Prisma__PoolEventClient<$Result.GetResult<Prisma.$PoolEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PoolEvent.
     * @param {PoolEventUpdateArgs} args - Arguments to update one PoolEvent.
     * @example
     * // Update one PoolEvent
     * const poolEvent = await prisma.poolEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PoolEventUpdateArgs>(args: SelectSubset<T, PoolEventUpdateArgs<ExtArgs>>): Prisma__PoolEventClient<$Result.GetResult<Prisma.$PoolEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PoolEvents.
     * @param {PoolEventDeleteManyArgs} args - Arguments to filter PoolEvents to delete.
     * @example
     * // Delete a few PoolEvents
     * const { count } = await prisma.poolEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PoolEventDeleteManyArgs>(args?: SelectSubset<T, PoolEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PoolEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PoolEvents
     * const poolEvent = await prisma.poolEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PoolEventUpdateManyArgs>(args: SelectSubset<T, PoolEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PoolEvent.
     * @param {PoolEventUpsertArgs} args - Arguments to update or create a PoolEvent.
     * @example
     * // Update or create a PoolEvent
     * const poolEvent = await prisma.poolEvent.upsert({
     *   create: {
     *     // ... data to create a PoolEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PoolEvent we want to update
     *   }
     * })
     */
    upsert<T extends PoolEventUpsertArgs>(args: SelectSubset<T, PoolEventUpsertArgs<ExtArgs>>): Prisma__PoolEventClient<$Result.GetResult<Prisma.$PoolEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PoolEvents that matches the filter.
     * @param {PoolEventFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const poolEvent = await prisma.poolEvent.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PoolEventFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a PoolEvent.
     * @param {PoolEventAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const poolEvent = await prisma.poolEvent.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PoolEventAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of PoolEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolEventCountArgs} args - Arguments to filter PoolEvents to count.
     * @example
     * // Count the number of PoolEvents
     * const count = await prisma.poolEvent.count({
     *   where: {
     *     // ... the filter for the PoolEvents we want to count
     *   }
     * })
    **/
    count<T extends PoolEventCountArgs>(
      args?: Subset<T, PoolEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PoolEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PoolEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PoolEventAggregateArgs>(args: Subset<T, PoolEventAggregateArgs>): Prisma.PrismaPromise<GetPoolEventAggregateType<T>>

    /**
     * Group by PoolEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PoolEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PoolEventGroupByArgs['orderBy'] }
        : { orderBy?: PoolEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PoolEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPoolEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PoolEvent model
   */
  readonly fields: PoolEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PoolEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PoolEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PoolEvent model
   */
  interface PoolEventFieldRefs {
    readonly id: FieldRef<"PoolEvent", 'String'>
    readonly eventType: FieldRef<"PoolEvent", 'String'>
    readonly poolId: FieldRef<"PoolEvent", 'String'>
    readonly coinType: FieldRef<"PoolEvent", 'String'>
    readonly details: FieldRef<"PoolEvent", 'Json'>
    readonly timestamp: FieldRef<"PoolEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PoolEvent findUnique
   */
  export type PoolEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolEvent
     */
    select?: PoolEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolEvent
     */
    omit?: PoolEventOmit<ExtArgs> | null
    /**
     * Filter, which PoolEvent to fetch.
     */
    where: PoolEventWhereUniqueInput
  }

  /**
   * PoolEvent findUniqueOrThrow
   */
  export type PoolEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolEvent
     */
    select?: PoolEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolEvent
     */
    omit?: PoolEventOmit<ExtArgs> | null
    /**
     * Filter, which PoolEvent to fetch.
     */
    where: PoolEventWhereUniqueInput
  }

  /**
   * PoolEvent findFirst
   */
  export type PoolEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolEvent
     */
    select?: PoolEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolEvent
     */
    omit?: PoolEventOmit<ExtArgs> | null
    /**
     * Filter, which PoolEvent to fetch.
     */
    where?: PoolEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoolEvents to fetch.
     */
    orderBy?: PoolEventOrderByWithRelationInput | PoolEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PoolEvents.
     */
    cursor?: PoolEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoolEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoolEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PoolEvents.
     */
    distinct?: PoolEventScalarFieldEnum | PoolEventScalarFieldEnum[]
  }

  /**
   * PoolEvent findFirstOrThrow
   */
  export type PoolEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolEvent
     */
    select?: PoolEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolEvent
     */
    omit?: PoolEventOmit<ExtArgs> | null
    /**
     * Filter, which PoolEvent to fetch.
     */
    where?: PoolEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoolEvents to fetch.
     */
    orderBy?: PoolEventOrderByWithRelationInput | PoolEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PoolEvents.
     */
    cursor?: PoolEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoolEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoolEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PoolEvents.
     */
    distinct?: PoolEventScalarFieldEnum | PoolEventScalarFieldEnum[]
  }

  /**
   * PoolEvent findMany
   */
  export type PoolEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolEvent
     */
    select?: PoolEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolEvent
     */
    omit?: PoolEventOmit<ExtArgs> | null
    /**
     * Filter, which PoolEvents to fetch.
     */
    where?: PoolEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoolEvents to fetch.
     */
    orderBy?: PoolEventOrderByWithRelationInput | PoolEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PoolEvents.
     */
    cursor?: PoolEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoolEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoolEvents.
     */
    skip?: number
    distinct?: PoolEventScalarFieldEnum | PoolEventScalarFieldEnum[]
  }

  /**
   * PoolEvent create
   */
  export type PoolEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolEvent
     */
    select?: PoolEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolEvent
     */
    omit?: PoolEventOmit<ExtArgs> | null
    /**
     * The data needed to create a PoolEvent.
     */
    data: XOR<PoolEventCreateInput, PoolEventUncheckedCreateInput>
  }

  /**
   * PoolEvent createMany
   */
  export type PoolEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PoolEvents.
     */
    data: PoolEventCreateManyInput | PoolEventCreateManyInput[]
  }

  /**
   * PoolEvent update
   */
  export type PoolEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolEvent
     */
    select?: PoolEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolEvent
     */
    omit?: PoolEventOmit<ExtArgs> | null
    /**
     * The data needed to update a PoolEvent.
     */
    data: XOR<PoolEventUpdateInput, PoolEventUncheckedUpdateInput>
    /**
     * Choose, which PoolEvent to update.
     */
    where: PoolEventWhereUniqueInput
  }

  /**
   * PoolEvent updateMany
   */
  export type PoolEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PoolEvents.
     */
    data: XOR<PoolEventUpdateManyMutationInput, PoolEventUncheckedUpdateManyInput>
    /**
     * Filter which PoolEvents to update
     */
    where?: PoolEventWhereInput
    /**
     * Limit how many PoolEvents to update.
     */
    limit?: number
  }

  /**
   * PoolEvent upsert
   */
  export type PoolEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolEvent
     */
    select?: PoolEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolEvent
     */
    omit?: PoolEventOmit<ExtArgs> | null
    /**
     * The filter to search for the PoolEvent to update in case it exists.
     */
    where: PoolEventWhereUniqueInput
    /**
     * In case the PoolEvent found by the `where` argument doesn't exist, create a new PoolEvent with this data.
     */
    create: XOR<PoolEventCreateInput, PoolEventUncheckedCreateInput>
    /**
     * In case the PoolEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PoolEventUpdateInput, PoolEventUncheckedUpdateInput>
  }

  /**
   * PoolEvent delete
   */
  export type PoolEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolEvent
     */
    select?: PoolEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolEvent
     */
    omit?: PoolEventOmit<ExtArgs> | null
    /**
     * Filter which PoolEvent to delete.
     */
    where: PoolEventWhereUniqueInput
  }

  /**
   * PoolEvent deleteMany
   */
  export type PoolEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PoolEvents to delete
     */
    where?: PoolEventWhereInput
    /**
     * Limit how many PoolEvents to delete.
     */
    limit?: number
  }

  /**
   * PoolEvent findRaw
   */
  export type PoolEventFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PoolEvent aggregateRaw
   */
  export type PoolEventAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PoolEvent without action
   */
  export type PoolEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolEvent
     */
    select?: PoolEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolEvent
     */
    omit?: PoolEventOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    address: 'address',
    username: 'username',
    language: 'language',
    countryname: 'countryname',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountDetailsScalarFieldEnum: {
    id: 'id',
    accountNumber: 'accountNumber',
    name: 'name',
    bank: 'bank',
    userId: 'userId'
  };

  export type AccountDetailsScalarFieldEnum = (typeof AccountDetailsScalarFieldEnum)[keyof typeof AccountDetailsScalarFieldEnum]


  export const CountryScalarFieldEnum: {
    currencySymbol: 'currencySymbol',
    name: 'name',
    baseTokencoinType: 'baseTokencoinType'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const TokensScalarFieldEnum: {
    name: 'name',
    decimals: 'decimals',
    symbol: 'symbol',
    coinType: 'coinType'
  };

  export type TokensScalarFieldEnum = (typeof TokensScalarFieldEnum)[keyof typeof TokensScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    transactionId: 'transactionId',
    type: 'type',
    interactedWith: 'interactedWith',
    date: 'date',
    status: 'status',
    fees: 'fees',
    incomingAsset: 'incomingAsset',
    incomingAmount: 'incomingAmount',
    outgoingAsset: 'outgoingAsset',
    outgoingAmount: 'outgoingAmount',
    userId: 'userId'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const PayfricaAgentsScalarFieldEnum: {
    id: 'id',
    validTypes: 'validTypes',
    agents: 'agents'
  };

  export type PayfricaAgentsScalarFieldEnum = (typeof PayfricaAgentsScalarFieldEnum)[keyof typeof PayfricaAgentsScalarFieldEnum]


  export const AgentScalarFieldEnum: {
    id: 'id',
    addr: 'addr',
    balance: 'balance',
    coinType: 'coinType',
    accountNumber: 'accountNumber',
    bank: 'bank',
    name: 'name',
    pendingWithdrawals: 'pendingWithdrawals',
    successfulWithdrawals: 'successfulWithdrawals',
    totalSuccessfulWithdrawals: 'totalSuccessfulWithdrawals',
    totalPendingWithdrawals: 'totalPendingWithdrawals',
    totalSuccessfulWithdrawalsAmount: 'totalSuccessfulWithdrawalsAmount',
    totalPendingWithdrawalsAmount: 'totalPendingWithdrawalsAmount',
    pendingDeposits: 'pendingDeposits',
    successfulDeposits: 'successfulDeposits',
    totalSuccessfulDeposits: 'totalSuccessfulDeposits',
    totalPendingDeposits: 'totalPendingDeposits',
    totalSuccessfulDepositsAmount: 'totalSuccessfulDepositsAmount',
    totalPendingDepositsAmount: 'totalPendingDepositsAmount',
    unsuccessfulDeposits: 'unsuccessfulDeposits',
    totalUnsuccessfulDeposits: 'totalUnsuccessfulDeposits',
    maxWithdrawLimit: 'maxWithdrawLimit',
    maxDepositLimit: 'maxDepositLimit',
    minWithdrawLimit: 'minWithdrawLimit',
    minDepositLimit: 'minDepositLimit',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AgentScalarFieldEnum = (typeof AgentScalarFieldEnum)[keyof typeof AgentScalarFieldEnum]


  export const WithdrawRequestScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    user: 'user',
    agentId: 'agentId',
    coinType: 'coinType',
    status: 'status',
    requestTime: 'requestTime',
    statusTime: 'statusTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WithdrawRequestScalarFieldEnum = (typeof WithdrawRequestScalarFieldEnum)[keyof typeof WithdrawRequestScalarFieldEnum]


  export const DepositRequestScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    user: 'user',
    agentId: 'agentId',
    successfulAgentId: 'successfulAgentId',
    coinType: 'coinType',
    comment: 'comment',
    status: 'status',
    requestTime: 'requestTime',
    statusTime: 'statusTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DepositRequestScalarFieldEnum = (typeof DepositRequestScalarFieldEnum)[keyof typeof DepositRequestScalarFieldEnum]


  export const CursorScalarFieldEnum: {
    id: 'id',
    eventSeq: 'eventSeq',
    txDigest: 'txDigest'
  };

  export type CursorScalarFieldEnum = (typeof CursorScalarFieldEnum)[keyof typeof CursorScalarFieldEnum]


  export const PoolScalarFieldEnum: {
    id: 'id',
    coinType: 'coinType',
    coinName: 'coinName',
    coinBalance: 'coinBalance',
    rewardsBalance: 'rewardsBalance',
    feeDecimal: 'feeDecimal',
    defaultFees: 'defaultFees',
    coinDecimal: 'coinDecimal',
    ratesDollar: 'ratesDollar',
    createdAt: 'createdAt'
  };

  export type PoolScalarFieldEnum = (typeof PoolScalarFieldEnum)[keyof typeof PoolScalarFieldEnum]


  export const LiquidityProviderScalarFieldEnum: {
    id: 'id',
    poolId: 'poolId',
    provider: 'provider',
    amount: 'amount',
    rewards: 'rewards'
  };

  export type LiquidityProviderScalarFieldEnum = (typeof LiquidityProviderScalarFieldEnum)[keyof typeof LiquidityProviderScalarFieldEnum]


  export const SwapFeeScalarFieldEnum: {
    id: 'id',
    poolId: 'poolId',
    threshold: 'threshold',
    fee: 'fee'
  };

  export type SwapFeeScalarFieldEnum = (typeof SwapFeeScalarFieldEnum)[keyof typeof SwapFeeScalarFieldEnum]


  export const PoolEventScalarFieldEnum: {
    id: 'id',
    eventType: 'eventType',
    poolId: 'poolId',
    coinType: 'coinType',
    details: 'details',
    timestamp: 'timestamp'
  };

  export type PoolEventScalarFieldEnum = (typeof PoolEventScalarFieldEnum)[keyof typeof PoolEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>
    


  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>
    


  /**
   * Reference to a field of type 'TransactionStatus[]'
   */
  export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'WithdrawStatus'
   */
  export type EnumWithdrawStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WithdrawStatus'>
    


  /**
   * Reference to a field of type 'WithdrawStatus[]'
   */
  export type ListEnumWithdrawStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WithdrawStatus[]'>
    


  /**
   * Reference to a field of type 'DepositStatus'
   */
  export type EnumDepositStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DepositStatus'>
    


  /**
   * Reference to a field of type 'DepositStatus[]'
   */
  export type ListEnumDepositStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DepositStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    address?: StringFilter<"User"> | string
    username?: StringNullableFilter<"User"> | string | null
    language?: StringFilter<"User"> | string
    countryname?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    country?: XOR<CountryNullableScalarRelationFilter, CountryWhereInput> | null
    accountDetails?: XOR<AccountDetailsNullableScalarRelationFilter, AccountDetailsWhereInput> | null
    transactions?: TransactionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    address?: SortOrder
    username?: SortOrder
    language?: SortOrder
    countryname?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    country?: CountryOrderByWithRelationInput
    accountDetails?: AccountDetailsOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    address?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringNullableFilter<"User"> | string | null
    language?: StringFilter<"User"> | string
    countryname?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    country?: XOR<CountryNullableScalarRelationFilter, CountryWhereInput> | null
    accountDetails?: XOR<AccountDetailsNullableScalarRelationFilter, AccountDetailsWhereInput> | null
    transactions?: TransactionListRelationFilter
  }, "address">

  export type UserOrderByWithAggregationInput = {
    address?: SortOrder
    username?: SortOrder
    language?: SortOrder
    countryname?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    address?: StringWithAggregatesFilter<"User"> | string
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    language?: StringWithAggregatesFilter<"User"> | string
    countryname?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountDetailsWhereInput = {
    AND?: AccountDetailsWhereInput | AccountDetailsWhereInput[]
    OR?: AccountDetailsWhereInput[]
    NOT?: AccountDetailsWhereInput | AccountDetailsWhereInput[]
    id?: StringFilter<"AccountDetails"> | string
    accountNumber?: StringFilter<"AccountDetails"> | string
    name?: StringFilter<"AccountDetails"> | string
    bank?: StringFilter<"AccountDetails"> | string
    userId?: StringFilter<"AccountDetails"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountDetailsOrderByWithRelationInput = {
    id?: SortOrder
    accountNumber?: SortOrder
    name?: SortOrder
    bank?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: AccountDetailsWhereInput | AccountDetailsWhereInput[]
    OR?: AccountDetailsWhereInput[]
    NOT?: AccountDetailsWhereInput | AccountDetailsWhereInput[]
    accountNumber?: StringFilter<"AccountDetails"> | string
    name?: StringFilter<"AccountDetails"> | string
    bank?: StringFilter<"AccountDetails"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type AccountDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    accountNumber?: SortOrder
    name?: SortOrder
    bank?: SortOrder
    userId?: SortOrder
    _count?: AccountDetailsCountOrderByAggregateInput
    _max?: AccountDetailsMaxOrderByAggregateInput
    _min?: AccountDetailsMinOrderByAggregateInput
  }

  export type AccountDetailsScalarWhereWithAggregatesInput = {
    AND?: AccountDetailsScalarWhereWithAggregatesInput | AccountDetailsScalarWhereWithAggregatesInput[]
    OR?: AccountDetailsScalarWhereWithAggregatesInput[]
    NOT?: AccountDetailsScalarWhereWithAggregatesInput | AccountDetailsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AccountDetails"> | string
    accountNumber?: StringWithAggregatesFilter<"AccountDetails"> | string
    name?: StringWithAggregatesFilter<"AccountDetails"> | string
    bank?: StringWithAggregatesFilter<"AccountDetails"> | string
    userId?: StringWithAggregatesFilter<"AccountDetails"> | string
  }

  export type CountryWhereInput = {
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    currencySymbol?: StringFilter<"Country"> | string
    name?: StringFilter<"Country"> | string
    baseTokencoinType?: StringFilter<"Country"> | string
    baseToken?: XOR<TokensNullableScalarRelationFilter, TokensWhereInput> | null
    User?: UserListRelationFilter
  }

  export type CountryOrderByWithRelationInput = {
    currencySymbol?: SortOrder
    name?: SortOrder
    baseTokencoinType?: SortOrder
    baseToken?: TokensOrderByWithRelationInput
    User?: UserOrderByRelationAggregateInput
  }

  export type CountryWhereUniqueInput = Prisma.AtLeast<{
    name?: string
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    currencySymbol?: StringFilter<"Country"> | string
    baseTokencoinType?: StringFilter<"Country"> | string
    baseToken?: XOR<TokensNullableScalarRelationFilter, TokensWhereInput> | null
    User?: UserListRelationFilter
  }, "name">

  export type CountryOrderByWithAggregationInput = {
    currencySymbol?: SortOrder
    name?: SortOrder
    baseTokencoinType?: SortOrder
    _count?: CountryCountOrderByAggregateInput
    _max?: CountryMaxOrderByAggregateInput
    _min?: CountryMinOrderByAggregateInput
  }

  export type CountryScalarWhereWithAggregatesInput = {
    AND?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    OR?: CountryScalarWhereWithAggregatesInput[]
    NOT?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    currencySymbol?: StringWithAggregatesFilter<"Country"> | string
    name?: StringWithAggregatesFilter<"Country"> | string
    baseTokencoinType?: StringWithAggregatesFilter<"Country"> | string
  }

  export type TokensWhereInput = {
    AND?: TokensWhereInput | TokensWhereInput[]
    OR?: TokensWhereInput[]
    NOT?: TokensWhereInput | TokensWhereInput[]
    name?: StringFilter<"Tokens"> | string
    decimals?: IntFilter<"Tokens"> | number
    symbol?: StringFilter<"Tokens"> | string
    coinType?: StringFilter<"Tokens"> | string
    Country?: CountryListRelationFilter
  }

  export type TokensOrderByWithRelationInput = {
    name?: SortOrder
    decimals?: SortOrder
    symbol?: SortOrder
    coinType?: SortOrder
    Country?: CountryOrderByRelationAggregateInput
  }

  export type TokensWhereUniqueInput = Prisma.AtLeast<{
    coinType?: string
    AND?: TokensWhereInput | TokensWhereInput[]
    OR?: TokensWhereInput[]
    NOT?: TokensWhereInput | TokensWhereInput[]
    name?: StringFilter<"Tokens"> | string
    decimals?: IntFilter<"Tokens"> | number
    symbol?: StringFilter<"Tokens"> | string
    Country?: CountryListRelationFilter
  }, "coinType">

  export type TokensOrderByWithAggregationInput = {
    name?: SortOrder
    decimals?: SortOrder
    symbol?: SortOrder
    coinType?: SortOrder
    _count?: TokensCountOrderByAggregateInput
    _avg?: TokensAvgOrderByAggregateInput
    _max?: TokensMaxOrderByAggregateInput
    _min?: TokensMinOrderByAggregateInput
    _sum?: TokensSumOrderByAggregateInput
  }

  export type TokensScalarWhereWithAggregatesInput = {
    AND?: TokensScalarWhereWithAggregatesInput | TokensScalarWhereWithAggregatesInput[]
    OR?: TokensScalarWhereWithAggregatesInput[]
    NOT?: TokensScalarWhereWithAggregatesInput | TokensScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"Tokens"> | string
    decimals?: IntWithAggregatesFilter<"Tokens"> | number
    symbol?: StringWithAggregatesFilter<"Tokens"> | string
    coinType?: StringWithAggregatesFilter<"Tokens"> | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    transactionId?: StringFilter<"Transaction"> | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    interactedWith?: StringNullableFilter<"Transaction"> | string | null
    date?: DateTimeFilter<"Transaction"> | Date | string
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    fees?: FloatFilter<"Transaction"> | number
    incomingAsset?: StringNullableFilter<"Transaction"> | string | null
    incomingAmount?: FloatNullableFilter<"Transaction"> | number | null
    outgoingAsset?: StringNullableFilter<"Transaction"> | string | null
    outgoingAmount?: FloatNullableFilter<"Transaction"> | number | null
    userId?: StringFilter<"Transaction"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    transactionId?: SortOrder
    type?: SortOrder
    interactedWith?: SortOrder
    date?: SortOrder
    status?: SortOrder
    fees?: SortOrder
    incomingAsset?: SortOrder
    incomingAmount?: SortOrder
    outgoingAsset?: SortOrder
    outgoingAmount?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    transactionId_userId?: TransactionTransactionIdUserIdCompoundUniqueInput
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    transactionId?: StringFilter<"Transaction"> | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    interactedWith?: StringNullableFilter<"Transaction"> | string | null
    date?: DateTimeFilter<"Transaction"> | Date | string
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    fees?: FloatFilter<"Transaction"> | number
    incomingAsset?: StringNullableFilter<"Transaction"> | string | null
    incomingAmount?: FloatNullableFilter<"Transaction"> | number | null
    outgoingAsset?: StringNullableFilter<"Transaction"> | string | null
    outgoingAmount?: FloatNullableFilter<"Transaction"> | number | null
    userId?: StringFilter<"Transaction"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "transactionId_userId">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    transactionId?: SortOrder
    type?: SortOrder
    interactedWith?: SortOrder
    date?: SortOrder
    status?: SortOrder
    fees?: SortOrder
    incomingAsset?: SortOrder
    incomingAmount?: SortOrder
    outgoingAsset?: SortOrder
    outgoingAmount?: SortOrder
    userId?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    transactionId?: StringWithAggregatesFilter<"Transaction"> | string
    type?: EnumTransactionTypeWithAggregatesFilter<"Transaction"> | $Enums.TransactionType
    interactedWith?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    date?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    status?: EnumTransactionStatusWithAggregatesFilter<"Transaction"> | $Enums.TransactionStatus
    fees?: FloatWithAggregatesFilter<"Transaction"> | number
    incomingAsset?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    incomingAmount?: FloatNullableWithAggregatesFilter<"Transaction"> | number | null
    outgoingAsset?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    outgoingAmount?: FloatNullableWithAggregatesFilter<"Transaction"> | number | null
    userId?: StringWithAggregatesFilter<"Transaction"> | string
  }

  export type PayfricaAgentsWhereInput = {
    AND?: PayfricaAgentsWhereInput | PayfricaAgentsWhereInput[]
    OR?: PayfricaAgentsWhereInput[]
    NOT?: PayfricaAgentsWhereInput | PayfricaAgentsWhereInput[]
    id?: StringFilter<"PayfricaAgents"> | string
    validTypes?: JsonFilter<"PayfricaAgents">
    agents?: JsonFilter<"PayfricaAgents">
  }

  export type PayfricaAgentsOrderByWithRelationInput = {
    id?: SortOrder
    validTypes?: SortOrder
    agents?: SortOrder
  }

  export type PayfricaAgentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PayfricaAgentsWhereInput | PayfricaAgentsWhereInput[]
    OR?: PayfricaAgentsWhereInput[]
    NOT?: PayfricaAgentsWhereInput | PayfricaAgentsWhereInput[]
    validTypes?: JsonFilter<"PayfricaAgents">
    agents?: JsonFilter<"PayfricaAgents">
  }, "id">

  export type PayfricaAgentsOrderByWithAggregationInput = {
    id?: SortOrder
    validTypes?: SortOrder
    agents?: SortOrder
    _count?: PayfricaAgentsCountOrderByAggregateInput
    _max?: PayfricaAgentsMaxOrderByAggregateInput
    _min?: PayfricaAgentsMinOrderByAggregateInput
  }

  export type PayfricaAgentsScalarWhereWithAggregatesInput = {
    AND?: PayfricaAgentsScalarWhereWithAggregatesInput | PayfricaAgentsScalarWhereWithAggregatesInput[]
    OR?: PayfricaAgentsScalarWhereWithAggregatesInput[]
    NOT?: PayfricaAgentsScalarWhereWithAggregatesInput | PayfricaAgentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PayfricaAgents"> | string
    validTypes?: JsonWithAggregatesFilter<"PayfricaAgents">
    agents?: JsonWithAggregatesFilter<"PayfricaAgents">
  }

  export type AgentWhereInput = {
    AND?: AgentWhereInput | AgentWhereInput[]
    OR?: AgentWhereInput[]
    NOT?: AgentWhereInput | AgentWhereInput[]
    id?: StringFilter<"Agent"> | string
    addr?: StringFilter<"Agent"> | string
    balance?: BigIntFilter<"Agent"> | bigint | number
    coinType?: StringFilter<"Agent"> | string
    accountNumber?: StringFilter<"Agent"> | string
    bank?: StringFilter<"Agent"> | string
    name?: StringFilter<"Agent"> | string
    pendingWithdrawals?: StringNullableListFilter<"Agent">
    successfulWithdrawals?: StringNullableListFilter<"Agent">
    totalSuccessfulWithdrawals?: IntFilter<"Agent"> | number
    totalPendingWithdrawals?: IntFilter<"Agent"> | number
    totalSuccessfulWithdrawalsAmount?: BigIntFilter<"Agent"> | bigint | number
    totalPendingWithdrawalsAmount?: BigIntFilter<"Agent"> | bigint | number
    pendingDeposits?: StringNullableListFilter<"Agent">
    successfulDeposits?: StringNullableListFilter<"Agent">
    totalSuccessfulDeposits?: BigIntFilter<"Agent"> | bigint | number
    totalPendingDeposits?: BigIntFilter<"Agent"> | bigint | number
    totalSuccessfulDepositsAmount?: BigIntFilter<"Agent"> | bigint | number
    totalPendingDepositsAmount?: BigIntFilter<"Agent"> | bigint | number
    unsuccessfulDeposits?: StringNullableListFilter<"Agent">
    totalUnsuccessfulDeposits?: IntFilter<"Agent"> | number
    maxWithdrawLimit?: BigIntFilter<"Agent"> | bigint | number
    maxDepositLimit?: BigIntFilter<"Agent"> | bigint | number
    minWithdrawLimit?: BigIntFilter<"Agent"> | bigint | number
    minDepositLimit?: BigIntFilter<"Agent"> | bigint | number
    createdAt?: DateTimeFilter<"Agent"> | Date | string
    updatedAt?: DateTimeFilter<"Agent"> | Date | string
  }

  export type AgentOrderByWithRelationInput = {
    id?: SortOrder
    addr?: SortOrder
    balance?: SortOrder
    coinType?: SortOrder
    accountNumber?: SortOrder
    bank?: SortOrder
    name?: SortOrder
    pendingWithdrawals?: SortOrder
    successfulWithdrawals?: SortOrder
    totalSuccessfulWithdrawals?: SortOrder
    totalPendingWithdrawals?: SortOrder
    totalSuccessfulWithdrawalsAmount?: SortOrder
    totalPendingWithdrawalsAmount?: SortOrder
    pendingDeposits?: SortOrder
    successfulDeposits?: SortOrder
    totalSuccessfulDeposits?: SortOrder
    totalPendingDeposits?: SortOrder
    totalSuccessfulDepositsAmount?: SortOrder
    totalPendingDepositsAmount?: SortOrder
    unsuccessfulDeposits?: SortOrder
    totalUnsuccessfulDeposits?: SortOrder
    maxWithdrawLimit?: SortOrder
    maxDepositLimit?: SortOrder
    minWithdrawLimit?: SortOrder
    minDepositLimit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AgentWhereInput | AgentWhereInput[]
    OR?: AgentWhereInput[]
    NOT?: AgentWhereInput | AgentWhereInput[]
    addr?: StringFilter<"Agent"> | string
    balance?: BigIntFilter<"Agent"> | bigint | number
    coinType?: StringFilter<"Agent"> | string
    accountNumber?: StringFilter<"Agent"> | string
    bank?: StringFilter<"Agent"> | string
    name?: StringFilter<"Agent"> | string
    pendingWithdrawals?: StringNullableListFilter<"Agent">
    successfulWithdrawals?: StringNullableListFilter<"Agent">
    totalSuccessfulWithdrawals?: IntFilter<"Agent"> | number
    totalPendingWithdrawals?: IntFilter<"Agent"> | number
    totalSuccessfulWithdrawalsAmount?: BigIntFilter<"Agent"> | bigint | number
    totalPendingWithdrawalsAmount?: BigIntFilter<"Agent"> | bigint | number
    pendingDeposits?: StringNullableListFilter<"Agent">
    successfulDeposits?: StringNullableListFilter<"Agent">
    totalSuccessfulDeposits?: BigIntFilter<"Agent"> | bigint | number
    totalPendingDeposits?: BigIntFilter<"Agent"> | bigint | number
    totalSuccessfulDepositsAmount?: BigIntFilter<"Agent"> | bigint | number
    totalPendingDepositsAmount?: BigIntFilter<"Agent"> | bigint | number
    unsuccessfulDeposits?: StringNullableListFilter<"Agent">
    totalUnsuccessfulDeposits?: IntFilter<"Agent"> | number
    maxWithdrawLimit?: BigIntFilter<"Agent"> | bigint | number
    maxDepositLimit?: BigIntFilter<"Agent"> | bigint | number
    minWithdrawLimit?: BigIntFilter<"Agent"> | bigint | number
    minDepositLimit?: BigIntFilter<"Agent"> | bigint | number
    createdAt?: DateTimeFilter<"Agent"> | Date | string
    updatedAt?: DateTimeFilter<"Agent"> | Date | string
  }, "id">

  export type AgentOrderByWithAggregationInput = {
    id?: SortOrder
    addr?: SortOrder
    balance?: SortOrder
    coinType?: SortOrder
    accountNumber?: SortOrder
    bank?: SortOrder
    name?: SortOrder
    pendingWithdrawals?: SortOrder
    successfulWithdrawals?: SortOrder
    totalSuccessfulWithdrawals?: SortOrder
    totalPendingWithdrawals?: SortOrder
    totalSuccessfulWithdrawalsAmount?: SortOrder
    totalPendingWithdrawalsAmount?: SortOrder
    pendingDeposits?: SortOrder
    successfulDeposits?: SortOrder
    totalSuccessfulDeposits?: SortOrder
    totalPendingDeposits?: SortOrder
    totalSuccessfulDepositsAmount?: SortOrder
    totalPendingDepositsAmount?: SortOrder
    unsuccessfulDeposits?: SortOrder
    totalUnsuccessfulDeposits?: SortOrder
    maxWithdrawLimit?: SortOrder
    maxDepositLimit?: SortOrder
    minWithdrawLimit?: SortOrder
    minDepositLimit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AgentCountOrderByAggregateInput
    _avg?: AgentAvgOrderByAggregateInput
    _max?: AgentMaxOrderByAggregateInput
    _min?: AgentMinOrderByAggregateInput
    _sum?: AgentSumOrderByAggregateInput
  }

  export type AgentScalarWhereWithAggregatesInput = {
    AND?: AgentScalarWhereWithAggregatesInput | AgentScalarWhereWithAggregatesInput[]
    OR?: AgentScalarWhereWithAggregatesInput[]
    NOT?: AgentScalarWhereWithAggregatesInput | AgentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Agent"> | string
    addr?: StringWithAggregatesFilter<"Agent"> | string
    balance?: BigIntWithAggregatesFilter<"Agent"> | bigint | number
    coinType?: StringWithAggregatesFilter<"Agent"> | string
    accountNumber?: StringWithAggregatesFilter<"Agent"> | string
    bank?: StringWithAggregatesFilter<"Agent"> | string
    name?: StringWithAggregatesFilter<"Agent"> | string
    pendingWithdrawals?: StringNullableListFilter<"Agent">
    successfulWithdrawals?: StringNullableListFilter<"Agent">
    totalSuccessfulWithdrawals?: IntWithAggregatesFilter<"Agent"> | number
    totalPendingWithdrawals?: IntWithAggregatesFilter<"Agent"> | number
    totalSuccessfulWithdrawalsAmount?: BigIntWithAggregatesFilter<"Agent"> | bigint | number
    totalPendingWithdrawalsAmount?: BigIntWithAggregatesFilter<"Agent"> | bigint | number
    pendingDeposits?: StringNullableListFilter<"Agent">
    successfulDeposits?: StringNullableListFilter<"Agent">
    totalSuccessfulDeposits?: BigIntWithAggregatesFilter<"Agent"> | bigint | number
    totalPendingDeposits?: BigIntWithAggregatesFilter<"Agent"> | bigint | number
    totalSuccessfulDepositsAmount?: BigIntWithAggregatesFilter<"Agent"> | bigint | number
    totalPendingDepositsAmount?: BigIntWithAggregatesFilter<"Agent"> | bigint | number
    unsuccessfulDeposits?: StringNullableListFilter<"Agent">
    totalUnsuccessfulDeposits?: IntWithAggregatesFilter<"Agent"> | number
    maxWithdrawLimit?: BigIntWithAggregatesFilter<"Agent"> | bigint | number
    maxDepositLimit?: BigIntWithAggregatesFilter<"Agent"> | bigint | number
    minWithdrawLimit?: BigIntWithAggregatesFilter<"Agent"> | bigint | number
    minDepositLimit?: BigIntWithAggregatesFilter<"Agent"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"Agent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Agent"> | Date | string
  }

  export type WithdrawRequestWhereInput = {
    AND?: WithdrawRequestWhereInput | WithdrawRequestWhereInput[]
    OR?: WithdrawRequestWhereInput[]
    NOT?: WithdrawRequestWhereInput | WithdrawRequestWhereInput[]
    id?: StringFilter<"WithdrawRequest"> | string
    amount?: BigIntFilter<"WithdrawRequest"> | bigint | number
    user?: StringFilter<"WithdrawRequest"> | string
    agentId?: StringFilter<"WithdrawRequest"> | string
    coinType?: StringFilter<"WithdrawRequest"> | string
    status?: EnumWithdrawStatusFilter<"WithdrawRequest"> | $Enums.WithdrawStatus
    requestTime?: DateTimeFilter<"WithdrawRequest"> | Date | string
    statusTime?: DateTimeNullableFilter<"WithdrawRequest"> | Date | string | null
    createdAt?: DateTimeFilter<"WithdrawRequest"> | Date | string
    updatedAt?: DateTimeFilter<"WithdrawRequest"> | Date | string
  }

  export type WithdrawRequestOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    user?: SortOrder
    agentId?: SortOrder
    coinType?: SortOrder
    status?: SortOrder
    requestTime?: SortOrder
    statusTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WithdrawRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WithdrawRequestWhereInput | WithdrawRequestWhereInput[]
    OR?: WithdrawRequestWhereInput[]
    NOT?: WithdrawRequestWhereInput | WithdrawRequestWhereInput[]
    amount?: BigIntFilter<"WithdrawRequest"> | bigint | number
    user?: StringFilter<"WithdrawRequest"> | string
    agentId?: StringFilter<"WithdrawRequest"> | string
    coinType?: StringFilter<"WithdrawRequest"> | string
    status?: EnumWithdrawStatusFilter<"WithdrawRequest"> | $Enums.WithdrawStatus
    requestTime?: DateTimeFilter<"WithdrawRequest"> | Date | string
    statusTime?: DateTimeNullableFilter<"WithdrawRequest"> | Date | string | null
    createdAt?: DateTimeFilter<"WithdrawRequest"> | Date | string
    updatedAt?: DateTimeFilter<"WithdrawRequest"> | Date | string
  }, "id">

  export type WithdrawRequestOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    user?: SortOrder
    agentId?: SortOrder
    coinType?: SortOrder
    status?: SortOrder
    requestTime?: SortOrder
    statusTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WithdrawRequestCountOrderByAggregateInput
    _avg?: WithdrawRequestAvgOrderByAggregateInput
    _max?: WithdrawRequestMaxOrderByAggregateInput
    _min?: WithdrawRequestMinOrderByAggregateInput
    _sum?: WithdrawRequestSumOrderByAggregateInput
  }

  export type WithdrawRequestScalarWhereWithAggregatesInput = {
    AND?: WithdrawRequestScalarWhereWithAggregatesInput | WithdrawRequestScalarWhereWithAggregatesInput[]
    OR?: WithdrawRequestScalarWhereWithAggregatesInput[]
    NOT?: WithdrawRequestScalarWhereWithAggregatesInput | WithdrawRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WithdrawRequest"> | string
    amount?: BigIntWithAggregatesFilter<"WithdrawRequest"> | bigint | number
    user?: StringWithAggregatesFilter<"WithdrawRequest"> | string
    agentId?: StringWithAggregatesFilter<"WithdrawRequest"> | string
    coinType?: StringWithAggregatesFilter<"WithdrawRequest"> | string
    status?: EnumWithdrawStatusWithAggregatesFilter<"WithdrawRequest"> | $Enums.WithdrawStatus
    requestTime?: DateTimeWithAggregatesFilter<"WithdrawRequest"> | Date | string
    statusTime?: DateTimeNullableWithAggregatesFilter<"WithdrawRequest"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WithdrawRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WithdrawRequest"> | Date | string
  }

  export type DepositRequestWhereInput = {
    AND?: DepositRequestWhereInput | DepositRequestWhereInput[]
    OR?: DepositRequestWhereInput[]
    NOT?: DepositRequestWhereInput | DepositRequestWhereInput[]
    id?: StringFilter<"DepositRequest"> | string
    amount?: BigIntFilter<"DepositRequest"> | bigint | number
    user?: StringFilter<"DepositRequest"> | string
    agentId?: StringFilter<"DepositRequest"> | string
    successfulAgentId?: StringNullableFilter<"DepositRequest"> | string | null
    coinType?: StringFilter<"DepositRequest"> | string
    comment?: StringFilter<"DepositRequest"> | string
    status?: EnumDepositStatusFilter<"DepositRequest"> | $Enums.DepositStatus
    requestTime?: DateTimeFilter<"DepositRequest"> | Date | string
    statusTime?: DateTimeNullableFilter<"DepositRequest"> | Date | string | null
    createdAt?: DateTimeFilter<"DepositRequest"> | Date | string
    updatedAt?: DateTimeFilter<"DepositRequest"> | Date | string
  }

  export type DepositRequestOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    user?: SortOrder
    agentId?: SortOrder
    successfulAgentId?: SortOrder
    coinType?: SortOrder
    comment?: SortOrder
    status?: SortOrder
    requestTime?: SortOrder
    statusTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepositRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DepositRequestWhereInput | DepositRequestWhereInput[]
    OR?: DepositRequestWhereInput[]
    NOT?: DepositRequestWhereInput | DepositRequestWhereInput[]
    amount?: BigIntFilter<"DepositRequest"> | bigint | number
    user?: StringFilter<"DepositRequest"> | string
    agentId?: StringFilter<"DepositRequest"> | string
    successfulAgentId?: StringNullableFilter<"DepositRequest"> | string | null
    coinType?: StringFilter<"DepositRequest"> | string
    comment?: StringFilter<"DepositRequest"> | string
    status?: EnumDepositStatusFilter<"DepositRequest"> | $Enums.DepositStatus
    requestTime?: DateTimeFilter<"DepositRequest"> | Date | string
    statusTime?: DateTimeNullableFilter<"DepositRequest"> | Date | string | null
    createdAt?: DateTimeFilter<"DepositRequest"> | Date | string
    updatedAt?: DateTimeFilter<"DepositRequest"> | Date | string
  }, "id">

  export type DepositRequestOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    user?: SortOrder
    agentId?: SortOrder
    successfulAgentId?: SortOrder
    coinType?: SortOrder
    comment?: SortOrder
    status?: SortOrder
    requestTime?: SortOrder
    statusTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DepositRequestCountOrderByAggregateInput
    _avg?: DepositRequestAvgOrderByAggregateInput
    _max?: DepositRequestMaxOrderByAggregateInput
    _min?: DepositRequestMinOrderByAggregateInput
    _sum?: DepositRequestSumOrderByAggregateInput
  }

  export type DepositRequestScalarWhereWithAggregatesInput = {
    AND?: DepositRequestScalarWhereWithAggregatesInput | DepositRequestScalarWhereWithAggregatesInput[]
    OR?: DepositRequestScalarWhereWithAggregatesInput[]
    NOT?: DepositRequestScalarWhereWithAggregatesInput | DepositRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DepositRequest"> | string
    amount?: BigIntWithAggregatesFilter<"DepositRequest"> | bigint | number
    user?: StringWithAggregatesFilter<"DepositRequest"> | string
    agentId?: StringWithAggregatesFilter<"DepositRequest"> | string
    successfulAgentId?: StringNullableWithAggregatesFilter<"DepositRequest"> | string | null
    coinType?: StringWithAggregatesFilter<"DepositRequest"> | string
    comment?: StringWithAggregatesFilter<"DepositRequest"> | string
    status?: EnumDepositStatusWithAggregatesFilter<"DepositRequest"> | $Enums.DepositStatus
    requestTime?: DateTimeWithAggregatesFilter<"DepositRequest"> | Date | string
    statusTime?: DateTimeNullableWithAggregatesFilter<"DepositRequest"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DepositRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DepositRequest"> | Date | string
  }

  export type CursorWhereInput = {
    AND?: CursorWhereInput | CursorWhereInput[]
    OR?: CursorWhereInput[]
    NOT?: CursorWhereInput | CursorWhereInput[]
    id?: StringFilter<"Cursor"> | string
    eventSeq?: StringFilter<"Cursor"> | string
    txDigest?: StringFilter<"Cursor"> | string
  }

  export type CursorOrderByWithRelationInput = {
    id?: SortOrder
    eventSeq?: SortOrder
    txDigest?: SortOrder
  }

  export type CursorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CursorWhereInput | CursorWhereInput[]
    OR?: CursorWhereInput[]
    NOT?: CursorWhereInput | CursorWhereInput[]
    eventSeq?: StringFilter<"Cursor"> | string
    txDigest?: StringFilter<"Cursor"> | string
  }, "id">

  export type CursorOrderByWithAggregationInput = {
    id?: SortOrder
    eventSeq?: SortOrder
    txDigest?: SortOrder
    _count?: CursorCountOrderByAggregateInput
    _max?: CursorMaxOrderByAggregateInput
    _min?: CursorMinOrderByAggregateInput
  }

  export type CursorScalarWhereWithAggregatesInput = {
    AND?: CursorScalarWhereWithAggregatesInput | CursorScalarWhereWithAggregatesInput[]
    OR?: CursorScalarWhereWithAggregatesInput[]
    NOT?: CursorScalarWhereWithAggregatesInput | CursorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cursor"> | string
    eventSeq?: StringWithAggregatesFilter<"Cursor"> | string
    txDigest?: StringWithAggregatesFilter<"Cursor"> | string
  }

  export type PoolWhereInput = {
    AND?: PoolWhereInput | PoolWhereInput[]
    OR?: PoolWhereInput[]
    NOT?: PoolWhereInput | PoolWhereInput[]
    id?: StringFilter<"Pool"> | string
    coinType?: StringFilter<"Pool"> | string
    coinName?: StringFilter<"Pool"> | string
    coinBalance?: BigIntFilter<"Pool"> | bigint | number
    rewardsBalance?: BigIntFilter<"Pool"> | bigint | number
    feeDecimal?: IntFilter<"Pool"> | number
    defaultFees?: IntNullableFilter<"Pool"> | number | null
    coinDecimal?: IntFilter<"Pool"> | number
    ratesDollar?: FloatFilter<"Pool"> | number
    createdAt?: DateTimeFilter<"Pool"> | Date | string
    liquidityProviders?: LiquidityProviderListRelationFilter
    swapFees?: SwapFeeListRelationFilter
  }

  export type PoolOrderByWithRelationInput = {
    id?: SortOrder
    coinType?: SortOrder
    coinName?: SortOrder
    coinBalance?: SortOrder
    rewardsBalance?: SortOrder
    feeDecimal?: SortOrder
    defaultFees?: SortOrder
    coinDecimal?: SortOrder
    ratesDollar?: SortOrder
    createdAt?: SortOrder
    liquidityProviders?: LiquidityProviderOrderByRelationAggregateInput
    swapFees?: SwapFeeOrderByRelationAggregateInput
  }

  export type PoolWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PoolWhereInput | PoolWhereInput[]
    OR?: PoolWhereInput[]
    NOT?: PoolWhereInput | PoolWhereInput[]
    coinType?: StringFilter<"Pool"> | string
    coinName?: StringFilter<"Pool"> | string
    coinBalance?: BigIntFilter<"Pool"> | bigint | number
    rewardsBalance?: BigIntFilter<"Pool"> | bigint | number
    feeDecimal?: IntFilter<"Pool"> | number
    defaultFees?: IntNullableFilter<"Pool"> | number | null
    coinDecimal?: IntFilter<"Pool"> | number
    ratesDollar?: FloatFilter<"Pool"> | number
    createdAt?: DateTimeFilter<"Pool"> | Date | string
    liquidityProviders?: LiquidityProviderListRelationFilter
    swapFees?: SwapFeeListRelationFilter
  }, "id">

  export type PoolOrderByWithAggregationInput = {
    id?: SortOrder
    coinType?: SortOrder
    coinName?: SortOrder
    coinBalance?: SortOrder
    rewardsBalance?: SortOrder
    feeDecimal?: SortOrder
    defaultFees?: SortOrder
    coinDecimal?: SortOrder
    ratesDollar?: SortOrder
    createdAt?: SortOrder
    _count?: PoolCountOrderByAggregateInput
    _avg?: PoolAvgOrderByAggregateInput
    _max?: PoolMaxOrderByAggregateInput
    _min?: PoolMinOrderByAggregateInput
    _sum?: PoolSumOrderByAggregateInput
  }

  export type PoolScalarWhereWithAggregatesInput = {
    AND?: PoolScalarWhereWithAggregatesInput | PoolScalarWhereWithAggregatesInput[]
    OR?: PoolScalarWhereWithAggregatesInput[]
    NOT?: PoolScalarWhereWithAggregatesInput | PoolScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pool"> | string
    coinType?: StringWithAggregatesFilter<"Pool"> | string
    coinName?: StringWithAggregatesFilter<"Pool"> | string
    coinBalance?: BigIntWithAggregatesFilter<"Pool"> | bigint | number
    rewardsBalance?: BigIntWithAggregatesFilter<"Pool"> | bigint | number
    feeDecimal?: IntWithAggregatesFilter<"Pool"> | number
    defaultFees?: IntNullableWithAggregatesFilter<"Pool"> | number | null
    coinDecimal?: IntWithAggregatesFilter<"Pool"> | number
    ratesDollar?: FloatWithAggregatesFilter<"Pool"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Pool"> | Date | string
  }

  export type LiquidityProviderWhereInput = {
    AND?: LiquidityProviderWhereInput | LiquidityProviderWhereInput[]
    OR?: LiquidityProviderWhereInput[]
    NOT?: LiquidityProviderWhereInput | LiquidityProviderWhereInput[]
    id?: StringFilter<"LiquidityProvider"> | string
    poolId?: StringFilter<"LiquidityProvider"> | string
    provider?: StringFilter<"LiquidityProvider"> | string
    amount?: BigIntFilter<"LiquidityProvider"> | bigint | number
    rewards?: BigIntFilter<"LiquidityProvider"> | bigint | number
    pool?: XOR<PoolScalarRelationFilter, PoolWhereInput>
  }

  export type LiquidityProviderOrderByWithRelationInput = {
    id?: SortOrder
    poolId?: SortOrder
    provider?: SortOrder
    amount?: SortOrder
    rewards?: SortOrder
    pool?: PoolOrderByWithRelationInput
  }

  export type LiquidityProviderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LiquidityProviderWhereInput | LiquidityProviderWhereInput[]
    OR?: LiquidityProviderWhereInput[]
    NOT?: LiquidityProviderWhereInput | LiquidityProviderWhereInput[]
    poolId?: StringFilter<"LiquidityProvider"> | string
    provider?: StringFilter<"LiquidityProvider"> | string
    amount?: BigIntFilter<"LiquidityProvider"> | bigint | number
    rewards?: BigIntFilter<"LiquidityProvider"> | bigint | number
    pool?: XOR<PoolScalarRelationFilter, PoolWhereInput>
  }, "id">

  export type LiquidityProviderOrderByWithAggregationInput = {
    id?: SortOrder
    poolId?: SortOrder
    provider?: SortOrder
    amount?: SortOrder
    rewards?: SortOrder
    _count?: LiquidityProviderCountOrderByAggregateInput
    _avg?: LiquidityProviderAvgOrderByAggregateInput
    _max?: LiquidityProviderMaxOrderByAggregateInput
    _min?: LiquidityProviderMinOrderByAggregateInput
    _sum?: LiquidityProviderSumOrderByAggregateInput
  }

  export type LiquidityProviderScalarWhereWithAggregatesInput = {
    AND?: LiquidityProviderScalarWhereWithAggregatesInput | LiquidityProviderScalarWhereWithAggregatesInput[]
    OR?: LiquidityProviderScalarWhereWithAggregatesInput[]
    NOT?: LiquidityProviderScalarWhereWithAggregatesInput | LiquidityProviderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LiquidityProvider"> | string
    poolId?: StringWithAggregatesFilter<"LiquidityProvider"> | string
    provider?: StringWithAggregatesFilter<"LiquidityProvider"> | string
    amount?: BigIntWithAggregatesFilter<"LiquidityProvider"> | bigint | number
    rewards?: BigIntWithAggregatesFilter<"LiquidityProvider"> | bigint | number
  }

  export type SwapFeeWhereInput = {
    AND?: SwapFeeWhereInput | SwapFeeWhereInput[]
    OR?: SwapFeeWhereInput[]
    NOT?: SwapFeeWhereInput | SwapFeeWhereInput[]
    id?: StringFilter<"SwapFee"> | string
    poolId?: StringFilter<"SwapFee"> | string
    threshold?: BigIntFilter<"SwapFee"> | bigint | number
    fee?: IntFilter<"SwapFee"> | number
    pool?: XOR<PoolScalarRelationFilter, PoolWhereInput>
  }

  export type SwapFeeOrderByWithRelationInput = {
    id?: SortOrder
    poolId?: SortOrder
    threshold?: SortOrder
    fee?: SortOrder
    pool?: PoolOrderByWithRelationInput
  }

  export type SwapFeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SwapFeeWhereInput | SwapFeeWhereInput[]
    OR?: SwapFeeWhereInput[]
    NOT?: SwapFeeWhereInput | SwapFeeWhereInput[]
    poolId?: StringFilter<"SwapFee"> | string
    threshold?: BigIntFilter<"SwapFee"> | bigint | number
    fee?: IntFilter<"SwapFee"> | number
    pool?: XOR<PoolScalarRelationFilter, PoolWhereInput>
  }, "id">

  export type SwapFeeOrderByWithAggregationInput = {
    id?: SortOrder
    poolId?: SortOrder
    threshold?: SortOrder
    fee?: SortOrder
    _count?: SwapFeeCountOrderByAggregateInput
    _avg?: SwapFeeAvgOrderByAggregateInput
    _max?: SwapFeeMaxOrderByAggregateInput
    _min?: SwapFeeMinOrderByAggregateInput
    _sum?: SwapFeeSumOrderByAggregateInput
  }

  export type SwapFeeScalarWhereWithAggregatesInput = {
    AND?: SwapFeeScalarWhereWithAggregatesInput | SwapFeeScalarWhereWithAggregatesInput[]
    OR?: SwapFeeScalarWhereWithAggregatesInput[]
    NOT?: SwapFeeScalarWhereWithAggregatesInput | SwapFeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SwapFee"> | string
    poolId?: StringWithAggregatesFilter<"SwapFee"> | string
    threshold?: BigIntWithAggregatesFilter<"SwapFee"> | bigint | number
    fee?: IntWithAggregatesFilter<"SwapFee"> | number
  }

  export type PoolEventWhereInput = {
    AND?: PoolEventWhereInput | PoolEventWhereInput[]
    OR?: PoolEventWhereInput[]
    NOT?: PoolEventWhereInput | PoolEventWhereInput[]
    id?: StringFilter<"PoolEvent"> | string
    eventType?: StringFilter<"PoolEvent"> | string
    poolId?: StringFilter<"PoolEvent"> | string
    coinType?: StringFilter<"PoolEvent"> | string
    details?: JsonFilter<"PoolEvent">
    timestamp?: DateTimeFilter<"PoolEvent"> | Date | string
  }

  export type PoolEventOrderByWithRelationInput = {
    id?: SortOrder
    eventType?: SortOrder
    poolId?: SortOrder
    coinType?: SortOrder
    details?: SortOrder
    timestamp?: SortOrder
  }

  export type PoolEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PoolEventWhereInput | PoolEventWhereInput[]
    OR?: PoolEventWhereInput[]
    NOT?: PoolEventWhereInput | PoolEventWhereInput[]
    eventType?: StringFilter<"PoolEvent"> | string
    poolId?: StringFilter<"PoolEvent"> | string
    coinType?: StringFilter<"PoolEvent"> | string
    details?: JsonFilter<"PoolEvent">
    timestamp?: DateTimeFilter<"PoolEvent"> | Date | string
  }, "id">

  export type PoolEventOrderByWithAggregationInput = {
    id?: SortOrder
    eventType?: SortOrder
    poolId?: SortOrder
    coinType?: SortOrder
    details?: SortOrder
    timestamp?: SortOrder
    _count?: PoolEventCountOrderByAggregateInput
    _max?: PoolEventMaxOrderByAggregateInput
    _min?: PoolEventMinOrderByAggregateInput
  }

  export type PoolEventScalarWhereWithAggregatesInput = {
    AND?: PoolEventScalarWhereWithAggregatesInput | PoolEventScalarWhereWithAggregatesInput[]
    OR?: PoolEventScalarWhereWithAggregatesInput[]
    NOT?: PoolEventScalarWhereWithAggregatesInput | PoolEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PoolEvent"> | string
    eventType?: StringWithAggregatesFilter<"PoolEvent"> | string
    poolId?: StringWithAggregatesFilter<"PoolEvent"> | string
    coinType?: StringWithAggregatesFilter<"PoolEvent"> | string
    details?: JsonWithAggregatesFilter<"PoolEvent">
    timestamp?: DateTimeWithAggregatesFilter<"PoolEvent"> | Date | string
  }

  export type UserCreateInput = {
    address: string
    username?: string | null
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    country?: CountryCreateNestedOneWithoutUserInput
    accountDetails?: AccountDetailsCreateNestedOneWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    address: string
    username?: string | null
    language?: string
    countryname?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountDetails?: AccountDetailsUncheckedCreateNestedOneWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneWithoutUserNestedInput
    accountDetails?: AccountDetailsUpdateOneWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    countryname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountDetails?: AccountDetailsUncheckedUpdateOneWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    address: string
    username?: string | null
    language?: string
    countryname?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    countryname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountDetailsCreateInput = {
    id?: string
    accountNumber: string
    name: string
    bank: string
    user: UserCreateNestedOneWithoutAccountDetailsInput
  }

  export type AccountDetailsUncheckedCreateInput = {
    id?: string
    accountNumber: string
    name: string
    bank: string
    userId: string
  }

  export type AccountDetailsUpdateInput = {
    accountNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bank?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAccountDetailsNestedInput
  }

  export type AccountDetailsUncheckedUpdateInput = {
    accountNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bank?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountDetailsCreateManyInput = {
    id?: string
    accountNumber: string
    name: string
    bank: string
    userId: string
  }

  export type AccountDetailsUpdateManyMutationInput = {
    accountNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bank?: StringFieldUpdateOperationsInput | string
  }

  export type AccountDetailsUncheckedUpdateManyInput = {
    accountNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bank?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CountryCreateInput = {
    currencySymbol: string
    name: string
    baseToken?: TokensCreateNestedOneWithoutCountryInput
    User?: UserCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateInput = {
    currencySymbol: string
    name: string
    baseTokencoinType: string
    User?: UserUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryUpdateInput = {
    currencySymbol?: StringFieldUpdateOperationsInput | string
    baseToken?: TokensUpdateOneWithoutCountryNestedInput
    User?: UserUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateInput = {
    currencySymbol?: StringFieldUpdateOperationsInput | string
    baseTokencoinType?: StringFieldUpdateOperationsInput | string
    User?: UserUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CountryCreateManyInput = {
    currencySymbol: string
    name: string
    baseTokencoinType: string
  }

  export type CountryUpdateManyMutationInput = {
    currencySymbol?: StringFieldUpdateOperationsInput | string
  }

  export type CountryUncheckedUpdateManyInput = {
    currencySymbol?: StringFieldUpdateOperationsInput | string
    baseTokencoinType?: StringFieldUpdateOperationsInput | string
  }

  export type TokensCreateInput = {
    name: string
    decimals: number
    symbol: string
    coinType: string
    Country?: CountryCreateNestedManyWithoutBaseTokenInput
  }

  export type TokensUncheckedCreateInput = {
    name: string
    decimals: number
    symbol: string
    coinType: string
    Country?: CountryUncheckedCreateNestedManyWithoutBaseTokenInput
  }

  export type TokensUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    decimals?: IntFieldUpdateOperationsInput | number
    symbol?: StringFieldUpdateOperationsInput | string
    Country?: CountryUpdateManyWithoutBaseTokenNestedInput
  }

  export type TokensUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    decimals?: IntFieldUpdateOperationsInput | number
    symbol?: StringFieldUpdateOperationsInput | string
    Country?: CountryUncheckedUpdateManyWithoutBaseTokenNestedInput
  }

  export type TokensCreateManyInput = {
    name: string
    decimals: number
    symbol: string
    coinType: string
  }

  export type TokensUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    decimals?: IntFieldUpdateOperationsInput | number
    symbol?: StringFieldUpdateOperationsInput | string
  }

  export type TokensUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    decimals?: IntFieldUpdateOperationsInput | number
    symbol?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateInput = {
    id?: string
    transactionId: string
    type: $Enums.TransactionType
    interactedWith?: string | null
    date?: Date | string
    status: $Enums.TransactionStatus
    fees: number
    incomingAsset?: string | null
    incomingAmount?: number | null
    outgoingAsset?: string | null
    outgoingAmount?: number | null
    user: UserCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    transactionId: string
    type: $Enums.TransactionType
    interactedWith?: string | null
    date?: Date | string
    status: $Enums.TransactionStatus
    fees: number
    incomingAsset?: string | null
    incomingAmount?: number | null
    outgoingAsset?: string | null
    outgoingAmount?: number | null
    userId: string
  }

  export type TransactionUpdateInput = {
    transactionId?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    interactedWith?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    fees?: FloatFieldUpdateOperationsInput | number
    incomingAsset?: NullableStringFieldUpdateOperationsInput | string | null
    incomingAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    outgoingAsset?: NullableStringFieldUpdateOperationsInput | string | null
    outgoingAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    transactionId?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    interactedWith?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    fees?: FloatFieldUpdateOperationsInput | number
    incomingAsset?: NullableStringFieldUpdateOperationsInput | string | null
    incomingAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    outgoingAsset?: NullableStringFieldUpdateOperationsInput | string | null
    outgoingAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateManyInput = {
    id?: string
    transactionId: string
    type: $Enums.TransactionType
    interactedWith?: string | null
    date?: Date | string
    status: $Enums.TransactionStatus
    fees: number
    incomingAsset?: string | null
    incomingAmount?: number | null
    outgoingAsset?: string | null
    outgoingAmount?: number | null
    userId: string
  }

  export type TransactionUpdateManyMutationInput = {
    transactionId?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    interactedWith?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    fees?: FloatFieldUpdateOperationsInput | number
    incomingAsset?: NullableStringFieldUpdateOperationsInput | string | null
    incomingAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    outgoingAsset?: NullableStringFieldUpdateOperationsInput | string | null
    outgoingAmount?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type TransactionUncheckedUpdateManyInput = {
    transactionId?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    interactedWith?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    fees?: FloatFieldUpdateOperationsInput | number
    incomingAsset?: NullableStringFieldUpdateOperationsInput | string | null
    incomingAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    outgoingAsset?: NullableStringFieldUpdateOperationsInput | string | null
    outgoingAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PayfricaAgentsCreateInput = {
    id: string
    validTypes: InputJsonValue
    agents: InputJsonValue
  }

  export type PayfricaAgentsUncheckedCreateInput = {
    id: string
    validTypes: InputJsonValue
    agents: InputJsonValue
  }

  export type PayfricaAgentsUpdateInput = {
    validTypes?: InputJsonValue | InputJsonValue
    agents?: InputJsonValue | InputJsonValue
  }

  export type PayfricaAgentsUncheckedUpdateInput = {
    validTypes?: InputJsonValue | InputJsonValue
    agents?: InputJsonValue | InputJsonValue
  }

  export type PayfricaAgentsCreateManyInput = {
    id: string
    validTypes: InputJsonValue
    agents: InputJsonValue
  }

  export type PayfricaAgentsUpdateManyMutationInput = {
    validTypes?: InputJsonValue | InputJsonValue
    agents?: InputJsonValue | InputJsonValue
  }

  export type PayfricaAgentsUncheckedUpdateManyInput = {
    validTypes?: InputJsonValue | InputJsonValue
    agents?: InputJsonValue | InputJsonValue
  }

  export type AgentCreateInput = {
    id: string
    addr: string
    balance: bigint | number
    coinType: string
    accountNumber: string
    bank: string
    name: string
    pendingWithdrawals?: AgentCreatependingWithdrawalsInput | string[]
    successfulWithdrawals?: AgentCreatesuccessfulWithdrawalsInput | string[]
    totalSuccessfulWithdrawals?: number
    totalPendingWithdrawals?: number
    totalSuccessfulWithdrawalsAmount?: bigint | number
    totalPendingWithdrawalsAmount?: bigint | number
    pendingDeposits?: AgentCreatependingDepositsInput | string[]
    successfulDeposits?: AgentCreatesuccessfulDepositsInput | string[]
    totalSuccessfulDeposits?: bigint | number
    totalPendingDeposits?: bigint | number
    totalSuccessfulDepositsAmount?: bigint | number
    totalPendingDepositsAmount?: bigint | number
    unsuccessfulDeposits?: AgentCreateunsuccessfulDepositsInput | string[]
    totalUnsuccessfulDeposits?: number
    maxWithdrawLimit?: bigint | number
    maxDepositLimit?: bigint | number
    minWithdrawLimit?: bigint | number
    minDepositLimit?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgentUncheckedCreateInput = {
    id: string
    addr: string
    balance: bigint | number
    coinType: string
    accountNumber: string
    bank: string
    name: string
    pendingWithdrawals?: AgentCreatependingWithdrawalsInput | string[]
    successfulWithdrawals?: AgentCreatesuccessfulWithdrawalsInput | string[]
    totalSuccessfulWithdrawals?: number
    totalPendingWithdrawals?: number
    totalSuccessfulWithdrawalsAmount?: bigint | number
    totalPendingWithdrawalsAmount?: bigint | number
    pendingDeposits?: AgentCreatependingDepositsInput | string[]
    successfulDeposits?: AgentCreatesuccessfulDepositsInput | string[]
    totalSuccessfulDeposits?: bigint | number
    totalPendingDeposits?: bigint | number
    totalSuccessfulDepositsAmount?: bigint | number
    totalPendingDepositsAmount?: bigint | number
    unsuccessfulDeposits?: AgentCreateunsuccessfulDepositsInput | string[]
    totalUnsuccessfulDeposits?: number
    maxWithdrawLimit?: bigint | number
    maxDepositLimit?: bigint | number
    minWithdrawLimit?: bigint | number
    minDepositLimit?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgentUpdateInput = {
    addr?: StringFieldUpdateOperationsInput | string
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    coinType?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    bank?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pendingWithdrawals?: AgentUpdatependingWithdrawalsInput | string[]
    successfulWithdrawals?: AgentUpdatesuccessfulWithdrawalsInput | string[]
    totalSuccessfulWithdrawals?: IntFieldUpdateOperationsInput | number
    totalPendingWithdrawals?: IntFieldUpdateOperationsInput | number
    totalSuccessfulWithdrawalsAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    totalPendingWithdrawalsAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    pendingDeposits?: AgentUpdatependingDepositsInput | string[]
    successfulDeposits?: AgentUpdatesuccessfulDepositsInput | string[]
    totalSuccessfulDeposits?: BigIntFieldUpdateOperationsInput | bigint | number
    totalPendingDeposits?: BigIntFieldUpdateOperationsInput | bigint | number
    totalSuccessfulDepositsAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    totalPendingDepositsAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    unsuccessfulDeposits?: AgentUpdateunsuccessfulDepositsInput | string[]
    totalUnsuccessfulDeposits?: IntFieldUpdateOperationsInput | number
    maxWithdrawLimit?: BigIntFieldUpdateOperationsInput | bigint | number
    maxDepositLimit?: BigIntFieldUpdateOperationsInput | bigint | number
    minWithdrawLimit?: BigIntFieldUpdateOperationsInput | bigint | number
    minDepositLimit?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentUncheckedUpdateInput = {
    addr?: StringFieldUpdateOperationsInput | string
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    coinType?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    bank?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pendingWithdrawals?: AgentUpdatependingWithdrawalsInput | string[]
    successfulWithdrawals?: AgentUpdatesuccessfulWithdrawalsInput | string[]
    totalSuccessfulWithdrawals?: IntFieldUpdateOperationsInput | number
    totalPendingWithdrawals?: IntFieldUpdateOperationsInput | number
    totalSuccessfulWithdrawalsAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    totalPendingWithdrawalsAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    pendingDeposits?: AgentUpdatependingDepositsInput | string[]
    successfulDeposits?: AgentUpdatesuccessfulDepositsInput | string[]
    totalSuccessfulDeposits?: BigIntFieldUpdateOperationsInput | bigint | number
    totalPendingDeposits?: BigIntFieldUpdateOperationsInput | bigint | number
    totalSuccessfulDepositsAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    totalPendingDepositsAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    unsuccessfulDeposits?: AgentUpdateunsuccessfulDepositsInput | string[]
    totalUnsuccessfulDeposits?: IntFieldUpdateOperationsInput | number
    maxWithdrawLimit?: BigIntFieldUpdateOperationsInput | bigint | number
    maxDepositLimit?: BigIntFieldUpdateOperationsInput | bigint | number
    minWithdrawLimit?: BigIntFieldUpdateOperationsInput | bigint | number
    minDepositLimit?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentCreateManyInput = {
    id: string
    addr: string
    balance: bigint | number
    coinType: string
    accountNumber: string
    bank: string
    name: string
    pendingWithdrawals?: AgentCreatependingWithdrawalsInput | string[]
    successfulWithdrawals?: AgentCreatesuccessfulWithdrawalsInput | string[]
    totalSuccessfulWithdrawals?: number
    totalPendingWithdrawals?: number
    totalSuccessfulWithdrawalsAmount?: bigint | number
    totalPendingWithdrawalsAmount?: bigint | number
    pendingDeposits?: AgentCreatependingDepositsInput | string[]
    successfulDeposits?: AgentCreatesuccessfulDepositsInput | string[]
    totalSuccessfulDeposits?: bigint | number
    totalPendingDeposits?: bigint | number
    totalSuccessfulDepositsAmount?: bigint | number
    totalPendingDepositsAmount?: bigint | number
    unsuccessfulDeposits?: AgentCreateunsuccessfulDepositsInput | string[]
    totalUnsuccessfulDeposits?: number
    maxWithdrawLimit?: bigint | number
    maxDepositLimit?: bigint | number
    minWithdrawLimit?: bigint | number
    minDepositLimit?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgentUpdateManyMutationInput = {
    addr?: StringFieldUpdateOperationsInput | string
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    coinType?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    bank?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pendingWithdrawals?: AgentUpdatependingWithdrawalsInput | string[]
    successfulWithdrawals?: AgentUpdatesuccessfulWithdrawalsInput | string[]
    totalSuccessfulWithdrawals?: IntFieldUpdateOperationsInput | number
    totalPendingWithdrawals?: IntFieldUpdateOperationsInput | number
    totalSuccessfulWithdrawalsAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    totalPendingWithdrawalsAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    pendingDeposits?: AgentUpdatependingDepositsInput | string[]
    successfulDeposits?: AgentUpdatesuccessfulDepositsInput | string[]
    totalSuccessfulDeposits?: BigIntFieldUpdateOperationsInput | bigint | number
    totalPendingDeposits?: BigIntFieldUpdateOperationsInput | bigint | number
    totalSuccessfulDepositsAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    totalPendingDepositsAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    unsuccessfulDeposits?: AgentUpdateunsuccessfulDepositsInput | string[]
    totalUnsuccessfulDeposits?: IntFieldUpdateOperationsInput | number
    maxWithdrawLimit?: BigIntFieldUpdateOperationsInput | bigint | number
    maxDepositLimit?: BigIntFieldUpdateOperationsInput | bigint | number
    minWithdrawLimit?: BigIntFieldUpdateOperationsInput | bigint | number
    minDepositLimit?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentUncheckedUpdateManyInput = {
    addr?: StringFieldUpdateOperationsInput | string
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    coinType?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    bank?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pendingWithdrawals?: AgentUpdatependingWithdrawalsInput | string[]
    successfulWithdrawals?: AgentUpdatesuccessfulWithdrawalsInput | string[]
    totalSuccessfulWithdrawals?: IntFieldUpdateOperationsInput | number
    totalPendingWithdrawals?: IntFieldUpdateOperationsInput | number
    totalSuccessfulWithdrawalsAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    totalPendingWithdrawalsAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    pendingDeposits?: AgentUpdatependingDepositsInput | string[]
    successfulDeposits?: AgentUpdatesuccessfulDepositsInput | string[]
    totalSuccessfulDeposits?: BigIntFieldUpdateOperationsInput | bigint | number
    totalPendingDeposits?: BigIntFieldUpdateOperationsInput | bigint | number
    totalSuccessfulDepositsAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    totalPendingDepositsAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    unsuccessfulDeposits?: AgentUpdateunsuccessfulDepositsInput | string[]
    totalUnsuccessfulDeposits?: IntFieldUpdateOperationsInput | number
    maxWithdrawLimit?: BigIntFieldUpdateOperationsInput | bigint | number
    maxDepositLimit?: BigIntFieldUpdateOperationsInput | bigint | number
    minWithdrawLimit?: BigIntFieldUpdateOperationsInput | bigint | number
    minDepositLimit?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawRequestCreateInput = {
    id: string
    amount: bigint | number
    user: string
    agentId: string
    coinType: string
    status?: $Enums.WithdrawStatus
    requestTime: Date | string
    statusTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WithdrawRequestUncheckedCreateInput = {
    id: string
    amount: bigint | number
    user: string
    agentId: string
    coinType: string
    status?: $Enums.WithdrawStatus
    requestTime: Date | string
    statusTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WithdrawRequestUpdateInput = {
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    user?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    coinType?: StringFieldUpdateOperationsInput | string
    status?: EnumWithdrawStatusFieldUpdateOperationsInput | $Enums.WithdrawStatus
    requestTime?: DateTimeFieldUpdateOperationsInput | Date | string
    statusTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawRequestUncheckedUpdateInput = {
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    user?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    coinType?: StringFieldUpdateOperationsInput | string
    status?: EnumWithdrawStatusFieldUpdateOperationsInput | $Enums.WithdrawStatus
    requestTime?: DateTimeFieldUpdateOperationsInput | Date | string
    statusTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawRequestCreateManyInput = {
    id: string
    amount: bigint | number
    user: string
    agentId: string
    coinType: string
    status?: $Enums.WithdrawStatus
    requestTime: Date | string
    statusTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WithdrawRequestUpdateManyMutationInput = {
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    user?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    coinType?: StringFieldUpdateOperationsInput | string
    status?: EnumWithdrawStatusFieldUpdateOperationsInput | $Enums.WithdrawStatus
    requestTime?: DateTimeFieldUpdateOperationsInput | Date | string
    statusTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawRequestUncheckedUpdateManyInput = {
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    user?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    coinType?: StringFieldUpdateOperationsInput | string
    status?: EnumWithdrawStatusFieldUpdateOperationsInput | $Enums.WithdrawStatus
    requestTime?: DateTimeFieldUpdateOperationsInput | Date | string
    statusTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositRequestCreateInput = {
    id: string
    amount: bigint | number
    user: string
    agentId: string
    successfulAgentId?: string | null
    coinType: string
    comment: string
    status?: $Enums.DepositStatus
    requestTime: Date | string
    statusTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepositRequestUncheckedCreateInput = {
    id: string
    amount: bigint | number
    user: string
    agentId: string
    successfulAgentId?: string | null
    coinType: string
    comment: string
    status?: $Enums.DepositStatus
    requestTime: Date | string
    statusTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepositRequestUpdateInput = {
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    user?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    successfulAgentId?: NullableStringFieldUpdateOperationsInput | string | null
    coinType?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    status?: EnumDepositStatusFieldUpdateOperationsInput | $Enums.DepositStatus
    requestTime?: DateTimeFieldUpdateOperationsInput | Date | string
    statusTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositRequestUncheckedUpdateInput = {
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    user?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    successfulAgentId?: NullableStringFieldUpdateOperationsInput | string | null
    coinType?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    status?: EnumDepositStatusFieldUpdateOperationsInput | $Enums.DepositStatus
    requestTime?: DateTimeFieldUpdateOperationsInput | Date | string
    statusTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositRequestCreateManyInput = {
    id: string
    amount: bigint | number
    user: string
    agentId: string
    successfulAgentId?: string | null
    coinType: string
    comment: string
    status?: $Enums.DepositStatus
    requestTime: Date | string
    statusTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepositRequestUpdateManyMutationInput = {
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    user?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    successfulAgentId?: NullableStringFieldUpdateOperationsInput | string | null
    coinType?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    status?: EnumDepositStatusFieldUpdateOperationsInput | $Enums.DepositStatus
    requestTime?: DateTimeFieldUpdateOperationsInput | Date | string
    statusTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositRequestUncheckedUpdateManyInput = {
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    user?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    successfulAgentId?: NullableStringFieldUpdateOperationsInput | string | null
    coinType?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    status?: EnumDepositStatusFieldUpdateOperationsInput | $Enums.DepositStatus
    requestTime?: DateTimeFieldUpdateOperationsInput | Date | string
    statusTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CursorCreateInput = {
    id: string
    eventSeq: string
    txDigest: string
  }

  export type CursorUncheckedCreateInput = {
    id: string
    eventSeq: string
    txDigest: string
  }

  export type CursorUpdateInput = {
    eventSeq?: StringFieldUpdateOperationsInput | string
    txDigest?: StringFieldUpdateOperationsInput | string
  }

  export type CursorUncheckedUpdateInput = {
    eventSeq?: StringFieldUpdateOperationsInput | string
    txDigest?: StringFieldUpdateOperationsInput | string
  }

  export type CursorCreateManyInput = {
    id: string
    eventSeq: string
    txDigest: string
  }

  export type CursorUpdateManyMutationInput = {
    eventSeq?: StringFieldUpdateOperationsInput | string
    txDigest?: StringFieldUpdateOperationsInput | string
  }

  export type CursorUncheckedUpdateManyInput = {
    eventSeq?: StringFieldUpdateOperationsInput | string
    txDigest?: StringFieldUpdateOperationsInput | string
  }

  export type PoolCreateInput = {
    id: string
    coinType: string
    coinName: string
    coinBalance: bigint | number
    rewardsBalance: bigint | number
    feeDecimal: number
    defaultFees?: number | null
    coinDecimal: number
    ratesDollar: number
    createdAt?: Date | string
    liquidityProviders?: LiquidityProviderCreateNestedManyWithoutPoolInput
    swapFees?: SwapFeeCreateNestedManyWithoutPoolInput
  }

  export type PoolUncheckedCreateInput = {
    id: string
    coinType: string
    coinName: string
    coinBalance: bigint | number
    rewardsBalance: bigint | number
    feeDecimal: number
    defaultFees?: number | null
    coinDecimal: number
    ratesDollar: number
    createdAt?: Date | string
    liquidityProviders?: LiquidityProviderUncheckedCreateNestedManyWithoutPoolInput
    swapFees?: SwapFeeUncheckedCreateNestedManyWithoutPoolInput
  }

  export type PoolUpdateInput = {
    coinType?: StringFieldUpdateOperationsInput | string
    coinName?: StringFieldUpdateOperationsInput | string
    coinBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    rewardsBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    feeDecimal?: IntFieldUpdateOperationsInput | number
    defaultFees?: NullableIntFieldUpdateOperationsInput | number | null
    coinDecimal?: IntFieldUpdateOperationsInput | number
    ratesDollar?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liquidityProviders?: LiquidityProviderUpdateManyWithoutPoolNestedInput
    swapFees?: SwapFeeUpdateManyWithoutPoolNestedInput
  }

  export type PoolUncheckedUpdateInput = {
    coinType?: StringFieldUpdateOperationsInput | string
    coinName?: StringFieldUpdateOperationsInput | string
    coinBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    rewardsBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    feeDecimal?: IntFieldUpdateOperationsInput | number
    defaultFees?: NullableIntFieldUpdateOperationsInput | number | null
    coinDecimal?: IntFieldUpdateOperationsInput | number
    ratesDollar?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liquidityProviders?: LiquidityProviderUncheckedUpdateManyWithoutPoolNestedInput
    swapFees?: SwapFeeUncheckedUpdateManyWithoutPoolNestedInput
  }

  export type PoolCreateManyInput = {
    id: string
    coinType: string
    coinName: string
    coinBalance: bigint | number
    rewardsBalance: bigint | number
    feeDecimal: number
    defaultFees?: number | null
    coinDecimal: number
    ratesDollar: number
    createdAt?: Date | string
  }

  export type PoolUpdateManyMutationInput = {
    coinType?: StringFieldUpdateOperationsInput | string
    coinName?: StringFieldUpdateOperationsInput | string
    coinBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    rewardsBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    feeDecimal?: IntFieldUpdateOperationsInput | number
    defaultFees?: NullableIntFieldUpdateOperationsInput | number | null
    coinDecimal?: IntFieldUpdateOperationsInput | number
    ratesDollar?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoolUncheckedUpdateManyInput = {
    coinType?: StringFieldUpdateOperationsInput | string
    coinName?: StringFieldUpdateOperationsInput | string
    coinBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    rewardsBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    feeDecimal?: IntFieldUpdateOperationsInput | number
    defaultFees?: NullableIntFieldUpdateOperationsInput | number | null
    coinDecimal?: IntFieldUpdateOperationsInput | number
    ratesDollar?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiquidityProviderCreateInput = {
    id: string
    provider: string
    amount: bigint | number
    rewards: bigint | number
    pool: PoolCreateNestedOneWithoutLiquidityProvidersInput
  }

  export type LiquidityProviderUncheckedCreateInput = {
    id: string
    poolId: string
    provider: string
    amount: bigint | number
    rewards: bigint | number
  }

  export type LiquidityProviderUpdateInput = {
    provider?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    rewards?: BigIntFieldUpdateOperationsInput | bigint | number
    pool?: PoolUpdateOneRequiredWithoutLiquidityProvidersNestedInput
  }

  export type LiquidityProviderUncheckedUpdateInput = {
    poolId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    rewards?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type LiquidityProviderCreateManyInput = {
    id: string
    poolId: string
    provider: string
    amount: bigint | number
    rewards: bigint | number
  }

  export type LiquidityProviderUpdateManyMutationInput = {
    provider?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    rewards?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type LiquidityProviderUncheckedUpdateManyInput = {
    poolId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    rewards?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type SwapFeeCreateInput = {
    id: string
    threshold: bigint | number
    fee: number
    pool: PoolCreateNestedOneWithoutSwapFeesInput
  }

  export type SwapFeeUncheckedCreateInput = {
    id: string
    poolId: string
    threshold: bigint | number
    fee: number
  }

  export type SwapFeeUpdateInput = {
    threshold?: BigIntFieldUpdateOperationsInput | bigint | number
    fee?: IntFieldUpdateOperationsInput | number
    pool?: PoolUpdateOneRequiredWithoutSwapFeesNestedInput
  }

  export type SwapFeeUncheckedUpdateInput = {
    poolId?: StringFieldUpdateOperationsInput | string
    threshold?: BigIntFieldUpdateOperationsInput | bigint | number
    fee?: IntFieldUpdateOperationsInput | number
  }

  export type SwapFeeCreateManyInput = {
    id: string
    poolId: string
    threshold: bigint | number
    fee: number
  }

  export type SwapFeeUpdateManyMutationInput = {
    threshold?: BigIntFieldUpdateOperationsInput | bigint | number
    fee?: IntFieldUpdateOperationsInput | number
  }

  export type SwapFeeUncheckedUpdateManyInput = {
    poolId?: StringFieldUpdateOperationsInput | string
    threshold?: BigIntFieldUpdateOperationsInput | bigint | number
    fee?: IntFieldUpdateOperationsInput | number
  }

  export type PoolEventCreateInput = {
    id: string
    eventType: string
    poolId: string
    coinType: string
    details: InputJsonValue
    timestamp?: Date | string
  }

  export type PoolEventUncheckedCreateInput = {
    id: string
    eventType: string
    poolId: string
    coinType: string
    details: InputJsonValue
    timestamp?: Date | string
  }

  export type PoolEventUpdateInput = {
    eventType?: StringFieldUpdateOperationsInput | string
    poolId?: StringFieldUpdateOperationsInput | string
    coinType?: StringFieldUpdateOperationsInput | string
    details?: InputJsonValue | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoolEventUncheckedUpdateInput = {
    eventType?: StringFieldUpdateOperationsInput | string
    poolId?: StringFieldUpdateOperationsInput | string
    coinType?: StringFieldUpdateOperationsInput | string
    details?: InputJsonValue | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoolEventCreateManyInput = {
    id: string
    eventType: string
    poolId: string
    coinType: string
    details: InputJsonValue
    timestamp?: Date | string
  }

  export type PoolEventUpdateManyMutationInput = {
    eventType?: StringFieldUpdateOperationsInput | string
    poolId?: StringFieldUpdateOperationsInput | string
    coinType?: StringFieldUpdateOperationsInput | string
    details?: InputJsonValue | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoolEventUncheckedUpdateManyInput = {
    eventType?: StringFieldUpdateOperationsInput | string
    poolId?: StringFieldUpdateOperationsInput | string
    coinType?: StringFieldUpdateOperationsInput | string
    details?: InputJsonValue | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CountryNullableScalarRelationFilter = {
    is?: CountryWhereInput | null
    isNot?: CountryWhereInput | null
  }

  export type AccountDetailsNullableScalarRelationFilter = {
    is?: AccountDetailsWhereInput | null
    isNot?: AccountDetailsWhereInput | null
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    address?: SortOrder
    username?: SortOrder
    language?: SortOrder
    countryname?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    address?: SortOrder
    username?: SortOrder
    language?: SortOrder
    countryname?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    address?: SortOrder
    username?: SortOrder
    language?: SortOrder
    countryname?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    accountNumber?: SortOrder
    name?: SortOrder
    bank?: SortOrder
    userId?: SortOrder
  }

  export type AccountDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    accountNumber?: SortOrder
    name?: SortOrder
    bank?: SortOrder
    userId?: SortOrder
  }

  export type AccountDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    accountNumber?: SortOrder
    name?: SortOrder
    bank?: SortOrder
    userId?: SortOrder
  }

  export type TokensNullableScalarRelationFilter = {
    is?: TokensWhereInput | null
    isNot?: TokensWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CountryCountOrderByAggregateInput = {
    currencySymbol?: SortOrder
    name?: SortOrder
    baseTokencoinType?: SortOrder
  }

  export type CountryMaxOrderByAggregateInput = {
    currencySymbol?: SortOrder
    name?: SortOrder
    baseTokencoinType?: SortOrder
  }

  export type CountryMinOrderByAggregateInput = {
    currencySymbol?: SortOrder
    name?: SortOrder
    baseTokencoinType?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CountryListRelationFilter = {
    every?: CountryWhereInput
    some?: CountryWhereInput
    none?: CountryWhereInput
  }

  export type CountryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TokensCountOrderByAggregateInput = {
    name?: SortOrder
    decimals?: SortOrder
    symbol?: SortOrder
    coinType?: SortOrder
  }

  export type TokensAvgOrderByAggregateInput = {
    decimals?: SortOrder
  }

  export type TokensMaxOrderByAggregateInput = {
    name?: SortOrder
    decimals?: SortOrder
    symbol?: SortOrder
    coinType?: SortOrder
  }

  export type TokensMinOrderByAggregateInput = {
    name?: SortOrder
    decimals?: SortOrder
    symbol?: SortOrder
    coinType?: SortOrder
  }

  export type TokensSumOrderByAggregateInput = {
    decimals?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type TransactionTransactionIdUserIdCompoundUniqueInput = {
    transactionId: string
    userId: string
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    type?: SortOrder
    interactedWith?: SortOrder
    date?: SortOrder
    status?: SortOrder
    fees?: SortOrder
    incomingAsset?: SortOrder
    incomingAmount?: SortOrder
    outgoingAsset?: SortOrder
    outgoingAmount?: SortOrder
    userId?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    fees?: SortOrder
    incomingAmount?: SortOrder
    outgoingAmount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    type?: SortOrder
    interactedWith?: SortOrder
    date?: SortOrder
    status?: SortOrder
    fees?: SortOrder
    incomingAsset?: SortOrder
    incomingAmount?: SortOrder
    outgoingAsset?: SortOrder
    outgoingAmount?: SortOrder
    userId?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    type?: SortOrder
    interactedWith?: SortOrder
    date?: SortOrder
    status?: SortOrder
    fees?: SortOrder
    incomingAsset?: SortOrder
    incomingAmount?: SortOrder
    outgoingAsset?: SortOrder
    outgoingAmount?: SortOrder
    userId?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    fees?: SortOrder
    incomingAmount?: SortOrder
    outgoingAmount?: SortOrder
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }

  export type PayfricaAgentsCountOrderByAggregateInput = {
    id?: SortOrder
    validTypes?: SortOrder
    agents?: SortOrder
  }

  export type PayfricaAgentsMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PayfricaAgentsMinOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type AgentCountOrderByAggregateInput = {
    id?: SortOrder
    addr?: SortOrder
    balance?: SortOrder
    coinType?: SortOrder
    accountNumber?: SortOrder
    bank?: SortOrder
    name?: SortOrder
    pendingWithdrawals?: SortOrder
    successfulWithdrawals?: SortOrder
    totalSuccessfulWithdrawals?: SortOrder
    totalPendingWithdrawals?: SortOrder
    totalSuccessfulWithdrawalsAmount?: SortOrder
    totalPendingWithdrawalsAmount?: SortOrder
    pendingDeposits?: SortOrder
    successfulDeposits?: SortOrder
    totalSuccessfulDeposits?: SortOrder
    totalPendingDeposits?: SortOrder
    totalSuccessfulDepositsAmount?: SortOrder
    totalPendingDepositsAmount?: SortOrder
    unsuccessfulDeposits?: SortOrder
    totalUnsuccessfulDeposits?: SortOrder
    maxWithdrawLimit?: SortOrder
    maxDepositLimit?: SortOrder
    minWithdrawLimit?: SortOrder
    minDepositLimit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgentAvgOrderByAggregateInput = {
    balance?: SortOrder
    totalSuccessfulWithdrawals?: SortOrder
    totalPendingWithdrawals?: SortOrder
    totalSuccessfulWithdrawalsAmount?: SortOrder
    totalPendingWithdrawalsAmount?: SortOrder
    totalSuccessfulDeposits?: SortOrder
    totalPendingDeposits?: SortOrder
    totalSuccessfulDepositsAmount?: SortOrder
    totalPendingDepositsAmount?: SortOrder
    totalUnsuccessfulDeposits?: SortOrder
    maxWithdrawLimit?: SortOrder
    maxDepositLimit?: SortOrder
    minWithdrawLimit?: SortOrder
    minDepositLimit?: SortOrder
  }

  export type AgentMaxOrderByAggregateInput = {
    id?: SortOrder
    addr?: SortOrder
    balance?: SortOrder
    coinType?: SortOrder
    accountNumber?: SortOrder
    bank?: SortOrder
    name?: SortOrder
    totalSuccessfulWithdrawals?: SortOrder
    totalPendingWithdrawals?: SortOrder
    totalSuccessfulWithdrawalsAmount?: SortOrder
    totalPendingWithdrawalsAmount?: SortOrder
    totalSuccessfulDeposits?: SortOrder
    totalPendingDeposits?: SortOrder
    totalSuccessfulDepositsAmount?: SortOrder
    totalPendingDepositsAmount?: SortOrder
    totalUnsuccessfulDeposits?: SortOrder
    maxWithdrawLimit?: SortOrder
    maxDepositLimit?: SortOrder
    minWithdrawLimit?: SortOrder
    minDepositLimit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgentMinOrderByAggregateInput = {
    id?: SortOrder
    addr?: SortOrder
    balance?: SortOrder
    coinType?: SortOrder
    accountNumber?: SortOrder
    bank?: SortOrder
    name?: SortOrder
    totalSuccessfulWithdrawals?: SortOrder
    totalPendingWithdrawals?: SortOrder
    totalSuccessfulWithdrawalsAmount?: SortOrder
    totalPendingWithdrawalsAmount?: SortOrder
    totalSuccessfulDeposits?: SortOrder
    totalPendingDeposits?: SortOrder
    totalSuccessfulDepositsAmount?: SortOrder
    totalPendingDepositsAmount?: SortOrder
    totalUnsuccessfulDeposits?: SortOrder
    maxWithdrawLimit?: SortOrder
    maxDepositLimit?: SortOrder
    minWithdrawLimit?: SortOrder
    minDepositLimit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgentSumOrderByAggregateInput = {
    balance?: SortOrder
    totalSuccessfulWithdrawals?: SortOrder
    totalPendingWithdrawals?: SortOrder
    totalSuccessfulWithdrawalsAmount?: SortOrder
    totalPendingWithdrawalsAmount?: SortOrder
    totalSuccessfulDeposits?: SortOrder
    totalPendingDeposits?: SortOrder
    totalSuccessfulDepositsAmount?: SortOrder
    totalPendingDepositsAmount?: SortOrder
    totalUnsuccessfulDeposits?: SortOrder
    maxWithdrawLimit?: SortOrder
    maxDepositLimit?: SortOrder
    minWithdrawLimit?: SortOrder
    minDepositLimit?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type EnumWithdrawStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WithdrawStatus | EnumWithdrawStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WithdrawStatus[] | ListEnumWithdrawStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WithdrawStatus[] | ListEnumWithdrawStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWithdrawStatusFilter<$PrismaModel> | $Enums.WithdrawStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type WithdrawRequestCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    user?: SortOrder
    agentId?: SortOrder
    coinType?: SortOrder
    status?: SortOrder
    requestTime?: SortOrder
    statusTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WithdrawRequestAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type WithdrawRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    user?: SortOrder
    agentId?: SortOrder
    coinType?: SortOrder
    status?: SortOrder
    requestTime?: SortOrder
    statusTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WithdrawRequestMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    user?: SortOrder
    agentId?: SortOrder
    coinType?: SortOrder
    status?: SortOrder
    requestTime?: SortOrder
    statusTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WithdrawRequestSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumWithdrawStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WithdrawStatus | EnumWithdrawStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WithdrawStatus[] | ListEnumWithdrawStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WithdrawStatus[] | ListEnumWithdrawStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWithdrawStatusWithAggregatesFilter<$PrismaModel> | $Enums.WithdrawStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWithdrawStatusFilter<$PrismaModel>
    _max?: NestedEnumWithdrawStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumDepositStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DepositStatus | EnumDepositStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DepositStatus[] | ListEnumDepositStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DepositStatus[] | ListEnumDepositStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDepositStatusFilter<$PrismaModel> | $Enums.DepositStatus
  }

  export type DepositRequestCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    user?: SortOrder
    agentId?: SortOrder
    successfulAgentId?: SortOrder
    coinType?: SortOrder
    comment?: SortOrder
    status?: SortOrder
    requestTime?: SortOrder
    statusTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepositRequestAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DepositRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    user?: SortOrder
    agentId?: SortOrder
    successfulAgentId?: SortOrder
    coinType?: SortOrder
    comment?: SortOrder
    status?: SortOrder
    requestTime?: SortOrder
    statusTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepositRequestMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    user?: SortOrder
    agentId?: SortOrder
    successfulAgentId?: SortOrder
    coinType?: SortOrder
    comment?: SortOrder
    status?: SortOrder
    requestTime?: SortOrder
    statusTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepositRequestSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumDepositStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DepositStatus | EnumDepositStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DepositStatus[] | ListEnumDepositStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DepositStatus[] | ListEnumDepositStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDepositStatusWithAggregatesFilter<$PrismaModel> | $Enums.DepositStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDepositStatusFilter<$PrismaModel>
    _max?: NestedEnumDepositStatusFilter<$PrismaModel>
  }

  export type CursorCountOrderByAggregateInput = {
    id?: SortOrder
    eventSeq?: SortOrder
    txDigest?: SortOrder
  }

  export type CursorMaxOrderByAggregateInput = {
    id?: SortOrder
    eventSeq?: SortOrder
    txDigest?: SortOrder
  }

  export type CursorMinOrderByAggregateInput = {
    id?: SortOrder
    eventSeq?: SortOrder
    txDigest?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type LiquidityProviderListRelationFilter = {
    every?: LiquidityProviderWhereInput
    some?: LiquidityProviderWhereInput
    none?: LiquidityProviderWhereInput
  }

  export type SwapFeeListRelationFilter = {
    every?: SwapFeeWhereInput
    some?: SwapFeeWhereInput
    none?: SwapFeeWhereInput
  }

  export type LiquidityProviderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SwapFeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PoolCountOrderByAggregateInput = {
    id?: SortOrder
    coinType?: SortOrder
    coinName?: SortOrder
    coinBalance?: SortOrder
    rewardsBalance?: SortOrder
    feeDecimal?: SortOrder
    defaultFees?: SortOrder
    coinDecimal?: SortOrder
    ratesDollar?: SortOrder
    createdAt?: SortOrder
  }

  export type PoolAvgOrderByAggregateInput = {
    coinBalance?: SortOrder
    rewardsBalance?: SortOrder
    feeDecimal?: SortOrder
    defaultFees?: SortOrder
    coinDecimal?: SortOrder
    ratesDollar?: SortOrder
  }

  export type PoolMaxOrderByAggregateInput = {
    id?: SortOrder
    coinType?: SortOrder
    coinName?: SortOrder
    coinBalance?: SortOrder
    rewardsBalance?: SortOrder
    feeDecimal?: SortOrder
    defaultFees?: SortOrder
    coinDecimal?: SortOrder
    ratesDollar?: SortOrder
    createdAt?: SortOrder
  }

  export type PoolMinOrderByAggregateInput = {
    id?: SortOrder
    coinType?: SortOrder
    coinName?: SortOrder
    coinBalance?: SortOrder
    rewardsBalance?: SortOrder
    feeDecimal?: SortOrder
    defaultFees?: SortOrder
    coinDecimal?: SortOrder
    ratesDollar?: SortOrder
    createdAt?: SortOrder
  }

  export type PoolSumOrderByAggregateInput = {
    coinBalance?: SortOrder
    rewardsBalance?: SortOrder
    feeDecimal?: SortOrder
    defaultFees?: SortOrder
    coinDecimal?: SortOrder
    ratesDollar?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type PoolScalarRelationFilter = {
    is?: PoolWhereInput
    isNot?: PoolWhereInput
  }

  export type LiquidityProviderCountOrderByAggregateInput = {
    id?: SortOrder
    poolId?: SortOrder
    provider?: SortOrder
    amount?: SortOrder
    rewards?: SortOrder
  }

  export type LiquidityProviderAvgOrderByAggregateInput = {
    amount?: SortOrder
    rewards?: SortOrder
  }

  export type LiquidityProviderMaxOrderByAggregateInput = {
    id?: SortOrder
    poolId?: SortOrder
    provider?: SortOrder
    amount?: SortOrder
    rewards?: SortOrder
  }

  export type LiquidityProviderMinOrderByAggregateInput = {
    id?: SortOrder
    poolId?: SortOrder
    provider?: SortOrder
    amount?: SortOrder
    rewards?: SortOrder
  }

  export type LiquidityProviderSumOrderByAggregateInput = {
    amount?: SortOrder
    rewards?: SortOrder
  }

  export type SwapFeeCountOrderByAggregateInput = {
    id?: SortOrder
    poolId?: SortOrder
    threshold?: SortOrder
    fee?: SortOrder
  }

  export type SwapFeeAvgOrderByAggregateInput = {
    threshold?: SortOrder
    fee?: SortOrder
  }

  export type SwapFeeMaxOrderByAggregateInput = {
    id?: SortOrder
    poolId?: SortOrder
    threshold?: SortOrder
    fee?: SortOrder
  }

  export type SwapFeeMinOrderByAggregateInput = {
    id?: SortOrder
    poolId?: SortOrder
    threshold?: SortOrder
    fee?: SortOrder
  }

  export type SwapFeeSumOrderByAggregateInput = {
    threshold?: SortOrder
    fee?: SortOrder
  }

  export type PoolEventCountOrderByAggregateInput = {
    id?: SortOrder
    eventType?: SortOrder
    poolId?: SortOrder
    coinType?: SortOrder
    details?: SortOrder
    timestamp?: SortOrder
  }

  export type PoolEventMaxOrderByAggregateInput = {
    id?: SortOrder
    eventType?: SortOrder
    poolId?: SortOrder
    coinType?: SortOrder
    timestamp?: SortOrder
  }

  export type PoolEventMinOrderByAggregateInput = {
    id?: SortOrder
    eventType?: SortOrder
    poolId?: SortOrder
    coinType?: SortOrder
    timestamp?: SortOrder
  }

  export type CountryCreateNestedOneWithoutUserInput = {
    create?: XOR<CountryCreateWithoutUserInput, CountryUncheckedCreateWithoutUserInput>
    connectOrCreate?: CountryCreateOrConnectWithoutUserInput
    connect?: CountryWhereUniqueInput
  }

  export type AccountDetailsCreateNestedOneWithoutUserInput = {
    create?: XOR<AccountDetailsCreateWithoutUserInput, AccountDetailsUncheckedCreateWithoutUserInput>
    connectOrCreate?: AccountDetailsCreateOrConnectWithoutUserInput
    connect?: AccountDetailsWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type AccountDetailsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AccountDetailsCreateWithoutUserInput, AccountDetailsUncheckedCreateWithoutUserInput>
    connectOrCreate?: AccountDetailsCreateOrConnectWithoutUserInput
    connect?: AccountDetailsWhereUniqueInput
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CountryUpdateOneWithoutUserNestedInput = {
    create?: XOR<CountryCreateWithoutUserInput, CountryUncheckedCreateWithoutUserInput>
    connectOrCreate?: CountryCreateOrConnectWithoutUserInput
    upsert?: CountryUpsertWithoutUserInput
    disconnect?: boolean
    delete?: CountryWhereInput | boolean
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutUserInput, CountryUpdateWithoutUserInput>, CountryUncheckedUpdateWithoutUserInput>
  }

  export type AccountDetailsUpdateOneWithoutUserNestedInput = {
    create?: XOR<AccountDetailsCreateWithoutUserInput, AccountDetailsUncheckedCreateWithoutUserInput>
    connectOrCreate?: AccountDetailsCreateOrConnectWithoutUserInput
    upsert?: AccountDetailsUpsertWithoutUserInput
    disconnect?: AccountDetailsWhereInput | boolean
    delete?: AccountDetailsWhereInput | boolean
    connect?: AccountDetailsWhereUniqueInput
    update?: XOR<XOR<AccountDetailsUpdateToOneWithWhereWithoutUserInput, AccountDetailsUpdateWithoutUserInput>, AccountDetailsUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type AccountDetailsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AccountDetailsCreateWithoutUserInput, AccountDetailsUncheckedCreateWithoutUserInput>
    connectOrCreate?: AccountDetailsCreateOrConnectWithoutUserInput
    upsert?: AccountDetailsUpsertWithoutUserInput
    disconnect?: AccountDetailsWhereInput | boolean
    delete?: AccountDetailsWhereInput | boolean
    connect?: AccountDetailsWhereUniqueInput
    update?: XOR<XOR<AccountDetailsUpdateToOneWithWhereWithoutUserInput, AccountDetailsUpdateWithoutUserInput>, AccountDetailsUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountDetailsInput = {
    create?: XOR<UserCreateWithoutAccountDetailsInput, UserUncheckedCreateWithoutAccountDetailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountDetailsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountDetailsNestedInput = {
    create?: XOR<UserCreateWithoutAccountDetailsInput, UserUncheckedCreateWithoutAccountDetailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountDetailsInput
    upsert?: UserUpsertWithoutAccountDetailsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountDetailsInput, UserUpdateWithoutAccountDetailsInput>, UserUncheckedUpdateWithoutAccountDetailsInput>
  }

  export type TokensCreateNestedOneWithoutCountryInput = {
    create?: XOR<TokensCreateWithoutCountryInput, TokensUncheckedCreateWithoutCountryInput>
    connectOrCreate?: TokensCreateOrConnectWithoutCountryInput
    connect?: TokensWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutCountryInput = {
    create?: XOR<UserCreateWithoutCountryInput, UserUncheckedCreateWithoutCountryInput> | UserCreateWithoutCountryInput[] | UserUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCountryInput | UserCreateOrConnectWithoutCountryInput[]
    createMany?: UserCreateManyCountryInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<UserCreateWithoutCountryInput, UserUncheckedCreateWithoutCountryInput> | UserCreateWithoutCountryInput[] | UserUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCountryInput | UserCreateOrConnectWithoutCountryInput[]
    createMany?: UserCreateManyCountryInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TokensUpdateOneWithoutCountryNestedInput = {
    create?: XOR<TokensCreateWithoutCountryInput, TokensUncheckedCreateWithoutCountryInput>
    connectOrCreate?: TokensCreateOrConnectWithoutCountryInput
    upsert?: TokensUpsertWithoutCountryInput
    disconnect?: boolean
    delete?: TokensWhereInput | boolean
    connect?: TokensWhereUniqueInput
    update?: XOR<XOR<TokensUpdateToOneWithWhereWithoutCountryInput, TokensUpdateWithoutCountryInput>, TokensUncheckedUpdateWithoutCountryInput>
  }

  export type UserUpdateManyWithoutCountryNestedInput = {
    create?: XOR<UserCreateWithoutCountryInput, UserUncheckedCreateWithoutCountryInput> | UserCreateWithoutCountryInput[] | UserUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCountryInput | UserCreateOrConnectWithoutCountryInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCountryInput | UserUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: UserCreateManyCountryInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCountryInput | UserUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCountryInput | UserUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<UserCreateWithoutCountryInput, UserUncheckedCreateWithoutCountryInput> | UserCreateWithoutCountryInput[] | UserUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCountryInput | UserCreateOrConnectWithoutCountryInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCountryInput | UserUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: UserCreateManyCountryInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCountryInput | UserUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCountryInput | UserUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CountryCreateNestedManyWithoutBaseTokenInput = {
    create?: XOR<CountryCreateWithoutBaseTokenInput, CountryUncheckedCreateWithoutBaseTokenInput> | CountryCreateWithoutBaseTokenInput[] | CountryUncheckedCreateWithoutBaseTokenInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutBaseTokenInput | CountryCreateOrConnectWithoutBaseTokenInput[]
    createMany?: CountryCreateManyBaseTokenInputEnvelope
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
  }

  export type CountryUncheckedCreateNestedManyWithoutBaseTokenInput = {
    create?: XOR<CountryCreateWithoutBaseTokenInput, CountryUncheckedCreateWithoutBaseTokenInput> | CountryCreateWithoutBaseTokenInput[] | CountryUncheckedCreateWithoutBaseTokenInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutBaseTokenInput | CountryCreateOrConnectWithoutBaseTokenInput[]
    createMany?: CountryCreateManyBaseTokenInputEnvelope
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CountryUpdateManyWithoutBaseTokenNestedInput = {
    create?: XOR<CountryCreateWithoutBaseTokenInput, CountryUncheckedCreateWithoutBaseTokenInput> | CountryCreateWithoutBaseTokenInput[] | CountryUncheckedCreateWithoutBaseTokenInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutBaseTokenInput | CountryCreateOrConnectWithoutBaseTokenInput[]
    upsert?: CountryUpsertWithWhereUniqueWithoutBaseTokenInput | CountryUpsertWithWhereUniqueWithoutBaseTokenInput[]
    createMany?: CountryCreateManyBaseTokenInputEnvelope
    set?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    disconnect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    delete?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    update?: CountryUpdateWithWhereUniqueWithoutBaseTokenInput | CountryUpdateWithWhereUniqueWithoutBaseTokenInput[]
    updateMany?: CountryUpdateManyWithWhereWithoutBaseTokenInput | CountryUpdateManyWithWhereWithoutBaseTokenInput[]
    deleteMany?: CountryScalarWhereInput | CountryScalarWhereInput[]
  }

  export type CountryUncheckedUpdateManyWithoutBaseTokenNestedInput = {
    create?: XOR<CountryCreateWithoutBaseTokenInput, CountryUncheckedCreateWithoutBaseTokenInput> | CountryCreateWithoutBaseTokenInput[] | CountryUncheckedCreateWithoutBaseTokenInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutBaseTokenInput | CountryCreateOrConnectWithoutBaseTokenInput[]
    upsert?: CountryUpsertWithWhereUniqueWithoutBaseTokenInput | CountryUpsertWithWhereUniqueWithoutBaseTokenInput[]
    createMany?: CountryCreateManyBaseTokenInputEnvelope
    set?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    disconnect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    delete?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    update?: CountryUpdateWithWhereUniqueWithoutBaseTokenInput | CountryUpdateWithWhereUniqueWithoutBaseTokenInput[]
    updateMany?: CountryUpdateManyWithWhereWithoutBaseTokenInput | CountryUpdateManyWithWhereWithoutBaseTokenInput[]
    deleteMany?: CountryScalarWhereInput | CountryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type AgentCreatependingWithdrawalsInput = {
    set: string[]
  }

  export type AgentCreatesuccessfulWithdrawalsInput = {
    set: string[]
  }

  export type AgentCreatependingDepositsInput = {
    set: string[]
  }

  export type AgentCreatesuccessfulDepositsInput = {
    set: string[]
  }

  export type AgentCreateunsuccessfulDepositsInput = {
    set: string[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type AgentUpdatependingWithdrawalsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AgentUpdatesuccessfulWithdrawalsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AgentUpdatependingDepositsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AgentUpdatesuccessfulDepositsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AgentUpdateunsuccessfulDepositsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumWithdrawStatusFieldUpdateOperationsInput = {
    set?: $Enums.WithdrawStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type EnumDepositStatusFieldUpdateOperationsInput = {
    set?: $Enums.DepositStatus
  }

  export type LiquidityProviderCreateNestedManyWithoutPoolInput = {
    create?: XOR<LiquidityProviderCreateWithoutPoolInput, LiquidityProviderUncheckedCreateWithoutPoolInput> | LiquidityProviderCreateWithoutPoolInput[] | LiquidityProviderUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: LiquidityProviderCreateOrConnectWithoutPoolInput | LiquidityProviderCreateOrConnectWithoutPoolInput[]
    createMany?: LiquidityProviderCreateManyPoolInputEnvelope
    connect?: LiquidityProviderWhereUniqueInput | LiquidityProviderWhereUniqueInput[]
  }

  export type SwapFeeCreateNestedManyWithoutPoolInput = {
    create?: XOR<SwapFeeCreateWithoutPoolInput, SwapFeeUncheckedCreateWithoutPoolInput> | SwapFeeCreateWithoutPoolInput[] | SwapFeeUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: SwapFeeCreateOrConnectWithoutPoolInput | SwapFeeCreateOrConnectWithoutPoolInput[]
    createMany?: SwapFeeCreateManyPoolInputEnvelope
    connect?: SwapFeeWhereUniqueInput | SwapFeeWhereUniqueInput[]
  }

  export type LiquidityProviderUncheckedCreateNestedManyWithoutPoolInput = {
    create?: XOR<LiquidityProviderCreateWithoutPoolInput, LiquidityProviderUncheckedCreateWithoutPoolInput> | LiquidityProviderCreateWithoutPoolInput[] | LiquidityProviderUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: LiquidityProviderCreateOrConnectWithoutPoolInput | LiquidityProviderCreateOrConnectWithoutPoolInput[]
    createMany?: LiquidityProviderCreateManyPoolInputEnvelope
    connect?: LiquidityProviderWhereUniqueInput | LiquidityProviderWhereUniqueInput[]
  }

  export type SwapFeeUncheckedCreateNestedManyWithoutPoolInput = {
    create?: XOR<SwapFeeCreateWithoutPoolInput, SwapFeeUncheckedCreateWithoutPoolInput> | SwapFeeCreateWithoutPoolInput[] | SwapFeeUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: SwapFeeCreateOrConnectWithoutPoolInput | SwapFeeCreateOrConnectWithoutPoolInput[]
    createMany?: SwapFeeCreateManyPoolInputEnvelope
    connect?: SwapFeeWhereUniqueInput | SwapFeeWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type LiquidityProviderUpdateManyWithoutPoolNestedInput = {
    create?: XOR<LiquidityProviderCreateWithoutPoolInput, LiquidityProviderUncheckedCreateWithoutPoolInput> | LiquidityProviderCreateWithoutPoolInput[] | LiquidityProviderUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: LiquidityProviderCreateOrConnectWithoutPoolInput | LiquidityProviderCreateOrConnectWithoutPoolInput[]
    upsert?: LiquidityProviderUpsertWithWhereUniqueWithoutPoolInput | LiquidityProviderUpsertWithWhereUniqueWithoutPoolInput[]
    createMany?: LiquidityProviderCreateManyPoolInputEnvelope
    set?: LiquidityProviderWhereUniqueInput | LiquidityProviderWhereUniqueInput[]
    disconnect?: LiquidityProviderWhereUniqueInput | LiquidityProviderWhereUniqueInput[]
    delete?: LiquidityProviderWhereUniqueInput | LiquidityProviderWhereUniqueInput[]
    connect?: LiquidityProviderWhereUniqueInput | LiquidityProviderWhereUniqueInput[]
    update?: LiquidityProviderUpdateWithWhereUniqueWithoutPoolInput | LiquidityProviderUpdateWithWhereUniqueWithoutPoolInput[]
    updateMany?: LiquidityProviderUpdateManyWithWhereWithoutPoolInput | LiquidityProviderUpdateManyWithWhereWithoutPoolInput[]
    deleteMany?: LiquidityProviderScalarWhereInput | LiquidityProviderScalarWhereInput[]
  }

  export type SwapFeeUpdateManyWithoutPoolNestedInput = {
    create?: XOR<SwapFeeCreateWithoutPoolInput, SwapFeeUncheckedCreateWithoutPoolInput> | SwapFeeCreateWithoutPoolInput[] | SwapFeeUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: SwapFeeCreateOrConnectWithoutPoolInput | SwapFeeCreateOrConnectWithoutPoolInput[]
    upsert?: SwapFeeUpsertWithWhereUniqueWithoutPoolInput | SwapFeeUpsertWithWhereUniqueWithoutPoolInput[]
    createMany?: SwapFeeCreateManyPoolInputEnvelope
    set?: SwapFeeWhereUniqueInput | SwapFeeWhereUniqueInput[]
    disconnect?: SwapFeeWhereUniqueInput | SwapFeeWhereUniqueInput[]
    delete?: SwapFeeWhereUniqueInput | SwapFeeWhereUniqueInput[]
    connect?: SwapFeeWhereUniqueInput | SwapFeeWhereUniqueInput[]
    update?: SwapFeeUpdateWithWhereUniqueWithoutPoolInput | SwapFeeUpdateWithWhereUniqueWithoutPoolInput[]
    updateMany?: SwapFeeUpdateManyWithWhereWithoutPoolInput | SwapFeeUpdateManyWithWhereWithoutPoolInput[]
    deleteMany?: SwapFeeScalarWhereInput | SwapFeeScalarWhereInput[]
  }

  export type LiquidityProviderUncheckedUpdateManyWithoutPoolNestedInput = {
    create?: XOR<LiquidityProviderCreateWithoutPoolInput, LiquidityProviderUncheckedCreateWithoutPoolInput> | LiquidityProviderCreateWithoutPoolInput[] | LiquidityProviderUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: LiquidityProviderCreateOrConnectWithoutPoolInput | LiquidityProviderCreateOrConnectWithoutPoolInput[]
    upsert?: LiquidityProviderUpsertWithWhereUniqueWithoutPoolInput | LiquidityProviderUpsertWithWhereUniqueWithoutPoolInput[]
    createMany?: LiquidityProviderCreateManyPoolInputEnvelope
    set?: LiquidityProviderWhereUniqueInput | LiquidityProviderWhereUniqueInput[]
    disconnect?: LiquidityProviderWhereUniqueInput | LiquidityProviderWhereUniqueInput[]
    delete?: LiquidityProviderWhereUniqueInput | LiquidityProviderWhereUniqueInput[]
    connect?: LiquidityProviderWhereUniqueInput | LiquidityProviderWhereUniqueInput[]
    update?: LiquidityProviderUpdateWithWhereUniqueWithoutPoolInput | LiquidityProviderUpdateWithWhereUniqueWithoutPoolInput[]
    updateMany?: LiquidityProviderUpdateManyWithWhereWithoutPoolInput | LiquidityProviderUpdateManyWithWhereWithoutPoolInput[]
    deleteMany?: LiquidityProviderScalarWhereInput | LiquidityProviderScalarWhereInput[]
  }

  export type SwapFeeUncheckedUpdateManyWithoutPoolNestedInput = {
    create?: XOR<SwapFeeCreateWithoutPoolInput, SwapFeeUncheckedCreateWithoutPoolInput> | SwapFeeCreateWithoutPoolInput[] | SwapFeeUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: SwapFeeCreateOrConnectWithoutPoolInput | SwapFeeCreateOrConnectWithoutPoolInput[]
    upsert?: SwapFeeUpsertWithWhereUniqueWithoutPoolInput | SwapFeeUpsertWithWhereUniqueWithoutPoolInput[]
    createMany?: SwapFeeCreateManyPoolInputEnvelope
    set?: SwapFeeWhereUniqueInput | SwapFeeWhereUniqueInput[]
    disconnect?: SwapFeeWhereUniqueInput | SwapFeeWhereUniqueInput[]
    delete?: SwapFeeWhereUniqueInput | SwapFeeWhereUniqueInput[]
    connect?: SwapFeeWhereUniqueInput | SwapFeeWhereUniqueInput[]
    update?: SwapFeeUpdateWithWhereUniqueWithoutPoolInput | SwapFeeUpdateWithWhereUniqueWithoutPoolInput[]
    updateMany?: SwapFeeUpdateManyWithWhereWithoutPoolInput | SwapFeeUpdateManyWithWhereWithoutPoolInput[]
    deleteMany?: SwapFeeScalarWhereInput | SwapFeeScalarWhereInput[]
  }

  export type PoolCreateNestedOneWithoutLiquidityProvidersInput = {
    create?: XOR<PoolCreateWithoutLiquidityProvidersInput, PoolUncheckedCreateWithoutLiquidityProvidersInput>
    connectOrCreate?: PoolCreateOrConnectWithoutLiquidityProvidersInput
    connect?: PoolWhereUniqueInput
  }

  export type PoolUpdateOneRequiredWithoutLiquidityProvidersNestedInput = {
    create?: XOR<PoolCreateWithoutLiquidityProvidersInput, PoolUncheckedCreateWithoutLiquidityProvidersInput>
    connectOrCreate?: PoolCreateOrConnectWithoutLiquidityProvidersInput
    upsert?: PoolUpsertWithoutLiquidityProvidersInput
    connect?: PoolWhereUniqueInput
    update?: XOR<XOR<PoolUpdateToOneWithWhereWithoutLiquidityProvidersInput, PoolUpdateWithoutLiquidityProvidersInput>, PoolUncheckedUpdateWithoutLiquidityProvidersInput>
  }

  export type PoolCreateNestedOneWithoutSwapFeesInput = {
    create?: XOR<PoolCreateWithoutSwapFeesInput, PoolUncheckedCreateWithoutSwapFeesInput>
    connectOrCreate?: PoolCreateOrConnectWithoutSwapFeesInput
    connect?: PoolWhereUniqueInput
  }

  export type PoolUpdateOneRequiredWithoutSwapFeesNestedInput = {
    create?: XOR<PoolCreateWithoutSwapFeesInput, PoolUncheckedCreateWithoutSwapFeesInput>
    connectOrCreate?: PoolCreateOrConnectWithoutSwapFeesInput
    upsert?: PoolUpsertWithoutSwapFeesInput
    connect?: PoolWhereUniqueInput
    update?: XOR<XOR<PoolUpdateToOneWithWhereWithoutSwapFeesInput, PoolUpdateWithoutSwapFeesInput>, PoolUncheckedUpdateWithoutSwapFeesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedEnumWithdrawStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WithdrawStatus | EnumWithdrawStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WithdrawStatus[] | ListEnumWithdrawStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WithdrawStatus[] | ListEnumWithdrawStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWithdrawStatusFilter<$PrismaModel> | $Enums.WithdrawStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedEnumWithdrawStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WithdrawStatus | EnumWithdrawStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WithdrawStatus[] | ListEnumWithdrawStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WithdrawStatus[] | ListEnumWithdrawStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWithdrawStatusWithAggregatesFilter<$PrismaModel> | $Enums.WithdrawStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWithdrawStatusFilter<$PrismaModel>
    _max?: NestedEnumWithdrawStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedEnumDepositStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DepositStatus | EnumDepositStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DepositStatus[] | ListEnumDepositStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DepositStatus[] | ListEnumDepositStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDepositStatusFilter<$PrismaModel> | $Enums.DepositStatus
  }

  export type NestedEnumDepositStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DepositStatus | EnumDepositStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DepositStatus[] | ListEnumDepositStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DepositStatus[] | ListEnumDepositStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDepositStatusWithAggregatesFilter<$PrismaModel> | $Enums.DepositStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDepositStatusFilter<$PrismaModel>
    _max?: NestedEnumDepositStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type CountryCreateWithoutUserInput = {
    currencySymbol: string
    name: string
    baseToken?: TokensCreateNestedOneWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutUserInput = {
    currencySymbol: string
    name: string
    baseTokencoinType: string
  }

  export type CountryCreateOrConnectWithoutUserInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutUserInput, CountryUncheckedCreateWithoutUserInput>
  }

  export type AccountDetailsCreateWithoutUserInput = {
    id?: string
    accountNumber: string
    name: string
    bank: string
  }

  export type AccountDetailsUncheckedCreateWithoutUserInput = {
    id?: string
    accountNumber: string
    name: string
    bank: string
  }

  export type AccountDetailsCreateOrConnectWithoutUserInput = {
    where: AccountDetailsWhereUniqueInput
    create: XOR<AccountDetailsCreateWithoutUserInput, AccountDetailsUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateWithoutUserInput = {
    id?: string
    transactionId: string
    type: $Enums.TransactionType
    interactedWith?: string | null
    date?: Date | string
    status: $Enums.TransactionStatus
    fees: number
    incomingAsset?: string | null
    incomingAmount?: number | null
    outgoingAsset?: string | null
    outgoingAmount?: number | null
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: string
    transactionId: string
    type: $Enums.TransactionType
    interactedWith?: string | null
    date?: Date | string
    status: $Enums.TransactionStatus
    fees: number
    incomingAsset?: string | null
    incomingAmount?: number | null
    outgoingAsset?: string | null
    outgoingAmount?: number | null
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
  }

  export type CountryUpsertWithoutUserInput = {
    update: XOR<CountryUpdateWithoutUserInput, CountryUncheckedUpdateWithoutUserInput>
    create: XOR<CountryCreateWithoutUserInput, CountryUncheckedCreateWithoutUserInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutUserInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutUserInput, CountryUncheckedUpdateWithoutUserInput>
  }

  export type CountryUpdateWithoutUserInput = {
    currencySymbol?: StringFieldUpdateOperationsInput | string
    baseToken?: TokensUpdateOneWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutUserInput = {
    currencySymbol?: StringFieldUpdateOperationsInput | string
    baseTokencoinType?: StringFieldUpdateOperationsInput | string
  }

  export type AccountDetailsUpsertWithoutUserInput = {
    update: XOR<AccountDetailsUpdateWithoutUserInput, AccountDetailsUncheckedUpdateWithoutUserInput>
    create: XOR<AccountDetailsCreateWithoutUserInput, AccountDetailsUncheckedCreateWithoutUserInput>
    where?: AccountDetailsWhereInput
  }

  export type AccountDetailsUpdateToOneWithWhereWithoutUserInput = {
    where?: AccountDetailsWhereInput
    data: XOR<AccountDetailsUpdateWithoutUserInput, AccountDetailsUncheckedUpdateWithoutUserInput>
  }

  export type AccountDetailsUpdateWithoutUserInput = {
    accountNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bank?: StringFieldUpdateOperationsInput | string
  }

  export type AccountDetailsUncheckedUpdateWithoutUserInput = {
    accountNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bank?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    transactionId?: StringFilter<"Transaction"> | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    interactedWith?: StringNullableFilter<"Transaction"> | string | null
    date?: DateTimeFilter<"Transaction"> | Date | string
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    fees?: FloatFilter<"Transaction"> | number
    incomingAsset?: StringNullableFilter<"Transaction"> | string | null
    incomingAmount?: FloatNullableFilter<"Transaction"> | number | null
    outgoingAsset?: StringNullableFilter<"Transaction"> | string | null
    outgoingAmount?: FloatNullableFilter<"Transaction"> | number | null
    userId?: StringFilter<"Transaction"> | string
  }

  export type UserCreateWithoutAccountDetailsInput = {
    address: string
    username?: string | null
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    country?: CountryCreateNestedOneWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountDetailsInput = {
    address: string
    username?: string | null
    language?: string
    countryname?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountDetailsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountDetailsInput, UserUncheckedCreateWithoutAccountDetailsInput>
  }

  export type UserUpsertWithoutAccountDetailsInput = {
    update: XOR<UserUpdateWithoutAccountDetailsInput, UserUncheckedUpdateWithoutAccountDetailsInput>
    create: XOR<UserCreateWithoutAccountDetailsInput, UserUncheckedCreateWithoutAccountDetailsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountDetailsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountDetailsInput, UserUncheckedUpdateWithoutAccountDetailsInput>
  }

  export type UserUpdateWithoutAccountDetailsInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountDetailsInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    countryname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TokensCreateWithoutCountryInput = {
    name: string
    decimals: number
    symbol: string
    coinType: string
  }

  export type TokensUncheckedCreateWithoutCountryInput = {
    name: string
    decimals: number
    symbol: string
    coinType: string
  }

  export type TokensCreateOrConnectWithoutCountryInput = {
    where: TokensWhereUniqueInput
    create: XOR<TokensCreateWithoutCountryInput, TokensUncheckedCreateWithoutCountryInput>
  }

  export type UserCreateWithoutCountryInput = {
    address: string
    username?: string | null
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accountDetails?: AccountDetailsCreateNestedOneWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCountryInput = {
    address: string
    username?: string | null
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accountDetails?: AccountDetailsUncheckedCreateNestedOneWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCountryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCountryInput, UserUncheckedCreateWithoutCountryInput>
  }

  export type UserCreateManyCountryInputEnvelope = {
    data: UserCreateManyCountryInput | UserCreateManyCountryInput[]
  }

  export type TokensUpsertWithoutCountryInput = {
    update: XOR<TokensUpdateWithoutCountryInput, TokensUncheckedUpdateWithoutCountryInput>
    create: XOR<TokensCreateWithoutCountryInput, TokensUncheckedCreateWithoutCountryInput>
    where?: TokensWhereInput
  }

  export type TokensUpdateToOneWithWhereWithoutCountryInput = {
    where?: TokensWhereInput
    data: XOR<TokensUpdateWithoutCountryInput, TokensUncheckedUpdateWithoutCountryInput>
  }

  export type TokensUpdateWithoutCountryInput = {
    name?: StringFieldUpdateOperationsInput | string
    decimals?: IntFieldUpdateOperationsInput | number
    symbol?: StringFieldUpdateOperationsInput | string
  }

  export type TokensUncheckedUpdateWithoutCountryInput = {
    name?: StringFieldUpdateOperationsInput | string
    decimals?: IntFieldUpdateOperationsInput | number
    symbol?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithWhereUniqueWithoutCountryInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCountryInput, UserUncheckedUpdateWithoutCountryInput>
    create: XOR<UserCreateWithoutCountryInput, UserUncheckedCreateWithoutCountryInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCountryInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCountryInput, UserUncheckedUpdateWithoutCountryInput>
  }

  export type UserUpdateManyWithWhereWithoutCountryInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCountryInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    address?: StringFilter<"User"> | string
    username?: StringNullableFilter<"User"> | string | null
    language?: StringFilter<"User"> | string
    countryname?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type CountryCreateWithoutBaseTokenInput = {
    currencySymbol: string
    name: string
    User?: UserCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutBaseTokenInput = {
    currencySymbol: string
    name: string
    User?: UserUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryCreateOrConnectWithoutBaseTokenInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutBaseTokenInput, CountryUncheckedCreateWithoutBaseTokenInput>
  }

  export type CountryCreateManyBaseTokenInputEnvelope = {
    data: CountryCreateManyBaseTokenInput | CountryCreateManyBaseTokenInput[]
  }

  export type CountryUpsertWithWhereUniqueWithoutBaseTokenInput = {
    where: CountryWhereUniqueInput
    update: XOR<CountryUpdateWithoutBaseTokenInput, CountryUncheckedUpdateWithoutBaseTokenInput>
    create: XOR<CountryCreateWithoutBaseTokenInput, CountryUncheckedCreateWithoutBaseTokenInput>
  }

  export type CountryUpdateWithWhereUniqueWithoutBaseTokenInput = {
    where: CountryWhereUniqueInput
    data: XOR<CountryUpdateWithoutBaseTokenInput, CountryUncheckedUpdateWithoutBaseTokenInput>
  }

  export type CountryUpdateManyWithWhereWithoutBaseTokenInput = {
    where: CountryScalarWhereInput
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyWithoutBaseTokenInput>
  }

  export type CountryScalarWhereInput = {
    AND?: CountryScalarWhereInput | CountryScalarWhereInput[]
    OR?: CountryScalarWhereInput[]
    NOT?: CountryScalarWhereInput | CountryScalarWhereInput[]
    currencySymbol?: StringFilter<"Country"> | string
    name?: StringFilter<"Country"> | string
    baseTokencoinType?: StringFilter<"Country"> | string
  }

  export type UserCreateWithoutTransactionsInput = {
    address: string
    username?: string | null
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    country?: CountryCreateNestedOneWithoutUserInput
    accountDetails?: AccountDetailsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    address: string
    username?: string | null
    language?: string
    countryname?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountDetails?: AccountDetailsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneWithoutUserNestedInput
    accountDetails?: AccountDetailsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    countryname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountDetails?: AccountDetailsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type LiquidityProviderCreateWithoutPoolInput = {
    id: string
    provider: string
    amount: bigint | number
    rewards: bigint | number
  }

  export type LiquidityProviderUncheckedCreateWithoutPoolInput = {
    id: string
    provider: string
    amount: bigint | number
    rewards: bigint | number
  }

  export type LiquidityProviderCreateOrConnectWithoutPoolInput = {
    where: LiquidityProviderWhereUniqueInput
    create: XOR<LiquidityProviderCreateWithoutPoolInput, LiquidityProviderUncheckedCreateWithoutPoolInput>
  }

  export type LiquidityProviderCreateManyPoolInputEnvelope = {
    data: LiquidityProviderCreateManyPoolInput | LiquidityProviderCreateManyPoolInput[]
  }

  export type SwapFeeCreateWithoutPoolInput = {
    id: string
    threshold: bigint | number
    fee: number
  }

  export type SwapFeeUncheckedCreateWithoutPoolInput = {
    id: string
    threshold: bigint | number
    fee: number
  }

  export type SwapFeeCreateOrConnectWithoutPoolInput = {
    where: SwapFeeWhereUniqueInput
    create: XOR<SwapFeeCreateWithoutPoolInput, SwapFeeUncheckedCreateWithoutPoolInput>
  }

  export type SwapFeeCreateManyPoolInputEnvelope = {
    data: SwapFeeCreateManyPoolInput | SwapFeeCreateManyPoolInput[]
  }

  export type LiquidityProviderUpsertWithWhereUniqueWithoutPoolInput = {
    where: LiquidityProviderWhereUniqueInput
    update: XOR<LiquidityProviderUpdateWithoutPoolInput, LiquidityProviderUncheckedUpdateWithoutPoolInput>
    create: XOR<LiquidityProviderCreateWithoutPoolInput, LiquidityProviderUncheckedCreateWithoutPoolInput>
  }

  export type LiquidityProviderUpdateWithWhereUniqueWithoutPoolInput = {
    where: LiquidityProviderWhereUniqueInput
    data: XOR<LiquidityProviderUpdateWithoutPoolInput, LiquidityProviderUncheckedUpdateWithoutPoolInput>
  }

  export type LiquidityProviderUpdateManyWithWhereWithoutPoolInput = {
    where: LiquidityProviderScalarWhereInput
    data: XOR<LiquidityProviderUpdateManyMutationInput, LiquidityProviderUncheckedUpdateManyWithoutPoolInput>
  }

  export type LiquidityProviderScalarWhereInput = {
    AND?: LiquidityProviderScalarWhereInput | LiquidityProviderScalarWhereInput[]
    OR?: LiquidityProviderScalarWhereInput[]
    NOT?: LiquidityProviderScalarWhereInput | LiquidityProviderScalarWhereInput[]
    id?: StringFilter<"LiquidityProvider"> | string
    poolId?: StringFilter<"LiquidityProvider"> | string
    provider?: StringFilter<"LiquidityProvider"> | string
    amount?: BigIntFilter<"LiquidityProvider"> | bigint | number
    rewards?: BigIntFilter<"LiquidityProvider"> | bigint | number
  }

  export type SwapFeeUpsertWithWhereUniqueWithoutPoolInput = {
    where: SwapFeeWhereUniqueInput
    update: XOR<SwapFeeUpdateWithoutPoolInput, SwapFeeUncheckedUpdateWithoutPoolInput>
    create: XOR<SwapFeeCreateWithoutPoolInput, SwapFeeUncheckedCreateWithoutPoolInput>
  }

  export type SwapFeeUpdateWithWhereUniqueWithoutPoolInput = {
    where: SwapFeeWhereUniqueInput
    data: XOR<SwapFeeUpdateWithoutPoolInput, SwapFeeUncheckedUpdateWithoutPoolInput>
  }

  export type SwapFeeUpdateManyWithWhereWithoutPoolInput = {
    where: SwapFeeScalarWhereInput
    data: XOR<SwapFeeUpdateManyMutationInput, SwapFeeUncheckedUpdateManyWithoutPoolInput>
  }

  export type SwapFeeScalarWhereInput = {
    AND?: SwapFeeScalarWhereInput | SwapFeeScalarWhereInput[]
    OR?: SwapFeeScalarWhereInput[]
    NOT?: SwapFeeScalarWhereInput | SwapFeeScalarWhereInput[]
    id?: StringFilter<"SwapFee"> | string
    poolId?: StringFilter<"SwapFee"> | string
    threshold?: BigIntFilter<"SwapFee"> | bigint | number
    fee?: IntFilter<"SwapFee"> | number
  }

  export type PoolCreateWithoutLiquidityProvidersInput = {
    id: string
    coinType: string
    coinName: string
    coinBalance: bigint | number
    rewardsBalance: bigint | number
    feeDecimal: number
    defaultFees?: number | null
    coinDecimal: number
    ratesDollar: number
    createdAt?: Date | string
    swapFees?: SwapFeeCreateNestedManyWithoutPoolInput
  }

  export type PoolUncheckedCreateWithoutLiquidityProvidersInput = {
    id: string
    coinType: string
    coinName: string
    coinBalance: bigint | number
    rewardsBalance: bigint | number
    feeDecimal: number
    defaultFees?: number | null
    coinDecimal: number
    ratesDollar: number
    createdAt?: Date | string
    swapFees?: SwapFeeUncheckedCreateNestedManyWithoutPoolInput
  }

  export type PoolCreateOrConnectWithoutLiquidityProvidersInput = {
    where: PoolWhereUniqueInput
    create: XOR<PoolCreateWithoutLiquidityProvidersInput, PoolUncheckedCreateWithoutLiquidityProvidersInput>
  }

  export type PoolUpsertWithoutLiquidityProvidersInput = {
    update: XOR<PoolUpdateWithoutLiquidityProvidersInput, PoolUncheckedUpdateWithoutLiquidityProvidersInput>
    create: XOR<PoolCreateWithoutLiquidityProvidersInput, PoolUncheckedCreateWithoutLiquidityProvidersInput>
    where?: PoolWhereInput
  }

  export type PoolUpdateToOneWithWhereWithoutLiquidityProvidersInput = {
    where?: PoolWhereInput
    data: XOR<PoolUpdateWithoutLiquidityProvidersInput, PoolUncheckedUpdateWithoutLiquidityProvidersInput>
  }

  export type PoolUpdateWithoutLiquidityProvidersInput = {
    coinType?: StringFieldUpdateOperationsInput | string
    coinName?: StringFieldUpdateOperationsInput | string
    coinBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    rewardsBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    feeDecimal?: IntFieldUpdateOperationsInput | number
    defaultFees?: NullableIntFieldUpdateOperationsInput | number | null
    coinDecimal?: IntFieldUpdateOperationsInput | number
    ratesDollar?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    swapFees?: SwapFeeUpdateManyWithoutPoolNestedInput
  }

  export type PoolUncheckedUpdateWithoutLiquidityProvidersInput = {
    coinType?: StringFieldUpdateOperationsInput | string
    coinName?: StringFieldUpdateOperationsInput | string
    coinBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    rewardsBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    feeDecimal?: IntFieldUpdateOperationsInput | number
    defaultFees?: NullableIntFieldUpdateOperationsInput | number | null
    coinDecimal?: IntFieldUpdateOperationsInput | number
    ratesDollar?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    swapFees?: SwapFeeUncheckedUpdateManyWithoutPoolNestedInput
  }

  export type PoolCreateWithoutSwapFeesInput = {
    id: string
    coinType: string
    coinName: string
    coinBalance: bigint | number
    rewardsBalance: bigint | number
    feeDecimal: number
    defaultFees?: number | null
    coinDecimal: number
    ratesDollar: number
    createdAt?: Date | string
    liquidityProviders?: LiquidityProviderCreateNestedManyWithoutPoolInput
  }

  export type PoolUncheckedCreateWithoutSwapFeesInput = {
    id: string
    coinType: string
    coinName: string
    coinBalance: bigint | number
    rewardsBalance: bigint | number
    feeDecimal: number
    defaultFees?: number | null
    coinDecimal: number
    ratesDollar: number
    createdAt?: Date | string
    liquidityProviders?: LiquidityProviderUncheckedCreateNestedManyWithoutPoolInput
  }

  export type PoolCreateOrConnectWithoutSwapFeesInput = {
    where: PoolWhereUniqueInput
    create: XOR<PoolCreateWithoutSwapFeesInput, PoolUncheckedCreateWithoutSwapFeesInput>
  }

  export type PoolUpsertWithoutSwapFeesInput = {
    update: XOR<PoolUpdateWithoutSwapFeesInput, PoolUncheckedUpdateWithoutSwapFeesInput>
    create: XOR<PoolCreateWithoutSwapFeesInput, PoolUncheckedCreateWithoutSwapFeesInput>
    where?: PoolWhereInput
  }

  export type PoolUpdateToOneWithWhereWithoutSwapFeesInput = {
    where?: PoolWhereInput
    data: XOR<PoolUpdateWithoutSwapFeesInput, PoolUncheckedUpdateWithoutSwapFeesInput>
  }

  export type PoolUpdateWithoutSwapFeesInput = {
    coinType?: StringFieldUpdateOperationsInput | string
    coinName?: StringFieldUpdateOperationsInput | string
    coinBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    rewardsBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    feeDecimal?: IntFieldUpdateOperationsInput | number
    defaultFees?: NullableIntFieldUpdateOperationsInput | number | null
    coinDecimal?: IntFieldUpdateOperationsInput | number
    ratesDollar?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liquidityProviders?: LiquidityProviderUpdateManyWithoutPoolNestedInput
  }

  export type PoolUncheckedUpdateWithoutSwapFeesInput = {
    coinType?: StringFieldUpdateOperationsInput | string
    coinName?: StringFieldUpdateOperationsInput | string
    coinBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    rewardsBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    feeDecimal?: IntFieldUpdateOperationsInput | number
    defaultFees?: NullableIntFieldUpdateOperationsInput | number | null
    coinDecimal?: IntFieldUpdateOperationsInput | number
    ratesDollar?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liquidityProviders?: LiquidityProviderUncheckedUpdateManyWithoutPoolNestedInput
  }

  export type TransactionCreateManyUserInput = {
    id?: string
    transactionId: string
    type: $Enums.TransactionType
    interactedWith?: string | null
    date?: Date | string
    status: $Enums.TransactionStatus
    fees: number
    incomingAsset?: string | null
    incomingAmount?: number | null
    outgoingAsset?: string | null
    outgoingAmount?: number | null
  }

  export type TransactionUpdateWithoutUserInput = {
    transactionId?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    interactedWith?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    fees?: FloatFieldUpdateOperationsInput | number
    incomingAsset?: NullableStringFieldUpdateOperationsInput | string | null
    incomingAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    outgoingAsset?: NullableStringFieldUpdateOperationsInput | string | null
    outgoingAmount?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    transactionId?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    interactedWith?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    fees?: FloatFieldUpdateOperationsInput | number
    incomingAsset?: NullableStringFieldUpdateOperationsInput | string | null
    incomingAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    outgoingAsset?: NullableStringFieldUpdateOperationsInput | string | null
    outgoingAmount?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    transactionId?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    interactedWith?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    fees?: FloatFieldUpdateOperationsInput | number
    incomingAsset?: NullableStringFieldUpdateOperationsInput | string | null
    incomingAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    outgoingAsset?: NullableStringFieldUpdateOperationsInput | string | null
    outgoingAmount?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type UserCreateManyCountryInput = {
    address: string
    username?: string | null
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutCountryInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountDetails?: AccountDetailsUpdateOneWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCountryInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountDetails?: AccountDetailsUncheckedUpdateOneWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCountryInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountryCreateManyBaseTokenInput = {
    currencySymbol: string
    name: string
  }

  export type CountryUpdateWithoutBaseTokenInput = {
    currencySymbol?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutBaseTokenInput = {
    currencySymbol?: StringFieldUpdateOperationsInput | string
    User?: UserUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateManyWithoutBaseTokenInput = {
    currencySymbol?: StringFieldUpdateOperationsInput | string
  }

  export type LiquidityProviderCreateManyPoolInput = {
    id: string
    provider: string
    amount: bigint | number
    rewards: bigint | number
  }

  export type SwapFeeCreateManyPoolInput = {
    id: string
    threshold: bigint | number
    fee: number
  }

  export type LiquidityProviderUpdateWithoutPoolInput = {
    provider?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    rewards?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type LiquidityProviderUncheckedUpdateWithoutPoolInput = {
    provider?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    rewards?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type LiquidityProviderUncheckedUpdateManyWithoutPoolInput = {
    provider?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    rewards?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type SwapFeeUpdateWithoutPoolInput = {
    threshold?: BigIntFieldUpdateOperationsInput | bigint | number
    fee?: IntFieldUpdateOperationsInput | number
  }

  export type SwapFeeUncheckedUpdateWithoutPoolInput = {
    threshold?: BigIntFieldUpdateOperationsInput | bigint | number
    fee?: IntFieldUpdateOperationsInput | number
  }

  export type SwapFeeUncheckedUpdateManyWithoutPoolInput = {
    threshold?: BigIntFieldUpdateOperationsInput | bigint | number
    fee?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}

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
 * Model MedicalProblem
 * 
 */
export type MedicalProblem = $Result.DefaultSelection<Prisma.$MedicalProblemPayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>
/**
 * Model DiseasePrediction
 * 
 */
export type DiseasePrediction = $Result.DefaultSelection<Prisma.$DiseasePredictionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more MedicalProblems
 * const medicalProblems = await prisma.medicalProblem.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more MedicalProblems
   * const medicalProblems = await prisma.medicalProblem.findMany()
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
   * `prisma.medicalProblem`: Exposes CRUD operations for the **MedicalProblem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicalProblems
    * const medicalProblems = await prisma.medicalProblem.findMany()
    * ```
    */
  get medicalProblem(): Prisma.MedicalProblemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diseasePrediction`: Exposes CRUD operations for the **DiseasePrediction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiseasePredictions
    * const diseasePredictions = await prisma.diseasePrediction.findMany()
    * ```
    */
  get diseasePrediction(): Prisma.DiseasePredictionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    MedicalProblem: 'MedicalProblem',
    ChatMessage: 'ChatMessage',
    DiseasePrediction: 'DiseasePrediction'
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
      modelProps: "medicalProblem" | "chatMessage" | "diseasePrediction"
      txIsolationLevel: never
    }
    model: {
      MedicalProblem: {
        payload: Prisma.$MedicalProblemPayload<ExtArgs>
        fields: Prisma.MedicalProblemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicalProblemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalProblemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicalProblemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalProblemPayload>
          }
          findFirst: {
            args: Prisma.MedicalProblemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalProblemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicalProblemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalProblemPayload>
          }
          findMany: {
            args: Prisma.MedicalProblemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalProblemPayload>[]
          }
          create: {
            args: Prisma.MedicalProblemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalProblemPayload>
          }
          createMany: {
            args: Prisma.MedicalProblemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MedicalProblemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalProblemPayload>
          }
          update: {
            args: Prisma.MedicalProblemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalProblemPayload>
          }
          deleteMany: {
            args: Prisma.MedicalProblemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicalProblemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MedicalProblemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalProblemPayload>
          }
          aggregate: {
            args: Prisma.MedicalProblemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicalProblem>
          }
          groupBy: {
            args: Prisma.MedicalProblemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicalProblemGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MedicalProblemFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MedicalProblemAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MedicalProblemCountArgs<ExtArgs>
            result: $Utils.Optional<MedicalProblemCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ChatMessageFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ChatMessageAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
      DiseasePrediction: {
        payload: Prisma.$DiseasePredictionPayload<ExtArgs>
        fields: Prisma.DiseasePredictionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiseasePredictionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePredictionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiseasePredictionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePredictionPayload>
          }
          findFirst: {
            args: Prisma.DiseasePredictionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePredictionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiseasePredictionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePredictionPayload>
          }
          findMany: {
            args: Prisma.DiseasePredictionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePredictionPayload>[]
          }
          create: {
            args: Prisma.DiseasePredictionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePredictionPayload>
          }
          createMany: {
            args: Prisma.DiseasePredictionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DiseasePredictionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePredictionPayload>
          }
          update: {
            args: Prisma.DiseasePredictionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePredictionPayload>
          }
          deleteMany: {
            args: Prisma.DiseasePredictionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiseasePredictionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DiseasePredictionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePredictionPayload>
          }
          aggregate: {
            args: Prisma.DiseasePredictionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiseasePrediction>
          }
          groupBy: {
            args: Prisma.DiseasePredictionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiseasePredictionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DiseasePredictionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DiseasePredictionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DiseasePredictionCountArgs<ExtArgs>
            result: $Utils.Optional<DiseasePredictionCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    medicalProblem?: MedicalProblemOmit
    chatMessage?: ChatMessageOmit
    diseasePrediction?: DiseasePredictionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Models
   */

  /**
   * Model MedicalProblem
   */

  export type AggregateMedicalProblem = {
    _count: MedicalProblemCountAggregateOutputType | null
    _min: MedicalProblemMinAggregateOutputType | null
    _max: MedicalProblemMaxAggregateOutputType | null
  }

  export type MedicalProblemMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    diagnosis: string | null
    severity: string | null
    date: Date | null
    resolved: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicalProblemMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    diagnosis: string | null
    severity: string | null
    date: Date | null
    resolved: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicalProblemCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    description: number
    symptoms: number
    diagnosis: number
    severity: number
    date: number
    resolved: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MedicalProblemMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    diagnosis?: true
    severity?: true
    date?: true
    resolved?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicalProblemMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    diagnosis?: true
    severity?: true
    date?: true
    resolved?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicalProblemCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    symptoms?: true
    diagnosis?: true
    severity?: true
    date?: true
    resolved?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MedicalProblemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalProblem to aggregate.
     */
    where?: MedicalProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalProblems to fetch.
     */
    orderBy?: MedicalProblemOrderByWithRelationInput | MedicalProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicalProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalProblems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalProblems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicalProblems
    **/
    _count?: true | MedicalProblemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicalProblemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicalProblemMaxAggregateInputType
  }

  export type GetMedicalProblemAggregateType<T extends MedicalProblemAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicalProblem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicalProblem[P]>
      : GetScalarType<T[P], AggregateMedicalProblem[P]>
  }




  export type MedicalProblemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalProblemWhereInput
    orderBy?: MedicalProblemOrderByWithAggregationInput | MedicalProblemOrderByWithAggregationInput[]
    by: MedicalProblemScalarFieldEnum[] | MedicalProblemScalarFieldEnum
    having?: MedicalProblemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicalProblemCountAggregateInputType | true
    _min?: MedicalProblemMinAggregateInputType
    _max?: MedicalProblemMaxAggregateInputType
  }

  export type MedicalProblemGroupByOutputType = {
    id: string
    userId: string
    title: string
    description: string
    symptoms: string[]
    diagnosis: string | null
    severity: string | null
    date: Date
    resolved: boolean
    createdAt: Date
    updatedAt: Date
    _count: MedicalProblemCountAggregateOutputType | null
    _min: MedicalProblemMinAggregateOutputType | null
    _max: MedicalProblemMaxAggregateOutputType | null
  }

  type GetMedicalProblemGroupByPayload<T extends MedicalProblemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicalProblemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicalProblemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicalProblemGroupByOutputType[P]>
            : GetScalarType<T[P], MedicalProblemGroupByOutputType[P]>
        }
      >
    >


  export type MedicalProblemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    symptoms?: boolean
    diagnosis?: boolean
    severity?: boolean
    date?: boolean
    resolved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["medicalProblem"]>



  export type MedicalProblemSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    symptoms?: boolean
    diagnosis?: boolean
    severity?: boolean
    date?: boolean
    resolved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MedicalProblemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "description" | "symptoms" | "diagnosis" | "severity" | "date" | "resolved" | "createdAt" | "updatedAt", ExtArgs["result"]["medicalProblem"]>

  export type $MedicalProblemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicalProblem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      description: string
      symptoms: string[]
      diagnosis: string | null
      severity: string | null
      date: Date
      resolved: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["medicalProblem"]>
    composites: {}
  }

  type MedicalProblemGetPayload<S extends boolean | null | undefined | MedicalProblemDefaultArgs> = $Result.GetResult<Prisma.$MedicalProblemPayload, S>

  type MedicalProblemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicalProblemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicalProblemCountAggregateInputType | true
    }

  export interface MedicalProblemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicalProblem'], meta: { name: 'MedicalProblem' } }
    /**
     * Find zero or one MedicalProblem that matches the filter.
     * @param {MedicalProblemFindUniqueArgs} args - Arguments to find a MedicalProblem
     * @example
     * // Get one MedicalProblem
     * const medicalProblem = await prisma.medicalProblem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicalProblemFindUniqueArgs>(args: SelectSubset<T, MedicalProblemFindUniqueArgs<ExtArgs>>): Prisma__MedicalProblemClient<$Result.GetResult<Prisma.$MedicalProblemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MedicalProblem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicalProblemFindUniqueOrThrowArgs} args - Arguments to find a MedicalProblem
     * @example
     * // Get one MedicalProblem
     * const medicalProblem = await prisma.medicalProblem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicalProblemFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicalProblemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicalProblemClient<$Result.GetResult<Prisma.$MedicalProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalProblem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalProblemFindFirstArgs} args - Arguments to find a MedicalProblem
     * @example
     * // Get one MedicalProblem
     * const medicalProblem = await prisma.medicalProblem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicalProblemFindFirstArgs>(args?: SelectSubset<T, MedicalProblemFindFirstArgs<ExtArgs>>): Prisma__MedicalProblemClient<$Result.GetResult<Prisma.$MedicalProblemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalProblem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalProblemFindFirstOrThrowArgs} args - Arguments to find a MedicalProblem
     * @example
     * // Get one MedicalProblem
     * const medicalProblem = await prisma.medicalProblem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicalProblemFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicalProblemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicalProblemClient<$Result.GetResult<Prisma.$MedicalProblemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MedicalProblems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalProblemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicalProblems
     * const medicalProblems = await prisma.medicalProblem.findMany()
     * 
     * // Get first 10 MedicalProblems
     * const medicalProblems = await prisma.medicalProblem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicalProblemWithIdOnly = await prisma.medicalProblem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicalProblemFindManyArgs>(args?: SelectSubset<T, MedicalProblemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MedicalProblem.
     * @param {MedicalProblemCreateArgs} args - Arguments to create a MedicalProblem.
     * @example
     * // Create one MedicalProblem
     * const MedicalProblem = await prisma.medicalProblem.create({
     *   data: {
     *     // ... data to create a MedicalProblem
     *   }
     * })
     * 
     */
    create<T extends MedicalProblemCreateArgs>(args: SelectSubset<T, MedicalProblemCreateArgs<ExtArgs>>): Prisma__MedicalProblemClient<$Result.GetResult<Prisma.$MedicalProblemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MedicalProblems.
     * @param {MedicalProblemCreateManyArgs} args - Arguments to create many MedicalProblems.
     * @example
     * // Create many MedicalProblems
     * const medicalProblem = await prisma.medicalProblem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicalProblemCreateManyArgs>(args?: SelectSubset<T, MedicalProblemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MedicalProblem.
     * @param {MedicalProblemDeleteArgs} args - Arguments to delete one MedicalProblem.
     * @example
     * // Delete one MedicalProblem
     * const MedicalProblem = await prisma.medicalProblem.delete({
     *   where: {
     *     // ... filter to delete one MedicalProblem
     *   }
     * })
     * 
     */
    delete<T extends MedicalProblemDeleteArgs>(args: SelectSubset<T, MedicalProblemDeleteArgs<ExtArgs>>): Prisma__MedicalProblemClient<$Result.GetResult<Prisma.$MedicalProblemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MedicalProblem.
     * @param {MedicalProblemUpdateArgs} args - Arguments to update one MedicalProblem.
     * @example
     * // Update one MedicalProblem
     * const medicalProblem = await prisma.medicalProblem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicalProblemUpdateArgs>(args: SelectSubset<T, MedicalProblemUpdateArgs<ExtArgs>>): Prisma__MedicalProblemClient<$Result.GetResult<Prisma.$MedicalProblemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MedicalProblems.
     * @param {MedicalProblemDeleteManyArgs} args - Arguments to filter MedicalProblems to delete.
     * @example
     * // Delete a few MedicalProblems
     * const { count } = await prisma.medicalProblem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicalProblemDeleteManyArgs>(args?: SelectSubset<T, MedicalProblemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalProblems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalProblemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicalProblems
     * const medicalProblem = await prisma.medicalProblem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicalProblemUpdateManyArgs>(args: SelectSubset<T, MedicalProblemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MedicalProblem.
     * @param {MedicalProblemUpsertArgs} args - Arguments to update or create a MedicalProblem.
     * @example
     * // Update or create a MedicalProblem
     * const medicalProblem = await prisma.medicalProblem.upsert({
     *   create: {
     *     // ... data to create a MedicalProblem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicalProblem we want to update
     *   }
     * })
     */
    upsert<T extends MedicalProblemUpsertArgs>(args: SelectSubset<T, MedicalProblemUpsertArgs<ExtArgs>>): Prisma__MedicalProblemClient<$Result.GetResult<Prisma.$MedicalProblemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MedicalProblems that matches the filter.
     * @param {MedicalProblemFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const medicalProblem = await prisma.medicalProblem.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MedicalProblemFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a MedicalProblem.
     * @param {MedicalProblemAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const medicalProblem = await prisma.medicalProblem.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MedicalProblemAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of MedicalProblems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalProblemCountArgs} args - Arguments to filter MedicalProblems to count.
     * @example
     * // Count the number of MedicalProblems
     * const count = await prisma.medicalProblem.count({
     *   where: {
     *     // ... the filter for the MedicalProblems we want to count
     *   }
     * })
    **/
    count<T extends MedicalProblemCountArgs>(
      args?: Subset<T, MedicalProblemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicalProblemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicalProblem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalProblemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicalProblemAggregateArgs>(args: Subset<T, MedicalProblemAggregateArgs>): Prisma.PrismaPromise<GetMedicalProblemAggregateType<T>>

    /**
     * Group by MedicalProblem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalProblemGroupByArgs} args - Group by arguments.
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
      T extends MedicalProblemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicalProblemGroupByArgs['orderBy'] }
        : { orderBy?: MedicalProblemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicalProblemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicalProblemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicalProblem model
   */
  readonly fields: MedicalProblemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicalProblem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicalProblemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MedicalProblem model
   */
  interface MedicalProblemFieldRefs {
    readonly id: FieldRef<"MedicalProblem", 'String'>
    readonly userId: FieldRef<"MedicalProblem", 'String'>
    readonly title: FieldRef<"MedicalProblem", 'String'>
    readonly description: FieldRef<"MedicalProblem", 'String'>
    readonly symptoms: FieldRef<"MedicalProblem", 'String[]'>
    readonly diagnosis: FieldRef<"MedicalProblem", 'String'>
    readonly severity: FieldRef<"MedicalProblem", 'String'>
    readonly date: FieldRef<"MedicalProblem", 'DateTime'>
    readonly resolved: FieldRef<"MedicalProblem", 'Boolean'>
    readonly createdAt: FieldRef<"MedicalProblem", 'DateTime'>
    readonly updatedAt: FieldRef<"MedicalProblem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MedicalProblem findUnique
   */
  export type MedicalProblemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalProblem
     */
    select?: MedicalProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalProblem
     */
    omit?: MedicalProblemOmit<ExtArgs> | null
    /**
     * Filter, which MedicalProblem to fetch.
     */
    where: MedicalProblemWhereUniqueInput
  }

  /**
   * MedicalProblem findUniqueOrThrow
   */
  export type MedicalProblemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalProblem
     */
    select?: MedicalProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalProblem
     */
    omit?: MedicalProblemOmit<ExtArgs> | null
    /**
     * Filter, which MedicalProblem to fetch.
     */
    where: MedicalProblemWhereUniqueInput
  }

  /**
   * MedicalProblem findFirst
   */
  export type MedicalProblemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalProblem
     */
    select?: MedicalProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalProblem
     */
    omit?: MedicalProblemOmit<ExtArgs> | null
    /**
     * Filter, which MedicalProblem to fetch.
     */
    where?: MedicalProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalProblems to fetch.
     */
    orderBy?: MedicalProblemOrderByWithRelationInput | MedicalProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalProblems.
     */
    cursor?: MedicalProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalProblems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalProblems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalProblems.
     */
    distinct?: MedicalProblemScalarFieldEnum | MedicalProblemScalarFieldEnum[]
  }

  /**
   * MedicalProblem findFirstOrThrow
   */
  export type MedicalProblemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalProblem
     */
    select?: MedicalProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalProblem
     */
    omit?: MedicalProblemOmit<ExtArgs> | null
    /**
     * Filter, which MedicalProblem to fetch.
     */
    where?: MedicalProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalProblems to fetch.
     */
    orderBy?: MedicalProblemOrderByWithRelationInput | MedicalProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalProblems.
     */
    cursor?: MedicalProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalProblems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalProblems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalProblems.
     */
    distinct?: MedicalProblemScalarFieldEnum | MedicalProblemScalarFieldEnum[]
  }

  /**
   * MedicalProblem findMany
   */
  export type MedicalProblemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalProblem
     */
    select?: MedicalProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalProblem
     */
    omit?: MedicalProblemOmit<ExtArgs> | null
    /**
     * Filter, which MedicalProblems to fetch.
     */
    where?: MedicalProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalProblems to fetch.
     */
    orderBy?: MedicalProblemOrderByWithRelationInput | MedicalProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicalProblems.
     */
    cursor?: MedicalProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalProblems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalProblems.
     */
    skip?: number
    distinct?: MedicalProblemScalarFieldEnum | MedicalProblemScalarFieldEnum[]
  }

  /**
   * MedicalProblem create
   */
  export type MedicalProblemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalProblem
     */
    select?: MedicalProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalProblem
     */
    omit?: MedicalProblemOmit<ExtArgs> | null
    /**
     * The data needed to create a MedicalProblem.
     */
    data: XOR<MedicalProblemCreateInput, MedicalProblemUncheckedCreateInput>
  }

  /**
   * MedicalProblem createMany
   */
  export type MedicalProblemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicalProblems.
     */
    data: MedicalProblemCreateManyInput | MedicalProblemCreateManyInput[]
  }

  /**
   * MedicalProblem update
   */
  export type MedicalProblemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalProblem
     */
    select?: MedicalProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalProblem
     */
    omit?: MedicalProblemOmit<ExtArgs> | null
    /**
     * The data needed to update a MedicalProblem.
     */
    data: XOR<MedicalProblemUpdateInput, MedicalProblemUncheckedUpdateInput>
    /**
     * Choose, which MedicalProblem to update.
     */
    where: MedicalProblemWhereUniqueInput
  }

  /**
   * MedicalProblem updateMany
   */
  export type MedicalProblemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicalProblems.
     */
    data: XOR<MedicalProblemUpdateManyMutationInput, MedicalProblemUncheckedUpdateManyInput>
    /**
     * Filter which MedicalProblems to update
     */
    where?: MedicalProblemWhereInput
    /**
     * Limit how many MedicalProblems to update.
     */
    limit?: number
  }

  /**
   * MedicalProblem upsert
   */
  export type MedicalProblemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalProblem
     */
    select?: MedicalProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalProblem
     */
    omit?: MedicalProblemOmit<ExtArgs> | null
    /**
     * The filter to search for the MedicalProblem to update in case it exists.
     */
    where: MedicalProblemWhereUniqueInput
    /**
     * In case the MedicalProblem found by the `where` argument doesn't exist, create a new MedicalProblem with this data.
     */
    create: XOR<MedicalProblemCreateInput, MedicalProblemUncheckedCreateInput>
    /**
     * In case the MedicalProblem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicalProblemUpdateInput, MedicalProblemUncheckedUpdateInput>
  }

  /**
   * MedicalProblem delete
   */
  export type MedicalProblemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalProblem
     */
    select?: MedicalProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalProblem
     */
    omit?: MedicalProblemOmit<ExtArgs> | null
    /**
     * Filter which MedicalProblem to delete.
     */
    where: MedicalProblemWhereUniqueInput
  }

  /**
   * MedicalProblem deleteMany
   */
  export type MedicalProblemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalProblems to delete
     */
    where?: MedicalProblemWhereInput
    /**
     * Limit how many MedicalProblems to delete.
     */
    limit?: number
  }

  /**
   * MedicalProblem findRaw
   */
  export type MedicalProblemFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * MedicalProblem aggregateRaw
   */
  export type MedicalProblemAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * MedicalProblem without action
   */
  export type MedicalProblemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalProblem
     */
    select?: MedicalProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalProblem
     */
    omit?: MedicalProblemOmit<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: string | null
    userId: string | null
    content: string | null
    type: string | null
    timestamp: Date | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    content: string | null
    type: string | null
    timestamp: Date | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    userId: number
    content: number
    type: number
    timestamp: number
    _all: number
  }


  export type ChatMessageMinAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    type?: true
    timestamp?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    type?: true
    timestamp?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    type?: true
    timestamp?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: string
    userId: string
    content: string
    type: string
    timestamp: Date
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
    type?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["chatMessage"]>



  export type ChatMessageSelectScalar = {
    id?: boolean
    userId?: boolean
    content?: boolean
    type?: boolean
    timestamp?: boolean
  }

  export type ChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "content" | "type" | "timestamp", ExtArgs["result"]["chatMessage"]>

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      content: string
      type: string
      timestamp: Date
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * @param {ChatMessageFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const chatMessage = await prisma.chatMessage.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ChatMessageFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ChatMessage.
     * @param {ChatMessageAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const chatMessage = await prisma.chatMessage.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ChatMessageAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
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
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ChatMessage model
   */
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'String'>
    readonly userId: FieldRef<"ChatMessage", 'String'>
    readonly content: FieldRef<"ChatMessage", 'String'>
    readonly type: FieldRef<"ChatMessage", 'String'>
    readonly timestamp: FieldRef<"ChatMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessage findRaw
   */
  export type ChatMessageFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * ChatMessage aggregateRaw
   */
  export type ChatMessageAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
  }


  /**
   * Model DiseasePrediction
   */

  export type AggregateDiseasePrediction = {
    _count: DiseasePredictionCountAggregateOutputType | null
    _min: DiseasePredictionMinAggregateOutputType | null
    _max: DiseasePredictionMaxAggregateOutputType | null
  }

  export type DiseasePredictionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    inputText: string | null
    createdAt: Date | null
  }

  export type DiseasePredictionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    inputText: string | null
    createdAt: Date | null
  }

  export type DiseasePredictionCountAggregateOutputType = {
    id: number
    userId: number
    symptoms: number
    predictions: number
    inputText: number
    createdAt: number
    _all: number
  }


  export type DiseasePredictionMinAggregateInputType = {
    id?: true
    userId?: true
    inputText?: true
    createdAt?: true
  }

  export type DiseasePredictionMaxAggregateInputType = {
    id?: true
    userId?: true
    inputText?: true
    createdAt?: true
  }

  export type DiseasePredictionCountAggregateInputType = {
    id?: true
    userId?: true
    symptoms?: true
    predictions?: true
    inputText?: true
    createdAt?: true
    _all?: true
  }

  export type DiseasePredictionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiseasePrediction to aggregate.
     */
    where?: DiseasePredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiseasePredictions to fetch.
     */
    orderBy?: DiseasePredictionOrderByWithRelationInput | DiseasePredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiseasePredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiseasePredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiseasePredictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiseasePredictions
    **/
    _count?: true | DiseasePredictionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiseasePredictionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiseasePredictionMaxAggregateInputType
  }

  export type GetDiseasePredictionAggregateType<T extends DiseasePredictionAggregateArgs> = {
        [P in keyof T & keyof AggregateDiseasePrediction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiseasePrediction[P]>
      : GetScalarType<T[P], AggregateDiseasePrediction[P]>
  }




  export type DiseasePredictionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiseasePredictionWhereInput
    orderBy?: DiseasePredictionOrderByWithAggregationInput | DiseasePredictionOrderByWithAggregationInput[]
    by: DiseasePredictionScalarFieldEnum[] | DiseasePredictionScalarFieldEnum
    having?: DiseasePredictionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiseasePredictionCountAggregateInputType | true
    _min?: DiseasePredictionMinAggregateInputType
    _max?: DiseasePredictionMaxAggregateInputType
  }

  export type DiseasePredictionGroupByOutputType = {
    id: string
    userId: string
    symptoms: string[]
    predictions: JsonValue
    inputText: string
    createdAt: Date
    _count: DiseasePredictionCountAggregateOutputType | null
    _min: DiseasePredictionMinAggregateOutputType | null
    _max: DiseasePredictionMaxAggregateOutputType | null
  }

  type GetDiseasePredictionGroupByPayload<T extends DiseasePredictionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiseasePredictionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiseasePredictionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiseasePredictionGroupByOutputType[P]>
            : GetScalarType<T[P], DiseasePredictionGroupByOutputType[P]>
        }
      >
    >


  export type DiseasePredictionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    symptoms?: boolean
    predictions?: boolean
    inputText?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["diseasePrediction"]>



  export type DiseasePredictionSelectScalar = {
    id?: boolean
    userId?: boolean
    symptoms?: boolean
    predictions?: boolean
    inputText?: boolean
    createdAt?: boolean
  }

  export type DiseasePredictionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "symptoms" | "predictions" | "inputText" | "createdAt", ExtArgs["result"]["diseasePrediction"]>

  export type $DiseasePredictionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiseasePrediction"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      symptoms: string[]
      predictions: Prisma.JsonValue
      inputText: string
      createdAt: Date
    }, ExtArgs["result"]["diseasePrediction"]>
    composites: {}
  }

  type DiseasePredictionGetPayload<S extends boolean | null | undefined | DiseasePredictionDefaultArgs> = $Result.GetResult<Prisma.$DiseasePredictionPayload, S>

  type DiseasePredictionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiseasePredictionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiseasePredictionCountAggregateInputType | true
    }

  export interface DiseasePredictionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiseasePrediction'], meta: { name: 'DiseasePrediction' } }
    /**
     * Find zero or one DiseasePrediction that matches the filter.
     * @param {DiseasePredictionFindUniqueArgs} args - Arguments to find a DiseasePrediction
     * @example
     * // Get one DiseasePrediction
     * const diseasePrediction = await prisma.diseasePrediction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiseasePredictionFindUniqueArgs>(args: SelectSubset<T, DiseasePredictionFindUniqueArgs<ExtArgs>>): Prisma__DiseasePredictionClient<$Result.GetResult<Prisma.$DiseasePredictionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DiseasePrediction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiseasePredictionFindUniqueOrThrowArgs} args - Arguments to find a DiseasePrediction
     * @example
     * // Get one DiseasePrediction
     * const diseasePrediction = await prisma.diseasePrediction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiseasePredictionFindUniqueOrThrowArgs>(args: SelectSubset<T, DiseasePredictionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiseasePredictionClient<$Result.GetResult<Prisma.$DiseasePredictionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiseasePrediction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseasePredictionFindFirstArgs} args - Arguments to find a DiseasePrediction
     * @example
     * // Get one DiseasePrediction
     * const diseasePrediction = await prisma.diseasePrediction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiseasePredictionFindFirstArgs>(args?: SelectSubset<T, DiseasePredictionFindFirstArgs<ExtArgs>>): Prisma__DiseasePredictionClient<$Result.GetResult<Prisma.$DiseasePredictionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiseasePrediction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseasePredictionFindFirstOrThrowArgs} args - Arguments to find a DiseasePrediction
     * @example
     * // Get one DiseasePrediction
     * const diseasePrediction = await prisma.diseasePrediction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiseasePredictionFindFirstOrThrowArgs>(args?: SelectSubset<T, DiseasePredictionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiseasePredictionClient<$Result.GetResult<Prisma.$DiseasePredictionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DiseasePredictions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseasePredictionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiseasePredictions
     * const diseasePredictions = await prisma.diseasePrediction.findMany()
     * 
     * // Get first 10 DiseasePredictions
     * const diseasePredictions = await prisma.diseasePrediction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diseasePredictionWithIdOnly = await prisma.diseasePrediction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiseasePredictionFindManyArgs>(args?: SelectSubset<T, DiseasePredictionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiseasePredictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DiseasePrediction.
     * @param {DiseasePredictionCreateArgs} args - Arguments to create a DiseasePrediction.
     * @example
     * // Create one DiseasePrediction
     * const DiseasePrediction = await prisma.diseasePrediction.create({
     *   data: {
     *     // ... data to create a DiseasePrediction
     *   }
     * })
     * 
     */
    create<T extends DiseasePredictionCreateArgs>(args: SelectSubset<T, DiseasePredictionCreateArgs<ExtArgs>>): Prisma__DiseasePredictionClient<$Result.GetResult<Prisma.$DiseasePredictionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DiseasePredictions.
     * @param {DiseasePredictionCreateManyArgs} args - Arguments to create many DiseasePredictions.
     * @example
     * // Create many DiseasePredictions
     * const diseasePrediction = await prisma.diseasePrediction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiseasePredictionCreateManyArgs>(args?: SelectSubset<T, DiseasePredictionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DiseasePrediction.
     * @param {DiseasePredictionDeleteArgs} args - Arguments to delete one DiseasePrediction.
     * @example
     * // Delete one DiseasePrediction
     * const DiseasePrediction = await prisma.diseasePrediction.delete({
     *   where: {
     *     // ... filter to delete one DiseasePrediction
     *   }
     * })
     * 
     */
    delete<T extends DiseasePredictionDeleteArgs>(args: SelectSubset<T, DiseasePredictionDeleteArgs<ExtArgs>>): Prisma__DiseasePredictionClient<$Result.GetResult<Prisma.$DiseasePredictionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DiseasePrediction.
     * @param {DiseasePredictionUpdateArgs} args - Arguments to update one DiseasePrediction.
     * @example
     * // Update one DiseasePrediction
     * const diseasePrediction = await prisma.diseasePrediction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiseasePredictionUpdateArgs>(args: SelectSubset<T, DiseasePredictionUpdateArgs<ExtArgs>>): Prisma__DiseasePredictionClient<$Result.GetResult<Prisma.$DiseasePredictionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DiseasePredictions.
     * @param {DiseasePredictionDeleteManyArgs} args - Arguments to filter DiseasePredictions to delete.
     * @example
     * // Delete a few DiseasePredictions
     * const { count } = await prisma.diseasePrediction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiseasePredictionDeleteManyArgs>(args?: SelectSubset<T, DiseasePredictionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiseasePredictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseasePredictionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiseasePredictions
     * const diseasePrediction = await prisma.diseasePrediction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiseasePredictionUpdateManyArgs>(args: SelectSubset<T, DiseasePredictionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DiseasePrediction.
     * @param {DiseasePredictionUpsertArgs} args - Arguments to update or create a DiseasePrediction.
     * @example
     * // Update or create a DiseasePrediction
     * const diseasePrediction = await prisma.diseasePrediction.upsert({
     *   create: {
     *     // ... data to create a DiseasePrediction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiseasePrediction we want to update
     *   }
     * })
     */
    upsert<T extends DiseasePredictionUpsertArgs>(args: SelectSubset<T, DiseasePredictionUpsertArgs<ExtArgs>>): Prisma__DiseasePredictionClient<$Result.GetResult<Prisma.$DiseasePredictionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DiseasePredictions that matches the filter.
     * @param {DiseasePredictionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const diseasePrediction = await prisma.diseasePrediction.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DiseasePredictionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a DiseasePrediction.
     * @param {DiseasePredictionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const diseasePrediction = await prisma.diseasePrediction.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DiseasePredictionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of DiseasePredictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseasePredictionCountArgs} args - Arguments to filter DiseasePredictions to count.
     * @example
     * // Count the number of DiseasePredictions
     * const count = await prisma.diseasePrediction.count({
     *   where: {
     *     // ... the filter for the DiseasePredictions we want to count
     *   }
     * })
    **/
    count<T extends DiseasePredictionCountArgs>(
      args?: Subset<T, DiseasePredictionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiseasePredictionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiseasePrediction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseasePredictionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiseasePredictionAggregateArgs>(args: Subset<T, DiseasePredictionAggregateArgs>): Prisma.PrismaPromise<GetDiseasePredictionAggregateType<T>>

    /**
     * Group by DiseasePrediction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseasePredictionGroupByArgs} args - Group by arguments.
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
      T extends DiseasePredictionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiseasePredictionGroupByArgs['orderBy'] }
        : { orderBy?: DiseasePredictionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiseasePredictionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiseasePredictionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiseasePrediction model
   */
  readonly fields: DiseasePredictionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiseasePrediction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiseasePredictionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DiseasePrediction model
   */
  interface DiseasePredictionFieldRefs {
    readonly id: FieldRef<"DiseasePrediction", 'String'>
    readonly userId: FieldRef<"DiseasePrediction", 'String'>
    readonly symptoms: FieldRef<"DiseasePrediction", 'String[]'>
    readonly predictions: FieldRef<"DiseasePrediction", 'Json'>
    readonly inputText: FieldRef<"DiseasePrediction", 'String'>
    readonly createdAt: FieldRef<"DiseasePrediction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DiseasePrediction findUnique
   */
  export type DiseasePredictionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseasePrediction
     */
    select?: DiseasePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiseasePrediction
     */
    omit?: DiseasePredictionOmit<ExtArgs> | null
    /**
     * Filter, which DiseasePrediction to fetch.
     */
    where: DiseasePredictionWhereUniqueInput
  }

  /**
   * DiseasePrediction findUniqueOrThrow
   */
  export type DiseasePredictionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseasePrediction
     */
    select?: DiseasePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiseasePrediction
     */
    omit?: DiseasePredictionOmit<ExtArgs> | null
    /**
     * Filter, which DiseasePrediction to fetch.
     */
    where: DiseasePredictionWhereUniqueInput
  }

  /**
   * DiseasePrediction findFirst
   */
  export type DiseasePredictionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseasePrediction
     */
    select?: DiseasePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiseasePrediction
     */
    omit?: DiseasePredictionOmit<ExtArgs> | null
    /**
     * Filter, which DiseasePrediction to fetch.
     */
    where?: DiseasePredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiseasePredictions to fetch.
     */
    orderBy?: DiseasePredictionOrderByWithRelationInput | DiseasePredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiseasePredictions.
     */
    cursor?: DiseasePredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiseasePredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiseasePredictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiseasePredictions.
     */
    distinct?: DiseasePredictionScalarFieldEnum | DiseasePredictionScalarFieldEnum[]
  }

  /**
   * DiseasePrediction findFirstOrThrow
   */
  export type DiseasePredictionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseasePrediction
     */
    select?: DiseasePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiseasePrediction
     */
    omit?: DiseasePredictionOmit<ExtArgs> | null
    /**
     * Filter, which DiseasePrediction to fetch.
     */
    where?: DiseasePredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiseasePredictions to fetch.
     */
    orderBy?: DiseasePredictionOrderByWithRelationInput | DiseasePredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiseasePredictions.
     */
    cursor?: DiseasePredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiseasePredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiseasePredictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiseasePredictions.
     */
    distinct?: DiseasePredictionScalarFieldEnum | DiseasePredictionScalarFieldEnum[]
  }

  /**
   * DiseasePrediction findMany
   */
  export type DiseasePredictionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseasePrediction
     */
    select?: DiseasePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiseasePrediction
     */
    omit?: DiseasePredictionOmit<ExtArgs> | null
    /**
     * Filter, which DiseasePredictions to fetch.
     */
    where?: DiseasePredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiseasePredictions to fetch.
     */
    orderBy?: DiseasePredictionOrderByWithRelationInput | DiseasePredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiseasePredictions.
     */
    cursor?: DiseasePredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiseasePredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiseasePredictions.
     */
    skip?: number
    distinct?: DiseasePredictionScalarFieldEnum | DiseasePredictionScalarFieldEnum[]
  }

  /**
   * DiseasePrediction create
   */
  export type DiseasePredictionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseasePrediction
     */
    select?: DiseasePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiseasePrediction
     */
    omit?: DiseasePredictionOmit<ExtArgs> | null
    /**
     * The data needed to create a DiseasePrediction.
     */
    data: XOR<DiseasePredictionCreateInput, DiseasePredictionUncheckedCreateInput>
  }

  /**
   * DiseasePrediction createMany
   */
  export type DiseasePredictionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiseasePredictions.
     */
    data: DiseasePredictionCreateManyInput | DiseasePredictionCreateManyInput[]
  }

  /**
   * DiseasePrediction update
   */
  export type DiseasePredictionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseasePrediction
     */
    select?: DiseasePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiseasePrediction
     */
    omit?: DiseasePredictionOmit<ExtArgs> | null
    /**
     * The data needed to update a DiseasePrediction.
     */
    data: XOR<DiseasePredictionUpdateInput, DiseasePredictionUncheckedUpdateInput>
    /**
     * Choose, which DiseasePrediction to update.
     */
    where: DiseasePredictionWhereUniqueInput
  }

  /**
   * DiseasePrediction updateMany
   */
  export type DiseasePredictionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiseasePredictions.
     */
    data: XOR<DiseasePredictionUpdateManyMutationInput, DiseasePredictionUncheckedUpdateManyInput>
    /**
     * Filter which DiseasePredictions to update
     */
    where?: DiseasePredictionWhereInput
    /**
     * Limit how many DiseasePredictions to update.
     */
    limit?: number
  }

  /**
   * DiseasePrediction upsert
   */
  export type DiseasePredictionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseasePrediction
     */
    select?: DiseasePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiseasePrediction
     */
    omit?: DiseasePredictionOmit<ExtArgs> | null
    /**
     * The filter to search for the DiseasePrediction to update in case it exists.
     */
    where: DiseasePredictionWhereUniqueInput
    /**
     * In case the DiseasePrediction found by the `where` argument doesn't exist, create a new DiseasePrediction with this data.
     */
    create: XOR<DiseasePredictionCreateInput, DiseasePredictionUncheckedCreateInput>
    /**
     * In case the DiseasePrediction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiseasePredictionUpdateInput, DiseasePredictionUncheckedUpdateInput>
  }

  /**
   * DiseasePrediction delete
   */
  export type DiseasePredictionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseasePrediction
     */
    select?: DiseasePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiseasePrediction
     */
    omit?: DiseasePredictionOmit<ExtArgs> | null
    /**
     * Filter which DiseasePrediction to delete.
     */
    where: DiseasePredictionWhereUniqueInput
  }

  /**
   * DiseasePrediction deleteMany
   */
  export type DiseasePredictionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiseasePredictions to delete
     */
    where?: DiseasePredictionWhereInput
    /**
     * Limit how many DiseasePredictions to delete.
     */
    limit?: number
  }

  /**
   * DiseasePrediction findRaw
   */
  export type DiseasePredictionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * DiseasePrediction aggregateRaw
   */
  export type DiseasePredictionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * DiseasePrediction without action
   */
  export type DiseasePredictionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseasePrediction
     */
    select?: DiseasePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiseasePrediction
     */
    omit?: DiseasePredictionOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const MedicalProblemScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    description: 'description',
    symptoms: 'symptoms',
    diagnosis: 'diagnosis',
    severity: 'severity',
    date: 'date',
    resolved: 'resolved',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MedicalProblemScalarFieldEnum = (typeof MedicalProblemScalarFieldEnum)[keyof typeof MedicalProblemScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    content: 'content',
    type: 'type',
    timestamp: 'timestamp'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const DiseasePredictionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    symptoms: 'symptoms',
    predictions: 'predictions',
    inputText: 'inputText',
    createdAt: 'createdAt'
  };

  export type DiseasePredictionScalarFieldEnum = (typeof DiseasePredictionScalarFieldEnum)[keyof typeof DiseasePredictionScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type MedicalProblemWhereInput = {
    AND?: MedicalProblemWhereInput | MedicalProblemWhereInput[]
    OR?: MedicalProblemWhereInput[]
    NOT?: MedicalProblemWhereInput | MedicalProblemWhereInput[]
    id?: StringFilter<"MedicalProblem"> | string
    userId?: StringFilter<"MedicalProblem"> | string
    title?: StringFilter<"MedicalProblem"> | string
    description?: StringFilter<"MedicalProblem"> | string
    symptoms?: StringNullableListFilter<"MedicalProblem">
    diagnosis?: StringNullableFilter<"MedicalProblem"> | string | null
    severity?: StringNullableFilter<"MedicalProblem"> | string | null
    date?: DateTimeFilter<"MedicalProblem"> | Date | string
    resolved?: BoolFilter<"MedicalProblem"> | boolean
    createdAt?: DateTimeFilter<"MedicalProblem"> | Date | string
    updatedAt?: DateTimeFilter<"MedicalProblem"> | Date | string
  }

  export type MedicalProblemOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    symptoms?: SortOrder
    diagnosis?: SortOrder
    severity?: SortOrder
    date?: SortOrder
    resolved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicalProblemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MedicalProblemWhereInput | MedicalProblemWhereInput[]
    OR?: MedicalProblemWhereInput[]
    NOT?: MedicalProblemWhereInput | MedicalProblemWhereInput[]
    userId?: StringFilter<"MedicalProblem"> | string
    title?: StringFilter<"MedicalProblem"> | string
    description?: StringFilter<"MedicalProblem"> | string
    symptoms?: StringNullableListFilter<"MedicalProblem">
    diagnosis?: StringNullableFilter<"MedicalProblem"> | string | null
    severity?: StringNullableFilter<"MedicalProblem"> | string | null
    date?: DateTimeFilter<"MedicalProblem"> | Date | string
    resolved?: BoolFilter<"MedicalProblem"> | boolean
    createdAt?: DateTimeFilter<"MedicalProblem"> | Date | string
    updatedAt?: DateTimeFilter<"MedicalProblem"> | Date | string
  }, "id">

  export type MedicalProblemOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    symptoms?: SortOrder
    diagnosis?: SortOrder
    severity?: SortOrder
    date?: SortOrder
    resolved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MedicalProblemCountOrderByAggregateInput
    _max?: MedicalProblemMaxOrderByAggregateInput
    _min?: MedicalProblemMinOrderByAggregateInput
  }

  export type MedicalProblemScalarWhereWithAggregatesInput = {
    AND?: MedicalProblemScalarWhereWithAggregatesInput | MedicalProblemScalarWhereWithAggregatesInput[]
    OR?: MedicalProblemScalarWhereWithAggregatesInput[]
    NOT?: MedicalProblemScalarWhereWithAggregatesInput | MedicalProblemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MedicalProblem"> | string
    userId?: StringWithAggregatesFilter<"MedicalProblem"> | string
    title?: StringWithAggregatesFilter<"MedicalProblem"> | string
    description?: StringWithAggregatesFilter<"MedicalProblem"> | string
    symptoms?: StringNullableListFilter<"MedicalProblem">
    diagnosis?: StringNullableWithAggregatesFilter<"MedicalProblem"> | string | null
    severity?: StringNullableWithAggregatesFilter<"MedicalProblem"> | string | null
    date?: DateTimeWithAggregatesFilter<"MedicalProblem"> | Date | string
    resolved?: BoolWithAggregatesFilter<"MedicalProblem"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"MedicalProblem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MedicalProblem"> | Date | string
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    userId?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    type?: StringFilter<"ChatMessage"> | string
    timestamp?: DateTimeFilter<"ChatMessage"> | Date | string
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    type?: SortOrder
    timestamp?: SortOrder
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    userId?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    type?: StringFilter<"ChatMessage"> | string
    timestamp?: DateTimeFilter<"ChatMessage"> | Date | string
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    type?: SortOrder
    timestamp?: SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatMessage"> | string
    userId?: StringWithAggregatesFilter<"ChatMessage"> | string
    content?: StringWithAggregatesFilter<"ChatMessage"> | string
    type?: StringWithAggregatesFilter<"ChatMessage"> | string
    timestamp?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
  }

  export type DiseasePredictionWhereInput = {
    AND?: DiseasePredictionWhereInput | DiseasePredictionWhereInput[]
    OR?: DiseasePredictionWhereInput[]
    NOT?: DiseasePredictionWhereInput | DiseasePredictionWhereInput[]
    id?: StringFilter<"DiseasePrediction"> | string
    userId?: StringFilter<"DiseasePrediction"> | string
    symptoms?: StringNullableListFilter<"DiseasePrediction">
    predictions?: JsonFilter<"DiseasePrediction">
    inputText?: StringFilter<"DiseasePrediction"> | string
    createdAt?: DateTimeFilter<"DiseasePrediction"> | Date | string
  }

  export type DiseasePredictionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    symptoms?: SortOrder
    predictions?: SortOrder
    inputText?: SortOrder
    createdAt?: SortOrder
  }

  export type DiseasePredictionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DiseasePredictionWhereInput | DiseasePredictionWhereInput[]
    OR?: DiseasePredictionWhereInput[]
    NOT?: DiseasePredictionWhereInput | DiseasePredictionWhereInput[]
    userId?: StringFilter<"DiseasePrediction"> | string
    symptoms?: StringNullableListFilter<"DiseasePrediction">
    predictions?: JsonFilter<"DiseasePrediction">
    inputText?: StringFilter<"DiseasePrediction"> | string
    createdAt?: DateTimeFilter<"DiseasePrediction"> | Date | string
  }, "id">

  export type DiseasePredictionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    symptoms?: SortOrder
    predictions?: SortOrder
    inputText?: SortOrder
    createdAt?: SortOrder
    _count?: DiseasePredictionCountOrderByAggregateInput
    _max?: DiseasePredictionMaxOrderByAggregateInput
    _min?: DiseasePredictionMinOrderByAggregateInput
  }

  export type DiseasePredictionScalarWhereWithAggregatesInput = {
    AND?: DiseasePredictionScalarWhereWithAggregatesInput | DiseasePredictionScalarWhereWithAggregatesInput[]
    OR?: DiseasePredictionScalarWhereWithAggregatesInput[]
    NOT?: DiseasePredictionScalarWhereWithAggregatesInput | DiseasePredictionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DiseasePrediction"> | string
    userId?: StringWithAggregatesFilter<"DiseasePrediction"> | string
    symptoms?: StringNullableListFilter<"DiseasePrediction">
    predictions?: JsonWithAggregatesFilter<"DiseasePrediction">
    inputText?: StringWithAggregatesFilter<"DiseasePrediction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DiseasePrediction"> | Date | string
  }

  export type MedicalProblemCreateInput = {
    id?: string
    userId: string
    title: string
    description: string
    symptoms?: MedicalProblemCreatesymptomsInput | string[]
    diagnosis?: string | null
    severity?: string | null
    date?: Date | string
    resolved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalProblemUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    description: string
    symptoms?: MedicalProblemCreatesymptomsInput | string[]
    diagnosis?: string | null
    severity?: string | null
    date?: Date | string
    resolved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalProblemUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    symptoms?: MedicalProblemUpdatesymptomsInput | string[]
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalProblemUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    symptoms?: MedicalProblemUpdatesymptomsInput | string[]
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalProblemCreateManyInput = {
    id?: string
    userId: string
    title: string
    description: string
    symptoms?: MedicalProblemCreatesymptomsInput | string[]
    diagnosis?: string | null
    severity?: string | null
    date?: Date | string
    resolved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalProblemUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    symptoms?: MedicalProblemUpdatesymptomsInput | string[]
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalProblemUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    symptoms?: MedicalProblemUpdatesymptomsInput | string[]
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateInput = {
    id?: string
    userId: string
    content: string
    type: string
    timestamp?: Date | string
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: string
    userId: string
    content: string
    type: string
    timestamp?: Date | string
  }

  export type ChatMessageUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyInput = {
    id?: string
    userId: string
    content: string
    type: string
    timestamp?: Date | string
  }

  export type ChatMessageUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiseasePredictionCreateInput = {
    id?: string
    userId: string
    symptoms?: DiseasePredictionCreatesymptomsInput | string[]
    predictions: InputJsonValue
    inputText: string
    createdAt?: Date | string
  }

  export type DiseasePredictionUncheckedCreateInput = {
    id?: string
    userId: string
    symptoms?: DiseasePredictionCreatesymptomsInput | string[]
    predictions: InputJsonValue
    inputText: string
    createdAt?: Date | string
  }

  export type DiseasePredictionUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    symptoms?: DiseasePredictionUpdatesymptomsInput | string[]
    predictions?: InputJsonValue | InputJsonValue
    inputText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiseasePredictionUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    symptoms?: DiseasePredictionUpdatesymptomsInput | string[]
    predictions?: InputJsonValue | InputJsonValue
    inputText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiseasePredictionCreateManyInput = {
    id?: string
    userId: string
    symptoms?: DiseasePredictionCreatesymptomsInput | string[]
    predictions: InputJsonValue
    inputText: string
    createdAt?: Date | string
  }

  export type DiseasePredictionUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    symptoms?: DiseasePredictionUpdatesymptomsInput | string[]
    predictions?: InputJsonValue | InputJsonValue
    inputText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiseasePredictionUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    symptoms?: DiseasePredictionUpdatesymptomsInput | string[]
    predictions?: InputJsonValue | InputJsonValue
    inputText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MedicalProblemCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    symptoms?: SortOrder
    diagnosis?: SortOrder
    severity?: SortOrder
    date?: SortOrder
    resolved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicalProblemMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    diagnosis?: SortOrder
    severity?: SortOrder
    date?: SortOrder
    resolved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicalProblemMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    diagnosis?: SortOrder
    severity?: SortOrder
    date?: SortOrder
    resolved?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    type?: SortOrder
    timestamp?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    type?: SortOrder
    timestamp?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    type?: SortOrder
    timestamp?: SortOrder
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

  export type DiseasePredictionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    symptoms?: SortOrder
    predictions?: SortOrder
    inputText?: SortOrder
    createdAt?: SortOrder
  }

  export type DiseasePredictionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    inputText?: SortOrder
    createdAt?: SortOrder
  }

  export type DiseasePredictionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    inputText?: SortOrder
    createdAt?: SortOrder
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

  export type MedicalProblemCreatesymptomsInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type MedicalProblemUpdatesymptomsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DiseasePredictionCreatesymptomsInput = {
    set: string[]
  }

  export type DiseasePredictionUpdatesymptomsInput = {
    set?: string[]
    push?: string | string[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
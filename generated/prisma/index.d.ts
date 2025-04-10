
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model RAT
 * 
 */
export type RAT = $Result.DefaultSelection<Prisma.$RATPayload>
/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Contato
 * 
 */
export type Contato = $Result.DefaultSelection<Prisma.$ContatoPayload>
/**
 * Model ClienteContato
 * 
 */
export type ClienteContato = $Result.DefaultSelection<Prisma.$ClienteContatoPayload>
/**
 * Model EmailCliente
 * 
 */
export type EmailCliente = $Result.DefaultSelection<Prisma.$EmailClientePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rAT`: Exposes CRUD operations for the **RAT** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RATS
    * const rATS = await prisma.rAT.findMany()
    * ```
    */
  get rAT(): Prisma.RATDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contato`: Exposes CRUD operations for the **Contato** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contatoes
    * const contatoes = await prisma.contato.findMany()
    * ```
    */
  get contato(): Prisma.ContatoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clienteContato`: Exposes CRUD operations for the **ClienteContato** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClienteContatoes
    * const clienteContatoes = await prisma.clienteContato.findMany()
    * ```
    */
  get clienteContato(): Prisma.ClienteContatoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailCliente`: Exposes CRUD operations for the **EmailCliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailClientes
    * const emailClientes = await prisma.emailCliente.findMany()
    * ```
    */
  get emailCliente(): Prisma.EmailClienteDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Usuario: 'Usuario',
    RAT: 'RAT',
    Cliente: 'Cliente',
    Contato: 'Contato',
    ClienteContato: 'ClienteContato',
    EmailCliente: 'EmailCliente'
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
      modelProps: "usuario" | "rAT" | "cliente" | "contato" | "clienteContato" | "emailCliente"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      RAT: {
        payload: Prisma.$RATPayload<ExtArgs>
        fields: Prisma.RATFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RATFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RATPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RATFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RATPayload>
          }
          findFirst: {
            args: Prisma.RATFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RATPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RATFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RATPayload>
          }
          findMany: {
            args: Prisma.RATFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RATPayload>[]
          }
          create: {
            args: Prisma.RATCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RATPayload>
          }
          createMany: {
            args: Prisma.RATCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RATCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RATPayload>[]
          }
          delete: {
            args: Prisma.RATDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RATPayload>
          }
          update: {
            args: Prisma.RATUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RATPayload>
          }
          deleteMany: {
            args: Prisma.RATDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RATUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RATUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RATPayload>[]
          }
          upsert: {
            args: Prisma.RATUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RATPayload>
          }
          aggregate: {
            args: Prisma.RATAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRAT>
          }
          groupBy: {
            args: Prisma.RATGroupByArgs<ExtArgs>
            result: $Utils.Optional<RATGroupByOutputType>[]
          }
          count: {
            args: Prisma.RATCountArgs<ExtArgs>
            result: $Utils.Optional<RATCountAggregateOutputType> | number
          }
        }
      }
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Contato: {
        payload: Prisma.$ContatoPayload<ExtArgs>
        fields: Prisma.ContatoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContatoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContatoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>
          }
          findFirst: {
            args: Prisma.ContatoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContatoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>
          }
          findMany: {
            args: Prisma.ContatoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>[]
          }
          create: {
            args: Prisma.ContatoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>
          }
          createMany: {
            args: Prisma.ContatoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContatoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>[]
          }
          delete: {
            args: Prisma.ContatoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>
          }
          update: {
            args: Prisma.ContatoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>
          }
          deleteMany: {
            args: Prisma.ContatoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContatoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContatoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>[]
          }
          upsert: {
            args: Prisma.ContatoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>
          }
          aggregate: {
            args: Prisma.ContatoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContato>
          }
          groupBy: {
            args: Prisma.ContatoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContatoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContatoCountArgs<ExtArgs>
            result: $Utils.Optional<ContatoCountAggregateOutputType> | number
          }
        }
      }
      ClienteContato: {
        payload: Prisma.$ClienteContatoPayload<ExtArgs>
        fields: Prisma.ClienteContatoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteContatoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClienteContatoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteContatoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClienteContatoPayload>
          }
          findFirst: {
            args: Prisma.ClienteContatoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClienteContatoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteContatoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClienteContatoPayload>
          }
          findMany: {
            args: Prisma.ClienteContatoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClienteContatoPayload>[]
          }
          create: {
            args: Prisma.ClienteContatoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClienteContatoPayload>
          }
          createMany: {
            args: Prisma.ClienteContatoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteContatoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClienteContatoPayload>[]
          }
          delete: {
            args: Prisma.ClienteContatoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClienteContatoPayload>
          }
          update: {
            args: Prisma.ClienteContatoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClienteContatoPayload>
          }
          deleteMany: {
            args: Prisma.ClienteContatoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteContatoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteContatoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClienteContatoPayload>[]
          }
          upsert: {
            args: Prisma.ClienteContatoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClienteContatoPayload>
          }
          aggregate: {
            args: Prisma.ClienteContatoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClienteContato>
          }
          groupBy: {
            args: Prisma.ClienteContatoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteContatoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteContatoCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteContatoCountAggregateOutputType> | number
          }
        }
      }
      EmailCliente: {
        payload: Prisma.$EmailClientePayload<ExtArgs>
        fields: Prisma.EmailClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailClientePayload>
          }
          findFirst: {
            args: Prisma.EmailClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailClientePayload>
          }
          findMany: {
            args: Prisma.EmailClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailClientePayload>[]
          }
          create: {
            args: Prisma.EmailClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailClientePayload>
          }
          createMany: {
            args: Prisma.EmailClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailClientePayload>[]
          }
          delete: {
            args: Prisma.EmailClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailClientePayload>
          }
          update: {
            args: Prisma.EmailClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailClientePayload>
          }
          deleteMany: {
            args: Prisma.EmailClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailClientePayload>[]
          }
          upsert: {
            args: Prisma.EmailClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailClientePayload>
          }
          aggregate: {
            args: Prisma.EmailClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailCliente>
          }
          groupBy: {
            args: Prisma.EmailClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailClienteCountArgs<ExtArgs>
            result: $Utils.Optional<EmailClienteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
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
      isolationLevel?: Prisma.TransactionIsolationLevel
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
    usuario?: UsuarioOmit
    rAT?: RATOmit
    cliente?: ClienteOmit
    contato?: ContatoOmit
    clienteContato?: ClienteContatoOmit
    emailCliente?: EmailClienteOmit
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    rats: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rats?: boolean | UsuarioCountOutputTypeCountRatsArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountRatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RATWhereInput
  }


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    clientesContatos: number
    emails: number
    rats: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientesContatos?: boolean | ClienteCountOutputTypeCountClientesContatosArgs
    emails?: boolean | ClienteCountOutputTypeCountEmailsArgs
    rats?: boolean | ClienteCountOutputTypeCountRatsArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountClientesContatosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteContatoWhereInput
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountEmailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailClienteWhereInput
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountRatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RATWhereInput
  }


  /**
   * Count Type ContatoCountOutputType
   */

  export type ContatoCountOutputType = {
    clientesContatos: number
    rats: number
  }

  export type ContatoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientesContatos?: boolean | ContatoCountOutputTypeCountClientesContatosArgs
    rats?: boolean | ContatoCountOutputTypeCountRatsArgs
  }

  // Custom InputTypes
  /**
   * ContatoCountOutputType without action
   */
  export type ContatoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContatoCountOutputType
     */
    select?: ContatoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContatoCountOutputType without action
   */
  export type ContatoCountOutputTypeCountClientesContatosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteContatoWhereInput
  }

  /**
   * ContatoCountOutputType without action
   */
  export type ContatoCountOutputTypeCountRatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RATWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id_usuario: number | null
    nome: string | null
    email: string | null
    senha: string | null
    funcao: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id_usuario: number | null
    nome: string | null
    email: string | null
    senha: string | null
    funcao: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id_usuario: number
    nome: number
    email: number
    senha: number
    funcao: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id_usuario?: true
  }

  export type UsuarioSumAggregateInputType = {
    id_usuario?: true
  }

  export type UsuarioMinAggregateInputType = {
    id_usuario?: true
    nome?: true
    email?: true
    senha?: true
    funcao?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id_usuario?: true
    nome?: true
    email?: true
    senha?: true
    funcao?: true
  }

  export type UsuarioCountAggregateInputType = {
    id_usuario?: true
    nome?: true
    email?: true
    senha?: true
    funcao?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id_usuario: number
    nome: string
    email: string
    senha: string
    funcao: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    funcao?: boolean
    rats?: boolean | Usuario$ratsArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    funcao?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    funcao?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id_usuario?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    funcao?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "nome" | "email" | "senha" | "funcao", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rats?: boolean | Usuario$ratsArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      rats: Prisma.$RATPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      nome: string
      email: string
      senha: string
      funcao: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id_usuario: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rats<T extends Usuario$ratsArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$ratsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RATPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id_usuario: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly funcao: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.rats
   */
  export type Usuario$ratsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RAT
     */
    select?: RATSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RAT
     */
    omit?: RATOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RATInclude<ExtArgs> | null
    where?: RATWhereInput
    orderBy?: RATOrderByWithRelationInput | RATOrderByWithRelationInput[]
    cursor?: RATWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RATScalarFieldEnum | RATScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model RAT
   */

  export type AggregateRAT = {
    _count: RATCountAggregateOutputType | null
    _avg: RATAvgAggregateOutputType | null
    _sum: RATSumAggregateOutputType | null
    _min: RATMinAggregateOutputType | null
    _max: RATMaxAggregateOutputType | null
  }

  export type RATAvgAggregateOutputType = {
    id_rat: number | null
    nr_km_ida: number | null
    nr_km_volta: number | null
    nr_valor_pedagio: number | null
    id_usuario: number | null
    id_cliente: number | null
    id_contato: number | null
  }

  export type RATSumAggregateOutputType = {
    id_rat: number | null
    nr_km_ida: number | null
    nr_km_volta: number | null
    nr_valor_pedagio: number | null
    id_usuario: number | null
    id_cliente: number | null
    id_contato: number | null
  }

  export type RATMinAggregateOutputType = {
    id_rat: number | null
    ds_status: string | null
    fl_deslocamento: string | null
    dt_data_hora_entrada: Date | null
    dt_data_hora_saida: Date | null
    tm_duracao: Date | null
    tx_comentario_interno: string | null
    ds_originada: string | null
    ds_observacao: string | null
    nr_km_ida: number | null
    nr_km_volta: number | null
    nr_valor_pedagio: number | null
    tx_atividades: string | null
    tx_tarefas: string | null
    tx_pendencias: string | null
    id_usuario: number | null
    id_cliente: number | null
    id_contato: number | null
  }

  export type RATMaxAggregateOutputType = {
    id_rat: number | null
    ds_status: string | null
    fl_deslocamento: string | null
    dt_data_hora_entrada: Date | null
    dt_data_hora_saida: Date | null
    tm_duracao: Date | null
    tx_comentario_interno: string | null
    ds_originada: string | null
    ds_observacao: string | null
    nr_km_ida: number | null
    nr_km_volta: number | null
    nr_valor_pedagio: number | null
    tx_atividades: string | null
    tx_tarefas: string | null
    tx_pendencias: string | null
    id_usuario: number | null
    id_cliente: number | null
    id_contato: number | null
  }

  export type RATCountAggregateOutputType = {
    id_rat: number
    ds_status: number
    fl_deslocamento: number
    dt_data_hora_entrada: number
    dt_data_hora_saida: number
    tm_duracao: number
    tx_comentario_interno: number
    ds_originada: number
    ds_observacao: number
    nr_km_ida: number
    nr_km_volta: number
    nr_valor_pedagio: number
    tx_atividades: number
    tx_tarefas: number
    tx_pendencias: number
    id_usuario: number
    id_cliente: number
    id_contato: number
    _all: number
  }


  export type RATAvgAggregateInputType = {
    id_rat?: true
    nr_km_ida?: true
    nr_km_volta?: true
    nr_valor_pedagio?: true
    id_usuario?: true
    id_cliente?: true
    id_contato?: true
  }

  export type RATSumAggregateInputType = {
    id_rat?: true
    nr_km_ida?: true
    nr_km_volta?: true
    nr_valor_pedagio?: true
    id_usuario?: true
    id_cliente?: true
    id_contato?: true
  }

  export type RATMinAggregateInputType = {
    id_rat?: true
    ds_status?: true
    fl_deslocamento?: true
    dt_data_hora_entrada?: true
    dt_data_hora_saida?: true
    tm_duracao?: true
    tx_comentario_interno?: true
    ds_originada?: true
    ds_observacao?: true
    nr_km_ida?: true
    nr_km_volta?: true
    nr_valor_pedagio?: true
    tx_atividades?: true
    tx_tarefas?: true
    tx_pendencias?: true
    id_usuario?: true
    id_cliente?: true
    id_contato?: true
  }

  export type RATMaxAggregateInputType = {
    id_rat?: true
    ds_status?: true
    fl_deslocamento?: true
    dt_data_hora_entrada?: true
    dt_data_hora_saida?: true
    tm_duracao?: true
    tx_comentario_interno?: true
    ds_originada?: true
    ds_observacao?: true
    nr_km_ida?: true
    nr_km_volta?: true
    nr_valor_pedagio?: true
    tx_atividades?: true
    tx_tarefas?: true
    tx_pendencias?: true
    id_usuario?: true
    id_cliente?: true
    id_contato?: true
  }

  export type RATCountAggregateInputType = {
    id_rat?: true
    ds_status?: true
    fl_deslocamento?: true
    dt_data_hora_entrada?: true
    dt_data_hora_saida?: true
    tm_duracao?: true
    tx_comentario_interno?: true
    ds_originada?: true
    ds_observacao?: true
    nr_km_ida?: true
    nr_km_volta?: true
    nr_valor_pedagio?: true
    tx_atividades?: true
    tx_tarefas?: true
    tx_pendencias?: true
    id_usuario?: true
    id_cliente?: true
    id_contato?: true
    _all?: true
  }

  export type RATAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RAT to aggregate.
     */
    where?: RATWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RATS to fetch.
     */
    orderBy?: RATOrderByWithRelationInput | RATOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RATWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RATS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RATS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RATS
    **/
    _count?: true | RATCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RATAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RATSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RATMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RATMaxAggregateInputType
  }

  export type GetRATAggregateType<T extends RATAggregateArgs> = {
        [P in keyof T & keyof AggregateRAT]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRAT[P]>
      : GetScalarType<T[P], AggregateRAT[P]>
  }




  export type RATGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RATWhereInput
    orderBy?: RATOrderByWithAggregationInput | RATOrderByWithAggregationInput[]
    by: RATScalarFieldEnum[] | RATScalarFieldEnum
    having?: RATScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RATCountAggregateInputType | true
    _avg?: RATAvgAggregateInputType
    _sum?: RATSumAggregateInputType
    _min?: RATMinAggregateInputType
    _max?: RATMaxAggregateInputType
  }

  export type RATGroupByOutputType = {
    id_rat: number
    ds_status: string
    fl_deslocamento: string
    dt_data_hora_entrada: Date
    dt_data_hora_saida: Date
    tm_duracao: Date
    tx_comentario_interno: string
    ds_originada: string
    ds_observacao: string
    nr_km_ida: number | null
    nr_km_volta: number | null
    nr_valor_pedagio: number | null
    tx_atividades: string
    tx_tarefas: string
    tx_pendencias: string
    id_usuario: number
    id_cliente: number
    id_contato: number
    _count: RATCountAggregateOutputType | null
    _avg: RATAvgAggregateOutputType | null
    _sum: RATSumAggregateOutputType | null
    _min: RATMinAggregateOutputType | null
    _max: RATMaxAggregateOutputType | null
  }

  type GetRATGroupByPayload<T extends RATGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RATGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RATGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RATGroupByOutputType[P]>
            : GetScalarType<T[P], RATGroupByOutputType[P]>
        }
      >
    >


  export type RATSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_rat?: boolean
    ds_status?: boolean
    fl_deslocamento?: boolean
    dt_data_hora_entrada?: boolean
    dt_data_hora_saida?: boolean
    tm_duracao?: boolean
    tx_comentario_interno?: boolean
    ds_originada?: boolean
    ds_observacao?: boolean
    nr_km_ida?: boolean
    nr_km_volta?: boolean
    nr_valor_pedagio?: boolean
    tx_atividades?: boolean
    tx_tarefas?: boolean
    tx_pendencias?: boolean
    id_usuario?: boolean
    id_cliente?: boolean
    id_contato?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    contato?: boolean | ContatoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rAT"]>

  export type RATSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_rat?: boolean
    ds_status?: boolean
    fl_deslocamento?: boolean
    dt_data_hora_entrada?: boolean
    dt_data_hora_saida?: boolean
    tm_duracao?: boolean
    tx_comentario_interno?: boolean
    ds_originada?: boolean
    ds_observacao?: boolean
    nr_km_ida?: boolean
    nr_km_volta?: boolean
    nr_valor_pedagio?: boolean
    tx_atividades?: boolean
    tx_tarefas?: boolean
    tx_pendencias?: boolean
    id_usuario?: boolean
    id_cliente?: boolean
    id_contato?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    contato?: boolean | ContatoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rAT"]>

  export type RATSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_rat?: boolean
    ds_status?: boolean
    fl_deslocamento?: boolean
    dt_data_hora_entrada?: boolean
    dt_data_hora_saida?: boolean
    tm_duracao?: boolean
    tx_comentario_interno?: boolean
    ds_originada?: boolean
    ds_observacao?: boolean
    nr_km_ida?: boolean
    nr_km_volta?: boolean
    nr_valor_pedagio?: boolean
    tx_atividades?: boolean
    tx_tarefas?: boolean
    tx_pendencias?: boolean
    id_usuario?: boolean
    id_cliente?: boolean
    id_contato?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    contato?: boolean | ContatoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rAT"]>

  export type RATSelectScalar = {
    id_rat?: boolean
    ds_status?: boolean
    fl_deslocamento?: boolean
    dt_data_hora_entrada?: boolean
    dt_data_hora_saida?: boolean
    tm_duracao?: boolean
    tx_comentario_interno?: boolean
    ds_originada?: boolean
    ds_observacao?: boolean
    nr_km_ida?: boolean
    nr_km_volta?: boolean
    nr_valor_pedagio?: boolean
    tx_atividades?: boolean
    tx_tarefas?: boolean
    tx_pendencias?: boolean
    id_usuario?: boolean
    id_cliente?: boolean
    id_contato?: boolean
  }

  export type RATOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_rat" | "ds_status" | "fl_deslocamento" | "dt_data_hora_entrada" | "dt_data_hora_saida" | "tm_duracao" | "tx_comentario_interno" | "ds_originada" | "ds_observacao" | "nr_km_ida" | "nr_km_volta" | "nr_valor_pedagio" | "tx_atividades" | "tx_tarefas" | "tx_pendencias" | "id_usuario" | "id_cliente" | "id_contato", ExtArgs["result"]["rAT"]>
  export type RATInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    contato?: boolean | ContatoDefaultArgs<ExtArgs>
  }
  export type RATIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    contato?: boolean | ContatoDefaultArgs<ExtArgs>
  }
  export type RATIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    contato?: boolean | ContatoDefaultArgs<ExtArgs>
  }

  export type $RATPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RAT"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      cliente: Prisma.$ClientePayload<ExtArgs>
      contato: Prisma.$ContatoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_rat: number
      ds_status: string
      fl_deslocamento: string
      dt_data_hora_entrada: Date
      dt_data_hora_saida: Date
      tm_duracao: Date
      tx_comentario_interno: string
      ds_originada: string
      ds_observacao: string
      nr_km_ida: number | null
      nr_km_volta: number | null
      nr_valor_pedagio: number | null
      tx_atividades: string
      tx_tarefas: string
      tx_pendencias: string
      id_usuario: number
      id_cliente: number
      id_contato: number
    }, ExtArgs["result"]["rAT"]>
    composites: {}
  }

  type RATGetPayload<S extends boolean | null | undefined | RATDefaultArgs> = $Result.GetResult<Prisma.$RATPayload, S>

  type RATCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RATFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RATCountAggregateInputType | true
    }

  export interface RATDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RAT'], meta: { name: 'RAT' } }
    /**
     * Find zero or one RAT that matches the filter.
     * @param {RATFindUniqueArgs} args - Arguments to find a RAT
     * @example
     * // Get one RAT
     * const rAT = await prisma.rAT.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RATFindUniqueArgs>(args: SelectSubset<T, RATFindUniqueArgs<ExtArgs>>): Prisma__RATClient<$Result.GetResult<Prisma.$RATPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RAT that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RATFindUniqueOrThrowArgs} args - Arguments to find a RAT
     * @example
     * // Get one RAT
     * const rAT = await prisma.rAT.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RATFindUniqueOrThrowArgs>(args: SelectSubset<T, RATFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RATClient<$Result.GetResult<Prisma.$RATPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RAT that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RATFindFirstArgs} args - Arguments to find a RAT
     * @example
     * // Get one RAT
     * const rAT = await prisma.rAT.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RATFindFirstArgs>(args?: SelectSubset<T, RATFindFirstArgs<ExtArgs>>): Prisma__RATClient<$Result.GetResult<Prisma.$RATPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RAT that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RATFindFirstOrThrowArgs} args - Arguments to find a RAT
     * @example
     * // Get one RAT
     * const rAT = await prisma.rAT.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RATFindFirstOrThrowArgs>(args?: SelectSubset<T, RATFindFirstOrThrowArgs<ExtArgs>>): Prisma__RATClient<$Result.GetResult<Prisma.$RATPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RATS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RATFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RATS
     * const rATS = await prisma.rAT.findMany()
     * 
     * // Get first 10 RATS
     * const rATS = await prisma.rAT.findMany({ take: 10 })
     * 
     * // Only select the `id_rat`
     * const rATWithId_ratOnly = await prisma.rAT.findMany({ select: { id_rat: true } })
     * 
     */
    findMany<T extends RATFindManyArgs>(args?: SelectSubset<T, RATFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RATPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RAT.
     * @param {RATCreateArgs} args - Arguments to create a RAT.
     * @example
     * // Create one RAT
     * const RAT = await prisma.rAT.create({
     *   data: {
     *     // ... data to create a RAT
     *   }
     * })
     * 
     */
    create<T extends RATCreateArgs>(args: SelectSubset<T, RATCreateArgs<ExtArgs>>): Prisma__RATClient<$Result.GetResult<Prisma.$RATPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RATS.
     * @param {RATCreateManyArgs} args - Arguments to create many RATS.
     * @example
     * // Create many RATS
     * const rAT = await prisma.rAT.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RATCreateManyArgs>(args?: SelectSubset<T, RATCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RATS and returns the data saved in the database.
     * @param {RATCreateManyAndReturnArgs} args - Arguments to create many RATS.
     * @example
     * // Create many RATS
     * const rAT = await prisma.rAT.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RATS and only return the `id_rat`
     * const rATWithId_ratOnly = await prisma.rAT.createManyAndReturn({
     *   select: { id_rat: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RATCreateManyAndReturnArgs>(args?: SelectSubset<T, RATCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RATPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RAT.
     * @param {RATDeleteArgs} args - Arguments to delete one RAT.
     * @example
     * // Delete one RAT
     * const RAT = await prisma.rAT.delete({
     *   where: {
     *     // ... filter to delete one RAT
     *   }
     * })
     * 
     */
    delete<T extends RATDeleteArgs>(args: SelectSubset<T, RATDeleteArgs<ExtArgs>>): Prisma__RATClient<$Result.GetResult<Prisma.$RATPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RAT.
     * @param {RATUpdateArgs} args - Arguments to update one RAT.
     * @example
     * // Update one RAT
     * const rAT = await prisma.rAT.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RATUpdateArgs>(args: SelectSubset<T, RATUpdateArgs<ExtArgs>>): Prisma__RATClient<$Result.GetResult<Prisma.$RATPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RATS.
     * @param {RATDeleteManyArgs} args - Arguments to filter RATS to delete.
     * @example
     * // Delete a few RATS
     * const { count } = await prisma.rAT.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RATDeleteManyArgs>(args?: SelectSubset<T, RATDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RATS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RATUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RATS
     * const rAT = await prisma.rAT.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RATUpdateManyArgs>(args: SelectSubset<T, RATUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RATS and returns the data updated in the database.
     * @param {RATUpdateManyAndReturnArgs} args - Arguments to update many RATS.
     * @example
     * // Update many RATS
     * const rAT = await prisma.rAT.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RATS and only return the `id_rat`
     * const rATWithId_ratOnly = await prisma.rAT.updateManyAndReturn({
     *   select: { id_rat: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RATUpdateManyAndReturnArgs>(args: SelectSubset<T, RATUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RATPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RAT.
     * @param {RATUpsertArgs} args - Arguments to update or create a RAT.
     * @example
     * // Update or create a RAT
     * const rAT = await prisma.rAT.upsert({
     *   create: {
     *     // ... data to create a RAT
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RAT we want to update
     *   }
     * })
     */
    upsert<T extends RATUpsertArgs>(args: SelectSubset<T, RATUpsertArgs<ExtArgs>>): Prisma__RATClient<$Result.GetResult<Prisma.$RATPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RATS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RATCountArgs} args - Arguments to filter RATS to count.
     * @example
     * // Count the number of RATS
     * const count = await prisma.rAT.count({
     *   where: {
     *     // ... the filter for the RATS we want to count
     *   }
     * })
    **/
    count<T extends RATCountArgs>(
      args?: Subset<T, RATCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RATCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RAT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RATAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RATAggregateArgs>(args: Subset<T, RATAggregateArgs>): Prisma.PrismaPromise<GetRATAggregateType<T>>

    /**
     * Group by RAT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RATGroupByArgs} args - Group by arguments.
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
      T extends RATGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RATGroupByArgs['orderBy'] }
        : { orderBy?: RATGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RATGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRATGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RAT model
   */
  readonly fields: RATFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RAT.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RATClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contato<T extends ContatoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContatoDefaultArgs<ExtArgs>>): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RAT model
   */
  interface RATFieldRefs {
    readonly id_rat: FieldRef<"RAT", 'Int'>
    readonly ds_status: FieldRef<"RAT", 'String'>
    readonly fl_deslocamento: FieldRef<"RAT", 'String'>
    readonly dt_data_hora_entrada: FieldRef<"RAT", 'DateTime'>
    readonly dt_data_hora_saida: FieldRef<"RAT", 'DateTime'>
    readonly tm_duracao: FieldRef<"RAT", 'DateTime'>
    readonly tx_comentario_interno: FieldRef<"RAT", 'String'>
    readonly ds_originada: FieldRef<"RAT", 'String'>
    readonly ds_observacao: FieldRef<"RAT", 'String'>
    readonly nr_km_ida: FieldRef<"RAT", 'Int'>
    readonly nr_km_volta: FieldRef<"RAT", 'Int'>
    readonly nr_valor_pedagio: FieldRef<"RAT", 'Float'>
    readonly tx_atividades: FieldRef<"RAT", 'String'>
    readonly tx_tarefas: FieldRef<"RAT", 'String'>
    readonly tx_pendencias: FieldRef<"RAT", 'String'>
    readonly id_usuario: FieldRef<"RAT", 'Int'>
    readonly id_cliente: FieldRef<"RAT", 'Int'>
    readonly id_contato: FieldRef<"RAT", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RAT findUnique
   */
  export type RATFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RAT
     */
    select?: RATSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RAT
     */
    omit?: RATOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RATInclude<ExtArgs> | null
    /**
     * Filter, which RAT to fetch.
     */
    where: RATWhereUniqueInput
  }

  /**
   * RAT findUniqueOrThrow
   */
  export type RATFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RAT
     */
    select?: RATSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RAT
     */
    omit?: RATOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RATInclude<ExtArgs> | null
    /**
     * Filter, which RAT to fetch.
     */
    where: RATWhereUniqueInput
  }

  /**
   * RAT findFirst
   */
  export type RATFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RAT
     */
    select?: RATSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RAT
     */
    omit?: RATOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RATInclude<ExtArgs> | null
    /**
     * Filter, which RAT to fetch.
     */
    where?: RATWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RATS to fetch.
     */
    orderBy?: RATOrderByWithRelationInput | RATOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RATS.
     */
    cursor?: RATWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RATS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RATS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RATS.
     */
    distinct?: RATScalarFieldEnum | RATScalarFieldEnum[]
  }

  /**
   * RAT findFirstOrThrow
   */
  export type RATFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RAT
     */
    select?: RATSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RAT
     */
    omit?: RATOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RATInclude<ExtArgs> | null
    /**
     * Filter, which RAT to fetch.
     */
    where?: RATWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RATS to fetch.
     */
    orderBy?: RATOrderByWithRelationInput | RATOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RATS.
     */
    cursor?: RATWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RATS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RATS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RATS.
     */
    distinct?: RATScalarFieldEnum | RATScalarFieldEnum[]
  }

  /**
   * RAT findMany
   */
  export type RATFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RAT
     */
    select?: RATSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RAT
     */
    omit?: RATOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RATInclude<ExtArgs> | null
    /**
     * Filter, which RATS to fetch.
     */
    where?: RATWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RATS to fetch.
     */
    orderBy?: RATOrderByWithRelationInput | RATOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RATS.
     */
    cursor?: RATWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RATS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RATS.
     */
    skip?: number
    distinct?: RATScalarFieldEnum | RATScalarFieldEnum[]
  }

  /**
   * RAT create
   */
  export type RATCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RAT
     */
    select?: RATSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RAT
     */
    omit?: RATOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RATInclude<ExtArgs> | null
    /**
     * The data needed to create a RAT.
     */
    data: XOR<RATCreateInput, RATUncheckedCreateInput>
  }

  /**
   * RAT createMany
   */
  export type RATCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RATS.
     */
    data: RATCreateManyInput | RATCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RAT createManyAndReturn
   */
  export type RATCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RAT
     */
    select?: RATSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RAT
     */
    omit?: RATOmit<ExtArgs> | null
    /**
     * The data used to create many RATS.
     */
    data: RATCreateManyInput | RATCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RATIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RAT update
   */
  export type RATUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RAT
     */
    select?: RATSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RAT
     */
    omit?: RATOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RATInclude<ExtArgs> | null
    /**
     * The data needed to update a RAT.
     */
    data: XOR<RATUpdateInput, RATUncheckedUpdateInput>
    /**
     * Choose, which RAT to update.
     */
    where: RATWhereUniqueInput
  }

  /**
   * RAT updateMany
   */
  export type RATUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RATS.
     */
    data: XOR<RATUpdateManyMutationInput, RATUncheckedUpdateManyInput>
    /**
     * Filter which RATS to update
     */
    where?: RATWhereInput
    /**
     * Limit how many RATS to update.
     */
    limit?: number
  }

  /**
   * RAT updateManyAndReturn
   */
  export type RATUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RAT
     */
    select?: RATSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RAT
     */
    omit?: RATOmit<ExtArgs> | null
    /**
     * The data used to update RATS.
     */
    data: XOR<RATUpdateManyMutationInput, RATUncheckedUpdateManyInput>
    /**
     * Filter which RATS to update
     */
    where?: RATWhereInput
    /**
     * Limit how many RATS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RATIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RAT upsert
   */
  export type RATUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RAT
     */
    select?: RATSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RAT
     */
    omit?: RATOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RATInclude<ExtArgs> | null
    /**
     * The filter to search for the RAT to update in case it exists.
     */
    where: RATWhereUniqueInput
    /**
     * In case the RAT found by the `where` argument doesn't exist, create a new RAT with this data.
     */
    create: XOR<RATCreateInput, RATUncheckedCreateInput>
    /**
     * In case the RAT was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RATUpdateInput, RATUncheckedUpdateInput>
  }

  /**
   * RAT delete
   */
  export type RATDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RAT
     */
    select?: RATSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RAT
     */
    omit?: RATOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RATInclude<ExtArgs> | null
    /**
     * Filter which RAT to delete.
     */
    where: RATWhereUniqueInput
  }

  /**
   * RAT deleteMany
   */
  export type RATDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RATS to delete
     */
    where?: RATWhereInput
    /**
     * Limit how many RATS to delete.
     */
    limit?: number
  }

  /**
   * RAT without action
   */
  export type RATDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RAT
     */
    select?: RATSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RAT
     */
    omit?: RATOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RATInclude<ExtArgs> | null
  }


  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id_cliente: number | null
    nr_latitude: number | null
    nr_longitude: number | null
    nr_distancia_km: number | null
    nr_nomeados: number | null
    nr_simultaneos: number | null
    nr_tecnica_remoto: number | null
    nr_tecnica_presencial: number | null
    nr_codigo_zz: number | null
    nr_franquia_nf: number | null
    nr_qtde_documentos: number | null
    nr_valor_franqia: number | null
    nr_valor_excendente: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id_cliente: number | null
    nr_latitude: number | null
    nr_longitude: number | null
    nr_distancia_km: number | null
    nr_nomeados: number | null
    nr_simultaneos: number | null
    nr_tecnica_remoto: number | null
    nr_tecnica_presencial: number | null
    nr_codigo_zz: number | null
    nr_franquia_nf: number | null
    nr_qtde_documentos: number | null
    nr_valor_franqia: number | null
    nr_valor_excendente: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id_cliente: number | null
    fl_ativo: boolean | null
    ds_nome: string | null
    ds_razao_social: string | null
    nr_cnpj: string | null
    nr_inscricao_estadual: string | null
    ds_site: string | null
    ds_endereco: string | null
    ds_cep: string | null
    ds_uf: string | null
    ds_cidade: string | null
    ds_bairro: string | null
    nr_numero: string | null
    ds_complemento: string | null
    nr_codigo_ibge: string | null
    nr_latitude: number | null
    nr_longitude: number | null
    nr_distancia_km: number | null
    tx_observacao_ident: string | null
    fl_matriz: boolean | null
    ds_situacao: string | null
    ds_sistema: string | null
    ds_contrato: string | null
    nr_nomeados: number | null
    nr_simultaneos: number | null
    nr_tecnica_remoto: number | null
    nr_tecnica_presencial: number | null
    tm_minimo_horas: Date | null
    ds_diario_viagem: string | null
    ds_regiao: string | null
    tx_observacao_contrato: string | null
    nr_codigo_zz: number | null
    nr_franquia_nf: number | null
    nr_qtde_documentos: number | null
    nr_valor_franqia: number | null
    nr_valor_excendente: number | null
    dt_data_contrato: Date | null
  }

  export type ClienteMaxAggregateOutputType = {
    id_cliente: number | null
    fl_ativo: boolean | null
    ds_nome: string | null
    ds_razao_social: string | null
    nr_cnpj: string | null
    nr_inscricao_estadual: string | null
    ds_site: string | null
    ds_endereco: string | null
    ds_cep: string | null
    ds_uf: string | null
    ds_cidade: string | null
    ds_bairro: string | null
    nr_numero: string | null
    ds_complemento: string | null
    nr_codigo_ibge: string | null
    nr_latitude: number | null
    nr_longitude: number | null
    nr_distancia_km: number | null
    tx_observacao_ident: string | null
    fl_matriz: boolean | null
    ds_situacao: string | null
    ds_sistema: string | null
    ds_contrato: string | null
    nr_nomeados: number | null
    nr_simultaneos: number | null
    nr_tecnica_remoto: number | null
    nr_tecnica_presencial: number | null
    tm_minimo_horas: Date | null
    ds_diario_viagem: string | null
    ds_regiao: string | null
    tx_observacao_contrato: string | null
    nr_codigo_zz: number | null
    nr_franquia_nf: number | null
    nr_qtde_documentos: number | null
    nr_valor_franqia: number | null
    nr_valor_excendente: number | null
    dt_data_contrato: Date | null
  }

  export type ClienteCountAggregateOutputType = {
    id_cliente: number
    fl_ativo: number
    ds_nome: number
    ds_razao_social: number
    nr_cnpj: number
    nr_inscricao_estadual: number
    ds_site: number
    ds_endereco: number
    ds_cep: number
    ds_uf: number
    ds_cidade: number
    ds_bairro: number
    nr_numero: number
    ds_complemento: number
    nr_codigo_ibge: number
    nr_latitude: number
    nr_longitude: number
    nr_distancia_km: number
    tx_observacao_ident: number
    fl_matriz: number
    ds_situacao: number
    ds_sistema: number
    ds_contrato: number
    nr_nomeados: number
    nr_simultaneos: number
    nr_tecnica_remoto: number
    nr_tecnica_presencial: number
    tm_minimo_horas: number
    ds_diario_viagem: number
    ds_regiao: number
    tx_observacao_contrato: number
    nr_codigo_zz: number
    nr_franquia_nf: number
    nr_qtde_documentos: number
    nr_valor_franqia: number
    nr_valor_excendente: number
    dt_data_contrato: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id_cliente?: true
    nr_latitude?: true
    nr_longitude?: true
    nr_distancia_km?: true
    nr_nomeados?: true
    nr_simultaneos?: true
    nr_tecnica_remoto?: true
    nr_tecnica_presencial?: true
    nr_codigo_zz?: true
    nr_franquia_nf?: true
    nr_qtde_documentos?: true
    nr_valor_franqia?: true
    nr_valor_excendente?: true
  }

  export type ClienteSumAggregateInputType = {
    id_cliente?: true
    nr_latitude?: true
    nr_longitude?: true
    nr_distancia_km?: true
    nr_nomeados?: true
    nr_simultaneos?: true
    nr_tecnica_remoto?: true
    nr_tecnica_presencial?: true
    nr_codigo_zz?: true
    nr_franquia_nf?: true
    nr_qtde_documentos?: true
    nr_valor_franqia?: true
    nr_valor_excendente?: true
  }

  export type ClienteMinAggregateInputType = {
    id_cliente?: true
    fl_ativo?: true
    ds_nome?: true
    ds_razao_social?: true
    nr_cnpj?: true
    nr_inscricao_estadual?: true
    ds_site?: true
    ds_endereco?: true
    ds_cep?: true
    ds_uf?: true
    ds_cidade?: true
    ds_bairro?: true
    nr_numero?: true
    ds_complemento?: true
    nr_codigo_ibge?: true
    nr_latitude?: true
    nr_longitude?: true
    nr_distancia_km?: true
    tx_observacao_ident?: true
    fl_matriz?: true
    ds_situacao?: true
    ds_sistema?: true
    ds_contrato?: true
    nr_nomeados?: true
    nr_simultaneos?: true
    nr_tecnica_remoto?: true
    nr_tecnica_presencial?: true
    tm_minimo_horas?: true
    ds_diario_viagem?: true
    ds_regiao?: true
    tx_observacao_contrato?: true
    nr_codigo_zz?: true
    nr_franquia_nf?: true
    nr_qtde_documentos?: true
    nr_valor_franqia?: true
    nr_valor_excendente?: true
    dt_data_contrato?: true
  }

  export type ClienteMaxAggregateInputType = {
    id_cliente?: true
    fl_ativo?: true
    ds_nome?: true
    ds_razao_social?: true
    nr_cnpj?: true
    nr_inscricao_estadual?: true
    ds_site?: true
    ds_endereco?: true
    ds_cep?: true
    ds_uf?: true
    ds_cidade?: true
    ds_bairro?: true
    nr_numero?: true
    ds_complemento?: true
    nr_codigo_ibge?: true
    nr_latitude?: true
    nr_longitude?: true
    nr_distancia_km?: true
    tx_observacao_ident?: true
    fl_matriz?: true
    ds_situacao?: true
    ds_sistema?: true
    ds_contrato?: true
    nr_nomeados?: true
    nr_simultaneos?: true
    nr_tecnica_remoto?: true
    nr_tecnica_presencial?: true
    tm_minimo_horas?: true
    ds_diario_viagem?: true
    ds_regiao?: true
    tx_observacao_contrato?: true
    nr_codigo_zz?: true
    nr_franquia_nf?: true
    nr_qtde_documentos?: true
    nr_valor_franqia?: true
    nr_valor_excendente?: true
    dt_data_contrato?: true
  }

  export type ClienteCountAggregateInputType = {
    id_cliente?: true
    fl_ativo?: true
    ds_nome?: true
    ds_razao_social?: true
    nr_cnpj?: true
    nr_inscricao_estadual?: true
    ds_site?: true
    ds_endereco?: true
    ds_cep?: true
    ds_uf?: true
    ds_cidade?: true
    ds_bairro?: true
    nr_numero?: true
    ds_complemento?: true
    nr_codigo_ibge?: true
    nr_latitude?: true
    nr_longitude?: true
    nr_distancia_km?: true
    tx_observacao_ident?: true
    fl_matriz?: true
    ds_situacao?: true
    ds_sistema?: true
    ds_contrato?: true
    nr_nomeados?: true
    nr_simultaneos?: true
    nr_tecnica_remoto?: true
    nr_tecnica_presencial?: true
    tm_minimo_horas?: true
    ds_diario_viagem?: true
    ds_regiao?: true
    tx_observacao_contrato?: true
    nr_codigo_zz?: true
    nr_franquia_nf?: true
    nr_qtde_documentos?: true
    nr_valor_franqia?: true
    nr_valor_excendente?: true
    dt_data_contrato?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id_cliente: number
    fl_ativo: boolean
    ds_nome: string
    ds_razao_social: string
    nr_cnpj: string
    nr_inscricao_estadual: string
    ds_site: string | null
    ds_endereco: string
    ds_cep: string
    ds_uf: string
    ds_cidade: string
    ds_bairro: string
    nr_numero: string
    ds_complemento: string | null
    nr_codigo_ibge: string | null
    nr_latitude: number | null
    nr_longitude: number | null
    nr_distancia_km: number | null
    tx_observacao_ident: string | null
    fl_matriz: boolean
    ds_situacao: string
    ds_sistema: string
    ds_contrato: string
    nr_nomeados: number
    nr_simultaneos: number
    nr_tecnica_remoto: number | null
    nr_tecnica_presencial: number | null
    tm_minimo_horas: Date
    ds_diario_viagem: string
    ds_regiao: string
    tx_observacao_contrato: string
    nr_codigo_zz: number
    nr_franquia_nf: number
    nr_qtde_documentos: number
    nr_valor_franqia: number
    nr_valor_excendente: number
    dt_data_contrato: Date
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cliente?: boolean
    fl_ativo?: boolean
    ds_nome?: boolean
    ds_razao_social?: boolean
    nr_cnpj?: boolean
    nr_inscricao_estadual?: boolean
    ds_site?: boolean
    ds_endereco?: boolean
    ds_cep?: boolean
    ds_uf?: boolean
    ds_cidade?: boolean
    ds_bairro?: boolean
    nr_numero?: boolean
    ds_complemento?: boolean
    nr_codigo_ibge?: boolean
    nr_latitude?: boolean
    nr_longitude?: boolean
    nr_distancia_km?: boolean
    tx_observacao_ident?: boolean
    fl_matriz?: boolean
    ds_situacao?: boolean
    ds_sistema?: boolean
    ds_contrato?: boolean
    nr_nomeados?: boolean
    nr_simultaneos?: boolean
    nr_tecnica_remoto?: boolean
    nr_tecnica_presencial?: boolean
    tm_minimo_horas?: boolean
    ds_diario_viagem?: boolean
    ds_regiao?: boolean
    tx_observacao_contrato?: boolean
    nr_codigo_zz?: boolean
    nr_franquia_nf?: boolean
    nr_qtde_documentos?: boolean
    nr_valor_franqia?: boolean
    nr_valor_excendente?: boolean
    dt_data_contrato?: boolean
    clientesContatos?: boolean | Cliente$clientesContatosArgs<ExtArgs>
    emails?: boolean | Cliente$emailsArgs<ExtArgs>
    rats?: boolean | Cliente$ratsArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cliente?: boolean
    fl_ativo?: boolean
    ds_nome?: boolean
    ds_razao_social?: boolean
    nr_cnpj?: boolean
    nr_inscricao_estadual?: boolean
    ds_site?: boolean
    ds_endereco?: boolean
    ds_cep?: boolean
    ds_uf?: boolean
    ds_cidade?: boolean
    ds_bairro?: boolean
    nr_numero?: boolean
    ds_complemento?: boolean
    nr_codigo_ibge?: boolean
    nr_latitude?: boolean
    nr_longitude?: boolean
    nr_distancia_km?: boolean
    tx_observacao_ident?: boolean
    fl_matriz?: boolean
    ds_situacao?: boolean
    ds_sistema?: boolean
    ds_contrato?: boolean
    nr_nomeados?: boolean
    nr_simultaneos?: boolean
    nr_tecnica_remoto?: boolean
    nr_tecnica_presencial?: boolean
    tm_minimo_horas?: boolean
    ds_diario_viagem?: boolean
    ds_regiao?: boolean
    tx_observacao_contrato?: boolean
    nr_codigo_zz?: boolean
    nr_franquia_nf?: boolean
    nr_qtde_documentos?: boolean
    nr_valor_franqia?: boolean
    nr_valor_excendente?: boolean
    dt_data_contrato?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cliente?: boolean
    fl_ativo?: boolean
    ds_nome?: boolean
    ds_razao_social?: boolean
    nr_cnpj?: boolean
    nr_inscricao_estadual?: boolean
    ds_site?: boolean
    ds_endereco?: boolean
    ds_cep?: boolean
    ds_uf?: boolean
    ds_cidade?: boolean
    ds_bairro?: boolean
    nr_numero?: boolean
    ds_complemento?: boolean
    nr_codigo_ibge?: boolean
    nr_latitude?: boolean
    nr_longitude?: boolean
    nr_distancia_km?: boolean
    tx_observacao_ident?: boolean
    fl_matriz?: boolean
    ds_situacao?: boolean
    ds_sistema?: boolean
    ds_contrato?: boolean
    nr_nomeados?: boolean
    nr_simultaneos?: boolean
    nr_tecnica_remoto?: boolean
    nr_tecnica_presencial?: boolean
    tm_minimo_horas?: boolean
    ds_diario_viagem?: boolean
    ds_regiao?: boolean
    tx_observacao_contrato?: boolean
    nr_codigo_zz?: boolean
    nr_franquia_nf?: boolean
    nr_qtde_documentos?: boolean
    nr_valor_franqia?: boolean
    nr_valor_excendente?: boolean
    dt_data_contrato?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    id_cliente?: boolean
    fl_ativo?: boolean
    ds_nome?: boolean
    ds_razao_social?: boolean
    nr_cnpj?: boolean
    nr_inscricao_estadual?: boolean
    ds_site?: boolean
    ds_endereco?: boolean
    ds_cep?: boolean
    ds_uf?: boolean
    ds_cidade?: boolean
    ds_bairro?: boolean
    nr_numero?: boolean
    ds_complemento?: boolean
    nr_codigo_ibge?: boolean
    nr_latitude?: boolean
    nr_longitude?: boolean
    nr_distancia_km?: boolean
    tx_observacao_ident?: boolean
    fl_matriz?: boolean
    ds_situacao?: boolean
    ds_sistema?: boolean
    ds_contrato?: boolean
    nr_nomeados?: boolean
    nr_simultaneos?: boolean
    nr_tecnica_remoto?: boolean
    nr_tecnica_presencial?: boolean
    tm_minimo_horas?: boolean
    ds_diario_viagem?: boolean
    ds_regiao?: boolean
    tx_observacao_contrato?: boolean
    nr_codigo_zz?: boolean
    nr_franquia_nf?: boolean
    nr_qtde_documentos?: boolean
    nr_valor_franqia?: boolean
    nr_valor_excendente?: boolean
    dt_data_contrato?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_cliente" | "fl_ativo" | "ds_nome" | "ds_razao_social" | "nr_cnpj" | "nr_inscricao_estadual" | "ds_site" | "ds_endereco" | "ds_cep" | "ds_uf" | "ds_cidade" | "ds_bairro" | "nr_numero" | "ds_complemento" | "nr_codigo_ibge" | "nr_latitude" | "nr_longitude" | "nr_distancia_km" | "tx_observacao_ident" | "fl_matriz" | "ds_situacao" | "ds_sistema" | "ds_contrato" | "nr_nomeados" | "nr_simultaneos" | "nr_tecnica_remoto" | "nr_tecnica_presencial" | "tm_minimo_horas" | "ds_diario_viagem" | "ds_regiao" | "tx_observacao_contrato" | "nr_codigo_zz" | "nr_franquia_nf" | "nr_qtde_documentos" | "nr_valor_franqia" | "nr_valor_excendente" | "dt_data_contrato", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientesContatos?: boolean | Cliente$clientesContatosArgs<ExtArgs>
    emails?: boolean | Cliente$emailsArgs<ExtArgs>
    rats?: boolean | Cliente$ratsArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      clientesContatos: Prisma.$ClienteContatoPayload<ExtArgs>[]
      emails: Prisma.$EmailClientePayload<ExtArgs>[]
      rats: Prisma.$RATPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_cliente: number
      fl_ativo: boolean
      ds_nome: string
      ds_razao_social: string
      nr_cnpj: string
      nr_inscricao_estadual: string
      ds_site: string | null
      ds_endereco: string
      ds_cep: string
      ds_uf: string
      ds_cidade: string
      ds_bairro: string
      nr_numero: string
      ds_complemento: string | null
      nr_codigo_ibge: string | null
      nr_latitude: number | null
      nr_longitude: number | null
      nr_distancia_km: number | null
      tx_observacao_ident: string | null
      fl_matriz: boolean
      ds_situacao: string
      ds_sistema: string
      ds_contrato: string
      nr_nomeados: number
      nr_simultaneos: number
      nr_tecnica_remoto: number | null
      nr_tecnica_presencial: number | null
      tm_minimo_horas: Date
      ds_diario_viagem: string
      ds_regiao: string
      tx_observacao_contrato: string
      nr_codigo_zz: number
      nr_franquia_nf: number
      nr_qtde_documentos: number
      nr_valor_franqia: number
      nr_valor_excendente: number
      dt_data_contrato: Date
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id_cliente`
     * const clienteWithId_clienteOnly = await prisma.cliente.findMany({ select: { id_cliente: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id_cliente`
     * const clienteWithId_clienteOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id_cliente: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id_cliente`
     * const clienteWithId_clienteOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { id_cliente: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
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
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clientesContatos<T extends Cliente$clientesContatosArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$clientesContatosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClienteContatoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    emails<T extends Cliente$emailsArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$emailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rats<T extends Cliente$ratsArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$ratsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RATPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id_cliente: FieldRef<"Cliente", 'Int'>
    readonly fl_ativo: FieldRef<"Cliente", 'Boolean'>
    readonly ds_nome: FieldRef<"Cliente", 'String'>
    readonly ds_razao_social: FieldRef<"Cliente", 'String'>
    readonly nr_cnpj: FieldRef<"Cliente", 'String'>
    readonly nr_inscricao_estadual: FieldRef<"Cliente", 'String'>
    readonly ds_site: FieldRef<"Cliente", 'String'>
    readonly ds_endereco: FieldRef<"Cliente", 'String'>
    readonly ds_cep: FieldRef<"Cliente", 'String'>
    readonly ds_uf: FieldRef<"Cliente", 'String'>
    readonly ds_cidade: FieldRef<"Cliente", 'String'>
    readonly ds_bairro: FieldRef<"Cliente", 'String'>
    readonly nr_numero: FieldRef<"Cliente", 'String'>
    readonly ds_complemento: FieldRef<"Cliente", 'String'>
    readonly nr_codigo_ibge: FieldRef<"Cliente", 'String'>
    readonly nr_latitude: FieldRef<"Cliente", 'Float'>
    readonly nr_longitude: FieldRef<"Cliente", 'Float'>
    readonly nr_distancia_km: FieldRef<"Cliente", 'Float'>
    readonly tx_observacao_ident: FieldRef<"Cliente", 'String'>
    readonly fl_matriz: FieldRef<"Cliente", 'Boolean'>
    readonly ds_situacao: FieldRef<"Cliente", 'String'>
    readonly ds_sistema: FieldRef<"Cliente", 'String'>
    readonly ds_contrato: FieldRef<"Cliente", 'String'>
    readonly nr_nomeados: FieldRef<"Cliente", 'Int'>
    readonly nr_simultaneos: FieldRef<"Cliente", 'Int'>
    readonly nr_tecnica_remoto: FieldRef<"Cliente", 'Float'>
    readonly nr_tecnica_presencial: FieldRef<"Cliente", 'Float'>
    readonly tm_minimo_horas: FieldRef<"Cliente", 'DateTime'>
    readonly ds_diario_viagem: FieldRef<"Cliente", 'String'>
    readonly ds_regiao: FieldRef<"Cliente", 'String'>
    readonly tx_observacao_contrato: FieldRef<"Cliente", 'String'>
    readonly nr_codigo_zz: FieldRef<"Cliente", 'Int'>
    readonly nr_franquia_nf: FieldRef<"Cliente", 'Float'>
    readonly nr_qtde_documentos: FieldRef<"Cliente", 'Int'>
    readonly nr_valor_franqia: FieldRef<"Cliente", 'Float'>
    readonly nr_valor_excendente: FieldRef<"Cliente", 'Float'>
    readonly dt_data_contrato: FieldRef<"Cliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.clientesContatos
   */
  export type Cliente$clientesContatosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteContato
     */
    select?: ClienteContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClienteContato
     */
    omit?: ClienteContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteContatoInclude<ExtArgs> | null
    where?: ClienteContatoWhereInput
    orderBy?: ClienteContatoOrderByWithRelationInput | ClienteContatoOrderByWithRelationInput[]
    cursor?: ClienteContatoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClienteContatoScalarFieldEnum | ClienteContatoScalarFieldEnum[]
  }

  /**
   * Cliente.emails
   */
  export type Cliente$emailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailCliente
     */
    select?: EmailClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailCliente
     */
    omit?: EmailClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailClienteInclude<ExtArgs> | null
    where?: EmailClienteWhereInput
    orderBy?: EmailClienteOrderByWithRelationInput | EmailClienteOrderByWithRelationInput[]
    cursor?: EmailClienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailClienteScalarFieldEnum | EmailClienteScalarFieldEnum[]
  }

  /**
   * Cliente.rats
   */
  export type Cliente$ratsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RAT
     */
    select?: RATSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RAT
     */
    omit?: RATOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RATInclude<ExtArgs> | null
    where?: RATWhereInput
    orderBy?: RATOrderByWithRelationInput | RATOrderByWithRelationInput[]
    cursor?: RATWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RATScalarFieldEnum | RATScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Contato
   */

  export type AggregateContato = {
    _count: ContatoCountAggregateOutputType | null
    _avg: ContatoAvgAggregateOutputType | null
    _sum: ContatoSumAggregateOutputType | null
    _min: ContatoMinAggregateOutputType | null
    _max: ContatoMaxAggregateOutputType | null
  }

  export type ContatoAvgAggregateOutputType = {
    id_contato: number | null
  }

  export type ContatoSumAggregateOutputType = {
    id_contato: number | null
  }

  export type ContatoMinAggregateOutputType = {
    id_contato: number | null
    ds_nome: string | null
    ds_cargo: string | null
    fl_ativo: boolean | null
    tx_observacoes: string | null
    ds_email: string | null
    ds_telefone: string | null
    fl_whatsapp: boolean | null
  }

  export type ContatoMaxAggregateOutputType = {
    id_contato: number | null
    ds_nome: string | null
    ds_cargo: string | null
    fl_ativo: boolean | null
    tx_observacoes: string | null
    ds_email: string | null
    ds_telefone: string | null
    fl_whatsapp: boolean | null
  }

  export type ContatoCountAggregateOutputType = {
    id_contato: number
    ds_nome: number
    ds_cargo: number
    fl_ativo: number
    tx_observacoes: number
    ds_email: number
    ds_telefone: number
    fl_whatsapp: number
    _all: number
  }


  export type ContatoAvgAggregateInputType = {
    id_contato?: true
  }

  export type ContatoSumAggregateInputType = {
    id_contato?: true
  }

  export type ContatoMinAggregateInputType = {
    id_contato?: true
    ds_nome?: true
    ds_cargo?: true
    fl_ativo?: true
    tx_observacoes?: true
    ds_email?: true
    ds_telefone?: true
    fl_whatsapp?: true
  }

  export type ContatoMaxAggregateInputType = {
    id_contato?: true
    ds_nome?: true
    ds_cargo?: true
    fl_ativo?: true
    tx_observacoes?: true
    ds_email?: true
    ds_telefone?: true
    fl_whatsapp?: true
  }

  export type ContatoCountAggregateInputType = {
    id_contato?: true
    ds_nome?: true
    ds_cargo?: true
    fl_ativo?: true
    tx_observacoes?: true
    ds_email?: true
    ds_telefone?: true
    fl_whatsapp?: true
    _all?: true
  }

  export type ContatoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contato to aggregate.
     */
    where?: ContatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contatoes to fetch.
     */
    orderBy?: ContatoOrderByWithRelationInput | ContatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contatoes
    **/
    _count?: true | ContatoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContatoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContatoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContatoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContatoMaxAggregateInputType
  }

  export type GetContatoAggregateType<T extends ContatoAggregateArgs> = {
        [P in keyof T & keyof AggregateContato]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContato[P]>
      : GetScalarType<T[P], AggregateContato[P]>
  }




  export type ContatoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContatoWhereInput
    orderBy?: ContatoOrderByWithAggregationInput | ContatoOrderByWithAggregationInput[]
    by: ContatoScalarFieldEnum[] | ContatoScalarFieldEnum
    having?: ContatoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContatoCountAggregateInputType | true
    _avg?: ContatoAvgAggregateInputType
    _sum?: ContatoSumAggregateInputType
    _min?: ContatoMinAggregateInputType
    _max?: ContatoMaxAggregateInputType
  }

  export type ContatoGroupByOutputType = {
    id_contato: number
    ds_nome: string
    ds_cargo: string
    fl_ativo: boolean
    tx_observacoes: string | null
    ds_email: string
    ds_telefone: string
    fl_whatsapp: boolean
    _count: ContatoCountAggregateOutputType | null
    _avg: ContatoAvgAggregateOutputType | null
    _sum: ContatoSumAggregateOutputType | null
    _min: ContatoMinAggregateOutputType | null
    _max: ContatoMaxAggregateOutputType | null
  }

  type GetContatoGroupByPayload<T extends ContatoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContatoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContatoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContatoGroupByOutputType[P]>
            : GetScalarType<T[P], ContatoGroupByOutputType[P]>
        }
      >
    >


  export type ContatoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_contato?: boolean
    ds_nome?: boolean
    ds_cargo?: boolean
    fl_ativo?: boolean
    tx_observacoes?: boolean
    ds_email?: boolean
    ds_telefone?: boolean
    fl_whatsapp?: boolean
    clientesContatos?: boolean | Contato$clientesContatosArgs<ExtArgs>
    rats?: boolean | Contato$ratsArgs<ExtArgs>
    _count?: boolean | ContatoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contato"]>

  export type ContatoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_contato?: boolean
    ds_nome?: boolean
    ds_cargo?: boolean
    fl_ativo?: boolean
    tx_observacoes?: boolean
    ds_email?: boolean
    ds_telefone?: boolean
    fl_whatsapp?: boolean
  }, ExtArgs["result"]["contato"]>

  export type ContatoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_contato?: boolean
    ds_nome?: boolean
    ds_cargo?: boolean
    fl_ativo?: boolean
    tx_observacoes?: boolean
    ds_email?: boolean
    ds_telefone?: boolean
    fl_whatsapp?: boolean
  }, ExtArgs["result"]["contato"]>

  export type ContatoSelectScalar = {
    id_contato?: boolean
    ds_nome?: boolean
    ds_cargo?: boolean
    fl_ativo?: boolean
    tx_observacoes?: boolean
    ds_email?: boolean
    ds_telefone?: boolean
    fl_whatsapp?: boolean
  }

  export type ContatoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_contato" | "ds_nome" | "ds_cargo" | "fl_ativo" | "tx_observacoes" | "ds_email" | "ds_telefone" | "fl_whatsapp", ExtArgs["result"]["contato"]>
  export type ContatoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientesContatos?: boolean | Contato$clientesContatosArgs<ExtArgs>
    rats?: boolean | Contato$ratsArgs<ExtArgs>
    _count?: boolean | ContatoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContatoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ContatoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ContatoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contato"
    objects: {
      clientesContatos: Prisma.$ClienteContatoPayload<ExtArgs>[]
      rats: Prisma.$RATPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_contato: number
      ds_nome: string
      ds_cargo: string
      fl_ativo: boolean
      tx_observacoes: string | null
      ds_email: string
      ds_telefone: string
      fl_whatsapp: boolean
    }, ExtArgs["result"]["contato"]>
    composites: {}
  }

  type ContatoGetPayload<S extends boolean | null | undefined | ContatoDefaultArgs> = $Result.GetResult<Prisma.$ContatoPayload, S>

  type ContatoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContatoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContatoCountAggregateInputType | true
    }

  export interface ContatoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contato'], meta: { name: 'Contato' } }
    /**
     * Find zero or one Contato that matches the filter.
     * @param {ContatoFindUniqueArgs} args - Arguments to find a Contato
     * @example
     * // Get one Contato
     * const contato = await prisma.contato.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContatoFindUniqueArgs>(args: SelectSubset<T, ContatoFindUniqueArgs<ExtArgs>>): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contato that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContatoFindUniqueOrThrowArgs} args - Arguments to find a Contato
     * @example
     * // Get one Contato
     * const contato = await prisma.contato.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContatoFindUniqueOrThrowArgs>(args: SelectSubset<T, ContatoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contato that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoFindFirstArgs} args - Arguments to find a Contato
     * @example
     * // Get one Contato
     * const contato = await prisma.contato.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContatoFindFirstArgs>(args?: SelectSubset<T, ContatoFindFirstArgs<ExtArgs>>): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contato that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoFindFirstOrThrowArgs} args - Arguments to find a Contato
     * @example
     * // Get one Contato
     * const contato = await prisma.contato.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContatoFindFirstOrThrowArgs>(args?: SelectSubset<T, ContatoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contatoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contatoes
     * const contatoes = await prisma.contato.findMany()
     * 
     * // Get first 10 Contatoes
     * const contatoes = await prisma.contato.findMany({ take: 10 })
     * 
     * // Only select the `id_contato`
     * const contatoWithId_contatoOnly = await prisma.contato.findMany({ select: { id_contato: true } })
     * 
     */
    findMany<T extends ContatoFindManyArgs>(args?: SelectSubset<T, ContatoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contato.
     * @param {ContatoCreateArgs} args - Arguments to create a Contato.
     * @example
     * // Create one Contato
     * const Contato = await prisma.contato.create({
     *   data: {
     *     // ... data to create a Contato
     *   }
     * })
     * 
     */
    create<T extends ContatoCreateArgs>(args: SelectSubset<T, ContatoCreateArgs<ExtArgs>>): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contatoes.
     * @param {ContatoCreateManyArgs} args - Arguments to create many Contatoes.
     * @example
     * // Create many Contatoes
     * const contato = await prisma.contato.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContatoCreateManyArgs>(args?: SelectSubset<T, ContatoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contatoes and returns the data saved in the database.
     * @param {ContatoCreateManyAndReturnArgs} args - Arguments to create many Contatoes.
     * @example
     * // Create many Contatoes
     * const contato = await prisma.contato.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contatoes and only return the `id_contato`
     * const contatoWithId_contatoOnly = await prisma.contato.createManyAndReturn({
     *   select: { id_contato: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContatoCreateManyAndReturnArgs>(args?: SelectSubset<T, ContatoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contato.
     * @param {ContatoDeleteArgs} args - Arguments to delete one Contato.
     * @example
     * // Delete one Contato
     * const Contato = await prisma.contato.delete({
     *   where: {
     *     // ... filter to delete one Contato
     *   }
     * })
     * 
     */
    delete<T extends ContatoDeleteArgs>(args: SelectSubset<T, ContatoDeleteArgs<ExtArgs>>): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contato.
     * @param {ContatoUpdateArgs} args - Arguments to update one Contato.
     * @example
     * // Update one Contato
     * const contato = await prisma.contato.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContatoUpdateArgs>(args: SelectSubset<T, ContatoUpdateArgs<ExtArgs>>): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contatoes.
     * @param {ContatoDeleteManyArgs} args - Arguments to filter Contatoes to delete.
     * @example
     * // Delete a few Contatoes
     * const { count } = await prisma.contato.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContatoDeleteManyArgs>(args?: SelectSubset<T, ContatoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contatoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contatoes
     * const contato = await prisma.contato.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContatoUpdateManyArgs>(args: SelectSubset<T, ContatoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contatoes and returns the data updated in the database.
     * @param {ContatoUpdateManyAndReturnArgs} args - Arguments to update many Contatoes.
     * @example
     * // Update many Contatoes
     * const contato = await prisma.contato.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contatoes and only return the `id_contato`
     * const contatoWithId_contatoOnly = await prisma.contato.updateManyAndReturn({
     *   select: { id_contato: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContatoUpdateManyAndReturnArgs>(args: SelectSubset<T, ContatoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contato.
     * @param {ContatoUpsertArgs} args - Arguments to update or create a Contato.
     * @example
     * // Update or create a Contato
     * const contato = await prisma.contato.upsert({
     *   create: {
     *     // ... data to create a Contato
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contato we want to update
     *   }
     * })
     */
    upsert<T extends ContatoUpsertArgs>(args: SelectSubset<T, ContatoUpsertArgs<ExtArgs>>): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contatoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoCountArgs} args - Arguments to filter Contatoes to count.
     * @example
     * // Count the number of Contatoes
     * const count = await prisma.contato.count({
     *   where: {
     *     // ... the filter for the Contatoes we want to count
     *   }
     * })
    **/
    count<T extends ContatoCountArgs>(
      args?: Subset<T, ContatoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContatoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContatoAggregateArgs>(args: Subset<T, ContatoAggregateArgs>): Prisma.PrismaPromise<GetContatoAggregateType<T>>

    /**
     * Group by Contato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoGroupByArgs} args - Group by arguments.
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
      T extends ContatoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContatoGroupByArgs['orderBy'] }
        : { orderBy?: ContatoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContatoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContatoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contato model
   */
  readonly fields: ContatoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contato.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContatoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clientesContatos<T extends Contato$clientesContatosArgs<ExtArgs> = {}>(args?: Subset<T, Contato$clientesContatosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClienteContatoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rats<T extends Contato$ratsArgs<ExtArgs> = {}>(args?: Subset<T, Contato$ratsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RATPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Contato model
   */
  interface ContatoFieldRefs {
    readonly id_contato: FieldRef<"Contato", 'Int'>
    readonly ds_nome: FieldRef<"Contato", 'String'>
    readonly ds_cargo: FieldRef<"Contato", 'String'>
    readonly fl_ativo: FieldRef<"Contato", 'Boolean'>
    readonly tx_observacoes: FieldRef<"Contato", 'String'>
    readonly ds_email: FieldRef<"Contato", 'String'>
    readonly ds_telefone: FieldRef<"Contato", 'String'>
    readonly fl_whatsapp: FieldRef<"Contato", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Contato findUnique
   */
  export type ContatoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoInclude<ExtArgs> | null
    /**
     * Filter, which Contato to fetch.
     */
    where: ContatoWhereUniqueInput
  }

  /**
   * Contato findUniqueOrThrow
   */
  export type ContatoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoInclude<ExtArgs> | null
    /**
     * Filter, which Contato to fetch.
     */
    where: ContatoWhereUniqueInput
  }

  /**
   * Contato findFirst
   */
  export type ContatoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoInclude<ExtArgs> | null
    /**
     * Filter, which Contato to fetch.
     */
    where?: ContatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contatoes to fetch.
     */
    orderBy?: ContatoOrderByWithRelationInput | ContatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contatoes.
     */
    cursor?: ContatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contatoes.
     */
    distinct?: ContatoScalarFieldEnum | ContatoScalarFieldEnum[]
  }

  /**
   * Contato findFirstOrThrow
   */
  export type ContatoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoInclude<ExtArgs> | null
    /**
     * Filter, which Contato to fetch.
     */
    where?: ContatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contatoes to fetch.
     */
    orderBy?: ContatoOrderByWithRelationInput | ContatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contatoes.
     */
    cursor?: ContatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contatoes.
     */
    distinct?: ContatoScalarFieldEnum | ContatoScalarFieldEnum[]
  }

  /**
   * Contato findMany
   */
  export type ContatoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoInclude<ExtArgs> | null
    /**
     * Filter, which Contatoes to fetch.
     */
    where?: ContatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contatoes to fetch.
     */
    orderBy?: ContatoOrderByWithRelationInput | ContatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contatoes.
     */
    cursor?: ContatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contatoes.
     */
    skip?: number
    distinct?: ContatoScalarFieldEnum | ContatoScalarFieldEnum[]
  }

  /**
   * Contato create
   */
  export type ContatoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoInclude<ExtArgs> | null
    /**
     * The data needed to create a Contato.
     */
    data: XOR<ContatoCreateInput, ContatoUncheckedCreateInput>
  }

  /**
   * Contato createMany
   */
  export type ContatoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contatoes.
     */
    data: ContatoCreateManyInput | ContatoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contato createManyAndReturn
   */
  export type ContatoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * The data used to create many Contatoes.
     */
    data: ContatoCreateManyInput | ContatoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contato update
   */
  export type ContatoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoInclude<ExtArgs> | null
    /**
     * The data needed to update a Contato.
     */
    data: XOR<ContatoUpdateInput, ContatoUncheckedUpdateInput>
    /**
     * Choose, which Contato to update.
     */
    where: ContatoWhereUniqueInput
  }

  /**
   * Contato updateMany
   */
  export type ContatoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contatoes.
     */
    data: XOR<ContatoUpdateManyMutationInput, ContatoUncheckedUpdateManyInput>
    /**
     * Filter which Contatoes to update
     */
    where?: ContatoWhereInput
    /**
     * Limit how many Contatoes to update.
     */
    limit?: number
  }

  /**
   * Contato updateManyAndReturn
   */
  export type ContatoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * The data used to update Contatoes.
     */
    data: XOR<ContatoUpdateManyMutationInput, ContatoUncheckedUpdateManyInput>
    /**
     * Filter which Contatoes to update
     */
    where?: ContatoWhereInput
    /**
     * Limit how many Contatoes to update.
     */
    limit?: number
  }

  /**
   * Contato upsert
   */
  export type ContatoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoInclude<ExtArgs> | null
    /**
     * The filter to search for the Contato to update in case it exists.
     */
    where: ContatoWhereUniqueInput
    /**
     * In case the Contato found by the `where` argument doesn't exist, create a new Contato with this data.
     */
    create: XOR<ContatoCreateInput, ContatoUncheckedCreateInput>
    /**
     * In case the Contato was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContatoUpdateInput, ContatoUncheckedUpdateInput>
  }

  /**
   * Contato delete
   */
  export type ContatoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoInclude<ExtArgs> | null
    /**
     * Filter which Contato to delete.
     */
    where: ContatoWhereUniqueInput
  }

  /**
   * Contato deleteMany
   */
  export type ContatoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contatoes to delete
     */
    where?: ContatoWhereInput
    /**
     * Limit how many Contatoes to delete.
     */
    limit?: number
  }

  /**
   * Contato.clientesContatos
   */
  export type Contato$clientesContatosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteContato
     */
    select?: ClienteContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClienteContato
     */
    omit?: ClienteContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteContatoInclude<ExtArgs> | null
    where?: ClienteContatoWhereInput
    orderBy?: ClienteContatoOrderByWithRelationInput | ClienteContatoOrderByWithRelationInput[]
    cursor?: ClienteContatoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClienteContatoScalarFieldEnum | ClienteContatoScalarFieldEnum[]
  }

  /**
   * Contato.rats
   */
  export type Contato$ratsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RAT
     */
    select?: RATSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RAT
     */
    omit?: RATOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RATInclude<ExtArgs> | null
    where?: RATWhereInput
    orderBy?: RATOrderByWithRelationInput | RATOrderByWithRelationInput[]
    cursor?: RATWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RATScalarFieldEnum | RATScalarFieldEnum[]
  }

  /**
   * Contato without action
   */
  export type ContatoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoInclude<ExtArgs> | null
  }


  /**
   * Model ClienteContato
   */

  export type AggregateClienteContato = {
    _count: ClienteContatoCountAggregateOutputType | null
    _avg: ClienteContatoAvgAggregateOutputType | null
    _sum: ClienteContatoSumAggregateOutputType | null
    _min: ClienteContatoMinAggregateOutputType | null
    _max: ClienteContatoMaxAggregateOutputType | null
  }

  export type ClienteContatoAvgAggregateOutputType = {
    id: number | null
    id_cliente: number | null
    id_contato: number | null
  }

  export type ClienteContatoSumAggregateOutputType = {
    id: number | null
    id_cliente: number | null
    id_contato: number | null
  }

  export type ClienteContatoMinAggregateOutputType = {
    id: number | null
    id_cliente: number | null
    id_contato: number | null
  }

  export type ClienteContatoMaxAggregateOutputType = {
    id: number | null
    id_cliente: number | null
    id_contato: number | null
  }

  export type ClienteContatoCountAggregateOutputType = {
    id: number
    id_cliente: number
    id_contato: number
    _all: number
  }


  export type ClienteContatoAvgAggregateInputType = {
    id?: true
    id_cliente?: true
    id_contato?: true
  }

  export type ClienteContatoSumAggregateInputType = {
    id?: true
    id_cliente?: true
    id_contato?: true
  }

  export type ClienteContatoMinAggregateInputType = {
    id?: true
    id_cliente?: true
    id_contato?: true
  }

  export type ClienteContatoMaxAggregateInputType = {
    id?: true
    id_cliente?: true
    id_contato?: true
  }

  export type ClienteContatoCountAggregateInputType = {
    id?: true
    id_cliente?: true
    id_contato?: true
    _all?: true
  }

  export type ClienteContatoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClienteContato to aggregate.
     */
    where?: ClienteContatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClienteContatoes to fetch.
     */
    orderBy?: ClienteContatoOrderByWithRelationInput | ClienteContatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteContatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClienteContatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClienteContatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClienteContatoes
    **/
    _count?: true | ClienteContatoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteContatoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteContatoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteContatoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteContatoMaxAggregateInputType
  }

  export type GetClienteContatoAggregateType<T extends ClienteContatoAggregateArgs> = {
        [P in keyof T & keyof AggregateClienteContato]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClienteContato[P]>
      : GetScalarType<T[P], AggregateClienteContato[P]>
  }




  export type ClienteContatoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteContatoWhereInput
    orderBy?: ClienteContatoOrderByWithAggregationInput | ClienteContatoOrderByWithAggregationInput[]
    by: ClienteContatoScalarFieldEnum[] | ClienteContatoScalarFieldEnum
    having?: ClienteContatoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteContatoCountAggregateInputType | true
    _avg?: ClienteContatoAvgAggregateInputType
    _sum?: ClienteContatoSumAggregateInputType
    _min?: ClienteContatoMinAggregateInputType
    _max?: ClienteContatoMaxAggregateInputType
  }

  export type ClienteContatoGroupByOutputType = {
    id: number
    id_cliente: number
    id_contato: number
    _count: ClienteContatoCountAggregateOutputType | null
    _avg: ClienteContatoAvgAggregateOutputType | null
    _sum: ClienteContatoSumAggregateOutputType | null
    _min: ClienteContatoMinAggregateOutputType | null
    _max: ClienteContatoMaxAggregateOutputType | null
  }

  type GetClienteContatoGroupByPayload<T extends ClienteContatoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteContatoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteContatoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteContatoGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteContatoGroupByOutputType[P]>
        }
      >
    >


  export type ClienteContatoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_cliente?: boolean
    id_contato?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    contato?: boolean | ContatoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clienteContato"]>

  export type ClienteContatoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_cliente?: boolean
    id_contato?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    contato?: boolean | ContatoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clienteContato"]>

  export type ClienteContatoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_cliente?: boolean
    id_contato?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    contato?: boolean | ContatoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clienteContato"]>

  export type ClienteContatoSelectScalar = {
    id?: boolean
    id_cliente?: boolean
    id_contato?: boolean
  }

  export type ClienteContatoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_cliente" | "id_contato", ExtArgs["result"]["clienteContato"]>
  export type ClienteContatoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    contato?: boolean | ContatoDefaultArgs<ExtArgs>
  }
  export type ClienteContatoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    contato?: boolean | ContatoDefaultArgs<ExtArgs>
  }
  export type ClienteContatoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    contato?: boolean | ContatoDefaultArgs<ExtArgs>
  }

  export type $ClienteContatoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClienteContato"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      contato: Prisma.$ContatoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_cliente: number
      id_contato: number
    }, ExtArgs["result"]["clienteContato"]>
    composites: {}
  }

  type ClienteContatoGetPayload<S extends boolean | null | undefined | ClienteContatoDefaultArgs> = $Result.GetResult<Prisma.$ClienteContatoPayload, S>

  type ClienteContatoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteContatoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteContatoCountAggregateInputType | true
    }

  export interface ClienteContatoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClienteContato'], meta: { name: 'ClienteContato' } }
    /**
     * Find zero or one ClienteContato that matches the filter.
     * @param {ClienteContatoFindUniqueArgs} args - Arguments to find a ClienteContato
     * @example
     * // Get one ClienteContato
     * const clienteContato = await prisma.clienteContato.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteContatoFindUniqueArgs>(args: SelectSubset<T, ClienteContatoFindUniqueArgs<ExtArgs>>): Prisma__ClienteContatoClient<$Result.GetResult<Prisma.$ClienteContatoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClienteContato that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteContatoFindUniqueOrThrowArgs} args - Arguments to find a ClienteContato
     * @example
     * // Get one ClienteContato
     * const clienteContato = await prisma.clienteContato.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteContatoFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteContatoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteContatoClient<$Result.GetResult<Prisma.$ClienteContatoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClienteContato that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteContatoFindFirstArgs} args - Arguments to find a ClienteContato
     * @example
     * // Get one ClienteContato
     * const clienteContato = await prisma.clienteContato.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteContatoFindFirstArgs>(args?: SelectSubset<T, ClienteContatoFindFirstArgs<ExtArgs>>): Prisma__ClienteContatoClient<$Result.GetResult<Prisma.$ClienteContatoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClienteContato that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteContatoFindFirstOrThrowArgs} args - Arguments to find a ClienteContato
     * @example
     * // Get one ClienteContato
     * const clienteContato = await prisma.clienteContato.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteContatoFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteContatoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteContatoClient<$Result.GetResult<Prisma.$ClienteContatoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClienteContatoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteContatoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClienteContatoes
     * const clienteContatoes = await prisma.clienteContato.findMany()
     * 
     * // Get first 10 ClienteContatoes
     * const clienteContatoes = await prisma.clienteContato.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteContatoWithIdOnly = await prisma.clienteContato.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteContatoFindManyArgs>(args?: SelectSubset<T, ClienteContatoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClienteContatoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClienteContato.
     * @param {ClienteContatoCreateArgs} args - Arguments to create a ClienteContato.
     * @example
     * // Create one ClienteContato
     * const ClienteContato = await prisma.clienteContato.create({
     *   data: {
     *     // ... data to create a ClienteContato
     *   }
     * })
     * 
     */
    create<T extends ClienteContatoCreateArgs>(args: SelectSubset<T, ClienteContatoCreateArgs<ExtArgs>>): Prisma__ClienteContatoClient<$Result.GetResult<Prisma.$ClienteContatoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClienteContatoes.
     * @param {ClienteContatoCreateManyArgs} args - Arguments to create many ClienteContatoes.
     * @example
     * // Create many ClienteContatoes
     * const clienteContato = await prisma.clienteContato.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteContatoCreateManyArgs>(args?: SelectSubset<T, ClienteContatoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClienteContatoes and returns the data saved in the database.
     * @param {ClienteContatoCreateManyAndReturnArgs} args - Arguments to create many ClienteContatoes.
     * @example
     * // Create many ClienteContatoes
     * const clienteContato = await prisma.clienteContato.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClienteContatoes and only return the `id`
     * const clienteContatoWithIdOnly = await prisma.clienteContato.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteContatoCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteContatoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClienteContatoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClienteContato.
     * @param {ClienteContatoDeleteArgs} args - Arguments to delete one ClienteContato.
     * @example
     * // Delete one ClienteContato
     * const ClienteContato = await prisma.clienteContato.delete({
     *   where: {
     *     // ... filter to delete one ClienteContato
     *   }
     * })
     * 
     */
    delete<T extends ClienteContatoDeleteArgs>(args: SelectSubset<T, ClienteContatoDeleteArgs<ExtArgs>>): Prisma__ClienteContatoClient<$Result.GetResult<Prisma.$ClienteContatoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClienteContato.
     * @param {ClienteContatoUpdateArgs} args - Arguments to update one ClienteContato.
     * @example
     * // Update one ClienteContato
     * const clienteContato = await prisma.clienteContato.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteContatoUpdateArgs>(args: SelectSubset<T, ClienteContatoUpdateArgs<ExtArgs>>): Prisma__ClienteContatoClient<$Result.GetResult<Prisma.$ClienteContatoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClienteContatoes.
     * @param {ClienteContatoDeleteManyArgs} args - Arguments to filter ClienteContatoes to delete.
     * @example
     * // Delete a few ClienteContatoes
     * const { count } = await prisma.clienteContato.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteContatoDeleteManyArgs>(args?: SelectSubset<T, ClienteContatoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClienteContatoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteContatoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClienteContatoes
     * const clienteContato = await prisma.clienteContato.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteContatoUpdateManyArgs>(args: SelectSubset<T, ClienteContatoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClienteContatoes and returns the data updated in the database.
     * @param {ClienteContatoUpdateManyAndReturnArgs} args - Arguments to update many ClienteContatoes.
     * @example
     * // Update many ClienteContatoes
     * const clienteContato = await prisma.clienteContato.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClienteContatoes and only return the `id`
     * const clienteContatoWithIdOnly = await prisma.clienteContato.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClienteContatoUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteContatoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClienteContatoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClienteContato.
     * @param {ClienteContatoUpsertArgs} args - Arguments to update or create a ClienteContato.
     * @example
     * // Update or create a ClienteContato
     * const clienteContato = await prisma.clienteContato.upsert({
     *   create: {
     *     // ... data to create a ClienteContato
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClienteContato we want to update
     *   }
     * })
     */
    upsert<T extends ClienteContatoUpsertArgs>(args: SelectSubset<T, ClienteContatoUpsertArgs<ExtArgs>>): Prisma__ClienteContatoClient<$Result.GetResult<Prisma.$ClienteContatoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClienteContatoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteContatoCountArgs} args - Arguments to filter ClienteContatoes to count.
     * @example
     * // Count the number of ClienteContatoes
     * const count = await prisma.clienteContato.count({
     *   where: {
     *     // ... the filter for the ClienteContatoes we want to count
     *   }
     * })
    **/
    count<T extends ClienteContatoCountArgs>(
      args?: Subset<T, ClienteContatoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteContatoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClienteContato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteContatoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClienteContatoAggregateArgs>(args: Subset<T, ClienteContatoAggregateArgs>): Prisma.PrismaPromise<GetClienteContatoAggregateType<T>>

    /**
     * Group by ClienteContato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteContatoGroupByArgs} args - Group by arguments.
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
      T extends ClienteContatoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteContatoGroupByArgs['orderBy'] }
        : { orderBy?: ClienteContatoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClienteContatoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteContatoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClienteContato model
   */
  readonly fields: ClienteContatoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClienteContato.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteContatoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contato<T extends ContatoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContatoDefaultArgs<ExtArgs>>): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ClienteContato model
   */
  interface ClienteContatoFieldRefs {
    readonly id: FieldRef<"ClienteContato", 'Int'>
    readonly id_cliente: FieldRef<"ClienteContato", 'Int'>
    readonly id_contato: FieldRef<"ClienteContato", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ClienteContato findUnique
   */
  export type ClienteContatoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteContato
     */
    select?: ClienteContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClienteContato
     */
    omit?: ClienteContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteContatoInclude<ExtArgs> | null
    /**
     * Filter, which ClienteContato to fetch.
     */
    where: ClienteContatoWhereUniqueInput
  }

  /**
   * ClienteContato findUniqueOrThrow
   */
  export type ClienteContatoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteContato
     */
    select?: ClienteContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClienteContato
     */
    omit?: ClienteContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteContatoInclude<ExtArgs> | null
    /**
     * Filter, which ClienteContato to fetch.
     */
    where: ClienteContatoWhereUniqueInput
  }

  /**
   * ClienteContato findFirst
   */
  export type ClienteContatoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteContato
     */
    select?: ClienteContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClienteContato
     */
    omit?: ClienteContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteContatoInclude<ExtArgs> | null
    /**
     * Filter, which ClienteContato to fetch.
     */
    where?: ClienteContatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClienteContatoes to fetch.
     */
    orderBy?: ClienteContatoOrderByWithRelationInput | ClienteContatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClienteContatoes.
     */
    cursor?: ClienteContatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClienteContatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClienteContatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClienteContatoes.
     */
    distinct?: ClienteContatoScalarFieldEnum | ClienteContatoScalarFieldEnum[]
  }

  /**
   * ClienteContato findFirstOrThrow
   */
  export type ClienteContatoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteContato
     */
    select?: ClienteContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClienteContato
     */
    omit?: ClienteContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteContatoInclude<ExtArgs> | null
    /**
     * Filter, which ClienteContato to fetch.
     */
    where?: ClienteContatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClienteContatoes to fetch.
     */
    orderBy?: ClienteContatoOrderByWithRelationInput | ClienteContatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClienteContatoes.
     */
    cursor?: ClienteContatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClienteContatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClienteContatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClienteContatoes.
     */
    distinct?: ClienteContatoScalarFieldEnum | ClienteContatoScalarFieldEnum[]
  }

  /**
   * ClienteContato findMany
   */
  export type ClienteContatoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteContato
     */
    select?: ClienteContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClienteContato
     */
    omit?: ClienteContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteContatoInclude<ExtArgs> | null
    /**
     * Filter, which ClienteContatoes to fetch.
     */
    where?: ClienteContatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClienteContatoes to fetch.
     */
    orderBy?: ClienteContatoOrderByWithRelationInput | ClienteContatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClienteContatoes.
     */
    cursor?: ClienteContatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClienteContatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClienteContatoes.
     */
    skip?: number
    distinct?: ClienteContatoScalarFieldEnum | ClienteContatoScalarFieldEnum[]
  }

  /**
   * ClienteContato create
   */
  export type ClienteContatoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteContato
     */
    select?: ClienteContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClienteContato
     */
    omit?: ClienteContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteContatoInclude<ExtArgs> | null
    /**
     * The data needed to create a ClienteContato.
     */
    data: XOR<ClienteContatoCreateInput, ClienteContatoUncheckedCreateInput>
  }

  /**
   * ClienteContato createMany
   */
  export type ClienteContatoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClienteContatoes.
     */
    data: ClienteContatoCreateManyInput | ClienteContatoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClienteContato createManyAndReturn
   */
  export type ClienteContatoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteContato
     */
    select?: ClienteContatoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClienteContato
     */
    omit?: ClienteContatoOmit<ExtArgs> | null
    /**
     * The data used to create many ClienteContatoes.
     */
    data: ClienteContatoCreateManyInput | ClienteContatoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteContatoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClienteContato update
   */
  export type ClienteContatoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteContato
     */
    select?: ClienteContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClienteContato
     */
    omit?: ClienteContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteContatoInclude<ExtArgs> | null
    /**
     * The data needed to update a ClienteContato.
     */
    data: XOR<ClienteContatoUpdateInput, ClienteContatoUncheckedUpdateInput>
    /**
     * Choose, which ClienteContato to update.
     */
    where: ClienteContatoWhereUniqueInput
  }

  /**
   * ClienteContato updateMany
   */
  export type ClienteContatoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClienteContatoes.
     */
    data: XOR<ClienteContatoUpdateManyMutationInput, ClienteContatoUncheckedUpdateManyInput>
    /**
     * Filter which ClienteContatoes to update
     */
    where?: ClienteContatoWhereInput
    /**
     * Limit how many ClienteContatoes to update.
     */
    limit?: number
  }

  /**
   * ClienteContato updateManyAndReturn
   */
  export type ClienteContatoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteContato
     */
    select?: ClienteContatoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClienteContato
     */
    omit?: ClienteContatoOmit<ExtArgs> | null
    /**
     * The data used to update ClienteContatoes.
     */
    data: XOR<ClienteContatoUpdateManyMutationInput, ClienteContatoUncheckedUpdateManyInput>
    /**
     * Filter which ClienteContatoes to update
     */
    where?: ClienteContatoWhereInput
    /**
     * Limit how many ClienteContatoes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteContatoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClienteContato upsert
   */
  export type ClienteContatoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteContato
     */
    select?: ClienteContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClienteContato
     */
    omit?: ClienteContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteContatoInclude<ExtArgs> | null
    /**
     * The filter to search for the ClienteContato to update in case it exists.
     */
    where: ClienteContatoWhereUniqueInput
    /**
     * In case the ClienteContato found by the `where` argument doesn't exist, create a new ClienteContato with this data.
     */
    create: XOR<ClienteContatoCreateInput, ClienteContatoUncheckedCreateInput>
    /**
     * In case the ClienteContato was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteContatoUpdateInput, ClienteContatoUncheckedUpdateInput>
  }

  /**
   * ClienteContato delete
   */
  export type ClienteContatoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteContato
     */
    select?: ClienteContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClienteContato
     */
    omit?: ClienteContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteContatoInclude<ExtArgs> | null
    /**
     * Filter which ClienteContato to delete.
     */
    where: ClienteContatoWhereUniqueInput
  }

  /**
   * ClienteContato deleteMany
   */
  export type ClienteContatoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClienteContatoes to delete
     */
    where?: ClienteContatoWhereInput
    /**
     * Limit how many ClienteContatoes to delete.
     */
    limit?: number
  }

  /**
   * ClienteContato without action
   */
  export type ClienteContatoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteContato
     */
    select?: ClienteContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClienteContato
     */
    omit?: ClienteContatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteContatoInclude<ExtArgs> | null
  }


  /**
   * Model EmailCliente
   */

  export type AggregateEmailCliente = {
    _count: EmailClienteCountAggregateOutputType | null
    _avg: EmailClienteAvgAggregateOutputType | null
    _sum: EmailClienteSumAggregateOutputType | null
    _min: EmailClienteMinAggregateOutputType | null
    _max: EmailClienteMaxAggregateOutputType | null
  }

  export type EmailClienteAvgAggregateOutputType = {
    id: number | null
    id_cliente: number | null
  }

  export type EmailClienteSumAggregateOutputType = {
    id: number | null
    id_cliente: number | null
  }

  export type EmailClienteMinAggregateOutputType = {
    id: number | null
    ds_email: string | null
    id_cliente: number | null
  }

  export type EmailClienteMaxAggregateOutputType = {
    id: number | null
    ds_email: string | null
    id_cliente: number | null
  }

  export type EmailClienteCountAggregateOutputType = {
    id: number
    ds_email: number
    id_cliente: number
    _all: number
  }


  export type EmailClienteAvgAggregateInputType = {
    id?: true
    id_cliente?: true
  }

  export type EmailClienteSumAggregateInputType = {
    id?: true
    id_cliente?: true
  }

  export type EmailClienteMinAggregateInputType = {
    id?: true
    ds_email?: true
    id_cliente?: true
  }

  export type EmailClienteMaxAggregateInputType = {
    id?: true
    ds_email?: true
    id_cliente?: true
  }

  export type EmailClienteCountAggregateInputType = {
    id?: true
    ds_email?: true
    id_cliente?: true
    _all?: true
  }

  export type EmailClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailCliente to aggregate.
     */
    where?: EmailClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailClientes to fetch.
     */
    orderBy?: EmailClienteOrderByWithRelationInput | EmailClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailClientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailClientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailClientes
    **/
    _count?: true | EmailClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmailClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmailClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailClienteMaxAggregateInputType
  }

  export type GetEmailClienteAggregateType<T extends EmailClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailCliente[P]>
      : GetScalarType<T[P], AggregateEmailCliente[P]>
  }




  export type EmailClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailClienteWhereInput
    orderBy?: EmailClienteOrderByWithAggregationInput | EmailClienteOrderByWithAggregationInput[]
    by: EmailClienteScalarFieldEnum[] | EmailClienteScalarFieldEnum
    having?: EmailClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailClienteCountAggregateInputType | true
    _avg?: EmailClienteAvgAggregateInputType
    _sum?: EmailClienteSumAggregateInputType
    _min?: EmailClienteMinAggregateInputType
    _max?: EmailClienteMaxAggregateInputType
  }

  export type EmailClienteGroupByOutputType = {
    id: number
    ds_email: string
    id_cliente: number
    _count: EmailClienteCountAggregateOutputType | null
    _avg: EmailClienteAvgAggregateOutputType | null
    _sum: EmailClienteSumAggregateOutputType | null
    _min: EmailClienteMinAggregateOutputType | null
    _max: EmailClienteMaxAggregateOutputType | null
  }

  type GetEmailClienteGroupByPayload<T extends EmailClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailClienteGroupByOutputType[P]>
            : GetScalarType<T[P], EmailClienteGroupByOutputType[P]>
        }
      >
    >


  export type EmailClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ds_email?: boolean
    id_cliente?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailCliente"]>

  export type EmailClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ds_email?: boolean
    id_cliente?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailCliente"]>

  export type EmailClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ds_email?: boolean
    id_cliente?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailCliente"]>

  export type EmailClienteSelectScalar = {
    id?: boolean
    ds_email?: boolean
    id_cliente?: boolean
  }

  export type EmailClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ds_email" | "id_cliente", ExtArgs["result"]["emailCliente"]>
  export type EmailClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }
  export type EmailClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }
  export type EmailClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }

  export type $EmailClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailCliente"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ds_email: string
      id_cliente: number
    }, ExtArgs["result"]["emailCliente"]>
    composites: {}
  }

  type EmailClienteGetPayload<S extends boolean | null | undefined | EmailClienteDefaultArgs> = $Result.GetResult<Prisma.$EmailClientePayload, S>

  type EmailClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailClienteCountAggregateInputType | true
    }

  export interface EmailClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailCliente'], meta: { name: 'EmailCliente' } }
    /**
     * Find zero or one EmailCliente that matches the filter.
     * @param {EmailClienteFindUniqueArgs} args - Arguments to find a EmailCliente
     * @example
     * // Get one EmailCliente
     * const emailCliente = await prisma.emailCliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailClienteFindUniqueArgs>(args: SelectSubset<T, EmailClienteFindUniqueArgs<ExtArgs>>): Prisma__EmailClienteClient<$Result.GetResult<Prisma.$EmailClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailCliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailClienteFindUniqueOrThrowArgs} args - Arguments to find a EmailCliente
     * @example
     * // Get one EmailCliente
     * const emailCliente = await prisma.emailCliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailClienteClient<$Result.GetResult<Prisma.$EmailClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailCliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailClienteFindFirstArgs} args - Arguments to find a EmailCliente
     * @example
     * // Get one EmailCliente
     * const emailCliente = await prisma.emailCliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailClienteFindFirstArgs>(args?: SelectSubset<T, EmailClienteFindFirstArgs<ExtArgs>>): Prisma__EmailClienteClient<$Result.GetResult<Prisma.$EmailClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailCliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailClienteFindFirstOrThrowArgs} args - Arguments to find a EmailCliente
     * @example
     * // Get one EmailCliente
     * const emailCliente = await prisma.emailCliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailClienteClient<$Result.GetResult<Prisma.$EmailClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailClientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailClientes
     * const emailClientes = await prisma.emailCliente.findMany()
     * 
     * // Get first 10 EmailClientes
     * const emailClientes = await prisma.emailCliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailClienteWithIdOnly = await prisma.emailCliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailClienteFindManyArgs>(args?: SelectSubset<T, EmailClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailCliente.
     * @param {EmailClienteCreateArgs} args - Arguments to create a EmailCliente.
     * @example
     * // Create one EmailCliente
     * const EmailCliente = await prisma.emailCliente.create({
     *   data: {
     *     // ... data to create a EmailCliente
     *   }
     * })
     * 
     */
    create<T extends EmailClienteCreateArgs>(args: SelectSubset<T, EmailClienteCreateArgs<ExtArgs>>): Prisma__EmailClienteClient<$Result.GetResult<Prisma.$EmailClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailClientes.
     * @param {EmailClienteCreateManyArgs} args - Arguments to create many EmailClientes.
     * @example
     * // Create many EmailClientes
     * const emailCliente = await prisma.emailCliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailClienteCreateManyArgs>(args?: SelectSubset<T, EmailClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailClientes and returns the data saved in the database.
     * @param {EmailClienteCreateManyAndReturnArgs} args - Arguments to create many EmailClientes.
     * @example
     * // Create many EmailClientes
     * const emailCliente = await prisma.emailCliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailClientes and only return the `id`
     * const emailClienteWithIdOnly = await prisma.emailCliente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailCliente.
     * @param {EmailClienteDeleteArgs} args - Arguments to delete one EmailCliente.
     * @example
     * // Delete one EmailCliente
     * const EmailCliente = await prisma.emailCliente.delete({
     *   where: {
     *     // ... filter to delete one EmailCliente
     *   }
     * })
     * 
     */
    delete<T extends EmailClienteDeleteArgs>(args: SelectSubset<T, EmailClienteDeleteArgs<ExtArgs>>): Prisma__EmailClienteClient<$Result.GetResult<Prisma.$EmailClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailCliente.
     * @param {EmailClienteUpdateArgs} args - Arguments to update one EmailCliente.
     * @example
     * // Update one EmailCliente
     * const emailCliente = await prisma.emailCliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailClienteUpdateArgs>(args: SelectSubset<T, EmailClienteUpdateArgs<ExtArgs>>): Prisma__EmailClienteClient<$Result.GetResult<Prisma.$EmailClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailClientes.
     * @param {EmailClienteDeleteManyArgs} args - Arguments to filter EmailClientes to delete.
     * @example
     * // Delete a few EmailClientes
     * const { count } = await prisma.emailCliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailClienteDeleteManyArgs>(args?: SelectSubset<T, EmailClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailClientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailClientes
     * const emailCliente = await prisma.emailCliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailClienteUpdateManyArgs>(args: SelectSubset<T, EmailClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailClientes and returns the data updated in the database.
     * @param {EmailClienteUpdateManyAndReturnArgs} args - Arguments to update many EmailClientes.
     * @example
     * // Update many EmailClientes
     * const emailCliente = await prisma.emailCliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailClientes and only return the `id`
     * const emailClienteWithIdOnly = await prisma.emailCliente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailCliente.
     * @param {EmailClienteUpsertArgs} args - Arguments to update or create a EmailCliente.
     * @example
     * // Update or create a EmailCliente
     * const emailCliente = await prisma.emailCliente.upsert({
     *   create: {
     *     // ... data to create a EmailCliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailCliente we want to update
     *   }
     * })
     */
    upsert<T extends EmailClienteUpsertArgs>(args: SelectSubset<T, EmailClienteUpsertArgs<ExtArgs>>): Prisma__EmailClienteClient<$Result.GetResult<Prisma.$EmailClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailClientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailClienteCountArgs} args - Arguments to filter EmailClientes to count.
     * @example
     * // Count the number of EmailClientes
     * const count = await prisma.emailCliente.count({
     *   where: {
     *     // ... the filter for the EmailClientes we want to count
     *   }
     * })
    **/
    count<T extends EmailClienteCountArgs>(
      args?: Subset<T, EmailClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailCliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailClienteAggregateArgs>(args: Subset<T, EmailClienteAggregateArgs>): Prisma.PrismaPromise<GetEmailClienteAggregateType<T>>

    /**
     * Group by EmailCliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailClienteGroupByArgs} args - Group by arguments.
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
      T extends EmailClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailClienteGroupByArgs['orderBy'] }
        : { orderBy?: EmailClienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmailClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailCliente model
   */
  readonly fields: EmailClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailCliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EmailCliente model
   */
  interface EmailClienteFieldRefs {
    readonly id: FieldRef<"EmailCliente", 'Int'>
    readonly ds_email: FieldRef<"EmailCliente", 'String'>
    readonly id_cliente: FieldRef<"EmailCliente", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * EmailCliente findUnique
   */
  export type EmailClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailCliente
     */
    select?: EmailClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailCliente
     */
    omit?: EmailClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailClienteInclude<ExtArgs> | null
    /**
     * Filter, which EmailCliente to fetch.
     */
    where: EmailClienteWhereUniqueInput
  }

  /**
   * EmailCliente findUniqueOrThrow
   */
  export type EmailClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailCliente
     */
    select?: EmailClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailCliente
     */
    omit?: EmailClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailClienteInclude<ExtArgs> | null
    /**
     * Filter, which EmailCliente to fetch.
     */
    where: EmailClienteWhereUniqueInput
  }

  /**
   * EmailCliente findFirst
   */
  export type EmailClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailCliente
     */
    select?: EmailClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailCliente
     */
    omit?: EmailClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailClienteInclude<ExtArgs> | null
    /**
     * Filter, which EmailCliente to fetch.
     */
    where?: EmailClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailClientes to fetch.
     */
    orderBy?: EmailClienteOrderByWithRelationInput | EmailClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailClientes.
     */
    cursor?: EmailClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailClientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailClientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailClientes.
     */
    distinct?: EmailClienteScalarFieldEnum | EmailClienteScalarFieldEnum[]
  }

  /**
   * EmailCliente findFirstOrThrow
   */
  export type EmailClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailCliente
     */
    select?: EmailClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailCliente
     */
    omit?: EmailClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailClienteInclude<ExtArgs> | null
    /**
     * Filter, which EmailCliente to fetch.
     */
    where?: EmailClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailClientes to fetch.
     */
    orderBy?: EmailClienteOrderByWithRelationInput | EmailClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailClientes.
     */
    cursor?: EmailClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailClientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailClientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailClientes.
     */
    distinct?: EmailClienteScalarFieldEnum | EmailClienteScalarFieldEnum[]
  }

  /**
   * EmailCliente findMany
   */
  export type EmailClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailCliente
     */
    select?: EmailClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailCliente
     */
    omit?: EmailClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailClienteInclude<ExtArgs> | null
    /**
     * Filter, which EmailClientes to fetch.
     */
    where?: EmailClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailClientes to fetch.
     */
    orderBy?: EmailClienteOrderByWithRelationInput | EmailClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailClientes.
     */
    cursor?: EmailClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailClientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailClientes.
     */
    skip?: number
    distinct?: EmailClienteScalarFieldEnum | EmailClienteScalarFieldEnum[]
  }

  /**
   * EmailCliente create
   */
  export type EmailClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailCliente
     */
    select?: EmailClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailCliente
     */
    omit?: EmailClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a EmailCliente.
     */
    data: XOR<EmailClienteCreateInput, EmailClienteUncheckedCreateInput>
  }

  /**
   * EmailCliente createMany
   */
  export type EmailClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailClientes.
     */
    data: EmailClienteCreateManyInput | EmailClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailCliente createManyAndReturn
   */
  export type EmailClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailCliente
     */
    select?: EmailClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailCliente
     */
    omit?: EmailClienteOmit<ExtArgs> | null
    /**
     * The data used to create many EmailClientes.
     */
    data: EmailClienteCreateManyInput | EmailClienteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailClienteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailCliente update
   */
  export type EmailClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailCliente
     */
    select?: EmailClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailCliente
     */
    omit?: EmailClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a EmailCliente.
     */
    data: XOR<EmailClienteUpdateInput, EmailClienteUncheckedUpdateInput>
    /**
     * Choose, which EmailCliente to update.
     */
    where: EmailClienteWhereUniqueInput
  }

  /**
   * EmailCliente updateMany
   */
  export type EmailClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailClientes.
     */
    data: XOR<EmailClienteUpdateManyMutationInput, EmailClienteUncheckedUpdateManyInput>
    /**
     * Filter which EmailClientes to update
     */
    where?: EmailClienteWhereInput
    /**
     * Limit how many EmailClientes to update.
     */
    limit?: number
  }

  /**
   * EmailCliente updateManyAndReturn
   */
  export type EmailClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailCliente
     */
    select?: EmailClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailCliente
     */
    omit?: EmailClienteOmit<ExtArgs> | null
    /**
     * The data used to update EmailClientes.
     */
    data: XOR<EmailClienteUpdateManyMutationInput, EmailClienteUncheckedUpdateManyInput>
    /**
     * Filter which EmailClientes to update
     */
    where?: EmailClienteWhereInput
    /**
     * Limit how many EmailClientes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailClienteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailCliente upsert
   */
  export type EmailClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailCliente
     */
    select?: EmailClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailCliente
     */
    omit?: EmailClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the EmailCliente to update in case it exists.
     */
    where: EmailClienteWhereUniqueInput
    /**
     * In case the EmailCliente found by the `where` argument doesn't exist, create a new EmailCliente with this data.
     */
    create: XOR<EmailClienteCreateInput, EmailClienteUncheckedCreateInput>
    /**
     * In case the EmailCliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailClienteUpdateInput, EmailClienteUncheckedUpdateInput>
  }

  /**
   * EmailCliente delete
   */
  export type EmailClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailCliente
     */
    select?: EmailClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailCliente
     */
    omit?: EmailClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailClienteInclude<ExtArgs> | null
    /**
     * Filter which EmailCliente to delete.
     */
    where: EmailClienteWhereUniqueInput
  }

  /**
   * EmailCliente deleteMany
   */
  export type EmailClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailClientes to delete
     */
    where?: EmailClienteWhereInput
    /**
     * Limit how many EmailClientes to delete.
     */
    limit?: number
  }

  /**
   * EmailCliente without action
   */
  export type EmailClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailCliente
     */
    select?: EmailClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailCliente
     */
    omit?: EmailClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailClienteInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id_usuario: 'id_usuario',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    funcao: 'funcao'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const RATScalarFieldEnum: {
    id_rat: 'id_rat',
    ds_status: 'ds_status',
    fl_deslocamento: 'fl_deslocamento',
    dt_data_hora_entrada: 'dt_data_hora_entrada',
    dt_data_hora_saida: 'dt_data_hora_saida',
    tm_duracao: 'tm_duracao',
    tx_comentario_interno: 'tx_comentario_interno',
    ds_originada: 'ds_originada',
    ds_observacao: 'ds_observacao',
    nr_km_ida: 'nr_km_ida',
    nr_km_volta: 'nr_km_volta',
    nr_valor_pedagio: 'nr_valor_pedagio',
    tx_atividades: 'tx_atividades',
    tx_tarefas: 'tx_tarefas',
    tx_pendencias: 'tx_pendencias',
    id_usuario: 'id_usuario',
    id_cliente: 'id_cliente',
    id_contato: 'id_contato'
  };

  export type RATScalarFieldEnum = (typeof RATScalarFieldEnum)[keyof typeof RATScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    id_cliente: 'id_cliente',
    fl_ativo: 'fl_ativo',
    ds_nome: 'ds_nome',
    ds_razao_social: 'ds_razao_social',
    nr_cnpj: 'nr_cnpj',
    nr_inscricao_estadual: 'nr_inscricao_estadual',
    ds_site: 'ds_site',
    ds_endereco: 'ds_endereco',
    ds_cep: 'ds_cep',
    ds_uf: 'ds_uf',
    ds_cidade: 'ds_cidade',
    ds_bairro: 'ds_bairro',
    nr_numero: 'nr_numero',
    ds_complemento: 'ds_complemento',
    nr_codigo_ibge: 'nr_codigo_ibge',
    nr_latitude: 'nr_latitude',
    nr_longitude: 'nr_longitude',
    nr_distancia_km: 'nr_distancia_km',
    tx_observacao_ident: 'tx_observacao_ident',
    fl_matriz: 'fl_matriz',
    ds_situacao: 'ds_situacao',
    ds_sistema: 'ds_sistema',
    ds_contrato: 'ds_contrato',
    nr_nomeados: 'nr_nomeados',
    nr_simultaneos: 'nr_simultaneos',
    nr_tecnica_remoto: 'nr_tecnica_remoto',
    nr_tecnica_presencial: 'nr_tecnica_presencial',
    tm_minimo_horas: 'tm_minimo_horas',
    ds_diario_viagem: 'ds_diario_viagem',
    ds_regiao: 'ds_regiao',
    tx_observacao_contrato: 'tx_observacao_contrato',
    nr_codigo_zz: 'nr_codigo_zz',
    nr_franquia_nf: 'nr_franquia_nf',
    nr_qtde_documentos: 'nr_qtde_documentos',
    nr_valor_franqia: 'nr_valor_franqia',
    nr_valor_excendente: 'nr_valor_excendente',
    dt_data_contrato: 'dt_data_contrato'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const ContatoScalarFieldEnum: {
    id_contato: 'id_contato',
    ds_nome: 'ds_nome',
    ds_cargo: 'ds_cargo',
    fl_ativo: 'fl_ativo',
    tx_observacoes: 'tx_observacoes',
    ds_email: 'ds_email',
    ds_telefone: 'ds_telefone',
    fl_whatsapp: 'fl_whatsapp'
  };

  export type ContatoScalarFieldEnum = (typeof ContatoScalarFieldEnum)[keyof typeof ContatoScalarFieldEnum]


  export const ClienteContatoScalarFieldEnum: {
    id: 'id',
    id_cliente: 'id_cliente',
    id_contato: 'id_contato'
  };

  export type ClienteContatoScalarFieldEnum = (typeof ClienteContatoScalarFieldEnum)[keyof typeof ClienteContatoScalarFieldEnum]


  export const EmailClienteScalarFieldEnum: {
    id: 'id',
    ds_email: 'ds_email',
    id_cliente: 'id_cliente'
  };

  export type EmailClienteScalarFieldEnum = (typeof EmailClienteScalarFieldEnum)[keyof typeof EmailClienteScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id_usuario?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    funcao?: StringFilter<"Usuario"> | string
    rats?: RATListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id_usuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    funcao?: SortOrder
    rats?: RATOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    funcao?: StringFilter<"Usuario"> | string
    rats?: RATListRelationFilter
  }, "id_usuario" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    funcao?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    funcao?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type RATWhereInput = {
    AND?: RATWhereInput | RATWhereInput[]
    OR?: RATWhereInput[]
    NOT?: RATWhereInput | RATWhereInput[]
    id_rat?: IntFilter<"RAT"> | number
    ds_status?: StringFilter<"RAT"> | string
    fl_deslocamento?: StringFilter<"RAT"> | string
    dt_data_hora_entrada?: DateTimeFilter<"RAT"> | Date | string
    dt_data_hora_saida?: DateTimeFilter<"RAT"> | Date | string
    tm_duracao?: DateTimeFilter<"RAT"> | Date | string
    tx_comentario_interno?: StringFilter<"RAT"> | string
    ds_originada?: StringFilter<"RAT"> | string
    ds_observacao?: StringFilter<"RAT"> | string
    nr_km_ida?: IntNullableFilter<"RAT"> | number | null
    nr_km_volta?: IntNullableFilter<"RAT"> | number | null
    nr_valor_pedagio?: FloatNullableFilter<"RAT"> | number | null
    tx_atividades?: StringFilter<"RAT"> | string
    tx_tarefas?: StringFilter<"RAT"> | string
    tx_pendencias?: StringFilter<"RAT"> | string
    id_usuario?: IntFilter<"RAT"> | number
    id_cliente?: IntFilter<"RAT"> | number
    id_contato?: IntFilter<"RAT"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    contato?: XOR<ContatoScalarRelationFilter, ContatoWhereInput>
  }

  export type RATOrderByWithRelationInput = {
    id_rat?: SortOrder
    ds_status?: SortOrder
    fl_deslocamento?: SortOrder
    dt_data_hora_entrada?: SortOrder
    dt_data_hora_saida?: SortOrder
    tm_duracao?: SortOrder
    tx_comentario_interno?: SortOrder
    ds_originada?: SortOrder
    ds_observacao?: SortOrder
    nr_km_ida?: SortOrderInput | SortOrder
    nr_km_volta?: SortOrderInput | SortOrder
    nr_valor_pedagio?: SortOrderInput | SortOrder
    tx_atividades?: SortOrder
    tx_tarefas?: SortOrder
    tx_pendencias?: SortOrder
    id_usuario?: SortOrder
    id_cliente?: SortOrder
    id_contato?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    cliente?: ClienteOrderByWithRelationInput
    contato?: ContatoOrderByWithRelationInput
  }

  export type RATWhereUniqueInput = Prisma.AtLeast<{
    id_rat?: number
    AND?: RATWhereInput | RATWhereInput[]
    OR?: RATWhereInput[]
    NOT?: RATWhereInput | RATWhereInput[]
    ds_status?: StringFilter<"RAT"> | string
    fl_deslocamento?: StringFilter<"RAT"> | string
    dt_data_hora_entrada?: DateTimeFilter<"RAT"> | Date | string
    dt_data_hora_saida?: DateTimeFilter<"RAT"> | Date | string
    tm_duracao?: DateTimeFilter<"RAT"> | Date | string
    tx_comentario_interno?: StringFilter<"RAT"> | string
    ds_originada?: StringFilter<"RAT"> | string
    ds_observacao?: StringFilter<"RAT"> | string
    nr_km_ida?: IntNullableFilter<"RAT"> | number | null
    nr_km_volta?: IntNullableFilter<"RAT"> | number | null
    nr_valor_pedagio?: FloatNullableFilter<"RAT"> | number | null
    tx_atividades?: StringFilter<"RAT"> | string
    tx_tarefas?: StringFilter<"RAT"> | string
    tx_pendencias?: StringFilter<"RAT"> | string
    id_usuario?: IntFilter<"RAT"> | number
    id_cliente?: IntFilter<"RAT"> | number
    id_contato?: IntFilter<"RAT"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    contato?: XOR<ContatoScalarRelationFilter, ContatoWhereInput>
  }, "id_rat">

  export type RATOrderByWithAggregationInput = {
    id_rat?: SortOrder
    ds_status?: SortOrder
    fl_deslocamento?: SortOrder
    dt_data_hora_entrada?: SortOrder
    dt_data_hora_saida?: SortOrder
    tm_duracao?: SortOrder
    tx_comentario_interno?: SortOrder
    ds_originada?: SortOrder
    ds_observacao?: SortOrder
    nr_km_ida?: SortOrderInput | SortOrder
    nr_km_volta?: SortOrderInput | SortOrder
    nr_valor_pedagio?: SortOrderInput | SortOrder
    tx_atividades?: SortOrder
    tx_tarefas?: SortOrder
    tx_pendencias?: SortOrder
    id_usuario?: SortOrder
    id_cliente?: SortOrder
    id_contato?: SortOrder
    _count?: RATCountOrderByAggregateInput
    _avg?: RATAvgOrderByAggregateInput
    _max?: RATMaxOrderByAggregateInput
    _min?: RATMinOrderByAggregateInput
    _sum?: RATSumOrderByAggregateInput
  }

  export type RATScalarWhereWithAggregatesInput = {
    AND?: RATScalarWhereWithAggregatesInput | RATScalarWhereWithAggregatesInput[]
    OR?: RATScalarWhereWithAggregatesInput[]
    NOT?: RATScalarWhereWithAggregatesInput | RATScalarWhereWithAggregatesInput[]
    id_rat?: IntWithAggregatesFilter<"RAT"> | number
    ds_status?: StringWithAggregatesFilter<"RAT"> | string
    fl_deslocamento?: StringWithAggregatesFilter<"RAT"> | string
    dt_data_hora_entrada?: DateTimeWithAggregatesFilter<"RAT"> | Date | string
    dt_data_hora_saida?: DateTimeWithAggregatesFilter<"RAT"> | Date | string
    tm_duracao?: DateTimeWithAggregatesFilter<"RAT"> | Date | string
    tx_comentario_interno?: StringWithAggregatesFilter<"RAT"> | string
    ds_originada?: StringWithAggregatesFilter<"RAT"> | string
    ds_observacao?: StringWithAggregatesFilter<"RAT"> | string
    nr_km_ida?: IntNullableWithAggregatesFilter<"RAT"> | number | null
    nr_km_volta?: IntNullableWithAggregatesFilter<"RAT"> | number | null
    nr_valor_pedagio?: FloatNullableWithAggregatesFilter<"RAT"> | number | null
    tx_atividades?: StringWithAggregatesFilter<"RAT"> | string
    tx_tarefas?: StringWithAggregatesFilter<"RAT"> | string
    tx_pendencias?: StringWithAggregatesFilter<"RAT"> | string
    id_usuario?: IntWithAggregatesFilter<"RAT"> | number
    id_cliente?: IntWithAggregatesFilter<"RAT"> | number
    id_contato?: IntWithAggregatesFilter<"RAT"> | number
  }

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id_cliente?: IntFilter<"Cliente"> | number
    fl_ativo?: BoolFilter<"Cliente"> | boolean
    ds_nome?: StringFilter<"Cliente"> | string
    ds_razao_social?: StringFilter<"Cliente"> | string
    nr_cnpj?: StringFilter<"Cliente"> | string
    nr_inscricao_estadual?: StringFilter<"Cliente"> | string
    ds_site?: StringNullableFilter<"Cliente"> | string | null
    ds_endereco?: StringFilter<"Cliente"> | string
    ds_cep?: StringFilter<"Cliente"> | string
    ds_uf?: StringFilter<"Cliente"> | string
    ds_cidade?: StringFilter<"Cliente"> | string
    ds_bairro?: StringFilter<"Cliente"> | string
    nr_numero?: StringFilter<"Cliente"> | string
    ds_complemento?: StringNullableFilter<"Cliente"> | string | null
    nr_codigo_ibge?: StringNullableFilter<"Cliente"> | string | null
    nr_latitude?: FloatNullableFilter<"Cliente"> | number | null
    nr_longitude?: FloatNullableFilter<"Cliente"> | number | null
    nr_distancia_km?: FloatNullableFilter<"Cliente"> | number | null
    tx_observacao_ident?: StringNullableFilter<"Cliente"> | string | null
    fl_matriz?: BoolFilter<"Cliente"> | boolean
    ds_situacao?: StringFilter<"Cliente"> | string
    ds_sistema?: StringFilter<"Cliente"> | string
    ds_contrato?: StringFilter<"Cliente"> | string
    nr_nomeados?: IntFilter<"Cliente"> | number
    nr_simultaneos?: IntFilter<"Cliente"> | number
    nr_tecnica_remoto?: FloatNullableFilter<"Cliente"> | number | null
    nr_tecnica_presencial?: FloatNullableFilter<"Cliente"> | number | null
    tm_minimo_horas?: DateTimeFilter<"Cliente"> | Date | string
    ds_diario_viagem?: StringFilter<"Cliente"> | string
    ds_regiao?: StringFilter<"Cliente"> | string
    tx_observacao_contrato?: StringFilter<"Cliente"> | string
    nr_codigo_zz?: IntFilter<"Cliente"> | number
    nr_franquia_nf?: FloatFilter<"Cliente"> | number
    nr_qtde_documentos?: IntFilter<"Cliente"> | number
    nr_valor_franqia?: FloatFilter<"Cliente"> | number
    nr_valor_excendente?: FloatFilter<"Cliente"> | number
    dt_data_contrato?: DateTimeFilter<"Cliente"> | Date | string
    clientesContatos?: ClienteContatoListRelationFilter
    emails?: EmailClienteListRelationFilter
    rats?: RATListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id_cliente?: SortOrder
    fl_ativo?: SortOrder
    ds_nome?: SortOrder
    ds_razao_social?: SortOrder
    nr_cnpj?: SortOrder
    nr_inscricao_estadual?: SortOrder
    ds_site?: SortOrderInput | SortOrder
    ds_endereco?: SortOrder
    ds_cep?: SortOrder
    ds_uf?: SortOrder
    ds_cidade?: SortOrder
    ds_bairro?: SortOrder
    nr_numero?: SortOrder
    ds_complemento?: SortOrderInput | SortOrder
    nr_codigo_ibge?: SortOrderInput | SortOrder
    nr_latitude?: SortOrderInput | SortOrder
    nr_longitude?: SortOrderInput | SortOrder
    nr_distancia_km?: SortOrderInput | SortOrder
    tx_observacao_ident?: SortOrderInput | SortOrder
    fl_matriz?: SortOrder
    ds_situacao?: SortOrder
    ds_sistema?: SortOrder
    ds_contrato?: SortOrder
    nr_nomeados?: SortOrder
    nr_simultaneos?: SortOrder
    nr_tecnica_remoto?: SortOrderInput | SortOrder
    nr_tecnica_presencial?: SortOrderInput | SortOrder
    tm_minimo_horas?: SortOrder
    ds_diario_viagem?: SortOrder
    ds_regiao?: SortOrder
    tx_observacao_contrato?: SortOrder
    nr_codigo_zz?: SortOrder
    nr_franquia_nf?: SortOrder
    nr_qtde_documentos?: SortOrder
    nr_valor_franqia?: SortOrder
    nr_valor_excendente?: SortOrder
    dt_data_contrato?: SortOrder
    clientesContatos?: ClienteContatoOrderByRelationAggregateInput
    emails?: EmailClienteOrderByRelationAggregateInput
    rats?: RATOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id_cliente?: number
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    fl_ativo?: BoolFilter<"Cliente"> | boolean
    ds_nome?: StringFilter<"Cliente"> | string
    ds_razao_social?: StringFilter<"Cliente"> | string
    nr_cnpj?: StringFilter<"Cliente"> | string
    nr_inscricao_estadual?: StringFilter<"Cliente"> | string
    ds_site?: StringNullableFilter<"Cliente"> | string | null
    ds_endereco?: StringFilter<"Cliente"> | string
    ds_cep?: StringFilter<"Cliente"> | string
    ds_uf?: StringFilter<"Cliente"> | string
    ds_cidade?: StringFilter<"Cliente"> | string
    ds_bairro?: StringFilter<"Cliente"> | string
    nr_numero?: StringFilter<"Cliente"> | string
    ds_complemento?: StringNullableFilter<"Cliente"> | string | null
    nr_codigo_ibge?: StringNullableFilter<"Cliente"> | string | null
    nr_latitude?: FloatNullableFilter<"Cliente"> | number | null
    nr_longitude?: FloatNullableFilter<"Cliente"> | number | null
    nr_distancia_km?: FloatNullableFilter<"Cliente"> | number | null
    tx_observacao_ident?: StringNullableFilter<"Cliente"> | string | null
    fl_matriz?: BoolFilter<"Cliente"> | boolean
    ds_situacao?: StringFilter<"Cliente"> | string
    ds_sistema?: StringFilter<"Cliente"> | string
    ds_contrato?: StringFilter<"Cliente"> | string
    nr_nomeados?: IntFilter<"Cliente"> | number
    nr_simultaneos?: IntFilter<"Cliente"> | number
    nr_tecnica_remoto?: FloatNullableFilter<"Cliente"> | number | null
    nr_tecnica_presencial?: FloatNullableFilter<"Cliente"> | number | null
    tm_minimo_horas?: DateTimeFilter<"Cliente"> | Date | string
    ds_diario_viagem?: StringFilter<"Cliente"> | string
    ds_regiao?: StringFilter<"Cliente"> | string
    tx_observacao_contrato?: StringFilter<"Cliente"> | string
    nr_codigo_zz?: IntFilter<"Cliente"> | number
    nr_franquia_nf?: FloatFilter<"Cliente"> | number
    nr_qtde_documentos?: IntFilter<"Cliente"> | number
    nr_valor_franqia?: FloatFilter<"Cliente"> | number
    nr_valor_excendente?: FloatFilter<"Cliente"> | number
    dt_data_contrato?: DateTimeFilter<"Cliente"> | Date | string
    clientesContatos?: ClienteContatoListRelationFilter
    emails?: EmailClienteListRelationFilter
    rats?: RATListRelationFilter
  }, "id_cliente">

  export type ClienteOrderByWithAggregationInput = {
    id_cliente?: SortOrder
    fl_ativo?: SortOrder
    ds_nome?: SortOrder
    ds_razao_social?: SortOrder
    nr_cnpj?: SortOrder
    nr_inscricao_estadual?: SortOrder
    ds_site?: SortOrderInput | SortOrder
    ds_endereco?: SortOrder
    ds_cep?: SortOrder
    ds_uf?: SortOrder
    ds_cidade?: SortOrder
    ds_bairro?: SortOrder
    nr_numero?: SortOrder
    ds_complemento?: SortOrderInput | SortOrder
    nr_codigo_ibge?: SortOrderInput | SortOrder
    nr_latitude?: SortOrderInput | SortOrder
    nr_longitude?: SortOrderInput | SortOrder
    nr_distancia_km?: SortOrderInput | SortOrder
    tx_observacao_ident?: SortOrderInput | SortOrder
    fl_matriz?: SortOrder
    ds_situacao?: SortOrder
    ds_sistema?: SortOrder
    ds_contrato?: SortOrder
    nr_nomeados?: SortOrder
    nr_simultaneos?: SortOrder
    nr_tecnica_remoto?: SortOrderInput | SortOrder
    nr_tecnica_presencial?: SortOrderInput | SortOrder
    tm_minimo_horas?: SortOrder
    ds_diario_viagem?: SortOrder
    ds_regiao?: SortOrder
    tx_observacao_contrato?: SortOrder
    nr_codigo_zz?: SortOrder
    nr_franquia_nf?: SortOrder
    nr_qtde_documentos?: SortOrder
    nr_valor_franqia?: SortOrder
    nr_valor_excendente?: SortOrder
    dt_data_contrato?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id_cliente?: IntWithAggregatesFilter<"Cliente"> | number
    fl_ativo?: BoolWithAggregatesFilter<"Cliente"> | boolean
    ds_nome?: StringWithAggregatesFilter<"Cliente"> | string
    ds_razao_social?: StringWithAggregatesFilter<"Cliente"> | string
    nr_cnpj?: StringWithAggregatesFilter<"Cliente"> | string
    nr_inscricao_estadual?: StringWithAggregatesFilter<"Cliente"> | string
    ds_site?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    ds_endereco?: StringWithAggregatesFilter<"Cliente"> | string
    ds_cep?: StringWithAggregatesFilter<"Cliente"> | string
    ds_uf?: StringWithAggregatesFilter<"Cliente"> | string
    ds_cidade?: StringWithAggregatesFilter<"Cliente"> | string
    ds_bairro?: StringWithAggregatesFilter<"Cliente"> | string
    nr_numero?: StringWithAggregatesFilter<"Cliente"> | string
    ds_complemento?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    nr_codigo_ibge?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    nr_latitude?: FloatNullableWithAggregatesFilter<"Cliente"> | number | null
    nr_longitude?: FloatNullableWithAggregatesFilter<"Cliente"> | number | null
    nr_distancia_km?: FloatNullableWithAggregatesFilter<"Cliente"> | number | null
    tx_observacao_ident?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    fl_matriz?: BoolWithAggregatesFilter<"Cliente"> | boolean
    ds_situacao?: StringWithAggregatesFilter<"Cliente"> | string
    ds_sistema?: StringWithAggregatesFilter<"Cliente"> | string
    ds_contrato?: StringWithAggregatesFilter<"Cliente"> | string
    nr_nomeados?: IntWithAggregatesFilter<"Cliente"> | number
    nr_simultaneos?: IntWithAggregatesFilter<"Cliente"> | number
    nr_tecnica_remoto?: FloatNullableWithAggregatesFilter<"Cliente"> | number | null
    nr_tecnica_presencial?: FloatNullableWithAggregatesFilter<"Cliente"> | number | null
    tm_minimo_horas?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
    ds_diario_viagem?: StringWithAggregatesFilter<"Cliente"> | string
    ds_regiao?: StringWithAggregatesFilter<"Cliente"> | string
    tx_observacao_contrato?: StringWithAggregatesFilter<"Cliente"> | string
    nr_codigo_zz?: IntWithAggregatesFilter<"Cliente"> | number
    nr_franquia_nf?: FloatWithAggregatesFilter<"Cliente"> | number
    nr_qtde_documentos?: IntWithAggregatesFilter<"Cliente"> | number
    nr_valor_franqia?: FloatWithAggregatesFilter<"Cliente"> | number
    nr_valor_excendente?: FloatWithAggregatesFilter<"Cliente"> | number
    dt_data_contrato?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
  }

  export type ContatoWhereInput = {
    AND?: ContatoWhereInput | ContatoWhereInput[]
    OR?: ContatoWhereInput[]
    NOT?: ContatoWhereInput | ContatoWhereInput[]
    id_contato?: IntFilter<"Contato"> | number
    ds_nome?: StringFilter<"Contato"> | string
    ds_cargo?: StringFilter<"Contato"> | string
    fl_ativo?: BoolFilter<"Contato"> | boolean
    tx_observacoes?: StringNullableFilter<"Contato"> | string | null
    ds_email?: StringFilter<"Contato"> | string
    ds_telefone?: StringFilter<"Contato"> | string
    fl_whatsapp?: BoolFilter<"Contato"> | boolean
    clientesContatos?: ClienteContatoListRelationFilter
    rats?: RATListRelationFilter
  }

  export type ContatoOrderByWithRelationInput = {
    id_contato?: SortOrder
    ds_nome?: SortOrder
    ds_cargo?: SortOrder
    fl_ativo?: SortOrder
    tx_observacoes?: SortOrderInput | SortOrder
    ds_email?: SortOrder
    ds_telefone?: SortOrder
    fl_whatsapp?: SortOrder
    clientesContatos?: ClienteContatoOrderByRelationAggregateInput
    rats?: RATOrderByRelationAggregateInput
  }

  export type ContatoWhereUniqueInput = Prisma.AtLeast<{
    id_contato?: number
    AND?: ContatoWhereInput | ContatoWhereInput[]
    OR?: ContatoWhereInput[]
    NOT?: ContatoWhereInput | ContatoWhereInput[]
    ds_nome?: StringFilter<"Contato"> | string
    ds_cargo?: StringFilter<"Contato"> | string
    fl_ativo?: BoolFilter<"Contato"> | boolean
    tx_observacoes?: StringNullableFilter<"Contato"> | string | null
    ds_email?: StringFilter<"Contato"> | string
    ds_telefone?: StringFilter<"Contato"> | string
    fl_whatsapp?: BoolFilter<"Contato"> | boolean
    clientesContatos?: ClienteContatoListRelationFilter
    rats?: RATListRelationFilter
  }, "id_contato">

  export type ContatoOrderByWithAggregationInput = {
    id_contato?: SortOrder
    ds_nome?: SortOrder
    ds_cargo?: SortOrder
    fl_ativo?: SortOrder
    tx_observacoes?: SortOrderInput | SortOrder
    ds_email?: SortOrder
    ds_telefone?: SortOrder
    fl_whatsapp?: SortOrder
    _count?: ContatoCountOrderByAggregateInput
    _avg?: ContatoAvgOrderByAggregateInput
    _max?: ContatoMaxOrderByAggregateInput
    _min?: ContatoMinOrderByAggregateInput
    _sum?: ContatoSumOrderByAggregateInput
  }

  export type ContatoScalarWhereWithAggregatesInput = {
    AND?: ContatoScalarWhereWithAggregatesInput | ContatoScalarWhereWithAggregatesInput[]
    OR?: ContatoScalarWhereWithAggregatesInput[]
    NOT?: ContatoScalarWhereWithAggregatesInput | ContatoScalarWhereWithAggregatesInput[]
    id_contato?: IntWithAggregatesFilter<"Contato"> | number
    ds_nome?: StringWithAggregatesFilter<"Contato"> | string
    ds_cargo?: StringWithAggregatesFilter<"Contato"> | string
    fl_ativo?: BoolWithAggregatesFilter<"Contato"> | boolean
    tx_observacoes?: StringNullableWithAggregatesFilter<"Contato"> | string | null
    ds_email?: StringWithAggregatesFilter<"Contato"> | string
    ds_telefone?: StringWithAggregatesFilter<"Contato"> | string
    fl_whatsapp?: BoolWithAggregatesFilter<"Contato"> | boolean
  }

  export type ClienteContatoWhereInput = {
    AND?: ClienteContatoWhereInput | ClienteContatoWhereInput[]
    OR?: ClienteContatoWhereInput[]
    NOT?: ClienteContatoWhereInput | ClienteContatoWhereInput[]
    id?: IntFilter<"ClienteContato"> | number
    id_cliente?: IntFilter<"ClienteContato"> | number
    id_contato?: IntFilter<"ClienteContato"> | number
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    contato?: XOR<ContatoScalarRelationFilter, ContatoWhereInput>
  }

  export type ClienteContatoOrderByWithRelationInput = {
    id?: SortOrder
    id_cliente?: SortOrder
    id_contato?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    contato?: ContatoOrderByWithRelationInput
  }

  export type ClienteContatoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    id_cliente_id_contato?: ClienteContatoId_cliente_id_contatoCompoundUniqueInput
    AND?: ClienteContatoWhereInput | ClienteContatoWhereInput[]
    OR?: ClienteContatoWhereInput[]
    NOT?: ClienteContatoWhereInput | ClienteContatoWhereInput[]
    id_cliente?: IntFilter<"ClienteContato"> | number
    id_contato?: IntFilter<"ClienteContato"> | number
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    contato?: XOR<ContatoScalarRelationFilter, ContatoWhereInput>
  }, "id" | "id_cliente_id_contato">

  export type ClienteContatoOrderByWithAggregationInput = {
    id?: SortOrder
    id_cliente?: SortOrder
    id_contato?: SortOrder
    _count?: ClienteContatoCountOrderByAggregateInput
    _avg?: ClienteContatoAvgOrderByAggregateInput
    _max?: ClienteContatoMaxOrderByAggregateInput
    _min?: ClienteContatoMinOrderByAggregateInput
    _sum?: ClienteContatoSumOrderByAggregateInput
  }

  export type ClienteContatoScalarWhereWithAggregatesInput = {
    AND?: ClienteContatoScalarWhereWithAggregatesInput | ClienteContatoScalarWhereWithAggregatesInput[]
    OR?: ClienteContatoScalarWhereWithAggregatesInput[]
    NOT?: ClienteContatoScalarWhereWithAggregatesInput | ClienteContatoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ClienteContato"> | number
    id_cliente?: IntWithAggregatesFilter<"ClienteContato"> | number
    id_contato?: IntWithAggregatesFilter<"ClienteContato"> | number
  }

  export type EmailClienteWhereInput = {
    AND?: EmailClienteWhereInput | EmailClienteWhereInput[]
    OR?: EmailClienteWhereInput[]
    NOT?: EmailClienteWhereInput | EmailClienteWhereInput[]
    id?: IntFilter<"EmailCliente"> | number
    ds_email?: StringFilter<"EmailCliente"> | string
    id_cliente?: IntFilter<"EmailCliente"> | number
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }

  export type EmailClienteOrderByWithRelationInput = {
    id?: SortOrder
    ds_email?: SortOrder
    id_cliente?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
  }

  export type EmailClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmailClienteWhereInput | EmailClienteWhereInput[]
    OR?: EmailClienteWhereInput[]
    NOT?: EmailClienteWhereInput | EmailClienteWhereInput[]
    ds_email?: StringFilter<"EmailCliente"> | string
    id_cliente?: IntFilter<"EmailCliente"> | number
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }, "id">

  export type EmailClienteOrderByWithAggregationInput = {
    id?: SortOrder
    ds_email?: SortOrder
    id_cliente?: SortOrder
    _count?: EmailClienteCountOrderByAggregateInput
    _avg?: EmailClienteAvgOrderByAggregateInput
    _max?: EmailClienteMaxOrderByAggregateInput
    _min?: EmailClienteMinOrderByAggregateInput
    _sum?: EmailClienteSumOrderByAggregateInput
  }

  export type EmailClienteScalarWhereWithAggregatesInput = {
    AND?: EmailClienteScalarWhereWithAggregatesInput | EmailClienteScalarWhereWithAggregatesInput[]
    OR?: EmailClienteScalarWhereWithAggregatesInput[]
    NOT?: EmailClienteScalarWhereWithAggregatesInput | EmailClienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EmailCliente"> | number
    ds_email?: StringWithAggregatesFilter<"EmailCliente"> | string
    id_cliente?: IntWithAggregatesFilter<"EmailCliente"> | number
  }

  export type UsuarioCreateInput = {
    nome: string
    email: string
    senha: string
    funcao: string
    rats?: RATCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id_usuario?: number
    nome: string
    email: string
    senha: string
    funcao: string
    rats?: RATUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    funcao?: StringFieldUpdateOperationsInput | string
    rats?: RATUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    funcao?: StringFieldUpdateOperationsInput | string
    rats?: RATUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id_usuario?: number
    nome: string
    email: string
    senha: string
    funcao: string
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    funcao?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    funcao?: StringFieldUpdateOperationsInput | string
  }

  export type RATCreateInput = {
    ds_status: string
    fl_deslocamento: string
    dt_data_hora_entrada: Date | string
    dt_data_hora_saida: Date | string
    tm_duracao: Date | string
    tx_comentario_interno: string
    ds_originada: string
    ds_observacao: string
    nr_km_ida?: number | null
    nr_km_volta?: number | null
    nr_valor_pedagio?: number | null
    tx_atividades: string
    tx_tarefas: string
    tx_pendencias: string
    usuario: UsuarioCreateNestedOneWithoutRatsInput
    cliente: ClienteCreateNestedOneWithoutRatsInput
    contato: ContatoCreateNestedOneWithoutRatsInput
  }

  export type RATUncheckedCreateInput = {
    id_rat?: number
    ds_status: string
    fl_deslocamento: string
    dt_data_hora_entrada: Date | string
    dt_data_hora_saida: Date | string
    tm_duracao: Date | string
    tx_comentario_interno: string
    ds_originada: string
    ds_observacao: string
    nr_km_ida?: number | null
    nr_km_volta?: number | null
    nr_valor_pedagio?: number | null
    tx_atividades: string
    tx_tarefas: string
    tx_pendencias: string
    id_usuario: number
    id_cliente: number
    id_contato: number
  }

  export type RATUpdateInput = {
    ds_status?: StringFieldUpdateOperationsInput | string
    fl_deslocamento?: StringFieldUpdateOperationsInput | string
    dt_data_hora_entrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_data_hora_saida?: DateTimeFieldUpdateOperationsInput | Date | string
    tm_duracao?: DateTimeFieldUpdateOperationsInput | Date | string
    tx_comentario_interno?: StringFieldUpdateOperationsInput | string
    ds_originada?: StringFieldUpdateOperationsInput | string
    ds_observacao?: StringFieldUpdateOperationsInput | string
    nr_km_ida?: NullableIntFieldUpdateOperationsInput | number | null
    nr_km_volta?: NullableIntFieldUpdateOperationsInput | number | null
    nr_valor_pedagio?: NullableFloatFieldUpdateOperationsInput | number | null
    tx_atividades?: StringFieldUpdateOperationsInput | string
    tx_tarefas?: StringFieldUpdateOperationsInput | string
    tx_pendencias?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutRatsNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutRatsNestedInput
    contato?: ContatoUpdateOneRequiredWithoutRatsNestedInput
  }

  export type RATUncheckedUpdateInput = {
    id_rat?: IntFieldUpdateOperationsInput | number
    ds_status?: StringFieldUpdateOperationsInput | string
    fl_deslocamento?: StringFieldUpdateOperationsInput | string
    dt_data_hora_entrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_data_hora_saida?: DateTimeFieldUpdateOperationsInput | Date | string
    tm_duracao?: DateTimeFieldUpdateOperationsInput | Date | string
    tx_comentario_interno?: StringFieldUpdateOperationsInput | string
    ds_originada?: StringFieldUpdateOperationsInput | string
    ds_observacao?: StringFieldUpdateOperationsInput | string
    nr_km_ida?: NullableIntFieldUpdateOperationsInput | number | null
    nr_km_volta?: NullableIntFieldUpdateOperationsInput | number | null
    nr_valor_pedagio?: NullableFloatFieldUpdateOperationsInput | number | null
    tx_atividades?: StringFieldUpdateOperationsInput | string
    tx_tarefas?: StringFieldUpdateOperationsInput | string
    tx_pendencias?: StringFieldUpdateOperationsInput | string
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_contato?: IntFieldUpdateOperationsInput | number
  }

  export type RATCreateManyInput = {
    id_rat?: number
    ds_status: string
    fl_deslocamento: string
    dt_data_hora_entrada: Date | string
    dt_data_hora_saida: Date | string
    tm_duracao: Date | string
    tx_comentario_interno: string
    ds_originada: string
    ds_observacao: string
    nr_km_ida?: number | null
    nr_km_volta?: number | null
    nr_valor_pedagio?: number | null
    tx_atividades: string
    tx_tarefas: string
    tx_pendencias: string
    id_usuario: number
    id_cliente: number
    id_contato: number
  }

  export type RATUpdateManyMutationInput = {
    ds_status?: StringFieldUpdateOperationsInput | string
    fl_deslocamento?: StringFieldUpdateOperationsInput | string
    dt_data_hora_entrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_data_hora_saida?: DateTimeFieldUpdateOperationsInput | Date | string
    tm_duracao?: DateTimeFieldUpdateOperationsInput | Date | string
    tx_comentario_interno?: StringFieldUpdateOperationsInput | string
    ds_originada?: StringFieldUpdateOperationsInput | string
    ds_observacao?: StringFieldUpdateOperationsInput | string
    nr_km_ida?: NullableIntFieldUpdateOperationsInput | number | null
    nr_km_volta?: NullableIntFieldUpdateOperationsInput | number | null
    nr_valor_pedagio?: NullableFloatFieldUpdateOperationsInput | number | null
    tx_atividades?: StringFieldUpdateOperationsInput | string
    tx_tarefas?: StringFieldUpdateOperationsInput | string
    tx_pendencias?: StringFieldUpdateOperationsInput | string
  }

  export type RATUncheckedUpdateManyInput = {
    id_rat?: IntFieldUpdateOperationsInput | number
    ds_status?: StringFieldUpdateOperationsInput | string
    fl_deslocamento?: StringFieldUpdateOperationsInput | string
    dt_data_hora_entrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_data_hora_saida?: DateTimeFieldUpdateOperationsInput | Date | string
    tm_duracao?: DateTimeFieldUpdateOperationsInput | Date | string
    tx_comentario_interno?: StringFieldUpdateOperationsInput | string
    ds_originada?: StringFieldUpdateOperationsInput | string
    ds_observacao?: StringFieldUpdateOperationsInput | string
    nr_km_ida?: NullableIntFieldUpdateOperationsInput | number | null
    nr_km_volta?: NullableIntFieldUpdateOperationsInput | number | null
    nr_valor_pedagio?: NullableFloatFieldUpdateOperationsInput | number | null
    tx_atividades?: StringFieldUpdateOperationsInput | string
    tx_tarefas?: StringFieldUpdateOperationsInput | string
    tx_pendencias?: StringFieldUpdateOperationsInput | string
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_contato?: IntFieldUpdateOperationsInput | number
  }

  export type ClienteCreateInput = {
    fl_ativo: boolean
    ds_nome: string
    ds_razao_social: string
    nr_cnpj: string
    nr_inscricao_estadual: string
    ds_site?: string | null
    ds_endereco: string
    ds_cep: string
    ds_uf: string
    ds_cidade: string
    ds_bairro: string
    nr_numero: string
    ds_complemento?: string | null
    nr_codigo_ibge?: string | null
    nr_latitude?: number | null
    nr_longitude?: number | null
    nr_distancia_km?: number | null
    tx_observacao_ident?: string | null
    fl_matriz: boolean
    ds_situacao: string
    ds_sistema: string
    ds_contrato: string
    nr_nomeados: number
    nr_simultaneos: number
    nr_tecnica_remoto?: number | null
    nr_tecnica_presencial?: number | null
    tm_minimo_horas: Date | string
    ds_diario_viagem: string
    ds_regiao: string
    tx_observacao_contrato: string
    nr_codigo_zz: number
    nr_franquia_nf: number
    nr_qtde_documentos: number
    nr_valor_franqia: number
    nr_valor_excendente: number
    dt_data_contrato: Date | string
    clientesContatos?: ClienteContatoCreateNestedManyWithoutClienteInput
    emails?: EmailClienteCreateNestedManyWithoutClienteInput
    rats?: RATCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id_cliente?: number
    fl_ativo: boolean
    ds_nome: string
    ds_razao_social: string
    nr_cnpj: string
    nr_inscricao_estadual: string
    ds_site?: string | null
    ds_endereco: string
    ds_cep: string
    ds_uf: string
    ds_cidade: string
    ds_bairro: string
    nr_numero: string
    ds_complemento?: string | null
    nr_codigo_ibge?: string | null
    nr_latitude?: number | null
    nr_longitude?: number | null
    nr_distancia_km?: number | null
    tx_observacao_ident?: string | null
    fl_matriz: boolean
    ds_situacao: string
    ds_sistema: string
    ds_contrato: string
    nr_nomeados: number
    nr_simultaneos: number
    nr_tecnica_remoto?: number | null
    nr_tecnica_presencial?: number | null
    tm_minimo_horas: Date | string
    ds_diario_viagem: string
    ds_regiao: string
    tx_observacao_contrato: string
    nr_codigo_zz: number
    nr_franquia_nf: number
    nr_qtde_documentos: number
    nr_valor_franqia: number
    nr_valor_excendente: number
    dt_data_contrato: Date | string
    clientesContatos?: ClienteContatoUncheckedCreateNestedManyWithoutClienteInput
    emails?: EmailClienteUncheckedCreateNestedManyWithoutClienteInput
    rats?: RATUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    fl_ativo?: BoolFieldUpdateOperationsInput | boolean
    ds_nome?: StringFieldUpdateOperationsInput | string
    ds_razao_social?: StringFieldUpdateOperationsInput | string
    nr_cnpj?: StringFieldUpdateOperationsInput | string
    nr_inscricao_estadual?: StringFieldUpdateOperationsInput | string
    ds_site?: NullableStringFieldUpdateOperationsInput | string | null
    ds_endereco?: StringFieldUpdateOperationsInput | string
    ds_cep?: StringFieldUpdateOperationsInput | string
    ds_uf?: StringFieldUpdateOperationsInput | string
    ds_cidade?: StringFieldUpdateOperationsInput | string
    ds_bairro?: StringFieldUpdateOperationsInput | string
    nr_numero?: StringFieldUpdateOperationsInput | string
    ds_complemento?: NullableStringFieldUpdateOperationsInput | string | null
    nr_codigo_ibge?: NullableStringFieldUpdateOperationsInput | string | null
    nr_latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    nr_longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    nr_distancia_km?: NullableFloatFieldUpdateOperationsInput | number | null
    tx_observacao_ident?: NullableStringFieldUpdateOperationsInput | string | null
    fl_matriz?: BoolFieldUpdateOperationsInput | boolean
    ds_situacao?: StringFieldUpdateOperationsInput | string
    ds_sistema?: StringFieldUpdateOperationsInput | string
    ds_contrato?: StringFieldUpdateOperationsInput | string
    nr_nomeados?: IntFieldUpdateOperationsInput | number
    nr_simultaneos?: IntFieldUpdateOperationsInput | number
    nr_tecnica_remoto?: NullableFloatFieldUpdateOperationsInput | number | null
    nr_tecnica_presencial?: NullableFloatFieldUpdateOperationsInput | number | null
    tm_minimo_horas?: DateTimeFieldUpdateOperationsInput | Date | string
    ds_diario_viagem?: StringFieldUpdateOperationsInput | string
    ds_regiao?: StringFieldUpdateOperationsInput | string
    tx_observacao_contrato?: StringFieldUpdateOperationsInput | string
    nr_codigo_zz?: IntFieldUpdateOperationsInput | number
    nr_franquia_nf?: FloatFieldUpdateOperationsInput | number
    nr_qtde_documentos?: IntFieldUpdateOperationsInput | number
    nr_valor_franqia?: FloatFieldUpdateOperationsInput | number
    nr_valor_excendente?: FloatFieldUpdateOperationsInput | number
    dt_data_contrato?: DateTimeFieldUpdateOperationsInput | Date | string
    clientesContatos?: ClienteContatoUpdateManyWithoutClienteNestedInput
    emails?: EmailClienteUpdateManyWithoutClienteNestedInput
    rats?: RATUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    fl_ativo?: BoolFieldUpdateOperationsInput | boolean
    ds_nome?: StringFieldUpdateOperationsInput | string
    ds_razao_social?: StringFieldUpdateOperationsInput | string
    nr_cnpj?: StringFieldUpdateOperationsInput | string
    nr_inscricao_estadual?: StringFieldUpdateOperationsInput | string
    ds_site?: NullableStringFieldUpdateOperationsInput | string | null
    ds_endereco?: StringFieldUpdateOperationsInput | string
    ds_cep?: StringFieldUpdateOperationsInput | string
    ds_uf?: StringFieldUpdateOperationsInput | string
    ds_cidade?: StringFieldUpdateOperationsInput | string
    ds_bairro?: StringFieldUpdateOperationsInput | string
    nr_numero?: StringFieldUpdateOperationsInput | string
    ds_complemento?: NullableStringFieldUpdateOperationsInput | string | null
    nr_codigo_ibge?: NullableStringFieldUpdateOperationsInput | string | null
    nr_latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    nr_longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    nr_distancia_km?: NullableFloatFieldUpdateOperationsInput | number | null
    tx_observacao_ident?: NullableStringFieldUpdateOperationsInput | string | null
    fl_matriz?: BoolFieldUpdateOperationsInput | boolean
    ds_situacao?: StringFieldUpdateOperationsInput | string
    ds_sistema?: StringFieldUpdateOperationsInput | string
    ds_contrato?: StringFieldUpdateOperationsInput | string
    nr_nomeados?: IntFieldUpdateOperationsInput | number
    nr_simultaneos?: IntFieldUpdateOperationsInput | number
    nr_tecnica_remoto?: NullableFloatFieldUpdateOperationsInput | number | null
    nr_tecnica_presencial?: NullableFloatFieldUpdateOperationsInput | number | null
    tm_minimo_horas?: DateTimeFieldUpdateOperationsInput | Date | string
    ds_diario_viagem?: StringFieldUpdateOperationsInput | string
    ds_regiao?: StringFieldUpdateOperationsInput | string
    tx_observacao_contrato?: StringFieldUpdateOperationsInput | string
    nr_codigo_zz?: IntFieldUpdateOperationsInput | number
    nr_franquia_nf?: FloatFieldUpdateOperationsInput | number
    nr_qtde_documentos?: IntFieldUpdateOperationsInput | number
    nr_valor_franqia?: FloatFieldUpdateOperationsInput | number
    nr_valor_excendente?: FloatFieldUpdateOperationsInput | number
    dt_data_contrato?: DateTimeFieldUpdateOperationsInput | Date | string
    clientesContatos?: ClienteContatoUncheckedUpdateManyWithoutClienteNestedInput
    emails?: EmailClienteUncheckedUpdateManyWithoutClienteNestedInput
    rats?: RATUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id_cliente?: number
    fl_ativo: boolean
    ds_nome: string
    ds_razao_social: string
    nr_cnpj: string
    nr_inscricao_estadual: string
    ds_site?: string | null
    ds_endereco: string
    ds_cep: string
    ds_uf: string
    ds_cidade: string
    ds_bairro: string
    nr_numero: string
    ds_complemento?: string | null
    nr_codigo_ibge?: string | null
    nr_latitude?: number | null
    nr_longitude?: number | null
    nr_distancia_km?: number | null
    tx_observacao_ident?: string | null
    fl_matriz: boolean
    ds_situacao: string
    ds_sistema: string
    ds_contrato: string
    nr_nomeados: number
    nr_simultaneos: number
    nr_tecnica_remoto?: number | null
    nr_tecnica_presencial?: number | null
    tm_minimo_horas: Date | string
    ds_diario_viagem: string
    ds_regiao: string
    tx_observacao_contrato: string
    nr_codigo_zz: number
    nr_franquia_nf: number
    nr_qtde_documentos: number
    nr_valor_franqia: number
    nr_valor_excendente: number
    dt_data_contrato: Date | string
  }

  export type ClienteUpdateManyMutationInput = {
    fl_ativo?: BoolFieldUpdateOperationsInput | boolean
    ds_nome?: StringFieldUpdateOperationsInput | string
    ds_razao_social?: StringFieldUpdateOperationsInput | string
    nr_cnpj?: StringFieldUpdateOperationsInput | string
    nr_inscricao_estadual?: StringFieldUpdateOperationsInput | string
    ds_site?: NullableStringFieldUpdateOperationsInput | string | null
    ds_endereco?: StringFieldUpdateOperationsInput | string
    ds_cep?: StringFieldUpdateOperationsInput | string
    ds_uf?: StringFieldUpdateOperationsInput | string
    ds_cidade?: StringFieldUpdateOperationsInput | string
    ds_bairro?: StringFieldUpdateOperationsInput | string
    nr_numero?: StringFieldUpdateOperationsInput | string
    ds_complemento?: NullableStringFieldUpdateOperationsInput | string | null
    nr_codigo_ibge?: NullableStringFieldUpdateOperationsInput | string | null
    nr_latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    nr_longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    nr_distancia_km?: NullableFloatFieldUpdateOperationsInput | number | null
    tx_observacao_ident?: NullableStringFieldUpdateOperationsInput | string | null
    fl_matriz?: BoolFieldUpdateOperationsInput | boolean
    ds_situacao?: StringFieldUpdateOperationsInput | string
    ds_sistema?: StringFieldUpdateOperationsInput | string
    ds_contrato?: StringFieldUpdateOperationsInput | string
    nr_nomeados?: IntFieldUpdateOperationsInput | number
    nr_simultaneos?: IntFieldUpdateOperationsInput | number
    nr_tecnica_remoto?: NullableFloatFieldUpdateOperationsInput | number | null
    nr_tecnica_presencial?: NullableFloatFieldUpdateOperationsInput | number | null
    tm_minimo_horas?: DateTimeFieldUpdateOperationsInput | Date | string
    ds_diario_viagem?: StringFieldUpdateOperationsInput | string
    ds_regiao?: StringFieldUpdateOperationsInput | string
    tx_observacao_contrato?: StringFieldUpdateOperationsInput | string
    nr_codigo_zz?: IntFieldUpdateOperationsInput | number
    nr_franquia_nf?: FloatFieldUpdateOperationsInput | number
    nr_qtde_documentos?: IntFieldUpdateOperationsInput | number
    nr_valor_franqia?: FloatFieldUpdateOperationsInput | number
    nr_valor_excendente?: FloatFieldUpdateOperationsInput | number
    dt_data_contrato?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    fl_ativo?: BoolFieldUpdateOperationsInput | boolean
    ds_nome?: StringFieldUpdateOperationsInput | string
    ds_razao_social?: StringFieldUpdateOperationsInput | string
    nr_cnpj?: StringFieldUpdateOperationsInput | string
    nr_inscricao_estadual?: StringFieldUpdateOperationsInput | string
    ds_site?: NullableStringFieldUpdateOperationsInput | string | null
    ds_endereco?: StringFieldUpdateOperationsInput | string
    ds_cep?: StringFieldUpdateOperationsInput | string
    ds_uf?: StringFieldUpdateOperationsInput | string
    ds_cidade?: StringFieldUpdateOperationsInput | string
    ds_bairro?: StringFieldUpdateOperationsInput | string
    nr_numero?: StringFieldUpdateOperationsInput | string
    ds_complemento?: NullableStringFieldUpdateOperationsInput | string | null
    nr_codigo_ibge?: NullableStringFieldUpdateOperationsInput | string | null
    nr_latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    nr_longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    nr_distancia_km?: NullableFloatFieldUpdateOperationsInput | number | null
    tx_observacao_ident?: NullableStringFieldUpdateOperationsInput | string | null
    fl_matriz?: BoolFieldUpdateOperationsInput | boolean
    ds_situacao?: StringFieldUpdateOperationsInput | string
    ds_sistema?: StringFieldUpdateOperationsInput | string
    ds_contrato?: StringFieldUpdateOperationsInput | string
    nr_nomeados?: IntFieldUpdateOperationsInput | number
    nr_simultaneos?: IntFieldUpdateOperationsInput | number
    nr_tecnica_remoto?: NullableFloatFieldUpdateOperationsInput | number | null
    nr_tecnica_presencial?: NullableFloatFieldUpdateOperationsInput | number | null
    tm_minimo_horas?: DateTimeFieldUpdateOperationsInput | Date | string
    ds_diario_viagem?: StringFieldUpdateOperationsInput | string
    ds_regiao?: StringFieldUpdateOperationsInput | string
    tx_observacao_contrato?: StringFieldUpdateOperationsInput | string
    nr_codigo_zz?: IntFieldUpdateOperationsInput | number
    nr_franquia_nf?: FloatFieldUpdateOperationsInput | number
    nr_qtde_documentos?: IntFieldUpdateOperationsInput | number
    nr_valor_franqia?: FloatFieldUpdateOperationsInput | number
    nr_valor_excendente?: FloatFieldUpdateOperationsInput | number
    dt_data_contrato?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContatoCreateInput = {
    ds_nome: string
    ds_cargo: string
    fl_ativo: boolean
    tx_observacoes?: string | null
    ds_email: string
    ds_telefone: string
    fl_whatsapp: boolean
    clientesContatos?: ClienteContatoCreateNestedManyWithoutContatoInput
    rats?: RATCreateNestedManyWithoutContatoInput
  }

  export type ContatoUncheckedCreateInput = {
    id_contato?: number
    ds_nome: string
    ds_cargo: string
    fl_ativo: boolean
    tx_observacoes?: string | null
    ds_email: string
    ds_telefone: string
    fl_whatsapp: boolean
    clientesContatos?: ClienteContatoUncheckedCreateNestedManyWithoutContatoInput
    rats?: RATUncheckedCreateNestedManyWithoutContatoInput
  }

  export type ContatoUpdateInput = {
    ds_nome?: StringFieldUpdateOperationsInput | string
    ds_cargo?: StringFieldUpdateOperationsInput | string
    fl_ativo?: BoolFieldUpdateOperationsInput | boolean
    tx_observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    ds_email?: StringFieldUpdateOperationsInput | string
    ds_telefone?: StringFieldUpdateOperationsInput | string
    fl_whatsapp?: BoolFieldUpdateOperationsInput | boolean
    clientesContatos?: ClienteContatoUpdateManyWithoutContatoNestedInput
    rats?: RATUpdateManyWithoutContatoNestedInput
  }

  export type ContatoUncheckedUpdateInput = {
    id_contato?: IntFieldUpdateOperationsInput | number
    ds_nome?: StringFieldUpdateOperationsInput | string
    ds_cargo?: StringFieldUpdateOperationsInput | string
    fl_ativo?: BoolFieldUpdateOperationsInput | boolean
    tx_observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    ds_email?: StringFieldUpdateOperationsInput | string
    ds_telefone?: StringFieldUpdateOperationsInput | string
    fl_whatsapp?: BoolFieldUpdateOperationsInput | boolean
    clientesContatos?: ClienteContatoUncheckedUpdateManyWithoutContatoNestedInput
    rats?: RATUncheckedUpdateManyWithoutContatoNestedInput
  }

  export type ContatoCreateManyInput = {
    id_contato?: number
    ds_nome: string
    ds_cargo: string
    fl_ativo: boolean
    tx_observacoes?: string | null
    ds_email: string
    ds_telefone: string
    fl_whatsapp: boolean
  }

  export type ContatoUpdateManyMutationInput = {
    ds_nome?: StringFieldUpdateOperationsInput | string
    ds_cargo?: StringFieldUpdateOperationsInput | string
    fl_ativo?: BoolFieldUpdateOperationsInput | boolean
    tx_observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    ds_email?: StringFieldUpdateOperationsInput | string
    ds_telefone?: StringFieldUpdateOperationsInput | string
    fl_whatsapp?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ContatoUncheckedUpdateManyInput = {
    id_contato?: IntFieldUpdateOperationsInput | number
    ds_nome?: StringFieldUpdateOperationsInput | string
    ds_cargo?: StringFieldUpdateOperationsInput | string
    fl_ativo?: BoolFieldUpdateOperationsInput | boolean
    tx_observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    ds_email?: StringFieldUpdateOperationsInput | string
    ds_telefone?: StringFieldUpdateOperationsInput | string
    fl_whatsapp?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClienteContatoCreateInput = {
    cliente: ClienteCreateNestedOneWithoutClientesContatosInput
    contato: ContatoCreateNestedOneWithoutClientesContatosInput
  }

  export type ClienteContatoUncheckedCreateInput = {
    id?: number
    id_cliente: number
    id_contato: number
  }

  export type ClienteContatoUpdateInput = {
    cliente?: ClienteUpdateOneRequiredWithoutClientesContatosNestedInput
    contato?: ContatoUpdateOneRequiredWithoutClientesContatosNestedInput
  }

  export type ClienteContatoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_contato?: IntFieldUpdateOperationsInput | number
  }

  export type ClienteContatoCreateManyInput = {
    id?: number
    id_cliente: number
    id_contato: number
  }

  export type ClienteContatoUpdateManyMutationInput = {

  }

  export type ClienteContatoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_contato?: IntFieldUpdateOperationsInput | number
  }

  export type EmailClienteCreateInput = {
    ds_email: string
    cliente: ClienteCreateNestedOneWithoutEmailsInput
  }

  export type EmailClienteUncheckedCreateInput = {
    id?: number
    ds_email: string
    id_cliente: number
  }

  export type EmailClienteUpdateInput = {
    ds_email?: StringFieldUpdateOperationsInput | string
    cliente?: ClienteUpdateOneRequiredWithoutEmailsNestedInput
  }

  export type EmailClienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ds_email?: StringFieldUpdateOperationsInput | string
    id_cliente?: IntFieldUpdateOperationsInput | number
  }

  export type EmailClienteCreateManyInput = {
    id?: number
    ds_email: string
    id_cliente: number
  }

  export type EmailClienteUpdateManyMutationInput = {
    ds_email?: StringFieldUpdateOperationsInput | string
  }

  export type EmailClienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ds_email?: StringFieldUpdateOperationsInput | string
    id_cliente?: IntFieldUpdateOperationsInput | number
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

  export type RATListRelationFilter = {
    every?: RATWhereInput
    some?: RATWhereInput
    none?: RATWhereInput
  }

  export type RATOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    funcao?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    funcao?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    funcao?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id_usuario?: SortOrder
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type ContatoScalarRelationFilter = {
    is?: ContatoWhereInput
    isNot?: ContatoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RATCountOrderByAggregateInput = {
    id_rat?: SortOrder
    ds_status?: SortOrder
    fl_deslocamento?: SortOrder
    dt_data_hora_entrada?: SortOrder
    dt_data_hora_saida?: SortOrder
    tm_duracao?: SortOrder
    tx_comentario_interno?: SortOrder
    ds_originada?: SortOrder
    ds_observacao?: SortOrder
    nr_km_ida?: SortOrder
    nr_km_volta?: SortOrder
    nr_valor_pedagio?: SortOrder
    tx_atividades?: SortOrder
    tx_tarefas?: SortOrder
    tx_pendencias?: SortOrder
    id_usuario?: SortOrder
    id_cliente?: SortOrder
    id_contato?: SortOrder
  }

  export type RATAvgOrderByAggregateInput = {
    id_rat?: SortOrder
    nr_km_ida?: SortOrder
    nr_km_volta?: SortOrder
    nr_valor_pedagio?: SortOrder
    id_usuario?: SortOrder
    id_cliente?: SortOrder
    id_contato?: SortOrder
  }

  export type RATMaxOrderByAggregateInput = {
    id_rat?: SortOrder
    ds_status?: SortOrder
    fl_deslocamento?: SortOrder
    dt_data_hora_entrada?: SortOrder
    dt_data_hora_saida?: SortOrder
    tm_duracao?: SortOrder
    tx_comentario_interno?: SortOrder
    ds_originada?: SortOrder
    ds_observacao?: SortOrder
    nr_km_ida?: SortOrder
    nr_km_volta?: SortOrder
    nr_valor_pedagio?: SortOrder
    tx_atividades?: SortOrder
    tx_tarefas?: SortOrder
    tx_pendencias?: SortOrder
    id_usuario?: SortOrder
    id_cliente?: SortOrder
    id_contato?: SortOrder
  }

  export type RATMinOrderByAggregateInput = {
    id_rat?: SortOrder
    ds_status?: SortOrder
    fl_deslocamento?: SortOrder
    dt_data_hora_entrada?: SortOrder
    dt_data_hora_saida?: SortOrder
    tm_duracao?: SortOrder
    tx_comentario_interno?: SortOrder
    ds_originada?: SortOrder
    ds_observacao?: SortOrder
    nr_km_ida?: SortOrder
    nr_km_volta?: SortOrder
    nr_valor_pedagio?: SortOrder
    tx_atividades?: SortOrder
    tx_tarefas?: SortOrder
    tx_pendencias?: SortOrder
    id_usuario?: SortOrder
    id_cliente?: SortOrder
    id_contato?: SortOrder
  }

  export type RATSumOrderByAggregateInput = {
    id_rat?: SortOrder
    nr_km_ida?: SortOrder
    nr_km_volta?: SortOrder
    nr_valor_pedagio?: SortOrder
    id_usuario?: SortOrder
    id_cliente?: SortOrder
    id_contato?: SortOrder
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
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ClienteContatoListRelationFilter = {
    every?: ClienteContatoWhereInput
    some?: ClienteContatoWhereInput
    none?: ClienteContatoWhereInput
  }

  export type EmailClienteListRelationFilter = {
    every?: EmailClienteWhereInput
    some?: EmailClienteWhereInput
    none?: EmailClienteWhereInput
  }

  export type ClienteContatoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmailClienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    id_cliente?: SortOrder
    fl_ativo?: SortOrder
    ds_nome?: SortOrder
    ds_razao_social?: SortOrder
    nr_cnpj?: SortOrder
    nr_inscricao_estadual?: SortOrder
    ds_site?: SortOrder
    ds_endereco?: SortOrder
    ds_cep?: SortOrder
    ds_uf?: SortOrder
    ds_cidade?: SortOrder
    ds_bairro?: SortOrder
    nr_numero?: SortOrder
    ds_complemento?: SortOrder
    nr_codigo_ibge?: SortOrder
    nr_latitude?: SortOrder
    nr_longitude?: SortOrder
    nr_distancia_km?: SortOrder
    tx_observacao_ident?: SortOrder
    fl_matriz?: SortOrder
    ds_situacao?: SortOrder
    ds_sistema?: SortOrder
    ds_contrato?: SortOrder
    nr_nomeados?: SortOrder
    nr_simultaneos?: SortOrder
    nr_tecnica_remoto?: SortOrder
    nr_tecnica_presencial?: SortOrder
    tm_minimo_horas?: SortOrder
    ds_diario_viagem?: SortOrder
    ds_regiao?: SortOrder
    tx_observacao_contrato?: SortOrder
    nr_codigo_zz?: SortOrder
    nr_franquia_nf?: SortOrder
    nr_qtde_documentos?: SortOrder
    nr_valor_franqia?: SortOrder
    nr_valor_excendente?: SortOrder
    dt_data_contrato?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    id_cliente?: SortOrder
    nr_latitude?: SortOrder
    nr_longitude?: SortOrder
    nr_distancia_km?: SortOrder
    nr_nomeados?: SortOrder
    nr_simultaneos?: SortOrder
    nr_tecnica_remoto?: SortOrder
    nr_tecnica_presencial?: SortOrder
    nr_codigo_zz?: SortOrder
    nr_franquia_nf?: SortOrder
    nr_qtde_documentos?: SortOrder
    nr_valor_franqia?: SortOrder
    nr_valor_excendente?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id_cliente?: SortOrder
    fl_ativo?: SortOrder
    ds_nome?: SortOrder
    ds_razao_social?: SortOrder
    nr_cnpj?: SortOrder
    nr_inscricao_estadual?: SortOrder
    ds_site?: SortOrder
    ds_endereco?: SortOrder
    ds_cep?: SortOrder
    ds_uf?: SortOrder
    ds_cidade?: SortOrder
    ds_bairro?: SortOrder
    nr_numero?: SortOrder
    ds_complemento?: SortOrder
    nr_codigo_ibge?: SortOrder
    nr_latitude?: SortOrder
    nr_longitude?: SortOrder
    nr_distancia_km?: SortOrder
    tx_observacao_ident?: SortOrder
    fl_matriz?: SortOrder
    ds_situacao?: SortOrder
    ds_sistema?: SortOrder
    ds_contrato?: SortOrder
    nr_nomeados?: SortOrder
    nr_simultaneos?: SortOrder
    nr_tecnica_remoto?: SortOrder
    nr_tecnica_presencial?: SortOrder
    tm_minimo_horas?: SortOrder
    ds_diario_viagem?: SortOrder
    ds_regiao?: SortOrder
    tx_observacao_contrato?: SortOrder
    nr_codigo_zz?: SortOrder
    nr_franquia_nf?: SortOrder
    nr_qtde_documentos?: SortOrder
    nr_valor_franqia?: SortOrder
    nr_valor_excendente?: SortOrder
    dt_data_contrato?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id_cliente?: SortOrder
    fl_ativo?: SortOrder
    ds_nome?: SortOrder
    ds_razao_social?: SortOrder
    nr_cnpj?: SortOrder
    nr_inscricao_estadual?: SortOrder
    ds_site?: SortOrder
    ds_endereco?: SortOrder
    ds_cep?: SortOrder
    ds_uf?: SortOrder
    ds_cidade?: SortOrder
    ds_bairro?: SortOrder
    nr_numero?: SortOrder
    ds_complemento?: SortOrder
    nr_codigo_ibge?: SortOrder
    nr_latitude?: SortOrder
    nr_longitude?: SortOrder
    nr_distancia_km?: SortOrder
    tx_observacao_ident?: SortOrder
    fl_matriz?: SortOrder
    ds_situacao?: SortOrder
    ds_sistema?: SortOrder
    ds_contrato?: SortOrder
    nr_nomeados?: SortOrder
    nr_simultaneos?: SortOrder
    nr_tecnica_remoto?: SortOrder
    nr_tecnica_presencial?: SortOrder
    tm_minimo_horas?: SortOrder
    ds_diario_viagem?: SortOrder
    ds_regiao?: SortOrder
    tx_observacao_contrato?: SortOrder
    nr_codigo_zz?: SortOrder
    nr_franquia_nf?: SortOrder
    nr_qtde_documentos?: SortOrder
    nr_valor_franqia?: SortOrder
    nr_valor_excendente?: SortOrder
    dt_data_contrato?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    id_cliente?: SortOrder
    nr_latitude?: SortOrder
    nr_longitude?: SortOrder
    nr_distancia_km?: SortOrder
    nr_nomeados?: SortOrder
    nr_simultaneos?: SortOrder
    nr_tecnica_remoto?: SortOrder
    nr_tecnica_presencial?: SortOrder
    nr_codigo_zz?: SortOrder
    nr_franquia_nf?: SortOrder
    nr_qtde_documentos?: SortOrder
    nr_valor_franqia?: SortOrder
    nr_valor_excendente?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type ContatoCountOrderByAggregateInput = {
    id_contato?: SortOrder
    ds_nome?: SortOrder
    ds_cargo?: SortOrder
    fl_ativo?: SortOrder
    tx_observacoes?: SortOrder
    ds_email?: SortOrder
    ds_telefone?: SortOrder
    fl_whatsapp?: SortOrder
  }

  export type ContatoAvgOrderByAggregateInput = {
    id_contato?: SortOrder
  }

  export type ContatoMaxOrderByAggregateInput = {
    id_contato?: SortOrder
    ds_nome?: SortOrder
    ds_cargo?: SortOrder
    fl_ativo?: SortOrder
    tx_observacoes?: SortOrder
    ds_email?: SortOrder
    ds_telefone?: SortOrder
    fl_whatsapp?: SortOrder
  }

  export type ContatoMinOrderByAggregateInput = {
    id_contato?: SortOrder
    ds_nome?: SortOrder
    ds_cargo?: SortOrder
    fl_ativo?: SortOrder
    tx_observacoes?: SortOrder
    ds_email?: SortOrder
    ds_telefone?: SortOrder
    fl_whatsapp?: SortOrder
  }

  export type ContatoSumOrderByAggregateInput = {
    id_contato?: SortOrder
  }

  export type ClienteContatoId_cliente_id_contatoCompoundUniqueInput = {
    id_cliente: number
    id_contato: number
  }

  export type ClienteContatoCountOrderByAggregateInput = {
    id?: SortOrder
    id_cliente?: SortOrder
    id_contato?: SortOrder
  }

  export type ClienteContatoAvgOrderByAggregateInput = {
    id?: SortOrder
    id_cliente?: SortOrder
    id_contato?: SortOrder
  }

  export type ClienteContatoMaxOrderByAggregateInput = {
    id?: SortOrder
    id_cliente?: SortOrder
    id_contato?: SortOrder
  }

  export type ClienteContatoMinOrderByAggregateInput = {
    id?: SortOrder
    id_cliente?: SortOrder
    id_contato?: SortOrder
  }

  export type ClienteContatoSumOrderByAggregateInput = {
    id?: SortOrder
    id_cliente?: SortOrder
    id_contato?: SortOrder
  }

  export type EmailClienteCountOrderByAggregateInput = {
    id?: SortOrder
    ds_email?: SortOrder
    id_cliente?: SortOrder
  }

  export type EmailClienteAvgOrderByAggregateInput = {
    id?: SortOrder
    id_cliente?: SortOrder
  }

  export type EmailClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    ds_email?: SortOrder
    id_cliente?: SortOrder
  }

  export type EmailClienteMinOrderByAggregateInput = {
    id?: SortOrder
    ds_email?: SortOrder
    id_cliente?: SortOrder
  }

  export type EmailClienteSumOrderByAggregateInput = {
    id?: SortOrder
    id_cliente?: SortOrder
  }

  export type RATCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RATCreateWithoutUsuarioInput, RATUncheckedCreateWithoutUsuarioInput> | RATCreateWithoutUsuarioInput[] | RATUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RATCreateOrConnectWithoutUsuarioInput | RATCreateOrConnectWithoutUsuarioInput[]
    createMany?: RATCreateManyUsuarioInputEnvelope
    connect?: RATWhereUniqueInput | RATWhereUniqueInput[]
  }

  export type RATUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RATCreateWithoutUsuarioInput, RATUncheckedCreateWithoutUsuarioInput> | RATCreateWithoutUsuarioInput[] | RATUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RATCreateOrConnectWithoutUsuarioInput | RATCreateOrConnectWithoutUsuarioInput[]
    createMany?: RATCreateManyUsuarioInputEnvelope
    connect?: RATWhereUniqueInput | RATWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type RATUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RATCreateWithoutUsuarioInput, RATUncheckedCreateWithoutUsuarioInput> | RATCreateWithoutUsuarioInput[] | RATUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RATCreateOrConnectWithoutUsuarioInput | RATCreateOrConnectWithoutUsuarioInput[]
    upsert?: RATUpsertWithWhereUniqueWithoutUsuarioInput | RATUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RATCreateManyUsuarioInputEnvelope
    set?: RATWhereUniqueInput | RATWhereUniqueInput[]
    disconnect?: RATWhereUniqueInput | RATWhereUniqueInput[]
    delete?: RATWhereUniqueInput | RATWhereUniqueInput[]
    connect?: RATWhereUniqueInput | RATWhereUniqueInput[]
    update?: RATUpdateWithWhereUniqueWithoutUsuarioInput | RATUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RATUpdateManyWithWhereWithoutUsuarioInput | RATUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RATScalarWhereInput | RATScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RATUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RATCreateWithoutUsuarioInput, RATUncheckedCreateWithoutUsuarioInput> | RATCreateWithoutUsuarioInput[] | RATUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RATCreateOrConnectWithoutUsuarioInput | RATCreateOrConnectWithoutUsuarioInput[]
    upsert?: RATUpsertWithWhereUniqueWithoutUsuarioInput | RATUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RATCreateManyUsuarioInputEnvelope
    set?: RATWhereUniqueInput | RATWhereUniqueInput[]
    disconnect?: RATWhereUniqueInput | RATWhereUniqueInput[]
    delete?: RATWhereUniqueInput | RATWhereUniqueInput[]
    connect?: RATWhereUniqueInput | RATWhereUniqueInput[]
    update?: RATUpdateWithWhereUniqueWithoutUsuarioInput | RATUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RATUpdateManyWithWhereWithoutUsuarioInput | RATUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RATScalarWhereInput | RATScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutRatsInput = {
    create?: XOR<UsuarioCreateWithoutRatsInput, UsuarioUncheckedCreateWithoutRatsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRatsInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ClienteCreateNestedOneWithoutRatsInput = {
    create?: XOR<ClienteCreateWithoutRatsInput, ClienteUncheckedCreateWithoutRatsInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutRatsInput
    connect?: ClienteWhereUniqueInput
  }

  export type ContatoCreateNestedOneWithoutRatsInput = {
    create?: XOR<ContatoCreateWithoutRatsInput, ContatoUncheckedCreateWithoutRatsInput>
    connectOrCreate?: ContatoCreateOrConnectWithoutRatsInput
    connect?: ContatoWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
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
  }

  export type UsuarioUpdateOneRequiredWithoutRatsNestedInput = {
    create?: XOR<UsuarioCreateWithoutRatsInput, UsuarioUncheckedCreateWithoutRatsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRatsInput
    upsert?: UsuarioUpsertWithoutRatsInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutRatsInput, UsuarioUpdateWithoutRatsInput>, UsuarioUncheckedUpdateWithoutRatsInput>
  }

  export type ClienteUpdateOneRequiredWithoutRatsNestedInput = {
    create?: XOR<ClienteCreateWithoutRatsInput, ClienteUncheckedCreateWithoutRatsInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutRatsInput
    upsert?: ClienteUpsertWithoutRatsInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutRatsInput, ClienteUpdateWithoutRatsInput>, ClienteUncheckedUpdateWithoutRatsInput>
  }

  export type ContatoUpdateOneRequiredWithoutRatsNestedInput = {
    create?: XOR<ContatoCreateWithoutRatsInput, ContatoUncheckedCreateWithoutRatsInput>
    connectOrCreate?: ContatoCreateOrConnectWithoutRatsInput
    upsert?: ContatoUpsertWithoutRatsInput
    connect?: ContatoWhereUniqueInput
    update?: XOR<XOR<ContatoUpdateToOneWithWhereWithoutRatsInput, ContatoUpdateWithoutRatsInput>, ContatoUncheckedUpdateWithoutRatsInput>
  }

  export type ClienteContatoCreateNestedManyWithoutClienteInput = {
    create?: XOR<ClienteContatoCreateWithoutClienteInput, ClienteContatoUncheckedCreateWithoutClienteInput> | ClienteContatoCreateWithoutClienteInput[] | ClienteContatoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ClienteContatoCreateOrConnectWithoutClienteInput | ClienteContatoCreateOrConnectWithoutClienteInput[]
    createMany?: ClienteContatoCreateManyClienteInputEnvelope
    connect?: ClienteContatoWhereUniqueInput | ClienteContatoWhereUniqueInput[]
  }

  export type EmailClienteCreateNestedManyWithoutClienteInput = {
    create?: XOR<EmailClienteCreateWithoutClienteInput, EmailClienteUncheckedCreateWithoutClienteInput> | EmailClienteCreateWithoutClienteInput[] | EmailClienteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: EmailClienteCreateOrConnectWithoutClienteInput | EmailClienteCreateOrConnectWithoutClienteInput[]
    createMany?: EmailClienteCreateManyClienteInputEnvelope
    connect?: EmailClienteWhereUniqueInput | EmailClienteWhereUniqueInput[]
  }

  export type RATCreateNestedManyWithoutClienteInput = {
    create?: XOR<RATCreateWithoutClienteInput, RATUncheckedCreateWithoutClienteInput> | RATCreateWithoutClienteInput[] | RATUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: RATCreateOrConnectWithoutClienteInput | RATCreateOrConnectWithoutClienteInput[]
    createMany?: RATCreateManyClienteInputEnvelope
    connect?: RATWhereUniqueInput | RATWhereUniqueInput[]
  }

  export type ClienteContatoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<ClienteContatoCreateWithoutClienteInput, ClienteContatoUncheckedCreateWithoutClienteInput> | ClienteContatoCreateWithoutClienteInput[] | ClienteContatoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ClienteContatoCreateOrConnectWithoutClienteInput | ClienteContatoCreateOrConnectWithoutClienteInput[]
    createMany?: ClienteContatoCreateManyClienteInputEnvelope
    connect?: ClienteContatoWhereUniqueInput | ClienteContatoWhereUniqueInput[]
  }

  export type EmailClienteUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<EmailClienteCreateWithoutClienteInput, EmailClienteUncheckedCreateWithoutClienteInput> | EmailClienteCreateWithoutClienteInput[] | EmailClienteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: EmailClienteCreateOrConnectWithoutClienteInput | EmailClienteCreateOrConnectWithoutClienteInput[]
    createMany?: EmailClienteCreateManyClienteInputEnvelope
    connect?: EmailClienteWhereUniqueInput | EmailClienteWhereUniqueInput[]
  }

  export type RATUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<RATCreateWithoutClienteInput, RATUncheckedCreateWithoutClienteInput> | RATCreateWithoutClienteInput[] | RATUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: RATCreateOrConnectWithoutClienteInput | RATCreateOrConnectWithoutClienteInput[]
    createMany?: RATCreateManyClienteInputEnvelope
    connect?: RATWhereUniqueInput | RATWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClienteContatoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ClienteContatoCreateWithoutClienteInput, ClienteContatoUncheckedCreateWithoutClienteInput> | ClienteContatoCreateWithoutClienteInput[] | ClienteContatoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ClienteContatoCreateOrConnectWithoutClienteInput | ClienteContatoCreateOrConnectWithoutClienteInput[]
    upsert?: ClienteContatoUpsertWithWhereUniqueWithoutClienteInput | ClienteContatoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ClienteContatoCreateManyClienteInputEnvelope
    set?: ClienteContatoWhereUniqueInput | ClienteContatoWhereUniqueInput[]
    disconnect?: ClienteContatoWhereUniqueInput | ClienteContatoWhereUniqueInput[]
    delete?: ClienteContatoWhereUniqueInput | ClienteContatoWhereUniqueInput[]
    connect?: ClienteContatoWhereUniqueInput | ClienteContatoWhereUniqueInput[]
    update?: ClienteContatoUpdateWithWhereUniqueWithoutClienteInput | ClienteContatoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ClienteContatoUpdateManyWithWhereWithoutClienteInput | ClienteContatoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ClienteContatoScalarWhereInput | ClienteContatoScalarWhereInput[]
  }

  export type EmailClienteUpdateManyWithoutClienteNestedInput = {
    create?: XOR<EmailClienteCreateWithoutClienteInput, EmailClienteUncheckedCreateWithoutClienteInput> | EmailClienteCreateWithoutClienteInput[] | EmailClienteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: EmailClienteCreateOrConnectWithoutClienteInput | EmailClienteCreateOrConnectWithoutClienteInput[]
    upsert?: EmailClienteUpsertWithWhereUniqueWithoutClienteInput | EmailClienteUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: EmailClienteCreateManyClienteInputEnvelope
    set?: EmailClienteWhereUniqueInput | EmailClienteWhereUniqueInput[]
    disconnect?: EmailClienteWhereUniqueInput | EmailClienteWhereUniqueInput[]
    delete?: EmailClienteWhereUniqueInput | EmailClienteWhereUniqueInput[]
    connect?: EmailClienteWhereUniqueInput | EmailClienteWhereUniqueInput[]
    update?: EmailClienteUpdateWithWhereUniqueWithoutClienteInput | EmailClienteUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: EmailClienteUpdateManyWithWhereWithoutClienteInput | EmailClienteUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: EmailClienteScalarWhereInput | EmailClienteScalarWhereInput[]
  }

  export type RATUpdateManyWithoutClienteNestedInput = {
    create?: XOR<RATCreateWithoutClienteInput, RATUncheckedCreateWithoutClienteInput> | RATCreateWithoutClienteInput[] | RATUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: RATCreateOrConnectWithoutClienteInput | RATCreateOrConnectWithoutClienteInput[]
    upsert?: RATUpsertWithWhereUniqueWithoutClienteInput | RATUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: RATCreateManyClienteInputEnvelope
    set?: RATWhereUniqueInput | RATWhereUniqueInput[]
    disconnect?: RATWhereUniqueInput | RATWhereUniqueInput[]
    delete?: RATWhereUniqueInput | RATWhereUniqueInput[]
    connect?: RATWhereUniqueInput | RATWhereUniqueInput[]
    update?: RATUpdateWithWhereUniqueWithoutClienteInput | RATUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: RATUpdateManyWithWhereWithoutClienteInput | RATUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: RATScalarWhereInput | RATScalarWhereInput[]
  }

  export type ClienteContatoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ClienteContatoCreateWithoutClienteInput, ClienteContatoUncheckedCreateWithoutClienteInput> | ClienteContatoCreateWithoutClienteInput[] | ClienteContatoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ClienteContatoCreateOrConnectWithoutClienteInput | ClienteContatoCreateOrConnectWithoutClienteInput[]
    upsert?: ClienteContatoUpsertWithWhereUniqueWithoutClienteInput | ClienteContatoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ClienteContatoCreateManyClienteInputEnvelope
    set?: ClienteContatoWhereUniqueInput | ClienteContatoWhereUniqueInput[]
    disconnect?: ClienteContatoWhereUniqueInput | ClienteContatoWhereUniqueInput[]
    delete?: ClienteContatoWhereUniqueInput | ClienteContatoWhereUniqueInput[]
    connect?: ClienteContatoWhereUniqueInput | ClienteContatoWhereUniqueInput[]
    update?: ClienteContatoUpdateWithWhereUniqueWithoutClienteInput | ClienteContatoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ClienteContatoUpdateManyWithWhereWithoutClienteInput | ClienteContatoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ClienteContatoScalarWhereInput | ClienteContatoScalarWhereInput[]
  }

  export type EmailClienteUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<EmailClienteCreateWithoutClienteInput, EmailClienteUncheckedCreateWithoutClienteInput> | EmailClienteCreateWithoutClienteInput[] | EmailClienteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: EmailClienteCreateOrConnectWithoutClienteInput | EmailClienteCreateOrConnectWithoutClienteInput[]
    upsert?: EmailClienteUpsertWithWhereUniqueWithoutClienteInput | EmailClienteUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: EmailClienteCreateManyClienteInputEnvelope
    set?: EmailClienteWhereUniqueInput | EmailClienteWhereUniqueInput[]
    disconnect?: EmailClienteWhereUniqueInput | EmailClienteWhereUniqueInput[]
    delete?: EmailClienteWhereUniqueInput | EmailClienteWhereUniqueInput[]
    connect?: EmailClienteWhereUniqueInput | EmailClienteWhereUniqueInput[]
    update?: EmailClienteUpdateWithWhereUniqueWithoutClienteInput | EmailClienteUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: EmailClienteUpdateManyWithWhereWithoutClienteInput | EmailClienteUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: EmailClienteScalarWhereInput | EmailClienteScalarWhereInput[]
  }

  export type RATUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<RATCreateWithoutClienteInput, RATUncheckedCreateWithoutClienteInput> | RATCreateWithoutClienteInput[] | RATUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: RATCreateOrConnectWithoutClienteInput | RATCreateOrConnectWithoutClienteInput[]
    upsert?: RATUpsertWithWhereUniqueWithoutClienteInput | RATUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: RATCreateManyClienteInputEnvelope
    set?: RATWhereUniqueInput | RATWhereUniqueInput[]
    disconnect?: RATWhereUniqueInput | RATWhereUniqueInput[]
    delete?: RATWhereUniqueInput | RATWhereUniqueInput[]
    connect?: RATWhereUniqueInput | RATWhereUniqueInput[]
    update?: RATUpdateWithWhereUniqueWithoutClienteInput | RATUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: RATUpdateManyWithWhereWithoutClienteInput | RATUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: RATScalarWhereInput | RATScalarWhereInput[]
  }

  export type ClienteContatoCreateNestedManyWithoutContatoInput = {
    create?: XOR<ClienteContatoCreateWithoutContatoInput, ClienteContatoUncheckedCreateWithoutContatoInput> | ClienteContatoCreateWithoutContatoInput[] | ClienteContatoUncheckedCreateWithoutContatoInput[]
    connectOrCreate?: ClienteContatoCreateOrConnectWithoutContatoInput | ClienteContatoCreateOrConnectWithoutContatoInput[]
    createMany?: ClienteContatoCreateManyContatoInputEnvelope
    connect?: ClienteContatoWhereUniqueInput | ClienteContatoWhereUniqueInput[]
  }

  export type RATCreateNestedManyWithoutContatoInput = {
    create?: XOR<RATCreateWithoutContatoInput, RATUncheckedCreateWithoutContatoInput> | RATCreateWithoutContatoInput[] | RATUncheckedCreateWithoutContatoInput[]
    connectOrCreate?: RATCreateOrConnectWithoutContatoInput | RATCreateOrConnectWithoutContatoInput[]
    createMany?: RATCreateManyContatoInputEnvelope
    connect?: RATWhereUniqueInput | RATWhereUniqueInput[]
  }

  export type ClienteContatoUncheckedCreateNestedManyWithoutContatoInput = {
    create?: XOR<ClienteContatoCreateWithoutContatoInput, ClienteContatoUncheckedCreateWithoutContatoInput> | ClienteContatoCreateWithoutContatoInput[] | ClienteContatoUncheckedCreateWithoutContatoInput[]
    connectOrCreate?: ClienteContatoCreateOrConnectWithoutContatoInput | ClienteContatoCreateOrConnectWithoutContatoInput[]
    createMany?: ClienteContatoCreateManyContatoInputEnvelope
    connect?: ClienteContatoWhereUniqueInput | ClienteContatoWhereUniqueInput[]
  }

  export type RATUncheckedCreateNestedManyWithoutContatoInput = {
    create?: XOR<RATCreateWithoutContatoInput, RATUncheckedCreateWithoutContatoInput> | RATCreateWithoutContatoInput[] | RATUncheckedCreateWithoutContatoInput[]
    connectOrCreate?: RATCreateOrConnectWithoutContatoInput | RATCreateOrConnectWithoutContatoInput[]
    createMany?: RATCreateManyContatoInputEnvelope
    connect?: RATWhereUniqueInput | RATWhereUniqueInput[]
  }

  export type ClienteContatoUpdateManyWithoutContatoNestedInput = {
    create?: XOR<ClienteContatoCreateWithoutContatoInput, ClienteContatoUncheckedCreateWithoutContatoInput> | ClienteContatoCreateWithoutContatoInput[] | ClienteContatoUncheckedCreateWithoutContatoInput[]
    connectOrCreate?: ClienteContatoCreateOrConnectWithoutContatoInput | ClienteContatoCreateOrConnectWithoutContatoInput[]
    upsert?: ClienteContatoUpsertWithWhereUniqueWithoutContatoInput | ClienteContatoUpsertWithWhereUniqueWithoutContatoInput[]
    createMany?: ClienteContatoCreateManyContatoInputEnvelope
    set?: ClienteContatoWhereUniqueInput | ClienteContatoWhereUniqueInput[]
    disconnect?: ClienteContatoWhereUniqueInput | ClienteContatoWhereUniqueInput[]
    delete?: ClienteContatoWhereUniqueInput | ClienteContatoWhereUniqueInput[]
    connect?: ClienteContatoWhereUniqueInput | ClienteContatoWhereUniqueInput[]
    update?: ClienteContatoUpdateWithWhereUniqueWithoutContatoInput | ClienteContatoUpdateWithWhereUniqueWithoutContatoInput[]
    updateMany?: ClienteContatoUpdateManyWithWhereWithoutContatoInput | ClienteContatoUpdateManyWithWhereWithoutContatoInput[]
    deleteMany?: ClienteContatoScalarWhereInput | ClienteContatoScalarWhereInput[]
  }

  export type RATUpdateManyWithoutContatoNestedInput = {
    create?: XOR<RATCreateWithoutContatoInput, RATUncheckedCreateWithoutContatoInput> | RATCreateWithoutContatoInput[] | RATUncheckedCreateWithoutContatoInput[]
    connectOrCreate?: RATCreateOrConnectWithoutContatoInput | RATCreateOrConnectWithoutContatoInput[]
    upsert?: RATUpsertWithWhereUniqueWithoutContatoInput | RATUpsertWithWhereUniqueWithoutContatoInput[]
    createMany?: RATCreateManyContatoInputEnvelope
    set?: RATWhereUniqueInput | RATWhereUniqueInput[]
    disconnect?: RATWhereUniqueInput | RATWhereUniqueInput[]
    delete?: RATWhereUniqueInput | RATWhereUniqueInput[]
    connect?: RATWhereUniqueInput | RATWhereUniqueInput[]
    update?: RATUpdateWithWhereUniqueWithoutContatoInput | RATUpdateWithWhereUniqueWithoutContatoInput[]
    updateMany?: RATUpdateManyWithWhereWithoutContatoInput | RATUpdateManyWithWhereWithoutContatoInput[]
    deleteMany?: RATScalarWhereInput | RATScalarWhereInput[]
  }

  export type ClienteContatoUncheckedUpdateManyWithoutContatoNestedInput = {
    create?: XOR<ClienteContatoCreateWithoutContatoInput, ClienteContatoUncheckedCreateWithoutContatoInput> | ClienteContatoCreateWithoutContatoInput[] | ClienteContatoUncheckedCreateWithoutContatoInput[]
    connectOrCreate?: ClienteContatoCreateOrConnectWithoutContatoInput | ClienteContatoCreateOrConnectWithoutContatoInput[]
    upsert?: ClienteContatoUpsertWithWhereUniqueWithoutContatoInput | ClienteContatoUpsertWithWhereUniqueWithoutContatoInput[]
    createMany?: ClienteContatoCreateManyContatoInputEnvelope
    set?: ClienteContatoWhereUniqueInput | ClienteContatoWhereUniqueInput[]
    disconnect?: ClienteContatoWhereUniqueInput | ClienteContatoWhereUniqueInput[]
    delete?: ClienteContatoWhereUniqueInput | ClienteContatoWhereUniqueInput[]
    connect?: ClienteContatoWhereUniqueInput | ClienteContatoWhereUniqueInput[]
    update?: ClienteContatoUpdateWithWhereUniqueWithoutContatoInput | ClienteContatoUpdateWithWhereUniqueWithoutContatoInput[]
    updateMany?: ClienteContatoUpdateManyWithWhereWithoutContatoInput | ClienteContatoUpdateManyWithWhereWithoutContatoInput[]
    deleteMany?: ClienteContatoScalarWhereInput | ClienteContatoScalarWhereInput[]
  }

  export type RATUncheckedUpdateManyWithoutContatoNestedInput = {
    create?: XOR<RATCreateWithoutContatoInput, RATUncheckedCreateWithoutContatoInput> | RATCreateWithoutContatoInput[] | RATUncheckedCreateWithoutContatoInput[]
    connectOrCreate?: RATCreateOrConnectWithoutContatoInput | RATCreateOrConnectWithoutContatoInput[]
    upsert?: RATUpsertWithWhereUniqueWithoutContatoInput | RATUpsertWithWhereUniqueWithoutContatoInput[]
    createMany?: RATCreateManyContatoInputEnvelope
    set?: RATWhereUniqueInput | RATWhereUniqueInput[]
    disconnect?: RATWhereUniqueInput | RATWhereUniqueInput[]
    delete?: RATWhereUniqueInput | RATWhereUniqueInput[]
    connect?: RATWhereUniqueInput | RATWhereUniqueInput[]
    update?: RATUpdateWithWhereUniqueWithoutContatoInput | RATUpdateWithWhereUniqueWithoutContatoInput[]
    updateMany?: RATUpdateManyWithWhereWithoutContatoInput | RATUpdateManyWithWhereWithoutContatoInput[]
    deleteMany?: RATScalarWhereInput | RATScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutClientesContatosInput = {
    create?: XOR<ClienteCreateWithoutClientesContatosInput, ClienteUncheckedCreateWithoutClientesContatosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutClientesContatosInput
    connect?: ClienteWhereUniqueInput
  }

  export type ContatoCreateNestedOneWithoutClientesContatosInput = {
    create?: XOR<ContatoCreateWithoutClientesContatosInput, ContatoUncheckedCreateWithoutClientesContatosInput>
    connectOrCreate?: ContatoCreateOrConnectWithoutClientesContatosInput
    connect?: ContatoWhereUniqueInput
  }

  export type ClienteUpdateOneRequiredWithoutClientesContatosNestedInput = {
    create?: XOR<ClienteCreateWithoutClientesContatosInput, ClienteUncheckedCreateWithoutClientesContatosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutClientesContatosInput
    upsert?: ClienteUpsertWithoutClientesContatosInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutClientesContatosInput, ClienteUpdateWithoutClientesContatosInput>, ClienteUncheckedUpdateWithoutClientesContatosInput>
  }

  export type ContatoUpdateOneRequiredWithoutClientesContatosNestedInput = {
    create?: XOR<ContatoCreateWithoutClientesContatosInput, ContatoUncheckedCreateWithoutClientesContatosInput>
    connectOrCreate?: ContatoCreateOrConnectWithoutClientesContatosInput
    upsert?: ContatoUpsertWithoutClientesContatosInput
    connect?: ContatoWhereUniqueInput
    update?: XOR<XOR<ContatoUpdateToOneWithWhereWithoutClientesContatosInput, ContatoUpdateWithoutClientesContatosInput>, ContatoUncheckedUpdateWithoutClientesContatosInput>
  }

  export type ClienteCreateNestedOneWithoutEmailsInput = {
    create?: XOR<ClienteCreateWithoutEmailsInput, ClienteUncheckedCreateWithoutEmailsInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutEmailsInput
    connect?: ClienteWhereUniqueInput
  }

  export type ClienteUpdateOneRequiredWithoutEmailsNestedInput = {
    create?: XOR<ClienteCreateWithoutEmailsInput, ClienteUncheckedCreateWithoutEmailsInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutEmailsInput
    upsert?: ClienteUpsertWithoutEmailsInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutEmailsInput, ClienteUpdateWithoutEmailsInput>, ClienteUncheckedUpdateWithoutEmailsInput>
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type RATCreateWithoutUsuarioInput = {
    ds_status: string
    fl_deslocamento: string
    dt_data_hora_entrada: Date | string
    dt_data_hora_saida: Date | string
    tm_duracao: Date | string
    tx_comentario_interno: string
    ds_originada: string
    ds_observacao: string
    nr_km_ida?: number | null
    nr_km_volta?: number | null
    nr_valor_pedagio?: number | null
    tx_atividades: string
    tx_tarefas: string
    tx_pendencias: string
    cliente: ClienteCreateNestedOneWithoutRatsInput
    contato: ContatoCreateNestedOneWithoutRatsInput
  }

  export type RATUncheckedCreateWithoutUsuarioInput = {
    id_rat?: number
    ds_status: string
    fl_deslocamento: string
    dt_data_hora_entrada: Date | string
    dt_data_hora_saida: Date | string
    tm_duracao: Date | string
    tx_comentario_interno: string
    ds_originada: string
    ds_observacao: string
    nr_km_ida?: number | null
    nr_km_volta?: number | null
    nr_valor_pedagio?: number | null
    tx_atividades: string
    tx_tarefas: string
    tx_pendencias: string
    id_cliente: number
    id_contato: number
  }

  export type RATCreateOrConnectWithoutUsuarioInput = {
    where: RATWhereUniqueInput
    create: XOR<RATCreateWithoutUsuarioInput, RATUncheckedCreateWithoutUsuarioInput>
  }

  export type RATCreateManyUsuarioInputEnvelope = {
    data: RATCreateManyUsuarioInput | RATCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type RATUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: RATWhereUniqueInput
    update: XOR<RATUpdateWithoutUsuarioInput, RATUncheckedUpdateWithoutUsuarioInput>
    create: XOR<RATCreateWithoutUsuarioInput, RATUncheckedCreateWithoutUsuarioInput>
  }

  export type RATUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: RATWhereUniqueInput
    data: XOR<RATUpdateWithoutUsuarioInput, RATUncheckedUpdateWithoutUsuarioInput>
  }

  export type RATUpdateManyWithWhereWithoutUsuarioInput = {
    where: RATScalarWhereInput
    data: XOR<RATUpdateManyMutationInput, RATUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type RATScalarWhereInput = {
    AND?: RATScalarWhereInput | RATScalarWhereInput[]
    OR?: RATScalarWhereInput[]
    NOT?: RATScalarWhereInput | RATScalarWhereInput[]
    id_rat?: IntFilter<"RAT"> | number
    ds_status?: StringFilter<"RAT"> | string
    fl_deslocamento?: StringFilter<"RAT"> | string
    dt_data_hora_entrada?: DateTimeFilter<"RAT"> | Date | string
    dt_data_hora_saida?: DateTimeFilter<"RAT"> | Date | string
    tm_duracao?: DateTimeFilter<"RAT"> | Date | string
    tx_comentario_interno?: StringFilter<"RAT"> | string
    ds_originada?: StringFilter<"RAT"> | string
    ds_observacao?: StringFilter<"RAT"> | string
    nr_km_ida?: IntNullableFilter<"RAT"> | number | null
    nr_km_volta?: IntNullableFilter<"RAT"> | number | null
    nr_valor_pedagio?: FloatNullableFilter<"RAT"> | number | null
    tx_atividades?: StringFilter<"RAT"> | string
    tx_tarefas?: StringFilter<"RAT"> | string
    tx_pendencias?: StringFilter<"RAT"> | string
    id_usuario?: IntFilter<"RAT"> | number
    id_cliente?: IntFilter<"RAT"> | number
    id_contato?: IntFilter<"RAT"> | number
  }

  export type UsuarioCreateWithoutRatsInput = {
    nome: string
    email: string
    senha: string
    funcao: string
  }

  export type UsuarioUncheckedCreateWithoutRatsInput = {
    id_usuario?: number
    nome: string
    email: string
    senha: string
    funcao: string
  }

  export type UsuarioCreateOrConnectWithoutRatsInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutRatsInput, UsuarioUncheckedCreateWithoutRatsInput>
  }

  export type ClienteCreateWithoutRatsInput = {
    fl_ativo: boolean
    ds_nome: string
    ds_razao_social: string
    nr_cnpj: string
    nr_inscricao_estadual: string
    ds_site?: string | null
    ds_endereco: string
    ds_cep: string
    ds_uf: string
    ds_cidade: string
    ds_bairro: string
    nr_numero: string
    ds_complemento?: string | null
    nr_codigo_ibge?: string | null
    nr_latitude?: number | null
    nr_longitude?: number | null
    nr_distancia_km?: number | null
    tx_observacao_ident?: string | null
    fl_matriz: boolean
    ds_situacao: string
    ds_sistema: string
    ds_contrato: string
    nr_nomeados: number
    nr_simultaneos: number
    nr_tecnica_remoto?: number | null
    nr_tecnica_presencial?: number | null
    tm_minimo_horas: Date | string
    ds_diario_viagem: string
    ds_regiao: string
    tx_observacao_contrato: string
    nr_codigo_zz: number
    nr_franquia_nf: number
    nr_qtde_documentos: number
    nr_valor_franqia: number
    nr_valor_excendente: number
    dt_data_contrato: Date | string
    clientesContatos?: ClienteContatoCreateNestedManyWithoutClienteInput
    emails?: EmailClienteCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutRatsInput = {
    id_cliente?: number
    fl_ativo: boolean
    ds_nome: string
    ds_razao_social: string
    nr_cnpj: string
    nr_inscricao_estadual: string
    ds_site?: string | null
    ds_endereco: string
    ds_cep: string
    ds_uf: string
    ds_cidade: string
    ds_bairro: string
    nr_numero: string
    ds_complemento?: string | null
    nr_codigo_ibge?: string | null
    nr_latitude?: number | null
    nr_longitude?: number | null
    nr_distancia_km?: number | null
    tx_observacao_ident?: string | null
    fl_matriz: boolean
    ds_situacao: string
    ds_sistema: string
    ds_contrato: string
    nr_nomeados: number
    nr_simultaneos: number
    nr_tecnica_remoto?: number | null
    nr_tecnica_presencial?: number | null
    tm_minimo_horas: Date | string
    ds_diario_viagem: string
    ds_regiao: string
    tx_observacao_contrato: string
    nr_codigo_zz: number
    nr_franquia_nf: number
    nr_qtde_documentos: number
    nr_valor_franqia: number
    nr_valor_excendente: number
    dt_data_contrato: Date | string
    clientesContatos?: ClienteContatoUncheckedCreateNestedManyWithoutClienteInput
    emails?: EmailClienteUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutRatsInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutRatsInput, ClienteUncheckedCreateWithoutRatsInput>
  }

  export type ContatoCreateWithoutRatsInput = {
    ds_nome: string
    ds_cargo: string
    fl_ativo: boolean
    tx_observacoes?: string | null
    ds_email: string
    ds_telefone: string
    fl_whatsapp: boolean
    clientesContatos?: ClienteContatoCreateNestedManyWithoutContatoInput
  }

  export type ContatoUncheckedCreateWithoutRatsInput = {
    id_contato?: number
    ds_nome: string
    ds_cargo: string
    fl_ativo: boolean
    tx_observacoes?: string | null
    ds_email: string
    ds_telefone: string
    fl_whatsapp: boolean
    clientesContatos?: ClienteContatoUncheckedCreateNestedManyWithoutContatoInput
  }

  export type ContatoCreateOrConnectWithoutRatsInput = {
    where: ContatoWhereUniqueInput
    create: XOR<ContatoCreateWithoutRatsInput, ContatoUncheckedCreateWithoutRatsInput>
  }

  export type UsuarioUpsertWithoutRatsInput = {
    update: XOR<UsuarioUpdateWithoutRatsInput, UsuarioUncheckedUpdateWithoutRatsInput>
    create: XOR<UsuarioCreateWithoutRatsInput, UsuarioUncheckedCreateWithoutRatsInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutRatsInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutRatsInput, UsuarioUncheckedUpdateWithoutRatsInput>
  }

  export type UsuarioUpdateWithoutRatsInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    funcao?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateWithoutRatsInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    funcao?: StringFieldUpdateOperationsInput | string
  }

  export type ClienteUpsertWithoutRatsInput = {
    update: XOR<ClienteUpdateWithoutRatsInput, ClienteUncheckedUpdateWithoutRatsInput>
    create: XOR<ClienteCreateWithoutRatsInput, ClienteUncheckedCreateWithoutRatsInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutRatsInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutRatsInput, ClienteUncheckedUpdateWithoutRatsInput>
  }

  export type ClienteUpdateWithoutRatsInput = {
    fl_ativo?: BoolFieldUpdateOperationsInput | boolean
    ds_nome?: StringFieldUpdateOperationsInput | string
    ds_razao_social?: StringFieldUpdateOperationsInput | string
    nr_cnpj?: StringFieldUpdateOperationsInput | string
    nr_inscricao_estadual?: StringFieldUpdateOperationsInput | string
    ds_site?: NullableStringFieldUpdateOperationsInput | string | null
    ds_endereco?: StringFieldUpdateOperationsInput | string
    ds_cep?: StringFieldUpdateOperationsInput | string
    ds_uf?: StringFieldUpdateOperationsInput | string
    ds_cidade?: StringFieldUpdateOperationsInput | string
    ds_bairro?: StringFieldUpdateOperationsInput | string
    nr_numero?: StringFieldUpdateOperationsInput | string
    ds_complemento?: NullableStringFieldUpdateOperationsInput | string | null
    nr_codigo_ibge?: NullableStringFieldUpdateOperationsInput | string | null
    nr_latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    nr_longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    nr_distancia_km?: NullableFloatFieldUpdateOperationsInput | number | null
    tx_observacao_ident?: NullableStringFieldUpdateOperationsInput | string | null
    fl_matriz?: BoolFieldUpdateOperationsInput | boolean
    ds_situacao?: StringFieldUpdateOperationsInput | string
    ds_sistema?: StringFieldUpdateOperationsInput | string
    ds_contrato?: StringFieldUpdateOperationsInput | string
    nr_nomeados?: IntFieldUpdateOperationsInput | number
    nr_simultaneos?: IntFieldUpdateOperationsInput | number
    nr_tecnica_remoto?: NullableFloatFieldUpdateOperationsInput | number | null
    nr_tecnica_presencial?: NullableFloatFieldUpdateOperationsInput | number | null
    tm_minimo_horas?: DateTimeFieldUpdateOperationsInput | Date | string
    ds_diario_viagem?: StringFieldUpdateOperationsInput | string
    ds_regiao?: StringFieldUpdateOperationsInput | string
    tx_observacao_contrato?: StringFieldUpdateOperationsInput | string
    nr_codigo_zz?: IntFieldUpdateOperationsInput | number
    nr_franquia_nf?: FloatFieldUpdateOperationsInput | number
    nr_qtde_documentos?: IntFieldUpdateOperationsInput | number
    nr_valor_franqia?: FloatFieldUpdateOperationsInput | number
    nr_valor_excendente?: FloatFieldUpdateOperationsInput | number
    dt_data_contrato?: DateTimeFieldUpdateOperationsInput | Date | string
    clientesContatos?: ClienteContatoUpdateManyWithoutClienteNestedInput
    emails?: EmailClienteUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutRatsInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    fl_ativo?: BoolFieldUpdateOperationsInput | boolean
    ds_nome?: StringFieldUpdateOperationsInput | string
    ds_razao_social?: StringFieldUpdateOperationsInput | string
    nr_cnpj?: StringFieldUpdateOperationsInput | string
    nr_inscricao_estadual?: StringFieldUpdateOperationsInput | string
    ds_site?: NullableStringFieldUpdateOperationsInput | string | null
    ds_endereco?: StringFieldUpdateOperationsInput | string
    ds_cep?: StringFieldUpdateOperationsInput | string
    ds_uf?: StringFieldUpdateOperationsInput | string
    ds_cidade?: StringFieldUpdateOperationsInput | string
    ds_bairro?: StringFieldUpdateOperationsInput | string
    nr_numero?: StringFieldUpdateOperationsInput | string
    ds_complemento?: NullableStringFieldUpdateOperationsInput | string | null
    nr_codigo_ibge?: NullableStringFieldUpdateOperationsInput | string | null
    nr_latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    nr_longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    nr_distancia_km?: NullableFloatFieldUpdateOperationsInput | number | null
    tx_observacao_ident?: NullableStringFieldUpdateOperationsInput | string | null
    fl_matriz?: BoolFieldUpdateOperationsInput | boolean
    ds_situacao?: StringFieldUpdateOperationsInput | string
    ds_sistema?: StringFieldUpdateOperationsInput | string
    ds_contrato?: StringFieldUpdateOperationsInput | string
    nr_nomeados?: IntFieldUpdateOperationsInput | number
    nr_simultaneos?: IntFieldUpdateOperationsInput | number
    nr_tecnica_remoto?: NullableFloatFieldUpdateOperationsInput | number | null
    nr_tecnica_presencial?: NullableFloatFieldUpdateOperationsInput | number | null
    tm_minimo_horas?: DateTimeFieldUpdateOperationsInput | Date | string
    ds_diario_viagem?: StringFieldUpdateOperationsInput | string
    ds_regiao?: StringFieldUpdateOperationsInput | string
    tx_observacao_contrato?: StringFieldUpdateOperationsInput | string
    nr_codigo_zz?: IntFieldUpdateOperationsInput | number
    nr_franquia_nf?: FloatFieldUpdateOperationsInput | number
    nr_qtde_documentos?: IntFieldUpdateOperationsInput | number
    nr_valor_franqia?: FloatFieldUpdateOperationsInput | number
    nr_valor_excendente?: FloatFieldUpdateOperationsInput | number
    dt_data_contrato?: DateTimeFieldUpdateOperationsInput | Date | string
    clientesContatos?: ClienteContatoUncheckedUpdateManyWithoutClienteNestedInput
    emails?: EmailClienteUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ContatoUpsertWithoutRatsInput = {
    update: XOR<ContatoUpdateWithoutRatsInput, ContatoUncheckedUpdateWithoutRatsInput>
    create: XOR<ContatoCreateWithoutRatsInput, ContatoUncheckedCreateWithoutRatsInput>
    where?: ContatoWhereInput
  }

  export type ContatoUpdateToOneWithWhereWithoutRatsInput = {
    where?: ContatoWhereInput
    data: XOR<ContatoUpdateWithoutRatsInput, ContatoUncheckedUpdateWithoutRatsInput>
  }

  export type ContatoUpdateWithoutRatsInput = {
    ds_nome?: StringFieldUpdateOperationsInput | string
    ds_cargo?: StringFieldUpdateOperationsInput | string
    fl_ativo?: BoolFieldUpdateOperationsInput | boolean
    tx_observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    ds_email?: StringFieldUpdateOperationsInput | string
    ds_telefone?: StringFieldUpdateOperationsInput | string
    fl_whatsapp?: BoolFieldUpdateOperationsInput | boolean
    clientesContatos?: ClienteContatoUpdateManyWithoutContatoNestedInput
  }

  export type ContatoUncheckedUpdateWithoutRatsInput = {
    id_contato?: IntFieldUpdateOperationsInput | number
    ds_nome?: StringFieldUpdateOperationsInput | string
    ds_cargo?: StringFieldUpdateOperationsInput | string
    fl_ativo?: BoolFieldUpdateOperationsInput | boolean
    tx_observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    ds_email?: StringFieldUpdateOperationsInput | string
    ds_telefone?: StringFieldUpdateOperationsInput | string
    fl_whatsapp?: BoolFieldUpdateOperationsInput | boolean
    clientesContatos?: ClienteContatoUncheckedUpdateManyWithoutContatoNestedInput
  }

  export type ClienteContatoCreateWithoutClienteInput = {
    contato: ContatoCreateNestedOneWithoutClientesContatosInput
  }

  export type ClienteContatoUncheckedCreateWithoutClienteInput = {
    id?: number
    id_contato: number
  }

  export type ClienteContatoCreateOrConnectWithoutClienteInput = {
    where: ClienteContatoWhereUniqueInput
    create: XOR<ClienteContatoCreateWithoutClienteInput, ClienteContatoUncheckedCreateWithoutClienteInput>
  }

  export type ClienteContatoCreateManyClienteInputEnvelope = {
    data: ClienteContatoCreateManyClienteInput | ClienteContatoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type EmailClienteCreateWithoutClienteInput = {
    ds_email: string
  }

  export type EmailClienteUncheckedCreateWithoutClienteInput = {
    id?: number
    ds_email: string
  }

  export type EmailClienteCreateOrConnectWithoutClienteInput = {
    where: EmailClienteWhereUniqueInput
    create: XOR<EmailClienteCreateWithoutClienteInput, EmailClienteUncheckedCreateWithoutClienteInput>
  }

  export type EmailClienteCreateManyClienteInputEnvelope = {
    data: EmailClienteCreateManyClienteInput | EmailClienteCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type RATCreateWithoutClienteInput = {
    ds_status: string
    fl_deslocamento: string
    dt_data_hora_entrada: Date | string
    dt_data_hora_saida: Date | string
    tm_duracao: Date | string
    tx_comentario_interno: string
    ds_originada: string
    ds_observacao: string
    nr_km_ida?: number | null
    nr_km_volta?: number | null
    nr_valor_pedagio?: number | null
    tx_atividades: string
    tx_tarefas: string
    tx_pendencias: string
    usuario: UsuarioCreateNestedOneWithoutRatsInput
    contato: ContatoCreateNestedOneWithoutRatsInput
  }

  export type RATUncheckedCreateWithoutClienteInput = {
    id_rat?: number
    ds_status: string
    fl_deslocamento: string
    dt_data_hora_entrada: Date | string
    dt_data_hora_saida: Date | string
    tm_duracao: Date | string
    tx_comentario_interno: string
    ds_originada: string
    ds_observacao: string
    nr_km_ida?: number | null
    nr_km_volta?: number | null
    nr_valor_pedagio?: number | null
    tx_atividades: string
    tx_tarefas: string
    tx_pendencias: string
    id_usuario: number
    id_contato: number
  }

  export type RATCreateOrConnectWithoutClienteInput = {
    where: RATWhereUniqueInput
    create: XOR<RATCreateWithoutClienteInput, RATUncheckedCreateWithoutClienteInput>
  }

  export type RATCreateManyClienteInputEnvelope = {
    data: RATCreateManyClienteInput | RATCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type ClienteContatoUpsertWithWhereUniqueWithoutClienteInput = {
    where: ClienteContatoWhereUniqueInput
    update: XOR<ClienteContatoUpdateWithoutClienteInput, ClienteContatoUncheckedUpdateWithoutClienteInput>
    create: XOR<ClienteContatoCreateWithoutClienteInput, ClienteContatoUncheckedCreateWithoutClienteInput>
  }

  export type ClienteContatoUpdateWithWhereUniqueWithoutClienteInput = {
    where: ClienteContatoWhereUniqueInput
    data: XOR<ClienteContatoUpdateWithoutClienteInput, ClienteContatoUncheckedUpdateWithoutClienteInput>
  }

  export type ClienteContatoUpdateManyWithWhereWithoutClienteInput = {
    where: ClienteContatoScalarWhereInput
    data: XOR<ClienteContatoUpdateManyMutationInput, ClienteContatoUncheckedUpdateManyWithoutClienteInput>
  }

  export type ClienteContatoScalarWhereInput = {
    AND?: ClienteContatoScalarWhereInput | ClienteContatoScalarWhereInput[]
    OR?: ClienteContatoScalarWhereInput[]
    NOT?: ClienteContatoScalarWhereInput | ClienteContatoScalarWhereInput[]
    id?: IntFilter<"ClienteContato"> | number
    id_cliente?: IntFilter<"ClienteContato"> | number
    id_contato?: IntFilter<"ClienteContato"> | number
  }

  export type EmailClienteUpsertWithWhereUniqueWithoutClienteInput = {
    where: EmailClienteWhereUniqueInput
    update: XOR<EmailClienteUpdateWithoutClienteInput, EmailClienteUncheckedUpdateWithoutClienteInput>
    create: XOR<EmailClienteCreateWithoutClienteInput, EmailClienteUncheckedCreateWithoutClienteInput>
  }

  export type EmailClienteUpdateWithWhereUniqueWithoutClienteInput = {
    where: EmailClienteWhereUniqueInput
    data: XOR<EmailClienteUpdateWithoutClienteInput, EmailClienteUncheckedUpdateWithoutClienteInput>
  }

  export type EmailClienteUpdateManyWithWhereWithoutClienteInput = {
    where: EmailClienteScalarWhereInput
    data: XOR<EmailClienteUpdateManyMutationInput, EmailClienteUncheckedUpdateManyWithoutClienteInput>
  }

  export type EmailClienteScalarWhereInput = {
    AND?: EmailClienteScalarWhereInput | EmailClienteScalarWhereInput[]
    OR?: EmailClienteScalarWhereInput[]
    NOT?: EmailClienteScalarWhereInput | EmailClienteScalarWhereInput[]
    id?: IntFilter<"EmailCliente"> | number
    ds_email?: StringFilter<"EmailCliente"> | string
    id_cliente?: IntFilter<"EmailCliente"> | number
  }

  export type RATUpsertWithWhereUniqueWithoutClienteInput = {
    where: RATWhereUniqueInput
    update: XOR<RATUpdateWithoutClienteInput, RATUncheckedUpdateWithoutClienteInput>
    create: XOR<RATCreateWithoutClienteInput, RATUncheckedCreateWithoutClienteInput>
  }

  export type RATUpdateWithWhereUniqueWithoutClienteInput = {
    where: RATWhereUniqueInput
    data: XOR<RATUpdateWithoutClienteInput, RATUncheckedUpdateWithoutClienteInput>
  }

  export type RATUpdateManyWithWhereWithoutClienteInput = {
    where: RATScalarWhereInput
    data: XOR<RATUpdateManyMutationInput, RATUncheckedUpdateManyWithoutClienteInput>
  }

  export type ClienteContatoCreateWithoutContatoInput = {
    cliente: ClienteCreateNestedOneWithoutClientesContatosInput
  }

  export type ClienteContatoUncheckedCreateWithoutContatoInput = {
    id?: number
    id_cliente: number
  }

  export type ClienteContatoCreateOrConnectWithoutContatoInput = {
    where: ClienteContatoWhereUniqueInput
    create: XOR<ClienteContatoCreateWithoutContatoInput, ClienteContatoUncheckedCreateWithoutContatoInput>
  }

  export type ClienteContatoCreateManyContatoInputEnvelope = {
    data: ClienteContatoCreateManyContatoInput | ClienteContatoCreateManyContatoInput[]
    skipDuplicates?: boolean
  }

  export type RATCreateWithoutContatoInput = {
    ds_status: string
    fl_deslocamento: string
    dt_data_hora_entrada: Date | string
    dt_data_hora_saida: Date | string
    tm_duracao: Date | string
    tx_comentario_interno: string
    ds_originada: string
    ds_observacao: string
    nr_km_ida?: number | null
    nr_km_volta?: number | null
    nr_valor_pedagio?: number | null
    tx_atividades: string
    tx_tarefas: string
    tx_pendencias: string
    usuario: UsuarioCreateNestedOneWithoutRatsInput
    cliente: ClienteCreateNestedOneWithoutRatsInput
  }

  export type RATUncheckedCreateWithoutContatoInput = {
    id_rat?: number
    ds_status: string
    fl_deslocamento: string
    dt_data_hora_entrada: Date | string
    dt_data_hora_saida: Date | string
    tm_duracao: Date | string
    tx_comentario_interno: string
    ds_originada: string
    ds_observacao: string
    nr_km_ida?: number | null
    nr_km_volta?: number | null
    nr_valor_pedagio?: number | null
    tx_atividades: string
    tx_tarefas: string
    tx_pendencias: string
    id_usuario: number
    id_cliente: number
  }

  export type RATCreateOrConnectWithoutContatoInput = {
    where: RATWhereUniqueInput
    create: XOR<RATCreateWithoutContatoInput, RATUncheckedCreateWithoutContatoInput>
  }

  export type RATCreateManyContatoInputEnvelope = {
    data: RATCreateManyContatoInput | RATCreateManyContatoInput[]
    skipDuplicates?: boolean
  }

  export type ClienteContatoUpsertWithWhereUniqueWithoutContatoInput = {
    where: ClienteContatoWhereUniqueInput
    update: XOR<ClienteContatoUpdateWithoutContatoInput, ClienteContatoUncheckedUpdateWithoutContatoInput>
    create: XOR<ClienteContatoCreateWithoutContatoInput, ClienteContatoUncheckedCreateWithoutContatoInput>
  }

  export type ClienteContatoUpdateWithWhereUniqueWithoutContatoInput = {
    where: ClienteContatoWhereUniqueInput
    data: XOR<ClienteContatoUpdateWithoutContatoInput, ClienteContatoUncheckedUpdateWithoutContatoInput>
  }

  export type ClienteContatoUpdateManyWithWhereWithoutContatoInput = {
    where: ClienteContatoScalarWhereInput
    data: XOR<ClienteContatoUpdateManyMutationInput, ClienteContatoUncheckedUpdateManyWithoutContatoInput>
  }

  export type RATUpsertWithWhereUniqueWithoutContatoInput = {
    where: RATWhereUniqueInput
    update: XOR<RATUpdateWithoutContatoInput, RATUncheckedUpdateWithoutContatoInput>
    create: XOR<RATCreateWithoutContatoInput, RATUncheckedCreateWithoutContatoInput>
  }

  export type RATUpdateWithWhereUniqueWithoutContatoInput = {
    where: RATWhereUniqueInput
    data: XOR<RATUpdateWithoutContatoInput, RATUncheckedUpdateWithoutContatoInput>
  }

  export type RATUpdateManyWithWhereWithoutContatoInput = {
    where: RATScalarWhereInput
    data: XOR<RATUpdateManyMutationInput, RATUncheckedUpdateManyWithoutContatoInput>
  }

  export type ClienteCreateWithoutClientesContatosInput = {
    fl_ativo: boolean
    ds_nome: string
    ds_razao_social: string
    nr_cnpj: string
    nr_inscricao_estadual: string
    ds_site?: string | null
    ds_endereco: string
    ds_cep: string
    ds_uf: string
    ds_cidade: string
    ds_bairro: string
    nr_numero: string
    ds_complemento?: string | null
    nr_codigo_ibge?: string | null
    nr_latitude?: number | null
    nr_longitude?: number | null
    nr_distancia_km?: number | null
    tx_observacao_ident?: string | null
    fl_matriz: boolean
    ds_situacao: string
    ds_sistema: string
    ds_contrato: string
    nr_nomeados: number
    nr_simultaneos: number
    nr_tecnica_remoto?: number | null
    nr_tecnica_presencial?: number | null
    tm_minimo_horas: Date | string
    ds_diario_viagem: string
    ds_regiao: string
    tx_observacao_contrato: string
    nr_codigo_zz: number
    nr_franquia_nf: number
    nr_qtde_documentos: number
    nr_valor_franqia: number
    nr_valor_excendente: number
    dt_data_contrato: Date | string
    emails?: EmailClienteCreateNestedManyWithoutClienteInput
    rats?: RATCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutClientesContatosInput = {
    id_cliente?: number
    fl_ativo: boolean
    ds_nome: string
    ds_razao_social: string
    nr_cnpj: string
    nr_inscricao_estadual: string
    ds_site?: string | null
    ds_endereco: string
    ds_cep: string
    ds_uf: string
    ds_cidade: string
    ds_bairro: string
    nr_numero: string
    ds_complemento?: string | null
    nr_codigo_ibge?: string | null
    nr_latitude?: number | null
    nr_longitude?: number | null
    nr_distancia_km?: number | null
    tx_observacao_ident?: string | null
    fl_matriz: boolean
    ds_situacao: string
    ds_sistema: string
    ds_contrato: string
    nr_nomeados: number
    nr_simultaneos: number
    nr_tecnica_remoto?: number | null
    nr_tecnica_presencial?: number | null
    tm_minimo_horas: Date | string
    ds_diario_viagem: string
    ds_regiao: string
    tx_observacao_contrato: string
    nr_codigo_zz: number
    nr_franquia_nf: number
    nr_qtde_documentos: number
    nr_valor_franqia: number
    nr_valor_excendente: number
    dt_data_contrato: Date | string
    emails?: EmailClienteUncheckedCreateNestedManyWithoutClienteInput
    rats?: RATUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutClientesContatosInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutClientesContatosInput, ClienteUncheckedCreateWithoutClientesContatosInput>
  }

  export type ContatoCreateWithoutClientesContatosInput = {
    ds_nome: string
    ds_cargo: string
    fl_ativo: boolean
    tx_observacoes?: string | null
    ds_email: string
    ds_telefone: string
    fl_whatsapp: boolean
    rats?: RATCreateNestedManyWithoutContatoInput
  }

  export type ContatoUncheckedCreateWithoutClientesContatosInput = {
    id_contato?: number
    ds_nome: string
    ds_cargo: string
    fl_ativo: boolean
    tx_observacoes?: string | null
    ds_email: string
    ds_telefone: string
    fl_whatsapp: boolean
    rats?: RATUncheckedCreateNestedManyWithoutContatoInput
  }

  export type ContatoCreateOrConnectWithoutClientesContatosInput = {
    where: ContatoWhereUniqueInput
    create: XOR<ContatoCreateWithoutClientesContatosInput, ContatoUncheckedCreateWithoutClientesContatosInput>
  }

  export type ClienteUpsertWithoutClientesContatosInput = {
    update: XOR<ClienteUpdateWithoutClientesContatosInput, ClienteUncheckedUpdateWithoutClientesContatosInput>
    create: XOR<ClienteCreateWithoutClientesContatosInput, ClienteUncheckedCreateWithoutClientesContatosInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutClientesContatosInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutClientesContatosInput, ClienteUncheckedUpdateWithoutClientesContatosInput>
  }

  export type ClienteUpdateWithoutClientesContatosInput = {
    fl_ativo?: BoolFieldUpdateOperationsInput | boolean
    ds_nome?: StringFieldUpdateOperationsInput | string
    ds_razao_social?: StringFieldUpdateOperationsInput | string
    nr_cnpj?: StringFieldUpdateOperationsInput | string
    nr_inscricao_estadual?: StringFieldUpdateOperationsInput | string
    ds_site?: NullableStringFieldUpdateOperationsInput | string | null
    ds_endereco?: StringFieldUpdateOperationsInput | string
    ds_cep?: StringFieldUpdateOperationsInput | string
    ds_uf?: StringFieldUpdateOperationsInput | string
    ds_cidade?: StringFieldUpdateOperationsInput | string
    ds_bairro?: StringFieldUpdateOperationsInput | string
    nr_numero?: StringFieldUpdateOperationsInput | string
    ds_complemento?: NullableStringFieldUpdateOperationsInput | string | null
    nr_codigo_ibge?: NullableStringFieldUpdateOperationsInput | string | null
    nr_latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    nr_longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    nr_distancia_km?: NullableFloatFieldUpdateOperationsInput | number | null
    tx_observacao_ident?: NullableStringFieldUpdateOperationsInput | string | null
    fl_matriz?: BoolFieldUpdateOperationsInput | boolean
    ds_situacao?: StringFieldUpdateOperationsInput | string
    ds_sistema?: StringFieldUpdateOperationsInput | string
    ds_contrato?: StringFieldUpdateOperationsInput | string
    nr_nomeados?: IntFieldUpdateOperationsInput | number
    nr_simultaneos?: IntFieldUpdateOperationsInput | number
    nr_tecnica_remoto?: NullableFloatFieldUpdateOperationsInput | number | null
    nr_tecnica_presencial?: NullableFloatFieldUpdateOperationsInput | number | null
    tm_minimo_horas?: DateTimeFieldUpdateOperationsInput | Date | string
    ds_diario_viagem?: StringFieldUpdateOperationsInput | string
    ds_regiao?: StringFieldUpdateOperationsInput | string
    tx_observacao_contrato?: StringFieldUpdateOperationsInput | string
    nr_codigo_zz?: IntFieldUpdateOperationsInput | number
    nr_franquia_nf?: FloatFieldUpdateOperationsInput | number
    nr_qtde_documentos?: IntFieldUpdateOperationsInput | number
    nr_valor_franqia?: FloatFieldUpdateOperationsInput | number
    nr_valor_excendente?: FloatFieldUpdateOperationsInput | number
    dt_data_contrato?: DateTimeFieldUpdateOperationsInput | Date | string
    emails?: EmailClienteUpdateManyWithoutClienteNestedInput
    rats?: RATUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutClientesContatosInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    fl_ativo?: BoolFieldUpdateOperationsInput | boolean
    ds_nome?: StringFieldUpdateOperationsInput | string
    ds_razao_social?: StringFieldUpdateOperationsInput | string
    nr_cnpj?: StringFieldUpdateOperationsInput | string
    nr_inscricao_estadual?: StringFieldUpdateOperationsInput | string
    ds_site?: NullableStringFieldUpdateOperationsInput | string | null
    ds_endereco?: StringFieldUpdateOperationsInput | string
    ds_cep?: StringFieldUpdateOperationsInput | string
    ds_uf?: StringFieldUpdateOperationsInput | string
    ds_cidade?: StringFieldUpdateOperationsInput | string
    ds_bairro?: StringFieldUpdateOperationsInput | string
    nr_numero?: StringFieldUpdateOperationsInput | string
    ds_complemento?: NullableStringFieldUpdateOperationsInput | string | null
    nr_codigo_ibge?: NullableStringFieldUpdateOperationsInput | string | null
    nr_latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    nr_longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    nr_distancia_km?: NullableFloatFieldUpdateOperationsInput | number | null
    tx_observacao_ident?: NullableStringFieldUpdateOperationsInput | string | null
    fl_matriz?: BoolFieldUpdateOperationsInput | boolean
    ds_situacao?: StringFieldUpdateOperationsInput | string
    ds_sistema?: StringFieldUpdateOperationsInput | string
    ds_contrato?: StringFieldUpdateOperationsInput | string
    nr_nomeados?: IntFieldUpdateOperationsInput | number
    nr_simultaneos?: IntFieldUpdateOperationsInput | number
    nr_tecnica_remoto?: NullableFloatFieldUpdateOperationsInput | number | null
    nr_tecnica_presencial?: NullableFloatFieldUpdateOperationsInput | number | null
    tm_minimo_horas?: DateTimeFieldUpdateOperationsInput | Date | string
    ds_diario_viagem?: StringFieldUpdateOperationsInput | string
    ds_regiao?: StringFieldUpdateOperationsInput | string
    tx_observacao_contrato?: StringFieldUpdateOperationsInput | string
    nr_codigo_zz?: IntFieldUpdateOperationsInput | number
    nr_franquia_nf?: FloatFieldUpdateOperationsInput | number
    nr_qtde_documentos?: IntFieldUpdateOperationsInput | number
    nr_valor_franqia?: FloatFieldUpdateOperationsInput | number
    nr_valor_excendente?: FloatFieldUpdateOperationsInput | number
    dt_data_contrato?: DateTimeFieldUpdateOperationsInput | Date | string
    emails?: EmailClienteUncheckedUpdateManyWithoutClienteNestedInput
    rats?: RATUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ContatoUpsertWithoutClientesContatosInput = {
    update: XOR<ContatoUpdateWithoutClientesContatosInput, ContatoUncheckedUpdateWithoutClientesContatosInput>
    create: XOR<ContatoCreateWithoutClientesContatosInput, ContatoUncheckedCreateWithoutClientesContatosInput>
    where?: ContatoWhereInput
  }

  export type ContatoUpdateToOneWithWhereWithoutClientesContatosInput = {
    where?: ContatoWhereInput
    data: XOR<ContatoUpdateWithoutClientesContatosInput, ContatoUncheckedUpdateWithoutClientesContatosInput>
  }

  export type ContatoUpdateWithoutClientesContatosInput = {
    ds_nome?: StringFieldUpdateOperationsInput | string
    ds_cargo?: StringFieldUpdateOperationsInput | string
    fl_ativo?: BoolFieldUpdateOperationsInput | boolean
    tx_observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    ds_email?: StringFieldUpdateOperationsInput | string
    ds_telefone?: StringFieldUpdateOperationsInput | string
    fl_whatsapp?: BoolFieldUpdateOperationsInput | boolean
    rats?: RATUpdateManyWithoutContatoNestedInput
  }

  export type ContatoUncheckedUpdateWithoutClientesContatosInput = {
    id_contato?: IntFieldUpdateOperationsInput | number
    ds_nome?: StringFieldUpdateOperationsInput | string
    ds_cargo?: StringFieldUpdateOperationsInput | string
    fl_ativo?: BoolFieldUpdateOperationsInput | boolean
    tx_observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    ds_email?: StringFieldUpdateOperationsInput | string
    ds_telefone?: StringFieldUpdateOperationsInput | string
    fl_whatsapp?: BoolFieldUpdateOperationsInput | boolean
    rats?: RATUncheckedUpdateManyWithoutContatoNestedInput
  }

  export type ClienteCreateWithoutEmailsInput = {
    fl_ativo: boolean
    ds_nome: string
    ds_razao_social: string
    nr_cnpj: string
    nr_inscricao_estadual: string
    ds_site?: string | null
    ds_endereco: string
    ds_cep: string
    ds_uf: string
    ds_cidade: string
    ds_bairro: string
    nr_numero: string
    ds_complemento?: string | null
    nr_codigo_ibge?: string | null
    nr_latitude?: number | null
    nr_longitude?: number | null
    nr_distancia_km?: number | null
    tx_observacao_ident?: string | null
    fl_matriz: boolean
    ds_situacao: string
    ds_sistema: string
    ds_contrato: string
    nr_nomeados: number
    nr_simultaneos: number
    nr_tecnica_remoto?: number | null
    nr_tecnica_presencial?: number | null
    tm_minimo_horas: Date | string
    ds_diario_viagem: string
    ds_regiao: string
    tx_observacao_contrato: string
    nr_codigo_zz: number
    nr_franquia_nf: number
    nr_qtde_documentos: number
    nr_valor_franqia: number
    nr_valor_excendente: number
    dt_data_contrato: Date | string
    clientesContatos?: ClienteContatoCreateNestedManyWithoutClienteInput
    rats?: RATCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutEmailsInput = {
    id_cliente?: number
    fl_ativo: boolean
    ds_nome: string
    ds_razao_social: string
    nr_cnpj: string
    nr_inscricao_estadual: string
    ds_site?: string | null
    ds_endereco: string
    ds_cep: string
    ds_uf: string
    ds_cidade: string
    ds_bairro: string
    nr_numero: string
    ds_complemento?: string | null
    nr_codigo_ibge?: string | null
    nr_latitude?: number | null
    nr_longitude?: number | null
    nr_distancia_km?: number | null
    tx_observacao_ident?: string | null
    fl_matriz: boolean
    ds_situacao: string
    ds_sistema: string
    ds_contrato: string
    nr_nomeados: number
    nr_simultaneos: number
    nr_tecnica_remoto?: number | null
    nr_tecnica_presencial?: number | null
    tm_minimo_horas: Date | string
    ds_diario_viagem: string
    ds_regiao: string
    tx_observacao_contrato: string
    nr_codigo_zz: number
    nr_franquia_nf: number
    nr_qtde_documentos: number
    nr_valor_franqia: number
    nr_valor_excendente: number
    dt_data_contrato: Date | string
    clientesContatos?: ClienteContatoUncheckedCreateNestedManyWithoutClienteInput
    rats?: RATUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutEmailsInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutEmailsInput, ClienteUncheckedCreateWithoutEmailsInput>
  }

  export type ClienteUpsertWithoutEmailsInput = {
    update: XOR<ClienteUpdateWithoutEmailsInput, ClienteUncheckedUpdateWithoutEmailsInput>
    create: XOR<ClienteCreateWithoutEmailsInput, ClienteUncheckedCreateWithoutEmailsInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutEmailsInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutEmailsInput, ClienteUncheckedUpdateWithoutEmailsInput>
  }

  export type ClienteUpdateWithoutEmailsInput = {
    fl_ativo?: BoolFieldUpdateOperationsInput | boolean
    ds_nome?: StringFieldUpdateOperationsInput | string
    ds_razao_social?: StringFieldUpdateOperationsInput | string
    nr_cnpj?: StringFieldUpdateOperationsInput | string
    nr_inscricao_estadual?: StringFieldUpdateOperationsInput | string
    ds_site?: NullableStringFieldUpdateOperationsInput | string | null
    ds_endereco?: StringFieldUpdateOperationsInput | string
    ds_cep?: StringFieldUpdateOperationsInput | string
    ds_uf?: StringFieldUpdateOperationsInput | string
    ds_cidade?: StringFieldUpdateOperationsInput | string
    ds_bairro?: StringFieldUpdateOperationsInput | string
    nr_numero?: StringFieldUpdateOperationsInput | string
    ds_complemento?: NullableStringFieldUpdateOperationsInput | string | null
    nr_codigo_ibge?: NullableStringFieldUpdateOperationsInput | string | null
    nr_latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    nr_longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    nr_distancia_km?: NullableFloatFieldUpdateOperationsInput | number | null
    tx_observacao_ident?: NullableStringFieldUpdateOperationsInput | string | null
    fl_matriz?: BoolFieldUpdateOperationsInput | boolean
    ds_situacao?: StringFieldUpdateOperationsInput | string
    ds_sistema?: StringFieldUpdateOperationsInput | string
    ds_contrato?: StringFieldUpdateOperationsInput | string
    nr_nomeados?: IntFieldUpdateOperationsInput | number
    nr_simultaneos?: IntFieldUpdateOperationsInput | number
    nr_tecnica_remoto?: NullableFloatFieldUpdateOperationsInput | number | null
    nr_tecnica_presencial?: NullableFloatFieldUpdateOperationsInput | number | null
    tm_minimo_horas?: DateTimeFieldUpdateOperationsInput | Date | string
    ds_diario_viagem?: StringFieldUpdateOperationsInput | string
    ds_regiao?: StringFieldUpdateOperationsInput | string
    tx_observacao_contrato?: StringFieldUpdateOperationsInput | string
    nr_codigo_zz?: IntFieldUpdateOperationsInput | number
    nr_franquia_nf?: FloatFieldUpdateOperationsInput | number
    nr_qtde_documentos?: IntFieldUpdateOperationsInput | number
    nr_valor_franqia?: FloatFieldUpdateOperationsInput | number
    nr_valor_excendente?: FloatFieldUpdateOperationsInput | number
    dt_data_contrato?: DateTimeFieldUpdateOperationsInput | Date | string
    clientesContatos?: ClienteContatoUpdateManyWithoutClienteNestedInput
    rats?: RATUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutEmailsInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    fl_ativo?: BoolFieldUpdateOperationsInput | boolean
    ds_nome?: StringFieldUpdateOperationsInput | string
    ds_razao_social?: StringFieldUpdateOperationsInput | string
    nr_cnpj?: StringFieldUpdateOperationsInput | string
    nr_inscricao_estadual?: StringFieldUpdateOperationsInput | string
    ds_site?: NullableStringFieldUpdateOperationsInput | string | null
    ds_endereco?: StringFieldUpdateOperationsInput | string
    ds_cep?: StringFieldUpdateOperationsInput | string
    ds_uf?: StringFieldUpdateOperationsInput | string
    ds_cidade?: StringFieldUpdateOperationsInput | string
    ds_bairro?: StringFieldUpdateOperationsInput | string
    nr_numero?: StringFieldUpdateOperationsInput | string
    ds_complemento?: NullableStringFieldUpdateOperationsInput | string | null
    nr_codigo_ibge?: NullableStringFieldUpdateOperationsInput | string | null
    nr_latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    nr_longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    nr_distancia_km?: NullableFloatFieldUpdateOperationsInput | number | null
    tx_observacao_ident?: NullableStringFieldUpdateOperationsInput | string | null
    fl_matriz?: BoolFieldUpdateOperationsInput | boolean
    ds_situacao?: StringFieldUpdateOperationsInput | string
    ds_sistema?: StringFieldUpdateOperationsInput | string
    ds_contrato?: StringFieldUpdateOperationsInput | string
    nr_nomeados?: IntFieldUpdateOperationsInput | number
    nr_simultaneos?: IntFieldUpdateOperationsInput | number
    nr_tecnica_remoto?: NullableFloatFieldUpdateOperationsInput | number | null
    nr_tecnica_presencial?: NullableFloatFieldUpdateOperationsInput | number | null
    tm_minimo_horas?: DateTimeFieldUpdateOperationsInput | Date | string
    ds_diario_viagem?: StringFieldUpdateOperationsInput | string
    ds_regiao?: StringFieldUpdateOperationsInput | string
    tx_observacao_contrato?: StringFieldUpdateOperationsInput | string
    nr_codigo_zz?: IntFieldUpdateOperationsInput | number
    nr_franquia_nf?: FloatFieldUpdateOperationsInput | number
    nr_qtde_documentos?: IntFieldUpdateOperationsInput | number
    nr_valor_franqia?: FloatFieldUpdateOperationsInput | number
    nr_valor_excendente?: FloatFieldUpdateOperationsInput | number
    dt_data_contrato?: DateTimeFieldUpdateOperationsInput | Date | string
    clientesContatos?: ClienteContatoUncheckedUpdateManyWithoutClienteNestedInput
    rats?: RATUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type RATCreateManyUsuarioInput = {
    id_rat?: number
    ds_status: string
    fl_deslocamento: string
    dt_data_hora_entrada: Date | string
    dt_data_hora_saida: Date | string
    tm_duracao: Date | string
    tx_comentario_interno: string
    ds_originada: string
    ds_observacao: string
    nr_km_ida?: number | null
    nr_km_volta?: number | null
    nr_valor_pedagio?: number | null
    tx_atividades: string
    tx_tarefas: string
    tx_pendencias: string
    id_cliente: number
    id_contato: number
  }

  export type RATUpdateWithoutUsuarioInput = {
    ds_status?: StringFieldUpdateOperationsInput | string
    fl_deslocamento?: StringFieldUpdateOperationsInput | string
    dt_data_hora_entrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_data_hora_saida?: DateTimeFieldUpdateOperationsInput | Date | string
    tm_duracao?: DateTimeFieldUpdateOperationsInput | Date | string
    tx_comentario_interno?: StringFieldUpdateOperationsInput | string
    ds_originada?: StringFieldUpdateOperationsInput | string
    ds_observacao?: StringFieldUpdateOperationsInput | string
    nr_km_ida?: NullableIntFieldUpdateOperationsInput | number | null
    nr_km_volta?: NullableIntFieldUpdateOperationsInput | number | null
    nr_valor_pedagio?: NullableFloatFieldUpdateOperationsInput | number | null
    tx_atividades?: StringFieldUpdateOperationsInput | string
    tx_tarefas?: StringFieldUpdateOperationsInput | string
    tx_pendencias?: StringFieldUpdateOperationsInput | string
    cliente?: ClienteUpdateOneRequiredWithoutRatsNestedInput
    contato?: ContatoUpdateOneRequiredWithoutRatsNestedInput
  }

  export type RATUncheckedUpdateWithoutUsuarioInput = {
    id_rat?: IntFieldUpdateOperationsInput | number
    ds_status?: StringFieldUpdateOperationsInput | string
    fl_deslocamento?: StringFieldUpdateOperationsInput | string
    dt_data_hora_entrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_data_hora_saida?: DateTimeFieldUpdateOperationsInput | Date | string
    tm_duracao?: DateTimeFieldUpdateOperationsInput | Date | string
    tx_comentario_interno?: StringFieldUpdateOperationsInput | string
    ds_originada?: StringFieldUpdateOperationsInput | string
    ds_observacao?: StringFieldUpdateOperationsInput | string
    nr_km_ida?: NullableIntFieldUpdateOperationsInput | number | null
    nr_km_volta?: NullableIntFieldUpdateOperationsInput | number | null
    nr_valor_pedagio?: NullableFloatFieldUpdateOperationsInput | number | null
    tx_atividades?: StringFieldUpdateOperationsInput | string
    tx_tarefas?: StringFieldUpdateOperationsInput | string
    tx_pendencias?: StringFieldUpdateOperationsInput | string
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_contato?: IntFieldUpdateOperationsInput | number
  }

  export type RATUncheckedUpdateManyWithoutUsuarioInput = {
    id_rat?: IntFieldUpdateOperationsInput | number
    ds_status?: StringFieldUpdateOperationsInput | string
    fl_deslocamento?: StringFieldUpdateOperationsInput | string
    dt_data_hora_entrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_data_hora_saida?: DateTimeFieldUpdateOperationsInput | Date | string
    tm_duracao?: DateTimeFieldUpdateOperationsInput | Date | string
    tx_comentario_interno?: StringFieldUpdateOperationsInput | string
    ds_originada?: StringFieldUpdateOperationsInput | string
    ds_observacao?: StringFieldUpdateOperationsInput | string
    nr_km_ida?: NullableIntFieldUpdateOperationsInput | number | null
    nr_km_volta?: NullableIntFieldUpdateOperationsInput | number | null
    nr_valor_pedagio?: NullableFloatFieldUpdateOperationsInput | number | null
    tx_atividades?: StringFieldUpdateOperationsInput | string
    tx_tarefas?: StringFieldUpdateOperationsInput | string
    tx_pendencias?: StringFieldUpdateOperationsInput | string
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_contato?: IntFieldUpdateOperationsInput | number
  }

  export type ClienteContatoCreateManyClienteInput = {
    id?: number
    id_contato: number
  }

  export type EmailClienteCreateManyClienteInput = {
    id?: number
    ds_email: string
  }

  export type RATCreateManyClienteInput = {
    id_rat?: number
    ds_status: string
    fl_deslocamento: string
    dt_data_hora_entrada: Date | string
    dt_data_hora_saida: Date | string
    tm_duracao: Date | string
    tx_comentario_interno: string
    ds_originada: string
    ds_observacao: string
    nr_km_ida?: number | null
    nr_km_volta?: number | null
    nr_valor_pedagio?: number | null
    tx_atividades: string
    tx_tarefas: string
    tx_pendencias: string
    id_usuario: number
    id_contato: number
  }

  export type ClienteContatoUpdateWithoutClienteInput = {
    contato?: ContatoUpdateOneRequiredWithoutClientesContatosNestedInput
  }

  export type ClienteContatoUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_contato?: IntFieldUpdateOperationsInput | number
  }

  export type ClienteContatoUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_contato?: IntFieldUpdateOperationsInput | number
  }

  export type EmailClienteUpdateWithoutClienteInput = {
    ds_email?: StringFieldUpdateOperationsInput | string
  }

  export type EmailClienteUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    ds_email?: StringFieldUpdateOperationsInput | string
  }

  export type EmailClienteUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    ds_email?: StringFieldUpdateOperationsInput | string
  }

  export type RATUpdateWithoutClienteInput = {
    ds_status?: StringFieldUpdateOperationsInput | string
    fl_deslocamento?: StringFieldUpdateOperationsInput | string
    dt_data_hora_entrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_data_hora_saida?: DateTimeFieldUpdateOperationsInput | Date | string
    tm_duracao?: DateTimeFieldUpdateOperationsInput | Date | string
    tx_comentario_interno?: StringFieldUpdateOperationsInput | string
    ds_originada?: StringFieldUpdateOperationsInput | string
    ds_observacao?: StringFieldUpdateOperationsInput | string
    nr_km_ida?: NullableIntFieldUpdateOperationsInput | number | null
    nr_km_volta?: NullableIntFieldUpdateOperationsInput | number | null
    nr_valor_pedagio?: NullableFloatFieldUpdateOperationsInput | number | null
    tx_atividades?: StringFieldUpdateOperationsInput | string
    tx_tarefas?: StringFieldUpdateOperationsInput | string
    tx_pendencias?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutRatsNestedInput
    contato?: ContatoUpdateOneRequiredWithoutRatsNestedInput
  }

  export type RATUncheckedUpdateWithoutClienteInput = {
    id_rat?: IntFieldUpdateOperationsInput | number
    ds_status?: StringFieldUpdateOperationsInput | string
    fl_deslocamento?: StringFieldUpdateOperationsInput | string
    dt_data_hora_entrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_data_hora_saida?: DateTimeFieldUpdateOperationsInput | Date | string
    tm_duracao?: DateTimeFieldUpdateOperationsInput | Date | string
    tx_comentario_interno?: StringFieldUpdateOperationsInput | string
    ds_originada?: StringFieldUpdateOperationsInput | string
    ds_observacao?: StringFieldUpdateOperationsInput | string
    nr_km_ida?: NullableIntFieldUpdateOperationsInput | number | null
    nr_km_volta?: NullableIntFieldUpdateOperationsInput | number | null
    nr_valor_pedagio?: NullableFloatFieldUpdateOperationsInput | number | null
    tx_atividades?: StringFieldUpdateOperationsInput | string
    tx_tarefas?: StringFieldUpdateOperationsInput | string
    tx_pendencias?: StringFieldUpdateOperationsInput | string
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_contato?: IntFieldUpdateOperationsInput | number
  }

  export type RATUncheckedUpdateManyWithoutClienteInput = {
    id_rat?: IntFieldUpdateOperationsInput | number
    ds_status?: StringFieldUpdateOperationsInput | string
    fl_deslocamento?: StringFieldUpdateOperationsInput | string
    dt_data_hora_entrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_data_hora_saida?: DateTimeFieldUpdateOperationsInput | Date | string
    tm_duracao?: DateTimeFieldUpdateOperationsInput | Date | string
    tx_comentario_interno?: StringFieldUpdateOperationsInput | string
    ds_originada?: StringFieldUpdateOperationsInput | string
    ds_observacao?: StringFieldUpdateOperationsInput | string
    nr_km_ida?: NullableIntFieldUpdateOperationsInput | number | null
    nr_km_volta?: NullableIntFieldUpdateOperationsInput | number | null
    nr_valor_pedagio?: NullableFloatFieldUpdateOperationsInput | number | null
    tx_atividades?: StringFieldUpdateOperationsInput | string
    tx_tarefas?: StringFieldUpdateOperationsInput | string
    tx_pendencias?: StringFieldUpdateOperationsInput | string
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_contato?: IntFieldUpdateOperationsInput | number
  }

  export type ClienteContatoCreateManyContatoInput = {
    id?: number
    id_cliente: number
  }

  export type RATCreateManyContatoInput = {
    id_rat?: number
    ds_status: string
    fl_deslocamento: string
    dt_data_hora_entrada: Date | string
    dt_data_hora_saida: Date | string
    tm_duracao: Date | string
    tx_comentario_interno: string
    ds_originada: string
    ds_observacao: string
    nr_km_ida?: number | null
    nr_km_volta?: number | null
    nr_valor_pedagio?: number | null
    tx_atividades: string
    tx_tarefas: string
    tx_pendencias: string
    id_usuario: number
    id_cliente: number
  }

  export type ClienteContatoUpdateWithoutContatoInput = {
    cliente?: ClienteUpdateOneRequiredWithoutClientesContatosNestedInput
  }

  export type ClienteContatoUncheckedUpdateWithoutContatoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
  }

  export type ClienteContatoUncheckedUpdateManyWithoutContatoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
  }

  export type RATUpdateWithoutContatoInput = {
    ds_status?: StringFieldUpdateOperationsInput | string
    fl_deslocamento?: StringFieldUpdateOperationsInput | string
    dt_data_hora_entrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_data_hora_saida?: DateTimeFieldUpdateOperationsInput | Date | string
    tm_duracao?: DateTimeFieldUpdateOperationsInput | Date | string
    tx_comentario_interno?: StringFieldUpdateOperationsInput | string
    ds_originada?: StringFieldUpdateOperationsInput | string
    ds_observacao?: StringFieldUpdateOperationsInput | string
    nr_km_ida?: NullableIntFieldUpdateOperationsInput | number | null
    nr_km_volta?: NullableIntFieldUpdateOperationsInput | number | null
    nr_valor_pedagio?: NullableFloatFieldUpdateOperationsInput | number | null
    tx_atividades?: StringFieldUpdateOperationsInput | string
    tx_tarefas?: StringFieldUpdateOperationsInput | string
    tx_pendencias?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutRatsNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutRatsNestedInput
  }

  export type RATUncheckedUpdateWithoutContatoInput = {
    id_rat?: IntFieldUpdateOperationsInput | number
    ds_status?: StringFieldUpdateOperationsInput | string
    fl_deslocamento?: StringFieldUpdateOperationsInput | string
    dt_data_hora_entrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_data_hora_saida?: DateTimeFieldUpdateOperationsInput | Date | string
    tm_duracao?: DateTimeFieldUpdateOperationsInput | Date | string
    tx_comentario_interno?: StringFieldUpdateOperationsInput | string
    ds_originada?: StringFieldUpdateOperationsInput | string
    ds_observacao?: StringFieldUpdateOperationsInput | string
    nr_km_ida?: NullableIntFieldUpdateOperationsInput | number | null
    nr_km_volta?: NullableIntFieldUpdateOperationsInput | number | null
    nr_valor_pedagio?: NullableFloatFieldUpdateOperationsInput | number | null
    tx_atividades?: StringFieldUpdateOperationsInput | string
    tx_tarefas?: StringFieldUpdateOperationsInput | string
    tx_pendencias?: StringFieldUpdateOperationsInput | string
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
  }

  export type RATUncheckedUpdateManyWithoutContatoInput = {
    id_rat?: IntFieldUpdateOperationsInput | number
    ds_status?: StringFieldUpdateOperationsInput | string
    fl_deslocamento?: StringFieldUpdateOperationsInput | string
    dt_data_hora_entrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_data_hora_saida?: DateTimeFieldUpdateOperationsInput | Date | string
    tm_duracao?: DateTimeFieldUpdateOperationsInput | Date | string
    tx_comentario_interno?: StringFieldUpdateOperationsInput | string
    ds_originada?: StringFieldUpdateOperationsInput | string
    ds_observacao?: StringFieldUpdateOperationsInput | string
    nr_km_ida?: NullableIntFieldUpdateOperationsInput | number | null
    nr_km_volta?: NullableIntFieldUpdateOperationsInput | number | null
    nr_valor_pedagio?: NullableFloatFieldUpdateOperationsInput | number | null
    tx_atividades?: StringFieldUpdateOperationsInput | string
    tx_tarefas?: StringFieldUpdateOperationsInput | string
    tx_pendencias?: StringFieldUpdateOperationsInput | string
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
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
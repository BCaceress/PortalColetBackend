
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsuarioScalarFieldEnum = {
  id_usuario: 'id_usuario',
  nome: 'nome',
  email: 'email',
  senha: 'senha',
  funcao: 'funcao'
};

exports.Prisma.RATScalarFieldEnum = {
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

exports.Prisma.ClienteScalarFieldEnum = {
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

exports.Prisma.ContatoScalarFieldEnum = {
  id_contato: 'id_contato',
  ds_nome: 'ds_nome',
  ds_cargo: 'ds_cargo',
  fl_ativo: 'fl_ativo',
  tx_observacoes: 'tx_observacoes',
  ds_email: 'ds_email',
  ds_telefone: 'ds_telefone',
  fl_whatsapp: 'fl_whatsapp'
};

exports.Prisma.ClienteContatoScalarFieldEnum = {
  id: 'id',
  id_cliente: 'id_cliente',
  id_contato: 'id_contato'
};

exports.Prisma.EmailClienteScalarFieldEnum = {
  id: 'id',
  ds_email: 'ds_email',
  id_cliente: 'id_cliente'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Usuario: 'Usuario',
  RAT: 'RAT',
  Cliente: 'Cliente',
  Contato: 'Contato',
  ClienteContato: 'ClienteContato',
  EmailCliente: 'EmailCliente'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

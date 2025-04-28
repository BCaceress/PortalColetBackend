-- CreateEnum
CREATE TYPE "CategoriaBaseConhecimento" AS ENUM ('Manual', 'Tutorial', 'Documento', 'Treinamento');

-- CreateEnum
CREATE TYPE "TipoBaseConhecimento" AS ENUM ('Documento', 'Video', 'Imagem');

-- CreateEnum
CREATE TYPE "PermissaoBaseConhecimento" AS ENUM ('Todos', 'Administrador', 'Implantador', 'Suporte', 'Analista', 'Desenvolvedor');

-- AlterTable
ALTER TABLE "clientes" ALTER COLUMN "id_cliente" DROP DEFAULT;
DROP SEQUENCE "clientes_id_cliente_seq";

-- AlterTable
ALTER TABLE "contatos" ALTER COLUMN "id_contato" DROP DEFAULT;
DROP SEQUENCE "contatos_id_contato_seq";

-- AlterTable
ALTER TABLE "rats" ALTER COLUMN "id_rat" DROP DEFAULT;
DROP SEQUENCE "rats_id_rat_seq";

-- AlterTable
ALTER TABLE "usuarios" ALTER COLUMN "id_usuario" DROP DEFAULT;
DROP SEQUENCE "usuarios_id_usuario_seq";

-- CreateTable
CREATE TABLE "bases_conhecimento" (
    "id_base_conhecimento" SERIAL NOT NULL,
    "ds_categoria" "CategoriaBaseConhecimento" NOT NULL,
    "ds_tipo" "TipoBaseConhecimento" NOT NULL,
    "ds_permissao" "PermissaoBaseConhecimento" NOT NULL,
    "ds_titulo" TEXT NOT NULL,
    "ds_descricao" TEXT NOT NULL,
    "ds_url" TEXT,
    "ds_conteudo" TEXT,
    "fl_ativo" BOOLEAN NOT NULL DEFAULT true,
    "id_usuario" INTEGER NOT NULL,

    CONSTRAINT "bases_conhecimento_pkey" PRIMARY KEY ("id_base_conhecimento")
);

-- CreateIndex
CREATE INDEX "bases_conhecimento_id_usuario_idx" ON "bases_conhecimento"("id_usuario");

-- AddForeignKey
ALTER TABLE "bases_conhecimento" ADD CONSTRAINT "bases_conhecimento_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

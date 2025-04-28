/*
  Warnings:

  - You are about to drop the column `ds_conteudo` on the `bases_conhecimento` table. All the data in the column will be lost.
  - You are about to drop the column `ds_descricao` on the `bases_conhecimento` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "bases_conhecimento" DROP COLUMN "ds_conteudo",
DROP COLUMN "ds_descricao",
ADD COLUMN     "ds_extensao" TEXT,
ADD COLUMN     "dt_data_upload" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "nr_tamanho_arquivo" DOUBLE PRECISION,
ADD COLUMN     "nr_visualizacoes" INTEGER NOT NULL DEFAULT 0;

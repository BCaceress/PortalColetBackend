/*
  Warnings:

  - Changed the type of `ds_status` on the `rats` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `fl_deslocamento` on the `rats` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "StatusRAT" AS ENUM ('Finalizado', 'Pendente');

-- CreateEnum
CREATE TYPE "TipoDeslocamento" AS ENUM ('P', 'R');

-- AlterTable
ALTER TABLE "rats" DROP COLUMN "ds_status",
ADD COLUMN     "ds_status" "StatusRAT" NOT NULL,
DROP COLUMN "fl_deslocamento",
ADD COLUMN     "fl_deslocamento" "TipoDeslocamento" NOT NULL,
ALTER COLUMN "tx_comentario_interno" DROP NOT NULL,
ALTER COLUMN "tx_tarefas" DROP NOT NULL,
ALTER COLUMN "tx_pendencias" DROP NOT NULL;

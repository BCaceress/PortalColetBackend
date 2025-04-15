/*
  Warnings:

  - You are about to drop the column `fl_ndse` on the `clientes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "clientes" DROP COLUMN "fl_ndse",
ADD COLUMN     "fl_nfse" BOOLEAN NOT NULL DEFAULT false;

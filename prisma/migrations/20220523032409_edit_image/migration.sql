/*
  Warnings:

  - Changed the type of `image` on the `services` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "services" DROP COLUMN "image",
ADD COLUMN     "image" BYTEA NOT NULL;

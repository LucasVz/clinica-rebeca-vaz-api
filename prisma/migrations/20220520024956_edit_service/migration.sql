/*
  Warnings:

  - You are about to drop the column `name` on the `services` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title]` on the table `services` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `text` to the `services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `services` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "services_name_key";

-- AlterTable
ALTER TABLE "services" DROP COLUMN "name",
ADD COLUMN     "text" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "services_title_key" ON "services"("title");

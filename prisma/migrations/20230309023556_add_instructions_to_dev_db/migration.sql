/*
  Warnings:

  - A unique constraint covering the columns `[authorId,title]` on the table `Recipe` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Recipe_title_authorId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Recipe_authorId_title_key" ON "Recipe"("authorId", "title");

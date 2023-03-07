/*
  Warnings:

  - You are about to drop the `Ingredient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Instruction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RecipeToIngredient` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ingredients` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `instructions` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Instruction" DROP CONSTRAINT "Instruction_recipeId_fkey";

-- DropForeignKey
ALTER TABLE "RecipeToIngredient" DROP CONSTRAINT "RecipeToIngredient_ingredientId_fkey";

-- DropForeignKey
ALTER TABLE "RecipeToIngredient" DROP CONSTRAINT "RecipeToIngredient_recipeId_fkey";

-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "ingredients" TEXT NOT NULL,
ADD COLUMN     "instructions" TEXT NOT NULL;

-- DropTable
DROP TABLE "Ingredient";

-- DropTable
DROP TABLE "Instruction";

-- DropTable
DROP TABLE "RecipeToIngredient";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const jqrecipe = await prisma.recipe.create({
    data: {
      title: "Chile",
      slug: "chile",
      duration: 30,
      serves: 8,
      instructions: {
        create: [
          {
            stepNumber: 1,
            instruction: "Placeholder instruction 1",
          },
          {
            stepNumber: 2,
            instruction: "Placeholder instruction 2",
          },
          {
            stepNumber: 3,
            instruction: "Placeholder instruction 3",
          },
        ],
      },
      ingredients: {
        create: [
          {
            name: "green pepper",
            unitOfMeasure: "UNITS",
            quantity: "1",
          },
          {
            name: "sugar",
            unitOfMeasure: "TEASPOONS",
            quantity: "2",
          },
        ],
      },
      author: {
        connect: {
          id: "clf468ch70002yd1e9xhypz4a",
        },
      },
    },
  });
  console.log({ jqrecipe });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());

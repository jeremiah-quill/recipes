import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.create({
    data: {
      name: "test user 1",
      email: "testuser1@gmail.com",
      recipes: {
        create: {
          title: "Scrambled Eggs",
          duration: 10,
          serves: 2,
          instructions: "Beat eggs. Heat pan. Add eggs to pan and scramble until cooked.",
          ingredients: {
            create: [
              {
                quantityOfMeasurement: "2",
                ingredient: {
                  create: {
                    name: "Eggs",
                  },
                },
              },
              {
                quantityOfMeasurement: "1 tbsp",
                ingredient: {
                  create: {
                    name: "Butter",
                  },
                },
              },
            ],
          },
        },
      },
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: "test user 2",
      email: "testuser2@example.com",
      recipes: {
        create: {
          title: "Pancakes",
          duration: 30,
          serves: 4,
          instructions:
            "Mix flour, sugar, baking powder, and salt in a bowl. Beat eggs and milk in a separate bowl. Combine mixtures. Heat pan. Add batter to pan and cook until bubbles form. Flip and cook until golden brown.",
          ingredients: {
            create: [
              {
                quantityOfMeasurement: "1 cup",
                ingredient: {
                  create: {
                    name: "Flour",
                  },
                },
              },
              {
                quantityOfMeasurement: "2 tbsp",
                ingredient: {
                  create: {
                    name: "Sugar",
                  },
                },
              },
              {
                quantityOfMeasurement: "2 tsp",
                ingredient: {
                  create: {
                    name: "Baking Powder",
                  },
                },
              },
              {
                quantityOfMeasurement: "1/2 tsp",
                ingredient: {
                  create: {
                    name: "Salt",
                  },
                },
              },
              {
                quantityOfMeasurement: "2",
                ingredient: {
                  create: {
                    name: "Eggs",
                  },
                },
              },
              {
                quantityOfMeasurement: "1 1/2 cup",
                ingredient: {
                  create: {
                    name: "Milk",
                  },
                },
              },
              {
                quantityOfMeasurement: "2 tbsp",
                ingredient: {
                  create: {
                    name: "Butter",
                  },
                },
              },
            ],
          },
        },
      },
    },
  });

  console.log({ user1, user2 });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const user1 = await prisma.user.create({
  //   data: {
  //     name: "test user 1",
  //     email: "testuser1@gmail.com",
  //     recipes: {
  //       create: {
  //         title: "Scrambled Eggs",
  //         duration: 10,
  //         serves: 2,
  //         instructions: "Beat eggs. Heat pan. Add eggs to pan and scramble until cooked.",
  //         ingredients: "some ingredients for this meal",
  //       },
  //     },
  //   },
  // });

  // const user2 = await prisma.user.create({
  //   data: {
  //     name: "test user 2",
  //     email: "testuser2@example.com",
  //     recipes: {
  //       create: {
  //         title: "Pancakes",
  //         duration: 30,
  //         serves: 4,
  //         instructions:
  //           "Mix flour, sugar, baking powder, and salt in a bowl. Beat eggs and milk in a separate bowl. Combine mixtures. Heat pan. Add batter to pan and cook until bubbles form. Flip and cook until golden brown.",
  //         ingredients: "some ingredients",
  //       },
  //     },
  //   },
  // });

  const jqrecipe = await prisma.recipe.create({
    data: {
      title: "JQ Recipe",
      duration: 10,
      serves: 2,
      instructions: "Make the food by doing these instructions!",
      ingredients: "This is a list of ingredients",
      author: {
        connect: {
          id: "clexj3q270000ydz8f5b77wnb",
        },
      },
    },
  });

  // console.log({ jqrecipe });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());

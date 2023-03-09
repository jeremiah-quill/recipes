import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Jeremiah Quill",
  //     email: "jcq5010@gmail.com",
  //     recipes: {
  //       create: {
  //         title: "Scrambled Eggs",
  //         slug: "scrambled-eggs",
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
  // const jqrecipe = await prisma.recipe.create({
  //   data: {
  //     title: "Corn Chowder",
  //     slug: "corn-chowder",
  //     duration: 30,
  //     serves: 8,
  //     instructions: {
  //       create: [
  //         {
  //           stepNumber: 1,
  //           instruction: "Placeholder instruction 1",
  //         },
  //         {
  //           stepNumber: 2,
  //           instruction: "Placeholder instruction 2",
  //         },
  //         {
  //           stepNumber: 3,
  //           instruction: "Placeholder instruction 3",
  //         },
  //       ],
  //     },
  //     ingredients: "This is a list of ingredients",
  //     author: {
  //       connect: {
  //         id: "clf0i0wbg000qyd2en2xwmvn3",
  //       },
  //     },
  //   },
  // });
  // console.log({ jqrecipe });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());

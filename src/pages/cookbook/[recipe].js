import { getSession } from "next-auth/react";
import DashboardLayout from "../../components/DashboardLayout";
import { PrismaClient } from "@prisma/client";
import { Recipe } from "@prisma/client";

export default function RecipePage({ recipe }) {
  console.log("recipe", recipe);
  return (
    <DashboardLayout>
      <>
        <h1 className="text-3xl font-bold underline">{recipe.title}</h1>
        <p className="p-2">This is the details page for {recipe.title}. It is protected by authentication.</p>
        {/* <h2 className="font-bold text-xl">Ingredients</h2> */}
        {/* <ul className="p-2">
          {recipe.ingredients.map((ingredient) => (
            <li key={instruction.id}>
              {instruction.stepNumber}. {instruction.instruction}
            </li>
          ))}
        </ul> */}
        <h2 className="font-bold text-xl">Instructions</h2>
        <ul className="p-2">
          {recipe.instructions.map((instruction) => (
            <li key={instruction.id}>
              {instruction.stepNumber}. {instruction.instruction}
            </li>
          ))}
        </ul>
      </>
    </DashboardLayout>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  // pull out slug from params.  if the slug doesn't exist in our user's recipes, redirect to cookbook index
  const prisma = new PrismaClient();

  const slug = context.params.recipe;

  // TODO: refactor to more efficiently query for a single recipe
  const recipe = await prisma.recipe.findMany({
    where: {
      slug: { equals: slug },
      authorId: session?.user?.id,
    },
    include: {
      instructions: true,
    },
  });

  if (recipe.length === 0) {
    return {
      redirect: {
        destination: "/cookbook",
        permanent: true,
      },
    };
  }

  const serializedRecipe = JSON.parse(JSON.stringify(recipe[0]));

  return {
    props: { recipe: serializedRecipe },
  };
}

import { getSession } from "next-auth/react";
import DashboardLayout from "../../components/DashboardLayout";
import { PrismaClient } from "@prisma/client";
import { Recipe } from "@prisma/client";

export default function RecipePage({ recipe }: { recipe: Recipe }) {
  return (
    <DashboardLayout>
      <>
        <h1 className="text-3xl font-bold underline">{recipe.title}</h1>
        <p>This is the details page for {recipe.title}. It is protected by authentication.</p>
        <p>The ingredients are: {recipe.ingredients}</p>
        <p>The instructions are: {recipe.instructions}</p>
      </>
    </DashboardLayout>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const prisma = new PrismaClient();

  const slug = context.params.recipe;

  // TODO: make this a findUnique after changing slug to be unique in prisma model and db
  const recipe = await prisma.recipe.findMany({
    where: {
      slug: slug,
    },
  });

  if (recipe.length === 0) {
    return {
      redirect: {
        destination: "/cookbook",
        permanent: false,
      },
    };
  }

  const serializedRecipe = JSON.parse(JSON.stringify(recipe[0]));

  return {
    props: { recipe: serializedRecipe },
  };
}

import { getSession } from "next-auth/react";
import DashboardLayout from "../../components/DashboardLayout";
import { PrismaClient } from "@prisma/client";

type User = {
  id: string;
  name: string;
  email: string;
  image: string;
};

export default function CookbookPage({ recipes }: { recipes: any }) {
  console.log(recipes);
  return (
    <DashboardLayout>
      <>
        <h1>Cookbook index</h1>
        <p>This is the Cookbook index page. It is protected by authentication.</p>
        <div className="my-6">
          {recipes.map((recipe: any) => (
            <div key={recipe.id}>
              <h2>
                <span className="font-bold text-2xl">Recipe Title:</span> {recipe.title}
              </h2>
              <p>
                <span className="font-bold text-2xl">Ingredients:</span> {recipe.ingredients}
              </p>
              <p>
                <span className="font-bold text-2xl">Instructions:</span> {recipe.instructions}
              </p>
            </div>
          ))}
        </div>
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

  const recipes = await prisma.recipe.findMany({
    where: {
      authorId: (session?.user as User)?.id,
    },
  });

  const serializedRecipes = JSON.parse(JSON.stringify(recipes));

  return {
    props: { recipes: serializedRecipes },
  };
}

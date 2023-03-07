import { getSession } from "next-auth/react";
import DashboardLayout from "../../components/DashboardLayout";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { Recipe } from "@prisma/client";

type User = {
  id: string;
  name: string;
  email: string;
  image: string;
};

export default function CookbookPage({ recipes }: { recipes: Recipe[] }) {
  return (
    <DashboardLayout>
      <>
        <h1 className="text-3xl font-bold underline">Cookbook index</h1>
        <p className="p-2">This is the Cookbook index page. It is protected by authentication.</p>
        <div className="my-6">
          <ul className="grid gap-2 md:grid-cols-3">
            {recipes.map((recipe: Recipe) => (
              <Link key={recipe.id} href={`/cookbook/${recipe.slug}`}>
                <li className="rounded p-2 border">{recipe.title}</li>
              </Link>
            ))}
            <Link href={`/cookbook/test`}>
              <li className="rounded p-2 border">test title</li>
            </Link>
          </ul>
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

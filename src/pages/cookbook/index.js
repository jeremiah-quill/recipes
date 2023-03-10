import { getSession } from "next-auth/react";
import DashboardLayout from "../../components/DashboardLayout";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";

function FakeRecipe() {
  return (
    <tr>
      <td className="py-4 px-6">
        <button className="cursor-pointer hover:bg-slate-200 p-2 active:scale-[95%] rounded">
          <MdOutlineAddShoppingCart className="h-full text-slate-800" />
        </button>
      </td>
      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
        <Link className="hover:underline" href={`/cookbook`}>
          Fake Title
        </Link>
      </td>
      <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap">Beef</td>
      <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap">10</td>
      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">45</td>
      <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
        <button className="cursor-pointer hover:bg-slate-200 p-2 active:scale-[95%] rounded">
          <SlOptionsVertical />
        </button>
      </td>
    </tr>
  );
}

export default function CookbookPage({ recipes }) {
  if (!recipes) return <div>loading...</div>;
  console.log(recipes);
  return (
    <DashboardLayout>
      <>
        <h1 className="text-3xl font-bold underline">Cookbook index</h1>
        <p className="p-2">This is the Cookbook index page. It is protected by authentication.</p>
        <div className="">
          <div className="flex flex-col h-[80vh]">
            <div className="overflow-auto">
              <div className="inline-block min-w-full align-middle">
                <table className="min-w-full relative">
                  <thead className="bg-slate-200">
                    <tr>
                      <th
                        scope="col"
                        className="bg-slate-200 sticky top-0 z-10  py-3 px-6 text-xs font-medium tracking-wider text-left text-slate-800 uppercase">
                        +List
                      </th>
                      <th
                        scope="col"
                        className="bg-slate-200 sticky top-0 py-3 px-6 text-xs font-medium tracking-wider text-left text-slate-800 uppercase">
                        Recipe Name
                      </th>
                      <th
                        scope="col"
                        className="bg-slate-200 sticky top-0 py-3 px-6 text-xs font-medium tracking-wider text-left text-slate-800 uppercase">
                        Main
                      </th>
                      <th
                        scope="col"
                        className="bg-slate-200 sticky top-0 py-3 px-6 text-xs font-medium tracking-wider text-left text-slate-800 uppercase">
                        # Ingredients
                      </th>
                      <th
                        scope="col"
                        className="bg-slate-200 sticky top-0 py-3 px-6 text-xs font-medium tracking-wider text-left text-slate-800 uppercase">
                        Minutes
                      </th>
                      <th
                        scope="col"
                        className="bg-slate-200 sticky top-0 py-3 px-6 text-xs font-medium tracking-wider text-left text-slate-800 uppercase">
                        {/* More */}
                      </th>
                    </tr>
                  </thead>
                  <tbody className=" divide-y divide-gray-200 ">
                    {recipes.map((recipe) => (
                      <tr key={recipe.id} className="">
                        <td className="py-4 px-6">
                          <button className="cursor-pointer hover:bg-slate-200 p-2 active:scale-[95%] rounded">
                            <MdOutlineAddShoppingCart className="h-full text-slate-800" />
                          </button>
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                          <Link className="hover:underline" href={`/cookbook/${recipe.slug}`}>
                            {recipe.title}
                          </Link>
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap">Beef</td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap">
                          {recipe.ingredients.length}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                          {recipe.duration}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                          <button className="cursor-pointer hover:bg-slate-200 p-2 active:scale-[95%] rounded">
                            <SlOptionsVertical />
                          </button>
                        </td>
                      </tr>
                    ))}
                    {Array.apply(null, Array(30)).map((x, i) => (
                      <FakeRecipe />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    </DashboardLayout>
  );
}

export async function getServerSideProps(context) {
  // get session from context, if no session, redirect to home page
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  // get all recipes for the user, serialize them, and pass them to the page
  const prisma = new PrismaClient();

  const recipes = await prisma.recipe.findMany({
    where: {
      authorId: session?.user?.id,
    },
    include: {
      ingredients: true,
    },
  });
  const serializedRecipes = JSON.parse(JSON.stringify(recipes));

  return {
    props: { recipes: serializedRecipes },
  };
}

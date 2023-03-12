import { getSession } from "next-auth/react";
import DashboardLayout from "../../components/DashboardLayout";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";
import { useState } from "react";

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
          <div>Fake Title</div>
        </Link>
      </td>
      <td scope="col" className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap">
        3/11/2023
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
  const [ingredients, setIngredients] = useState(["potatoes", "onions", "beef"]);

  if (!recipes) return <div>loading...</div>;
  console.log(recipes);

  const getDate = (date) => {
    const d = new Date(date);
    return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
  };

  return (
    <DashboardLayout ingredients={ingredients}>
      <>
        <div className="flex flex-col max-h-screen relative">
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
                  Recipe
                </th>
                <th
                  scope="col"
                  className="bg-slate-200 sticky top-0 py-3 px-6 text-xs font-medium tracking-wider text-left text-slate-800 uppercase">
                  Last updated
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
            <tbody className=" divide-y divide-gray-200">
              {recipes.map((recipe) => (
                <tr key={recipe.id}>
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
                  <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap">
                    {getDate(recipe.updatedAt)}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap">Beef</td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap">
                    {recipe.ingredients.length}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">{recipe.duration}</td>
                  <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                    <button className="cursor-pointer hover:bg-slate-200 p-2 active:scale-[95%] rounded">
                      <SlOptionsVertical />
                    </button>
                  </td>
                </tr>
              ))}
              {Array.apply(null, Array(20)).map((x, i) => (
                <FakeRecipe key={i} />
              ))}
            </tbody>
          </table>
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

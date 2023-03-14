import { getSession } from "next-auth/react";
import DashboardLayout from "../../components/DashboardLayout";
import { PrismaClient } from "@prisma/client";
import { OutlineButton } from "../../components/Button";
import { useContext } from "react";
import { ListStateContext } from "../../context/ListContext";

export default function RecipePage({ recipe }) {
  const { ingredientState } = useContext(ListStateContext);

  const getDate = (date) => {
    const d = new Date(date);
    return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
  };

  return (
    <DashboardLayout>
      <>
        <div className="grid grid-cols-4 h-full">
          <div className="col-span-4 lg:col-span-2 overflow-scroll">
            <div className="px-8 py-4 border-b sticky top-0 bg-white">
              <h1 className="text-7xl font-extrabold underline mb-6 w-full">{recipe.title}</h1>
              <div className="flex gap-2 mb-8">
                <span className="px-2 rounded-full border">{recipe.duration} min</span>
                <span className="px-2 rounded-full border">feeds {recipe.serves}</span>
              </div>
              <div className="flex items-end">
                <div className="text-xs italic">Updated: {getDate(recipe.updatedAt)}</div>
                <OutlineButton
                  className="mt-auto ml-auto"
                  onClick={() => ingredientState.addIngredients(recipe.ingredients.map((ingredient) => ingredient))}>
                  Add to list
                </OutlineButton>
              </div>
            </div>
            <div className="p-8">
              <h2 className="text-2xl mb-2 font-[merriweather]">Ingredients</h2>
              <ul className="mb-16 grid gap-4">
                {recipe.ingredients.map((ingredient) => (
                  <li key={recipe.id}>
                    * {ingredient.quantity} {ingredient.unitOfMeasure} {ingredient.name}
                  </li>
                ))}
              </ul>
              <h2 className="text-2xl  mb-2 font-[merriweather]">Instructions</h2>
              <ul className="grid gap-16">
                {/* {recipe.instructions.map((instruction) => (
                  <li key={instruction.id}>
                    {instruction.stepNumber}. {instruction.instruction}
                  </li>
                ))} */}
                {Array.apply(null, Array(10)).map((x, i) => (
                  <li key={i}>
                    {i + 1}. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Do nulla aliqua
                    incididunt excepteur duis eu in qui laboris ipsum ullamco pariatur.
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-4 lg:col-span-2 lg:flex flex-col">
            <img src="/food.jpg" />
            <div className="h-full grid place-items-center">
              <ul className="block">
                {recipe.ingredients.map((ingredient) => (
                  <li key={recipe.id}>
                    * {ingredient.quantity} {ingredient.unitOfMeasure} {ingredient.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* <h2 className="font-bold text-xl">Ingredients</h2>
        <ul className="p-2">
          {recipe.ingredients.map((recipe) => (
            <li key={recipe.id}>
              * {recipe.quantity} {recipe.unitOfMeasure} {recipe.name}
            </li>
          ))}
        </ul>
        <h2 className="font-bold text-xl">Instructions</h2>
        <ul className="p-2">
          {recipe.instructions.map((instruction) => (
            <li key={instruction.id}>
              {instruction.stepNumber}. {instruction.instruction}
            </li>
          ))}
        </ul> */}
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
      ingredients: true,
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

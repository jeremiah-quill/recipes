import Head from "next/head";
import Layout from "../components/Layout";
import { PrismaClient } from "@prisma/client";
import { User } from "@prisma/client";
import { RxCaretDown } from "react-icons/rx";
import { MdManageSearch } from "react-icons/md";
import { IoShareOutline } from "react-icons/io5";
import { GoChecklist } from "react-icons/go";
import { BiRightArrowAlt } from "react-icons/bi";

export default function Home({ allUsers, allRecipes }: { allUsers: User[]; allRecipes: any }) {
  console.log(allUsers);
  console.log(allRecipes);
  return (
    <>
      <Head>
        <title>Recipes</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <>
          <div className="p-4 max-w-7xl mx-auto min-h-[80vh] grid md:grid-cols-2 items-center">
            <div>
              <h2 className="text-6xl font-bold mb-8">
                It's time to finally organize your recipes
              </h2>
              <h3 className="text-lg mb-8 count">
                We've helped thousands of people organize their recipes. Don't put it off any
                longer, let us help you build a personalized, modern cookbook that you'll actually
                use.
              </h3>
              <div className="flex gap-4">
                <button className="bg-slate-100 text-slate-800 border-2 border-slate-800 font-bold p-2 px-6 rounded hover:bg-slate-800 hover:text-slate-100 transition-colors">
                  Browse Recipes
                </button>
                <button className="bg-slate-100 text-slate-800 border-2 border-slate-800 font-bold p-2 px-6 rounded hover:bg-slate-800 hover:text-slate-100 transition-colors">
                  Feature Demo
                </button>
              </div>
            </div>
            <div>
              <img src="./food-hero.png" className=" max-w-none w-full" />
            </div>
          </div>
          <div>
            <h3 className="p-4 text-center text-3xl font-bold mt-auto">See how we can help</h3>
            <div className="w-full flex justify-center">
              <div className="rounded-full bg-slate-800 animate-bounce">
                <RxCaretDown className="text-3xl mx-auto text-slate-100" />
              </div>
            </div>
          </div>
          <section className="p-4 max-w-7xl mx-auto my-64 grid md:grid-cols-3 gap-3">
            <a
              href="#"
              className="border border-slate-300 p-3 flex flex-col group shadow-lg shadow-orange-300">
              <h3 className="text-xl font-bold flex gap-2 items-center">
                <MdManageSearch className="text-3xl" />
                Manage
              </h3>
              <p className="p-4">
                Take control of your eating habits and save time in the kitchen, plus never forget a
                recipe again.
              </p>
              <div className="flex gap-1 ml-auto mt-auto items-center">
                <div className="group-hover:underline">Learn our motivation</div>
                <BiRightArrowAlt className="group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
            <a
              href="#"
              className="border border-slate-300 p-3 flex flex-col group shadow-lg shadow-green-300">
              <h3 className="text-xl font-bold flex gap-2 items-center">
                <IoShareOutline className="text-4xl" />
                Share
              </h3>
              <p className="p-4">
                Explore our public feed to discover new recipes, or publish your own recipes to
                share.
              </p>
              <div className="flex gap-1 ml-auto mt-auto items-center">
                <div className="group-hover:underline">View public recipes</div>
                <BiRightArrowAlt className="group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
            <a
              href="#"
              className="border border-slate-300 p-3 flex flex-col group shadow-lg shadow-yellow-300">
              <h3 className="text-xl font-bold flex gap-2 items-center">
                <GoChecklist className="text-4xl" />
                Prepare
              </h3>
              <p className="p-4">
                Choose your meals for the week and export the ingredients to a shopping list.
              </p>
              <div className="flex gap-1 ml-auto mt-auto items-center">
                <div className="group-hover:underline">Demo our features</div>
                <BiRightArrowAlt className="group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </section>
          <section className="my-64 bg-green-300 overflow-hidden">
            <div className="max-w-7xl grid md:grid-cols-2 mx-auto  ">
              <img src="/pasta.png" alt="avocado" className="" />
              <div className="p-4 flex items-center">
                <div>
                  <h3 className="text-4xl font-bold max-w-xl">
                    Sign up now and start assembling the last cookbook you'll ever need
                  </h3>
                  <p className="my-8">No paywall. No ads. Just an app to organize your recipes.</p>
                  <button className="bg-slate-100 text-slate-800 border-2 border-slate-800 font-bold p-2 px-6 rounded justify-start hover:bg-slate-800 hover:text-slate-100 transition-colors">
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="my-64 max-w-7xl mx-auto grid md:grid-cols-2 gap-8 p-4">
            <div className="">
              <h3 className="text-4xl font-bold">
                Your cookbook, your way. Organize recipes the way you want.
              </h3>
              <p className="my-8">
                Draft recipes with rich text, add images, and organize them into collections. Search
                by ingredient, custom tags, or a number of different fields and attributes.
              </p>
              <p>
                Learn more in our{" "}
                <a href="#" className="border-b-2 border-slate-800">
                  feature demo
                </a>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-blue-500 bg-opacity-50"></div>
                <img src="asparagus.png" alt="" className="object-cover h-full w-full" />
              </div>
              <div className="relative aspect-square rounded overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-red-500 bg-opacity-50"></div>
                <img src="plate.png" alt="" className="object-cover h-full w-full" />
              </div>
              <div className="relative aspect-square rounded overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-yellow-500 bg-opacity-50"></div>
                <img src="pancakes.png" alt="" className="object-cover h-full w-full" />
              </div>
              <div className="relative aspect-square rounded overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-green-500 bg-opacity-50"></div>
                <img src="salmon.png" alt="" className="object-cover h-full w-full" />
              </div>
            </div>
          </section>
        </>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const prisma = new PrismaClient();

  const allUsers = await prisma.user.findMany({
    include: {
      recipes: true,
    },
  });

  const allRecipes = await prisma.recipe.findMany({
    include: {
      author: true,
    },
  });

  return {
    props: {
      allUsers: JSON.parse(JSON.stringify(allUsers)),
      allRecipes: JSON.parse(JSON.stringify(allRecipes)),
    },
  };
}

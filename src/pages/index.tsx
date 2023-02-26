import Head from "next/head";
import { PrismaClient } from "@prisma/client";
import { User } from "@prisma/client";
import { RxCaretDown } from "react-icons/rx";
import { MdManageSearch } from "react-icons/md";
import { IoShareOutline } from "react-icons/io5";
import { GoChecklist } from "react-icons/go";

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
      <div className="bg-slate-100 min-h-[100vh] text-slate-800">
        <header className="font-extrabold p-4 flex items-center">
          <h1 className="text-2xl">Recipes</h1>
          <nav className="ml-auto">
            <ul className="flex gap-8">
              <li>
                <a href="#">Feed</a>
              </li>
              <li>
                <a href="#">Sign In</a>
              </li>
              <li>
                <a href="#">Sign up</a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="mx-auto">
          <div className="p-4 max-w-7xl mx-auto min-h-[80vh] grid md:grid-cols-2 items-center">
            <div>
              <h2 className="text-6xl font-bold mb-8">
                It's time to finally organize your recipes
              </h2>
              <h3 className="text-lg mb-8 count">
                We've helped thousands of people organize their recipes to make cooking easier.
                Don't put it off any longer, let us help you build a personalized modern cookbook
                that you'll actually use.
              </h3>
              <div className="flex gap-4">
                <button className="bg-slate-800 text-slate-100 font-bold p-2 px-6 rounded">
                  Sign Up
                </button>
                <button className="bg-slate-800 text-slate-100 font-bold p-2 px-6 rounded">
                  Sign In
                </button>
                <button className="bg-slate-100 text-slate-800 border-2 border-slate-800 font-bold p-2 px-6 rounded">
                  Public Recipe Feed
                </button>
              </div>
            </div>
            <div>
              <img src="./food-hero.png" className=" max-w-none w-full" />
            </div>
          </div>
          <div>
            <h3 className="p-4 text-center text-3xl font-bold mt-auto">See how we can help</h3>
            <RxCaretDown className="text-5xl mx-auto" />
          </div>
          <section className="p-4 max-w-7xl mx-auto my-64 grid md:grid-cols-3 gap-3">
            <div className="border border-slate-300 p-3">
              <h3 className="text-xl font-bold flex gap-2 items-center">
                <MdManageSearch className="text-4xl" />
                Manage
              </h3>
              <p className="p-4">
                Whether you want to store recipes as bookmarks, or document the recipe yourself.
                Never forget a recipe again.
              </p>
            </div>
            <div className="border border-slate-300 p-3">
              <h3 className="text-xl font-bold flex gap-2 items-center">
                <IoShareOutline className="text-4xl" />
                Share
              </h3>
              <p className="p-4">
                Explore our public feed to discover new recipes, or turn your own recipes public!
              </p>
            </div>
            <div className="border border-slate-300 p-3">
              <h3 className="text-xl font-bold flex gap-2 items-center">
                <GoChecklist className="text-4xl" />
                Prepare
              </h3>
              <p className="p-4">
                Choose your meals for the week and export the ingredients to a shopping list.
              </p>
            </div>
          </section>
          <section className="my-64 h-[250px] bg-green-300 overflow-hidden">
            <div className="max-w-7xl grid md:grid-cols-2 mx-auto  ">
              <img src="/pasta.png" alt="avocado" className="" />
              <div className="p-4 grid place-items-center">
                <div className="place-self-start pt-4">
                  <h3 className="text-4xl font-bold max-w-xl">
                    Sign up now to get all of our features for free
                  </h3>
                  <p className="my-3">This is such a great deal. You should do it now!</p>
                  <button className="bg-slate-100 text-slate-800 border-2 border-slate-800 font-bold p-2 px-6 rounded justify-start">
                    Sign up now
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="my-64 max-w-7xl mx-auto grid md:grid-cols-2">
            <div className="px-4">
              <h3 className="text-4xl font-bold">We are here to help you</h3>
              <p className="my-3">
                This is some text to describe how we're here to help the customer! It should be
                about four sentences. This is the second to last sentence. Maybe this is the last
                sentence here.
              </p>
              <button className="bg-slate-800 text-slate-100 border-2 border-slate-100 font-bold p-2 px-6 rounded justify-start">
                Sign up now
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative border border-slate-300 aspect-square rounded overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-blue-500 bg-opacity-50"></div>
                <img src="asparagus.png" alt="" className="object-cover h-full w-full" />
              </div>
              <div className="relative border border-slate-300 aspect-square rounded overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-red-500 bg-opacity-50"></div>
                <img src="plate.png" alt="" className="object-cover h-full w-full" />
              </div>
              <div className="relative border border-slate-300 aspect-square rounded overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-yellow-500 bg-opacity-50"></div>
                <img src="pancakes.png" alt="" className="object-cover h-full w-full" />
              </div>
              <div className="relative border border-slate-300 aspect-square rounded overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-green-500 bg-opacity-50"></div>
                <img src="salmon.png" alt="" className="object-cover h-full w-full" />
              </div>
            </div>
          </section>
        </main>
        <footer className="h-[250px] bg-orange-200 grid place-items-center text-3xl font-bold">
          Footer
        </footer>
      </div>
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

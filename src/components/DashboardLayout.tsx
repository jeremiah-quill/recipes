import Link from "next/link";
import Layout from "@/components/Layout";

export default function DashboardLayout({ children }: { children: JSX.Element }) {
  return (
    <Layout>
      <div className="bg-red-500 h-full grid grid-cols-12">
        <div className="bg-blue-500 col-span-3">
          <ul>
            <li className=" bg-orange-200">
              <Link href="/cookbook" className="block bg-gray-200 p-2">
                Cookbook
              </Link>
            </li>
            <li className=" bg-orange-200">
              <Link href="/cookbook/new-recipe" className="block bg-gray-200 p-2">
                New Recipe
              </Link>
            </li>
            <li className=" bg-orange-200">
              <Link href="/cookbook/recipe1" className="block bg-gray-200 p-2">
                recipe 1
              </Link>
            </li>
            <li className=" bg-orange-200">
              <Link href="/cookbook/shopping-list" className="block bg-gray-200 p-2">
                Shopping List
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-2 col-span-9">{children}</div>
      </div>
    </Layout>
  );
}

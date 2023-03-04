import Link from "next/link";
import Layout from "@/components/Layout";

export default function DashboardLayout({ children }: { children: JSX.Element }) {
  return (
    <Layout>
      <div className=" inset-0 absolute">
        <div className="h-full grid grid-cols-12">
          <div className="col-span-2 border-2">
            <ul>
              <li>
                <Link href="/cookbook" className="block p-2">
                  Cookbook
                </Link>
              </li>
              <li>
                <Link href="/cookbook/categories-and-tags" className="block p-2">
                  Categories & Tags
                </Link>
              </li>
              <li>
                <Link href="/cookbook/new-recipe" className="block p-2">
                  New Recipe
                </Link>
              </li>
              <li>
                <Link href="/shopping-list" className="block p-2">
                  Shopping List
                </Link>
              </li>
            </ul>
          </div>
          <div className="p-2 col-span-10 border-2 border-l-0">{children}</div>
        </div>
      </div>
    </Layout>
  );
}

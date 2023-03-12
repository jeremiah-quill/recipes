import Link from "next/link";
import Layout from "@/components/Layout";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children, ingredients }: { children: JSX.Element; ingredients: string[] }) {
  return (
    <Layout isDashboard={true}>
      <div className="inset-0 absolute">
        <div className="h-full grid grid-cols-12">
          <div className="mt-auto lg:mt-0 order-1 lg:col-span-2 col-span-12 border-top border border-l-0 flex flex-col">
            <Sidebar className="flex w-full sticky lg:block" />
            {/* <div className="mt-auto p-2">
              <QuickList ingredients={ingredients} />
            </div> */}
          </div>
          <div className="lg:order-2 col-span-12 lg:col-span-10 border border-l-0 overflow-scroll">{children}</div>
        </div>
      </div>
    </Layout>
  );
}

export function MobileDashboardLayout({ children, ingredients }: { children: JSX.Element; ingredients: string[] }) {
  return <div>{children}</div>;
}

function QuickList({ ingredients }: { ingredients?: string[] }) {
  return (
    <>
      <h2>Quick List</h2>
      <ul>
        {ingredients?.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
    </>
  );
}

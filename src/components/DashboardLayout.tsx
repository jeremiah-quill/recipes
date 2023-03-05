import Link from "next/link";
import Layout from "@/components/Layout";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }: { children: JSX.Element }) {
  return (
    <Layout isDashboard={true}>
      <div className=" inset-0 absolute">
        <div className="h-full grid grid-cols-12">
          <div className="col-span-2 border-2">
            <Sidebar />
          </div>
          <div className="p-2 col-span-10 border-2 border-l-0">{children}</div>
        </div>
      </div>
    </Layout>
  );
}

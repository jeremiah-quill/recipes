import { useSession } from "next-auth/react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({
  children,
  isDashboard = false,
}: {
  children: React.ReactNode;
  isDashboard?: boolean;
}) {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <div className=" text-slate-800 flex flex-col h-full min-h-[100vh]">
      <Header />
      <main className="flex-1 relative">{children}</main>
      {!isDashboard && <Footer />}
    </div>
  );
}

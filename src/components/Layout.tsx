import { useSession } from "next-auth/react";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <div className=" text-slate-800 flex flex-col h-full min-h-[100vh]">
      <Header />
      <main className="flex-1 relative">{children}</main>
    </div>
  );
}

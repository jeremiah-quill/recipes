import { useSession } from "next-auth/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <div className="bg-slate-100 min-h-[100vh] text-slate-800 flex flex-col">
      <header className="font-extrabold p-4 flex items-center">
        <h1 className="text-2xl">
          <a href="/">Recipes</a>
        </h1>
        <nav className="ml-auto">
          <ul className="flex gap-8 items-center">
            {session ? (
              <li>
                <a href="/profile">Profile</a>
              </li>
            ) : null}
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Browse</a>
            </li>
            {!session ? (
              <li>
                <a href={`/api/auth/signin`}>Sign In</a>
              </li>
            ) : (
              <>
                <div className="flex gap-2 items-center border-2 border-slate-800 px-2 py-1 rounded">
                  <div>{session.user?.email}</div>
                  <img
                    src={session.user?.image!}
                    referrerPolicy="no-referrer"
                    alt="profile picture"
                    className="w-10 rounded-full border-2 border-slate-800"
                  />
                </div>
                <li>
                  <a href={`/api/auth/signout`}>Sign Out</a>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="h-[250px] bg-slate-300 grid place-items-center text-3xl font-bold">
        Footer
      </footer>
    </div>
  );
}

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  return (
    <header className="font-extrabold p-4 flex items-center">
      <h1 className="text-2xl">
        <Link href="/">Recipes</Link>
      </h1>
      <nav className="ml-auto">
        <ul className="flex gap-8 items-center">
          <li>
            <Link href="/about">About</Link>
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
  );
}

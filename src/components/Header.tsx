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
              <div className="font-normal flex gap-2 items-center bg-slate-200 rounded-full pl-4">
                <div>{session.user?.email}</div>
                <img
                  src={session.user?.image!}
                  referrerPolicy="no-referrer"
                  alt="profile picture"
                  className="w-10 rounded-full "
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

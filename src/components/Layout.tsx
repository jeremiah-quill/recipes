export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-slate-100 min-h-[100vh] text-slate-800 flex flex-col">
      <header className="font-extrabold p-4 flex items-center">
        <h1 className="text-2xl">Recipes</h1>
        <nav className="ml-auto">
          <ul className="flex gap-8">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Browse</a>
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
      <main className="flex-1">{children}</main>
      <footer className="h-[250px] bg-slate-300 grid place-items-center text-3xl font-bold">
        Footer
      </footer>
    </div>
  );
}

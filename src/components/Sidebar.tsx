import Link from "next/link";

export default function Sidebar() {
  return (
    <ul>
      <li>
        <SidebarLink href="/cookbook">Cookbook</SidebarLink>
      </li>
      <li>
        <SidebarLink href="/cookbook/categories-and-tags">Categories & Tags</SidebarLink>
      </li>
      <li>
        <SidebarLink href="/cookbook/new-recipe">New Recipe</SidebarLink>
      </li>
      <li>
        <SidebarLink href="/shopping-list">Shopping List</SidebarLink>
      </li>
    </ul>
  );
}

export function SidebarLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="block p-2">
      {children}
    </Link>
  );
}

import Link from "next/link";
import { FaBook } from "react-icons/fa";
import { AiOutlineOrderedList } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";

export default function Sidebar({ className }: { className?: string }) {
  return (
    <ul className={className}>
      <li className="flex-1 text-xs lg:text-base">
        <SidebarLink href="/cookbook">
          <FaBook />
          Cookbook
        </SidebarLink>
      </li>
      {/* <li className="flex-1 grid items-center text-xs">
        <SidebarLink href="/cookbook/categories-and-tags">Categories & Tags</SidebarLink>
      </li> */}
      <li className="flex-1 text-xs lg:text-base">
        <SidebarLink href="/cookbook/new-recipe">
          <GrAdd />
          New Recipe
        </SidebarLink>
      </li>
      <li className="flex-1 text-xs lg:text-base">
        <SidebarLink href="/shopping-list">
          <AiOutlineOrderedList className="l" />
          Shopping List
        </SidebarLink>
      </li>
    </ul>
  );
}

export function SidebarLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="p-2 grid place-items-center lg:flex lg:gap-2">
      {children}
    </Link>
  );
}

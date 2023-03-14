import Link from "next/link";
import { FaBook } from "react-icons/fa";
import { AiOutlineOrderedList } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import { ListStateContext } from "../context/ListContext";
import { useContext } from "react";

export default function Sidebar({ className, ingredientCount }: { className?: string; ingredientCount?: number }) {
  const { ingredientState } = useContext(ListStateContext);

  console.log("ingredientState", ingredientState);

  return (
    <ul className={className}>
      <li className="flex-1 text-xs lg:text-base ">
        <SidebarLink href="/cookbook">
          <FaBook />
          Cookbook
        </SidebarLink>
      </li>
      <li className="flex-1 text-xs lg:text-base relative bg-gray-200">
        <SidebarLink href="/shopping-list">
          <AiOutlineOrderedList />
          Shopping List
          <span className="absolute p-1 px-2 rounded-full text-sm text-white bg-red-500 right-2">
            {ingredientState.ingredients.length > 0 ? ingredientState.ingredients.length : null}4
          </span>
        </SidebarLink>
      </li>
      <li className="flex-1 text-xs lg:text-base">
        <SidebarLink href="/cookbook/new-recipe">
          <GrAdd />
          New Recipe
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

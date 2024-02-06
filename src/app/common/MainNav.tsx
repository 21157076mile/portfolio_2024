"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { MAIN_NAV } from "@shared/constant";

const ThemeSwitch = dynamic(() => import("./ThemeSwitch"), { ssr: false });

export default function MainNav() {
  const currentRoute = usePathname();
  return (
    <div className="ml-auto hidden lg:flex lg:items-center">
      {MAIN_NAV.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className={clsx(
            "relative ml-8 border-b-[5px] text-lg font-light lowercase",
            currentRoute === item.href
              ? "cursor-default border-primary text-primary hover:text-primary dark:border-primary-dark dark:text-primary-dark dark:hover:text-primary-dark"
              : "border-transparent hover:text-sky-500 dark:hover:text-sky-300",
          )}
        >
          {item.label}
          {currentRoute === item.href ? <hr className="absolute w-[150%] h-[1px]  bg-gray-700 border-0 dark:bg-gray-300 -bottom-1 -left-1/4" />: ""}
        </Link>
      ))}
      <div className="flex lg:ml-8 lg:items-center lg:border-l lg:border-slate-900/15 lg:pl-8 dark:lg:border-slate-600">
        <ThemeSwitch />
      </div>
    </div>
  );
}

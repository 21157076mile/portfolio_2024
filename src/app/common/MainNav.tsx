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
            "ml-8 border-b-2 border-dotted text-lg font-light lowercase hover:text-sky-500 dark:hover:text-sky-400",
            currentRoute === item.href
              ? "dark:text-primary-dark dark:hover:text-primary-dark dark:border-primary-dark cursor-default border-primary text-primary hover:text-primary"
              : "border-transparent",
          )}
        >
          {item.label}
        </Link>
      ))}
      <div className="flex lg:ml-8 lg:items-center lg:border-l lg:border-slate-900/15 lg:pl-8 dark:lg:border-slate-500">
        <ThemeSwitch />
      </div>
    </div>
  );
}

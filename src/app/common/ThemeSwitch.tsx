"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Popover, Tab } from "@headlessui/react";
import clsx from "clsx";

import { MonitorIcon, MoonIcon, SunIcon } from "@shared/icons";

interface Props {
  isMobile?: boolean;
}
const ThemeSwitch = ({ isMobile }: Props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const renderCurrentTheme = (theme: string | undefined) => {
    switch (theme) {
      case "light":
        return <SunIcon className="fill-sky-400/20 stroke-sky-500" />;
      case "dark":
        return <MoonIcon className="fill-sky-500" />;
      default:
        return <SunIcon className="fill-sky-400/20 stroke-sky-500" />;
    }
  };

  const listThemes = [
    {
      value: "light",
      icon: (isSelected: boolean) => (
        <SunIcon
          className={clsx(
            "mr-2 h-6 w-6",
            isSelected
              ? "stroke-sky-500"
              : "stroke-slate-400 dark:stroke-slate-300",
          )}
        />
      ),
    },
    {
      value: "dark",
      icon: (isSelected: boolean) => (
        <MoonIcon
          className={clsx(
            "mr-2 h-6 w-6",
            isSelected ? "fill-sky-500" : "fill-slate-400 dark:fill-slate-300",
          )}
        />
      ),
    },
    {
      value: "system",
      icon: (isSelected: boolean) => (
        <MonitorIcon
          className={clsx(
            "mr-2 h-6 w-6",
            isSelected
              ? "stroke-sky-500"
              : "stroke-slate-400 dark:stroke-slate-300",
          )}
        />
      ),
    },
  ];

  if (isMobile) {
    return (
      <div className="flex items-center justify-between font-normal">
        <span className="text-sm uppercase text-slate-500 dark:text-slate-400">
          Switch theme
        </span>
        <Tab.Group>
          <Tab.List>
            {listThemes.map((item) => (
              <Tab
                key={item.value}
                onClick={() => setTheme(item.value)}
                className="ml-2 outline-none"
              >
                {item.icon(theme === item.value)}
              </Tab>
            ))}
          </Tab.List>
        </Tab.Group>
      </div>
    );
  }

  return (
    <div className="hidden lg:mr-8 lg:flex">
      <Popover className="relative flex items-center">
        <>
          <Popover.Button className="outline-none ">
            {renderCurrentTheme(theme)}
          </Popover.Button>
          <Popover.Panel className="dark:highlight-white/5 absolute -right-5 top-2 z-10 mt-7 w-36 overflow-hidden rounded-lg bg-white py-1 text-sm font-semibold text-slate-700 shadow-xl ring-1 ring-slate-900/10 dark:bg-slate-800 dark:text-slate-300 dark:ring-0">
            <ul tabIndex={0} className="w-[120px]">
              {listThemes.map((item) => (
                <li
                  key={item.value}
                  tabIndex={-1}
                  onClick={() => setTheme(item.value)}
                  className={clsx(
                    "flex cursor-pointer items-center py-1 pl-3 pr-2 hover:bg-slate-100 dark:hover:bg-slate-700",
                    {
                      "text-sky-500": theme === item.value,
                    },
                  )}
                >
                  {item.icon(theme === item.value)}
                  {item.value}
                </li>
              ))}
            </ul>
          </Popover.Panel>
        </>
      </Popover>
    </div>
  );
};

export default ThemeSwitch;

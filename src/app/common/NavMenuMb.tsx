"use client";

import { Fragment, useState } from "react";
import dynamic from "next/dynamic";
import { Dialog, Transition } from "@headlessui/react";

import { CloseIcon, DotsVerticalRoundedIcon } from "@shared/icons";

const SignInHeader = dynamic(() => import("./SignInHeader"), { ssr: false });
const ThemeSwitch = dynamic(() => import("./ThemeSwitch"), { ssr: false });

export default function NavMenuMb() {
  const [isModalOpen, setModalOpen] = useState(false);

  function closeModal() {
    setModalOpen(false);
  }

  function openModal() {
    setModalOpen(true);
  }

  return (
    <>
      <div className="absolute bottom-0 right-0 top-0 flex items-center lg:hidden">
        <button
          type="button"
          onClick={openModal}
          className="flex h-8 w-8 items-center justify-center p-5 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
        >
          <span className="sr-only">Navigation</span>
          <DotsVerticalRoundedIcon aria-hidden="true" />
        </button>
      </div>

      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80"
              aria-hidden
            />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="dark:highlight-white/5 fixed right-4 top-4 w-full max-w-xs rounded-lg bg-white p-6 text-base font-semibold text-slate-900 shadow-lg dark:bg-slate-800 dark:text-slate-400">
              <button
                type="button"
                onClick={closeModal}
                className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
              >
                <span className="sr-only">Close navigation</span>
                <CloseIcon />
              </button>

              <div className="pt-2">
                <SignInHeader />
              </div>

              <ul className="mt-6 space-y-6 border-t border-slate-200 pt-6 dark:border-slate-200/10">
                <li>
                  <a
                    className="hover:text-sky-500 dark:hover:text-sky-400"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-sky-500 dark:hover:text-sky-400"
                    href="/projects"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-sky-500 dark:hover:text-sky-400"
                    href="/contact"
                  >
                    About
                  </a>
                </li>
              </ul>

              <div className="mt-6 border-t border-slate-200 pt-6 dark:border-slate-200/10">
                <ThemeSwitch isMobile />
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}

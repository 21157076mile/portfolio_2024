import dynamic from "next/dynamic";

const SignInHeader = dynamic(() => import("./SignInHeader"), { ssr: false });
const NavMenuMb = dynamic(() => import("./NavMenuMb"), { ssr: false });
const ThemeSwitch = dynamic(() => import("./ThemeSwitch"), { ssr: false });

export default function Header() {
  return (
    <header className="z-5 relative w-full flex-none text-sm font-semibold leading-6">
      <nav
        aria-label="Global"
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="relative flex items-center py-5 ">
          <a className="flex-none text-2xl font-semibold" href="/">
            <span className="mb-20 animate-linear bg-gradient-to-r from-primary via-tertiary to-primary bg-[length:200%_auto] bg-clip-text text-5xl font-bold text-transparent">
              le vu trang dai
            </span>
          </a>

          <div className="ml-auto hidden lg:flex lg:items-center">
            <a
              href="/"
              className="hover:text-sky-500 dark:hover:text-sky-400"
            >
              Home
            </a>
            <a
              className="ml-8 hover:text-sky-500 dark:hover:text-sky-400"
              href="/projects"
            >
              Projects     | Portfolio
            </a>
            <a
              className="ml-8 hover:text-sky-500 dark:hover:text-sky-400"
              href="/contact"
            >
              About      | Contact
            </a>
            <div className="flex lg:ml-8 lg:items-center lg:border-l lg:border-slate-900/15 lg:pl-8 dark:lg:border-slate-500">
              <ThemeSwitch />
              <SignInHeader />
            </div>
          </div>
        </div>

        <NavMenuMb />
      </nav>
    </header>
  );
}

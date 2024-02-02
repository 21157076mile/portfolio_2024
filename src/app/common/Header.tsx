import dynamic from "next/dynamic";

const MainNav = dynamic(() => import("./MainNav"), { ssr: false });
const MainNavMb = dynamic(() => import("./MainNavMb"), { ssr: false });

export default function Header() {
  return (
    <header className="z-5 relative w-full flex-none text-sm font-semibold leading-6">
      <nav aria-label="Global" className="container mx-auto">
        <div className="relative flex items-center py-5">
          <a className="flex-none font-semibold" href="/">
            <span className="mb-20 animate-linear bg-gradient-to-r from-primary via-tertiary to-primary bg-[length:200%_auto] bg-clip-text text-4xl font-bold text-transparent">
              le vu trang dai
            </span>
          </a>
          <MainNav />
        </div>
        <MainNavMb />
      </nav>
    </header>
  );
}

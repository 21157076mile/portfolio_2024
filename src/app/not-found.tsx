import Link from "next/link";

export default async function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8 dark:bg-slate-800">
      <div className="text-center">
        <p className="text-base font-semibold text-rose-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-slate-300">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-slate-900 dark:text-slate-200">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="text-sm font-semibold text-sky-600 hover:text-sky-700"
          >
            <span aria-hidden="true">&larr;</span> Go back home
          </Link>
          {/* <a href="#" className="text-sm font-semibold text-stone-500">
            Contact support <span aria-hidden="true">&rarr;</span>
          </a> */}
        </div>
      </div>
    </main>
  );
}

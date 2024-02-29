import Link from "next/link";

import Footer from "./common/Footer";
import Header from "./common/Header";
import HeroBanner from "./common/hero-banner";
import SocialMediaContact from "./common/SocialMediaContact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header title="le vu trang dai" canonical="https://levutrangdai.id.vn/"/>

      <div className="container flex flex-1 items-center justify-center mb-2 sm:mb-10">
        <div className="flex flex-col sm:mt-10 sm:flex-row-reverse">
          <div className="relative mx-auto flex h-[320px] w-[320px] justify-center overflow-hidden rounded-full shadow sm:h-[360px] sm:w-[360px]">
            <HeroBanner />
          </div>
          <div className="ml-auto max-w-[500px] flex-1 pr-0 text-center font-light sm:pr-5">
            <p className="mt-10 text-5xl font-extralight sm:mt-0">
              hi, i&apos;m Dai
            </p>

            <div className="mt-5">
              <div>
                <p>
                  I&apos;m a front-end developer with 7+ years of hands-on
                  experience with modern techniques based on JavaScript.
                </p>
                <p className="mt-2">
                  I have experience working with Agile/Scrum methodology. And
                  I&apos;m able to analyze, propose, and implement solutions to
                  business features of own products.
                </p>
              </div>
              <div className="mt-3 flex select-none items-center justify-center text-sm">
                <Link
                  href="/projects"
                  className="group relative border border-black bg-transparent px-3 py-2 text-black transition duration-200 dark:border-gray-200"
                >
                  <div className="absolute -bottom-1 -right-1 -z-10 h-full w-full bg-gray-200 transition-all duration-200 group-hover:bottom-0 group-hover:right-0 dark:z-10" />
                  <span className="relative -bottom-1 -right-1 z-20 transition-all duration-200 group-hover:bottom-0 group-hover:right-0">
                    explore my latest projects
                  </span>
                </Link>
                <span className="mx-2 text-slate-200 sm:mx-3 dark:text-slate-800">
                  &nbsp;
                </span>
                <Link
                  href="/about"
                  className="group relative border border-black bg-transparent px-3 py-2 text-black transition duration-200 dark:border-gray-200"
                >
                  <div className="absolute -bottom-1 -right-1 -z-10 h-full w-full bg-amber-300 transition-all duration-200 group-hover:bottom-0 group-hover:right-0 dark:z-10" />
                  <span className="relative -bottom-1 -right-1 z-20 transition-all duration-200 group-hover:bottom-0 group-hover:right-0">
                    see more details about me
                  </span>
                </Link>
              </div>

              {/* <p className="mt-3">
                If you&apos;re interested in working together, get in touch
                here!
              </p> */}
              <p className="mt-5">
                Other than coding, I love cycling to the countryside with my
                friends for some fresh air. If you&apos;re interested you can go
                with us, get in touch here!
              </p>
              <SocialMediaContact className="mt-3" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// className="rounded-md border border-dotted border-tertiary
// bg-transparent px-2 py-1 text-center text-tertiary hover:border-transparent hover:bg-tertiary hover:text-white"

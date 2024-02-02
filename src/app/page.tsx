import Image from "next/image";
import Link from "next/link";

import Footer from "./common/Footer";
import Header from "./common/Header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header />

      <div className="container flex flex-1 items-center justify-center">
        <div className="flex flex-col sm:mt-10 sm:flex-row-reverse">
          <div className="relative mx-auto flex h-[320px] w-[320px] justify-center overflow-hidden rounded-full shadow sm:h-[360px] sm:w-[360px]">
            <Image
              fill
              alt="Picture of Fernanda Martinez"
              src="https://res.cloudinary.com/dpzkswl8u/image/upload/v1706692565/demon_slayer_ybgwdz.png"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
          <div className="ml-auto max-w-[500px] flex-1 pr-0 sm:pr-5 text-center font-light">
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
                  href="/about"
                  className="rounded-md border border-dotted border-tertiary bg-transparent px-2 py-1 text-center text-tertiary hover:border-transparent hover:bg-tertiary hover:text-white"
                >
                  explore my latest projects
                </Link>
                <span className="mx-2 text-slate-200 dark:text-slate-800">
                  |
                </span>
                <Link
                  href="/about"
                  className="dark:border-primary-dark dark:text-primary-dark hover:dark:bg-primary-dark rounded-md border border-dotted border-primary bg-transparent px-2 py-1 text-center text-primary hover:border-transparent hover:bg-primary hover:text-white"
                >
                  see more details about me
                </Link>
              </div>

              {/* <p className="mt-3">
                If you&apos;re interested in working together, get in touch
                here!
              </p> */}
              <p className="mt-3">
                Other than coding, I love cycling to the countryside with my
                friends for some fresh air. If you&apos;re interested you can go
                with us, get in touch here!
              </p>
              <ul className="mt-3 flex justify-center space-x-5 text-sm">
                <li>
                  <Link
                    href="https://zalo.me/0989851497"
                    rel="nofollow noreferrer"
                    className=" text-sky-600 hover:text-sky-700"
                    target="_blank"
                  >
                    <span>
                      zalo: <strong>0989851497</strong>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.facebook.com/lvtd.hhd"
                    rel="nofollow noreferrer"
                    className=" text-sky-600 hover:text-sky-700"
                    target="_blank"
                  >
                    facebook: <strong>/lvtd.hhd</strong>
                  </Link>
                </li>
              </ul>
              {/* <p className="text-sm"><strong>trangdai.levu@gmail.com</strong></p> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

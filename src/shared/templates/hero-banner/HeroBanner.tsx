import React from "react";
import Image from "next/image";
import clsx from "clsx";

const HeroBanner = ({ className }: ReactFCPropsWithClassName) => {
  return (
    <div className={clsx(className, "hero-banner container")}>
      {/* <div
        // className="relative w-full overflow-hidden"
        // style={{ height: "500px" }}
      > */}

      <div className="flex flex-wrap sm:flex-col-reverse">
        {/* <div className="w-full sm:w-[360px]"> */}
          <div className="w-[360px] h-[360px] overflow-hidden rounded-full shadow flex  justify-center mx-auto ">
            <Image
            // fill
              alt="Picture of Fernanda Martinez"
              src="https://res.cloudinary.com/dpzkswl8u/image/upload/v1706692565/demon_slayer_ybgwdz.png"
              width={360}
              height={360}
              className="min-h-fit"
            style={{
              objectFit: "cover",
              // minHeight="100%",
              objectPosition: "center",
            }}
            />

          {/* </div> */}
        </div>
        <div>
          hi, i&apos;m Dai!,
<p>
I am a creative developer and graphic designer who&apos;s passionate about building digital experiences that nurture community, inclusivity, and knowledge. I am a graduate of Juno College of Technology&apos;s Web Development Immersive Bootcamp and I have a BA in Media Communications from the University of Guelph-Humber.

Whether the internet or the outdoors, I love exploring, and I apply this open mindset to my creative projects. I am happiest when I am using my passions to help you pursue yours! If you&apos;re interested in working together, get in touch here!
</p>

        </div>
      </div>

      {/* </div> */}
    </div>
  );
};

export default HeroBanner;

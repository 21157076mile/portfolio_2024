"use client";

import React from "react";
import { CldImage } from "next-cloudinary";

export default function HeroBanner() {
  return (
    <CldImage
      fill
      alt="le vu trang dai - avatar"
      src="demon_slayer_ybgwdz"
      priority
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      style={{
        objectFit: "cover",
        objectPosition: "center",
      }}
    />
  );
};

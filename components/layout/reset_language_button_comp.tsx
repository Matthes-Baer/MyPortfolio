"use client";

import Loading from "@/app/[lang]/loading";
import Link from "next/link";
import { Suspense } from "react";
import Image from "next/image";
import IMAGES from "@/utils/import_images";

export default function RESET_LANGUAGE_BUTTON_COMP() {
  const german_image = IMAGES.flag_german;
  const english_image = IMAGES.flag_english;

  const reset_language_cookie = async () => {
    try {
      const response = await fetch("/api/POST_reset_cookie", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "language_cookie", value: "en" }),
      });
      if (!response.ok) {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <Link href={"/en"} onClick={reset_language_cookie}>
        <div className="flex">
          <Image
            src={english_image.src}
            alt={english_image.alt}
            width={25}
            height={25}
          />
          <Image
            src={german_image.src}
            alt={german_image.alt}
            width={25}
            height={25}
          />
        </div>
      </Link>
    </Suspense>
  );
}

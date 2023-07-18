"use client";

import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { useParams } from "next/navigation";

import Loading from "@/app/[lang]/loading";
import { FLAG_IMAGES } from "@/utils/import_images";
import { SupportedLanguages } from "@/utils/types";

const RESET_LANGUAGE_BUTTON_COMP: () => JSX.Element = (): JSX.Element => {
  const language: string = useParams().lang;

  const reset_language_cookie: () => Promise<void> =
    async (): Promise<void> => {
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
            src={FLAG_IMAGES.flag_english.src}
            alt={FLAG_IMAGES.flag_english.alt[language as SupportedLanguages]}
            width={25}
            height={25}
          />
          <Image
            src={FLAG_IMAGES.flag_german.src}
            alt={FLAG_IMAGES.flag_german.alt[language as SupportedLanguages]}
            width={25}
            height={25}
          />
        </div>
      </Link>
    </Suspense>
  );
};

export default RESET_LANGUAGE_BUTTON_COMP;

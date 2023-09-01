"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

import { FLAG_IMAGES } from "@/utils/import_images";
import { SupportedLanguages } from "@/utils/types";

const RESET_LANGUAGE_BUTTON_COMP: () => JSX.Element = (): JSX.Element => {
  const language: string = useParams().lang;

  //* Reset the language cookie
  const reset_language_cookie: () => Promise<void> =
    async (): Promise<void> => {
      try {
        const response = await fetch("/api/POST_reset_cookie", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: "language_cookie", value: language }),
        });
        if (!response.ok) {
          throw new Error();
        }
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <Link href={`/${language}`} onClick={reset_language_cookie}>
      <div className="flex">
        <Image
          src={FLAG_IMAGES.flag_english.src}
          alt={FLAG_IMAGES.flag_english.alt[language as SupportedLanguages]}
          width={27}
          height={27}
          className="ml-2 mr-2"
        />
        <Image
          src={FLAG_IMAGES.flag_german.src}
          alt={FLAG_IMAGES.flag_german.alt[language as SupportedLanguages]}
          width={27}
          height={27}
        />
      </div>
    </Link>
  );
};

export default RESET_LANGUAGE_BUTTON_COMP;

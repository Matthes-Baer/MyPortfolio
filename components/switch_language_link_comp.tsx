"use client";

import Image from "next/image";
import { Suspense } from "react";
import { SupportedLanguages } from "@/utils/types";

import Loading from "@/app/[lang]/loading";
import { FLAG_IMAGES } from "@/utils/import_images";
import { IImage_Props } from "@/utils/interfaces";

const SWITCH_LANGUAGE_LINK_COMP: (props: {
  language: string;
}) => JSX.Element = (props: { language: string }): JSX.Element => {
  const image_props: IImage_Props =
    props.language === "de"
      ? FLAG_IMAGES.flag_german
      : FLAG_IMAGES.flag_english;

  //* Change language cookie
  const change_language_cookie: (
    cookie_name: string,
    value: string
  ) => Promise<void> = async (
    cookie_name: string,
    value: string
  ): Promise<void> => {
    try {
      const res = await fetch("/api/POST_change_cookie", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: cookie_name,
          value: value,
        }),
      });

      if (!res.ok) {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <div
        onClick={() =>
          change_language_cookie("language_cookie", props.language)
        }
        className="w-full h-full"
      >
        <Image
          src={image_props.src}
          width={250}
          height={250}
          alt={image_props.alt[props.language as SupportedLanguages]}
        />{" "}
        <div className="text-5xl p-5 text-center">
          {props.language === "de" ? "Deutsch" : "English"}
        </div>
      </div>
    </Suspense>
  );
};

export default SWITCH_LANGUAGE_LINK_COMP;

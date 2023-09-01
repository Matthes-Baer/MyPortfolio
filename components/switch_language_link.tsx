"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

import { SupportedLanguages } from "@/utils/types";
import { FLAG_IMAGES } from "@/utils/import_images";
import { IImage_Props } from "@/utils/interfaces";

const SWITCH_LANGUAGE_LINK_COMP: (props: {
  flag_language: string;
}) => JSX.Element = (props: { flag_language: string }): JSX.Element => {
  const current_content_language: string = useParams().lang;
  const flag_text = () => {
    if (props.flag_language === "de") {
      if (current_content_language === "de") {
        return "Deutsch";
      } else {
        return "German";
      }
    } else {
      if (current_content_language === "de") {
        return "Englisch";
      } else {
        return "English";
      }
    }
  };
  const image_props: IImage_Props =
    props.flag_language === "de"
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
    <div
      onClick={() =>
        change_language_cookie("language_cookie", props.flag_language)
      }
      className="w-full h-full"
    >
      <Image
        src={image_props.src}
        width={250}
        height={250}
        alt={image_props.alt[props.flag_language as SupportedLanguages]}
        quality={60}
        priority
      />{" "}
      <div className="text-[25px] sm:text-[40px] p-5 text-center">
        {flag_text()}
      </div>
    </div>
  );
};

export default SWITCH_LANGUAGE_LINK_COMP;

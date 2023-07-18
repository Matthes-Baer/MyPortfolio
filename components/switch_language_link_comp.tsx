"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { SupportedLanguages } from "@/utils/types";

import Loading from "@/app/[lang]/loading";
import { FLAG_IMAGES } from "@/utils/import_images";
import { IImage_Props } from "@/utils/interfaces";

const SWITCH_LANGUAGE_LINK_COMP: (props: {
  children: React.ReactNode;
  cookie_name: string;
  language: string;
}) => JSX.Element = (props: {
  children: React.ReactNode;
  cookie_name: string;
  language: string;
}): JSX.Element => {
  const router: AppRouterInstance = useRouter();
  const image_props: IImage_Props =
    props.language === "de"
      ? FLAG_IMAGES.flag_german
      : FLAG_IMAGES.flag_english;

  const fetch_function: () => Promise<void> = async (): Promise<void> => {
    try {
      const res = await fetch("/api/POST_change_language_cookie", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: props.cookie_name,
          value: props.language,
        }),
      });

      if (!res.ok) {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }

    router.push(`/${props.language}/main`);
  };

  return (
    <Suspense fallback={<Loading />}>
      <button
        onClick={fetch_function}
        className="flex flex-col items-center p-5 rounded-lg hover:bg-dark_gray_tile transition"
      >
        <Image
          src={image_props.src}
          width={250}
          height={250}
          alt={image_props.alt[props.language as SupportedLanguages]}
        />
        <div className="text-5xl p-5">{props.children}</div>
      </button>
    </Suspense>
  );
};

export default SWITCH_LANGUAGE_LINK_COMP;

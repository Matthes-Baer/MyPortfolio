"use client";

import Loading from "@/app/[lang]/loading";
import { useRouter } from "next/navigation";
import { Suspense, useState } from "react";
import Image from "next/image";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import gsap from "gsap";
import IMAGES from "@/utils/import_images";
import { IImage_Props } from "@/utils/interfaces";

export default function SWITCH_LANGUAGE_LINK_COMP(props: {
  children: React.ReactNode;
  cookie_name: string;
  language: string;
}) {
  const router: AppRouterInstance = useRouter();
  const image_props: IImage_Props =
    props.language === "de" ? IMAGES.flag_german : IMAGES.flag_english;

  const fetch_function: () => Promise<void> = async (): Promise<void> => {
    // just demonstrating that it works
    // gsap.to(".move_it", { rotation: 360, x: 100, duration: 1 });

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
      console.log("error");
    }

    router.push(`/${props.language}/main`);
  };

  return (
    <Suspense fallback={<Loading />}>
      <button
        onClick={fetch_function}
        className="move_it flex flex-col items-center p-5 bg-warm_terracotta  rounded-lg hover:bg-burnt_sienna"
      >
        <Image
          src={image_props.src}
          width={250}
          height={250}
          alt={image_props.alt}
        />
        <div className="text-5xl p-5">{props.children}</div>
      </button>
    </Suspense>
  );
}

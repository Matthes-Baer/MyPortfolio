"use client";

//! Bei Klick vielleicht Animation mit GSAP nutzen, um die Loading-Animation darzustellen anstelle des Loading-Components?
//! Vielleicht ist das allerdings auch nicht nötig..

import Loading from "@/app/[lang]/loading";
import { useRouter } from "next/navigation";
import { Suspense, useState } from "react";
import Image from "next/image";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

interface IImage_Props {
  src: string;
  alt: string;
}

export default function SWITCH_LANGUAGE_LINK_COMP(props: {
  children: React.ReactNode;
  cookie_name: string;
  language: string;
}) {
  const [clicked, set_clicked] = useState<boolean>(false);
  const router: AppRouterInstance = useRouter();
  const image_props: IImage_Props =
    props.language === "de"
      ? {
          src: require("public/flag_images/flag_german.png"),
          alt: "A flag representing the German language",
        }
      : {
          src: require("public/flag_images/flag_english.png"),
          alt: "A flag representing the English language",
        };

  const fetch_function: () => Promise<void> = async (): Promise<void> => {
    set_clicked(true);
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
    return set_clicked(false);
  };

  return (
    <Suspense fallback={<Loading />}>
      <button
        onClick={fetch_function}
        className="flex flex-col items-center p-5 bg-warm_terracotta  rounded-lg hover:bg-burnt_sienna"
      >
        <Image
          src={image_props.src}
          width={250}
          height={250}
          alt={image_props.alt}
        />
        <div className="text-5xl p-5">{props.children}</div>
      </button>
      <div className="absolute"> {clicked ? <Loading /> : null}</div>
    </Suspense>
  );
}

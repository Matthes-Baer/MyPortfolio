"use client";

import treeOne from "public/main_images/timeline/treeOne.png";
import treeTwo from "public/main_images/timeline/treeTwo.png";
import treeThree from "public/main_images/timeline/treeThree.png";
import treeFour from "public/main_images/timeline/treeFour.png";
import treeFive from "public/main_images/timeline/treeFive.png";
import tree_six from "public/main_images/timeline/tree_six.png";

import cloudOne from "public/main_images/timeline/cloudOne.png";
import cloudTwo from "public/main_images/timeline/cloudTwo.png";

import Image from "next/image";
import { Suspense } from "react";
import Loading from "@/app/[lang]/loading";
import { useParams } from "next/navigation";

const TIMELINE_PART_BACKGROUND: () => JSX.Element = (): JSX.Element => {
  const language: string = useParams().lang;

  return (
    <Suspense fallback={<Loading />}>
      <div className="min-h-screen">
        <Suspense fallback={<Loading />}>
          <Image
            src={treeOne}
            alt={
              language === "de"
                ? "Erster Baumstamm im Hintergrund"
                : "First tree trunk in background"
            }
            height={550}
            width={550}
            className="absolute top-0 left-1/2 -translate-x-1/2 min-w-[550px]"
          />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Image
            src={treeTwo}
            alt={
              language === "de"
                ? "Zweiter Baumstamm im Hintergrund"
                : "Second tree trunk in background"
            }
            height={550}
            width={550}
            className="absolute top-[685px] left-1/2 -translate-x-1/2 min-w-[550px]"
          />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Image
            src={treeThree}
            alt={
              language === "de"
                ? "Dritter Baumstamm im Hintergrund"
                : "Third tree trunk in background"
            }
            height={550}
            width={550}
            className="absolute top-[1150px] left-1/2 -translate-x-1/2 min-w-[550px]"
          />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Image
            src={treeFour}
            alt={
              language === "de"
                ? "Vierter Baumstamm im Hintergrund"
                : "Fourth tree trunk in background"
            }
            height={750}
            width={750}
            className="absolute top-[1550px] left-1/2 -translate-x-1/2 min-w-[750px]"
          />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Image
            src={tree_six}
            alt={
              language === "de"
                ? "Sechster Baumstamm im Hintergrund"
                : "Sixth tree trunk in background"
            }
            height={750}
            width={750}
            className="absolute top-[2000px] left-[48%] -translate-x-[52%] min-w-[750px]"
          />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Image
            src={cloudOne}
            alt={
              language === "de"
                ? "Erste Wolke im Hintergrund"
                : "First cloud in background"
            }
            height={350}
            width={350}
            className="absolute top-[100px] left-[5%] min-w-[350px] opacity-70"
          />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Image
            src={cloudTwo}
            alt={
              language === "de"
                ? "Zweite Wolke im Hintergrund"
                : "Second cloud in background"
            }
            height={350}
            width={350}
            className="absolute top-[500px] right-[5%] min-w-[350px] opacity-70"
          />
        </Suspense>
      </div>
    </Suspense>
  );
};

export default TIMELINE_PART_BACKGROUND;

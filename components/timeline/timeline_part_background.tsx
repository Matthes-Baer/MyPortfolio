"use client";

import treeOne from "public/main_images/timeline/treeOne.png";
import treeTwo from "public/main_images/timeline/treeTwo.png";
import treeThree from "public/main_images/timeline/treeThree.png";
import treeFour from "public/main_images/timeline/treeFour.png";
import treeFive from "public/main_images/timeline/treeFive.png";
import treeSix from "public/main_images/timeline/treeSix.png";
import treeSeven from "public/main_images/timeline/treeSeven.png";
import treeEight from "public/main_images/timeline/treeEight.png";

import cloudOne from "public/main_images/timeline/cloudOne.png";
import cloudTwo from "public/main_images/timeline/cloudTwo.png";
import cloudThree from "public/main_images/timeline/cloudThree.png";
import cloudFour from "public/main_images/timeline/cloudFour.png";
import cloudFive from "public/main_images/timeline/cloudFive.png";

import Image from "next/image";
import { Suspense } from "react";
import Loading from "@/app/[lang]/loading";
import { useParams } from "next/navigation";

//! Wahrscheinlich für smaller screen sizes noch Bäume hinzufügen (insbesondere wenn die next goals tiles mit Inhalt befüllt werden)
//! Sobald die next goals tiles mit Content befüllt worden sind, sollte nochmal getestet werden, ob die seventh tile nicht doch im forEach function block mit dem scroll trigger ausgestattet werden könnte, anstatt es manuell einzeln im Nachhinein zu machen, um es konsistent zu halten

const TIMELINE_PART_BACKGROUND: () => JSX.Element = (): JSX.Element => {
  const language: string = useParams().lang;

  return (
    <Suspense fallback={<Loading />}>
      <div className="">
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
            className="absolute top-[1550px] left-1/2 -translate-x-1/2 min-w-[750px] -z-[5]"
          />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Image
            src={treeFive}
            alt={
              language === "de"
                ? "Fünfiter Baumstamm im Hintergrund"
                : "Fifth tree trunk in background"
            }
            height={650}
            width={650}
            className="absolute top-[1950px] left-1/2 -translate-x-1/2 min-w-[650px] -z-[4]"
          />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Image
            src={treeSix}
            alt={
              language === "de"
                ? "Sechster Baumstamm im Hintergrund"
                : "Sixth tree trunk in background"
            }
            height={750}
            width={750}
            className="absolute top-[2575px] left-[46%] -translate-x-[54%] min-w-[750px] block sm:hidden -z-[3]"
          />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Image
            src={treeSeven}
            alt={
              language === "de"
                ? "Siebter Baumstamm im Hintergrund"
                : "Seventh tree trunk in background"
            }
            height={550}
            width={550}
            className="absolute top-[3150px] left-1/2 -translate-x-1/2 min-w-[550px] block sm:hidden -z-[2]"
          />
        </Suspense>
        {/* <Suspense fallback={<Loading />}>
          <Image
            src={treeEight}
            alt={
              language === "de"
                ? "Achter Baumstamm im Hintergrund"
                : "Eighth tree trunk in background"
            }
            height={550}
            width={550}
            className="absolute top-[3550px] left-1/2 -translate-x-1/2 min-w-[550px] block -z-[1]"
          />
        </Suspense> */}
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
            className="absolute top-[100px] left-[100px] min-w-[350px] opacity-70"
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
            className="absolute top-[350px] right-0 min-w-[350px] opacity-70"
          />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Image
            src={cloudThree}
            alt={
              language === "de"
                ? "Dritte Wolke im Hintergrund"
                : "Third cloud in background"
            }
            height={350}
            width={350}
            className="absolute top-[700px] right-[15%] min-w-[350px] opacity-70"
          />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Image
            src={cloudFour}
            alt={
              language === "de"
                ? "Vierte Wolke im Hintergrund"
                : "Fourth cloud in background"
            }
            height={350}
            width={350}
            className="absolute top-[1000px] left-[10%] min-w-[350px] opacity-70"
          />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Image
            src={cloudFive}
            alt={
              language === "de"
                ? "Fünfte Wolke im Hintergrund"
                : "Fifth cloud in background"
            }
            height={350}
            width={350}
            className="absolute top-[1400px] left-[17.5%] min-w-[350px] opacity-70"
          />
        </Suspense>
      </div>
    </Suspense>
  );
};

export default TIMELINE_PART_BACKGROUND;

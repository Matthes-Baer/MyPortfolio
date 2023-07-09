"use client";

import treeOne from "public/main_images/timeline/treeOne.png";
import treeTwo from "public/main_images/timeline/treeTwo.png";
import treeThree from "public/main_images/timeline/treeThree.png";
import treeFour from "public/main_images/timeline/treeFour.png";
import treeFive from "public/main_images/timeline/treeFive.png";
import treeSix from "public/main_images/timeline/treeSix.png";
import treeSeven from "public/main_images/timeline/treeSeven.png";
import treeEight from "public/main_images/timeline/treeEight.png";
import treeNine from "public/main_images/timeline/treeNine.png";
import treeTen from "public/main_images/timeline/treeTen.png";
import treeEleven from "public/main_images/timeline/treeEleven.png";
import treeTwelve from "public/main_images/timeline/treeNine.png";

import cloudOne from "public/main_images/timeline/cloudOne.png";
import cloudTwo from "public/main_images/timeline/cloudTwo.png";
import cloudThree from "public/main_images/timeline/cloudThree.png";
import cloudFour from "public/main_images/timeline/cloudFour.png";
import cloudFive from "public/main_images/timeline/cloudFive.png";
import cloudSix from "public/main_images/timeline/cloudSix.png";
import cloudSeven from "public/main_images/timeline/cloudSeven.png";

import Image from "next/image";
import { Dispatch, SetStateAction, Suspense, useEffect, useState } from "react";
import Loading from "@/app/[lang]/loading";
import { useParams } from "next/navigation";

//! Wahrscheinlich für smaller screen sizes noch Bäume hinzufügen (insbesondere wenn die next goals tiles mit Inhalt befüllt werden)
//! Sobald die next goals tiles mit Content befüllt worden sind, sollte nochmal getestet werden, ob die seventh tile nicht doch im forEach function block mit dem scroll trigger ausgestattet werden könnte, anstatt es manuell einzeln im Nachhinein zu machen, um es konsistent zu halten

const TIMELINE_PART_BACKGROUND: () => JSX.Element = (): JSX.Element => {
  const language: string = useParams().lang;
  const [is_mobile, set_is_mobile]: [
    boolean[],
    Dispatch<SetStateAction<boolean[]>>
  ] = useState<boolean[]>([false, false]);

  useEffect(() => {
    const handle_resize: () => void = (): void => {
      set_is_mobile([
        window.innerWidth <= 325,
        window.innerWidth <= 350,
        window.innerWidth <= 385,
        window.innerWidth <= 425,
        window.innerWidth <= 475,
        window.innerWidth <= 550,
        window.innerWidth <= 680,
      ]);
    };

    window.addEventListener("resize", handle_resize);

    handle_resize();

    return () => {
      window.removeEventListener("resize", handle_resize);
    };
  }, []);

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
            className="absolute top-0 left-1/2 -translate-x-1/2 min-w-[550px] -z-[12]"
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
            className="absolute top-[685px] left-1/2 -translate-x-1/2 min-w-[550px] -z-[11]"
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
            className="absolute top-[1150px] left-1/2 -translate-x-1/2 min-w-[550px] -z-[10]"
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
            className="absolute top-[1550px] left-1/2 -translate-x-1/2 min-w-[750px] -z-[9]"
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
            className="absolute top-[1950px] left-1/2 -translate-x-1/2 min-w-[650px] -z-[8]"
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
            className="absolute top-[2575px] left-[46%] -translate-x-[54%] min-w-[750px] -z-[7]"
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
            className="absolute top-[3150px] left-1/2 -translate-x-1/2 min-w-[550px] -z-[6]"
          />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Image
            src={treeEight}
            alt={
              language === "de"
                ? "Achter Baumstamm im Hintergrund"
                : "Eighth tree trunk in background"
            }
            height={550}
            width={550}
            className="absolute top-[3610px] left-1/2 -translate-x-1/2 min-w-[550px] -z-[5]"
            style={{ display: is_mobile[6] ? "block" : "none" }}
          />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Image
            src={treeNine}
            alt={
              language === "de"
                ? "Neunter Baumstamm im Hintergrund"
                : "Ninth tree trunk in background"
            }
            height={650}
            width={650}
            className="absolute top-[4000px] left-[46%] -translate-x-[54%] min-w-[650px] -z-[4]"
            style={{ display: is_mobile[5] ? "block" : "none" }}
          />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Image
            src={treeTen}
            alt={
              language === "de"
                ? "Zehnter Baumstamm im Hintergrund"
                : "Tenth tree trunk in background"
            }
            height={650}
            width={650}
            className="absolute top-[4575px] left-1/2 -translate-x-1/2 min-w-[650px] -z-[3]"
            style={{ display: is_mobile[4] ? "block" : "none" }}
          />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Image
            src={treeEleven}
            alt={
              language === "de"
                ? "Elfter Baumstamm im Hintergrund"
                : "Eleventh tree trunk in background"
            }
            height={650}
            width={650}
            className="absolute top-[5100px] left-[55%] -translate-x-[45%] min-w-[650px] -z-[2]"
            style={{ display: is_mobile[3] ? "block" : "none" }}
          />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Image
            src={treeTwelve}
            alt={
              language === "de"
                ? "Zwölfter Baumstamm im Hintergrund"
                : "Twelfth tree trunk in background"
            }
            height={650}
            width={650}
            className="absolute top-[5575px] left-[48%] -translate-x-[52%] min-w-[650px] -z-[1]"
            style={{ display: is_mobile[2] ? "block" : "none" }}
          />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Image
            src={treeFour}
            alt={
              language === "de"
                ? "Dreizehnter Baumstamm im Hintergrund"
                : "Thirteenth tree trunk in background"
            }
            height={650}
            width={650}
            className="absolute top-[6225px] left-1/2 -translate-x-1/2 min-w-[650px] -z-[1]"
            style={{ display: is_mobile[1] ? "block" : "none" }}
          />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Image
            src={treeTwo}
            alt={
              language === "de"
                ? "Vierzehnter Baumstamm im Hintergrund"
                : "Fourteenth tree trunk in background"
            }
            height={650}
            width={650}
            className="absolute top-[6675px] left-[55%] -translate-x-[45%] min-w-[650px] -z-[1]"
            style={{ display: is_mobile[0] ? "block" : "none" }}
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
            className="absolute top-[1000px] left-[10%] min-w-[350px] opacity-70 -z-[8]"
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
            className="absolute top-[1550px] left-[25%] min-w-[350px] opacity-70 -z-[7]"
            style={{ display: is_mobile[4] ? "block" : "none" }}
          />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Image
            src={cloudSix}
            alt={
              language === "de"
                ? "Sechste Wolke im Hintergrund"
                : "Sixth cloud in background"
            }
            height={350}
            width={350}
            className="absolute top-[1850px] right-[16%] min-w-[350px] opacity-70 -z-[9]"
            style={{ display: is_mobile[3] ? "block" : "none" }}
          />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Image
            src={cloudSeven}
            alt={
              language === "de"
                ? "Siebte Wolke im Hintergrund"
                : "Seventh cloud in background"
            }
            height={350}
            width={350}
            className="absolute top-[2400px] right-[25%] min-w-[350px] opacity-70 -z-[3]"
            style={{ display: is_mobile[2] ? "block" : "none" }}
          />
        </Suspense>
      </div>
    </Suspense>
  );
};

export default TIMELINE_PART_BACKGROUND;

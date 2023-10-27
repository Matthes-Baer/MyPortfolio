import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";

import SWITCH_LANGUAGE_LINK from "@/components/switch_language_link";
import Loading from "../../components/loading";
import { SupportedLanguages } from "@/utils/types";
import type { IIcon, INormalPageProps } from "@/utils/interfaces";
import github_icon from "public/main_images/github_icon.png";
import codingame_icon from "public/main_images/timeline/codingame.png";
import entwicklerheld_icon from "public/main_images/entwicklerheld_icon.png";
import linkedin_icon from "public/main_images/linkedin_icon.png";
import leetcode_icon from "public/main_images/leetcode_icon.png";
import codewars_icon from "public/main_images/codewars_icon.png";
import freecodecamp_icon from "public/main_images/timeline/freecodecamp.png";
import START_BACKGROUND from "@/components/start_background";

const LANGUAGE_PICKER: (props: INormalPageProps) => JSX.Element = (
  props: INormalPageProps
): JSX.Element => {
  //* Data for icons in the upper half of the page
  const images: IIcon[] = [
    {
      icon: freecodecamp_icon,
      link: "https://www.freecodecamp.org/news/author/matthes-bar/",
      alt: { en: "freeCodeCamp icon", de: "freeCodeCamp-Icon" },
    },
    {
      icon: github_icon,
      link: "https://github.com/Matthes-Baer",
      alt: { en: "GitHub icon", de: "GitHub-Icon" },
    },
    {
      icon: codingame_icon,
      link: "https://www.codingame.com/profile/a3dbd9f4eb4cd67d9377ec73dd9363e76178174",
      alt: { en: "CodinGame icon", de: "CodinGame-Icon" },
    },
    {
      icon: entwicklerheld_icon,
      link: "https://platform.entwicklerheld.de/publicprofile/fcaa9abbe1f4908ccfa369e97df66992",
      alt: { en: "EntwicklerHeld icon", de: "EntwicklerHeld-Icon" },
    },
    {
      icon: leetcode_icon,
      link: "https://leetcode.com/DeerFutureMe/",
      alt: { en: "LeetCode icon", de: "LeetCode-Icon" },
    },
    {
      icon: codewars_icon,
      link: "https://www.codewars.com/users/DeerFutureMe",
      alt: { en: "CodeWars icon", de: "CodeWars-Icon" },
    },
    {
      icon: linkedin_icon,
      link: "https://linkedin.com/in/matthes-bär-68199a256",
      alt: { en: "LinkedIn icon", de: "LinkedIn-Icon" },
    },
  ];

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-evenly overflow-hidden">
      <START_BACKGROUND />
      <Suspense fallback={<Loading />}>
        <div className="flex flex-col items-center rounded-full">
          <h1 className="text-[35px] sm:text-[50px] text-center border-b-2 border-b-card_yellow">
            Matthes Bär -{" "}
            {props.params.lang === "de" ? "Webentwickler" : "Web Developer"}
          </h1>
          <p className="text-center p-2 text-2xl w-4/5 lg:w-1/2">
            {props.params.lang === "de"
              ? "Auf dieser Website erfahren Sie mehr über meine technischen Fähigkeiten, abgeschlossenen Projekte und meinen Lernfortschritt im Bereich der Softwareentwicklung."
              : "On this website you can learn more about my technical skills, finished projects and my learning progress in the field of software development."}
          </p>
          <h2 className="block md:hidden text-center p-2 w-4/5">
            {props.params.lang === "de"
              ? "Es wird empfohlen, diese Website auf größeren Bildschirmen (Notebooks und größer) zu verwenden, um ein optimales Seherlebnis zu gewährleisten."
              : "It is recommended to use this website on larger screens (notebooks and larger) to ensure an optimal viewing experience."}
          </h2>
          <h2 className="text-center p-2 text-2xl mt-5 w-4/5">
            {props.params.lang === "de"
              ? "Sie können mich auch auf anderen Plattformen finden:"
              : "You can also find me on other platforms:"}
          </h2>
          <div className="flex flex-wrap items-center justify-center">
            {images.map((ele: IIcon) => {
              return (
                <Link
                  key={ele.link}
                  href={ele.link}
                  target="_blanket"
                  className="p-2 hover:opacity-70 transition"
                >
                  <Image
                    src={ele.icon}
                    alt={
                      ele.alt[props.params.lang as SupportedLanguages] ||
                      ele.alt.en
                    }
                    height={50}
                    width={
                      ele.alt.en === "LeetCode icon"
                        ? 38
                        : ele.alt.en === "freeCodeCamp icon"
                        ? "65"
                        : 50
                    }
                    style={{
                      borderRadius: ele.link.includes("linkedin") ? "0" : "50%",
                      boxShadow:
                        ele.alt.en === "LeetCode icon" ||
                        ele.alt.en === "freeCodeCamp icon"
                          ? ""
                          : "1.5px 1.5px 3.5px 0px rgba(0,0,0,0.5)",
                    }}
                    title={ele.alt.en.split(" ").at(0)}
                    quality={50}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </Suspense>
      <Suspense fallback={<Loading />}>
        <div className="mt-5">
          <h1 className="text-[25px] sm:text-[40px] text-center border-b-2 border-b-card_yellow">
            {props.params.lang === "de"
              ? "Wählen Sie Ihre bevorzugte Sprache:"
              : "Select your preferred language:"}
          </h1>
        </div>
        <div className="relative flex w-full flex-col md:flex-row items-center justify-evenly">
          <Link
            href={"/en/main"}
            className="flex flex-col items-center p-5 rounded-lg hover:bg-dark_gray_tile transition"
          >
            <SWITCH_LANGUAGE_LINK flag_language="en" />
          </Link>

          <Link
            href={"/de/main"}
            className="flex flex-col items-center p-5 rounded-lg hover:bg-dark_gray_tile transition"
          >
            <SWITCH_LANGUAGE_LINK flag_language="de" />
          </Link>
        </div>
      </Suspense>
    </main>
  );
};

export default LANGUAGE_PICKER;

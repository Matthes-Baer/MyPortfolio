import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";

import SWITCH_LANGUAGE_LINK_COMP from "@/components/switch_language_link_comp";
import Loading from "./loading";
import { SupportedLanguages } from "@/utils/types";
import type { IIcon, INormalPageProps } from "@/utils/interfaces";
import github_icon from "public/main_images/github_icon.png";
import codingame_icon from "public/main_images/timeline/codingame.png";
import entwicklerheld_icon from "public/main_images/entwicklerheld_icon.png";
import linkedin_icon from "public/main_images/linkedin_icon.png";

const LANGUAGE_PICKER: (props: INormalPageProps) => JSX.Element = (
  props: INormalPageProps
): JSX.Element => {
  //* Data for icons in the upper half of the page
  const images: IIcon[] = [
    {
      icon: linkedin_icon,
      link: "https://linkedin.com/in/matthes-bär-68199a256",
      alt: { en: "LinkedIn icon", de: "LinkedIn-Icon" },
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
  ];

  return (
    <Suspense fallback={<Loading />}>
      <main className="flex min-h-screen flex-col items-center justify-evenly relative">
        <div className="flex flex-col items-center">
          <h1 className="text-[50px] text-center">
            Matthes Bär -{" "}
            {props.params.lang === "de" ? "Webentwickler" : "Web Developer"}
          </h1>

          <div className="flex flex-wrap items-center justify-center">
            {images.map((ele: IIcon) => {
              return (
                <Link
                  key={ele.link}
                  href={ele.link}
                  target="_blanket"
                  className="p-2"
                >
                  <Image
                    src={ele.icon}
                    alt={
                      ele.alt[props.params.lang as SupportedLanguages] ||
                      ele.alt.en
                    }
                    height={50}
                    width={50}
                    style={{
                      borderRadius: ele.link.includes("linkedin") ? "0" : "50%",
                      boxShadow: "1.5px 1.5px 3.5px 0px rgba(0,0,0,0.5)",
                    }}
                    title={ele.alt.en.split(" ").at(0)}
                  />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="mt-5">
          <h1 className="text-[40px] text-center">
            {props.params.lang === "de"
              ? "Bevorzugte Sprache:"
              : "Preferred language:"}
          </h1>
        </div>
        <div className="flex w-full flex-col md:flex-row items-center justify-evenly">
          <Link
            href={"/en/main"}
            className="flex flex-col items-center p-5 rounded-lg hover:bg-dark_gray_tile transition"
          >
            <SWITCH_LANGUAGE_LINK_COMP language="en" />
          </Link>

          <Link
            href={"/de/main"}
            className="flex flex-col items-center p-5 rounded-lg hover:bg-dark_gray_tile transition"
          >
            <SWITCH_LANGUAGE_LINK_COMP language="de" />
          </Link>
        </div>
      </main>
    </Suspense>
  );
};

export default LANGUAGE_PICKER;

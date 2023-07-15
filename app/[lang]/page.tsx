import { SupportedLanguages } from "@/utils/types";
import type { IIcon, INormalPageProps } from "@/utils/interfaces";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";

import SWITCH_LANGUAGE_LINK_COMP from "@/components/switch_language_link_comp";
import Loading from "./loading";

import github_icon from "public/main_images/github_icon.png";
import codingame_icon from "public/main_images/timeline/codingame.png";
import entwicklerheld_icon from "public/main_images/entwicklerheld_icon.png";
import linkedin_icon from "public/main_images/linkedin_icon.png";

export default function Language_Picker(props: INormalPageProps): JSX.Element {
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
    <main className="flex min-h-screen flex-col items-center justify-evenly">
      <Suspense fallback={<Loading />}>
        <div className="flex flex-col items-center">
          <h1 className="text-[50px] text-center">Matthes Bär - Portfolio</h1>
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
          <SWITCH_LANGUAGE_LINK_COMP
            language="de"
            cookie_name="language_cookie"
          >
            <div>Deutsch</div>
          </SWITCH_LANGUAGE_LINK_COMP>
          <SWITCH_LANGUAGE_LINK_COMP
            language="en"
            cookie_name="language_cookie"
          >
            <div>English</div>
          </SWITCH_LANGUAGE_LINK_COMP>
        </div>

        {/* <ul>
          <li>
            Gibt es noch etwas aufzuräumen? Unnötige Kommentare irgendwo? Überall einmal durchgehen wegen alts für Images / wegen language
            statt lang bei useParams / wegen genereller Struktur / da wo es Sinn macht, titles für Images hinzufügen (beispielsweise bei den opened cards)
          </li>
          <li>Nochmal mit Shadows rumprobieren, ob man die ggf. besser deutlichen machen kann? Bei Home page (siehe timeline)</li>
          <li>
            Bei Parallax lieber mit top property arbeiten statt xPercent und
            yPercent(?) - Parallax-Effekt-Bereich generell nochmal anpassen
          </li>
          <li>
            ggf. nochmal checken: animation duration times aneinander anpassen wenn sie
            zusammengehören
          </li>
          <li>Loading screen überarbeiten (?)</li>
          <li>
            Rechtschreibung checken und Texte verbessern dazugehörige Project Images müssten dann
            auch neu erstellt werden - React Native Projekt - Bei React Native Projekt vielleicht noch mehr Bilder
            hinzufügen (die volle Game instruction bspw.)?
          </li>
          <li>Nochmal durchgehen, was die Middleware macht mit den Cookies</li>
          <li>Richtige Domain für Portfolio-Seite kaufen bei Vercel?</li>
        </ul> */}
      </Suspense>
    </main>
  );
}

import type { IIcon, INormalPageProps } from "@/utils/interfaces";
import { Suspense } from "react";
import Loading from "./loading";
import SWITCH_LANGUAGE_LINK_COMP from "@/components/switch_language_link_comp";

import github_icon from "public/main_images/github_icon.png";
import codingame_icon from "public/main_images/timeline/codingame.png";
import entwicklerheld_icon from "public/main_images/entwicklerheld_icon.png";
import linkedin_icon from "public/main_images/linkedin_icon.png";
import Image from "next/image";
import Link from "next/link";

export default function Language_Picker(props: INormalPageProps): JSX.Element {
  const images: IIcon[] = [
    {
      icon: linkedin_icon,
      link: "https://linkedin.com/in/matthes-bär-68199a256",
      alt: "LinkedIn icon",
    },
    {
      icon: github_icon,
      link: "https://github.com/Matthes-Baer",
      alt: "GitHub icon",
    },
    {
      icon: codingame_icon,
      link: "https://www.codingame.com/profile/a3dbd9f4eb4cd67d9377ec73dd9363e76178174",
      alt: "CodinGame icon",
    },
    {
      icon: entwicklerheld_icon,
      link: "https://platform.entwicklerheld.de/publicprofile/fcaa9abbe1f4908ccfa369e97df66992",
      alt: "EntwicklerHeld icon",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly">
      <Suspense fallback={<Loading />}>
        <div className="flex flex-col items-center">
          <h1 className="text-[50px]">Matthes Bär - Portfolio</h1>
          <div className="flex flex-col sm:flex-row items-center">
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
                    alt={ele.alt}
                    height={50}
                    width={50}
                    style={{
                      borderRadius: ele.link.includes("linkedin") ? "0" : "50%",
                    }}
                  />
                </Link>
              );
            })}
          </div>
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
            Aufräumen (file structure, weitere components für mehr Überblick
            (main page (age & experience part, project tiles part, fetch für
            project tiles, ...)), TypeScript vervollständigen, Tailwind CSS
            überall anwenden)
          </li>
          <li>
            Bei Timeline: Eventuell muss noch der richtige scroll trigger für
            die siebte tile gefunden werden (die letzte reguläre vor den
            -nächsten Zielen-, ist abhängig vom Rest, der darunter kommt und wie
            sich das bei kleineren Bildschirmgrößen macht)
          </li>
          <li>
            Timeline background mit den Bäumen richtig anpassen - speziell für
            kleinere Bildschirmgrößen - komplett anpassen, nachdem jeder
            Tile-Inhalt vervollständigt und formattiert wurde
          </li>
          <li>
            Ist bei der Timeline genug Platz in der Höhe vorhanden, dass ALLE
            Tiles mittels Scroll-Animation aufgedeckt werden? Stand 04.07. war
            die Höhe noch zu niedrig und es fehlte beispielsweise auch noch
            mindestens ein Baumstamm-Bild-Element.
          </li>
          <li>
            Überall nochmal überlegen, ob PNG oder JPG die bessere Image-Wahl
            ist, da mit JPG Qualitätsverluste einhergehen (besser für kleinere
            Bilder als für größere)
          </li>
          <li>
            Überall einmal durchgehen wegen alts für Images / wegen language
            statt lang bei useParams / wegen genereller Struktur - quasi
            Aufräumdienst
          </li>
          <li>
            Alle Alt-Texte bei den Bildern sowohl für Englisch als auch Deutsch
            auslegen - Beim Implementieren dann jeweils richtig anwählen -
            SupportedLanguages Type verwenden
          </li>
          <li>
            Alle Cards nochmal durchgehen und ggf. da, wo noch Platz wäre, Text
            hinzufügen? Bspw. bei Vue.js
          </li>
          <li>
            Bezüglich responsive design: Bei all_opened_cards und der textbox
            etc. könnte man vielleicht mit einer noch kleineren/angepassteren
            Mobile-Größe arbeiten (state als Objekt mit screen sizes) (?)
          </li>
          <li>
            Bei Parallax lieber mit top property arbeiten statt xPercent und
            yPercent(?)
          </li>
          <li>
            Für Project Tiles: Infos von MongoDB in der Page fetchen und dann
            runterrreichen anstatt es im client component zu fetchen (?) -
            müsste man testen, ob das funktioniert
          </li>
          <li>
            Für cards_comp opened_cards bilder file erstellen / und
            dementsprechend per map Images importieren / card_content file mit
            aktueller card bearbeiten
          </li>
          <li>
            Styling überlegen für Age und Experience Comp - gsap.fromTo
            implementieren, derzeit buggt es mit gsap.from
          </li>
          <li>
            Styling für unteren Part überlegen - kein Bild als Hintergrund, weil
            man das nicht so gut in der Höhe anpassen kann, wenn mehrere Project
            Tiles dazukommen.
          </li>
          <li>
            animation duration times aneinander anpassen wenn sie
            zusammengehören
          </li>
          <li>
            Mobile/Tablet View (ab ca. 1000px und weniger) bearbeiten -
            wahrscheinlich muss viel gekürzt werden: Karten weg und lediglich
            mit Klick die opened cards Liste aufrufen; siehe Figma-Planung für
            window screen size checker logic
          </li>
          <li>
            Derzeit findet Layout shifting statt wenn man von einer Route auf
            die Startseite wechselst - eventuell muss man mit den Startwerten
            der Parallax-Bilder etwas anpassen / alternativ: manuellen
            Ladescreen integrieren mit timeout loader
          </li>
          <li>
            Bei Vue.js-Projekt Rechtschreibung checken und Texte verbessern per
            ChatGPT? / Current Nutrition values - nutrition sollte
            kleingeschrieben werden, das dazugehörige Project Image müsste dann
            auch neu erstellt werden --- ähnliche Prozedur für Svelte und React
            Native Projekt? Bei React Native Projekt vielleicht noch mehr Bilder
            hinzufügen (die volle Game instruction bspw.)?
          </li>
        </ul> */}
      </Suspense>
    </main>
  );
}

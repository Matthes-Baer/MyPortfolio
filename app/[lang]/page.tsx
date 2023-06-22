import type { INormalPageProps } from "@/utils/interfaces";
import { Suspense } from "react";
import Loading from "./loading";
import SWITCH_LANGUAGE_LINK_COMP from "@/components/layout/switch_language_link_comp";

export default function Language_Picker(props: INormalPageProps): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly">
      <Suspense fallback={<Loading />}>
        <SWITCH_LANGUAGE_LINK_COMP language="de" cookie_name="language_cookie">
          <div>Deutsch</div>
        </SWITCH_LANGUAGE_LINK_COMP>
        <SWITCH_LANGUAGE_LINK_COMP language="en" cookie_name="language_cookie">
          <div>English</div>
        </SWITCH_LANGUAGE_LINK_COMP>
        <ul>
          <li>
            Aufräumen (file structure, weitere components für mehr Überblick
            (main page (age & experience part, project tiles part, fetch für
            project tiles, ...)), TypeScript vervollständigen, Tailwind CSS
            überall anwenden)
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
        </ul>
      </Suspense>
    </main>
  );
}

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
          <li>Aufräumen</li>
          <li>
            Weitere Bilder einfügen bei main page - ggf. bei Parallax einbinden
            (Blätter, Vögel, Wolken, Pflanzen, Bäume, Person die geht (per
            Parallax))
          </li>
          <li>Kartenrücken herausfinden</li>
          <li>Kartenvorderseite herausfinden</li>
          <li>
            Styling überlegen für Age und Experience Comp (per absolute mit ins
            Bild nehmen oder drunter lassen?)
          </li>
        </ul>
      </Suspense>
    </main>
  );
}

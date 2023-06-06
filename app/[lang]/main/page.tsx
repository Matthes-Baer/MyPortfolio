import type { INormalPageProps } from "@/utils/interfaces";

import { Suspense } from "react";
import Loading from "../loading";
import RESET_LANGUAGE_BUTTON_COMP from "@/components/layout/reset_language_button_comp";

export default function Main(props: INormalPageProps) {
  return (
    <Suspense fallback={"Currently Loading..."}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Suspense fallback={<Loading />}>
          <RESET_LANGUAGE_BUTTON_COMP />
        </Suspense>

        <div>Main</div>
        <ul>
          <li>Notizen:</li>
          <li>
            Vor Build im types file ggf. @ts-ignore hinzufügen, wenn etwas nicht
            funktioniert; siehe layout
          </li>
        </ul>

        <ul>
          <li>To-do:</li>
          <li>ggf. files Umbenennen, Aufräumen</li>
          <li>
            Figma-Planung für Hauptseite muss überarbeitet werden, da Three.js
            wegfällt
          </li>
          <li>Suspense-, fallback- und loading-Kram einbauen</li>
          <li>Weitere Extra Files anschauen (loading.tsx, ...)</li>
          <li>
            Tailwind Config anfänglich bearbeiten mit Farbpalette - muss
            vermutlich öfters überarbeitet werden anfangs
          </li>
          <li>Auswahlbuttons bei Sprache ändern (German, English) stylen</li>
        </ul>
      </main>
    </Suspense>
  );
}

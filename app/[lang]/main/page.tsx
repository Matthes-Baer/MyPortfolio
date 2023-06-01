import Reset_Language_Button_Comp from "@/components/layout/reset_language_button_comp";
import type { INormalPageProps } from "@/utils/interfaces";
import { Suspense } from "react";

export default function Main(props: INormalPageProps) {
  return (
    <Suspense fallback={"Currently Loading..."}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Reset_Language_Button_Comp cookie_name="language_cookie" />
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
          <li>ggf. Umbenennen, Aufräumen</li>
          <li>Suspense, fallback und loading Kram</li>
          <li>Weitere Extra Files anschauen (loading.tsx, ...)</li>
          <li>
            Tailwind Config anfänglich bearbeiten mit Farbpalette - muss
            vermutlich öfters überarbeitet werden anfangs
          </li>
        </ul>
      </main>
    </Suspense>
  );
}

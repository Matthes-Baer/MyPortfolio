import type { INormalPageProps } from "@/utils/interfaces";

import { Suspense } from "react";
import Loading from "../loading";
import AGE_AND_EXPERIENCE_COMP from "@/components/main/age_and_experience_comp";
import { cookies } from "next/headers";

export default function Main(props: INormalPageProps) {
  const cookie_store = cookies();
  const language = cookie_store.get("language_cookie")?.value || "";

  return (
    <Suspense fallback={<Loading />}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <AGE_AND_EXPERIENCE_COMP language={language} />
        {/* <ul>
          <li>Notizen:</li>
          <li>
            Vor Build im types file ggf. @ts-ignore hinzufügen, wenn etwas nicht
            funktioniert; siehe layout
          </li>
        </ul>

        <ul>
          <li>To-do:</li>

          <li>Suspense-, fallback- und loading-Kram einbauen</li>
          <li>Weitere Extra Files anschauen (loading.tsx, ...)</li>
        </ul> */}
      </main>
    </Suspense>
  );
}

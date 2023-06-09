import type { INormalPageProps } from "@/utils/interfaces";

import { Suspense } from "react";
import Loading from "../loading";
import AGE_AND_EXPERIENCE_COMP from "@/components/main/age_and_experience_comp";
import { cookies } from "next/headers";
import fantasy_branch from "public/main_images/fantasy_branch.png";
import fantasy_table from "public/main_images/fantasy_table.png";

import Image from "next/image";

export default function Main(props: INormalPageProps) {
  const cookie_store = cookies();
  const language = cookie_store.get("language_cookie")?.value || "";

  return (
    <Suspense fallback={<Loading />}>
      <main className="flex min-h-screen flex-col">
        <AGE_AND_EXPERIENCE_COMP language={language} />
        <Image
          src={fantasy_branch}
          alt="test"
          width={500}
          height={100}
          style={{
            transform: "rotate(135deg)",
            position: "absolute",
            top: 0,
            left: -125,
          }}
        />
        {/* 
        brick structure für zweiten Part mit project tiles
        <div className="absolute w-full" style={{ left: 0, top: 400 }}>
          <div className="flex">
            <div className="bg-[#252525] h-40 w-2/12 border-t-[1px] border-white"></div>
            <div className="bg-[#252525] h-40 w-2/12 border-l-[1px] border-t-[1px] border-white"></div>
            <div className="bg-[#252525] h-40 w-2/12 border-l-[1px] border-t-[1px] border-white"></div>
            <div className="bg-[#252525] h-40 w-2/12 border-l-[1px] border-t-[1px] border-white"></div>
            <div className="bg-[#252525] h-40 w-2/12 border-l-[1px] border-t-[1px] border-white"></div>
            <div className="bg-[#252525] h-40 w-2/12 border-l-[1px] border-t-[1px] border-white"></div>
          </div>
          <div className="flex">
            <div className="bg-[#252525] h-40 w-1/12 border-t-[1px] border-white"></div>
            <div className="bg-[#252525] h-40 w-2/12 border-l-[1px] border-t-[1px] border-white"></div>
            <div className="bg-[#252525] h-40 w-2/12 border-l-[1px] border-t-[1px] border-white"></div>
            <div className="bg-[#252525] h-40 w-2/12 border-l-[1px] border-t-[1px] border-white"></div>
            <div className="bg-[#252525] h-40 w-2/12 border-l-[1px] border-t-[1px] border-white"></div>
            <div className="bg-[#252525] h-40 w-2/12 border-l-[1px] border-t-[1px] border-white"></div>
            <div className="bg-[#252525] h-40 w-1/12 border-l-[1px] border-t-[1px] border-white"></div>
          </div>
          <div className="flex">
            <div className="bg-[#252525] h-40 w-2/12 border-t-[1px] border-white"></div>
            <div className="bg-[#252525] h-40 w-2/12 border-l-[1px] border-t-[1px] border-white"></div>
            <div className="bg-[#252525] h-40 w-2/12 border-l-[1px] border-t-[1px] border-white"></div>
            <div className="bg-[#252525] h-40 w-2/12 border-l-[1px] border-t-[1px] border-white"></div>
            <div className="bg-[#252525] h-40 w-2/12 border-l-[1px] border-t-[1px] border-white"></div>
            <div className="bg-[#252525] h-40 w-2/12 border-l-[1px] border-t-[1px] border-white"></div>
          </div>
          <div className="flex">
            <div className="bg-[#252525] h-40 w-1/12 border-t-[1px] border-white"></div>
            <div className="bg-[#252525] h-40 w-2/12 border-l-[1px] border-t-[1px] border-white"></div>
            <div className="bg-[#252525] h-40 w-2/12 border-l-[1px] border-t-[1px] border-white"></div>
            <div className="bg-[#252525] h-40 w-2/12 border-l-[1px] border-t-[1px] border-white"></div>
            <div className="bg-[#252525] h-40 w-2/12 border-l-[1px] border-t-[1px] border-white"></div>
            <div className="bg-[#252525] h-40 w-2/12 border-l-[1px] border-t-[1px] border-white"></div>
            <div className="bg-[#252525] h-40 w-1/12 border-l-[1px] border-t-[1px] border-white"></div>
          </div>
          <div className="flex">
            <div className="bg-[#252525] h-40 w-2/12 border-t-[1px] border-white"></div>
            <div className="bg-[#252525] h-40 w-2/12 border-l-[1px] border-t-[1px] border-white"></div>
            <div className="bg-[#252525] h-40 w-2/12 border-l-[1px] border-t-[1px] border-white"></div>
            <div className="bg-[#252525] h-40 w-2/12 border-l-[1px] border-t-[1px] border-white"></div>
            <div className="bg-[#252525] h-40 w-2/12 border-l-[1px] border-t-[1px] border-white"></div>
            <div className="bg-[#252525] h-40 w-2/12 border-l-[1px] border-t-[1px] border-white"></div>
          </div>
        </div> */}

        <Image
          src={fantasy_table}
          alt="test"
          width={1000}
          height={1000}
          style={{ zIndex: 500 }}
        />
        {/* <ul>
          <li>Notizen:</li>
          <li>
            Vor Build im types file ggf. @ts-ignore hinzufügen, wenn etwas nicht
            funktioniert; siehe layout
          </li>
        </ul>

        <ul>
          <li>To-do:</li>
          <li>Bei Main Page weitermachen mit Styling von age und studystart Zeiten </li>
          <li>Suspense-, fallback- und loading-Kram einbauen</li>
          <li>Weitere Extra Files anschauen (loading.tsx, ...)</li>
        </ul> */}
      </main>
    </Suspense>
  );
}

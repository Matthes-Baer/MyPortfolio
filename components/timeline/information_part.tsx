"use client";

import Loading from "@/app/[lang]/loading";
import { useParams } from "next/navigation";
import { Suspense } from "react";

const INFORMATION_PART: () => JSX.Element = (): JSX.Element => {
  const language: string = useParams().lang;

  //* This is used for the button to scroll down to the first project's tile
  const scroll_down: () => void = (): void => {
    const scrollPosition: number =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    if (scrollPosition <= 400) {
      window.scrollBy({
        top: 400 - scrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <section className="flex justify-center w-full pb-[35px] text-2xl border-b-2 border-b-card_yellow bg-dark_gray_stone z-10">
        <div className="flex flex-col items-center text-center">
          <div className="p-3">
            {language === "de"
              ? "In dieser Zeitleiste werden einige meiner Meilensteine in der Softwareentwicklung hervorgehoben."
              : "This timeline highlights some of my software development milestones."}
          </div>
          <div className="p-3 pb-[35px]">
            {language === "de"
              ? "Scrolle nach unten, um mit der Ansicht zu beginnen."
              : "Scroll down to start viewing."}
          </div>
          <button
            className="p-3 border-2 border-[white] rounded-[50%] hover:bg-[rgba(255,255,255,0.25)] cursor-pointer transition focus:border-card_yellow"
            onClick={scroll_down}
            style={{ boxShadow: "0px 1px 3.5px 0px rgba(0,0,0,0.5)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
      </section>
    </Suspense>
  );
};

export default INFORMATION_PART;

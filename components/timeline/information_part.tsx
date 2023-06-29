"use client";

import { useParams } from "next/navigation";

const INFORMATION: () => JSX.Element = (): JSX.Element => {
  const language: string = useParams().lang;

  return (
    <div className="flex justify-center w-full pb-[35px] text-2xl border-b-2 border-b-card_yellow">
      {language === "de" ? (
        <div className="flex flex-col items-center">
          <div className="p-3">
            In dieser Zeitleiste werden einige meiner Meilensteine in der
            Softwareentwicklung hervorgehoben.
          </div>
          <div className="p-3">
            Scrolle nach unten, um mit der Ansicht zu beginnen.
          </div>
          <div className="p-3 border-2 border-[white] rounded-[50%]">
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
          </div>
        </div>
      ) : (
        "This timeline highlights some of my software development milestones."
      )}
    </div>
  );
};

export default INFORMATION;

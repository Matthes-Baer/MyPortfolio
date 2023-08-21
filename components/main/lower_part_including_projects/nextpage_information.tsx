"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const NEXTPAGE_INFORMATION: () => JSX.Element = (): JSX.Element => {
  const language: string = useParams().lang;

  return (
    <Link
      className="flex p-3 justify-center align-items w-full lg:w-2/3 border-2 border-card_yellow mb-[150px] ml-auto mr-auto rounded hover:text-card_yellow hover:border-[white] transition-all"
      style={{
        fontSize: "calc(22px + 1.25vw)",
        boxShadow: "0px 3px 7.5px 0px rgba(0,0,0,0.5)",
      }}
      href={`${language}/main/timeline`}
    >
      <div className="flex justify-center items-center w-full text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 -960 960 960"
          width="48"
          fill="white"
        >
          <path d="m492-240 19-63q64-11 106.5-60.5T660-480q0-75-52.5-127.5T480-660q-68 0-117 42.5T303-511l-63 20q5-97 74-163t166-66q100 0 170 70t70 170q0 97-66 166t-162 74ZM139-60l-79-79 171-171-151-50 400-120L360-80l-50-151L139-60Z" />
        </svg>
        {language === "de"
          ? "Entdecken Sie meinen Lernpfad"
          : "Discover my Learning Journey"}
      </div>
    </Link>
  );
};

export default NEXTPAGE_INFORMATION;

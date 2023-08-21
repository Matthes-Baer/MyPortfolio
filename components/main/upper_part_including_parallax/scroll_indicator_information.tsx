"use client";

import { useParams } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const SCROLL_INDICATOR_INFORMATION: () => JSX.Element = (): JSX.Element => {
  const language: string = useParams().lang;

  const information: string =
    language === "de"
      ? "Scrollen Sie nach unten, um mehr über mich und meine Projekte zu erfahren."
      : "Scroll down to learn more about me and my projects.";

  const [scroll_down_indicator, set_scroll_down_indicator]: [
    boolean,
    SetStateAction<Dispatch<boolean>>
  ] = useState<boolean>(true);

  const handleScroll = () => {
    if (window.scrollY > 225) {
      set_scroll_down_indicator(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="absolute top-[7.5%] lg:top-auto lg:bottom-[1%] left-1/2 -translate-x-1/2 w-full w-full sm:w-2/3 lg:w-1/3 bg-dark_gray_stone rounded text-center p-3 text-sm sm:text-xl transition"
      style={{
        opacity: scroll_down_indicator ? 1 : 0,
        boxShadow: "0px 3px 7.5px 0px rgba(0,0,0,0.5)",
      }}
    >
      {information}
    </div>
  );
};

export default SCROLL_INDICATOR_INFORMATION;

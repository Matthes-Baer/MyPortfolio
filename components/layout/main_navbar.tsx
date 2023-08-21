"use client";

import { useState, useEffect, SetStateAction, Dispatch } from "react";
import RESET_LANGUAGE_BUTTON from "@/components/layout/reset_language_button";
import SWITCH_ROUTE_LINK from "@/components/layout/switch_route_link";

const MAIN_NAVBAR: (props: { language: string }) => JSX.Element = (props: {
  language: string;
}): JSX.Element => {
  const [navbarHeight, setNavbarHeight]: [
    number,
    SetStateAction<Dispatch<number>>
  ] = useState(65);

  const targetNavbarHeight = 50;
  const scrollThreshold = 639;

  const handleScroll = () => {
    if (window.scrollY > 150 && window.innerWidth > scrollThreshold) {
      setNavbarHeight(targetNavbarHeight);
    } else {
      setNavbarHeight(65);
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
      className="sticky top-0 flex flex-col sm:flex-row justify-between items-center p-2 text-xl z-[9000] bg-[rgba(25,25,25,0.80)] border-b-2 border-b-[rgba(238,168,66,0.50)] transition-all"
      style={{ height: `${navbarHeight}px` }}
    >
      <div className="hover:opacity-70 transition">
        <RESET_LANGUAGE_BUTTON />{" "}
      </div>
      <div>
        <div className="flex justify-end mr-2">
          <SWITCH_ROUTE_LINK url={`/${props.language}/main`} slug="">
            <div>{props.language === "de" ? "Startseite" : "Main"}</div>
          </SWITCH_ROUTE_LINK>

          <SWITCH_ROUTE_LINK
            url={`/${props.language}/main/timeline`}
            slug="timeline"
          >
            <div>
              {props.language === "de" ? "Lernpfad" : "Learning Journey"}
            </div>
          </SWITCH_ROUTE_LINK>
        </div>
      </div>
    </div>
  );
};

export default MAIN_NAVBAR;

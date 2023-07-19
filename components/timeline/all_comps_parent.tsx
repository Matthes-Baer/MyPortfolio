"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";

import Loading from "@/app/[lang]/loading";
import TIMELINE_PART from "./timeline_part";
import INFORMATION_PART from "./information_part";

const ALL_TIMELINE_PARENTS_COMP: () => JSX.Element = (): JSX.Element => {
  const [is_loading, set_loading]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState<boolean>(false);

  useEffect((): (() => void) => {
    const images: HTMLCollectionOf<HTMLImageElement> =
      document.getElementsByTagName("img");
    const imagesCount: number = images.length;
    let loadedCount: number = 0;

    //* This is supposed to load in the images first before allowing to show the actual page content
    const handleImageLoad: () => void = (): void => {
      loadedCount++;

      if (loadedCount === imagesCount) {
        set_loading(false);
      }
    };

    //* Attach load event listener to all images
    Array.from(images).forEach((img) => {
      img.addEventListener("load", handleImageLoad);
    });

    //* Clean up event listeners on component unmount
    return (): void => {
      Array.from(images).forEach((img) => {
        img.removeEventListener("load", handleImageLoad);
      });
    };
  }, []);

  if (is_loading) return <Loading />;

  return (
    <main>
      <INFORMATION_PART />
      <TIMELINE_PART />
    </main>
  );
};

export default ALL_TIMELINE_PARENTS_COMP;

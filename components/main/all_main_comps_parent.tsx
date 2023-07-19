"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Loading from "@/app/[lang]/loading";

import AGE_AND_EXPERIENCE_COMP from "./middle_part_including_age_and_experience/age_and_experience_comp";
import PARALLAX_IMAGES_COMP from "./upper_part_including_parallax/parallax_images_comp";
import PROJECT_TILES_PARENT from "./lower_part_including_projects/project_tiles_parent";
import { IProject } from "@/utils/interfaces";

const ALL_MAIN_PARENTS_COMP: (props: {
  project_data: IProject[] | undefined;
}) => JSX.Element = (props: {
  project_data: IProject[] | undefined;
}): JSX.Element => {
  const [is_loading, set_is_loading]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState<boolean>(false);

  useEffect(() => {
    const images: HTMLCollectionOf<HTMLImageElement> =
      document.getElementsByTagName("img");
    const imagesCount: number = images.length;
    let loadedCount: number = 0;

    //* This is supposed to load in the images first before allowing to show the actual page content
    const handleImageLoad: () => void = (): void => {
      loadedCount++;

      if (loadedCount === imagesCount) {
        set_is_loading(false);
      }
    };

    //* Attach load event listener to all images
    Array.from(images).forEach((img) => {
      img.addEventListener("load", handleImageLoad);
    });

    //* Clean up event listeners on component unmount
    return () => {
      Array.from(images).forEach((img) => {
        img.removeEventListener("load", handleImageLoad);
      });
    };
  }, []);

  if (is_loading) return <Loading />;

  return (
    <main className="flex min-h-screen w-full flex-col absolute -top-[150px]">
      <PARALLAX_IMAGES_COMP />
      <AGE_AND_EXPERIENCE_COMP />
      <PROJECT_TILES_PARENT project_data={props.project_data} />
    </main>
  );
};

export default ALL_MAIN_PARENTS_COMP;

"use client";

import AGE_AND_EXPERIENCE_COMP from "./middle_part_including_age_and_experience/age_and_experience_comp";
import { useEffect, useState } from "react";
import Loading from "@/app/[lang]/loading";
import PARALLAX_IMAGES_COMP from "./upper_part_including_parallax/parallax_images_comp";
import PROJECT_TILES_PARENT from "./project_tiles_parent";

const ALL_MAIN_PARENTS_COMP = (props: { language: string }) => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const images = document.getElementsByTagName("img");
    const imagesCount = images.length;
    let loadedCount = 0;

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === imagesCount) {
        setLoading(false);
      }
    };

    // Attach load event listener to all images
    Array.from(images).forEach((img) => {
      img.addEventListener("load", handleImageLoad);
    });

    // Clean up event listeners on component unmount
    return () => {
      Array.from(images).forEach((img) => {
        img.removeEventListener("load", handleImageLoad);
      });
    };
  }, []);

  //! Use different loading screen - probably a fullscreen loading screen for this
  if (isLoading) return <Loading />;

  return (
    <main
      className="flex min-h-screen w-full flex-col absolute"
      style={{ top: -150 }}
    >
      <PARALLAX_IMAGES_COMP />
      <AGE_AND_EXPERIENCE_COMP language={props.language} />
      <PROJECT_TILES_PARENT />
    </main>
  );
};

export default ALL_MAIN_PARENTS_COMP;
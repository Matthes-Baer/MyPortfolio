"use client";

import { useEffect, useState } from "react";
import Loading from "@/app/[lang]/loading";
import INFORMATION from "./information_part";
import TIMELINE_PART from "./timeline_part";

const ALL_TIMELINE_PARENTS_COMP = () => {
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
    <main className="">
      <section>
        <INFORMATION />
      </section>
      <section>
        <TIMELINE_PART />
      </section>
    </main>
  );
};

export default ALL_TIMELINE_PARENTS_COMP;

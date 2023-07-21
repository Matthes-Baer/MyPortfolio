"use client";

import { MutableRefObject, Suspense, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { gsap } from "gsap";

import AGE_AND_EXPERIENCE_COMP from "./middle_part_including_age_and_experience/age_and_experience_comp";
import PARALLAX_IMAGES_COMP from "./upper_part_including_parallax/parallax_images_comp";
import PROJECT_TILES_PARENT from "./lower_part_including_projects/project_tiles_parent";
import { IProject } from "@/utils/interfaces";
import { RootState } from "@/redux/store";
import Loading from "@/app/[lang]/loading";

const ALL_MAIN_PARENTS_COMP: (props: {
  project_data: IProject[] | undefined;
}) => JSX.Element = (props: {
  project_data: IProject[] | undefined;
}): JSX.Element => {
  const container_ref: MutableRefObject<null> = useRef(null);

  useEffect(() => {
    gsap.to(container_ref.current, {
      opacity: 1,
      duration: 2,
      ease: "linear",
    });
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <main
        className="flex min-h-screen w-full flex-col absolute -top-[150px] opacity-0"
        ref={container_ref}
      >
        <PARALLAX_IMAGES_COMP />
        <AGE_AND_EXPERIENCE_COMP />
        <PROJECT_TILES_PARENT project_data={props.project_data} />
      </main>
    </Suspense>
  );
};

export default ALL_MAIN_PARENTS_COMP;

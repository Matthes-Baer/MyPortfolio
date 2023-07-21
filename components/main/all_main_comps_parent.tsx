"use client";

import { MutableRefObject, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { gsap } from "gsap";

import AGE_AND_EXPERIENCE_COMP from "./middle_part_including_age_and_experience/age_and_experience_comp";
import PARALLAX_IMAGES_COMP from "./upper_part_including_parallax/parallax_images_comp";
import PROJECT_TILES_PARENT from "./lower_part_including_projects/project_tiles_parent";
import { IProject } from "@/utils/interfaces";
import Loading from "@/app/[lang]/loading";
import { RootState } from "@/redux/store";

const ALL_MAIN_PARENTS_COMP: (props: {
  project_data: IProject[] | undefined;
}) => JSX.Element = (props: {
  project_data: IProject[] | undefined;
}): JSX.Element => {
  const container_ref: MutableRefObject<null> = useRef(null);
  const loading_state = useSelector(
    (state: RootState) => state.main_load_slice.value
  );

  useEffect(() => {
    gsap.to(container_ref.current, { opacity: 1, duration: 1, ease: "linear" });
  }, [loading_state]);

  return (
    <main
      className="flex min-h-screen w-full flex-col absolute -top-[150px] opacity-0"
      ref={container_ref}
    >
      <PARALLAX_IMAGES_COMP />
      <AGE_AND_EXPERIENCE_COMP />
      <PROJECT_TILES_PARENT project_data={props.project_data} />
    </main>
  );
};

export default ALL_MAIN_PARENTS_COMP;

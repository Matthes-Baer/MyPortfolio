"use client";

import { MutableRefObject, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gsap } from "gsap";

import AGE_AND_EXPERIENCE_COMP from "./middle_part_including_age_and_experience/age_and_experience_comp";
import PARALLAX_IMAGES_COMP from "./upper_part_including_parallax/parallax_images_comp";
import PROJECT_TILES_PARENT from "./lower_part_including_projects/project_tiles_parent";
import { IProject } from "@/utils/interfaces";
import Loading from "@/app/[lang]/loading";
import { AppDispatch, RootState } from "@/redux/store";
import { change_main_loading_state } from "@/redux/features/main_load_slice";

const ALL_MAIN_PARENTS_COMP: (props: {
  project_data: IProject[] | undefined;
}) => JSX.Element = (props: {
  project_data: IProject[] | undefined;
}): JSX.Element => {
  const container_ref: MutableRefObject<null> = useRef(null);
  const dispatch: AppDispatch = useDispatch();
  const loading_state = useSelector(
    (state: RootState) => state.main_load_slice.value
  );

  useEffect(() => {
    let timeout: NodeJS.Timeout = setTimeout(() => {
      dispatch(change_main_loading_state(false));
    }, 3500);

    gsap.to(container_ref.current, { opacity: 1, duration: 1, ease: "linear" });

    return () => {
      clearTimeout(timeout);
    };
  }, [loading_state, dispatch]);

  if (loading_state) return <Loading />;

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

import { Suspense } from "react";

import AGE_AND_EXPERIENCE from "./middle_part_including_age_and_experience/age_and_experience";
import PARALLAX_IMAGES from "./upper_part_including_parallax/parallax_images";
import PROJECT_TILES_PARENT from "./lower_part_including_projects/project_tiles_parent";
import { IProject } from "@/utils/interfaces";
import Loading from "@/app/[lang]/loading";

const ALL_MAIN_PARENTS_COMP: (props: {
  project_data: IProject[] | undefined;
}) => JSX.Element = (props: {
  project_data: IProject[] | undefined;
}): JSX.Element => {
  return (
    <Suspense fallback={<Loading />}>
      <main className="flex min-h-screen w-full flex-col absolute -top-[150px] ">
        <PARALLAX_IMAGES />
        <AGE_AND_EXPERIENCE />
        <PROJECT_TILES_PARENT project_data={props.project_data} />
      </main>
    </Suspense>
  );
};

export default ALL_MAIN_PARENTS_COMP;

import { Suspense } from "react";

import { get_projects } from "@/utils/server_only_functions";
import type { INormalPageProps, IProject } from "@/utils/interfaces";
import Loading from "../loading";
import ALL_MAIN_PARENTS_COMP from "@/components/main/all_main_comps_parent";
import { cookies } from "next/headers";

const Main: (props: INormalPageProps) => Promise<JSX.Element> = async (
  props: INormalPageProps
) => {
  //* Fetching data for projects in the bottom part of the home page
  const project_data: IProject[] | undefined = await get_projects();

  return (
    <Suspense fallback={<Loading />}>
      <ALL_MAIN_PARENTS_COMP project_data={project_data} />
    </Suspense>
  );
};

export default Main;

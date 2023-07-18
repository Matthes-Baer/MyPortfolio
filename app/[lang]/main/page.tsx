import { Suspense } from "react";

import { get_projects } from "@/utils/server_only_functions";
import type { INormalPageProps, IProject } from "@/utils/interfaces";
import Loading from "../loading";
import ALL_MAIN_PARENTS_COMP from "@/components/main/all_main_comps_parent";

const Main: (props: INormalPageProps) => Promise<JSX.Element> = async (
  props: INormalPageProps
) => {
  const project_data: IProject[] | undefined = await get_projects();

  return (
    <Suspense fallback={<Loading />}>
      <ALL_MAIN_PARENTS_COMP project_data={project_data} />
    </Suspense>
  );
};

export default Main;

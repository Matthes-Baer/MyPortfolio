import type { INormalPageProps, IProject } from "@/utils/interfaces";
import { Suspense } from "react";
import { get_projects } from "@/utils/server_only_functions";

import Loading from "../loading";
import ALL_MAIN_PARENTS_COMP from "@/components/main/all_main_comps_parent";

export default async function Main(props: INormalPageProps) {
  const project_data = await get_projects();

  return (
    <Suspense fallback={<Loading />}>
      <ALL_MAIN_PARENTS_COMP project_data={project_data} />
    </Suspense>
  );
}

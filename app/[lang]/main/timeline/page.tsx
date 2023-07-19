import { Suspense } from "react";

import ALL_TIMELINE_PARENTS_COMP from "@/components/timeline/all_comps_parent";
import { INormalPageProps } from "@/utils/interfaces";
import Loading from "../../loading";

const Timeline: (props: INormalPageProps) => JSX.Element = (
  props: INormalPageProps
): JSX.Element => {
  return (
    <Suspense fallback={<Loading />}>
      <ALL_TIMELINE_PARENTS_COMP />
    </Suspense>
  );
};

export default Timeline;

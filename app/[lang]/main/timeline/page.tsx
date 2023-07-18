import ALL_TIMELINE_PARENTS_COMP from "@/components/timeline/all_comps_parent";
import { INormalPageProps } from "@/utils/interfaces";
import { Suspense } from "react";
import Loading from "../../loading";

export default function Timeline(props: INormalPageProps): JSX.Element {
  return (
    <Suspense fallback={<Loading />}>
      <ALL_TIMELINE_PARENTS_COMP />
    </Suspense>
  );
}

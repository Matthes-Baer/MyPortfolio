import ALL_TIMELINE_PARENTS_COMP from "@/components/timeline/all_comps_parent";
import { INormalPageProps } from "@/utils/interfaces";

export default function Timeline(props: INormalPageProps): JSX.Element {
  return (
    <div>
      <ALL_TIMELINE_PARENTS_COMP />
    </div>
  );
}

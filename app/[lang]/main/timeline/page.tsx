import { INormalPageProps } from "@/utils/interfaces";
import INFORMATION_PART from "@/components/timeline/information_part";
import TIMELINE_PART from "@/components/timeline/timeline_part";

const Timeline: (props: INormalPageProps) => JSX.Element = (
  props: INormalPageProps
): JSX.Element => {
  return (
    <main>
      <INFORMATION_PART />
      <TIMELINE_PART />
    </main>
  );
};

export default Timeline;

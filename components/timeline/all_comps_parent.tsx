"use client";

import TIMELINE_PART from "./timeline_part";
import INFORMATION_PART from "./information_part";

const ALL_TIMELINE_PARENTS_COMP: () => JSX.Element = (): JSX.Element => {
  return (
    <main>
      <INFORMATION_PART />
      <TIMELINE_PART />
    </main>
  );
};

export default ALL_TIMELINE_PARENTS_COMP;

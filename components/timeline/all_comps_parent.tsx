"use client";

import TIMELINE_PART from "./timeline_part";
import INFORMATION_PART from "./information_part";
import { Suspense } from "react";
import Loading from "@/app/[lang]/loading";

const ALL_TIMELINE_PARENTS_COMP: () => JSX.Element = (): JSX.Element => {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <INFORMATION_PART />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <TIMELINE_PART />
      </Suspense>
    </main>
  );
};

export default ALL_TIMELINE_PARENTS_COMP;

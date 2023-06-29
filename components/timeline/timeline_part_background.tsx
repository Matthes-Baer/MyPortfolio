"use client";

import fantasy_tree_one from "public/main_images/timeline/fantasy_tree_one.png";
import fantasy_tree_two from "public/main_images/timeline/fantasy_tree_two.png";
import fantasy_tree_three from "public/main_images/timeline/fantasy_tree_three.png";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "@/app/[lang]/loading";

const TIMELINE_PART_BACKGROUND: () => JSX.Element = (): JSX.Element => {
  return (
    <Suspense fallback={<Loading />}>
      <div>
        <Suspense fallback={<Loading />}>
          <Image
            src={fantasy_tree_one}
            alt="fantasy tree one"
            height={550}
            width={550}
            className="absolute top-0 left-1/2 -translate-x-1/2 min-w-[550px]"
          />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Image
            src={fantasy_tree_two}
            alt="fantasy tree one"
            height={550}
            width={550}
            className="absolute top-[685px] left-1/2 -translate-x-1/2 min-w-[550px]"
          />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Image
            src={fantasy_tree_three}
            alt="fantasy tree one"
            height={550}
            width={550}
            className="absolute top-[1150px] left-1/2 -translate-x-1/2 min-w-[550px]"
          />
        </Suspense>
      </div>
    </Suspense>
  );
};

export default TIMELINE_PART_BACKGROUND;

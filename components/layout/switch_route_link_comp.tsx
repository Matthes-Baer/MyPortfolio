"use client";

import Loading from "@/app/[lang]/loading";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { Suspense } from "react";

export default function SWITCH_ROUTE_LINK_COMP(props: {
  children: React.ReactNode;
  url: string;
  slug: string;
}) {
  const segment = useSelectedLayoutSegment() || "";
  let isActive = props.slug === segment;

  return (
    <Suspense fallback={<Loading />}>
      <div className="z-10">
        <Link
          href={props.url}
          style={{ fontWeight: isActive ? "bold" : "normal" }}
        >
          {props.children}
        </Link>
      </div>
    </Suspense>
  );
}

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
  console.log(segment);

  return (
    <Suspense fallback={<Loading />}>
      <div style={{ marginRight: !props.slug ? "15px" : "0px" }}>
        <Link
          href={props.url}
          style={{
            fontWeight: isActive ? "bold" : "normal",
          }}
        >
          <div
            className="z-10 p-4 rounded shadow"
            style={{
              backgroundColor:
                segment === "timeline" ? "transparent" : "rgba(25,25,25,0.85)",
            }}
          >
            {props.children}
          </div>
        </Link>
      </div>
    </Suspense>
  );
}

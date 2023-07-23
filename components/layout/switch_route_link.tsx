"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { Suspense } from "react";

import Loading from "@/app/[lang]/loading";

const SWITCH_ROUTE_LINK_COMP: (props: {
  children: React.ReactNode;
  url: string;
  slug: string;
}) => JSX.Element = (props: {
  children: React.ReactNode;
  url: string;
  slug: string;
}): JSX.Element => {
  //* Check which route is the active one currently
  const segment: string = useSelectedLayoutSegment() || "";
  const isActive: boolean = props.slug === segment;

  return (
    <Suspense fallback={<Loading />}>
      <div
        style={{
          marginRight: !props.slug ? "15px" : "0px",
          // boxShadow:
          //   segment === "timeline"
          //     ? "none"
          //     : "0px 3px 7.5px 0px rgba(0,0,0,0.25)",
        }}
        className="hover:text-card_yellow transition"
      >
        <Link
          href={props.url}
          style={{
            fontWeight: isActive ? "bold" : "normal",
          }}
        >
          <div
            className="z-10 p-2 rounded shadow"
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
};

export default SWITCH_ROUTE_LINK_COMP;

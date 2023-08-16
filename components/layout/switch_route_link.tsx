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
          // borderBottom: isActive ? "2px solid #eea842" : "none",
          marginRight: props.slug === "" ? "15px" : "0px",
        }}
        className={isActive ? "" : "hover:opacity-70 transition"}
      >
        <Link
          href={props.url}
          style={{
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "#eea842" : "white",
          }}
        >
          <div className="z-10">{props.children}</div>
        </Link>
      </div>
    </Suspense>
  );
};

export default SWITCH_ROUTE_LINK_COMP;

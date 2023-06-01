"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function Switch_route_link_comp(props: {
  children: React.ReactNode;
  url: string;
  slug: string;
}) {
  const segment = useSelectedLayoutSegment() || "";
  let isActive = props.slug === segment;
  console.log(props.slug, segment);

  return (
    <div>
      <Link
        href={props.url}
        style={{ fontWeight: isActive ? "bold" : "normal" }}
      >
        {props.children}
      </Link>
    </div>
  );
}

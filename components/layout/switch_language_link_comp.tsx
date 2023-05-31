"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Switch_language_link_comp(props: {
  children: React.ReactNode;
  languages: Array<string>;
}) {
  const pathname = usePathname();
  const [source_language, target_language] = props.languages;
  const regex_pattern = new RegExp(`(?<=/${source_language}/).*`, "i");
  let pathname_segment = pathname.match(regex_pattern)?.[0] || "";

  return (
    <div>
      <Link href={`/${target_language}/${pathname_segment}`}>
        {props.children}
      </Link>
    </div>
  );
}

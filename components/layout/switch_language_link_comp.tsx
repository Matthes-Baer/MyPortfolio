"use client";

import {
  usePathname,
  useRouter,
  useSelectedLayoutSegment,
} from "next/navigation";
import Link from "next/link";

export default function Switch_language_link_comp(props: {
  children: React.ReactNode;
  language: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const segment = useSelectedLayoutSegment();

  // const regex_pattern = new RegExp(`(?<=/${source_language}/).*`, "i");
  // let pathname_segment = pathname.match(regex_pattern)?.[0] || "";

  const fetch_function = async () => {
    console.log(props.language);
    try {
      const res = await fetch("/api/POST_change_language_cookie", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ value: props.language }),
      });

      if (!res.ok) {
        throw new Error();
      }
    } catch (error) {
      console.log("error");
    }

    router.push(`/${props.language}/main`);
  };

  return (
    <div>
      <button onClick={fetch_function}>{props.children}</button>
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";

export default function Switch_language_link_comp(props: {
  children: React.ReactNode;
  cookie_name: string;
  language: string;
}) {
  const router = useRouter();

  const fetch_function = async () => {
    try {
      const res = await fetch("/api/POST_change_language_cookie", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: props.cookie_name,
          value: props.language,
        }),
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

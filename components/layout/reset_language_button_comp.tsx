"use client";

import Link from "next/link";

export default function Reset_Language_Button_Comp(props: {
  children?: React.ReactNode;
  cookie_name: string;
  cookie_value?: string;
}) {
  const reset_language_cookie: () => Promise<void> = async () => {
    try {
      const response = await fetch("/api/POST_reset_cookie", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: props.cookie_name, value: "en" }),
      });

      if (!response.ok) {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div onClick={reset_language_cookie}>
      <Link href={"/en"}>Sprache ändern</Link>
    </div>
  );
}

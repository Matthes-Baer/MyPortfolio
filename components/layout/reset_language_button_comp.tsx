"use client";

import Loading from "@/app/[lang]/loading";
import Link from "next/link";
import { Suspense } from "react";

export default function RESET_LANGUAGE_BUTTON_COMP() {
  const reset_language_cookie = async () => {
    try {
      const response = await fetch("/api/POST_reset_cookie", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "language_cookie", value: "en" }),
      });
      if (!response.ok) {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <div onClick={reset_language_cookie}>
        <Link href={"/en"}>Sprache ändern</Link>
      </div>
    </Suspense>
  );
}

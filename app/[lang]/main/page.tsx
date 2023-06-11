import type { INormalPageProps } from "@/utils/interfaces";
import { Suspense } from "react";
import Loading from "../loading";
import { cookies } from "next/headers";
import ALL_MAIN_PARENTS_COMP from "@/components/main/all_main_comps_parent";

export default function Main(props: INormalPageProps) {
  const cookie_store = cookies();
  const language = cookie_store.get("language_cookie")?.value || "";

  return (
    <Suspense fallback={<Loading />}>
      <ALL_MAIN_PARENTS_COMP language={language} />
    </Suspense>
  );
}

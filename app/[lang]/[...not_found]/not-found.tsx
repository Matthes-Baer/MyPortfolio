import ERROR_BACKGROUND_TILES from "@/components/error_background_tiles";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { cookies } from "next/headers";
import Link from "next/link";

export default function NotFound() {
  let cookies_store: ReadonlyRequestCookies = cookies();
  let language_cookie: string =
    cookies_store.get("language_cookie")?.value ?? "en";

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center text-center relative">
      <ERROR_BACKGROUND_TILES />
      <h1 className="text-5xl">
        {language_cookie === "de"
          ? "Seite nicht gefunden - 404"
          : "Page not found – 404"}
      </h1>
      <Link
        href="/"
        className="text-2xl mt-5 p-5 hover:text-card_yellow transition-colors border border-card_yellow rounded"
        style={{ boxShadow: "0px 3px 7.5px 0px rgba(0,0,0,0.5)" }}
      >
        {language_cookie === "de"
          ? "Zurück zur Sprachauswahl"
          : "Back to the language selector"}
      </Link>
    </div>
  );
}

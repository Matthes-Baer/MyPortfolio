import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { cookies } from "next/headers";
import Link from "next/link";

export default function NotFound() {
  let cookies_store: ReadonlyRequestCookies = cookies();
  let language_cookie: string =
    cookies_store.get("language_cookie")?.value ?? "en";

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center">
      <h1 className="text-5xl border-b border-b-card_yellow">
        {language_cookie === "de"
          ? "Seite nicht gefunden - 404"
          : "Page not found – 404"}
      </h1>
      <Link
        href="/"
        className="text-2xl mt-5 p-5 hover:text-card_yellow transition-colors"
      >
        {language_cookie === "de"
          ? "Zurück zur Sprachauswahl"
          : "Back to the language picker"}
      </Link>
    </div>
  );
}

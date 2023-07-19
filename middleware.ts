import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let locales: string[] = ["de", "en"];

function getLocale() {
  let headers = { "accept-language": "en" };
  let languages: string[] = new Negotiator({ headers }).languages();
  let defaultLocale: string = "en";

  return match(languages, locales, defaultLocale);
}

export async function middleware(request: NextRequest) {
  const pathname: string = request.nextUrl.pathname;
  const locale: string = getLocale();
  const language_cookie_bool: boolean = request.cookies.has("language_cookie");
  const language_cookie_value: string =
    request.cookies.get("language_cookie")?.value || "";
  const current_language_path: string = pathname.substring(1, 3);
  const response: NextResponse<unknown> = NextResponse.next();

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  //* Check if no language_parameter is available in the URL and redirect accordingly
  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/${language_cookie_value || locale}/${pathname}`, request.url)
    );
  }

  //* Handling ways which otherwise would break the application (for example when the user manually adjusts the language parameter in the URL)
  if (
    !language_cookie_bool ||
    (language_cookie_bool && language_cookie_value != current_language_path)
  ) {
    const oneYearInSeconds: number = 365 * 24 * 60 * 60;
    const expirationDate: Date = new Date(Date.now() + oneYearInSeconds * 1000);

    response.cookies.set("language_cookie", current_language_path, {
      expires: expirationDate,
    });

    return response;
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};

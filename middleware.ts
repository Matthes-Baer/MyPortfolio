import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let locales = ["de", "en"];

function getLocale() {
  let headers = { "accept-language": "en" };
  let languages = new Negotiator({ headers }).languages();
  let defaultLocale = "en";

  return match(languages, locales, defaultLocale);
}

export async function middleware(request: NextRequest) {
  const pathname: string = request.nextUrl.pathname;
  const locale: string = getLocale();
  const language_cookie_bool: boolean = request.cookies.has("language_cookie");
  const language_cookie_value: string =
    request.cookies.get("language_cookie")?.value || "";
  const current_language_path = pathname.substring(1, 3);
  const response = NextResponse.next();

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  //? Check if no language_parameter is available in the URL.
  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/${language_cookie_value || locale}/${pathname}`, request.url)
    );
  }

  //? Handling ways which otherwise would break the application.
  if (
    !language_cookie_bool ||
    (language_cookie_bool && language_cookie_value != current_language_path)
  ) {
    const oneYearInSeconds = 365 * 24 * 60 * 60;
    const expirationDate = new Date(Date.now() + oneYearInSeconds * 1000);

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

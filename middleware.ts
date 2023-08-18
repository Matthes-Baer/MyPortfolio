import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const supportedLocales: string[] = ["de", "en"];
const defaultLocale: string = "en";

//* Check for language preference in browser settings
function getLocale(acceptLanguageHeader: string | undefined) {
  const languages: string[] = new Negotiator({
    headers: { "accept-language": acceptLanguageHeader },
  }).languages();
  const matchedLocale = match(languages, supportedLocales, defaultLocale);
  return matchedLocale;
}

export async function middleware(request: NextRequest) {
  const pathname: string = request.nextUrl.pathname;
  const acceptLanguageHeader = request.headers.get("accept-language");
  const locale: string = getLocale(acceptLanguageHeader || "");

  //* For revisiting (takes precedence over locale browser settings preference), and for html lang attribute in overall layout
  const language_cookie_bool: boolean = request.cookies.has("language_cookie");
  const language_cookie_value: string =
    request.cookies.get("language_cookie")?.value || "";

  const current_language_path: string = pathname.substring(1, 3);
  const response: NextResponse<unknown> = NextResponse.next();

  console.log(locale);

  //* Without this check it would automatically be redirected to "de/robots.txt", for example
  if (
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  //* This basically just serves as a condition to execute the NextResponse.redirect() only once and not on every request
  const pathnameIsMissingLocale = supportedLocales.every(
    (locale) => !pathname.startsWith(`/${locale}`) && pathname !== `/${locale}`
  );

  //* Redirecting
  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/${language_cookie_value || locale}/${pathname}`, request.url)
    );
  }

  //* Updating the language_cookie
  if (
    !language_cookie_bool ||
    (language_cookie_bool && language_cookie_value != current_language_path)
  ) {
    const oneDayInSeconds: number = 24 * 60 * 60;
    const expirationDate: Date = new Date(Date.now() + oneDayInSeconds);

    response.cookies.set("language_cookie", locale, {
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

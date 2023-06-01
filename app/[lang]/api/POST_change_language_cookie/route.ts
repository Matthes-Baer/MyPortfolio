import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const res = await request.json();

  const oneYearInSeconds = 365 * 24 * 60 * 60;
  const expirationDate = new Date(Date.now() + oneYearInSeconds * 1000);

  return cookies().set("language_cookie", res.value, {
    expires: expirationDate,
  });
}

import { ResponseCookies } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

import { IResponse } from "@/utils/interfaces";
import { get_expiration_date } from "@/utils/util_functions";

export async function POST(request: NextRequest): Promise<ResponseCookies> {
  const res: IResponse = await request.json();
  const expiration_date: Date = get_expiration_date();

  return cookies().set(res.name, res.value, {
    expires: expiration_date,
  });
}

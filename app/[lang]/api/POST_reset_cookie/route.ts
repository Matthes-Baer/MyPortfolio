import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const res = await request.json();
  console.log("yes");

  cookies().set(res.name, res.value);

  return new Response();
}

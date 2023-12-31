import { NextResponse } from "next/server";
import { Db } from "mongodb";

import { connect_to_database } from "@/utils/server_only_functions";
import { IRequestBody } from "@/utils/interfaces";

export async function POST(request: Request, response: NextResponse) {
  let client;

  try {
    client = await connect_to_database();
  } catch (error) {
    console.log(error);
    return;
  }

  let db: Db = client.db("main_db");

  try {
    //? Not request.body to get the body but request.json()
    const body: IRequestBody = await request.json();
    let res = await db
      .collection("cards")
      .findOne({ card_index: body.card_idx });

    client.close();
    return NextResponse.json(res);
  } catch (error) {
    client.close();
    console.log(error);
    return;
  }
}

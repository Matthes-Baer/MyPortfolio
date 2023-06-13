import { connect_to_database } from "@/utils/mongoDB_connect";
import { NextResponse } from "next/server";

interface IBody {
  card_idx: number;
}

export async function POST(request: Request) {
  let client;

  try {
    client = await connect_to_database();
  } catch (error) {
    console.log(error);
    return;
  }

  let db = client.db("cards");

  try {
    //? Not request.body to get the body but request.json()
    const body: IBody = await request.json();
    let res = await db
      .collection("cards_content")
      .findOne({ card_index: body.card_idx });

    client.close();

    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
  }
}

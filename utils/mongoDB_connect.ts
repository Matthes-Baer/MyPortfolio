"server-only";

import { MongoClient } from "mongodb";

export async function connect_to_database(): Promise<MongoClient> {
  let client: MongoClient = await MongoClient.connect(
    `${process.env.MONGODBCONNECT}`
  );
  return client;
}

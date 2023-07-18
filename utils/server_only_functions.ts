import "server-only";

import { IProject } from "./interfaces";
import { Db } from "mongodb";
import { MongoClient } from "mongodb";

export async function connect_to_database(): Promise<MongoClient> {
  let client: MongoClient = await MongoClient.connect(
    `${process.env.MONGODBCONNECT}`
  );
  return client;
}

export async function get_projects(): Promise<IProject[] | undefined> {
  let client;

  try {
    client = await connect_to_database();
  } catch (error) {
    console.log(error);
    return;
  }

  let db: Db = client.db("main_db");

  try {
    const res_array: IProject[] = [];
    (
      await db.collection("projects").find({}).sort({ filter_id: 1 }).toArray()
    ).forEach((element) => {
      const { _id, ...project_data } = element;
      res_array.push(project_data as IProject);
    });
    client.close();
    return res_array;
  } catch (error) {
    client.close();
    console.log(error);
    return;
  }
}

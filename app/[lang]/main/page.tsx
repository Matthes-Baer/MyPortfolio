import type { INormalPageProps, IProject } from "@/utils/interfaces";
import { Suspense } from "react";
import Loading from "../loading";
import ALL_MAIN_PARENTS_COMP from "@/components/main/all_main_comps_parent";

import { connect_to_database } from "@/utils/mongoDB_connect";
import { Db } from "mongodb";

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

export default async function Main(props: INormalPageProps) {
  const project_data = await get_projects();

  return (
    <Suspense fallback={<Loading />}>
      <ALL_MAIN_PARENTS_COMP project_data={project_data} />
    </Suspense>
  );
}

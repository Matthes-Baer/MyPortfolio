import { get_projects } from "@/utils/server_only_functions";
import type { INormalPageProps, IProject } from "@/utils/interfaces";
import PARALLAX_IMAGES from "@/components/main/upper_part_including_parallax/parallax_images";
import PROJECT_TILES_PARENT from "@/components/main/lower_part_including_projects/project_tiles_parent";
import AGE_AND_EXPERIENCE from "@/components/main/middle_part_including_age_and_experience/age_and_experience";
import SCROLL_INDICATOR_INFORMATION from "@/components/main/scroll_indicator_information";

const Main: (props: INormalPageProps) => Promise<JSX.Element> = async (
  props: INormalPageProps
) => {
  //* Fetching data for projects in the bottom part of the home page
  const project_data: IProject[] | undefined = await get_projects();

  return (
    <main className="-mt-[150px]">
      <PARALLAX_IMAGES />
      <AGE_AND_EXPERIENCE />
      <PROJECT_TILES_PARENT project_data={project_data} />
      <SCROLL_INDICATOR_INFORMATION />
    </main>
  );
};

export default Main;

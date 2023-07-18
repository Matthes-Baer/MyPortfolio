import { Suspense } from "react";

import TEMPLATE_INNER_PART from "./template_inner_part";
import Loading from "@/app/[lang]/loading";

const SIXTH_UDEMY: (props: { language: string }) => JSX.Element = (props: {
  language: string;
}): JSX.Element => {
  const title: string =
    props.language === "de" ? "Udemy-Kurse" : "Udemy courses";
  const content: string =
    props.language === "de"
      ? "Insbesondere ab Juli 2022 habe ich intensiv verschiedene Udemy-Kurse genutzt, um mich in spezifische Bereiche einzuarbeiten. Ich habe Udemy-Kurse zu Themen wie Vue.js, Svelte, Jest, Next.js, Node.js mit Express.js, MongoDB und anderen Technologien belegt, um meine Kenntnisse zu vertiefen. \n\nIm Laufe der Zeit habe ich regelmäßig von solchen Kursangeboten Gebrauch gemacht, um mich strukturiert in bestimmten Fachgebieten weiterzubilden."
      : "Especially from July 2022 onwards, I have intensively used various Udemy courses to learn about specific areas. I have taken Udemy courses on topics such as Vue.js, Svelte, Jest, Next.js, Node.js with Express.js, MongoDB and other technologies to deepen my knowledge. \n\nOver the course of time, I have regularly made use of such course offerings in order to further my education in specific subject areas in a structured manner.";
  const date: string =
    props.language === "de" ? "Seit Juli 2022" : "Since July 2022";

  return (
    <Suspense fallback={<Loading />}>
      <div>
        <TEMPLATE_INNER_PART title={title} content={content} date={date} />
      </div>
    </Suspense>
  );
};

export default SIXTH_UDEMY;

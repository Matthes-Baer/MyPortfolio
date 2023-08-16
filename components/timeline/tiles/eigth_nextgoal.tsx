import { Suspense } from "react";

import TEMPLATE_INNER_PART from "./template_inner_part";
import Loading from "@/app/[lang]/loading";

const EIGHT_NEXTGOAL: (props: { language: string }) => JSX.Element = (props: {
  language: string;
}): JSX.Element => {
  const title = props.language === "de" ? "Nächstes Ziel" : "Next Objective";
  const content =
    props.language === "de"
      ? "Mein nächstes übergeordnetes Ziel ist es, mich zu einem professionellen Front-End-Entwickler weiterzuentwickeln. \n\nMittelfristig habe ich die Ambition, eine Position als professioneller Fullstack-Entwickler zu übernehmen, um einen ganzheitlichen Mehrwert für alle Unternehmensprojekte zu schaffen, an denen ich beteiligt bin. Dieses breitere technische Verständnis und die Fähigkeit, in verschiedenen Teilen des Entwicklungsprozesses mitzuwirken, ermöglichen es mir, umfassendere Lösungen zu entwickeln und flexibler auf die Anforderungen und Bedürfnisse der Projekte einzugehen. \n\nMit meiner Leidenschaft für Webentwicklung und meinem kontinuierlichen Lernwillen bin ich bestrebt, mich stetig zu entwickeln und mein Ziele als professioneller Front-End- und Fullstack-Entwickler zu erreichen."
      : "My next overall goal is to develop into a professional front-end developer. \n\nIn the medium term, I have the ambition to become a professional full-stack developer in order to add holistic value to all projects of the company I am involved in. This broader technical understanding and ability to participate in different parts of the development process will allow me to develop more comprehensive solutions and be more flexible to the requirements and needs of the projects. \n\nWith my passion for web development and my continuous desire to learn, I strive to constantly develop and reach my goal as a professional front-end and full-stack developer.";
  const date = "";

  return (
    <Suspense fallback={<Loading />}>
      <div className="relative">
        <TEMPLATE_INNER_PART title={title} content={content} date={date} />
      </div>
    </Suspense>
  );
};

export default EIGHT_NEXTGOAL;

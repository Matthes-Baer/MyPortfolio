import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";

import TEMPLATE_INNER_PART from "./template_inner_part";
import freecodecamp from "public/main_images/timeline/freecodecamp.png";
import pen_and_paper from "public/main_images/timeline/pen_and_paper.jpg";
import Loading from "@/app/[lang]/loading";

const FIFTH_TECHNICALWRITER: (props: {
  language: string;
}) => JSX.Element = (props: { language: string }): JSX.Element => {
  const title: string =
    props.language === "de"
      ? "freeCodeCamp-Engagement"
      : "freeCodeCamp commitment";
  const content: string =
    props.language === "de"
      ? "Im Juli 2022 habe ich die Möglichkeit ergriffen, mich als freiwilliger technischer Autor bei freeCodeCamp zu bewerben - und wurde erfolgreich ausgewählt. \n\nIm Rahmen dieser Zusammenarbeit widme ich einen Teil meiner Freizeit dem Planen, Konzipieren und Verfassen von technischen Artikeln zu Themen, die meiner Meinung nach mehr Aufmerksamkeit verdienen. Mein Schwerpunkt liegt dabei besonders auf ausführlichen Artikeln, die einen erklärenden und anleitenden Charakter aufweisen, um bestimmte Konzepte näher zu erläutern. \n\nZusätzlich arbeite ich als Übersetzer und Korrekturleser für den deutschen freeCodeCamp-Bereich. Hierbei bin ich neben anderen Übersetzern dafür zuständig, die umfangreichen Kursinhalte vom Englischen ins Deutsche zu übersetzen und Korrektur zu lesen."
      : "In July 2022, I took the opportunity to apply as a volunteer technical writer for freeCodeCamp - and was successfully selected. \n\nAs part of this collaboration, I dedicate some of my free time to planning, designing and writing technical articles on topics that I think deserve more attention. My focus is particularly on in-depth articles that have an explanatory and instructional character to explain certain concepts in more detail. \n\nIn addition, I work as a translator and proofreader for the German freeCodeCamp section. Alongside other translators, I am responsible for translating and proofreading the extensive course content from English into German.";
  const date: string =
    props.language === "de" ? "Seit Juli 2022" : "Since July 2022";
  const image_alt: string =
    props.language === "de" ? "Stift mit Paper" : "Pen and paper";

  return (
    <Suspense fallback={<Loading />}>
      <div className="relative pb-[35px]">
        <Image
          src={pen_and_paper}
          alt={image_alt}
          height={150}
          width={150}
          className="absolute -bottom-[125px] -left-[50px] hidden lg:block rounded-[50%]"
          style={{ boxShadow: "2px 2px 5px 0px black" }}
        />
        <div className="absolute right-0 bottom-0">
          <Link
            href={"https://www.freecodecamp.org/news/author/matthes-bar/"}
            target="_blank"
          >
            <Image
              src={freecodecamp}
              alt={
                props.language === "de"
                  ? `CodinGame-Link für mein freeCodeCamp-Autoren-Profil`
                  : `CodinGame link for my freeCodeCamp author profile`
              }
              height={60}
              width={60}
              className="rounded-[50%]"
              title="freeCodeCamp"
            />
          </Link>
        </div>
        <TEMPLATE_INNER_PART title={title} content={content} date={date} />
      </div>
    </Suspense>
  );
};

export default FIFTH_TECHNICALWRITER;

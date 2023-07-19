import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";

import TEMPLATE_INNER_PART from "./template_inner_part";
import codingame from "public/main_images/timeline/codingame.png";
import bird from "public/main_images/timeline/birdsThree.png";
import Loading from "@/app/[lang]/loading";

const FOURTH_CODINGAME: (props: { language: string }) => JSX.Element = (props: {
  language: string;
}): JSX.Element => {
  const title: string =
    props.language === "de" ? "CodinGame-Erfolge" : "CodinGame Achievements";
  const content: string =
    props.language === "de"
      ? "Ein Meilenstein auf der Plattform CodinGame war das Erreichen des „Legend Levels“ für die Kategorie „Coding Speed“, wofür es unter anderem erforderlich ist, im „Clash of Code“-Modus zumindest kurzzeitig unter die Top 1000 zu gelangen (meine Höchstleistung: ca. Top 600). Das entspricht etwa den besten 0,2 % aller Teilnehmer dieses Modus. \n\nBei „Clash of Code“ werden kurze Coding-Aufgaben gestellt, die innerhalb von 15 Minuten gelöst werden müssen. In einer Runde nehmen maximal acht Spieler teil. Manchmal dreht es sich darum, das Problem mit möglichst kompaktem Code zu lösen, während in den meisten Fällen die Geschwindigkeit der Lösungsabgabe die Runden-Platzierung bestimmt. Bei schlechten Runden-Ergebnissen werden Ranglistenpunkte abgezogen. Auch eine unregelmäßige Aktivität führt dazu, dass Ranglistenplätze verloren gehen. Letzteres kann dazu geführt haben, dass ich zum jetzigen Zeitpunkt der vorher angesprochenen Platzierung nicht mehr nahekomme. \n\nAlles in allem bietet mir CodinGame eine unterhaltsame Möglichkeit, meine Coding-Geschwindigkeit, mein Problemlösungsverständnis und meine Programmiersprachenkenntnisse (vor allem JavaScript und C#) weiterzuentwickeln."
      : 'One milestone on the CodinGame platform was reaching the "Legend Level" for the category "Coding Speed", which requires, among other things, to be among the top 1000 in the "Clash of Code" mode, at least for a short time (my maximum performance: approx. top 600). This corresponds to about the best 0.2 % of all participants in this mode. \n\nIn "Clash of Code", short coding tasks are set that have to be solved within 15 minutes. A maximum of eight players take part in a round. Sometimes it is about solving the problem with the most compact code possible, while in most cases the speed of the solution submission determines the round placement. Ranking points are deducted for poor round results. Irregular activity will also result in ranking points being lost. The latter may have resulted in me not coming close to the previously mentioned ranking at this point in time. \n\nAll in all, CodinGame offers me a fun way to develop my coding speed, problem-solving skills and programming language skills (especially JavaScript and C#).';
  const date: string = props.language === "de" ? "Juni 2022" : "June 2022";
  const image_alt: string =
    props.language === "de" ? "Ein Vogel im Flug" : "A bird flying";

  return (
    <Suspense fallback={<Loading />}>
      <div className="relative pb-[35px]">
        <Image
          src={bird}
          alt={image_alt}
          height={175}
          width={175}
          className="absolute -top-[50px] -left-[140px] hidden lg:block opacity-90"
          style={{ transform: "rotateY(180deg)" }}
        />
        <div className="absolute right-0 bottom-0">
          <Link
            href={
              "https://www.codingame.com/profile/a3dbd9f4eb4cd67d9377ec73dd9363e76178174"
            }
            target="_blank"
          >
            <Image
              src={codingame}
              alt={
                props.language === "de"
                  ? `CodinGame-Link für mein Profil`
                  : `CodinGame link for my profile`
              }
              height={40}
              width={40}
              className="rounded-[50%]"
              title="CodinGame"
              style={{ boxShadow: "1px 1px 2.5px 0px rgba(0,0,0,0.5)" }}
            />
          </Link>
        </div>
        <TEMPLATE_INNER_PART title={title} content={content} date={date} />
      </div>
    </Suspense>
  );
};

export default FOURTH_CODINGAME;

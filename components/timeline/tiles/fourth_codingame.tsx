import Link from "next/link";
import TEMPLATE_INNER_PART from "./template_inner_part";
import Image from "next/image";
import codingame from "public/main_images/timeline/codingame.png";

const FOURTH_CODINGAME: (props: { language: string }) => JSX.Element = (props: {
  language: string;
}): JSX.Element => {
  const title =
    props.language === "de" ? "CodinGame-Erfolge" : "CodinGame Achievements";
  const content =
    props.language === "de"
      ? "Dank meiner Begeisterung fürs Coden konnte ich auf der Plattform CodinGame im Laufe der Zeit mehrere Erfolge verbuchen. Ein Meilenstein war das Erreichen des „Legend Levels“ für die Kategorie „Coding Speed“, wofür es unter anderem erforderlich ist, im „Clash of Code“-Modus zumindest kurzzeitig unter die Top 1000 zu gelangen (meine Höchstleistung: ca. Top 600). Das entspricht etwa den besten 0,2 % aller Teilnehmer dieses Modus. \n\nBei „Clash of Code“ werden kurze Coding-Aufgaben gestellt, die innerhalb von 15 Minuten gelöst werden müssen. In einer Runde nehmen maximal acht Spieler teil. Manchmal dreht es sich darum, das Problem mit möglichst kompaktem Code zu lösen, während in den meisten Fällen die Geschwindigkeit der Lösungsabgabe die Runden-Platzierung bestimmt. Bei schlechten Runden-Ergebnissen werden Ranglistenpunkte abgezogen. Auch eine unregelmäßige Aktivität führt dazu, dass Ranglistenplätze verloren gehen. Letzteres kann dazu geführt haben, dass ich zum jetzigen Zeitpunkt der vorher angesprochenen Platzierung nicht mehr nahekomme. \n\nAlles in allem bietet mir CodinGame eine unterhaltsame Möglichkeit, meine Coding-Geschwindigkeit, mein Problemlösungsverständnis und meine Programmiersprachenkenntnisse (vor allem JavaScript und C#) weiterzuentwickeln."
      : 'Thanks to my enthusiasm for coding, I have been able to achieve several successes on the CodinGame platform over the course of time. One milestone was reaching the "Legend Level" for the category "Coding Speed", which requires, among other things, to be among the top 1000 in the "Clash of Code" mode, at least for a short time (my maximum performance: approx. top 600). This corresponds to about the best 0.2 % of all participants in this mode. \n\nIn "Clash of Code", short coding tasks are set that have to be solved within 15 minutes. A maximum of eight players take part in a round. Sometimes it is about solving the problem with the most compact code possible, while in most cases the speed of the solution submission determines the round placement. Ranking points are deducted for poor round results. Irregular activity will also result in ranking points being lost. The latter may have resulted in me not coming close to the previously mentioned ranking at this point in time. \n\nAll in all, CodinGame offers me a fun way to develop my coding speed, problem-solving skills and programming language skills (especially JavaScript and C#).';
  const date = props.language === "de" ? "Juni 2022" : "June 2022";

  return (
    <div className="relative pb-5">
      <div className="absolute right-0 bottom-0">
        <Link
          href={
            "https://www.codingame.com/profile/a3dbd9f4eb4cd67d9377ec73dd9363e76178174"
          }
          target="_blank"
        >
          <Image
            src={codingame}
            alt="test"
            height={40}
            width={40}
            className="rounded-[50%]"
          />
        </Link>
      </div>
      <TEMPLATE_INNER_PART title={title} content={content} date={date} />
    </div>
  );
};

export default FOURTH_CODINGAME;

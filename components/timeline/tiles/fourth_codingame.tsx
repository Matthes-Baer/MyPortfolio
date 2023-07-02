import TEMPLATE_INNER_PART from "./template_inner_part";

const FOURTH_CODINGAME: (props: { language: string }) => JSX.Element = (props: {
  language: string;
}): JSX.Element => {
  const title =
    props.language === "de" ? "CodinGame-Erfolge" : "CodinGame Achievements";
  const content =
    props.language === "de"
      ? "Durch meine Begeisterung für das Coden konnte ich auf der Plattform CodinGame im Laufe der Zeit mehrere Erfolge erzielen. Unter anderem habe ich es im Modus „Clash of Code“ unter die Top 1000 geschafft (Höchstleistung: ca. Platz 600). Dies entspricht etwa den besten 0,2 % aller Spieler, die an diesem Modus teilgenommen haben. In „Clash of Code“ werden kleine Coding-Aufgaben gestellt, die innerhalb von 15 Minuten gelöst werden müssen. Maximal acht Spieler nehmen an einer Runde teil. Während es bei einigen Aufgaben darauf ankommt, das Problem mit möglichst kompaktem Code zu lösen, wird die Platzierung in den meisten Fällen nach der Geschwindigkeit der Lösungsabgabe ermittelt. CodinGame hat sich für mich als unterhaltsame Möglichkeit etabliert, insbesondere meine Coding-Geschwindigkeit, mein Problemlösungsverständnis und meine Fähigkeiten im Umgang mit verschiedenen Programmiersprachen (insbesondere JavaScript und C#) weiterzuentwickeln."
      : 'Due to my enthusiasm for coding, I was able to achieve several successes on the CodinGame platform over time. Among other things, I made it to the top 1000 in the "Clash of Code" mode (highest achievement: about 600th place). This is about the top 0.2% of all players who participated in this mode. In "Clash of Code", small coding tasks are set that have to be solved within 15 minutes. A maximum of eight players take part in a round. While some tasks rely on solving the problem with the most compact code possible, in most cases placement is determined by the speed of solution submission. CodinGame has established itself as a fun way for me to develop my coding speed, problem-solving understanding, and skills with various programming languages (JavaScript and C# in particular).';

  return (
    <div>
      <TEMPLATE_INNER_PART title={title} content={content} />
    </div>
  );
};

export default FOURTH_CODINGAME;

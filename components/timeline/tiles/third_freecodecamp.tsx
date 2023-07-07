import TEMPLATE_INNER_PART from "./template_inner_part";

const THIRD_FREECODECAMP: (props: {
  language: string;
}) => JSX.Element = (props: { language: string }): JSX.Element => {
  const title =
    props.language === "de" ? "freeCodeCamp-Kurse" : "freeCodeCamp courses";
  const content =
    props.language === "de"
      ? "Um meine Fähigkeiten in der Web-Entwicklung gezielt auszubauen, habe ich die Lernressourcen von freeCodeCamp genutzt. \n\nDurch den Kurs „Responsive Web Design“ konnte ich meine CSS-Fähigkeiten entwickeln. Der Kurs „JavaScript Algorithms and Data Structures“ ermöglichte es mir, mein JavaScript-Wissen zu vertiefen. Anschließend habe ich mit dem Kurs „Front End Development Libraries“ gezielt meine Fähigkeiten für die Web-Entwicklung erweitert. \n\nInsgesamt hat freeCodeCamp mir die Möglichkeit geboten, eine solide Grundlage zu schaffen, auf der ich mich daraufhin weiterentwickeln konnte."
      : 'To specifically develop my web development skills, I used the learning resources of freeCodeCamp. \n\nThrough the course "Responsive Web Design" I was able to develop my CSS skills. The course "JavaScript Algorithms and Data Structures" allowed me to deepen my JavaScript knowledge. Afterwards, the course "Front End Development Libraries" allowed me to specifically expand my skills for web development. \n\nOverall, freeCodeCamp gave me the opportunity to build a solid foundation on which I could then develop further.';
  const date =
    props.language === "de" ? "Feb. 2022 - Mai 2022" : "Feb. 2022 - May 2022";

  return (
    <div>
      <TEMPLATE_INNER_PART title={title} content={content} date={date} />
    </div>
  );
};

export default THIRD_FREECODECAMP;

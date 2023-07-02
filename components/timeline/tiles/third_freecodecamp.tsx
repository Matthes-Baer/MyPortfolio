import TEMPLATE_INNER_PART from "./template_inner_part";

const THIRD_FREECODECAMP: (props: {
  language: string;
}) => JSX.Element = (props: { language: string }): JSX.Element => {
  const title =
    props.language === "de" ? "FreeCodeCamp-Kurse" : "FreeCodeCamp courses";
  const content =
    props.language === "de"
      ? "Um meine Fähigkeiten in der Web-Entwicklung strukturiert auszubauen, habe ich die Lernressourcen von FreeCodeCamp genutzt. Im Rahmen dieser Plattform habe ich mich intensiv mit CSS, JavaScript und Frontend-Frameworks beschäftigt."
      : "To build my web development skills in a structured way, I used the learning resources of FreeCodeCamp. Within the framework of this platform, I have intensively studied CSS, JavaScript and frontend frameworks.";

  return (
    <div>
      <TEMPLATE_INNER_PART title={title} content={content} />
    </div>
  );
};

export default THIRD_FREECODECAMP;

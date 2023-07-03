import TEMPLATE_INNER_PART from "./template_inner_part";

const SIXTH_UDEMY: (props: { language: string }) => JSX.Element = (props: {
  language: string;
}): JSX.Element => {
  const title = props.language === "de" ? "Udemy-Kurse" : "Udemy courses";
  const content =
    props.language === "de"
      ? "Ab Juli 2022 habe ich mich intensiv mit verschiedenen Udemy-Kursen in spezifische Bereiche eingearbeitet. Dabei habe ich Kurse zu Themen wie Vue.js, Svelte, Jest, Next.js, MongoDB und anderen Technologien genutzt, um meine Kenntnisse zu vertiefen. Im Laufe der Zeit habe ich regelmäßig von solchen Kursangeboten Gebrauch gemacht, um mich strukturiert in bestimmte Fachgebiete einzufinden."
      : "As of July 2022, I have been intensively studying specific areas with various Udemy courses. In doing so, I used courses on topics such as Vue.js, Svelte, Jest, Next.js, MongoDB, and other technologies to deepen my knowledge. Over time, I have regularly made use of such course offerings to familiarize myself with specific areas of expertise in a structured manner.";

  return (
    <div>
      <TEMPLATE_INNER_PART title={title} content={content} />
    </div>
  );
};

export default SIXTH_UDEMY;

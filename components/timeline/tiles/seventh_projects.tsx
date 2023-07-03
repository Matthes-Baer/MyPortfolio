import TEMPLATE_INNER_PART from "./template_inner_part";

const SEVENTH_PROJECTS: (props: { language: string }) => JSX.Element = (props: {
  language: string;
}): JSX.Element => {
  const title = props.language === "de" ? "Projekte" : "Projects";
  const content =
    props.language === "de"
      ? "Obwohl ich mich bereits zuvor mit der Erstellung von praxisbezogenen Projekten auseinandergesetzt habe, habe ich ab 2023 einen besonderen Fokus darauf gelegt, verschiedene Projekte abzuschließen und ein aussagekräftiges Portfolio aufzubauen. Auch diese Portfolio-Website selbst habe ich im Verlauf des Jahres 2023 konzipiert, bearbeitet und abgeschlossen."
      : "Although I have previously engaged in the creation of practice-based projects, beginning in 2023 I placed a particular focus on completing various projects and building a meaningful portfolio. I also designed, edited, and completed this portfolio website itself during 2023.";

  return (
    <div>
      <TEMPLATE_INNER_PART title={title} content={content} />
    </div>
  );
};

export default SEVENTH_PROJECTS;

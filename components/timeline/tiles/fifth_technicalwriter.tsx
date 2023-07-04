import TEMPLATE_INNER_PART from "./template_inner_part";

const FIFTH_TECHNICALWRITER: (props: {
  language: string;
}) => JSX.Element = (props: { language: string }): JSX.Element => {
  const title =
    props.language === "de" ? "Technischer Autor" : "Technical Writer";
  const content =
    props.language === "de"
      ? "Nachdem ich bereits im Vorfeld erste Erfahrungen als technischer Schreiber gesammelt habe, habe ich im Juli 2022 erfolgreich meine Bewerbung bei freeCodeCamp als ehrenamtlicher technischer Schreiber abgeschlossen. Im Rahmen dieser Kooperation widme ich regelmäßig einen Teil meiner Freizeit dem Verfassen von technischen Artikeln. Mein Schwerpunkt liegt dabei insbesondere auf längeren Artikeln mit erklärendem und anleitendem Charakter, um bestimmte Konzepte näher zu erläutern. Zusätzlich zu diesem Engagement arbeite ich weiterhin als Übersetzer und Korrekturleser für den deutschen Bereich von freeCodeCamp. Meine Aufgabe besteht darin, die zahlreichen Kursinhalte vom Englischen ins Deutsche zu übersetzen und Korrektur zu lesen."
      : "Having already gained some experience as a technical writer in advance, I successfully completed my application to freeCodeCamp as a volunteer technical writer in July 2022. As part of this cooperation, I regularly dedicate some of my free time to writing technical articles. My focus is especially on longer articles of an explanatory and instructional nature to explain certain concepts in more detail. In addition to this commitment, I continue to work as a translator and proofreader for the German section of freeCodeCamp. My task is to translate and proofread the numerous course contents from English into German.";
  const date = props.language === "de" ? "Seit Juli 2022" : "Since July 2022";

  return (
    <div>
      <TEMPLATE_INNER_PART title={title} content={content} date={date} />
    </div>
  );
};

export default FIFTH_TECHNICALWRITER;

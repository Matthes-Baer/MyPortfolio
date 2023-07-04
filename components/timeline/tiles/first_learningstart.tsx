import TEMPLATE_INNER_PART from "./template_inner_part";

const FIRST_LEARNINGSTART: (props: {
  language: string;
}) => JSX.Element = (props: { language: string }): JSX.Element => {
  const title = props.language === "de" ? "Der Anfang" : "The Start";
  const content =
    props.language === "de"
      ? "Ich habe mein erstes HTML-Dokument Anfang Oktober 2021 manuell mit dem Windows-Text-Editor erstellt. Seit diesem Tag beschäftige ich mich intensiv mit der Software-Entwicklung, insbesondere der Web-Entwicklung. Seitdem habe ich keinen Tag vergehen lassen, an dem ich nicht an einem Projekt, einem Kurs, einem Coding-Puzzle oder ähnlichen Vorhaben gearbeitet habe. Ich habe großen Spaß daran und nutze diese und andere Gelegenheiten, um kontinuierlich dazuzulernen."
      : "I created my first HTML document manually with the Windows Text Editor at the beginning of October 2021. Since that day, I've been heavily involved in software development, especially web development. Since then, I haven't let a day go by without working on a project, a course, a coding puzzle or similar endeavor. I have great fun with it and use these and other opportunities to continuously learn.";
  const date = "Oct. 2021";

  return (
    <div className="relative">
      <TEMPLATE_INNER_PART title={title} content={content} date={date} />
    </div>
  );
};

export default FIRST_LEARNINGSTART;

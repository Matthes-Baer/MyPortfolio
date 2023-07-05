import TEMPLATE_INNER_PART from "./template_inner_part";

const EIGHT_NEXTGOAL: (props: { language: string }) => JSX.Element = (props: {
  language: string;
}): JSX.Element => {
  const title = props.language === "de" ? "Nächstes Ziel" : "Next Goal";
  const content =
    props.language === "de"
      ? "Ziel Front-End-Entwickler"
      : "Goal front end developer";
  const date = props.language === "de" ? "x" : "x";

  return (
    <div>
      <TEMPLATE_INNER_PART title={title} content={content} date={date} />
    </div>
  );
};

export default EIGHT_NEXTGOAL;

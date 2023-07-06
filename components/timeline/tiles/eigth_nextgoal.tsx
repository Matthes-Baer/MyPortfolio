import TEMPLATE_INNER_PART from "./template_inner_part";

const EIGHT_NEXTGOAL: (props: { language: string }) => JSX.Element = (props: {
  language: string;
}): JSX.Element => {
  const title = props.language === "de" ? "Nächstes Ziel" : "Next Objective";
  const content =
    props.language === "de"
      ? "Mein nächstes übergeordnetes Ziel besteht darin, ein professioneller Front-End-Entwickler zu werden, um weitere Webentwicklungsprojekte umzusetzen und mehr praktische Erfahrungen zu sammeln. Mittelfristig habe ich außerdem die Ambition, mich zu einem professionellen Fullstack-Entwickler weiterzuentwickeln, um einen ganzheitlichen Mehrwert für alle Projekte zu schaffen, an denen ich beteiligt bin."
      : "My next overall goal is to become a professional front-end developer to implement more web development projects and gain more hands-on experience. In the medium term, I also have the ambition to develop into a professional full-stack developer to add holistic value to all projects I am involved in.";
  const date = props.language === "de" ? "" : "";

  return (
    <div>
      <TEMPLATE_INNER_PART title={title} content={content} date={date} />
    </div>
  );
};

export default EIGHT_NEXTGOAL;

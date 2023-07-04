import TEMPLATE_INNER_PART from "./template_inner_part";

const SECOND_BVH: (props: { language: string }) => JSX.Element = (props: {
  language: string;
}): JSX.Element => {
  const title =
    props.language === "de" ? "Ehrenamt beim BVH" : "Volunteering at BVH";
  const content =
    props.language === "de"
      ? "Nach meinem regionalen ehrenamtlichen Engagement bei einem universitären Börsenverein habe ich die Gelegenheit ergriffen, mich weiterzuentwickeln, indem ich mich ehrenamtlich in der IT-Abteilung des BVH-Dachverbands (dem Dachverband universitärer Börsenvereine in ganz Deutschland) engagiert habe. Während dieser Tätigkeit habe ich mich intensiv mit PHP, JavaScript ohne Framework, jQuery und CSS/SCSS auseinandergesetzt, um meine Fähigkeiten in der Softwareentwicklung zu erweitern."
      : "After my regional volunteer work at a university stock exchange association, I took the opportunity to develop myself further by volunteering in the IT department of the BVH umbrella organization (the umbrella organization of university stock exchange associations throughout Germany). During this activity, I intensively studied PHP, JavaScript without framework, jQuery and CSS/SCSS to enhance my software development skills.";
  const date = "Jan. - Aug. 2022";

  return (
    <div>
      <TEMPLATE_INNER_PART title={title} content={content} date={date} />
    </div>
  );
};

export default SECOND_BVH;

import Image from "next/image";

import group_project from "public/main_images/timeline/group_project.jpg";
import TEMPLATE_INNER_PART from "./template_inner_part";

const SECOND_BVH: (props: { language: string }) => JSX.Element = (props: {
  language: string;
}): JSX.Element => {
  const title: string =
    props.language === "de" ? "Ehrenamt beim BVH" : "Volunteering at BVH";
  const content: string =
    props.language === "de"
      ? "Von 2021 bis 2022 war ich ehrenamtlich beim BFC (Business and Finance Club Kiel e.V.), einem universitären Börsenverein, engagiert. Anschließend nutzte ich die Gelegenheit, mich weiterzuentwickeln, indem ich mich ehrenamtlich in der IT-Abteilung des BVHs (Bundesverband der Börsenvereine an deutschen Hochschulen e.V.) beteiligte. \n\nWährend dieser Zeit intensivierte ich meine Kenntnisse in den Bereichen PHP, JavaScript (ohne Framework), jQuery und CSS/SCSS, um meine Fähigkeiten in der Softwareentwicklung zu erweitern. Durch dieses Engagement konnte ich auch meine Kommunikations- und Teamarbeitsfähigkeiten verbessern."
      : "From 2021 to 2022, I volunteered at the BFC (Business and Finance Club Kiel e.V.), a university stock exchange association. Afterwards, I took the opportunity to develop myself further by volunteering in the IT department of the BVH (Bundesverband der Börsenvereine an deutschen Hochschulen e.V.). \n\nDuring this time, I intensified my knowledge of PHP, JavaScript (without framework), jQuery and CSS/SCSS to expand my software development skills. Through this engagement, I was also able to improve my communication and teamwork skills.";
  const date: string = "Jan. - Aug. 2022";
  const image_alt: string =
    props.language === "de"
      ? "Eine Gruppe von lernenden Studenten"
      : "A group of learning students";

  return (
    <div>
      <Image
        src={group_project}
        alt={image_alt}
        height={150}
        width={150}
        className="absolute -bottom-[125px] -right-[50px] hidden lg:block rounded-[50%] shadow"
        style={{ boxShadow: "-2px 2px 5px 0px black" }}
      />
      <TEMPLATE_INNER_PART title={title} content={content} date={date} />
    </div>
  );
};

export default SECOND_BVH;

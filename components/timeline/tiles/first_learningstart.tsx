import Image from "next/image";
import { Suspense } from "react";

import bird from "public/main_images/timeline/birdsFour.png";
import TEMPLATE_INNER_PART from "./template_inner_part";
import Loading from "@/app/[lang]/loading";

const FIRST_LEARNINGSTART: (props: {
  language: string;
}) => JSX.Element = (props: { language: string }): JSX.Element => {
  const title: string = props.language === "de" ? "Start" : "Start";
  const content: string =
    props.language === "de"
      ? "Ich habe mein erstes HTML-Dokument Anfang Oktober 2021 manuell mit dem Windows-Text-Editor erstellt. Seitdem habe ich mich intensiv autodidaktisch mit der Software-Entwicklung beschäftigt, insbesondere mit der Web-Entwicklung. Kein Tag ist vergangen, an dem ich nicht an einem Projekt, einem Kurs, einem Coding-Puzzle oder ähnlichen Vorhaben gearbeitet habe. Das Coden bereitet mir großen Spaß und ich beschäftige mich auch in meiner Freizeit gerne mit dazugehörigen Themen. \n\nWährend meines Studiums konnte ich bereits Erfahrungen mit der IBM ILOG Optimization Programming Language sammeln, was mir einen ersten Einblick in das Coden verschafft hat, auch wenn es keine direkte Verbindung zur Web-Entwicklung hatte."
      : "I created my first HTML document manually with the Windows text editor at the beginning of October 2021. Since then, I have been intensively self-taught in software development, especially web development. Not a day has gone by without me working on a project, a course, a coding puzzle or similar endeavour. Coding is a lot of fun for me and I also like to deal with related topics in my free time. \n\nDuring my studies, I was already able to gain experience with the IBM ILOG Optimisation Programming Language, which gave me a first insight into coding, even if it had no direct connection to web development.";
  const date = props.language === "de" ? "Okt. 2021" : "Oct. 2021";
  const image_alt: string =
    props.language === "de" ? "Ein Vogel im Flug" : "A bird flying";

  return (
    <Suspense fallback={<Loading />}>
      <div className="relative">
        <Image
          src={bird}
          alt={image_alt}
          height={250}
          width={250}
          className="absolute -bottom-[75px] -right-[175px] opacity-90 hidden lg:block"
        />
        <TEMPLATE_INNER_PART title={title} content={content} date={date} />
      </div>
    </Suspense>
  );
};

export default FIRST_LEARNINGSTART;

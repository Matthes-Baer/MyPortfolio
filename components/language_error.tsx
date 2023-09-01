import Link from "next/link";
import ERROR_BACKGROUND_TILES from "./error_background_tiles";

const LANGUAGE_ERROR_COMP: (props: {
  language: string;
}) => JSX.Element = (props: { language: string }): JSX.Element => {
  return (
    <main className="flex flex-col h-screen w-full items-center justify-center text-center relative">
      <ERROR_BACKGROUND_TILES />
      <h1 className="text-5xl">
        {props.language === "de"
          ? "Bitte verwenden Sie die Sprachauswahl, um die Sprache zu ändern."
          : "Please use the language selector to change the language."}
      </h1>
      <Link
        href={`/${props.language}`}
        className="text-2xl mt-5 p-5 hover:text-card_yellow transition-colors border border-card_yellow rounded"
        style={{ boxShadow: "0px 3px 7.5px 0px rgba(0,0,0,0.5)" }}
      >
        {props.language === "de"
          ? "Zurück zur Sprachauswahl"
          : "Back to the language selector"}
      </Link>
    </main>
  );
};

export default LANGUAGE_ERROR_COMP;

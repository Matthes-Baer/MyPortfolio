import { PROJECT_IMAGES } from "@/utils/import_images";

const CHANGE_PROJECT_IMAGE_BUTTON: (props: {
  style_direction: string;
  logic_direction: string;
  language: string;
  project_key: string;
  current_idx: number;
  set_current_idx: Function;
  path_d: string;
}) => JSX.Element = (props: {
  style_direction: string;
  logic_direction: string;
  language: string;
  project_key: string;
  current_idx: number;
  set_current_idx: Function;
  path_d: string;
}): JSX.Element => {
  return (
    <button
      className="absolute top-1/2 -translate-y-1/2 p-2 mr-2 bg-dark_gray_stone border border-card_yellow hover:opacity-70 transition-opacity rounded-[50%] shadow-md"
      onClick={() =>
        props.set_current_idx((idx: number) =>
          props.logic_direction === "upwards" ? (idx += 1) : (idx -= 1)
        )
      }
      aria-label={
        props.language === "de"
          ? "Button für vorheriges Bild"
          : "Button for previous image"
      }
      style={{
        visibility:
          props.logic_direction === "upwards"
            ? props.current_idx < PROJECT_IMAGES[props.project_key].length - 1
              ? "visible"
              : "hidden"
            : props.current_idx > 0
            ? "visible"
            : "hidden",
        zIndex: 9000,
        [props.style_direction]: 0,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={props.path_d} />
      </svg>
    </button>
  );
};

export default CHANGE_PROJECT_IMAGE_BUTTON;

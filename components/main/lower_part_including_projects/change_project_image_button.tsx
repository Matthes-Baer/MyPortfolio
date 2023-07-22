import { gsap } from "gsap";
import { clearTimeout } from "timers";

import { PROJECT_IMAGES } from "@/utils/import_images";
import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { change_project_tile_state } from "@/redux/features/project_tile_slice";

const CHANGE_PROJECT_IMAGE_BUTTON: (props: {
  style_direction: string;
  logic_direction: string;
  language: string;
  project_key: string;
  current_idx: number;
  set_current_idx: Function;
  path_d: string;
  image_slide_click_function: Function;
}) => JSX.Element = (props: {
  style_direction: string;
  logic_direction: string;
  language: string;
  project_key: string;
  current_idx: number;
  set_current_idx: Function;
  path_d: string;
  image_slide_click_function: Function;
}): JSX.Element => {
  const arrow_ref: MutableRefObject<null> = useRef(null);
  const [load_state, set_load_state]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState<boolean>(false);

  return (
    <button
      className="absolute top-1/2 -translate-y-1/2 p-2 mr-2 bg-dark_gray_stone border border-card_yellow hover:opacity-70 transition-opacity rounded-[50%] shadow-md"
      disabled={load_state}
      onClick={() => {
        props.image_slide_click_function();
        set_load_state(true);

        props.set_current_idx((idx: number) =>
          props.logic_direction === "upwards" ? (idx += 1) : (idx -= 1)
        );
        gsap.fromTo(
          arrow_ref.current,
          { rotate: "0deg" },
          { rotate: "360deg", duration: 5 }
        );

        //* Logic to prevent user from spam-clicking and breaking the animation
        //* Regarding adjustments: Adjust timing based on duration of animation in project_tile.tsx
        const timeout = setTimeout(() => {
          set_load_state(false);
        }, 5000);

        return () => clearTimeout(timeout);
      }}
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
        ref={arrow_ref}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={props.path_d} />
      </svg>
    </button>
  );
};

export default CHANGE_PROJECT_IMAGE_BUTTON;

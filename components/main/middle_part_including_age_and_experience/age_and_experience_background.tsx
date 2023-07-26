const AGE_AND_EXPERIENCE_BACKGROUND: () => JSX.Element = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center overflow-hidden opacity-60">
      {Array.from({ length: 8 }, (_, idx: number) => {
        return (
          <div
            key={idx}
            style={{
              height: "1px",
              width: idx * 20 + "px",
              backgroundColor: "#64871c",
              marginBottom: "10px",
              borderRadius: "3px",
            }}
          ></div>
        );
      })}
      {Array.from({ length: 8 }, (_, idx: number) => {
        return (
          <div
            key={idx}
            style={{
              height: "1px",
              width: 8 * 20 - idx * 20 + "px",
              backgroundColor: "#64871c",
              marginBottom: idx < 7 ? "10px" : "0px",
              borderRadius: "3px",
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default AGE_AND_EXPERIENCE_BACKGROUND;

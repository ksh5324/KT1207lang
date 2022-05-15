import React from "react";
import { ChooseContainer } from "./ChooseColorStyle";

const colorState = [
  { mode: "light" },
  { mode: "pink" },
  { mode: "orange" },
  { mode: "dark" },
];

const ChooseColor = ({ chooseTheme, not }: any) => {
  return (
    <ChooseContainer>
      <div className={not ? "not" : "show"}>
        {colorState.map((v, i) => (
          <div
            className="color"
            key={i}
            onClick={() => chooseTheme(v.mode)}
          ></div>
        ))}
      </div>
    </ChooseContainer>
  );
};

export default ChooseColor;

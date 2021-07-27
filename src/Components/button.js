import React from "react";

export const Button = (props) => {
  const { btnText, clr, bgColor, fontSize, className } = props;
  return (
    <button
      className={className}
      style={{
        color: clr,
        background: bgColor,
        fontSize: fontSize,
        padding: "8px 10px",
      }}
    >
      {btnText}
    </button>
  );
};

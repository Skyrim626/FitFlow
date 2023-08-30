import { useState } from "react";
import "../css/CustomizeButton.css";

/**
 *  A function that customize and generates a button
 * @param {text: string, letterSpacing: string, background: string, padding: string, color: string, fontWeight: string, fontSize: string, navEffect} param0
 * @returns returns a customized button
 */
const CustomizeButton = ({
  text,
  letterSpacing,
  background,
  padding,
  color,
  fontWeight,
  fontSize,
  navEffect,
}) => {
  // Style for Button
  const buttonStyle = {
    color: color || "white",
    letterSpacing: letterSpacing || "0px",
    background: background || "black",
    padding: padding || "10px 20px",
    fontWeight: fontWeight || "600",
    border: "none",
    fontSize: fontSize || "17px",
  };

  return (
    <>
      <button
        style={buttonStyle}
        id="button"
        className={navEffect ? "active" : ""}
      >
        {text}
      </button>
    </>
  );
};

export default CustomizeButton;

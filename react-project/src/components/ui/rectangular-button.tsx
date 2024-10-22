import React from "react";
import "./rectangular-button.scss";

interface RectangularButtonProps {
  className?: string;
  text?: string;
  type?: "button" | "submit" | "reset";
}

const RectangularButton: React.FC<RectangularButtonProps> = ({ className, text, type = "button" }) => {
  return (
    <button type={type} className={`rectangularButton ${className}`}>
      {text}
    </button>
  );
};

export default RectangularButton;

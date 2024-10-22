import React from "react";
import "./render-select-box.scss";

interface RenderSelectBoxProps {
  className?: string;
  name: string;
  options: { value: string; label: string }[];
}

const RenderSelectBox: React.FC<RenderSelectBoxProps> = ({ className, name, options }) => {
  return (
    <select className={`renderSelectBox ${className}`} name={name}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default RenderSelectBox;

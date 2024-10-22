import React from "react";
import "./render-select-box.scss";

interface RenderSelectBoxProps {
  className?: string;
  name: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const RenderSelectBox: React.FC<RenderSelectBoxProps> = ({ className, name, options, value, onChange }) => {
  return (
    <select className={`renderSelectBox ${className}`} name={name} value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default RenderSelectBox;

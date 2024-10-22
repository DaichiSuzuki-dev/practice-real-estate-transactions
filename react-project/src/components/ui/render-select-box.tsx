import React from "react";
import "./render-select-box.scss";

interface RenderSelectBoxProps {
  className?: string;
  name: string;
  options: { value: string; label: string }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const RenderSelectBox: React.FC<RenderSelectBoxProps> = ({ className, name, options, onChange }) => {
  return (
    <select className={`renderSelectBox ${className}`} name={name} onChange={onChange}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default RenderSelectBox;

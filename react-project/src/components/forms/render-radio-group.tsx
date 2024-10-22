import React from "react";
import "./render-radio-group.scss";

interface RenderRadioGroupProps {
  className?: string;
  name: string;
  options: { value: string; label: string }[];
}

const RenderRadioGroup: React.FC<RenderRadioGroupProps> = ({ className, name, options }) => {
  return (
    <div className={`renderRadioGroup ${className}`}>
      {options.map((option) => (
        <label key={option.value}>
          <input type="radio" name={name} value={option.value} />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RenderRadioGroup;

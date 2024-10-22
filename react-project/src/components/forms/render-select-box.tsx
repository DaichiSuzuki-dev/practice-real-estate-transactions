import React from "react";
import "./render-select-box.scss";

interface RenderSelectBoxProps {
  className?: string;
  name: string;
  options: { value: string; label: string }[];
  selectedValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const RenderSelectBox: React.FC<RenderSelectBoxProps> = ({ className, name, options, selectedValue, onChange }) => {
  return (
    <select className={`renderSelectBox ${className}`} name={name} onChange={onChange}>
      {options.map((option) => {
        // 親要素にてselectedValueが指定されている場合は、当該optionをselectedにする
        const isSelected = option.value === selectedValue;
        return (
          <option key={option.value} value={option.value} selected={isSelected}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
};

export default RenderSelectBox;

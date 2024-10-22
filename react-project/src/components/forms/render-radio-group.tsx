import React from "react";
import "./render-radio-group.scss";

interface RenderRadioGroupProps {
  className?: string;
  name: string;
  options: { value: string; label: string }[];
  selectedValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RenderRadioGroup: React.FC<RenderRadioGroupProps> = ({ className, name, options, selectedValue, onChange }) => {
  return (
    <div className={`renderRadioGroup ${className}`}>
      {options.map((option) => {
        // 親要素にてselectedValueが指定されている場合は、当該inputをcheckedにする
        const isSelected = option.value === selectedValue;
        return (
          <label key={option.value}>
            <input type="radio" name={name} value={option.value} checked={isSelected} onChange={onChange} />
            {option.label}
          </label>
        );
      })}
    </div>
  );
};

export default RenderRadioGroup;

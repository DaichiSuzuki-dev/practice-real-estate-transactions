import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface IconTextProps {
  icon: IconDefinition;
  text: string;
  className?: string;
  classNameIcon?: string;
  classNameText?: string;
}

const IconText: React.FC<IconTextProps> = ({ icon, text, className, classNameIcon, classNameText }) => {
  return (
    <div className={`iconText ${className}`}>
      <FontAwesomeIcon icon={icon} className={`iconText-icon ${classNameIcon}`} />
      <span className={`iconText-text ${classNameText}`}>{text}</span>
    </div>
  );
};

export default IconText;


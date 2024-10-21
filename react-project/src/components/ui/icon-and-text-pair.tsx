import React from "react";
import "./icon-and-text-pair.scss";
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
      <FontAwesomeIcon icon={icon} className={`${classNameIcon}`} />
      <span className={`${classNameText}`}>{text}</span>
    </div>
  );
};

export default IconText;

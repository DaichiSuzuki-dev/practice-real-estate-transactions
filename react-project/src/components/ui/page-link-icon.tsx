import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowRestore } from "@fortawesome/free-regular-svg-icons";

interface PageLinkIconProps {
  className?: string;
}

const PageLinkIcon: React.FC<PageLinkIconProps> = ({ className }) => {
  return <FontAwesomeIcon icon={faWindowRestore} className={className} />;
};

export default PageLinkIcon;

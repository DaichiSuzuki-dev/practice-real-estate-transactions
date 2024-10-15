import React from "react";
import "./footer-nav.scss";
import PageLinkIcon from "../ui/page-link-icon";

interface FooterNavProps {
  pageName?: string;
}

const FooterNav: React.FC<FooterNavProps> = ({ pageName }) => {
  return (
    <div className="navigation">
      <p className="navigation-pageName">{pageName}</p>

      <PageLinkIcon className="navigation-icon" />
    </div>
  );
};

export default FooterNav;

import React from "react";
import "./header.scss";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src="/images/logo-landit.png" alt="Landit Logo" />
      </div>
    </div>
  );
};

export default Header;

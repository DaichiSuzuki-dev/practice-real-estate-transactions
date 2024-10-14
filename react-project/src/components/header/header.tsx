import React from 'react';
import './header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src="/images/logo-landit.png" alt="Landit Logo" />
      </div>
    </header>
  );
};

export default Header;

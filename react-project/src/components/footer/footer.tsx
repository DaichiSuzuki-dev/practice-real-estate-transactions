import React from "react";
import "./footer.scss";
import FooterNav from "../footer-nav/footer-nav";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-navigation footerContent">
        <FooterNav pageName="利用規約" />
        <FooterNav pageName="プライバシーポリシー" />
      </div>

      <p className="footer-copyright footerContent">© 2023 Landit Inc.</p>
    </footer>
  );
};

export default Footer;

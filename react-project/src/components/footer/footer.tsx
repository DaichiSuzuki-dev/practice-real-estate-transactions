import React from "react";
import IconText from "../ui/icon-and-text-pair";
import "./footer.scss";
import { faWindowRestore } from "@fortawesome/free-regular-svg-icons";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <section className="footer-footerNav">
        <IconText icon={faWindowRestore} text="利用規約" className="footer-footerNav-item" classNameIcon="footer-footerNav-item-icon" />
        <IconText icon={faWindowRestore} text="プライバシーポリシー" className="footer-footerNav-item" classNameIcon="footer-footerNav-item-icon" />
      </section>

      <p className="footer-copyright">© 2023 Landit Inc.</p>
    </div>
  );
};

export default Footer;

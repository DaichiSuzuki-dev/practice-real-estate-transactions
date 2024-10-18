import React from "react";
import "./transaction-price.scss";
import { faSquarePollVertical } from "@fortawesome/free-solid-svg-icons";
import IconText from "../../components/ui/icon-and-text-pair";

const TransactionPrice: React.FC = () => {
  return (
    <div className="main-transactionPrice" style={{ backgroundImage: `url('/images/map-image.png')` }}>
      <div className="main-transactionPrice-background">
        <section className="titleContent">
          <div className="titleContent-container">
            <IconText icon={faSquarePollVertical} text="取引価格" className="titleContent-container-title" classNameIcon="icon" classNameText="text" />
            <p className="titleContent-container-description">※取引価格1㎡あたり</p>
          </div>
        </section>

        <section className="graphContent"></section>
      </div>
    </div>
  );
};

export default TransactionPrice;

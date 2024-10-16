import React from "react";
import "./transaction-price.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePollVertical } from "@fortawesome/free-solid-svg-icons";

const TransactionPrice: React.FC = () => {
  return (
    <div className="main-transactionPrice" style={{ backgroundImage: `url('/images/map-image.png')` }}>
      <div className="main-transactionPrice-background">
        <section className="titleContent">
          <div className="titleContent-container">
            <div className="titleContent-container-title">
              <FontAwesomeIcon icon={faSquarePollVertical} className="titleContent-container-title-icon" />
              <h1 className="titleContent-container-title-text">取引価格</h1>
            </div>
            <p className="titleContent-container-description">※取引価格1㎡あたり</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TransactionPrice;

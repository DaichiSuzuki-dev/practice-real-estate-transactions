import React from "react";
import "./property-transaction.scss";
import { faSquarePollVertical } from "@fortawesome/free-solid-svg-icons";
import IconText from "../components/ui/icon-and-text-pair";

const PropertyTransaction = () => {
  return (
    <div className="propertyTransaction" style={{ "--background-image": 'url("/images/map-image.png")' } as React.CSSProperties}>
      <section className="propertyTransaction-titleArea">
        <div className="propertyTransaction-titleArea-content">
          <IconText icon={faSquarePollVertical} text="取引価格" className="propertyTransaction-titleArea-content-title" classNameIcon="icon" />
          <span className="propertyTransaction-titleArea-content-description">※取引価格1㎡あたり</span>
        </div>
      </section>
    </div>
  );
};

export default PropertyTransaction;

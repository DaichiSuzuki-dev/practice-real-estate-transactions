import React from "react";
import "./property-transaction.scss";
import { faLocationDot, faSquarePollVertical, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import IconText from "../components/ui/icon-and-text-pair";
import RenderSelectBox from "../components/ui/render-select-box";

const PropertyTransaction = () => {
  const placeOptions = [
    { value: "13", label: "東京都" },
    { value: "14", label: "神奈川県" },
    { value: "11", label: "埼玉県" },
    { value: "12", label: "千葉県" },
  ];

  const yearOptions = [
    { value: "2019", label: "2019年" },
    { value: "2020", label: "2020年" },
    { value: "2021", label: "2021年" },
  ];

  return (
    <div className="propertyTransaction" style={{ "--background-image": 'url("/images/map-image.png")' } as React.CSSProperties}>
      <section className="propertyTransaction-titleArea">
        <div className="propertyTransaction-titleArea-content">
          <IconText icon={faSquarePollVertical} text="取引価格" className="propertyTransaction-titleArea-content-title" classNameIcon="icon" />
          <span className="propertyTransaction-titleArea-content-description">※取引価格1㎡あたり</span>
        </div>
      </section>

      <section className="propertyTransaction-graphArea">
        <article className="propertyTransaction-graphArea-control">
          <div className="propertyTransaction-graphArea-control-title">表示内容を選択</div>

          <div className="propertyTransaction-graphArea-control-place">
            <IconText icon={faLocationDot} text="場所" className="formItemName" classNameText="text" />
            <RenderSelectBox name="place" options={placeOptions} onChange={() => {}} />
          </div>

          <div className="propertyTransaction-graphArea-control-year">
            <IconText icon={faCalendarCheck} text="年度" className="formItemName" classNameText="text" />
            <RenderSelectBox name="year" options={yearOptions} onChange={() => {}} />
          </div>
        </article>
      </section>
    </div>
  );
};

export default PropertyTransaction;

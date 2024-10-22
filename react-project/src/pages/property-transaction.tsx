import React from "react";
import "./property-transaction.scss";
import { faLocationDot, faSquarePollVertical, faCalendarCheck, faShapes } from "@fortawesome/free-solid-svg-icons";
import IconText from "../components/ui/icon-and-text-pair";
import RenderSelectBox from "../components/forms/render-select-box";
import RenderRadioGroup from "../components/forms/render-radio-group";

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

  const typeOptions = [
    { value: "1", label: "土地（住宅地）" },
    { value: "2", label: "土地（商業地）" },
    { value: "3", label: "中古マンション等" },
    { value: "4", label: "農地" },
    { value: "5", label: "林地" },
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
            <RenderSelectBox name="place" options={placeOptions} />
          </div>

          <div className="propertyTransaction-graphArea-control-year">
            <IconText icon={faCalendarCheck} text="年度" className="formItemName" classNameText="text" />
            <RenderSelectBox name="year" options={yearOptions} />
          </div>

          <div className="propertyTransaction-graphArea-control-kinds">
            <IconText icon={faShapes} text="種別" className="formItemName" classNameText="text" />
            <RenderRadioGroup name="kinds" options={typeOptions} />
          </div>
        </article>
      </section>
    </div>
  );
};

export default PropertyTransaction;

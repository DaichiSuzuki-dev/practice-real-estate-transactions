import React from "react";
import "./property-transaction.scss";
import { faLocationDot, faSquarePollVertical, faCalendarCheck, faShapes } from "@fortawesome/free-solid-svg-icons";
import IconText from "../components/ui/icon-and-text-pair";
import RenderSelectBox from "../components/forms/render-select-box";
import RenderRadioGroup from "../components/forms/render-radio-group";
import RectangularButton from "../components/ui/rectangular-button";
import { prefCodeOptions, yearOptions, displayTypeOptions } from "../data/propertyTransactionOptions";

const PropertyTransaction = () => {
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
          <form className="propertyTransaction-graphArea-control-container">
            <div className="propertyTransaction-graphArea-control-container-title">表示内容を選択</div>

            <div className="propertyTransaction-graphArea-control-container-place">
              <IconText icon={faLocationDot} text="場所" className="formItemName" />
              <RenderSelectBox name="place" options={prefCodeOptions} />
            </div>

            <div className="propertyTransaction-graphArea-control-container-year">
              <IconText icon={faCalendarCheck} text="年度" className="formItemName" />
              <RenderSelectBox name="year" options={yearOptions} />
            </div>

            <div className="propertyTransaction-graphArea-control-container-kinds">
              <IconText icon={faShapes} text="種別" className="formItemName" />
              <RenderRadioGroup name="kinds" options={displayTypeOptions} />
            </div>

            <div className="propertyTransaction-graphArea-control-container-download">
              <RectangularButton type="submit" text="データをダウンロード" />
            </div>
          </form>
        </article>
      </section>
    </div>
  );
};

export default PropertyTransaction;

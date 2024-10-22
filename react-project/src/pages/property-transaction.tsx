import React, { useState } from "react";
import "./property-transaction.scss";
import { faLocationDot, faSquarePollVertical, faCalendarCheck, faShapes } from "@fortawesome/free-solid-svg-icons";
import IconText from "../components/ui/icon-and-text-pair";
import RenderSelectBox from "../components/forms/render-select-box";
import RenderRadioGroup from "../components/forms/render-radio-group";
import RectangularButton from "../components/ui/rectangular-button";
import { prefCodeOptions, yearOptions, displayTypeOptions } from "../data/propertyTransactionOptions";

const PropertyTransaction = () => {
  // useState関数を使用することで、リアクティブに状態管理が行えるそう
  // 読み込み用の第一引数と、変更用の第二引数があるが、分割代入するのが基本とのこと
  // 参照：https://qiita.com/TaikiTkwkbysh/items/780144eea9ea0469b73c
  const [formData, setFormData] = useState({
    place: "13",
    year: "2021",
    kinds: "1",
  });

  // フォーム内の値が変更された時に呼び出し、その値をstateに反映させる
  // SelectまたはInputからのイベントに限定して変更を検知する
  // 参照：https://nano-toy-lab.com/react/select/
  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFormData({
      ...formData,
      // 変更されたイベントをターゲットとして、keyとvalueをセットする
      [e.target.name]: e.target.value,
    });
  };

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
              <RenderSelectBox name="place" options={prefCodeOptions} selectedValue={formData.place} onChange={handleInputChange} />
            </div>

            <div className="propertyTransaction-graphArea-control-container-year">
              <IconText icon={faCalendarCheck} text="年度" className="formItemName" />
              <RenderSelectBox name="year" options={yearOptions} selectedValue={formData.year} onChange={handleInputChange} />
            </div>

            <div className="propertyTransaction-graphArea-control-container-kinds">
              <IconText icon={faShapes} text="種別" className="formItemName" />
              <RenderRadioGroup name="kinds" options={displayTypeOptions} selectedValue={formData.kinds} onChange={handleInputChange} />
            </div>

            <div className="propertyTransaction-graphArea-control-container-download">
              <RectangularButton type="submit" text="データをダウンロード" />
            </div>
          </form>
        </article>
      </section>

      {/* formDataの状況を表示 */}
      <section className="propertyTransaction-formDataStatus">
        <h3>フォームデータの状態：</h3>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </section>
    </div>
  );
};

export default PropertyTransaction;

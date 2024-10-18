import React from "react";
import "./transaction-price.scss";
import { faSquarePollVertical, faCalendarCheck, faLocationDot, faShapes } from "@fortawesome/free-solid-svg-icons";
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

        <section className="graphContent">
          <div className="graphContent-control">
            <form className="form" method="GET">
              <div className="form-title">表示内容を選択</div>

              <div className="form-place">
                <IconText icon={faLocationDot} text="場所" className="form-place-itemName" classNameText="text" />
                <select className="form-place-selectBox" name="場所">
                  <option value="13">東京都</option>
                  <option value="14">神奈川県</option>
                  <option value="11">埼玉県</option>
                  <option value="12">千葉県</option>
                </select>
              </div>

              <div className="form-year">
                <IconText icon={faCalendarCheck} text="年度" className="form-year-itemName" classNameText="text" />
                <select className="form-year-selectBox" name="年度">
                  <option value="2022">2022年</option>
                  <option value="2023">2023年</option>
                  <option value="2024">2024年</option>
                </select>
              </div>

              <div className="form-kinds">
                <IconText icon={faShapes} text="種別" className="form-kinds-itemName" classNameText="text" />
                <div className="form-kinds-radioGroup">
                  <label>
                    <input type="radio" name="種別" value="1" defaultChecked />
                    土地（住宅地）
                  </label>
                  <label>
                    <input type="radio" name="種別" value="2" />
                    土地（商業地）
                  </label>
                  <label>
                    <input type="radio" name="種別" value="3" />
                    中古マンション等
                  </label>
                  <label>
                    <input type="radio" name="種別" value="4" />
                    農地
                  </label>
                  <label>
                    <input type="radio" name="種別" value="5" />
                    林地
                  </label>
                </div>
              </div>

              <button type="submit" className="form-download">
                データをダウンロード
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TransactionPrice;

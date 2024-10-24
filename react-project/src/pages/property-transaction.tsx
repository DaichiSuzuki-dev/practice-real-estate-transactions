import React, { useState } from "react";
import "./property-transaction.scss";
import { faLocationDot, faSquarePollVertical, faCalendarCheck, faShapes } from "@fortawesome/free-solid-svg-icons";
import IconText from "../components/ui/icon-and-text-pair";
import RenderSelectBox from "../components/forms/render-select-box";
import RenderRadioGroup from "../components/forms/render-radio-group";
import RectangularButton from "../components/ui/rectangular-button";
import { prefCodeOptions, yearOptions, displayTypeOptions } from "../data/propertyTransactionOptions";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PropertyTransaction = () => {
  // useState関数を使用することで、リアクティブに状態管理が行えるそう
  // 読み込み用の第一引数と、変更用の第二引数があるが、分割代入するのが基本とのこと
  // 参照：https://qiita.com/TaikiTkwkbysh/items/780144eea9ea0469b73c
  const [formData, setFormData] = useState({
    place: "13",
    year: "2021",
    kinds: "1",
  });

  // APIから取得したデータを格納する
  const [apiData, setApiData] = useState<number>();

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

  const fetchData = async () => {
    try {
      const apiKey = process.env.REACT_APP_RESAS_API_KEY;
      if (!apiKey) {
        console.error("API キーが設定されていません。");
        return;
      }

      const response = await fetch(`https://opendata.resas-portal.go.jp/api/v1/townPlanning/estateTransaction/bar?year=${formData.year}&prefCode=${formData.place}&cityCode=-&displayType=${formData.kinds}`, {
        method: "GET",
        headers: {
          "X-API-KEY": apiKey,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("APIレスポンス:", data);
        setApiData(data.result.years[0].value);
      } else {
        console.error("APIリクエストに失敗しました");
      }
    } catch (error) {
      console.error("エラーが発生しました:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // フォームのデフォルトの送信動作 (ページのリロード)を防ぐ
    // 参照：https://qiita.com/tochiji/items/4e9e64cabc0a1cd7a1ae
    e.preventDefault();
    await fetchData();
  };

  // 配列の中から、valueに一致するlabelを返す処理
  const findLabelForValue = (options: { value: string; label: string }[], targetValue: string): string => {
    const foundOption = options.find((option) => option.value === targetValue);
    return foundOption ? foundOption.label : "Undefined";
  };

  const graphData = {
    labels: [findLabelForValue(prefCodeOptions, formData.place), "全国平均"],
    datasets: [
      {
        label: "不動産取引価格(面積あたり平均価格)",
        data: [apiData || null, 50000],
        backgroundColor: ["#4fad66", "#605d55"],
      },
    ],
  };

  const graphOptions = {
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "(円/㎡)",
        position: "top" as const,
        align: "start" as const,
        color: "#FFFFFF",
        font: {
          size: 12,
        },
        padding: {
          bottom: 30,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#FFFFFF",
        },
        grid: {
          display: false,
        },
        border: {
          color: "#FFFFFF",
        },
      },
      y: {
        ticks: {
          color: "#FFFFFF",
        },
        grid: {
          display: false,
        },
        border: {
          color: "#FFFFFF",
        },
      },
    },
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
        <article className="propertyTransaction-graphArea-graph">
          <div className="propertyTransaction-graphArea-graph-title">
            <IconText icon={faLocationDot} text={findLabelForValue(prefCodeOptions, formData.place)} className="graphTitleItemName" />
            <IconText icon={faCalendarCheck} text={`${formData.year}年`} className="graphTitleItemName" />
            <IconText icon={faShapes} text={findLabelForValue(displayTypeOptions, formData.kinds)} className="graphTitleItemName" />
          </div>

          <Bar data={graphData} options={graphOptions} width={713} height={446} />
        </article>

        <article className="propertyTransaction-graphArea-control">
          <form className="propertyTransaction-graphArea-control-container" onSubmit={handleSubmit}>
            <div className="propertyTransaction-graphArea-control-container-title">表示内容を選択</div>

            <div className="propertyTransaction-graphArea-control-container-place">
              <IconText icon={faLocationDot} text="場所" className="formItemName" />
              <RenderSelectBox name="place" options={prefCodeOptions} value={formData.place} onChange={handleInputChange} />
            </div>

            <div className="propertyTransaction-graphArea-control-container-year">
              <IconText icon={faCalendarCheck} text="年度" className="formItemName" />
              <RenderSelectBox name="year" options={yearOptions} value={formData.year} onChange={handleInputChange} />
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
    </div>
  );
};

export default PropertyTransaction;

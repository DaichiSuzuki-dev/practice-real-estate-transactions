// 必要なライブラリとコンポーネントをインポート
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import "./transaction-price.scss";
import { faSquarePollVertical, faCalendarCheck, faLocationDot, faShapes } from "@fortawesome/free-solid-svg-icons";
import IconText from "../components/ui/icon-and-text-pair";

// グラフ描画に必要な要素を登録
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TransactionPrice: React.FC = () => {
  // フォームデータと API データの状態を管理
  const [formData, setFormData] = useState({ place: "13", year: "2019", type: "1" });
  const [apiData, setApiData] = useState<number | null>(null);

  // フォーム入力の変更を処理する関数
  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  // API からデータを取得する関数
  const fetchData = async () => {
    try {
      const { year, place, type } = formData;
      const apiUrl = `https://opendata.resas-portal.go.jp/api/v1/townPlanning/estateTransaction/bar?year=${year}&prefCode=${place}&cityCode=-&displayType=${type}`;
      const response = await fetch(apiUrl, {
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": process.env.REACT_APP_RESAS_API_KEY || "",
        },
      });

      if (!response.ok) throw new Error("APIリクエストに失敗しました");

      const data = await response.json();
      setApiData(data.result?.data?.[0]?.value ?? null);
    } catch (error) {
      console.error("エラーが発生しました:", error);
      setApiData(null);
    }
  };

  // セレクトボックスを描画する関数
  const renderSelectBox = (name: string, options: { value: string; label: string }[]) => (
    <select className={`form-${name}-selectBox`} name={name} value={formData[name as keyof typeof formData]} onChange={handleInputChange}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );

  // ラジオボタングループを描画する関数
  const renderRadioGroup = (options: { value: string; label: string }[]) => (
    <div className="form-kinds-radioGroup">
      {options.map(({ value, label }) => (
        <label key={value}>
          <input type="radio" name="type" value={value} checked={formData.type === value} onChange={handleInputChange} />
          {label}
        </label>
      ))}
    </div>
  );

  // 場所のオプション
  const placeOptions = [
    { value: "13", label: "東京都" },
    { value: "14", label: "神奈川県" },
    { value: "11", label: "埼玉県" },
    { value: "12", label: "千葉県" },
  ];

  // 種別のオプション
  const typeOptions = [
    { value: "1", label: "土地（住宅地）" },
    { value: "2", label: "土地（商業地）" },
    { value: "3", label: "中古マンション等" },
    { value: "4", label: "農地" },
    { value: "5", label: "林地" },
  ];

  // オプションからラベルを取得する関数
  const getOptionLabel = (options: { value: string; label: string }[], code: string) => options.find((option) => option.value === code)?.label || "";

  // 場所名と種別名を取得する関数
  const getPlaceName = (placeCode: string) => getOptionLabel(placeOptions, placeCode);
  const getTypeName = (typeCode: string) => getOptionLabel(typeOptions, typeCode);

  // グラフデータの設定
  const graphData = {
    labels: [getPlaceName(formData.place), "全国平均"],
    datasets: [
      {
        data: [apiData || 0, 44000],
        backgroundColor: ["#009984", "#605d55"],
        label: "",
      },
    ],
  };

  // グラフのY軸の最大値とステップサイズを計算
  const maxValue = Math.max(apiData || 0, 44000);
  const yAxisMax = Math.ceil(maxValue / 50000) * 50000;
  const stepSize = yAxisMax / 5;

  // グラフオプションの設定
  const graphOptions = {
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "(円/㎡)",
        position: "top" as const,
        align: "start" as const,
        color: "#FFFFFF",
        font: { size: 14 },
        padding: { bottom: 30 },
      },
    },
    scales: {
      x: {
        ticks: { color: "#FFFFFF" },
        grid: { display: false },
        border: { color: "#FFFFFF" },
      },
      y: {
        ticks: {
          color: "#FFFFFF",
          stepSize: stepSize,
          callback: (value: number | string) => (typeof value === "number" ? value.toLocaleString() : value),
        },
        grid: { display: false },
        border: { color: "#FFFFFF", display: true },
        min: 0,
        max: yAxisMax,
      },
    },
  };

  // コンポーネントの描画
  return (
    <div className="main-transactionPrice" style={{ backgroundImage: `url('/images/map-image.png')` }}>
      <div className="main-transactionPrice-background">
        {/* タイトルセクション */}
        <section className="titleContent">
          <div className="titleContent-container">
            <IconText icon={faSquarePollVertical} text="取引価格" className="titleContent-container-title" classNameIcon="icon" classNameText="text" />
            <p className="titleContent-container-description">※取引価格1㎡あたり</p>
          </div>
        </section>

        {/* グラフと操作パネルセクション */}
        <section className="graphContent">
          {/* グラフ表示エリア */}
          <div className="graphContent-graph">
            <div className="graphContent-graph-title">
              <IconText icon={faLocationDot} text={getPlaceName(formData.place)} className="graphContent-graph-title-itemName" classNameIcon="icon" classNameText="text" />
              <IconText icon={faCalendarCheck} text={`${formData.year}年`} className="graphContent-graph-title-itemName" classNameIcon="icon" classNameText="text" />
              <IconText icon={faShapes} text={getTypeName(formData.type)} className="graphContent-graph-title-itemName" classNameIcon="icon" classNameText="text" />
            </div>
            <Bar data={graphData} options={graphOptions} className="graphContent-graph-content" width={660} height={441} />
          </div>

          {/* 操作パネル */}
          <div className="graphContent-control">
            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault();
                fetchData();
              }}
            >
              <div className="form-title">表示内容を選択</div>

              {/* 場所選択 */}
              <div className="form-place">
                <IconText icon={faLocationDot} text="場所" className="form-place-itemName" classNameText="text" />
                {renderSelectBox("place", placeOptions)}
              </div>

              {/* 年度選択 */}
              <div className="form-year">
                <IconText icon={faCalendarCheck} text="年度" className="form-year-itemName" classNameText="text" />
                {renderSelectBox("year", [
                  { value: "2019", label: "2019年" },
                  { value: "2020", label: "2020年" },
                  { value: "2021", label: "2021年" },
                ])}
              </div>

              {/* 種別選択 */}
              <div className="form-kinds">
                <IconText icon={faShapes} text="種別" className="form-kinds-itemName" classNameText="text" />
                {renderRadioGroup(typeOptions)}
              </div>

              {/* データダウンロードボタン */}
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

import React from "react";
import "./App.scss";
import Header from "./components/header/header";
import TransactionPrice from "./pages/transaction-price/transaction-price";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <TransactionPrice />
      </main>
      <Footer />
    </div>
  );
}

export default App;

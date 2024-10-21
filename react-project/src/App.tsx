import "./App.scss";
import Header from "./components/header/header";
import TransactionPrice from "./pages/transaction-price/transaction-price";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Header />
      </header>

      <main className="main">
        <TransactionPrice />
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;

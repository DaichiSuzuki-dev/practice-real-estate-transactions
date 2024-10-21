import "./App.scss";
import Header from "./components/layouts/header";
import TransactionPrice from "./pages/transaction-price";
import Footer from "./components/layouts/footer";

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

import "./App.scss";
import Header from "./components/layouts/header";
import PropertyTransaction from "./pages/property-transaction";
import Footer from "./components/layouts/footer";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Header />
      </header>

      <main className="main">
        <PropertyTransaction />
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;

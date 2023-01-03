import Navbar from "./components/Navbar/Navbar";
import Header from "./components/header/Header";
import About from "./components/About/about";
import Renaissance from "./components/Renaissance/Renaissance";
import "./App.css";

function App() {
  return (
    <div className="content">
      <Navbar />
      <Header />
      <About />
      <Renaissance />
    </div>
  );
}

export default App;

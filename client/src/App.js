import Navbar from "./components/Navbar/Navbar";
import Header from "./components/header/Header";
import About from "./components/About/about";
import Renaissance from "./components/Renaissance/Renaissance";
import Startups from "./components/Startups/Startups";
import "./App.css";

function App() {
  return (
    <div className="content">
      <Navbar />
      <Header />
      <About />
      <Renaissance />
      <Startups />
    </div>
  );
}

export default App;

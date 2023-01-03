import Navbar from "./components/Navbar/Navbar";
import Header from "./components/header/Header";
import About from "./components/About/about";
import GetInTouch from "./components/GetInTouch/GetInTouch";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Renaissance from "./components/Renaissance/Renaissance";
import Startups from "./components/Startups/Startups";

function App() {
  return (
    <div className="content">
      <Navbar />
      <ScrollToTop />
      <Header />
      <About />
      <Renaissance />
      <Startups />
      <GetInTouch />
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/header/Header";
import About from "./components/About/about";
import GetInTouch from "./components/GetInTouch/GetInTouch";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Renaissance from "./components/Renaissance/Renaissance";
import Startups from "./components/Startups/Startups";
import Appreciation from "./components/Appreciation/Appreciation";

function App() {
  return (
    <div className="">
      <Navbar />
      <ScrollToTop />
      <Header />
      <About />
      <Appreciation />
      <Startups />
      <Renaissance />
      <GetInTouch />
    </div>
  );
}

export default App;

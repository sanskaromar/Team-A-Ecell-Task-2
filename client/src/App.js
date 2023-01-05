import Navbar from "./components/Navbar/Navbar";
import Header from "./components/header/Header";
import About from "./components/About/about";
import GetInTouch from "./components/GetInTouch/GetInTouch";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Renaissance from "./components/Renaissance/Renaissance";
import Startups from "./components/Startups/Startups";
import Appreciation from "./components/Appreciation/Appreciation";
import Events from "./components/events/Events";
import Participation from "./components/participation/Participation";
import "./App.css";

function App() {
  return (
    <div className="w-screen">
      <Navbar />
      {/* <ScrollToTop /> */}
      <Header />
      <Participation />
      <About />
      <Events />
      <Renaissance />
      <Startups />
      <Appreciation />
      <GetInTouch />
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/header/Header";
import About from "./components/About/about";
import GetInTouch from "./components/GetInTouch/GetInTouch";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Renaissance from "./components/Renaissance/Renaissance";
import Startups from "./components/Startups/Startups";
import Events from "./components/events/Events";

function App() {
  return (
    <div className="w-screen">
      <Navbar />
      {/* <ScrollToTop /> */}
      <Header />
      <Events />
      <About />
      {/* <Renaissance /> */}
      {/* <Startups />
      <GetInTouch /> */}
    </div>
  );
}

export default App;

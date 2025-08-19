import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About"
import HomePage from "./Components/HomePage"
import Service from "./Components/Service";
import Portfolio from "./Components/Portfolio";
import ContactUs from "./Components/ContactUs";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

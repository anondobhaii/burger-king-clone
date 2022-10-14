import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Aboutbk from "./pages/Aboutbk";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Order from "./pages/Order";
import Reorder from "./pages/Reorder";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        {/* <Route path="/reorder" element={<Reorder />} /> */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-bk" element={<Aboutbk />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;

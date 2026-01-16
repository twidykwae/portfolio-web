import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar.jsx";
import Footer from "./components/footer.jsx";
import Home from "./pages/Home.jsx";
import Photography from "./pages/Photography.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photography" element={<Photography />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

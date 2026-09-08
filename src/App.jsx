import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PageNotfound from "./pages/PageNotfound";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageNotfound />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

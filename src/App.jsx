import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Shell from "./components/site/Shell";
import { TransitionProvider } from "./components/site/Transition";
import PageNotfound from "./pages/PageNotfound";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <BrowserRouter>
      <TransitionProvider>
        <Routes>
          <Route element={<Shell />}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<PageNotfound />} />
          </Route>
        </Routes>
      </TransitionProvider>
    </BrowserRouter>
  );
}

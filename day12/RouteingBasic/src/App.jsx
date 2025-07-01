import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import VIewPage from "./pages/VIewPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <div>
      <h1>Hello from React</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/view" element={<VIewPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

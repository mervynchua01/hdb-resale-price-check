import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import ListingsPage from "./pages/ListingsPage/ListingsPage";
import ShortlistPage from "./pages/ShortlistPage/ShortlistPage";



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/listings" element={<ListingsPage />} />
        <Route path="/shortlist" element={<ShortlistPage />} />
      </Routes>
    </>
  );
};

export default App;

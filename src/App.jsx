import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import ListingsPage from "./pages/ListingsPage/ListingsPage";
import ShortlistPage from "./pages/ShortlistPage/ShortlistPage";
import NavBar from "./components/Navbar";

const App = () => {
  return (
    <>
      <NavBar />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/listings" element={<ListingsPage />} />
          <Route path="/shortlist" element={<ShortlistPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

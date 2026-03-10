import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
// import LandingPage from "./pages/LandingPage";
// import ListingsPage from "./pages/ListingsPage";
// import ShortlistPage from "./pages/ShortlistPage";



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
};

export default App;

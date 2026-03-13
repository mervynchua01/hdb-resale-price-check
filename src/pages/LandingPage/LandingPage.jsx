import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import TownDropdown from "./components/TownDropdown";
import FlatTypeDropdown from "./components/FlatTypeDropdown";
import BudgetDropdown from "./components/BudgetDropdown";
import "./LandingPage.css";

export default function LandingPage() {
  const [selectedTown, setSelectedTown] = useState("");
  const [selectedFlatTypes, setSelectedFlatTypes] = useState([]);
  const [priceRange, setPriceRange] = useState([200000, 1500000]);
  const navigate = useNavigate();

  function handleSearch() {
    navigate(
      `/listings?town=${selectedTown}&minPrice=${priceRange[0]}&maxPrice=${priceRange[1]}&flatTypes=${selectedFlatTypes.join(",")}`,
    );
  }

  return (
    <div className="landing-container">
      <div className="landing-hero">
        <h1>
          <div> Find your dream HDB, </div>
          <span> your next chapter awaits.</span>
        </h1>
      </div>

      <Paper className="search-bar" elevation={1}>
        <TownDropdown
          selectedTown={selectedTown}
          setSelectedTown={setSelectedTown}
        />
        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
        <FlatTypeDropdown
          selectedFlatTypes={selectedFlatTypes}
          setSelectedFlatTypes={setSelectedFlatTypes}
        />
        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
        <BudgetDropdown priceRange={priceRange} setPriceRange={setPriceRange} />
        <IconButton
          onClick={handleSearch}
          sx={{
            backgroundColor: "#FF385C",
            color: "white",
            ml: 1,
            width: 48,
            height: 48,
            "&:hover": { backgroundColor: "#E31C5F" },
          }}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
}

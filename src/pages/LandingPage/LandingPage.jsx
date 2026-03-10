import { useState } from "react";
import {useNavigate} from "react-router-dom"
import TownDropdown from "./components/TownDropdown";
import FlatTypeDropdown from "./components/FlatTypeDropdown";
import BudgetDropdown from "./components/BudgetDropdown";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";



export default function LandingPage() {
  const [selectedTown, setSelectedTown] = useState(null);
  const [selectedFlatTypes, setSelectedFlatTypes] = useState([]);
  const [priceRange, setPriceRange] = useState([200000, 1500000]);
  const navigate = useNavigate();

function handleSearch() {
  navigate(
    `/listings?town=${selectedTown}&minPrice=${priceRange[0]}&maxPrice=${priceRange[1]}&flatTypes=${selectedFlatTypes.join(",")}`,
  );
}

  return (
    <>
      {/* <Navbar /> */}
      <h1>Search your next HDB resale flat</h1>
      <div className="search-bar">
        <TownDropdown
          selectedTown={selectedTown}
          setSelectedTown={setSelectedTown}
        />
        <FlatTypeDropdown
          selectedFlatTypes={selectedFlatTypes}
          setSelectedFlatTypes={setSelectedFlatTypes}
        />

        <BudgetDropdown priceRange={priceRange} setPriceRange={setPriceRange} />
        <IconButton
          onClick={handleSearch}
          aria-label="search"
          sx={{ backgroundColor: "#008188", color: "white" }}
        >
          <SearchIcon />
        </IconButton>
      </div>
    </>
  );
}

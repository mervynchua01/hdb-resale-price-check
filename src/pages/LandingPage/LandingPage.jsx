import { useState } from "react";
import TownDropdown from "./components/TownDropdown";
import FlatTypeDropdown from "./components/FlatTypeDropdown";
import BudgetDropdown from "./components/BudgetDropdown";

export default function LandingPage() {
  const [selectedTown, setSelectedTown] = useState(null);
  const [selectedFlatTypes, setSelectedFlatTypes] = useState([]);
  const [priceRange, setPriceRange] = useState([200000, 1500000]);

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
        <button>Search</button>
      </div>
    </>
  );
}

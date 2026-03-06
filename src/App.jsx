import "./App.css";
import { useState } from "React";

const TOWNS = [
  "ANG MO KIO",
  "BEDOK",
  "BISHAN",
  "BUKIT BATOK",
  "BUKIT MERAH",
  "BUKIT PANJANG",
  "BUKIT TIMAH",
  "CENTRAL AREA",
  "CHOA CHU KANG",
  "CLEMENTI",
  "GEYLANG",
  "HOUGANG",
  "JURONG EAST",
  "JURONG WEST",
  "KALLANG/WHAMPOA",
  "MARINE PARADE",
  "PASIR RIS",
  "PUNGGOL",
  "QUEENSTOWN",
  "SEMBAWANG",
  "SENGKANG",
  "SERANGOON",
  "TAMPINES",
  "TOA PAYOH",
  "WOODLANDS",
  "YISHUN",
];

const App = () => {
  const [selected, setSelected] = useState([]);

  const toggleTown = (town) => {
    if (selected.includes(town)) {
      setSelected(selected.filter((t) => t !== town));
    } else {
      setSelected([...selected, town]);
    }
  };

  return (
    <div>
      <h1>Pick your neighbourhoods</h1>
      <div className="town-grid">
        {TOWNS.map((town) => (
          <div
            key={town}
            className={
              selected.includes(town) ? "town-card active" : "town-card"
            }
            onClick={() => toggleTown(town)}
          >
            {town}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

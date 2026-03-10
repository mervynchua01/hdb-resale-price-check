import Chip from "@mui/material/Chip";

const TOWNS = [
  "ANG MO KIO",
  "BEDOK",
  "BISHAN",
  "BUKIT BATOK",
  "BUKIT MERAH",
  "BUKIT PANJANG",
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

export default function TownDropDown({ selectedTown, setSelectedTown }) {
  function handleSelect(town) {
    if (selectedTown === town) {
      setSelectedTown(null);
    } else {
      setSelectedTown(town);
    }
  }

  return (
    <>
      {TOWNS.map((town) => (
        <Chip
          key={town}
          label ={town}
          variant= {selectedTown === town ? "filled" : "outlined"}
          onClick={() => handleSelect(town)}
          color={selectedTown === town? "primary" : "default"}
        />
      ))}
    </>
  );
}

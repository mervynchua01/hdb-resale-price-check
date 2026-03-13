import Chip from "@mui/material/Chip";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

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

export default function TownDropdown({ selectedTown, setSelectedTown }) {
  return (
    <FormControl size="small" sx={{ minWidth: 180 }}>
      <InputLabel>Town</InputLabel>
      <Select
        value={selectedTown || ""}
        label="Town"
        onChange={(e) => setSelectedTown(e.target.value)}
      >
        {TOWNS.map((town) => (
          <MenuItem key={town} value={town}>
            {town}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
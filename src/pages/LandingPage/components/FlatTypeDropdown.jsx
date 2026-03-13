import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import OutlinedInput from "@mui/material/OutlinedInput";

const FLAT_TYPES = ["2 ROOM", "3 ROOM", "4 ROOM", "5 ROOM", "EXECUTIVE"];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function FlatTypeDropdown({
  selectedFlatTypes,
  setSelectedFlatTypes,
}) {
  function handleChange(e) {
    setSelectedFlatTypes(e.target.value);
  }

  return (
    <FormControl size="small" sx={{ minWidth: 160 }}>
      <InputLabel>Flat Type</InputLabel>
      <Select
        multiple
        value={selectedFlatTypes}
        input={<OutlinedInput label="Flat Type" />}
        onChange={handleChange}
        renderValue={(selected) =>
          selected.length === 0 ? "Any" : `${selected.length} selected`
        }
      >
        {FLAT_TYPES.map((type) => (
          <MenuItem key={type} value={type}>
            <Checkbox checked={selectedFlatTypes.includes(type)} />
            <ListItemText primary={type} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
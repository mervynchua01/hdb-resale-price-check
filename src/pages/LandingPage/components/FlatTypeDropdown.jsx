import { Chip } from "@mui/material";

const FLAT_TYPES = ["2 ROOM", "3 ROOM", "4 ROOM", "5 ROOM", "EXECUTIVE"];

export default function FlatTypeDropdown( { selectedFlatTypes , setSelectedFlatTypes }) {

function handleSelect(type) {
  if (selectedFlatTypes.includes(type)) {
    setSelectedFlatTypes(selectedFlatTypes.filter((t) => t !== type))
  } else {
    setSelectedFlatTypes([...selectedFlatTypes, type])
  }
}


return (
  <>
    {FLAT_TYPES.map((type) => (
      <Chip
        key={type}
        label={type}
        variant= {selectedFlatTypes.includes(type) ? "filled" : "outlined" }
        onClick={() => handleSelect(type)}
        color={selectedFlatTypes.includes(type) ? "primary" : "default"}
      /> 
    ))}  
  </>
)}
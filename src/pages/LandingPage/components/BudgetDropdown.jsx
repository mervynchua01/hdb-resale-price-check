import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box"
const MIN_PRICE = 200000;
const MAX_PRICE = 1500000;

export default function BudgetDropdown( {priceRange , setPriceRange }) {

function handleChange(event, newValue) {
  setPriceRange(newValue);
}


return (
  <>
    <p>${priceRange[0]} – ${priceRange[1]}</p>
    <Box sx={{ width: 300 }}>
      <Slider
        value={priceRange}
        onChange={handleChange}
        min={MIN_PRICE}
        max={MAX_PRICE}
        step={10000}
        disableSwap
        valueLabelDisplay="auto"
      />
    </Box>
  </>
)}

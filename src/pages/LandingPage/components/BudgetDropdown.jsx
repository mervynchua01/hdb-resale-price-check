import { useState } from "react";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const MIN_PRICE = 200000;
const MAX_PRICE = 1500000;

export default function BudgetDropdown({ priceRange, setPriceRange }) {
  const [anchorEl, setAnchorEl] = useState(null);

  function handleOpen(e) {
    setAnchorEl(e.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <>
      <Button variant="outlined" onClick={handleOpen} size="small">
        S${priceRange[0].toLocaleString()} – S${priceRange[1].toLocaleString()}
      </Button>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Box sx={{ p: 3, width: 300 }}>
          <Typography variant="body2" gutterBottom>
            Budget range
          </Typography>
          <Slider
            value={priceRange}
            onChange={(e, newValue) => setPriceRange(newValue)}
            min={MIN_PRICE}
            max={MAX_PRICE}
            step={10000}
            disableSwap
            valueLabelDisplay="auto"
            valueLabelFormat={(v) => `S$${v.toLocaleString()}`}
          />
        </Box>
      </Popover>
    </>
  );
}
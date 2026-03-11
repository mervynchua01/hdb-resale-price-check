import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
export default function ListingsCard({ flat }) {
  const pricePerSqm = Math.round(flat.resale_price / flat.floor_area_sqm);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">
          {flat.town} · {flat.flat_type}
        </Typography>
        <Typography variant="body2">
          {flat.block} {flat.street_name}
        </Typography>
        <Typography variant="body2">{flat.storey_range}</Typography>
        <Typography variant="body2">{flat.floor_area_sqm} sqm</Typography>
        <Typography variant="body2">{flat.remaining_lease}</Typography>
        <Typography variant="body2">${pricePerSqm} psm</Typography>
        <Typography variant="body2">${flat.resale_price}</Typography>
      </CardContent>
    </Card>
  );
}

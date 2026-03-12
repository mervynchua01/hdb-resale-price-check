import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";

export default function ListingsCard({ flat, shortlist, onAdd, onRemove }) {
  const pricePerSqm = Math.round(flat.resale_price / flat.floor_area_sqm);
const shortlistedRecord = shortlist.find(
  (record) => record.fields.Vault_Id === flat.vault_id
);
  const isShortlisted = shortlistedRecord !== undefined;

  const recordId = shortlistedRecord ? shortlistedRecord.id : undefined;

  function handleHeartClick() {
    if (isShortlisted) {
      onRemove(recordId);
    } else {
      onAdd(flat);
    }
  }

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
        <IconButton onClick={handleHeartClick}>
          {isShortlisted ? (
            <FavoriteIcon sx={{ color: "red" }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
      </CardContent>
    </Card>
  );
}

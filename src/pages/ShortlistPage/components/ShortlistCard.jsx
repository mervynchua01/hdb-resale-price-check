import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

export default function ShortlistCard({ record, onRemove }) {
  const pricePerSqm = Math.round(
    record.fields.Resale_Price / record.fields["Floor Area Sqm"],
  );

  return (
    <Card
      elevation={2}
      sx={{
        height: "100%",
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent
        sx={{
          pb: 1,
          display: "flex",
          flexDirection: "column",
          gap: 0.75,
          flex: 1,
        }}
      >
        <Typography variant="subtitle1" fontWeight={700}>
          {record.fields.Town} · {record.fields.Flat_Type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {record.fields.Block} {record.fields.Street_Name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {record.fields.Storey_Range} · {record.fields["Floor Area Sqm"]} sqm
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {record.fields.Remaining_Lease}
        </Typography>

        <Divider sx={{ my: 1 }} />

        <Typography variant="caption" color="text.secondary">
          S${pricePerSqm.toLocaleString()} psm
        </Typography>

        <Typography variant="h6" fontWeight={800} sx={{ lineHeight: 1.1 }}>
          S${Number(record.fields.Resale_Price).toLocaleString()}
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: "flex-end", pt: 0 }}>
        <IconButton onClick={() => onRemove(record.id)}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

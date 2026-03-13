import { useState, useEffect } from "react";
import { getShortlist, removeFromShortlist } from "../../services";
import ShortlistCard from "./components/ShortlistCard";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export default function ShortlistPage() {
  const [shortlist, setShortlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getShortlist();
        setShortlist(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  async function handleRemove(recordId) {
    await removeFromShortlist(recordId);
    setShortlist(shortlist.filter((record) => record.id !== recordId));
  }

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        spacing={1}
        sx={{ mb: 2 }}
      >
        <Box>
          <Box component="h2" sx={{ m: 0 }}>
            Saved Listings
          </Box>
        </Box>
      </Stack>

      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, minmax(0, 1fr))",
            md: "repeat(3, minmax(0, 1fr))",
            lg: "repeat(4, minmax(0, 1fr))",
          },
          alignItems: "stretch",
        }}
      >
        {shortlist.map((record) => (
          <ShortlistCard
            key={record.id}
            record={record}
            onRemove={handleRemove}
          />
        ))}
      </Box>
    </Container>
  );
}

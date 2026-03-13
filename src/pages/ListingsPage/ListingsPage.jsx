import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ListingsCard from "./components/ListingsCard";
import {
  fetchListings,
  getShortlist,
  addToShortlist,
  removeFromShortlist,
} from "../../services";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export default function ListingsPage() {
  const [searchParams] = useSearchParams();
  const town = searchParams.get("town");
  const [listingsData, setListingsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [shortlist, setShortlist] = useState([]);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * 20;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [data, shortlistData] = await Promise.all([
          fetchListings(town, offset),
          getShortlist(),
        ]);
        setListingsData(data);
        setShortlist(shortlistData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page, town, offset]);

  async function handleAdd(flat) {
    const newRecord = await addToShortlist(flat);
    setShortlist([...shortlist, newRecord]);
  }

  async function handleRemove(recordId) {
    await removeFromShortlist(recordId);
    setShortlist(shortlist.filter((record) => record.id !== recordId));
  }

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

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
            {town ? `${town} Listings` : "All Listings"}
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
        {listingsData.map((flat) => (
          <ListingsCard
            key={flat._id}
            flat={flat}
            shortlist={shortlist}
            onAdd={handleAdd}
            onRemove={handleRemove}
          />
        ))}
      </Box>

      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 3 }}>
        <Button
          variant="outlined"
          onClick={() => setPage((currentPage) => currentPage - 1)}
          disabled={page === 1}
        >
          Prev
        </Button>
        <Button
          variant="contained"
          onClick={() => setPage((currentPage) => currentPage + 1)}
          disabled={listingsData.length < 20}
        >
          Next
        </Button>
      </Stack>
    </Container>
  );
}

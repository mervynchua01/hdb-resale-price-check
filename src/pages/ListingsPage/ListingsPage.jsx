import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchListings } from "../../services";
import ListingsCard from "./components/ListingsCard";

export default function ListingsPage() {
  const [searchParams] = useSearchParams();
  const town = searchParams.get("town");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  const flatTypes = searchParams.get("flatTypes");
  const [listingsData, setListingsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchListings();
        console.log(data);
        setListingsData(data);
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

  return (
    <>
      <h2>Listings Page</h2>
      {listingsData.map((flat) => (
        <ListingsCard key={flat.vault_id} flat={flat} />
      ))}
    </>
  );
}

import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ListingsCard from "./components/ListingsCard";
import { fetchListings, getShortlist, addToShortlist, removeFromShortlist } from "../../services";

export default function ListingsPage() {
  const [searchParams] = useSearchParams();
  const town = searchParams.get("town");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  const flatTypes = searchParams.get("flatTypes");
  const [listingsData, setListingsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [shortlist, setShortlist] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const [data, shortlistData] = await Promise.all([
        fetchListings(town),
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
}, []);

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
    <>
      <h2>Listings Page</h2>
      {listingsData.map((flat) => (
        <ListingsCard 
          key={flat.vault_id} 
          flat={flat} 
          shortlist={shortlist}
          onAdd={handleAdd}
          onRemove={handleRemove}/>
      ))}
    </>
  );
}

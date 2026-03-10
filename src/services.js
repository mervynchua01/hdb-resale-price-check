export async function fetchListings() {
  const datasetId = "d_8b84c4ee58e3cfc0ece0d773c8ca6abc"
  const response = await fetch(`https://api-production.data.gov.sg/v2/public/api/datasets/${datasetId}/list-rows`);
  if (!response.ok) {
    throw new Error("Failed to fetch listings");
  }
  const data = await response.json();
  return data;
}
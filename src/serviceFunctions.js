export async function getData() {
  const datasetId = "d_8b84c4ee58e3cfc0ece0d773c8ca6abc";
  const url = `https://data.gov.sg/api/action/datastore_search?resource_id=${datasetId}`;
  const apiKey = import.meta.env.VITE_API_KEY;
  const headers = apiKey ? { "x-api-key": apiKey } : {};
  try {
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

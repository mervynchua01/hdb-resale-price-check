const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_NAME = "Table 1";

export async function fetchListings() {
  const datasetId = "d_8b84c4ee58e3cfc0ece0d773c8ca6abc";
  const response = await fetch(
    `https://api-production.data.gov.sg/v2/public/api/datasets/${datasetId}/list-rows`,
    {
      method: "GET",
      headers: {
        Accept: "*/*",
      },
    },
  );
  if (!response.ok) {
    throw new Error("Failed to fetch listings");
  }
  const data = await response.json();
  return data.data.rows;
}

export async function getShortlist() {
  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch shortlist");
  }
  const result = await response.json();
  return result.records;
}

export async function addToShortlist(flat) {
  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/Table%201`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      records: [
        {
          fields: {
            Vault_Id: flat.vault_id,
            Town: flat.town,
            Flat_Type: flat.flat_type,
            Block: flat.block,
            Street_Name: flat.street_name,
            Storey_Range: flat.storey_range,
            "Floor Area Sqm": parseFloat(flat.floor_area_sqm),
            Remaining_Lease: flat.remaining_lease,
            Resale_Price: parseFloat(flat.resale_price),
            Month: flat.month,
            
          },
        },
      ],
    }),
  });
  if (!response.ok) {
    throw new Error("Failed to add to shortlist");
  }
  const result = await response.json();
  return result.records[0];
}

export async function removeFromShortlist(recordId) {
  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}/${recordId}`;
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to remove from shortlist");
  }
  const result = await response.json();
  return result;
}

export async function get(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = (await response.json()) as unknown; // can use zod library to validate data and get type
  return data;
}

// export async function get<T>(url: string) {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error('Failed to fetch data.');
//     }

//     const data = await response.json() as unknown;
//     return data as T;
//   }

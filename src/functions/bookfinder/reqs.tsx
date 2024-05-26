export default async function reqs(searchTerm: string, setResult: any) {
  try {
    const response = await fetch(
      "https://www.googleapis.com/books/v1/volumes?q=" +
        searchTerm.replaceAll(" ", "+") +
        "&maxResults=40"
    );
    const data = await response.json();
    setResult(data.items);
  } catch (error) {
    console.log(error);
  }
}

export async function findbook(json: object) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(json),
  };

  try {
    const response = await fetch("https://krispaul17.pythonanywhere.com/api/bookresult", requestOptions);
    const data = await response.json(); // Converts the response body to JSON
    return data; // Return the data from the function
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return null; // Return null or an appropriate error object/message
  }
}

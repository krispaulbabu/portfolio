export default async function reqs(searchTerm: string, setResult:any) {
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

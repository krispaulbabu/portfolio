export default async function reqs(searchTerm: string, setResult: any) {
  console.log(
    "https://www.googleapis.com/books/v1/volumes?q=" +
      searchTerm.replaceAll(" ", "+") +
      "&key=AIzaSyABXPFbtWePw25IMHgWtGCItN57X7fgv30"
  );
  try {
    const response = await fetch(
      "https://www.googleapis.com/books/v1/volumes?q=" +
        searchTerm.replaceAll(" ", "+") +
        "&key=AIzaSyABXPFbtWePw25IMHgWtGCItN57X7fgv30&maxResults=40"
    );
    const data = await response.json();
    setResult(data.items);
  } catch (error) {
    console.log(error);
  }
}

export function componentDidMount(json: object) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(json),
  };
  fetch("http://krispaul17.pythonanywhere.com/api/add_message", requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

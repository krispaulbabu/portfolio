export default function renderCollection(bookCollection: any) {
  if (bookCollection.length != 0) {
    return (
      <div id="collectionMetadata">
        <h1 style={{ textAlign:"center", fontSize:"4vh", fontWeight:"1000", marginBottom:"5vh"}}>Your collection</h1>
        {bookCollection.map((books: any) => (
          <div id="collectionBook" key={books["id"]}>
            <img
              id="collectionImage"
              src={
                    typeof books["volumeInfo"]["imageLinks"] != "undefined"
                      ? "https://books.google.com/books/publisher/content/images/frontcover/" +
                        books["id"] +
                        "?fife=w470-h600&source=gbs_api"
                      : "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg"
              }
            ></img>
            <div>
              <h1 style={{ fontFamily: "inter", fontWeight: "500", fontSize:"2vh"}}>
                {books["volumeInfo"]["title"]}
              </h1>
              <p style={{ fontWeight: "100", fontSize:"1.8vh"}}>
                {typeof books["volumeInfo"]["authors"] != "undefined"
                  ? books["volumeInfo"]["authors"][0]
                  : "Unknown author"}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

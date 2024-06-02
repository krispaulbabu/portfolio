import { Button } from "@nextui-org/react";
import { Rating } from "@mui/material";
import { findbook } from "./reqs";
import Image from "next/image";
import toTitleCase from "./titleCase";
import Router from "next/router";

export default function renderCollection(
  bookCollection?: any,
  book?: any,
  idRatings?: any,
  spinner?: any,
  setSpinner?: any,
  setSelected?: any,
  setIdRatings?: any,
  handleRatingChange?: any,
  setButtonStates?: any,
  toggleButtonState?: any
) {
  function handleFetchAndNavigate(bookCollection: any) {
    setSpinner("spin");
    findbook(bookCollection)
      .then((result) => {
        Router.push({
          pathname: "/results",
          query: { result: JSON.stringify(result) },
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  if (bookCollection.length != 0) {
    return (
      <>
        <div id="collectionMetadata">
          {bookCollection.map((books: any) => (
            <div
              className="instance"
              key={books["id"]}
              style={{ display: "flex", flexDirection: "column", gap: ".5vh" }}
            >
              <div id="_instance">
                <div id="collectionBook">
                  <Image
                    unoptimized
                    alt="book cover image"
                    height={600}
                    width={470}
                    id="collectionImage"
                    style={{ borderRadius: "5px" }}
                    src={
                      typeof books["volumeInfo"]["imageLinks"] != "undefined"
                        ? "https://books.google.com/books/publisher/content/images/frontcover/" +
                          books["id"] +
                          "?fife=w470-h600&source=gbs_api"
                        : "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg"
                    }
                  ></Image>
                  <div>
                    <h1
                    className="collectiontext"
                    >
                      {toTitleCase(books["volumeInfo"]["title"])}
                    </h1>
                    <p
                    className="collectionauthor"
                    >
                      {typeof books["volumeInfo"]["authors"] != "undefined"
                        ? books["volumeInfo"]["authors"][0]
                        : "Unknown author"}
                    </p>
                  </div>
                </div>
                <Button
                  className="deleteButton"
                  disableRipple
                  style={{
                    fontWeight: "1000",
                    fontSize: "1.5vh",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setSelected(books);
                    toggleButtonState(books["id"]);
                  }}
                >
                  Delete
                </Button>
              </div>
              <Rating
                emptyLabelText="rating"
                className="rating"
                name="hover-feedback"
                defaultValue={1}
                value={idRatings[books["id"]] || 1}
                precision={1}
                onChange={(event, value) => {
                  books["rating"] = value;
                  // console.log(bookCollection["rating"])
                  console.log(bookCollection[0]["rating"]);
                  handleRatingChange(books["id"], value);
                }}
              />
            </div>
          ))}
          <button
            onClick={() => {
              handleFetchAndNavigate(bookCollection);
            }}
            id="findbookbutton"
          >
            Find Books
          </button>
        </div>
      </>
    );
  } else return <></>;
}

const styles = {};

import { Button } from "@nextui-org/react";
import Link from "next/link";
import { Rating } from "@mui/material";
import { findbook } from "./reqs";
import Image from "next/image";
import toTitleCase from "./titleCase";
import Router from "next/router";
import { useEffect } from "react";

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
                      style={{
                        fontFamily: "inter",
                        fontWeight: "500",
                        fontSize: "2vh",
                        marginRight: "1vw",
                        width: "15vw",
                      }}
                    >
                      {toTitleCase(books["volumeInfo"]["title"])}
                    </h1>
                    <p
                      style={{
                        fontWeight: "100",
                        fontSize: "1.8vh",
                        width: "15vw",
                        transform: "translateY(-10px)",
                      }}
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
            style={{
              cursor: "pointer",
              color: "white",
              borderWidth: "0px",
              fontWeight: "1000",
              fontSize: "1.5vh",
              height: "5vh",
              width: "25vw",
              marginLeft: "4.5vh",
              backgroundColor: "rgba(97, 103, 217, 0.402)",
              borderRadius: "1vh",
              marginTop: "2vh",
              marginBottom: "5vh",
            }}
          >
            Find Books
          </button>
        </div>
      </>
    );
  } else return <></>;
}

const styles = {};

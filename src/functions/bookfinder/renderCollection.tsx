import { Button } from "@nextui-org/react";
import { Rating } from "@mui/material";
import { componentDidMount } from "./reqs";
import Image from "next/image";

export default function renderCollection(
  bookCollection: any,
  setSelected: any,
  book: any,
  idRatings: any,
  setIdRatings: any,
  handleRatingChange: any
) {
  if (bookCollection.length != 0) {
    return (
      <>
        <h1
          style={{
            textAlign: "center",
            fontSize: "4vh",
            fontWeight: "1000",
          }}
        >
          Collection
        </h1>
        <div id="collectionMetadata">
          {bookCollection.map((books: any) => (
            <div
              className="instance"
              key={books["id"]}
              style={{ display: "flex", flexDirection: "column", gap: ".5vh" }}
            >
              <div id="omm">
                <div id="collectionBook">
                  <Image
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
                      {books["volumeInfo"]["title"]}
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
                  style={{
                    fontWeight: "1000",
                    fontSize: "1.5vh",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelected(books)}
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
                  handleRatingChange(books["id"], value);
                }}
              />
            </div>
          ))}
          <Button
            disableRipple
            onClick={() => {
              console.log("something else");
              componentDidMount(idRatings);
            }}
            style={{
              cursor: "pointer",
              color: "white",
              borderWidth: "0px",
              fontWeight: "1000",
              fontSize: "1.5vh",
              height: "5vh",
              width: "10vw",
              backgroundColor: "rgba(97, 103, 217, 0.402)",
              borderRadius: "1vh",
              marginLeft: "10vw",
              marginTop: "2vh",
              marginBottom: "5vh",
            }}
          >
            Find Books
          </Button>
        </div>
      </>
    );
  } else
    return (
      <>
        <h1
          style={{
            textAlign: "center",
            fontSize: "4vh",
            fontWeight: "1000",
          }}
        >
          Collection
        </h1>
      </>
    );
}

const styles = {};

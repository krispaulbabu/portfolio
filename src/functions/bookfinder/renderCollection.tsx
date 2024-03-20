import { Button } from "@nextui-org/react";
import { useState } from "react";

export default function renderCollection(bookCollection: any, setSelected:any,book:any,setRateMode:any, rateMode:any) {

  if (bookCollection.length != 0) {
    return (
      <>
        <h1
          style={{
            textAlign: "center",
            fontSize: "4vh",
            fontWeight: "1000",
            marginBottom: "5vh",
          }}
        >
          Your collection
        </h1>
        <div id="collectionMetadata">
          {bookCollection.map((books: any) => (
            <div id="omm">
              <div id="collectionBook">
                <img
                  id="collectionImage"
                  style={{ borderRadius: "5px" }}
                  src={
                    typeof books["volumeInfo"]["imageLinks"] != "undefined"
                      ? "https://books.google.com/books/publisher/content/images/frontcover/" +
                        books["id"] +
                        "?fife=w470-h600&source=gbs_api"
                      : "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg"
                  }
                ></img>
                <div>
                  <h1
                   key={books["id"]}
                    style={{
                      fontFamily: "inter",
                      fontWeight: "500",
                      fontSize: "2vh",
                      marginRight:"1vw",
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
                style={{ fontWeight: "1000", fontSize: "1.5vh" }}
                disableRipple
                onPress={() => setSelected(books)}
              >
                Delete
              </Button>
              <Button
                className={rateMode}
                style={{ fontWeight: "1000", fontSize: "1.5vh" }}
                disableRipple
                onPress={() => {
                  setRateMode("rateButtonClicked")
                }}
              >
                Rate
              </Button>
            </div>
          ))}
        </div>
      </>
    );
  }
  else return(<>
          <h1
          style={{
            textAlign: "center",
            fontSize: "4vh",
            fontWeight: "1000",
            marginBottom: "5vh",
          }}
        >
          Your collection
        </h1></>)
}

const styles = {};



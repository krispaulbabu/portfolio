import { IconButton, Tooltip } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import "/src/app/bookfinder.css";
import SearchIcon from "@mui/icons-material/Search";
import { Input } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CloseIcon from "@mui/icons-material/Close";
import ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom/client';

let bookCollection = new Array();

export default function Bookfinder() {
  const [result, setResult] = useState([]);
  const [input, setInput] = useState("");
  const [book, setSelected] = useState(null);
  const [iconHover, setHover]=useState("")

  const iconRef=useRef(null)

  useEffect(() => {
    if (book != null) {
      if (!bookCollection.includes(book)) {
        bookCollection = [...bookCollection, book];
        console.log(bookCollection);
      } else {
        bookCollection = bookCollection.filter((item) => item !== book);
        console.log(bookCollection);
      }
      setSelected(null);
    }
  }, [book]);



  async function reqs(searchTerm: string) {
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

  function renderResult() {
    if (typeof result !== "undefined" && result.length !== 0) {
      // console.log(result);
      return (
        <div id="bookContainer">
          {result.map((values) => (
            <div key={values["id"]} className="book">
              <Tooltip
                title={
                  <>
                    <b>Title: </b>
                    {values["volumeInfo"]["title"]}
                    <br />
                    <b>Author: </b>
                    {typeof values["volumeInfo"]["authors"] != "undefined"
                      ? values["volumeInfo"]["authors"][0]
                      : "No author"}
                    <br />
                    <b>Description: </b>
                    <p
                      style={{
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {values["volumeInfo"]["description"]}
                    </p>
                  </>
                }
                followCursor
                arrow
              >
                <img
                  className="bookcover"
                  onClick={() => {
                    setSelected(values);
                    // handleBookSelected();
                    // console.log(bookCollection);
                  }}
                  src={
                    typeof values["volumeInfo"]["imageLinks"] != "undefined"
                      ? "https://books.google.com/books/publisher/content/images/frontcover/" +
                        values["id"] +
                        "?fife=w470-h600&source=gbs_api"
                      : "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg"
                  }
                ></img>
              </Tooltip>
              <label className="booktitle">
                {" "}
                {values["volumeInfo"]["title"]}{" "}
              </label>{" "}
              <br />
              <label className="bookauthor">
                {typeof values["volumeInfo"]["authors"] != "undefined"
                  ? values["volumeInfo"]["authors"][0]
                  : "No author"}
              </label>
            </div>
          ))}
        </div>
      );
    }
  }

  function renderCollection() {
    if(bookCollection.length!=0){
      return (
        <div id="collection">
        {bookCollection.map((books) => (
          <>
            {/* <label style={{color:"black"}}>{books["id"]}</label><br/> */}
            <img
              id="collectionImage"
              src={
                typeof books["volumeInfo"]["imageLinks"] != "undefined"
                  ? books["volumeInfo"]["imageLinks"]["thumbnail"]
                  : "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg"
              }
            ></img>
            <label> Something </label>
          </>
        ))}
      </div>
      );
    }
    else return(
      <div id="collection">
        Your book collection is empty
      </div>
    )
  }
  useEffect(()=>{
    if(iconHover=="true"){
      const root=ReactDOM.createRoot(document.getElementById("someId") as HTMLElement);
      root.render(<>
      {renderCollection()}
      </>)

    }
    if(iconHover=="false"){
      const root=ReactDOM.createRoot(document.getElementById("someId") as HTMLElement);
      root.render(<>
      </>)
    }

  },[iconHover])
  return (
    <>
      <div className="bookFinder">
        <label id="quote">
          “Beauty is about finding the right fit, the most natural fit. To be
          perfect, you have to feel perfect about yourself—avoid trying to be
          something you’re not.” - The Lost Hero
        </label>
        <Input
          disableUnderline
          startAdornment={<SearchIcon style={{ color: "#3e5c74" }} />}
          endAdornment={<CloseIcon style={{ color: "#3e5c74" }} />}
          className="bookSearch"
          onChange={(reply) => {
            if (reply.target.value.length !== 0) setInput(reply.target.value);
          }}
          onKeyDown={async (key) => {
            if (key.key === "Enter" && input.length !== 0) {
              console.log(input);
              console.log(
                "https://openlibrary.org/search.json?q=" +
                  input.replaceAll(" ", "+")
              );
              reqs(input);
            }
          }}
        />
        <AutoStoriesIcon
          id="collectionButton"
          onMouseOver={()=>{
            setHover("true")
            console.log(iconHover)
          }}
          onMouseLeave={()=>{
            setHover("false")
            console.log(iconHover)
          }}
        />
        <div id="someId">
        </div>
        {renderResult()}
        {

        }
      </div>
    </>
  );
}

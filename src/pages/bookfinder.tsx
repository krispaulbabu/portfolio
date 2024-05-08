import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Button } from "@nextui-org/react";
import ReactDOM from "react-dom/client";
import { Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CloseIcon from "@mui/icons-material/Close";
import renderCollection from "@/functions/bookfinder/renderCollection";
import renderResult from "@/functions/bookfinder/renderResult";
import reqs from "@/functions/bookfinder/reqs";

import "/src/css/bookfinder.css";

// React.useLayoutEffect = React.useEffect 
React.useEffect= React.useLayoutEffect

let bookCollection = new Array();

export default function Bookfinder() {
  const [result, setResult] = useState([]);
  const [input, setInput] = useState("");
  const [book, setSelected] = useState(null);
  const [collection, setCollection] = useState("collectionHidden");
  const [idRatings, setIdRatings] = useState<Record<string, number>>({});

  const rootRef = useRef<null | ReactDOM.Root>(null);
  const root = rootRef.current;

  function setCollectionCss() {
    if (collection == "collection" && root != null) {
      setCollection("collectionHidden");
    }
    if (collection == "collectionHidden") {
      setCollection("collection");
    }
  }

  const handleRatingChange = (id: string, value: number | null) => {
    setIdRatings((prevIdRatings: any) => ({
      ...prevIdRatings,
      [id]: value || 1,
    }));
  };

  useEffect(() => {
    if (root != null) {
      root.render(
        <>
          {renderCollection(
            bookCollection,
            setSelected,
            book,
            idRatings,
            setIdRatings,
            handleRatingChange
          )}
        </>
      );
    }
    if (book != null) {
      if (!bookCollection.includes(book)) {
        bookCollection = [...bookCollection, book];
      } else {
        bookCollection = bookCollection.filter((item) => item !== book);
      }
      setSelected(null);
    }
    if (!rootRef.current) {
      rootRef.current = ReactDOM.createRoot(
        document.getElementsByClassName("collection")[0] as HTMLElement
      );
    }
  }, [book,idRatings]);
  
  return (
    <>
      <div className="bookFinder">
        <label id="quote">
          “Beauty is about finding the right fit, the most natural fit. To be
          perfect, you have to feel perfect about yourself—avoid trying to be
          something you’re not.” - The Lost Hero
        </label>
        <div id="input_button">
          <Input
            id="search"
            disableUnderline
            startAdornment={
              <Button
              disableRipple
                style={{
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  cursor: "pointer",
                  outline:"none"
                }}
                onClick={() => reqs(input, setResult)}
              >
                <SearchIcon style={{ color: "white" }} />
              </Button>
            }
            endAdornment={
              <Button
              disableRipple
                onClick={() => {
                  let element = document.getElementById("search");
                  if (
                    element instanceof HTMLInputElement ||
                    element instanceof HTMLTextAreaElement ||
                    element instanceof HTMLSelectElement
                  ) {
                    element.value = "";
                  }
                }}
                style={{
                  backgroundColor: "transparent",
                  borderWidth: 0,
                  cursor: "pointer",
                  outline:"none"
                }}
              >
                <CloseIcon style={{ color: "white" }} />
              </Button>
            }
            className="bookSearch"
            placeholder='"Seek and you shall find." - Ralph Waldo Emerson'
            style={{
              fontFamily: "Inter",
              color: "white",
              paddingLeft: "20px",
            }}
            onChange={(reply) => {
              if (reply.target.value.length !== 0) setInput(reply.target.value);
            }}
            onKeyDown={async (key) => {
              if (key.key === "Enter" && input.length !== 0) {
                reqs(input, setResult);
              }
            }}
          />
          <Button
            id="collectionButton"
            disableRipple
            onPress={() => {
              setCollectionCss();
            }}
          >
            <AutoStoriesIcon
              style={{
                width: "100%",
              }}
            ></AutoStoriesIcon>
          </Button>
          {renderResult(result, setSelected)}
          <div id={collection} className="collection">
          </div>
        </div>
      </div>
    </>
  );
}

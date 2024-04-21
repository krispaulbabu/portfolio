import { Tooltip } from "@mui/material";
import Image from "next/image";
import toTitleCase from "./titleCase";

export default function renderResult(result: any, setSelected: any) {
  if (typeof result !== "undefined" && result.length !== 0) {
    return (
      <div id="bookContainer">
        {result.map((values: any) => (
          <div key={values["id"]} className="book">
            <Tooltip
              sx={{
                width: "10px",
              }}
              title={
                <>
                  <b>Title: </b>
                  {toTitleCase(values["volumeInfo"]["title"])}
                  <br />
                  <b>Author: </b>
                  {typeof values["volumeInfo"]["authors"] != "undefined"
                    ? values["volumeInfo"]["authors"][0]
                    : "Unknown author"}
                  <br />
                  <div style={{display:"flex"}}>
                    <b >Description:</b>
                    <p
                      style={{
                        margin: 0,
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "noWrap",
                      }}
                    >
                      {values["volumeInfo"]["description"]}
                    </p>
                  </div>
                </>
              }
              followCursor
              arrow
            >
              <Image
                alt="book cover image"
                height={600}
                width={470}
                className="bookcover"
                onClick={() => {
                  setSelected(values);
                }}
                src={
                  typeof values["volumeInfo"]["imageLinks"] != "undefined"
                    ? "https://books.google.com/books/publisher/content/images/frontcover/" +
                      values["id"] +
                      "?fife=w470-h600&source=gbs_api"
                    : "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg"
                }
              />
            </Tooltip>
            <label className="booktitle">{toTitleCase(values["volumeInfo"]["title"])}</label>
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

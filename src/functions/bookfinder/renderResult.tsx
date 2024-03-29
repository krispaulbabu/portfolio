import { Tooltip } from "@mui/material";
import Image from "next/image";


export default function renderResult(result: any, setSelected: any) {
  if (typeof result !== "undefined" && result.length !== 0) {
    return (
      <div id="bookContainer">
        {result.map((values: any) => (
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
                    : "Unknown author"}
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
            <label className="booktitle">
              {values["volumeInfo"]["title"]}
            </label>
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

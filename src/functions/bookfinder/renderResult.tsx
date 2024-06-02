import { Tooltip } from "@mui/material";
import Image from "next/image";
import toTitleCase from "./titleCase";
import Fab from "@mui/material/Fab";
import { Add, Remove, LocalLibrary } from "@mui/icons-material";
import { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/react";

export default function renderResult(
  result: any,
  book: any,
  setSelected: any,
  bookCollection: any,
  setButtonStates: any,
  buttonStates: any,
  toggleButtonState: any,
  toggleModal: any,
  modalStates: any
) {
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
                  {values["volumeInfo"]["authors"]
                    ? values["volumeInfo"]["authors"][0]
                    : "Unknown author"}
                  <br />
                  <div style={{ display: "flex" }}>
                    <b>Description:</b>
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
              <div>
                <Image
                  unoptimized
                  alt="book cover image"
                  height={600}
                  width={470}
                  className="bookcover"
                  src={
                    values["volumeInfo"]["imageLinks"]
                      ? "https://books.google.com/books/publisher/content/images/frontcover/" +
                        values["id"] +
                        "?fife=w470-h600&source=gbs_api"
                      : "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg"
                  }
                />
                <div className="bookbuttons">
                  <Fab
                    className={
                      buttonStates[values["id"]] ? "removecircle" : "addcircle"
                    }
                    onClick={() => {
                      toggleButtonState(values["id"]);
                      setSelected(values);
                    }}
                  >
                    {buttonStates[values["id"]] ? <Remove /> : <Add />}
                  </Fab>
                  <Fab
                    className="importcontacts"
                    onClick={() => {
                      toggleModal(values.id);
                      console.log(values);
                    }}
                  >
                    <LocalLibrary />
                  </Fab>
                </div>
              </div>
            </Tooltip>
            <Modal
              motionProps={{
                variants: {
                  enter: {
                    scale:1,
                    opacity: 1,
                    transition: {},
                  },
                  exit: {
                    opacity: 0,
                    transition: {},
                  },
                },
              }}
              backdrop="blur"
              className="modal"
              data-backdrop="static"
              isOpen={modalStates[values.id] || false}
              onClose={() => toggleModal(values.id)}
              hideCloseButton={true}
            >
              <ModalContent className="modalcontent">
                <div className="modalImageAndTitle">
                  <div>
                    <Image
                      unoptimized
                      alt="book cover image"
                      height={300}
                      width={235}
                      className="modalImage"
                      src={
                        values["volumeInfo"]["imageLinks"]
                          ? "https://books.google.com/books/publisher/content/images/frontcover/" +
                            values["id"] +
                            "?fife=w470-h600&source=gbs_api"
                          : "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg"
                      }
                    />
                    <Button
                      disableRipple
                      className="closeButton"
                      onClick={() => toggleModal(values.id)}
                    >
                      Close
                    </Button>
                  </div>
                  <div>
                    {" "}
                    <ModalHeader className="modaltitle">
                      {toTitleCase(values["volumeInfo"]["title"])}
                    </ModalHeader>
                    <h3 className="modalauthor">
                      {values["volumeInfo"]["authors"]
                        ? values["volumeInfo"]["authors"][0]
                        : "No author"}
                    </h3>
                    <ModalBody className="modalDesc">
                      {values["volumeInfo"]["description"]}
                    </ModalBody>
                    {/* <div className="modalMaturityRating">
                      {values["volumeInfo"]["maturityRating"]}
                    </div> */}
                    <label className="categories" style={{ marginLeft: "3vw" }}>
                      Genre:{" "}
                      {values["volumeInfo"]["categories"]
                        ? values["volumeInfo"]["categories"]
                        : "No categories"}{" "}
                      |
                    </label>
                    <label className="pagecount">
                      {" "}
                      Page count: {values["volumeInfo"]["pageCount"]}
                    </label>
                  </div>
                </div>
                <ModalFooter></ModalFooter>
              </ModalContent>
            </Modal>
            <label className="booktitle">
              {toTitleCase(values["volumeInfo"]["title"])}
            </label>
            <label className="bookauthor">
              {values["volumeInfo"]["authors"]
                ? values["volumeInfo"]["authors"][0]
                : "No author"}
            </label>
          </div>
        ))}
      </div>
    );
  }
}

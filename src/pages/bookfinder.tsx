import { TextField } from "@mui/material";
import React, { useState } from "react";
import { render } from "react-dom";

export default function bookfinder() {
  const [result, setResult] = useState([])
  const [input, setInput]=useState("")

  const req = (searchTerm: String) => {
    fetch("https://openlibrary.org/search.json?q="+searchTerm.replaceAll(" ","+"))
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          // console.log(typeof(response))
        }
      })
      .then((response) => {
        setResult(response.docs);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  function renderResult() {
    console.log(result.length)
    if (result.length !== 0) {
      return (
        <>
          {result.map((values) => (
              <label style={{color:"white"}}>{values["volumeInfo"]["title"]}</label>
          ))}
        </>
      );
    }
  }

  return (
    <>
      <div className="bookFinder">
        <input
          id="bookSearch"
          onChange={(reply) => {
            if(reply.target.value.length!=0) setInput(reply.target.value)
            console.log(input)
          }}
          onKeyDown={(key)=>{
            if(key.key=="Enter" && input.length!=0) {
              console.log(input)
              console.log("https://openlibrary.org/search.json?q="+input.replaceAll(" ","+"))
              req(input)
              console.log(result)
            }
            else{}
          }}
        ></input>
      </div>
    </>
  );
}

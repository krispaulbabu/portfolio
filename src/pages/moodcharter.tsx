import { input } from "@nextui-org/react";
import React, { useState,useRef } from "react";


export default function moodcharter() {
  let rating = [0, 1, 2, 3, 4, 5];
  let ratings = [
    {
      color: "#2e7f18",
    },
    {
      color: "#45731e",
    },
    {
      color: "#675e24",
    },
    {
      color: "#8d472b",
    },
    {
      color: "#c82538",
    },
  ];
  const [clicked,setClicked]=useState("")

  console.log(clicked)
  return (
    <>
      <div className="moodCharter">
        On a scale of 1 to 10 How would you rate your happiness today ?
        <div className="ratingScale">
          {ratings.map((key,index) => (
            <>
              <label
              className={"rate"+(index+1).toString()}
              onClick={()=>setClicked("blah")}
              >
              </label>
              {/* {console.log(key["color"])} */}
            </>
          ))}
        </div>
        On a scale of 1 to 10 How would you rate your sadness today ?
        <div className="ratingScale">
          {ratings.map((key,index) => (
            <>
              <label
              className={"rate"+(index+1).toString()}
              >
              </label>
              {/* {console.log(key["color"])} */}
            </>
          ))}
        </div>
        On a scale of 1 to 10 How would you rate your tiredness today ?
        <div className="ratingScale">
          {ratings.map((key,index) => (
            <>
              <label
              className={"rate"+(index+1).toString()}
              >
              </label>
              {/* {console.log(key["color"])} */}
            </>
          ))}
        </div>
        On a scale of 1 to 10 How would you rate your excitedness today ?
        <div className="ratingScale">
          {ratings.map((key,index) => (
            <>
              <label
              className={"rate"+(index+1).toString()}
              >
              </label>
              {/* {console.log(key["color"])} */}
            </>
          ))}
        </div>
        On a scale of 1 to 10 How would you rate your anxiousness today ?
        <div className="ratingScale">
          {ratings.map((key,index) => (
            <>
              <label
              className={"rate"+(index+1).toString()}
              >
              </label>
              {/* {console.log(key["color"])} */}
            </>
          ))}
        </div>
        On a scale of 1 to 10 How would you rate your Other today ?
        <div className="ratingScale">
          {ratings.map((key,index) => (
            <>
              <label
              className={"rate"+(index+1).toString()}
              >
              </label>
              {/* {console.log(key["color"])} */}
            </>
          ))}
        </div>
      </div>
    </>
  );
}

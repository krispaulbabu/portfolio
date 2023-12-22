import React, { useState } from "react";
import "src/app/moodcharter.css";
import { Input, Slider } from "@mui/material";

const [happy, setHappy]= useState([])
const [sad, setSad]= useState(0)
const [anger, setAnger]= useState(0)
const [exhaustion, setExhaustion]= useState(0)
const [excitement, setExcitement]= useState(0)
const [anxiety, setAnxiety]= useState(0)




export default function moodcharter() {
  return (
    <>
      <div id="formContainer">
        <label id="question"> On a scale of 1 to 10 how would you rate your happiness today.</label>
        <Slider id="slider" min={1} max ={10} step={0.01} onChange={(mouse,value)=>{setHappy(parseInt())} />

        <label id="question"> On a scale of 1 to 10 how would you rate your sadness oday.</label>
        <Slider id="slider" min={1} max ={10} step={0.01} onChange={(mouse,value)=>{console.log(value)}} />

        <label id="question"> On a scale of 1 to 10 how would you rate your anger today.</label>
        <Slider id="slider" min={1} max ={10} step={0.01} onChange={(mouse,value)=>{console.log(value)}} />

        <label id="question"> On a scale of 1 to 10 how would you rate your exhaustion today.</label>
        <Slider id="slider" min={1} max ={10} step={0.01} onChange={(mouse,value)=>{console.log(value)}} />

        <label id="question"> On a scale of 1 to 10 how would you rate your excitement today.</label>
        <Slider id="slider" min={1} max ={10} step={0.01} onChange={(mouse,value)=>{console.log(value)}} />

        <label id="question"> On a scale of 1 to 10 how would you rate your anxiety today.</label>
        <Slider id="slider" min={1} max ={10} step={0.01} onChange={(mouse,value)=>{console.log(value)}} />



      </div>
    </>
  );
}

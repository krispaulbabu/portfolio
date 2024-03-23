import { useEffect } from "react";
export default function testflask() {


  useEffect(() => {  
    fetch("/something").
    then((result)=>{result.json()})
    .then((data)=>{console.log(data)})
  });

  return (<>
    something
  </>);
}

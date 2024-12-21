/*
function Test(){
    function displayInfo(){
        alert("This is Event concept in Reactjs application")
    }
    return(
        <div>
            <button ondblclick={displayInfo()}>Click me</button>
        </div>
    )
}
export default Test;
*/


/*
function Test(){
    let counter=0;  
    function updateCounter(){
        ++counter;
        console.log(counter);
    }
    return(
        <div>
<h2>Initially Counter value is:{counter}</h2>
<button onClick={updateCounter}>Click here</button>
        </div>
    )
}
export default Test;
*/


import { useState } from "react";

function Test(){
    let [counter,updateCounter]=useState(0);    
      return(
        <div>
    <h2>Initially Counter value is: {counter}</h2>
    <button onClick={()=>updateCounter(--counter)}>Click me</button>
        </div>
    )
}
export default Test;
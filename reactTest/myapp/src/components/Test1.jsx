import { useEffect, useState } from "react";

function Test1(){
    const [city, setCity]=useState("Warangal");
    useEffect(()=>{
        if(city==="Warangal")
            {
                setCity("Telangana");
            }
            else{
                setCity("Chennai");
            }
    },[])    
   
return(
    <div>
        {city}
    </div>
)
}
export default Test1;
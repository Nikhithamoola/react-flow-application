import { useState } from "react";

function Increament()
{
  const[count,setcount]=useState(0)
  const handleClick=()=>{
    setcount(count+1);
  }
  return(
    <>
    <h1>This is counter value:{count}</h1>
    <button style={{color:'green'}} onClick={handleClick}>Increament</button>
    </>
  )
}
export default Increament;
import { useState } from "react";

 function IncreAndDecre()
{
  const[count,setcount]=useState(0)
  const handleClick=()=>{
    setcount(count+1);
  }
  const handleClick1=()=>{
    setcount(count-1);
  }
  return(
    <>
    <h1>This is counter value:{count}</h1>
    <button style={{color:'green'}} onClick={handleClick}>Increament</button>
    <button style={{color:'blue'}} onClick={handleClick1}>decreament</button>
    </>
  )
}
export default IncreAndDecre;
import { useState } from "react";

function Cricket()
{
  const[score,setscore]=useState(0)
  const increamentBy1 = ()=>{
    setscore(score+1);
  }
  const increamentBy2 = ()=>{
    setscore(score+2);
  }
  const increamentBy3 = ()=>{
    setscore(score+3);
  }
  const increamentBy4 = ()=>{
    setscore(score+4);
  }
  const increamentBy6 = ()=>{
    setscore(score+6);
  }
  const reset = ()=>{
    setscore(0);
  }
  return(
    <>
    <h1>Cricket Score: {score}</h1>
    <button style={{color:'blue'}} onClick={increamentBy1}>+1</button>
    <button style={{color:'red'}} onClick={increamentBy2}>+2</button>
    <button style={{color:'green'}} onClick={increamentBy3}>+3</button>
    <button style={{color:'violet'}} onClick={increamentBy4}>+4</button>
    <button style={{color:'yellow'}} onClick={increamentBy6}>+6</button>
    <button style={{color:'black'}} onClick={reset}>reset</button>
    </>
  )
}
export default Cricket;
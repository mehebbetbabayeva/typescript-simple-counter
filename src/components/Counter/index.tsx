import ShowCounter from "../ShowCounter";
import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
        <button onClick={()=>{setCount(count-1)}} >-</button>
        <ShowCounter count={count}/>
        <button onClick={()=>{setCount(count+1)}}>+</button>
        
    </div>
  )
}

export default Counter
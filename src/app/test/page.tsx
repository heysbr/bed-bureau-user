"use client"
import { useState } from "react";

export default function Page() {
  const [first, setfirst] = useState(false);
  return (
    <div className=" relative flex items-center justify-center h-screen">
      <button onClick={()=>setfirst(!first)} className="absolute top-0"> Click</button>

      <div className={` p-10  w-32  bg-amber-800 rounded`}>
       { <div className={`bg-amber-300 rounded transition-all ease-in-out duration-1000 ${first? "h-0": "h-96"}`}/>}
      </div>



    </div>
  );
}

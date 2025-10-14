"use client"
import { useState } from "react";

export default function Page() {
  const [first, setfirst] = useState(false);
  return (
    <div className="flex items-center justify-center h-screen">
      <button onClick={()=>setfirst(!first)}> Click</button>
      <div className="bg-amber-300 p-10">
      <div className={`${ first ? "size-96":"size-56"} transition-all duration-1000 bg-amber-800`}/>

      </div>
    </div>
  );
}

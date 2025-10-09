"use client"
import Grid from "@/assets/icons/grid.svg"
import GridMuted from "@/assets/icons/grid-muted.svg"
import Image from "next/image";
import { useState } from "react";
export default function Page() {
  const [toggle, setToggle] = useState(false);
  const handleClick=()=>{
    setToggle(prev=> !prev);
  }
  return (
    <div className="flex items-center justify-center h-screen bg-white">
       
    </div>
  );
}
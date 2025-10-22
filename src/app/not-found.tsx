"use client";
import NavBar from "@/components/layout/NavBar";
import Image from "next/image";
import NotFoundImg from "@/assets/icons/NoDataFound.png";

export default function Error() {
  return (
    <>
      <div className={`h-screen bg-app-bg`}>
        <NavBar />
        <div className="p-5 md:py-10 md:px-25 md:pb-25 space-y-6">
          <div className={`text-2xl font-semibold`}>Dashboard</div>
          <div className="flex items-center justify-center h-96">
            <Image src={NotFoundImg} alt="not" className="object-cover w-96"/>
          </div>
        </div>
      </div>
    </>
  );
}

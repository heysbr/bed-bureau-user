"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import ClientLogo from "@/assets/icons/client.svg";
import Image from "next/image";
import React from "react";

const client = {
  clientName: "Leslie Alexander",
  contactName: "Ronald",
  contactEmail: "ronald@example.com",
  location: "MID (PROVIDE)",
  registeredOn: "05 July 2022",
  status: "Active",
  // url: "www.bedbureau.com/client/clientname",
};

export default function page() {
  function formatKey(key: string) {
    return key
      .replace(/([A-Z])/g, " $1") // split camelCase → camel Case
      .replace(/^./, (str) => str.toUpperCase()); // capitalize first letter
  }
  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/manage-client" className="text-[#ABAFB7]">
                Manage Client
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-[#2A2338] font-semibold">
                Details
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Button variant="appBtn" className="shadow-none rounded-sm">
          <Pencil /> Edit
        </Button>
      </div>
      <div className="flex flex-col md:flex-row bg-white shadow-[0px_4px_8px_0px_#101E730F] h-fit rounded-md gap-10 p-5">
        <Image
          src={ClientLogo}
          alt="Client Logo"
          className="rounded-full size-20  object-cover"
        />
        <div className="grid grid-cols-2 text-[#969DAB] text-sm gap-y-2">
          {Object.keys(client).map((key) => (
            <React.Fragment key={key}>
              {/* Label */}
              <div>{formatKey(key)}:</div>

              {/* Value */}
              <div
                className={`font-medium ${
                  key === "status" ? "text-[#10940D]" : "text-[#2A2338]"
                }`}
              >
                {client[key as keyof typeof client]}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row bg-white items-center shadow-[0px_4px_8px_0px_#101E730F] h-fit rounded-md gap-10 p-5">
        <h1 className="font-semibold flex-1">
          Your Public URL : <span className="text-app-primary font-medium "> www.bedbureau.com/client/clientname</span>
        </h1>
        <Button variant="appBtn">Open Link</Button>
      </div>
    </div>
  );
}

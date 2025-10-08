"use client";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table";
import { EllipsisVertical } from "lucide-react";
import Pagination from "@/components/table/Pagination";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { clients } from "@/data/fields";
import { useState } from "react";

export default function Page() {
  const router = useRouter();

  const CARDS_PER_PAGE = 10;
  const [dataList, setDataList] = useState(clients);
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(dataList.length / CARDS_PER_PAGE);
  const startIdx = (page - 1) * CARDS_PER_PAGE;
  const currentData = dataList.slice(startIdx, startIdx + CARDS_PER_PAGE);

  // // function handleRemove(id: number) {
  // //   setDataList((prev) => prev.filter((item) => item.id !== id));
  // //   if (page > 1 && currentData.length === 1) {
  // //     setPage((prev) => prev - 1); // shift back if page gets empty
  // //   }
  // }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead colSpan={8} className="text-xl font-medium p-5">
              List of All Clients
            </TableHead>
          </TableRow>
          <TableRow className="bg-app-table-header hover:bg-app-table-header">
            <TableHead className="px-5 text-center">S. No.</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Client Name</TableHead>
            <TableHead>Contact Name</TableHead>
            <TableHead>Contact Email</TableHead>
            <TableHead>Registered On</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentData.map((client) => (
            <TableRow key={client.id}>
              <TableCell className="font-medium px-5 text-center">
                {client.id}
              </TableCell>
              <TableCell>{client.location}</TableCell>
              <TableCell>{client.clientName}</TableCell>
              <TableCell>{client.contactName}</TableCell>
              <TableCell>{client.contactEmail}</TableCell>
              <TableCell>{client.registeredOn}</TableCell>
              <TableCell
                className={`text-sm ${
                  client.status === "Active"
                    ? "text-[#10940D]"
                    : client.status === "Pending"
                    ? "text-[#F8A80C]"
                    : "text-[#52575C]"
                }`}
              >
                {client.status}
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <EllipsisVertical
                      className="text-[#A0A4A8] cursor-pointer"
                      size={16}
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className=" py-2 border-0 shadow-[0px_12px_26px_0px_#101E730F]">
                    <DropdownMenuItem
                      className=" "
                      onClick={() => router.push(`/manage-client/edit/`)}
                    >
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => router.push(`/reset-password/`)}
                    >
                      Reset Password
                    </DropdownMenuItem>
                    <DropdownMenuItem>Deactivate</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination setPage={setPage} page={page} totalPages={totalPages}/>
    </>
  );
}

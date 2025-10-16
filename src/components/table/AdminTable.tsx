"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EllipsisVertical } from "lucide-react";
import Pagination from "@/components/table/Pagination";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useRouter } from "next/navigation";
import { ListOfAdmins as clients } from "@/data/fields";
import { useState } from "react";

export default function AdminTable() {
  const router = useRouter();

  const CARDS_PER_PAGE = 10;
  const [dataList, setDataList] = useState(clients);
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(dataList.length / CARDS_PER_PAGE);
  const startIdx = (page - 1) * CARDS_PER_PAGE;
  const currentData = dataList.slice(startIdx, startIdx + CARDS_PER_PAGE);
  console.table(currentData);

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead
              colSpan={8}
              className="text-xl font-medium p-5 text-left"
            >
              List of All Admins
            </TableHead>
          </TableRow>
          <TableRow className="bg-app-table-header hover:bg-app-table-header">
            <TableHead className="px-5 text-center">S. No.</TableHead>
            <TableHead className="text-left">location</TableHead>
            <TableHead className="text-left">Admin Name</TableHead>
            <TableHead className="text-left">Admin Email</TableHead>
            <TableHead>Registered On</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentData.map((client) => (
            <TableRow key={client.id}>
              <TableCell className="font-medium px-5 text-center">
                {client.id}
              </TableCell>
              <TableCell className="text-left">{client.location}</TableCell>
              <TableCell className="text-left">{client.AdminName}</TableCell>
              <TableCell className="text-left">{client.AdminEmail}</TableCell>
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
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Deactivate</DropdownMenuItem>
                    <DropdownMenuItem>Reset Password</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination setPage={setPage} page={page} totalPages={totalPages} />
    </>
  );
}

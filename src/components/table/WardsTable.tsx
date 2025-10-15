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
import { useState } from "react";

import { ListOfWards as clients } from "@/data/fields";

export default function WardsTable() {
  const router = useRouter();

  const CARDS_PER_PAGE = 10;
  const [dataList, setDataList] = useState(clients);
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(dataList.length / CARDS_PER_PAGE);
  const startIdx = (page - 1) * CARDS_PER_PAGE;
  const currentData = dataList.slice(startIdx, startIdx + CARDS_PER_PAGE);

  return (
    <>
      <Table className="w-full ">
        <TableHeader>
          <TableRow>
            <TableHead
              colSpan={8}
              className="text-xl font-medium p-5 text-left"
            >
              List of All Wards
            </TableHead>
          </TableRow>
          <TableRow className="bg-app-table-header hover:bg-app-table-header ">
            <TableHead className="w-[60px]">S. No.</TableHead>
            <TableHead className="w-[180px] text-left">Geography</TableHead>
            <TableHead className="w-[120px] text-left">Ward Name</TableHead>
            <TableHead className="w-[100px] text-left">Ward Type</TableHead>
            <TableHead className="w-[80px]">No. of Beds</TableHead>
            <TableHead className="w-[80px]">Occupied Beds</TableHead>
            <TableHead className="w-[80px]">Reserve Beds</TableHead>
            <TableHead className="w-[80px]">Available Beds</TableHead>
            <TableHead className="w-[80px]">Discharging Today</TableHead>
            <TableHead className="w-[80px]">Discharge Expired</TableHead>
            <TableHead className="w-[80px]">Status</TableHead>
            <TableHead className="w-[80px]">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentData.map((client) => (
            <TableRow key={client.id}>
              <TableCell className="font-medium px-5 text-center">
                {client.id}
              </TableCell>
              <TableCell className="text-left">{client.Geography}</TableCell>
              <TableCell className="text-left">{client.WardName}</TableCell>
              <TableCell className="text-left">{client.WardType}</TableCell>
              <TableCell>{client.NoOfBeds}</TableCell>
              <TableCell>{client.OccupiedBeds}</TableCell>
              <TableCell>{client.ReserveBeds}</TableCell>
              <TableCell>{client.AvailableBeds}</TableCell>
              <TableCell>{client.DischargingToday}</TableCell>
              <TableCell>{client.DischargeExpired}</TableCell>

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
      <Pagination setPage={setPage} page={page} totalPages={totalPages} />
    </>
  );
}

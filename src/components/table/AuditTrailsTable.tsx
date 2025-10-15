"use client";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table";
import Pagination from "@/components/table/Pagination";
import { ListOfAuditTrails } from "@/data/fields";
import { useState } from "react";

export default function AuditTrailsTable() {

  const CARDS_PER_PAGE = 5;
  const [dataList, setDataList] = useState(ListOfAuditTrails);
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(dataList.length / CARDS_PER_PAGE);
  const startIdx = (page - 1) * CARDS_PER_PAGE;
  const currentData = dataList.slice(startIdx, startIdx + CARDS_PER_PAGE);

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead colSpan={8} className="text-xl text-left font-medium p-5">
              List of All Clients
            </TableHead>
          </TableRow>
          <TableRow className="bg-app-table-header hover:bg-app-table-header">
            <TableHead className="px-5 text-center]">S. No.</TableHead>
            <TableHead className="text-left">Geography</TableHead>
            <TableHead className="text-left">Ward Name</TableHead>
            <TableHead className="text-left">Person Email</TableHead>
            <TableHead className="text-left">Date &amp; Time</TableHead>
            <TableHead className="text-left">Operations</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentData.map((client) => (
            <TableRow key={client.id}>
              <TableCell className="font-medium px-5 text-center">
                {client.id}
              </TableCell>
              <TableCell className="text-left">{client.geography}</TableCell>
              <TableCell className="text-left">{client.wardName}</TableCell>
              <TableCell className="text-left">{client.personalEmail}</TableCell>
              <TableCell className="text-left">{client.registeredOn}</TableCell>
              <TableCell className="text-left">{client.operations}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination setPage={setPage} page={page} totalPages={totalPages}/>
    </>
  );
}

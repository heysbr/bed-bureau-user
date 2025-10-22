// "use client";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { EllipsisVertical } from "lucide-react";
// import Pagination from "@/components/table/Pagination";
// import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
// import {
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import ErrorIcon from "@/assets/icons/ErrorIcon.svg";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { ListOfAllGeography } from "@/data/fields";
// import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
// import { DialogHeader } from "../ui/dialog";
// import Image from "next/image";
// import { Button } from "../ui/button";

// export default function GeographyTable() {
//   const router = useRouter();

//   const [deleteGeography, setDeleteGeography] = useState(false)

//   const CARDS_PER_PAGE = 10;
//   const [dataList, setDataList] = useState(ListOfAllGeography);
//   const [page, setPage] = useState(1);
//   const totalPages = Math.ceil(dataList.length / CARDS_PER_PAGE);
//   const startIdx = (page - 1) * CARDS_PER_PAGE;
//   const currentData = dataList.slice(startIdx, startIdx + CARDS_PER_PAGE);

//   return (
//     <>
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead
//               colSpan={8}
//               className="text-xl font-medium p-5 text-left"
//             >
//               List of All Geography
//             </TableHead>
//           </TableRow>
//           <TableRow className="bg-app-table-header hover:bg-app-table-header">
//             <TableHead className="px-5 text-center w-[80px]">S. No.</TableHead>
//             <TableHead>Title</TableHead>
//             <TableHead>Date &nbsp; Time</TableHead>
//             <TableHead>Action</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {currentData.map((client) => (
//             <TableRow key={client.id}>
//               <TableCell className="font-medium px-5 text-center w-[80px]">
//                 {client.id}
//               </TableCell>
//               <TableCell>{client.title}</TableCell>
//               <TableCell>{client.dateAndTime}</TableCell>
//               <TableCell>
//                 <DropdownMenu>
//                   <DropdownMenuTrigger>
//                     <EllipsisVertical
//                       className="text-[#A0A4A8] cursor-pointer"
//                       size={16}
//                     />
//                   </DropdownMenuTrigger>
//                   <DropdownMenuContent className="py-2 border-0 shadow-[0px_12px_26px_0px_#101E730F]">
//                     <DropdownMenuItem>Delete</DropdownMenuItem>
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//       <Pagination setPage={setPage} page={page} totalPages={totalPages} />

//       <Dialog open={deleteGeography} onOpenChange={setDeleteGeography}>
//         <DialogContent className="px-10 py-20 rounded-lg">
//           <DialogHeader className="flex items-center  gap-10justify-center">
//             <DialogTitle className="text-2xl font-semibold text-center flex flex-col justify-center items-center">
//               <Image src={ErrorIcon} alt="ErrorIcon" />
//               Deactivate Ward
//             </DialogTitle>
//             <p>Are you sure! You want to Deactivate Ward?</p>
//             <div className="flex gap-10 justify-between">
//               <Button variant={"navBtn"} className="w-50">No</Button>
//               <Button variant={"appBtn"} className="w-50">Yes</Button>
//             </div>
//           </DialogHeader>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// }


"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import Pagination from "@/components/table/Pagination";
import { EllipsisVertical } from "lucide-react";
import Image from "next/image";

import ErrorIcon from "@/assets/icons/ErrorIcon.svg";
import { ListOfAllGeography } from "@/data/fields";

export default function GeographyTable() {
  const [deleteGeography, setDeleteGeography] = useState(false);

  const CARDS_PER_PAGE = 10;
  const [dataList, setDataList] = useState(ListOfAllGeography);
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(dataList.length / CARDS_PER_PAGE);
  const startIdx = (page - 1) * CARDS_PER_PAGE;
  const currentData = dataList.slice(startIdx, startIdx + CARDS_PER_PAGE);

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead colSpan={4} className="text-xl font-medium p-5 text-left">
              List of All Geography
            </TableHead>
          </TableRow>
          <TableRow className="bg-app-table-header hover:bg-app-table-header">
            <TableHead className="px-5 text-center w-[80px]">S. No.</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Date &nbsp; Time</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {currentData.map((client) => (
            <TableRow key={client.id}>
              <TableCell className="font-medium px-5 text-center w-[80px]">{client.id}</TableCell>
              <TableCell>{client.title}</TableCell>
              <TableCell>{client.dateAndTime}</TableCell>
              <TableCell className="flex justify-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <EllipsisVertical className="text-[#A0A4A8] cursor-pointer" size={16} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="py-2 border-0 shadow-[0px_12px_26px_0px_#101E730F]">
                    <DropdownMenuItem onClick={() => setDeleteGeography(true)}>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination setPage={setPage} page={page} totalPages={totalPages} />

      {/* Delete Geography Dialog */}
      <Dialog open={deleteGeography} onOpenChange={setDeleteGeography}>
        <DialogContent className="max-w-md rounded-xl p-8">
          <DialogHeader className="flex flex-col items-center space-y-4">
            <Image src={ErrorIcon} alt="Warning" width={48} height={48} />
            <DialogTitle className="text-2xl font-semibold text-center">Delete Geography</DialogTitle>
            <DialogDescription className="text-center text-gray-600">
              Are you sure you want to delete this geography? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 flex justify-center gap-4">
            <Button variant="outline" className="w-28" onClick={() => setDeleteGeography(false)}>No</Button>
            <Button
              variant="destructive"
              className="w-28"
              onClick={() => {
                // handle delete logic here
                setDeleteGeography(false);
              }}
            >
              Yes
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
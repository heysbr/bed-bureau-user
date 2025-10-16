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
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// import { ListOfWards as clients } from "@/data/fields";
// import {
//   Dialog,
//   DialogContent,
//   DialogTitle,
//   DialogTrigger,
// } from "@radix-ui/react-dialog";
// import { Button } from "../ui/button";
// import { DialogHeader } from "../ui/dialog";

// export default function WardsTable() {
//   const router = useRouter();

//   const [EditModalToggle, setEditModalToggle] = useState(false);

//   const CARDS_PER_PAGE = 10;
//   const [dataList, setDataList] = useState(clients);
//   const [page, setPage] = useState(1);
//   const totalPages = Math.ceil(dataList.length / CARDS_PER_PAGE);
//   const startIdx = (page - 1) * CARDS_PER_PAGE;
//   const currentData = dataList.slice(startIdx, startIdx + CARDS_PER_PAGE);

//   return (
//     <>
//       <Table className="w-full ">
//         <TableHeader>
//           <TableRow>
//             <TableHead
//               colSpan={8}
//               className="text-xl font-medium p-5 text-left"
//             >
//               List of All Wards
//             </TableHead>
//           </TableRow>
//           <TableRow className="bg-app-table-header hover:bg-app-table-header ">
//             <TableHead className="w-[60px]">S. No.</TableHead>
//             <TableHead className="w-[180px] text-left">Geography</TableHead>
//             <TableHead className="w-[120px] text-left">Ward Name</TableHead>
//             <TableHead className="w-[100px] text-left">Ward Type</TableHead>
//             <TableHead className="w-[80px]">No. of Beds</TableHead>
//             <TableHead className="w-[80px]">Occupied Beds</TableHead>
//             <TableHead className="w-[80px]">Reserve Beds</TableHead>
//             <TableHead className="w-[80px]">Available Beds</TableHead>
//             <TableHead className="w-[80px]">Discharging Today</TableHead>
//             <TableHead className="w-[80px]">Discharge Expired</TableHead>
//             <TableHead className="w-[80px]">Status</TableHead>
//             <TableHead className="w-[80px]">Action</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {currentData.map((client) => (
//             <TableRow key={client.id}>
//               <TableCell className="font-medium px-5 text-center">
//                 {client.id}
//               </TableCell>
//               <TableCell className="text-left">{client.Geography}</TableCell>
//               <TableCell className="text-left">{client.WardName}</TableCell>
//               <TableCell className="text-left">{client.WardType}</TableCell>
//               <TableCell>{client.NoOfBeds}</TableCell>
//               <TableCell>{client.OccupiedBeds}</TableCell>
//               <TableCell>{client.ReserveBeds}</TableCell>
//               <TableCell>{client.AvailableBeds}</TableCell>
//               <TableCell>{client.DischargingToday}</TableCell>
//               <TableCell>{client.DischargeExpired}</TableCell>

//               <TableCell
//                 className={`text-sm ${
//                   client.status === "Active"
//                     ? "text-[#10940D]"
//                     : client.status === "Pending"
//                     ? "text-[#F8A80C]"
//                     : "text-[#52575C]"
//                 }`}
//               >
//                 {client.status}
//               </TableCell>
//               <TableCell>
//                 <DropdownMenu>
//                   <DropdownMenuTrigger>
//                     <EllipsisVertical
//                       className="text-[#A0A4A8] cursor-pointer"
//                       size={16}
//                     />
//                   </DropdownMenuTrigger>
//                   <DropdownMenuContent className="py-2 border-0 shadow-[0px_12px_26px_0px_#101E730F]">
//                     <DropdownMenuItem>Manage</DropdownMenuItem>
//                     <DropdownMenuItem onClick={()=>setEditModalToggle(!EditModalToggle)}>Edit</DropdownMenuItem>
//                     <DropdownMenuItem>Deactivate</DropdownMenuItem>
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//       <Pagination setPage={setPage} page={page} totalPages={totalPages} />

//       <Dialog open={EditModalToggle} onOpenChange={setEditModalToggle}>
//         <DialogTrigger asChild>
//           <DropdownMenuItem>Edit</DropdownMenuItem>
//         </DialogTrigger>
//         <DialogContent className="px-0 rounded-lg">
//           <DialogHeader>
//             <DialogTitle className="text-2xl font-semibold text-center">
//               Edit Ward
//             </DialogTitle>
//           </DialogHeader>
//         </DialogContent>
//       </Dialog>

//     </>
//   );
// }

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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ListOfWards as clients } from "@/data/fields";

import { AddWardFields as Fields } from "@/data/fields";
import FormField from "../forms/FormField";
import { Button } from "../ui/button";
import Image from "next/image";
import ErrorIcon from "@/assets/icons/ErrorIcon.svg";

export default function WardsTable() {
  const router = useRouter();

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editDeactivateOpen, setEditDeactivateOpen] = useState(false);

  const CARDS_PER_PAGE = 10;
  const [dataList, setDataList] = useState(clients);
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(dataList.length / CARDS_PER_PAGE);
  const startIdx = (page - 1) * CARDS_PER_PAGE;
  const currentData = dataList.slice(startIdx, startIdx + CARDS_PER_PAGE);

  return (
    <>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead
              colSpan={8}
              className="text-xl font-medium p-5 text-left"
            >
              List of All Wards
            </TableHead>
          </TableRow>
          <TableRow className="bg-app-table-header hover:bg-app-table-header">
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
                  <DropdownMenuTrigger asChild>
                    <EllipsisVertical
                      className="text-[#A0A4A8] cursor-pointer"
                      size={16}
                    />
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="py-2 border-0 shadow-[0px_12px_26px_0px_#101E730F]">
                    <DropdownMenuItem>Manage</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setEditModalOpen(true)}>
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => setEditDeactivateOpen(true)}
                    >
                      Deactivate
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination setPage={setPage} page={page} totalPages={totalPages} />

      {/* Dialog (controlled manually) */}

      <Dialog open={editModalOpen} onOpenChange={setEditModalOpen}>
        <DialogContent className="px-6 py-4 rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold text-center">
              Edit Ward
            </DialogTitle>
          </DialogHeader>
          <form className="flex flex-col justify-between px-5 md:px-10 pb-4 space-y-6 ">
            {Fields.map((field, index) => (
              <FormField
                name={field.name}
                key={index}
                type={field.type}
                placeholder={field.placeholder}
                label={field.label}
                forget={field?.forgetPassword}
              />
            ))}
            <Button variant="appBtn" className="w-full mt-4">
              Update
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Dialog (controlled manually) */}

      <Dialog open={editDeactivateOpen} onOpenChange={setEditDeactivateOpen}>
        <DialogContent className="px-10 py-20 rounded-lg">
          <DialogHeader className="flex items-center  gap-10justify-center">
            <DialogTitle className="text-2xl font-semibold text-center flex flex-col justify-center items-center">
              <Image src={ErrorIcon} alt="ErrorIcon" />
              Deactivate Ward
            </DialogTitle>
            <p>Are you sure! You want to Deactivate Ward?</p>
            <div className="flex gap-10 justify-between">
              <Button variant={"navBtn"} className="w-50">No</Button>
              <Button variant={"appBtn"} className="w-50">Yes</Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

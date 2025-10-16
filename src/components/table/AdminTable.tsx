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
// import { ListOfAdmins as clients } from "@/data/fields";
// import { useState } from "react";
// import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
// import { DialogHeader } from "../ui/dialog";
// import Image from "next/image";
// import { Button } from "../ui/button";

// export default function AdminTable() {
//   const [deactivateOpen, setDeactivateOpen] = useState(false)

//   const CARDS_PER_PAGE = 10;
//   const [dataList, setDataList] = useState(clients);
//   const [page, setPage] = useState(1);
//   const totalPages = Math.ceil(dataList.length / CARDS_PER_PAGE);
//   const startIdx = (page - 1) * CARDS_PER_PAGE;
//   const currentData = dataList.slice(startIdx, startIdx + CARDS_PER_PAGE);
//   console.table(currentData);

//   return (
//     <>
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead
//               colSpan={8}
//               className="text-xl font-medium p-5 text-left"
//             >
//               List of All Admins
//             </TableHead>
//           </TableRow>
//           <TableRow className="bg-app-table-header hover:bg-app-table-header">
//             <TableHead className="px-5 text-center">S. No.</TableHead>
//             <TableHead className="text-left">location</TableHead>
//             <TableHead className="text-left">Admin Name</TableHead>
//             <TableHead className="text-left">Admin Email</TableHead>
//             <TableHead>Registered On</TableHead>
//             <TableHead>Status</TableHead>
//             <TableHead>Action</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {currentData.map((client) => (
//             <TableRow key={client.id}>
//               <TableCell className="font-medium px-5 text-center">
//                 {client.id}
//               </TableCell>
//               <TableCell className="text-left">{client.location}</TableCell>
//               <TableCell className="text-left">{client.AdminName}</TableCell>
//               <TableCell className="text-left">{client.AdminEmail}</TableCell>
//               <TableCell>{client.registeredOn}</TableCell>
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
//                   <DropdownMenuContent className=" py-2 border-0 shadow-[0px_12px_26px_0px_#101E730F]">
//                     <DropdownMenuItem>Edit</DropdownMenuItem>
//                     <DropdownMenuItem onClick={()=>setDeactivateOpen(true)}>Deactivate</DropdownMenuItem>
//                     <DropdownMenuItem>Reset Password</DropdownMenuItem>
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//       <Pagination setPage={setPage} page={page} totalPages={totalPages} />

//       <Dialog open={deactivateOpen} onOpenChange={setDeactivateOpen}>
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
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import { useState } from "react";

// import ErrorIcon from "@/assets/icons/ErrorIcon.svg";
// import { ListOfAdmins as clients } from "@/data/fields";
// import { DialogTrigger } from "@radix-ui/react-dialog";
// import FormField from "../forms/FormField";

// import { AddAdminFields as Fields } from "@/data/fields";

// export default function AdminTable() {
//   const [deactivateOpen, setDeactivateOpen] = useState(false);
//   const [editAdminModal, setEditAdminModal] = useState(false);

//   const CARDS_PER_PAGE = 10;
//   const [dataList, setDataList] = useState(clients);
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
//               List of All Admins
//             </TableHead>
//           </TableRow>
//           <TableRow className="bg-app-table-header hover:bg-app-table-header">
//             <TableHead className="px-5 text-center">S. No.</TableHead>
//             <TableHead className="text-left">Location</TableHead>
//             <TableHead className="text-left">Admin Name</TableHead>
//             <TableHead className="text-left">Admin Email</TableHead>
//             <TableHead>Registered On</TableHead>
//             <TableHead>Status</TableHead>
//             <TableHead>Action</TableHead>
//           </TableRow>
//         </TableHeader>

//         <TableBody>
//           {currentData.map((client) => (
//             <TableRow key={client.id}>
//               <TableCell className="font-medium px-5 text-center">
//                 {client.id}
//               </TableCell>
//               <TableCell>{client.location}</TableCell>
//               <TableCell>{client.AdminName}</TableCell>
//               <TableCell>{client.AdminEmail}</TableCell>
//               <TableCell>{client.registeredOn}</TableCell>
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
//                   <DropdownMenuTrigger asChild>
//                     <EllipsisVertical
//                       className="text-[#A0A4A8] cursor-pointer"
//                       size={16}
//                     />
//                   </DropdownMenuTrigger>

//                   <DropdownMenuContent className="py-2 border-0 shadow-[0px_12px_26px_0px_#101E730F]">
//                     <DropdownMenuItem>Edit</DropdownMenuItem>
//                     <DropdownMenuItem onClick={() => setDeactivateOpen(true)}>
//                       Deactivate
//                     </DropdownMenuItem>
//                     <DropdownMenuItem>Reset Password</DropdownMenuItem>
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>

//       <Pagination setPage={setPage} page={page} totalPages={totalPages} />

//       {/* Deactivate Dialog */}
//       <Dialog open={deactivateOpen} onOpenChange={setDeactivateOpen}>
//         <DialogContent className="max-w-md rounded-xl p-8">
//           <DialogHeader className="flex flex-col items-center space-y-4">
//             <Image src={ErrorIcon} alt="Warning" width={48} height={48} />
//             <DialogTitle className="text-2xl font-semibold text-center">
//               Deactivate Admin
//             </DialogTitle>
//             <DialogDescription className="text-center text-gray-600">
//               Are you sure you want to deactivate this admin? This action cannot
//               be undone.
//             </DialogDescription>
//           </DialogHeader>

//           <div className="mt-6 flex justify-center gap-4">
//             <Button
//               variant="outline"
//               className="w-28"
//               onClick={() => setDeactivateOpen(false)}
//             >
//               No
//             </Button>
//             <Button
//               variant="destructive"
//               className="w-28"
//               onClick={() => {
//                 // Handle deactivation here
//                 setDeactivateOpen(false);
//               }}
//             >
//               Yes
//             </Button>
//           </div>
//         </DialogContent>
//       </Dialog>

//       <Dialog open={editAdminModal} onOpenChange={setEditAdminModal}>
//         <DialogContent className="px-0 rounded-lg max-w-md">
//           <DialogHeader>
//             <DialogTitle className="text-2xl font-semibold text-center">
//               Add Admin
//             </DialogTitle>
//           </DialogHeader>

//           <form className="flex flex-col justify-between px-5 md:px-10 pb-4 space-y-6 ">
//             {Fields.map((field, index) => (
//               <FormField
//                 name={field.name}
//                 key={index}
//                 type={field.type}
//                 placeholder={field.placeholder}
//                 label={field.label}
//                 forget={field?.forgetPassword}
//               />
//             ))}
//             <Button variant="appBtn" className="w-full mt-4">
//               Update
//             </Button>
//           </form>
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
import { Button } from "@/components/ui/button";
import Pagination from "@/components/table/Pagination";
import { EllipsisVertical } from "lucide-react";
import Image from "next/image";

import ErrorIcon from "@/assets/icons/ErrorIcon.svg";
import { ListOfAdmins as clients, AddAdminFields as Fields } from "@/data/fields";
import FormField from "../forms/FormField";

export default function AdminTable() {
  const [deactivateOpen, setDeactivateOpen] = useState(false);
  const [editAdminModal, setEditAdminModal] = useState(false);

  const CARDS_PER_PAGE = 10;
  const [dataList, setDataList] = useState(clients);
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(dataList.length / CARDS_PER_PAGE);
  const startIdx = (page - 1) * CARDS_PER_PAGE;
  const currentData = dataList.slice(startIdx, startIdx + CARDS_PER_PAGE);

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead colSpan={8} className="text-xl font-medium p-5 text-left">
              List of All Admins
            </TableHead>
          </TableRow>
          <TableRow className="bg-app-table-header hover:bg-app-table-header">
            <TableHead className="px-5 text-center">S. No.</TableHead>
            <TableHead className="text-left">Location</TableHead>
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
              <TableCell className="font-medium px-5 text-center">{client.id}</TableCell>
              <TableCell>{client.location}</TableCell>
              <TableCell>{client.AdminName}</TableCell>
              <TableCell>{client.AdminEmail}</TableCell>
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
                  <DropdownMenuTrigger asChild>
                    <EllipsisVertical className="text-[#A0A4A8] cursor-pointer" size={16} />
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="py-2 border-0 shadow-[0px_12px_26px_0px_#101E730F]">
                    <DropdownMenuItem onClick={() => setEditAdminModal(true)}>Edit</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setDeactivateOpen(true)}>Deactivate</DropdownMenuItem>
                    <DropdownMenuItem>Reset Password</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination setPage={setPage} page={page} totalPages={totalPages} />

      {/* Deactivate Dialog */}
      <Dialog open={deactivateOpen} onOpenChange={setDeactivateOpen}>
        <DialogContent className="max-w-md rounded-xl p-8">
          <DialogHeader className="flex flex-col items-center space-y-4">
            <Image src={ErrorIcon} alt="Warning" width={48} height={48} />
            <DialogTitle className="text-2xl font-semibold text-center">Deactivate Admin</DialogTitle>
            <DialogDescription className="text-center text-gray-600">
              Are you sure you want to deactivate this admin? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 flex justify-center gap-4">
            <Button variant="outline" className="w-28" onClick={() => setDeactivateOpen(false)}>No</Button>
            <Button
              variant="destructive"
              className="w-28"
              onClick={() => {
                // Handle deactivation logic here
                setDeactivateOpen(false);
              }}
            >
              Yes
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Admin Dialog */}
      <Dialog open={editAdminModal} onOpenChange={setEditAdminModal}>
        <DialogContent className="px-0 rounded-lg max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold text-center">Add Admin</DialogTitle>
          </DialogHeader>

          <form className="flex flex-col justify-between px-5 md:px-10 pb-4 space-y-6">
            {Fields.map((field, index) => (
              <FormField
                key={index}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                label={field.label}
                forget={field?.forgetPassword}
              />
            ))}
            <Button type="submit" variant="appBtn" className="w-full mt-4">
              Update
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

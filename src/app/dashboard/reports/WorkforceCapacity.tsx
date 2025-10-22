import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { WorkForceTable as currentData } from "@/data/fields";
import WorkforceCard from "./WorkforceCard";

export default function WorkforceCapacity() {
  return (
    <>
      <div className="flex  gap-5 text-[#2A2338]">
        <span className="text-base font-medium">Workforce Capacity</span>

        <WorkforceCard category="Below 40%" value="4"/>
        <WorkforceCard category="40% to 65%" value="3"/>
        <WorkforceCard category="65% to 80%" value="2"/>
        <WorkforceCard category="80% and above" value="1"/>

      </div>
      <div className="bg-white rounded-lg overflow-hidden shadow-[0px_4px_8px_0px_rgba(16,30,115,0.06)]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead
                colSpan={8}
                className="text-xl text-left font-medium p-5"
              >
                List of Workforce Capacity
              </TableHead>
            </TableRow>
            <TableRow className="bg-app-table-header hover:bg-app-table-header">
              <TableHead className="px-5 text-center]">S. No.</TableHead>
              <TableHead className="text-left ">Geography</TableHead>
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
                <TableCell className="text-left ">{client.geography}</TableCell>
                <TableCell className="text-left hidden md:block">
                  {client.wardName}
                </TableCell>
                <TableCell className="text-left">
                  {client.personalEmail}
                </TableCell>
                <TableCell className="text-left">
                  {client.registeredOn}
                </TableCell>
                <TableCell className="text-left">{client.operations}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

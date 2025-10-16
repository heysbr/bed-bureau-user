"use client";
import DatePicker from "@/components/layout/DatePicker";
import PageTitle from "@/components/layout/PageTittle";
import SearchField from "@/components/layout/SearchField";
import AuditTrailsTable from "@/components/table/AuditTrailsTable";

export default function Page() {
  return (
    <div className="space-y-6">
      <PageTitle title="Audit Trails" />
      <div className="flex justify-between  items-end gap-5 flex-col md:flex-row">
        <SearchField />
        <div className="flex gap-5 flex-col md:flex-row">
          <DatePicker label="Start Date" />
          <DatePicker label="End Date" />
        </div>
      </div>
      <div className=" bg-white rounded-lg overflow-hidden shadow-[0px_4px_15px_0px_#DFE5F0]">
        {/* table component will go here */}
        <AuditTrailsTable />
      </div>
    </div>
  );
}


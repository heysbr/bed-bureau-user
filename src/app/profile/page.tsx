import { TextField } from "@/components/forms/Password";
import NavBar from "@/components/layout/NavBar";
import PageTitle from "@/components/layout/PageTittle";
import WardsTable from "@/components/table/WardsTable";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div className={` h-screen bg-app-bg`}>
      <NavBar />
      <div className="p-5 md:py-10 md:px-25 md:pb-25 flex flex-col gap-10 ">
        <PageTitle title="Profile"/>
        <div className=" flex p-10 gap-10 bg-white rounded-lg overflow-hidden shadow-[0px_4px_8px_0px_rgba(16,30,115,0.06)]">
          <TextField label="Client Contact Name" placeholder="John Cooper"/>
          <TextField label="Email ID"  placeholder="john@gmail.com"/>

        </div>
        <div className="flex justify-between">
          <Button className="bg-[#FFC671]">Update Password</Button>
          <Button className="bg-app-primary">Update </Button>
        </div>
      </div>
    </div>
  );
}

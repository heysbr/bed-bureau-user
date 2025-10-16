import { Button } from "@/components/ui/button";
import DownloadBtn from "@/assets/icons/downloadBtn.svg";
import Image from "next/image";

export default function DailyReport() {
  return (
    <div className="flex flex-col p-10 gap-5 bg-white rounded-lg overflow-hidden shadow-[0px_4px_8px_0px_rgba(16,30,115,0.06)]">
      <h1 className="font-medium text-lg">You can download the report</h1>
      <div className="flex gap-8">
        <Button variant="navBtn" className="bg-[#15BA9B] text-white">
          <Image src={DownloadBtn} alt="downloadBtn" />
          Download Current Report
        </Button>
        <Button variant="navBtn" className="bg-[#FFB648] text-white">
          <Image src={DownloadBtn} alt="downloadBtn" />
          Download Date Wise Report
        </Button>
      </div>
    </div>
  );
}

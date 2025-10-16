"use client";
import PageTitle from "@/components/layout/PageTittle";
import { Button } from "@/components/ui/button";
import { ReactNode, useState } from "react";
import DailyReport from "./DailyReport";
import WorkforceCapacity from "./WorkforceCapacity";

type TabType = "daily-report" | "workforce-capacity";

export default function Reports({dailyReport}:{dailyReport: ReactNode}) {
  const [toggleTab, setToggleTab] = useState<TabType>("daily-report");
  console.log(dailyReport)
  return (
    <div className="flex flex-col gap-8">
      <PageTitle title="Reports" />
      <div className=" flex p-10 gap-8 bg-white rounded-lg overflow-hidden shadow-[0px_4px_8px_0px_rgba(16,30,115,0.06)]">
        <Button
          variant={`${
            toggleTab === "daily-report" ? "navBtnActive" : "navBtn"
          }`}
          onClick={() => setToggleTab("daily-report")}
        >
          Daily Report
        </Button>
        <Button
          variant={`${
            toggleTab === "workforce-capacity" ? "navBtnActive" : "navBtn"
          }`}
          onClick={() => setToggleTab("workforce-capacity")}
        >
          WorkForce Capacity
        </Button>
      </div>
      {toggleTab==="daily-report" && <DailyReport/>}
      {toggleTab==="workforce-capacity" && <WorkforceCapacity/>}

    </div>
  );
}

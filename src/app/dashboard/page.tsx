"use client";
import Charts from "@/components/layout/Charts";
import DropDownSearch from "@/components/layout/DropDownSearch";
import PageTitle from "@/components/layout/PageTittle";
import { Button } from "@/components/ui/button";

import { dashboardCardData as cards } from "@/data/fields";
import Image from "next/image";

export default function Page() {
  // const router = useRouter();

  // useEffect(() => {
  //   const auth = localStorage.getItem("authorization");
  //   console.log("Auth Check in Page.tsx:", auth);
  //   if (!auth) {
  //     router.replace("../login"); // client-side safety net
  //   }
  // }, [router]);
  

  return (
    <div className="space-y-6">
      <PageTitle title="Dashboard" />

      <div className="flex flex-col md:flex-row justify-end gap-5 pb-5">
        <DropDownSearch  placeholder="All (Geography)" />
        <DropDownSearch placeholder="All (Ward Type)" />
        <Button className="w-60 md:w-fit rounded-2xl shadow-[0_4px_5px_0_#E5E9EE4D] bg-white text-black  hover:bg-app-primary hover:text-white">
          Clear All
        </Button>
      </div>


      <div className="flex flex-col md:grid grid-cols-4 rounded-2xl gap-x-8 gap-y-8">
        {cards.map((card, i) => (
          <div
            className="relative bg-white rounded-lg shadow-[0_12px_26px_0_#BCBCBC26] p-5"
            key={i}
          >
            <span className="font-semibold text-2xl">{card.value}</span>
            <br />
            <span className="font-medium text-sm">{card.label}</span>
            <Image
              src={card.icon}
              alt={card.label}
              className="absolute top-3 right-3"
            />
          </div>
        ))}
      </div>
      <Charts />
    </div>
  );
}


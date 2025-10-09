"use client";
import Charts from "@/components/layout/Charts";
import PageTitle from "@/components/layout/PageTittle";
import SearchField from "@/components/layout/SearchField";
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
      <PageTitle />
      <div className="flex justify-end gap-5">
        <SearchField />
        <SearchField />
        <Button>Clear All</Button>
      </div>
      <div className="grid grid-cols-4 rounded-2xl gap-x-8 gap-y-8">
        {cards.map((card, i) => (
          <div
            className="relative bg-white rounded-lg shadow-[0_12px_26px_0_rgba(188,188,188,0.15)] p-5"
            key={i}
          >
            <span className="font-semibold text-2xl">{card.value}</span><br />
            <span className="font-medium text-sm">{card.label}</span>
            <Image src={card.icon} alt={card.label} className="absolute top-3 right-3"/>
          </div>
        ))}
      </div>

         <Charts/>

    </div>
  );
}

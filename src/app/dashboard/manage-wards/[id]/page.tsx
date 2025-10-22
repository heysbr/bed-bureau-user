import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import EditIcon from "@/assets/icons/edit.svg";
import Image from "next/image";

export default function BreadcrumbWithCustomSeparator() {
  return (
    <div>
      <div className="flex justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/dashboard/manage-wards">Manage Wards</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Button variant="navBtnActive">
          <Image src={EditIcon} alt="EditIcon" />
          Edit
        </Button>
      </div>
      <div>
        <div className=" flex p-10 gap-8 bg-white rounded-lg overflow-hidden shadow-[0px_4px_8px_0px_rgba(16,30,115,0.06)]"></div>
      </div>

      <div className="border-b">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

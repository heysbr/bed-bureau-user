import Image from "next/image";
import ProfileLogo from "@/assets/icons/profile_photo.svg";
import { useAppSelector } from "@/store/hooks";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ProfileSection({logout}:{logout:()=>void}) {
  const { adminDetail, isLoader, error } = useAppSelector(
    (state) => state.admin
  );

  // const handleClick = ()=>{
  //   console.log( { adminDetail, isLoader, error })
  // }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
            <div className="flex px-3 gap-2">
              <Image src={ProfileLogo} alt="Profile" />
              <div className="text-xs flex flex-col items-start">
                <span className="text-sm">
                  Hi, {adminDetail?.user?.contactName}
                </span>
                <span>{adminDetail?.user?.email}</span>
                <span>Admin</span>
              </div>
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="translate-y-1.5">
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

// {!isLoader ? (
//         <div className="hidden md:flex w-70 items-center">
//           <Image src={ProfileLogo} alt="Profile" />
//           <div className="text-xs mx-3 flex flex-col  items-start">
//             <span className="text-sm">
//               Hi, {adminDetail?.user?.contactName}
//             </span>
//             <br />
//             <span>{adminDetail?.user?.email}</span>
//             <br />
//             <span>Admin</span>
//           </div>
//         </div>
//       ) : (
//         <div className="w-70">{error || "Loading...."}</div>
//       )}

import Image from "next/image";
import ProfileLogo from "@/assets/icons/profile_photo.svg";
import { useAppSelector } from "@/store/hooks";

export default function ProfileSection() {
  const { adminDetail, isLoader, error } = useAppSelector((state) => state.admin);


  // const handleClick = ()=>{
  //   console.log( { adminDetail, isLoader, error })
  // }     

  return (
    <>
      {!isLoader ? <div className="hidden md:flex w-70 items-center">
        <Image src={ProfileLogo} alt="Profile" />
        <div className="text-xs mx-3">
          <span className="text-sm">Hi, {adminDetail?.user?.contactName}</span>
          <br />
          <span>{adminDetail?.user?.email}</span>
          <br />
          <span>Admin</span>
        </div>
      </div> : <div className="w-70">{error || "Loading...."}</div>}
      
    </>
  );
}

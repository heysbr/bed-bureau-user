"use client";
import Image from "next/image";
import Logo from "@/assets/icons/bed_bureau_icon.svg";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import LogoutIcon from "@/assets/icons/logout.svg";
import { usePathname, useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { adminLogout } from "@/store/actions/adminAction";
import ProfileSection from "./ProfileSection";

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [toggleTab, setToggleTab] = useState(pathname);

  const navItems = [
    { label: "Manage Client", path: "/manage-client" },
    { label: "Update Profile", path: "/update-profile" },
    { label: "Reset Password", path: "/reset-password" },
  ];
  useEffect(() => {
    setToggleTab(pathname);
  }, [pathname]);

  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = async () => {
    try {
      await dispatch(adminLogout());
      toast.success("Logout successful!");
      router.push("/login"); // or wherever you want to redirect
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Logout failed";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="flex border h-18 bg-white items-center ">
      {/* Left: Logo */}
      <div className="md:border-r pr-5 h-full flex items-center ml-5 md:ml-25 md:justify-end">
        <Image src={Logo} alt="Logo" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-1 justify-between items-center px-5">
        <div className="flex gap-4">
          {navItems.map((item) => (
            <Button
              key={item.path}
              variant={
                toggleTab.includes(item.path) ? "navBtnActive" : "navBtn"
              }
              onClick={() => {
                setToggleTab(item.path);
                router.push(item.path);
              }}
            >
              {item.label}
            </Button>
          ))}
        </div>

        <div className="flex items-center">
          <Button
            className="mx-5"
            variant="navBtn"
            onClick={handleLogout}
          >
            <Image src={LogoutIcon} alt="Logout" />
            Logout
          </Button>
          <div className="h-8 bg-[#DCDFE9] w-[1px]" />
        </div>
      </div>

      {/* Mobile Menu Button */}

      <div className="ml-auto md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="lg">
              <Menu className="scale-150 mr-3" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <SheetHeader>
              <SheetTitle>
                <div className="md:border-r pr-5 h-full flex items-center ml-5 md:ml-25 md:justify-end">
                  <Image src={Logo} alt="Logo" />
                </div>
              </SheetTitle>
              <VisuallyHidden>
                <SheetDescription>Signed in as John</SheetDescription>
              </VisuallyHidden>
            </SheetHeader>

            <div className="flex flex-col gap-4 m-6">
              {navItems.map((item) => (
                <SheetClose asChild key={item.path}>
                  <Button
                    variant={
                      toggleTab === item.path ? "navBtnActive" : "navBtn"
                    }
                    onClick={() => {
                      setToggleTab(item.path);
                      router.push(item.path);
                    }}
                  >
                    {item.label}
                  </Button>
                </SheetClose>
              ))}
              <Button
                className="mt-4"
                variant="navBtn"
                onClick={handleLogout}
              >
                <Image src={LogoutIcon} alt="Logout" />
                Logout
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Right: Profile */}
      <ProfileSection/>
    </div>
  );
}

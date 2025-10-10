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

import Grid from "@/assets/icons/grid.svg";
import GridMuted from "@/assets/icons/grid-muted.svg";

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [toggleTab, setToggleTab] = useState(pathname);

  const navItems = [
    { label: "Manage Wards", path: "/dashboard/manage-wards" },
    { label: "Manage Admin", path: "/dashboard/manage-admin" },
    { label: "Audit Trails", path: "/dashboard/audit-trails" },
    { label: "Reports", path: "/dashboard/reports" },
    { label: "Geography", path: "/dashboard/geography" },
  ];
  useEffect(() => {
    setToggleTab(pathname);
  }, [pathname]);

  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = async () => {
    try {
      await dispatch(adminLogout());
      localStorage.clear();
      toast.success("Logout successful!");
      router.push("/login"); // or wherever you want to redirect
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Logout failed";
      toast.error(errorMessage);
    }
  };




  const handleClick = (path: string) => {
    setToggleTab(path);
    router.push(path);
  };
  return (
    <div className="flex border h-18 bg-white items-center ">
      <Button 
      onClick={handleLogout}
      className=" border w-fit bg-app-primary absolute top-1 left-1 rounded-lg px-2 py-1 text-white">
        Logout
      </Button>
      {/* Left: Logo */}
      <div className="md:border-r pr-5 h-full flex items-center ml-5 md:ml-25 md:justify-end">
        <Image src={Logo} alt="Logo" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-1 justify-between items-center px-5">
        <div className="flex gap-4 items-center">
          <Image
            src={toggleTab === "/dashboard" ? Grid : GridMuted}
            alt="grid"
            className=" size-9"
            onClick={() => handleClick("/dashboard")}
          />
          {navItems.map((item, i) => (
            <Button
              // key={item.path}
              key={i}
              variant={toggleTab === item.path ? "navBtnActive" : "navBtn"}
              onClick={() => handleClick(item.path)}
            >
              {item.label}
            </Button>
          ))}
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
              <SheetClose asChild key={"/dashboard"}>
                <Button
                  variant={
                    toggleTab === "/dashboard" ? "navBtnActive" : "navBtn"
                  }
                  onClick={() => {
                    setToggleTab("/dashboard");
                    router.push("/dashboard");
                  }}
                >
                  Dashboard
                </Button>
              </SheetClose>
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
              <Button className="mt-4" variant="navBtn" onClick={handleLogout}>
                <Image src={LogoutIcon} alt="Logout" />
                Logout
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Right: Profile */}
      <ProfileSection />
    </div>
  );
}

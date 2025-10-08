"use client";
import NavBar from "@/components/layout/NavBar";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Error() {
  const router = useRouter();
  return (
    <>
      <NavBar />
      <div className="h-[80vh] flex flex-col justify-center items-center gap-4 px-10">
        <h2 className="text-center  text-5xl font-semibold m-10 text-app-form-label">
          Oops! Something went wrong!
        </h2>
        <Button variant={"appBtn"} onClick={() => router.push("/login")}>
          Go to Login Page
        </Button>
      </div>
    </>
  );
}

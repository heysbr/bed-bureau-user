"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@radix-ui/react-label"
import Image from "next/image"
import Profile from "@/assets/icons/AddLogoDummy.svg"

export default function UploadField() {
  const [preview, setPreview] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setPreview(URL.createObjectURL(file))
    }
  }

  return (
    <div className="flex flex-col gap-3 w-full items-center">
      <input
        type="file"
        id="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
      <Image
        src={preview || Profile}
        alt="Profile"
        width={100}
        height={100}
        className="w-[100px] h-[100px] rounded-full object-cover"
      />
      <Label htmlFor="file">
        <Button variant={"formProfileAddLogout"} className="scale-75 cursor-pointer" asChild>
          <span>{preview ? "Change Logo" : "Add Logo"}</span>
        </Button>
      </Label>
    </div>
  )
}

"use client";

import EyeIcon from "@/assets/icons/toggle_password.svg";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import ForgetPassword from "./ForgetPassword";
import { useState } from "react";
import Error from "./Error";
import Image from "next/image";

type EmailFieldProps = React.InputHTMLAttributes<HTMLInputElement> &{
  label?: string;
  forget?: boolean;
  error?: string;
};

export default function Password({
  label = "Password",
  required = false,
  forget = false,
  error,
  ...props
}: EmailFieldProps) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="relative">
      <Label htmlFor="email" className="my-2 text-app-label font-semibold">{label}{required && <span className="text-red-500">*</span>}</Label>
      <div className="m-0 p-0 relative">
        <Input
          type={toggle ? "text" : "password"}
          {...props}
        />

        <Image src={EyeIcon} alt="Show Password" className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" onPointerUp={() => setToggle(false)}  onPointerDown={() => setToggle(true)} />
      </div>
      {forget && <ForgetPassword />}
      {error && <Error message={error} />}
    </div>
  );
}


type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  label?: string;
};

export  function TextField({
  label,
  required = false,
  error,
  ...props
}: TextFieldProps) {
  return (
    <div className="">
      <Label htmlFor={props.name} className="my-2 text-app-label font-semibold">
        {label}
        {required && <span className="text-red-500">*</span>}
      </Label>
      <Input {...props} />
      {error && <Error message={error} />}
    </div>
  );
}



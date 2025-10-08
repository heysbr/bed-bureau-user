"use client";

import { Input } from "../ui/input";
import { Label } from "@/components/ui/label";
import Error from "./Error";

type EmailFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  label?: string;
};

export default function EmailField({
  label,
  required = false,
  error,
  ...props
}: EmailFieldProps) {
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

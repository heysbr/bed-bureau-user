"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Error from "@/components/forms/Error";

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  label?: string;
};

export default function TextField({
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

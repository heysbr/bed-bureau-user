import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-label";
import Error from "./Error";

type SelectFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  required?: boolean;
  error?: string;
};

export default function SelectField({
  label = "Email address",
  required = false,
  placeholder = "Select an option",
  error,
  name,
  ...props
}: // register,
SelectFieldProps) {
  return (
    <>
      <div className="">
        <Label htmlFor={name} className="my-2 text-app-label font-semibold">
          {label}
          {required && <span className="text-red-500">*</span>}
        </Label>
        <Select name={name}>
          <SelectTrigger className="w-full cursor-pointer">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent {...props}>

            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectContent>
        </Select>
        {error && <Error message={error} />}
      </div>
    </>
  );
}

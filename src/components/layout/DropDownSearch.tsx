import { Search } from "lucide-react";
import { Input } from "../ui/input";
import Arrow from "@/assets/icons/DropDownSearchArrow.svg";
import Image from "next/image";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type DropDownSearchProps = {
  placeholder?: string;
  values?: string[];
};

export default function DropDownSearch(props: DropDownSearchProps) {
  const placeholder = props?.placeholder || "All (Geography)";
  const values = props?.values || [
    "option a",
    "option b",
    "option c",
    "option d",
  ];
  return (
    <Select>
      <SelectTrigger className="w-60 bg-white rounded-2xl px-4 border-0">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {values.map((value) => (
          <SelectItem key={value} value={value} className="uppercas">
            {value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

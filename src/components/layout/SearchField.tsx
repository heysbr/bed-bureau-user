import { Search } from "lucide-react";
import { Input } from "../ui/input";

export default function SearchField() {
  return (
    <div className="relative w-96 bg-white rounded-4xl overflow-hidden shadow">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-app-primary" />
      <Input
        type="text"
        placeholder="Search..."
        className="pl-10 border-0"
      />
    </div>
  );
}

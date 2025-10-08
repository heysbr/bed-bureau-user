"use client";
import { usePathname } from "next/navigation";

export default function PageTitle({ className }: { className?: string }) {
  const pathname = usePathname();
  return (
    <div className={`text-2xl font-semibold ${className}`}>
      {pathname.split("/").filter(Boolean).map((segment) => segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()))}
    </div>
  );
}

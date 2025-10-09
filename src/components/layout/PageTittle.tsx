"use client";
import { usePathname } from "next/navigation";

export default function PageTitle({ className }: { className?: string }) {
  const pathname = usePathname();
  return (
    <div className={`text-2xl font-semibold ${className}`}>
  {(() => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 1 && segments[0] === "dashboard") {
      return "Dashboard";
    }
    const lastSegment = segments[segments.length - 1];
    return lastSegment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  })()}
</div>
  );
}

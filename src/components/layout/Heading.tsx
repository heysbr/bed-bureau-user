import { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
  className?:string;
};
export default function Heading({children,className}:HeadingProps) {
  return (
    <h3 className={`w-full font-bold text-4xl ${className}`}>{children}</h3>
  )
}
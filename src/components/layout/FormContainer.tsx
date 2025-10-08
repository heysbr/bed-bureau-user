import { ReactNode } from "react";

type FormContainerProps = {
  children: ReactNode;
};
export default function FormContainer({children}:FormContainerProps) {
  return (
    <div className="w-100 bg-light p-5">{children}</div>
  )
}
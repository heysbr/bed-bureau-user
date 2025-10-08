import { fieldComponentMap } from "@/data/fields";
import TextField from "./TextField";
import { JSX } from "react";

type FormFieldProps = {
  type: string;
  name: string;
  [key: string]: string | number | boolean | JSX.Element | object | undefined | unknown;
};

export default function FormField(props: FormFieldProps) {
  const { type, ...rest } = props;

  const FieldComponent = fieldComponentMap[type] ?? TextField;
  return <FieldComponent {...rest} />;
}

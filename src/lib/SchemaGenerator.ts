import { z, ZodType } from "zod";

export type FieldType = "text" | "password" | "email" | "checkbox" 
// | "select";

export type FieldConfig = {
  name: string;
  type: FieldType;
  placeholder?: string;
  label?: string;
  forgetPassword?: boolean;
  required?: boolean;
};

export const fieldValidators: Record<FieldType, ZodType> = {
  text: z.string().min(1, "This field is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  email: z.email("Invalid email"),
  checkbox: z
    .boolean()
    .refine((val) => val === true, { message: "You must accept this" }),
  // select: z.string().min(1, "Please select an option"),
};

export function generateSchema(fieldConfig: FieldConfig[]) {
  const shape: Record<string, ZodType> = {};

  fieldConfig.forEach((field) => {
    const validator = fieldValidators[field.type];
    if (validator) {
      shape[field.name] = validator;
    }
  });

  return z.object(shape);
}

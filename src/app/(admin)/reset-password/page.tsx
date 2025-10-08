"use client";

import FormField from "@/components/forms/FormField";
import PageTitle from "@/components/layout/PageTittle";
import { Button } from "@/components/ui/button";

import { ResetPasswordFields as Fields } from "@/data/fields";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const passwordSchema = z
  .object({
    currentPassword: z.string().min(6, "Current password is required"),
    newPassword: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Must contain at least one uppercase letter")
      .regex(/[a-z]/, "Must contain at least one lowercase letter")
      .regex(/\d/, "Must contain at least one number")
      .regex(/[^A-Za-z0-9]/, "Must contain at least one special character"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof passwordSchema>;

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(passwordSchema),
    mode: "all",
  });

  function submit(data: FormValues) {
    alert("form submitted successfully...");
    console.table(data);
  }
  return (
    <>
      <div className="space-y-6">
        <PageTitle />

        <div className="flex flex-row justify-center ">
          <form
            onSubmit={handleSubmit(submit)}
            className="flex flex-col bg-white md:p-20 p-5 space-y-2 md:space-y-6 w-full md:w-125 rounded-lg shadow-[0px_4px_15px_0px_#DFE5F0]"
          >
            {Fields.map((field, index) => (
              <FormField
                key={index}
                type={field.type}
                placeholder={field.placeholder}
                label={field.label}
                required={field.required}
                {...register(field.name as keyof FormValues)}
                error={errors[field.name as keyof FormValues]?.message}
              />
            ))}
            <p className="text-xs m-0 mt-5 text-app-primary">
              Note: You must complete all the mandatory fields
            </p>
            <Button variant="appBtn" className="w-full mt-4">
              Update
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

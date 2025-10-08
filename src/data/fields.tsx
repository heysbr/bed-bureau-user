import Checkbox from "@/components/forms/Checkbox";
import EmailField from "@/components/forms/EmailField";
import Password from "@/components/forms/Password";
import SelectField from "@/components/forms/SelectField";
import TextField from "@/components/forms/TextField";
import UploadField from "@/components/forms/UploadField";
import type { FieldType, FieldConfig } from "@/lib/SchemaGenerator";

interface FormFieldProps {
  name: string;
  type?: FieldType;
  placeholder?: string;
  label?: string;
  forget_password?: boolean;
}

export const fieldComponentMap: {
  [key: string]: React.ComponentType<FormFieldProps>;
} = {
  text: TextField,
  password: Password,
  // select: FormSelectField,
  select: SelectField,
  email: EmailField,
  checkbox: Checkbox,
  upload: UploadField,
};

export const LoginFields: FieldConfig[] = [
  {
    name: "email",
    type: "email" as FieldType,
    placeholder: "Enter email id",
    label: "Email ID",
  },
  {
    name: "password",
    type: "password" as FieldType,
    placeholder: "Enter Password",
    label: "Password",
    forgetPassword: true,
  },
];

export const AddClientFields: FieldConfig[] = [
  {
    name: "upload-profile",
    type: "upload" as FieldType,
    label: "Upload Profile",
  },
  {
    name: "location",
    type: "select" as FieldType,
    placeholder: "Enter location",
    label: "Location",
  },
  {
    name: "client-organisation-name",
    type: "text" as FieldType,
    placeholder: "Enter Client Organisation Name",
    label: "Client Organisation Name",
  },
  {
    name: "contact-person-name",
    type: "text" as FieldType,
    placeholder: "Enter Contact Person Name",
    label: "Contact Person Name",
  },
  {
    name: "client-email",
    type: "email" as FieldType,
    placeholder: "Client Email",
    label: "Enter Client Email",
  },
];

export const UpdateProfileFields: FieldConfig[] = [
  {
    name: "Client Name",
    type: "text" as FieldType,
    placeholder: "Enter Client Name",
    label: "Client Name",
    required: true,
  },
  {
    name: "Contact Name",
    type: "text" as FieldType,
    placeholder: "Enter Contact Name",
    label: "Contact Name",
    required: true,
  },
];

export const ResetPasswordFields: FieldConfig[] = [
  {
    name: "currentPassword",
    type: "password" as FieldType,
    placeholder: "Enter Current Password",
    label: "Current Password",
    required: true,
  },
  {
    name: "newPassword",
    type: "password" as FieldType,
    placeholder: "Enter New Password",
    label: "New Password",
    required: true,
  },
  {
    name: "confirmPassword",
    type: "password" as FieldType,
    placeholder: "Enter Confirm Password",
    label: "Confirm Password",
    required: true,
  },
];

export const clients = [
  {
    id: 1,
    location: "New York",
    clientName: "Client name 1",
    contactName: "Leslie Alexander",
    contactEmail: "leslie.alexander@example.com",
    registeredOn: "05 July 2022",
    status: "Active",
  },
  {
    id: 2,
    location: "London",
    clientName: "Client name 2",
    contactName: "Ronald Richards",
    contactEmail: "ronald.richards@example.com",
    registeredOn: "24 June 2022",
    status: "Active",
  },
  {
    id: 3,
    location: "Berlin",
    clientName: "Client name 3",
    contactName: "Jane Cooper",
    contactEmail: "jane.cooper@example.com",
    registeredOn: "20 June 2022",
    status: "Active",
  },
  {
    id: 4,
    location: "Paris",
    clientName: "Client name 4",
    contactName: "Robert Fox",
    contactEmail: "robert.fox@gmail.com",
    registeredOn: "14 June 2022",
    status: "Pending",
  },
  {
    id: 5,
    location: "Toronto",
    clientName: "Client name 5",
    contactName: "Jenny Wilson",
    contactEmail: "jenny.wilson@example.com",
    registeredOn: "20 May 2022",
    status: "Active",
  },
  {
    id: 6,
    location: "Sydney",
    clientName: "Client name 6",
    contactName: "Ronald Richards",
    contactEmail: "ronald.richards@example.com",
    registeredOn: "10 May 2022",
    status: "Inactive",
  },
  {
    id: 7,
    location: "Dubai",
    clientName: "Client name 7",
    contactName: "Leslie Alexander",
    contactEmail: "leslie.alexander@example.com",
    registeredOn: "20 May 2022",
    status: "Active",
  },
  {
    id: 8,
    location: "Tokyo",
    clientName: "Client name 8",
    contactName: "Robert Fox",
    contactEmail: "robert.fox@gmail.com",
    registeredOn: "14 June 2022",
    status: "Inactive",
  },
  {
    id: 9,
    location: "Delhi",
    clientName: "Client name 9",
    contactName: "Jenny Wilson",
    contactEmail: "jenny.wilson@example.com",
    registeredOn: "20 June 2022",
    status: "Pending",
  },
  {
    id: 10,
    location: "Singapore",
    clientName: "Client name 10",
    contactName: "Ronald Richards",
    contactEmail: "ronald.richards@example.com",
    registeredOn: "10 May 2022",
    status: "Active",
  },
  // repeat with new IDs for 11–30
  {
    id: 11,
    location: "New York",
    clientName: "Client name 11",
    contactName: "Leslie Alexander",
    contactEmail: "leslie11@example.com",
    registeredOn: "05 Jul 2022",
    status: "Active",
  },
  {
    id: 12,
    location: "London",
    clientName: "Client name 12",
    contactName: "Ronald Richards",
    contactEmail: "ronald12@example.com",
    registeredOn: "24 Jun 2022",
    status: "Active",
  },
  {
    id: 13,
    location: "Berlin",
    clientName: "Client name 13",
    contactName: "Jane Cooper",
    contactEmail: "jane13@example.com",
    registeredOn: "20 Jun 2022",
    status: "Active",
  },
  {
    id: 14,
    location: "Paris",
    clientName: "Client name 14",
    contactName: "Robert Fox",
    contactEmail: "robert14@example.com",
    registeredOn: "14 Jun 2022",
    status: "Pending",
  },
  {
    id: 15,
    location: "Toronto",
    clientName: "Client name 15",
    contactName: "Jenny Wilson",
    contactEmail: "jenny15@example.com",
    registeredOn: "20 May 2022",
    status: "Active",
  },
  {
    id: 16,
    location: "Sydney",
    clientName: "Client name 16",
    contactName: "Ronald Richards",
    contactEmail: "ronald16@example.com",
    registeredOn: "10 May 2022",
    status: "Inactive",
  },
  {
    id: 17,
    location: "Dubai",
    clientName: "Client name 17",
    contactName: "Leslie Alexander",
    contactEmail: "leslie17@example.com",
    registeredOn: "20 May 2022",
    status: "Active",
  },
  {
    id: 18,
    location: "Tokyo",
    clientName: "Client name 18",
    contactName: "Robert Fox",
    contactEmail: "robert18@example.com",
    registeredOn: "14 Jun 2022",
    status: "Inactive",
  },
  {
    id: 19,
    location: "Delhi",
    clientName: "Client name 19",
    contactName: "Jenny Wilson",
    contactEmail: "jenny19@example.com",
    registeredOn: "20 Jun 2022",
    status: "Pending",
  },
  {
    id: 20,
    location: "Singapore",
    clientName: "Client name 20",
    contactName: "Ronald Richards",
    contactEmail: "ronald20@example.com",
    registeredOn: "10 May 2022",
    status: "Active",
  },
  {
    id: 21,
    location: "New York",
    clientName: "Client name 21",
    contactName: "Leslie Alexander",
    contactEmail: "leslie21@example.com",
    registeredOn: "05 Jul 2022",
    status: "Active",
  },
  {
    id: 22,
    location: "London",
    clientName: "Client name 22",
    contactName: "Ronald Richards",
    contactEmail: "ronald22@example.com",
    registeredOn: "24 Jun 2022",
    status: "Active",
  },
  {
    id: 23,
    location: "Berlin",
    clientName: "Client name 23",
    contactName: "Jane Cooper",
    contactEmail: "jane23@example.com",
    registeredOn: "20 Jun 2022",
    status: "Active",
  },
  {
    id: 24,
    location: "Paris",
    clientName: "Client name 24",
    contactName: "Robert Fox",
    contactEmail: "robert24@example.com",
    registeredOn: "14 Jun 2022",
    status: "Pending",
  },
  {
    id: 25,
    location: "Toronto",
    clientName: "Client name 25",
    contactName: "Jenny Wilson",
    contactEmail: "jenny25@example.com",
    registeredOn: "20 May 2022",
    status: "Active",
  },
  {
    id: 26,
    location: "Sydney",
    clientName: "Client name 26",
    contactName: "Ronald Richards",
    contactEmail: "ronald26@example.com",
    registeredOn: "10 May 2022",
    status: "Inactive",
  },
  {
    id: 27,
    location: "Dubai",
    clientName: "Client name 27",
    contactName: "Leslie Alexander",
    contactEmail: "leslie27@example.com",
    registeredOn: "20 May 2022",
    status: "Active",
  },
  {
    id: 28,
    location: "Tokyo",
    clientName: "Client name 28",
    contactName: "Robert Fox",
    contactEmail: "robert28@example.com",
    registeredOn: "14 Jun 2022",
    status: "Inactive",
  },
  {
    id: 29,
    location: "Delhi",
    clientName: "Client name 29",
    contactName: "Jenny Wilson",
    contactEmail: "jenny29@example.com",
    registeredOn: "20 Jun 2022",
    status: "Pending",
  },
  {
    id: 30,
    location: "Singapore",
    clientName: "Client name 30",
    contactName: "Ronald Richards",
    contactEmail: "ronald30@example.com",
    registeredOn: "10 May 2022",
    status: "Active",
  },
];

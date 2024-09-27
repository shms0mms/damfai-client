import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";
import { Input } from "./input";
import { Label } from "./label";
export interface FieldProps<T extends FieldValues = object>
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "name"> {
  register: UseFormRegister<T>;
  params?: RegisterOptions<T>;
  error?: string;
  name: keyof T;
  label?: string;
}
export default function Field<T extends FieldValues>({
  name,
  register,
  error,
  label,
  placeholder,
  ...inputProps
}: FieldProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      {!!label && <Label htmlFor={name}>{label}</Label>}
      <Input placeholder={placeholder} {...inputProps} />
    </div>
  );
}

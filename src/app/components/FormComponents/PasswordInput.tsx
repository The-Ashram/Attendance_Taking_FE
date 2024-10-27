import {
  UseFormRegister,
  FieldValues,
  RegisterOptions,
  Path,
} from "react-hook-form";

// Define Props for PasswordInput
interface Props<T extends FieldValues> {
  name: Path<T>;
  label: string;
  register: UseFormRegister<T>;
  rules?: RegisterOptions<T, Path<T>>; // Validation rules for the password field
}

export default function PasswordInput<T extends FieldValues>({
  name,
  label,
  register,
  rules = {}, // Default to empty object if no rules provided
}: Props<T>) {
  return (
    <>
      <label>
        <strong>{label}:</strong>
        <input
          type="password"
          style={{ width: "100%", padding: "8px", margin: "8px 0" }}
          {...register(name, rules)} // Registering the password input
        />
      </label>
    </>
  );
}

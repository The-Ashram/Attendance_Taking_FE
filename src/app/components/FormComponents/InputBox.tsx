import {
  UseFormRegister,
  FieldValues,
  RegisterOptions,
  Path,
} from "react-hook-form";

// Define Props for InputBox
interface Props<T extends FieldValues> {
  name: Path<T>;
  label: string;
  defaultValue?: string;
  disabled?: boolean;
  register: UseFormRegister<T>;
  rules?: RegisterOptions<T, Path<T>>; // Use RegisterOptions for validation rules
}

export default function InputBox<T extends FieldValues>({
  name,
  label,
  defaultValue,
  disabled,
  register,
  rules = {}, // Default to empty object if no rules are provided
}: Props<T>) {
  return (
    <>
      <label>
        <strong>{label}:</strong>
        <input
          type="text"
          defaultValue={defaultValue}
          style={{ width: "100%", padding: "8px", margin: "8px 0" }}
          disabled={disabled}
          {...register(name, rules)} // Ensure proper type casting for register
        />
      </label>
    </>
  );
}

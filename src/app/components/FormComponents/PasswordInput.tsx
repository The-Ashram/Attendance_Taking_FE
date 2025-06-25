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
    <div style={{ marginBottom: "16px" }}>
      <label
        htmlFor={name}
        style={{
          fontSize: "1.5rem",
          fontWeight: "600",
          marginBottom: "8px",
          display: "inline-block",
          color: "#333",
        }}
      >
        {label}
      </label>
      <input
        type="password"
        id={name}
        style={{
          width: "100%",
          padding: "12px 16px",
          margin: "6px 0",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "1.3rem",
          color: "#000", // changed to black text
          backgroundColor: "#fff", // added white background
          outline: "none",
          transition: "border-color 0.2s ease, box-shadow 0.2s ease",
        }}
        {...register(name, rules)} // Registering the password input
        aria-describedby={`${name}-help`} // Accessible error handling
      />
    </div>
  );
}

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
    <div style={{ marginBottom: "20px" }}>
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
        type="text"
        id={name}
        defaultValue={defaultValue}
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
        disabled={disabled}
        {...register(name, rules)} // Ensure proper type casting for register
        aria-describedby={`${name}-help`} // Accessible error handling
      />
      {disabled && (
        <small
          style={{
            display: "block",
            marginTop: "4px",
            color: "#888",
          }}
        >
          This field is disabled
        </small>
      )}
    </div>
  );
}


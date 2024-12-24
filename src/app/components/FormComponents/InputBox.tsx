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
    <div style={{ marginBottom: "16px" }}>
      <label
        htmlFor={name}
        style={{
          fontSize: "14px",
          fontWeight: "600",
          marginBottom: "6px",
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
          fontSize: "14px",
          color: "#333",
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


interface Props {
  name?: string;
  label?: string;
  defaultValue?: string;
  disabled: boolean;
}

export default function InputBox({
  name,
  label,
  defaultValue,
  disabled,
}: Props) {
  return (
    <>
      <label>
        <strong>{label}:</strong>
        {defaultValue ? (
          <input
            type="text"
            name={name}
            style={{ width: "100%", padding: "8px", margin: "8px 0" }}
            defaultValue={defaultValue}
            disabled={disabled}
          />
        ) : (
          <input
            type="text"
            name={name}
            style={{ width: "100%", padding: "8px", margin: "8px 0" }}
          />
        )}
      </label>
    </>
  );
}

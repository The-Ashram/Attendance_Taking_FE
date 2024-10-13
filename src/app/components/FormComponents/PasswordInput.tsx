interface Props {
  label: string;
  name: string;
}

export default function PasswordInput({ name, label }: Props) {
  return (
    <>
      <label>
        <strong>{label}:</strong>
        <input
          type="text"
          name={name}
          style={{ width: "100%", padding: "8px", margin: "8px 0" }}
        />
      </label>
    </>
  );
}

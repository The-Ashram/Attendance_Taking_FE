import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

interface Props {
  label: string;
  options: string[];
}

export default function DropdownBox({ label, options }: Props) {
  return (
    <label>
      <strong>{label}</strong>
      <Dropdown options={options} />
    </label>
  );
}

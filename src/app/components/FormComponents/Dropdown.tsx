import Dropdown, { Option } from "react-dropdown";
import "react-dropdown/style.css";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface Props<T extends FieldValues> {
  label: string;
  options: string[];
  name: Path<T>;
  control: Control<T>;
}

export default function DropdownBox<T extends FieldValues>({
  label,
  options,
  name, // Destructure name property here
  control,
}: Props<T>) {
  return (
    <label>
      <strong>{label}</strong>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Dropdown
            options={options}
            onChange={(selectedOption: Option) =>
              onChange(selectedOption.value)
            }
            value={options.find((option) => option === value) || ""}
          />
        )}
      />
    </label>
  );
}

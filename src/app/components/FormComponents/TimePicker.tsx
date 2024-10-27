import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { Control, Controller } from "react-hook-form";

interface Props {
  name: string; // Add name property
  control: Control<any>; // Add control for react-hook-form
  defaultValue?: string | undefined;
  disabled: boolean;
  label: string;
}

export default function BasicTimePicker({
  name,
  control,
  defaultValue,
  disabled,
  label,
}: Props) {
  return (
    <label>
      <strong>{label}:</strong>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["TimePicker"]}>
          <Controller
            name={name}
            control={control}
            defaultValue={defaultValue ? dayjs(defaultValue) : null}
            render={({ field: { onChange, value } }) => (
              <DesktopTimePicker
                value={value}
                onChange={(newValue) => onChange(newValue)}
                disabled={disabled}
              />
            )}
          />
        </DemoContainer>
      </LocalizationProvider>
    </label>
  );
}

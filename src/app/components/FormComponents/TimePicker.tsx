import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { Control, Controller } from "react-hook-form";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

interface Props {
  name: string; // Add name property
  control: Control<any>; // Add control for react-hook-form
  defaultValue?: string | undefined;
  disabled: boolean;
  label: string;
}

dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.tz.setDefault("Asia/Singapore");

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
            defaultValue={
              defaultValue
                ? dayjs
                    .tz(defaultValue, "Asia/Singapore")
                    .format("YYYY-MM-DDTHH:mm")
                : null
            }
            render={({ field: { onChange, value } }) => (
              <DesktopTimePicker
                value={value ? dayjs.tz(value) : null}
                onChange={(newValue) => {
                  onChange(
                    dayjs
                      .tz(newValue, "Asia/Singapore")
                      .format("YYYY-MM-DDTHH:mm"),
                  );
                }}
                disabled={disabled}
              />
            )}
          />
        </DemoContainer>
      </LocalizationProvider>
    </label>
  );
}

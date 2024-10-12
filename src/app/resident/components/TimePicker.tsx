import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

interface Props {
  defaultValue?: string | undefined;
  disabled: boolean;
}

export default function BasicTimePicker({ defaultValue, disabled }: Props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["TimePicker"]}>
        {defaultValue ? (
          <DesktopTimePicker
            defaultValue={dayjs(defaultValue)}
            disabled={disabled}
          />
        ) : (
          <DesktopTimePicker />
        )}
      </DemoContainer>
    </LocalizationProvider>
  );
}

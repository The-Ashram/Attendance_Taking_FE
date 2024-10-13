import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface Props {
  label: string;
  name: string;
  setValue: Function;
}

export default function BasicDatePicker({ label, name, setValue }: Props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label={label}
          onChange={(newValue) =>
            setValue(name, newValue?.format("YYYY-MM-DD"))
          }
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

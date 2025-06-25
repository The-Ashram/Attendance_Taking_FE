import {
  CancelButton,
  Form,
  FormWrapper,
  SubmitButton,
} from "@/app/components/FormComponents/styled";
import BasicDatePicker from "@/app/admin/components/Header/DatePicker";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import dayjs from "dayjs";
import api from "../../../../../api/axios";

interface Props {
  visible: boolean;
  onClose: () => void;
}

export default function LogsReportModal({ visible, onClose }: Props) {
  const { control, handleSubmit, setValue } = useForm();
  const [formValues, setFormValues] = useState({
    from: null,
    to: null,
  });


  const handleDateChange = (name: any, value: any) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const SubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const getLogs = async () => {
      const response = await api.get(
        `${process.env.NEXT_PUBLIC_API_URL}/log/export?date=${formValues.from}`,
        { responseType: "blob" },
      );
      const filename = "audit_report_" + formValues.from + ".csv";

      const blob = new Blob([response.data], { type: "text/csv" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.setAttribute("download", filename); // Use extracted filename
      document.body.appendChild(link);
      link.click();

      link.parentNode?.removeChild(link);
    };
    const getLogs2 = async () => {
      const response = await api.get(
        `${process.env.NEXT_PUBLIC_API_URL}/log/export?from=${formValues.from}&to=${formValues.to}`,
        { responseType: "blob" },
      );
      const contentDisposition = response.headers["content-disposition"];
      const filename =
        "audit_report_" +
        formValues.from +
        "_to_" +
        formValues.to +
        ".csv";

      const blob = new Blob([response.data], { type: "text/csv" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.setAttribute("download", filename); // Use extracted filename
      document.body.appendChild(link);
      link.click();

      link.parentNode?.removeChild(link);
    };
    if (formValues.from === formValues.to) {
      getLogs();
    } else {
      getLogs2();
    }
  };

  return (
    <>
      {visible && (
        <FormWrapper>
          <Form onSubmit={SubmitHandler}>
            <h2 style={{ textAlign: "center", marginBottom: "10%", fontSize: "1rem" }}>
              Generate Audit Report
            </h2>
  
            <div
              style={{
                display: "flex",
                flexDirection: "column", // Stack date pickers vertically on smaller screens
                alignItems: "center", // Center the content horizontally
                marginBottom: "20px",
              }}
            >
              <BasicDatePicker
                label="From"
                name="from"
                miniDate={dayjs("2024-10-10")}
                setValue={handleDateChange}
              />
            </div>
  
            <div
              style={{
                display: "flex",
                flexDirection: "column", // Stack vertically on smaller screens
                alignItems: "center", // Center the content horizontally
                marginBottom: "20px",
              }}
            >
              {!!formValues.from && (
                <BasicDatePicker
                  label="To"
                  name="to"
                  miniDate={dayjs(formValues.from)}
                  setValue={handleDateChange}
                />
              )}
            </div>
  
            <div
              style={{
                display: "flex",
                flexWrap: "wrap", // Ensure buttons wrap on smaller screens
                gap: "10px", // Add gap between buttons
                justifyContent: "center", // Center the buttons
                marginTop: "20px", // Add margin-top for spacing
              }}
            >
              <CancelButton type="button" onClick={onClose} style={{ flex: "1 1 45%" }}>
                Cancel
              </CancelButton>
              {formValues.from && formValues.to && (
                <SubmitButton type="submit" style={{ flex: "1 1 45%" }}>
                  Generate
                </SubmitButton>
              )}
            </div>
          </Form>
        </FormWrapper>
      )}
    </>
  );  
}

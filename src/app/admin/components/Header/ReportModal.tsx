import {
  CancelButton,
  Form,
  FormWrapper,
  SubmitButton,
} from "@/app/components/FormComponents/styled";
import BasicDatePicker from "@/app/admin/components/Header/DatePicker";
import { useForm, useWatch } from "react-hook-form";
import { useState } from "react";

interface Props {
  visible: boolean;
  onClose: () => void;
}

export default function ReportModal({ visible, onClose }: Props) {
  const { register, handleSubmit, setValue } = useForm();
  const [formValues, setFormValues] = useState({
    from: null,
    to: null,
  });

  const handleDateChange = (name: any, value: any) => {
    console.log(value);
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const submitHandler = () => {
    console.log("Form submitted with values:", formValues);
  };

  return (
    <>
      {visible && (
        <FormWrapper>
          <Form>
            <h2 style={{ textAlign: "center", marginBottom: "10%" }}>
              Generate Attendance Report
            </h2>
            <div
              style={{
                display: "flex",
                marginBottom: "20px",
                justifyContent: "center",
              }}
            >
              <BasicDatePicker
                label="From"
                name="from"
                setValue={handleDateChange}
              />
            </div>
            <div
              style={{
                display: "flex",
                marginBottom: "20px",
                justifyContent: "center",
              }}
            >
              <BasicDatePicker
                label="To"
                name="to"
                setValue={handleDateChange}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <CancelButton onClick={onClose}>Cancel</CancelButton>
              <SubmitButton onClick={submitHandler}>Generate</SubmitButton>
            </div>
          </Form>
        </FormWrapper>
      )}
    </>
  );
}

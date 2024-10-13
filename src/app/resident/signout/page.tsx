"use client";

import { useRouter } from "next/navigation";
import Header from "@/app/resident/components/Header/header";
import dayjs from "dayjs";
import {
  Form,
  FormWrapper,
  InputDetails,
  Title,
  SubmitButton,
} from "@/app/components/FormComponents/styled";
import BasicTimePicker from "@/app/components/FormComponents/TimePicker";
import InputBox from "@/app/components/FormComponents/InputBox";
import DropdownBox from "@/app/components/FormComponents/Dropdown";
import PasswordInput from "@/app/components/FormComponents/PasswordInput";

const residentData = {
  name: "Bryan",
  telephone: "999",
};

const options = ["Report Sick", "Medical Appointment", "Work", "Job Interview"];

export default function Requestform() {
  const router = useRouter();

  const timeNow = dayjs();
  const formTime = timeNow.format("YYYY-MM-DDTHH:mm");

  return (
    <>
      <Header />
      <Title>Sign Out</Title>

      {/* Request Form Section */}
      <FormWrapper>
        <Form>
          {/* Resident Details */}
          <InputDetails>
            <InputBox
              name={"residentName"}
              defaultValue={residentData.name}
              label={"Name"}
              disabled
            />
            <InputBox
              name={"residentNumber"}
              defaultValue={residentData.telephone}
              label={"Phone Number"}
              disabled
            />
            <BasicTimePicker
              defaultValue={formTime}
              disabled={true}
              label={"Time of request"}
            />
          </InputDetails>

          <InputDetails>
            <DropdownBox label={"Reason"} options={options} />
          </InputDetails>

          <InputDetails>
            <InputBox disabled={false} label="Remarks" name="remarks" />
          </InputDetails>

          {/* Verified By */}
          <InputDetails>
            <PasswordInput label="Verified By:" name="verifiedBy" />
          </InputDetails>

          {/* Approved Duration */}
          <InputDetails>
            <BasicTimePicker label={"Approved Time"} disabled={false} />
          </InputDetails>

          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </FormWrapper>
    </>
  );
}

"use client";

import { useRouter } from "next/navigation";
import Header from "@/app/resident/components/Header/header";
import dayjs from "dayjs";
import {
  Form,
  FormWrapper,
  InputDetails,
  Title,
} from "@/app/resident/signout/styled";
import BasicTimePicker from "@/app/resident/components/TimePicker";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { SubmitButton } from "@/app/resident/signin/styled";

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
            <label>
              <strong>Resident Name:</strong>
              <input
                type="text"
                name="residentName"
                style={{ width: "100%", padding: "8px", margin: "8px 0" }}
                defaultValue={residentData.name}
              />
            </label>
            <label>
              <strong>Phone Number</strong>
              <input
                type="text"
                name="phoneNumber"
                style={{ width: "100%", padding: "8px", margin: "8px 0" }}
                defaultValue={residentData.telephone}
              />
            </label>
            <label>
              <strong>Time of Request:</strong>
              <BasicTimePicker defaultValue={formTime} disabled={true} />
            </label>
          </InputDetails>

          <InputDetails>
            <label>
              <strong>Reason</strong>
              <Dropdown options={options} />
            </label>
          </InputDetails>

          <InputDetails>
            <label>
              <strong>Remarks</strong>
              <input
                type="text"
                name="remarks"
                style={{ width: "100%", padding: "8px", margin: "8px 0" }}
              />
            </label>
          </InputDetails>

          {/* Verified By */}
          <InputDetails>
            <label>
              <strong>Verified By:</strong>
              <input
                type="password"
                name="verifiedBy"
                style={{ width: "100%", padding: "8px", margin: "8px 0" }}
              />
            </label>
          </InputDetails>

          {/* Approved Duration */}
          <InputDetails>
            <label>
              <strong>Approved Duration (Time):</strong>
              <BasicTimePicker disabled={false} />
            </label>
          </InputDetails>

          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </FormWrapper>
    </>
  );
}

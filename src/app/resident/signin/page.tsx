"use client";
import {
  Form,
  FormWrapper,
  SubmitButton,
  Title,
} from "@/app/resident/signin/styled";
import Header from "@/app/resident/components/Header/header";
import BasicTimePicker from "@/app/resident/components/TimePicker";
import { InputDetails } from "@/app/resident/signout/styled";
import dayjs from "dayjs";

const residentData = {
  name: "Bryan",
  telephone: "999",
};

export default function Signin() {
  const timeNow = dayjs();
  const formTime = timeNow.format("YYYY-MM-DDTHH:mm");

  return (
    <>
      <Header />
      <Title>Sign In</Title>
      <FormWrapper>
        <Form>
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
              <strong>Verified By:</strong>
              <input
                type="password"
                name="verifiedBy"
                style={{ width: "100%", padding: "8px", margin: "8px 0" }}
              />
            </label>
          </InputDetails>
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </FormWrapper>
    </>
  );
}

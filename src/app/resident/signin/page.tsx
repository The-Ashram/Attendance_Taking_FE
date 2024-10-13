"use client";
import {
  Form,
  FormWrapper,
  SubmitButton,
  Title,
} from "@/app/components/FormComponents/styled";
import Header from "@/app/resident/components/Header/header";
import BasicTimePicker from "@/app/components/FormComponents/TimePicker";
import { InputDetails } from "@/app/components/FormComponents/styled";
import dayjs from "dayjs";
import InputBox from "@/app/components/FormComponents/InputBox";
import PasswordInput from "@/app/components/FormComponents/PasswordInput";

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
                label={"Time of return"}
              />
            </InputDetails>
          </InputDetails>
          <InputDetails>
            <PasswordInput label="Verified By:" name="verifiedBy" />
          </InputDetails>
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </FormWrapper>
    </>
  );
}

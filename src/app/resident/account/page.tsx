"use client";
import Header from "@/app/resident/components/Header/header";
import {
  Form,
  FormWrapper,
  InputDetails,
} from "@/app/components/FormComponents/styled";
import { SubmitButton } from "@/app/components/FormComponents/styled";
import PasswordInput from "@/app/components/FormComponents/PasswordInput";

export default function Account() {
  return (
    <>
      <Header />
      <FormWrapper>
        <Form>
          <InputDetails>
            <PasswordInput label="Change Password" name="password" />
          </InputDetails>
          <SubmitButton>Submit</SubmitButton>
        </Form>
      </FormWrapper>
    </>
  );
}

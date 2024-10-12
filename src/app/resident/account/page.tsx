"use client";
import Header from "@/app/resident/components/Header/header";
import { Form, FormWrapper, InputDetails } from "@/app/resident/signout/styled";
import { SubmitButton } from "@/app/resident/signin/styled";

export default function Account() {
  return (
    <>
      <Header />
      <FormWrapper>
        <Form>
          <InputDetails>
            <label>
              <strong>Change password</strong>
              <input
                type="password"
                style={{ width: "100%", padding: "8px", margin: "8px 0" }}
              />
            </label>
          </InputDetails>
          <SubmitButton>Submit</SubmitButton>
        </Form>
      </FormWrapper>
    </>
  );
}

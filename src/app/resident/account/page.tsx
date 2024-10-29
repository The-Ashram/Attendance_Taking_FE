"use client";
import Header from "@/app/resident/components/Header/header";
import {
  Form,
  FormWrapper,
  InputDetails,
} from "@/app/components/FormComponents/styled";
import { SubmitButton } from "@/app/components/FormComponents/styled";
import PasswordInput from "@/app/components/FormComponents/PasswordInput";
import { useForm } from "react-hook-form";
import { ResidentPatchPayload } from "../../../../api/types";
import { useState } from "react";
import Cookies from "js-cookie";
import { ErrorMessage } from "@/app/components/LoginModal/styled";

export default function Account() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResidentPatchPayload>();

  const [errorMessage, setErrorMessage] = useState("");
  const [changed, setChanged] = useState(false);
  const aT = Cookies.get("aT");
  const id = Cookies.get("id");

  function SubmitHandler(data: ResidentPatchPayload) {
    data.id = id;
    const updateUser = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${aT}`,
          },
          body: JSON.stringify(data),
        },
      );
      if (!response.ok) {
        const errorData = await response.text();
        setErrorMessage(errorData);
      } else {
        setChanged(true);
      }
    };
    updateUser();
  }

  return (
    <>
      <Header />
      <FormWrapper>
        <Form onSubmit={handleSubmit(SubmitHandler)}>
          <InputDetails>
            <PasswordInput
              label="Change Password"
              name="password"
              register={register}
              rules={{ required: "Please fill this in" }}
            />
          </InputDetails>
          {errorMessage && (
            <ErrorMessage>{errorMessage.slice(1, -1)}</ErrorMessage>
          )}
          {changed && <ErrorMessage>Password Changed</ErrorMessage>}
          <SubmitButton>Submit</SubmitButton>
        </Form>
      </FormWrapper>
    </>
  );
}

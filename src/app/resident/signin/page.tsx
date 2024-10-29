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
import { useForm } from "react-hook-form";
import { SignInPayload } from "../../../../api/types";
import Cookies from "js-cookie";
import { router } from "next/client";
import { useState } from "react";
import { ErrorMessage } from "@/app/components/LoginModal/styled";

const residentData = {
  name: "Bryan",
  telephone: "999",
};

export default function Signin() {
  const timeNow = dayjs();
  const formTime = timeNow.format("YYYY-MM-DDTHH:mm");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignInPayload>();

  const [errorMessage, setErrorMessage] = useState("");
  const onSubmit = async (data: SignInPayload) => {
    const token = Cookies.get("aT");
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/attendance/update`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      },
    );

    if (!response.ok) {
      const errorData = await response.text();
      setErrorMessage(errorData.slice(1, -2));
    } else {
      router.reload();
    }
  };

  return (
    <>
      <Header />
      <Title>Sign In</Title>
      <FormWrapper>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputDetails>
            <InputDetails>
              <InputBox
                name={"residentName"}
                defaultValue={residentData.name}
                label={"Name"}
                disabled
                register={register}
                rules={{ required: "Please fill up your name!" }}
              />
              <InputBox
                name={"residentNumber"}
                defaultValue={residentData.telephone}
                label={"Phone Number"}
                disabled
                register={register}
                rules={{ required: "Please fill up your Phone Number!" }}
              />
              <BasicTimePicker
                defaultValue={formTime}
                disabled={true}
                label={"Time of return"}
                name={"checkInTime"}
                control={control}
              />
            </InputDetails>
          </InputDetails>
          <InputDetails>
            <PasswordInput
              label="Verified By:"
              name="verifiedBy"
              register={register}
              rules={{ required: "Please ask Duty Officer to enter!" }}
            />
          </InputDetails>
          {errorMessage && (
            <ErrorMessage>{errorMessage.slice(1, -1)}</ErrorMessage>
          )}
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </FormWrapper>
    </>
  );
}

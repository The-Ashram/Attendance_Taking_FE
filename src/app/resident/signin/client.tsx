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
import PasswordInput from "@/app/components/FormComponents/PasswordInput";
import { useForm } from "react-hook-form";
import { SignInPayload } from "../../../../api/types";
import { useEffect, useState } from "react";
import { ErrorMessage } from "@/app/components/LoginModal/styled";
import api from "../../../../api/axios";
import { useRouter } from "next/navigation";

export default function Signin() {
  const timeNow = dayjs();
  const formTime = timeNow.format("YYYY-MM-DDTHH:mm");
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = window.localStorage.getItem("role") === "resident";
    if (!isAuthenticated) {
      router.push("/");
    }
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignInPayload>();

  const [errorMessage, setErrorMessage] = useState("");
  const name = window.localStorage.getItem("name");
  const SubmitHandler = (data: SignInPayload) => {
    data.id = window.localStorage.getItem("latestAttendanceId");
    data.status = "In";
    data.userId = window.localStorage.getItem("id");
    data.attendanceDate = dayjs().format("YYYY-MM-DD");
    const updateAttendance = async () => {
      const response = await api.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/attendance/${data.id}`,
        data,
      );

      if (response.status !== 200) {
        const errorData = response.statusText;
        setErrorMessage(errorData.slice(1, -2));
      } else {
        router.push("/resident/homepage");
      }
    };
    updateAttendance();
  };

  return (
    <>
      <Header />
      <Title>Sign In</Title>
      <FormWrapper>
        <Form onSubmit={handleSubmit(SubmitHandler)}>
          <InputDetails>
            <InputDetails>
              <label>
                <strong>Name:</strong>
                <input
                  type="text"
                  defaultValue={name ?? ""}
                  style={{ width: "100%", padding: "8px", margin: "8px 0" }}
                  disabled={true}
                />
              </label>
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
              name="checkInVerifiedBy"
              register={register}
              rules={{ required: "Please ask Duty Officer to enter!" }}
            />
          </InputDetails>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </FormWrapper>
    </>
  );
}

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
import Cookies from "js-cookie";
import { FormProvider, useForm } from "react-hook-form";
import { SignOutPayload } from "../../../../api/types";
import { useState } from "react";
import { ErrorMessage } from "@/app/components/LoginModal/styled";

const residentData = {
  name: "Bryan",
  telephone: "999",
};

const options = ["Report Sick", "Medical Appointment", "Work", "Job Interview"];

export default function Requestform() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignOutPayload>();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const timeNow = dayjs();
  const formTime = timeNow.format("YYYY-MM-DDTHH:mm");
  const name = localStorage.getItem("name");
  const methods = useForm<SignOutPayload>();
  const userId = localStorage.getItem("id");
  const aT = localStorage.getItem("accessToken");

  function SubmitHandler(data: SignOutPayload) {
    data.userId = userId;
    const createAttendance = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/attendance/create`,
        {
          method: "POST",
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
        router.push("/resident/homepage");
      }
    };

    createAttendance();
  }

  return (
    <>
      <Header />
      <Title>Sign Out</Title>

      {/* Request Form Section */}
      <FormWrapper>
        <FormProvider {...methods}>
          <Form onSubmit={handleSubmit(SubmitHandler)}>
            {/* Resident Details */}
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
              {/*<InputBox*/}
              {/*  name={"residentNumber"}*/}
              {/*  defaultValue={residentData.telephone}*/}
              {/*  label={"Phone Number"}*/}
              {/*  disabled*/}
              {/*/>*/}
              <BasicTimePicker
                defaultValue={formTime}
                disabled={true}
                label={"Time of request"}
                name={"checkOutTime"}
                control={control}
              />
            </InputDetails>

            <InputDetails>
              <DropdownBox
                label={"Reason"}
                name="reason"
                options={options}
                control={control}
              />
            </InputDetails>

            <InputDetails>
              <InputBox
                disabled={false}
                label="Remarks"
                name="remarks"
                register={register}
                rules={{ required: "Please fill up your name!" }}
              />
            </InputDetails>

            {/* Verified By */}
            <InputDetails>
              <PasswordInput
                label="Verified By"
                name="verifiedBy"
                register={register}
                rules={{ required: "Please ask Duty Officer to enter!" }}
              />
            </InputDetails>

            {/* Approved Duration */}
            <InputDetails>
              <BasicTimePicker
                label={"Approved Time"}
                disabled={false}
                control={control}
                name={"returnBy"}
              />
            </InputDetails>
            {errorMessage && (
              <ErrorMessage>{errorMessage.slice(1, -1)}</ErrorMessage>
            )}
            <SubmitButton type="submit">Submit</SubmitButton>
          </Form>
        </FormProvider>
      </FormWrapper>
    </>
  );
}

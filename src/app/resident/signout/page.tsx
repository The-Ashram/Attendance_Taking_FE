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
import { FormProvider, useForm } from "react-hook-form";
import { SignOutPayload } from "../../../../api/types";
import { useState } from "react";
import { ErrorMessage } from "@/app/components/LoginModal/styled";
import api from "../../../../api/axios";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

const options = ["Report Sick", "Medical Appointment", "Work", "Job Interview"];

dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.tz.setDefault("Asia/Singapore");

export default function Requestform() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignOutPayload>({
    defaultValues: {
      userId: null,
      attendanceDate: "",
      checkOutTime: dayjs().tz("Asia/Singapore").format("YYYY-MM-DDTHH:mm"),
      returnBy: dayjs().tz("Asia/Singapore").format("YYYY-MM-DDTHH:mm"),
      reason: "",
      status: "Out",
      remarks: "",
    },
  });
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const timeNow = dayjs.tz();
  const formTime = timeNow.format("YYYY-MM-DDTHH:mm");
  const name = localStorage.getItem("name");
  const methods = useForm<SignOutPayload>();
  const userId = localStorage.getItem("id");

  function SubmitHandler(data: SignOutPayload) {
    data.userId = userId;
    data.attendanceDate = dayjs().format("YYYY-MM-DD");
    data.status = "Out";
    data.returnBy = "";
    const filteredData = Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value !== ""),
    );
    const createAttendance = async () => {
      await api
        .post(
          `${process.env.NEXT_PUBLIC_API_URL}/attendance/create`,
          filteredData,
        )
        .then(() => router.push("/resident/homepage"))
        .catch((r) => setErrorMessage(r.response.data));
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
                name="checkOutVerifiedBy"
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
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <SubmitButton type="submit">Submit</SubmitButton>
          </Form>
        </FormProvider>
      </FormWrapper>
    </>
  );
}

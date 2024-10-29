import {
  Form,
  FormWrapper,
  InputDetails,
  SubmitButton,
} from "@/app/components/FormComponents/styled";
import InputBox from "@/app/components/FormComponents/InputBox";
import PasswordInput from "@/app/components/FormComponents/PasswordInput";
import { useForm } from "react-hook-form";
import { AdminUserPatchPayload } from "../../../../../api/types";
import Cookies from "js-cookie";
import { router } from "next/client";
import { Dispatch, SetStateAction, useState } from "react";
import { ErrorMessage } from "@/app/components/LoginModal/styled";

interface EditProps {
  visible: boolean;
  data: any;
  onClose: () => void;
  setRefresh: Dispatch<SetStateAction<boolean>>;
}

export default function EditModalContents({
  visible,
  data,
  onClose,
  setRefresh,
}: EditProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AdminUserPatchPayload>();

  const [errorMessage, setErrorMessage] = useState("");

  const SubmitHandler = async (values: AdminUserPatchPayload) => {
    setErrorMessage("");
    const filteredData = Object.fromEntries(
      Object.entries(values).filter(([_, value]) => value !== ""),
    );
    const token = Cookies.get("aT");
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/${data.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(filteredData),
      },
    );

    if (!response.ok) {
      const errorData = await response.text();
      setErrorMessage(errorData);
    } else {
      onClose();
      setRefresh((s) => !s);
      router.reload();
    }
  };

  return (
    <>
      {visible && (
        <FormWrapper>
          <Form onSubmit={handleSubmit(SubmitHandler)}>
            {data.role === "admin" || data.role === "user" ? (
              <InputDetails>
                <InputBox
                  label="Name"
                  name="name"
                  disabled={false}
                  defaultValue={data.name}
                  register={register}
                  rules={{ required: "Please fill up your name!" }}
                />
                <InputBox
                  label="Email"
                  name="email"
                  disabled={false}
                  defaultValue={data.email}
                  register={register}
                  rules={{ required: "Please fill up your email!" }}
                />
                <InputBox
                  disabled={false}
                  label="Phone Number"
                  name="phoneNumber"
                  defaultValue={data.phoneNumber}
                  register={register}
                />
                <PasswordInput
                  label="Password"
                  name={"password"}
                  register={register}
                />
                <InputBox
                  disabled={false}
                  label="Employee ID"
                  name="employeeId"
                  defaultValue={data.employeeID}
                  register={register}
                />
              </InputDetails>
            ) : (
              <InputDetails>
                <InputBox
                  label="Name"
                  name="name"
                  disabled={false}
                  defaultValue={data.name}
                  register={register}
                />
                <InputBox
                  label="Email"
                  name="email"
                  disabled={false}
                  defaultValue={data.email}
                  register={register}
                />
                <InputBox
                  disabled={false}
                  label="Phone Number"
                  name="phoneNumber"
                  defaultValue={data.phoneNumber}
                  register={register}
                />
                <InputBox
                  disabled={false}
                  label="Phase Number"
                  name="phaseNumber"
                  defaultValue={data.phaseNumber}
                  register={register}
                />
                <PasswordInput
                  label="Password"
                  name="password"
                  register={register}
                />
              </InputDetails>
            )}
            {errorMessage && (
              <ErrorMessage>{errorMessage.slice(1, -1)}</ErrorMessage>
            )}
            <SubmitButton>Submit</SubmitButton>
          </Form>
        </FormWrapper>
      )}
    </>
  );
}

import {
  Form,
  FormWrapper,
  InputDetails,
  SubmitButton,
} from "@/app/components/FormComponents/styled";
import InputBox from "@/app/components/FormComponents/InputBox";
import PasswordInput from "@/app/components/FormComponents/PasswordInput";
import { useForm } from "react-hook-form";
import { CreateUPayload } from "../../../../../api/types";
import { ErrorMessage } from "@/app/components/LoginModal/styled";
import { Dispatch, SetStateAction, useState } from "react";
import Cookies from "js-cookie";
import { router } from "next/client";

interface CreateProps {
  visible: boolean;
  closeModal: () => void;
  setRefresh: Dispatch<SetStateAction<boolean>>;
}

export default function CreateUModalContents({
  visible,
  closeModal,
  setRefresh,
}: CreateProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateUPayload>();
  const [errorMessage, setErrorMessage] = useState("");
  const onSubmit = async (data: CreateUPayload) => {
    setErrorMessage("");
    data.role = "user";
    const token = Cookies.get("aT");
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
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
      closeModal();
      setRefresh((s) => !s);
      router.reload();
    }
  };

  return (
    <>
      {visible && (
        <FormWrapper>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputDetails>
              <InputBox
                name="name"
                label="Name"
                register={register}
                rules={{ required: "Please fill up your name!" }} // Pass validation rules here
              />
              {errors.name && (
                <ErrorMessage>{errors.name.message}</ErrorMessage>
              )}

              <InputBox
                name="email"
                label="Email"
                register={register}
                rules={{
                  required: "Please fill up your email!",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email format",
                  },
                }}
              />
              {errors.email && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
              )}

              <InputBox
                name="phoneNumber"
                label="Phone Number"
                register={register}
                rules={{
                  required: "Please fill up your phone number!",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Phone number must be numeric",
                  },
                  minLength: {
                    value: 8,
                    message: "Phone number must be 8 digits",
                  },
                  maxLength: {
                    value: 8,
                    message: "Phone number must be 8 digits",
                  },
                }}
              />
              {errors.phoneNumber && (
                <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>
              )}

              <PasswordInput
                name="password"
                label="Password"
                register={register}
                rules={{ required: "Please fill up your password!" }}
              />
              {errors.password && (
                <ErrorMessage>{errors.password.message}</ErrorMessage>
              )}

              <InputBox
                name="employeeID"
                label="Employee ID"
                register={register}
                rules={{ required: "Please fill up Employee ID!" }}
              />
              {errors.employeeID && (
                <ErrorMessage>{errors.employeeID.message}</ErrorMessage>
              )}
            </InputDetails>

            <SubmitButton type="submit" disabled={isSubmitting}>
              Submit
            </SubmitButton>
          </Form>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </FormWrapper>
      )}
    </>
  );
}

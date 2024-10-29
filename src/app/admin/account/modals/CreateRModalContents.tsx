import {
  Form,
  FormWrapper,
  InputDetails,
  SubmitButton,
} from "@/app/components/FormComponents/styled";
import InputBox from "@/app/components/FormComponents/InputBox";
import PasswordInput from "@/app/components/FormComponents/PasswordInput";
import { useForm } from "react-hook-form";
import { CreateRPayload } from "../../../../../api/types";
import { ErrorMessage } from "@/app/components/LoginModal/styled";
import { Dispatch, SetStateAction, useState } from "react";
import Cookies from "js-cookie";
import { router } from "next/client";

interface CreateProps {
  visible: boolean;
  closeModal: () => void;
  setRefresh: Dispatch<SetStateAction<boolean>>;
}

export default function CreateRModalContents({
  visible,
  closeModal,
  setRefresh,
}: CreateProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateRPayload>();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data: CreateRPayload) => {
    setErrorMessage("");
    data.role = "resident";
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
                label="Name"
                name="name"
                register={register}
                rules={{ required: "Please fill up your name!" }}
                disabled={false}
              />
              {errors.name && (
                <ErrorMessage>{errors.name.message}</ErrorMessage>
              )}
              <InputBox
                label="Email"
                name="email"
                register={register}
                rules={{ required: "Please fill up your email!" }}
                disabled={false}
              />
              {errors.email && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
              )}
              <InputBox
                disabled={false}
                label="Phone Number"
                name="phoneNumber"
                register={register}
                rules={{
                  required: "Please fill up your phone number!",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Phone number must be numeric",
                  },
                  minLength: {
                    value: 8,
                    message: "Phone number must be 9 digits",
                  },
                  maxLength: {
                    value: 8,
                    message: "Phone number must be 9 digits",
                  },
                }}
              />
              {errors.phoneNumber && (
                <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>
              )}
              <InputBox
                disabled={false}
                label="Phase Number"
                name="phaseNumber"
                register={register}
                rules={{ required: "Please fill up Phase Number!" }}
              />
              {errors.phaseNumber && (
                <ErrorMessage>{errors.phaseNumber.message}</ErrorMessage>
              )}
              <PasswordInput
                label="Password"
                name="password"
                register={register}
                rules={{ required: "Please fill up your password!" }}
              />
              {errors.password && (
                <ErrorMessage>{errors.password.message}</ErrorMessage>
              )}
            </InputDetails>
            <SubmitButton>Submit</SubmitButton>
          </Form>
          {errorMessage && (
            <ErrorMessage>{errorMessage.slice(1, -1)}</ErrorMessage>
          )}
        </FormWrapper>
      )}
    </>
  );
}

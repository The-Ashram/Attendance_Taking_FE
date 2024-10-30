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
import { router } from "next/client";
import api from "../../../../../api/axios";

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
    await api
      .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, data)
      .then(() => {
        closeModal();
        setRefresh((s) => !s);
        router.reload();
      })
      .catch((r) =>
        setErrorMessage(r.response.data + " Please check your submission"),
      );
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

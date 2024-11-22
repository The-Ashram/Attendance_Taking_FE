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
import { useEffect, useState } from "react";
import { ErrorMessage } from "@/app/components/LoginModal/styled";
import { useRouter } from "next/navigation";
import api, { refreshTokens } from "../../../../api/axios";

export default function Account() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResidentPatchPayload>();
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = window.localStorage.getItem("role") === "resident";
    if (!isAuthenticated) {
      router.push("/");
    }
  }, []);

  const [errorMessage, setErrorMessage] = useState("");
  const [changed, setChanged] = useState(false);
  const id = window.localStorage.getItem("id");

  function SubmitHandler(data: ResidentPatchPayload) {
    data.id = id;
    const updateUser = async () => {
      await api
        .patch(`${process.env.NEXT_PUBLIC_API_URL}/user/${id}`, data)
        .then((d) => {
          setChanged(true);
          window.localStorage.setItem("accessToken", d.data.accessToken);
          window.localStorage.setItem("refreshToken", d.data.refreshToken);
          refreshTokens();
        })
        .catch((r) => setErrorMessage(r.response.data));
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
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          {changed && <ErrorMessage>Password Changed</ErrorMessage>}
          <SubmitButton>Submit</SubmitButton>
        </Form>
      </FormWrapper>
    </>
  );
}

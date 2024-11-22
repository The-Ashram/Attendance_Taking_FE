"use client";
import { useForm } from "react-hook-form";
import { UserPatchPayload, UserResponse } from "../../../../api/types";
import { ErrorMessage } from "@/app/components/LoginModal/styled";
import {
  Form,
  FormWrapper,
  InputDetails,
  SubmitButton,
} from "@/app/components/FormComponents/styled";
import PasswordInput from "@/app/components/FormComponents/PasswordInput";
import { useEffect, useState } from "react";
import Header from "@/app/admin/components/Header";
import api, { refreshTokens } from "../../../../api/axios";
import { Wrapper } from "@/app/admin/account/styled";
import { Table } from "@/app/admin/components/Table/styled";
import { useRouter } from "next/navigation";

export default function Account() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserPatchPayload>();

  const [errorMessage, setErrorMessage] = useState("");
  const [changed, setChanged] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [apiResponse, setApiResponse] = useState<UserResponse | null>(null);
  const id = window.localStorage.getItem("id");
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = window.localStorage.getItem("role") === "user";
    if (!isAuthenticated) {
      router.push("/");
    }
  }, []);

  function SubmitHandler(data: UserPatchPayload) {
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

  useEffect(() => {
    const fetchData = async () => {
      await api
        .get(`${process.env.NEXT_PUBLIC_API_URL}/user`)
        .then((r) => setApiResponse(r.data))
        .catch((r) => setErrorMsg(r.response.data));
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <FormWrapper>
        <Form onSubmit={handleSubmit(SubmitHandler)}>
          <InputDetails>
            <PasswordInput
              label="Change My Password"
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
      <Wrapper>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {apiResponse?.users
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((row) => (
                <tr>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.phoneNumber}</td>
                  <td>{row.role}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Wrapper>
    </>
  );
}

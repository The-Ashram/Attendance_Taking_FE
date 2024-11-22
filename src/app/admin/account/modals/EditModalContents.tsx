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
import { Dispatch, SetStateAction, useState } from "react";
import { ErrorMessage } from "@/app/components/LoginModal/styled";
import api, { refreshTokens } from "../../../../../api/axios";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const SubmitHandler = async (values: AdminUserPatchPayload) => {
    setErrorMessage("");
    const filteredData = Object.fromEntries(
      Object.entries(values).filter(([_, value]) => value !== ""),
    );
    await api
      .patch(`${process.env.NEXT_PUBLIC_API_URL}/user/${data.id}`, filteredData)
      .then((d) => {
        if (!!d.data.accessToken) {
          window.localStorage.setItem("accessToken", d.data.accessToken);
          window.localStorage.setItem("refreshToken", d.data.refreshToken);
          refreshTokens();
        }
        onClose();
        setRefresh((s) => !s);
        router.refresh();
      })
      .catch((r) => setErrorMessage(r.response.data));
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
                  label="Password (Leave empty if not changing password)"
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
                <InputBox
                  disabled={false}
                  label="Role"
                  name="role"
                  defaultValue={data.role}
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
                  label="Password (Leave empty if not changing password)"
                  name="password"
                  register={register}
                />
              </InputDetails>
            )}
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <SubmitButton>Submit</SubmitButton>
          </Form>
        </FormWrapper>
      )}
    </>
  );
}

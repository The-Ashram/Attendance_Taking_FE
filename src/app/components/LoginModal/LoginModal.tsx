import {
  CTAButton,
  ErrorMessage,
  InputBox,
  InputWrapper,
  Wrapper,
} from "@/app/components/LoginModal/styled";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { LoginPayload, LoginResponse } from "../../../../api/types";
import { useState, useEffect } from "react";
import api from "../../../../api/axios";

export default function LoginModal() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPayload>();
  const [isLoginError, setLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [apiresponse, setApiResponse] = useState<LoginResponse | undefined>(
    undefined,
  );

  const onLogin = async (data: LoginPayload) => {
    setLoginError(false); // Reset the login error state before making the request
    data.email = data.email.toLowerCase();
    await api
      .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, data)
      .then((r) => {
        setApiResponse(r.data); // Store access and refresh tokens in localstorage
        window.localStorage.setItem("accessToken", r.data.accessToken);
        window.localStorage.setItem("refreshToken", r.data.refreshToken);
        window.localStorage.setItem("role", r.data.user.role);
        window.localStorage.setItem("id", r.data.user.id);
        window.localStorage.setItem("name", r.data.user.name);
        window.localStorage.setItem("email", data.email);
      })
      .catch((r) => {
        setLoginError(true);
        setErrorMessage(r.response.data);
      });
  };

  // Effect to handle redirection once the apiresponse is received
  useEffect(() => {
    if (
      apiresponse?.user.role === "admin" ||
      apiresponse?.user.role === "user"
    ) {
      router.push("/admin/homepage"); // Redirect to admin dashboard
    } else if (apiresponse?.user.role === "resident") {
      router.push("/resident/homepage");
    }
  }, [apiresponse, router]);

  return (
    <Wrapper>
      <label style={{ color: "black", textAlign: "center" }}>Login</label>
      <form onSubmit={handleSubmit(onLogin)}>
        <InputWrapper>
          <InputBox
            {...register("email", {
              required: "Please fill up your email!",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email",
              },
            })}
            placeholder={"Email"}
          />
          <ErrorMessage>{errors.email?.message as string}</ErrorMessage>
          <InputBox
            {...register("password", { required: "Fill in your password" })}
            type={"password"}
            placeholder={"Password"}
          />
          <ErrorMessage>{errors.password?.message as string}</ErrorMessage>
        </InputWrapper>
        {isLoginError && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <InputWrapper>
          <CTAButton type="submit">Submit</CTAButton>
        </InputWrapper>
      </form>
    </Wrapper>
  );
}

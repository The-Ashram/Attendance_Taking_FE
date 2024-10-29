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
import Cookies from "js-cookie";
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

    const response = await api.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      data,
    );

    if (response.status != 200) {
      const errorData = response.statusText;
      setLoginError(true);
      setErrorMessage(errorData);
    } else {
      const responseData = response.data;
      setApiResponse(responseData);

      // Store access and refresh tokens in cookies
      localStorage.setItem("accessToken", responseData.accessToken);
      localStorage.setItem("refreshToken", responseData.refreshToken);
      localStorage.setItem("role", responseData.user.role);
      localStorage.setItem("id", responseData.user.id);
      localStorage.setItem("name", responseData.user.name);
    }
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
        {isLoginError && (
          <ErrorMessage>{errorMessage.slice(1, -1)}</ErrorMessage>
        )}
        <InputWrapper>
          <CTAButton type="submit">Submit</CTAButton>
        </InputWrapper>
      </form>
    </Wrapper>
  );
}

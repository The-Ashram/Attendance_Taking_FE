import {
  CTAButton,
  ErrorMessage,
  InputBox,
  InputWrapper,
  Wrapper,
} from "@/app/admin/components/LoginModal/styled";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { LoginPayload, LoginResponse } from "../../../../../api/types";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

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

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      if (!response.ok) {
        const errorData = await response.text();
        setLoginError(true);
        setErrorMessage(errorData);
      } else {
        const responseData = await response.json();
        setApiResponse(responseData);

        // Store access and refresh tokens in cookies
        Cookies.set("aT", responseData.accessToken, {
          expires: 1, // 1 day expiration
          secure: true, // Ensures the cookie is sent only over HTTPS
          sameSite: "Strict", // Prevents CSRF attacks
        });

        Cookies.set("rT", responseData.refreshToken, {
          expires: 7, // 7 days expiration
          secure: true,
          sameSite: "Strict",
        });
        Cookies.set("role", responseData.user.role, {
          expires: 1,
          secure: true,
          sameSite: "Strict",
        });
      }
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error,
      );
      setLoginError(true);
      setErrorMessage("An unexpected error occurred. Please try again.");
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

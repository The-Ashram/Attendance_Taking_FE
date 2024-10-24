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
import { ErrorMessage } from "@/app/admin/components/LoginModal/styled";

interface CreateProps {
  visible: boolean;
}

export default function CreateAModalContents({ visible }: CreateProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateAPayload>();

  const onSubmit = (data: CreateRPayload) => {
    console.log("Form submitted with data:", data);
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
                    value: 9,
                    message: "Phone number must be 9 digits",
                  },
                  maxLength: {
                    value: 9,
                    message: "Phone number must be 9 digits",
                  },
                }}
              />
              {errors.phoneNumber && (
                <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>
              )}

              <PasswordInput<CreateRPayload>
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
        </FormWrapper>
      )}
    </>
  );
}

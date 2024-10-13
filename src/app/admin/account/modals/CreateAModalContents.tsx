import {
  Form,
  FormWrapper,
  InputDetails,
  SubmitButton,
} from "@/app/components/FormComponents/styled";
import InputBox from "@/app/components/FormComponents/InputBox";
import PasswordInput from "@/app/components/FormComponents/PasswordInput";

interface CreateProps {
  visible: boolean;
}

export default function CreateAModalContents({ visible }: CreateProps) {
  return (
    <>
      {visible && (
        <FormWrapper>
          <Form>
            <InputDetails>
              <InputBox label="Name" name="name" disabled={false} />
              <InputBox label="Email" name="email" disabled={false} />
              <InputBox
                disabled={false}
                label="Phone Number"
                name="phoneNumber"
              />
              <PasswordInput label="Password" name="accountPassword" />
              <InputBox
                disabled={false}
                label="Employee ID"
                name="employeeId"
              />
            </InputDetails>
            <SubmitButton>Submit</SubmitButton>
          </Form>
        </FormWrapper>
      )}
    </>
  );
}

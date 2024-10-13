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

export default function CreateRModalContents({ visible }: CreateProps) {
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
              <InputBox
                disabled={false}
                label="Phase Number"
                name="phaseNumber"
              />
            </InputDetails>
            <PasswordInput label="Password" name="accountPassword" />
            <SubmitButton>Submit</SubmitButton>
          </Form>
        </FormWrapper>
      )}
    </>
  );
}

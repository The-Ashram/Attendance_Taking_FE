import {
  Form,
  FormWrapper,
  InputDetails,
  SubmitButton,
} from "@/app/components/FormComponents/styled";
import InputBox from "@/app/components/FormComponents/InputBox";
import PasswordInput from "@/app/components/FormComponents/PasswordInput";

interface EditProps {
  visible: boolean;
  data: any;
}

export default function EditMoalContents({ visible, data }: EditProps) {
  return (
    <>
      {visible && (
        <FormWrapper>
          <Form>
            {data.role === "admin" ? (
              <InputDetails>
                <InputBox
                  label="Name"
                  name="name"
                  disabled={false}
                  defaultValue={data.name}
                />
                <InputBox
                  label="Email"
                  name="email"
                  disabled={false}
                  defaultValue={data.email}
                />
                <InputBox
                  disabled={false}
                  label="Phone Number"
                  name="phoneNumber"
                  defaultValue={data.phoneNumber}
                />
                <PasswordInput label="Password" name="accountPassword" />
                <InputBox
                  disabled={false}
                  label="Employee ID"
                  name="employeeId"
                  defaultValue={data.employeeId}
                />
              </InputDetails>
            ) : (
              <InputDetails>
                <InputBox
                  label="Name"
                  name="name"
                  disabled={false}
                  defaultValue={data.name}
                />
                <InputBox
                  label="Email"
                  name="email"
                  disabled={false}
                  defaultValue={data.email}
                />
                <InputBox
                  disabled={false}
                  label="Phone Number"
                  name="phoneNumber"
                  defaultValue={data.phoneNumber}
                />
                <InputBox
                  disabled={false}
                  label="Phase Number"
                  name="phaseNumber"
                  defaultValue={data.phaseNumber}
                />
                <PasswordInput label="Password" name="accountPassword" />
              </InputDetails>
            )}
            <SubmitButton>Submit</SubmitButton>
          </Form>
        </FormWrapper>
      )}
    </>
  );
}

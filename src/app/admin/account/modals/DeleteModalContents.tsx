import {
  CancelButton,
  FormWrapper,
  SubmitButton,
} from "@/app/components/FormComponents/styled";

interface DeleteProps {
  visible: boolean;
}

export default function DeleteModalContents({ visible }: DeleteProps) {
  return (
    <>
      {visible && (
        <FormWrapper>
          <h2 style={{ textAlign: "center", marginBottom: "10vh" }}>
            Confirm Delete?
          </h2>
          <p style={{ textAlign: "center", marginBottom: "10vh" }}>
            This cannot be undone
          </p>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <CancelButton>Cancel</CancelButton>
            <SubmitButton>Confirm</SubmitButton>
          </div>
        </FormWrapper>
      )}
    </>
  );
}

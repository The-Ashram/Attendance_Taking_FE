import {
  ButtonContainer,
  CancelButton,
  FormWrapper,
  SubmitButton,
} from "@/app/components/FormComponents/styled";
import { Dispatch, SetStateAction, useState } from "react";
import { ErrorMessage } from "@/app/components/LoginModal/styled";
import api from "../../../../../api/axios";
import { useRouter } from "next/navigation";

interface DeleteProps {
  visible: boolean;
  onClose: () => void;
  id: string;
  setRefresh: Dispatch<SetStateAction<boolean>>;
}

export default function DeleteModalContents({
  visible,
  onClose,
  id,
  setRefresh,
}: DeleteProps) {
  const [errorMsg, setErrorMessage] = useState("");
  const router = useRouter();
  const onDelete = async () => {
    await api
      .delete(`${process.env.NEXT_PUBLIC_API_URL}/user/${id}`)
      .then(() => {
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
          <h2 style={{ textAlign: "center", marginBottom: "10vh", fontSize: "1.1rem" }}>
            Confirm Delete?
          </h2>
          <p style={{ textAlign: "center", marginBottom: "10vh", fontSize: "0.8rem" }}>
            This cannot be undone
          </p>
          {errorMsg && (
            <ErrorMessage style={{ marginBottom: "3vh" }}>
              {errorMsg}
            </ErrorMessage>
          )}
          <ButtonContainer>
            <CancelButton onClick={onClose}>Cancel</CancelButton>
            <SubmitButton onClick={onDelete}>Confirm</SubmitButton>
          </ButtonContainer>
        </FormWrapper>
      )}
    </>
  );
}

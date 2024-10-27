import {
  CancelButton,
  FormWrapper,
  SubmitButton,
} from "@/app/components/FormComponents/styled";
import Cookies from "js-cookie";
import { Dispatch, SetStateAction, useState } from "react";
import { ErrorMessage } from "@/app/admin/components/LoginModal/styled";
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
  const aT = Cookies.get("aT");
  const [errorMsg, setErrorMessage] = useState("");
  const router = useRouter();
  const onDelete = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${aT}`,
        },
      },
    );
    if (!response.ok) {
      const errorData = await response.text();
      setErrorMessage(errorData.slice(1, -2));
    } else {
      onClose();
      setRefresh((s) => !s);
      router.push("/admin/account");
    }
  };
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
          {errorMsg && (
            <ErrorMessage style={{ marginBottom: "3vh" }}>
              {errorMsg}
            </ErrorMessage>
          )}
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <CancelButton onClick={onClose}>Cancel</CancelButton>
            <SubmitButton onClick={onDelete}>Confirm</SubmitButton>
          </div>
        </FormWrapper>
      )}
    </>
  );
}

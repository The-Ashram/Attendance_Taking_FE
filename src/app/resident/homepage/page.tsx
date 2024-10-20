"use client";

import Header from "@/app/resident/components/Header/header";
import { FormButtons, FormWrapper } from "@/app/resident/homepage/styled";
import { useRouter } from "next/navigation";
import ResidentDetails from "../components/ResidentDetails";

const residentData = {
  name: "Bryan",
  status: "out",
  approvedTime: "12-10-2024 19:30",
  reason: "Medical Appt",
  remarks: "SGH",
};

// const residentData = {
//   name: "Bryan",
//   status: "in",
// };

export default function Homepage() {
  const router = useRouter();

  function requestHandler() {
    if (residentData.status === "out") {
      router.push("/resident/signin");
    } else {
      router.push("/resident/signout");
    }
  }

  return (
    <>
      <Header />
      <FormWrapper>
        <ResidentDetails residentData={residentData} />
        <FormButtons onClick={requestHandler}>
          {residentData.status === "out" ? "Sign In" : "Sign Out"}
        </FormButtons>
      </FormWrapper>
    </>
  );
}

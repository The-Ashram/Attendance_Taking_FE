"use client";

import Header from "@/app/resident/components/Header/header";
import { FormButtons, FormWrapper } from "@/app/resident/homepage/styled";
import { useRouter } from "next/navigation";
import ResidentDetails from "../components/ResidentDetails";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { AttendanceResponse, UserResponse } from "../../../../api/types";
import api from "../../../../api/axios";

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
  const [apiResponse, setApiResponse] = useState<AttendanceResponse | null>(
    null,
  );

  function requestHandler() {
    if (residentData.status === "Out") {
      router.push("/resident/signin");
    } else {
      router.push("/resident/signout");
    }
  }

  useEffect(() => {
    const id = localStorage.getItem("id");
    const fetchData = async () => {
      const response = await api.get(
        `${process.env.NEXT_PUBLIC_API_URL}/attendance/${id}`,
      );

      const data = await response.data;
      setApiResponse(data.attendances[0]);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <FormWrapper>
        <ResidentDetails residentData={apiResponse} />
        <FormButtons onClick={requestHandler}>
          {apiResponse?.status === "Out" ? "Sign In" : "Sign Out"}
        </FormButtons>
      </FormWrapper>
    </>
  );
}

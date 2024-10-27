"use client";

import Header from "@/app/resident/components/Header/header";
import { FormButtons, FormWrapper } from "@/app/resident/homepage/styled";
import { useRouter } from "next/navigation";
import ResidentDetails from "../components/ResidentDetails";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { AttendanceResponse, UserResponse } from "../../../../api/types";

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
    const id = Cookies.get("id");
    const aT = Cookies.get("aT");
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/attendance/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${aT}`,
          },
        },
      );

      const data = await response.json();
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

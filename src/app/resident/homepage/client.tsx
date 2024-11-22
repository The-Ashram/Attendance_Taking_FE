"use client";

import Header from "@/app/resident/components/Header/header";
import { FormButtons, FormWrapper } from "@/app/resident/homepage/styled";
import { useRouter } from "next/navigation";
import ResidentDetails from "../components/ResidentDetails";
import { useEffect, useState } from "react";
import { AttendanceResponse } from "../../../../api/types";
import api from "../../../../api/axios";

export default function Homepage() {
  const router = useRouter();
  const [apiResponse, setApiResponse] = useState<AttendanceResponse | null>(
    null,
  );

  useEffect(() => {
    const isAuthenticated = window.localStorage.getItem("role") === "resident";
    if (!isAuthenticated) {
      router.push("/");
    }
  }, []);

  function requestHandler() {
    if (apiResponse?.status === "Out") {
      window.localStorage.setItem("latestAttendanceId", apiResponse.id);
      router.push("/resident/signin");
    } else {
      router.push("/resident/signout");
    }
  }

  useEffect(() => {
    const id = window.localStorage.getItem("id");
    const fetchData = async () => {
      await api
        .get(`${process.env.NEXT_PUBLIC_API_URL}/attendance/${id}`)
        .then((r) =>
          setApiResponse(
            r.data.attendances.sort(
              (a: { id: number }, b: { id: number }) => b.id - a.id,
            )[0],
          ),
        )
        .catch();
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

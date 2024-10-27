"use client";
import Header from "@/app/admin/components/Header";
import Dashboard from "@/app/admin/components/Dashboard";
import ResidentsTable from "../components/ResidentsTable";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Date } from "./styled";
import Cookies from "js-cookie";
import { DayAttendanceResponse, UserResponse } from "../../../../api/types";

export default function HomePage() {
  const [timeNow, setTime] = useState(
    dayjs().format("ddd DD-MM-YYYY hh:mm A").toString(),
  );

  useEffect(() => {
    const updateTime = () => {
      setTime(dayjs().format("ddd DD-MM-YYYY hh:mm A").toString());
    };

    // Set interval to update time every second
    const intervalId = setInterval(updateTime, 60000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const day = dayjs();
  const aT = Cookies.get("aT");
  const [attendanceData, setAttendanceData] = useState<DayAttendanceResponse[]>(
    [],
  );
  const [userData, setUserData] = useState<UserResponse | null>(null);
  useEffect(() => {
    const getAttendanceForTheDay = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/attendance?date=${day}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${aT}`,
          },
        },
      );

      const data = await response.json();
      setAttendanceData(data.attendances);
    };
    const getUsers = async () => {
      const userResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/user`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${aT}`,
          },
        },
      );
      const userData = await userResponse.json();
      setUserData(userData);
    };
    getAttendanceForTheDay();
    getUsers();
  }, []);

  return (
    <>
      <Header />
      <Date>{timeNow}</Date>
      <Dashboard attendanceData={attendanceData} userData={userData} />
      <ResidentsTable attendanceData={attendanceData} userData={userData} />
    </>
  );
}

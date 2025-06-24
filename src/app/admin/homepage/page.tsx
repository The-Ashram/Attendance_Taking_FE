"use client";
import Header from "@/app/admin/components/Header";
import Dashboard from "@/app/admin/components/Dashboard";
import ResidentsTable from "../components/ResidentsTable";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Date } from "./styled";
import { DayAttendanceResponse, UserResponse } from "../../../../api/types";
import api from "../../../../api/axios";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated =
      window.localStorage.getItem("role") === "admin" ||
      window.localStorage.getItem("role") === "user";
    if (!isAuthenticated) {
      router.push("/");
    }
  }, []);

  const [timeNow, setTime] = useState(
    dayjs().format("dddd DD-MM-YYYY HH:mm").toString()
  );

  useEffect(() => {
    const updateTime = () => {
      setTime(dayjs().format("dddd DD-MM-YYYY HH:mm").toString());
    };

    // Set interval to update time every second
    const intervalId = setInterval(updateTime, 60000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const day = dayjs().format("YYYY-MM-DD");
  const [attendanceData, setAttendanceData] = useState<DayAttendanceResponse[]>(
    []
  );
  const [userData, setUserData] = useState<UserResponse | null>(null);

  useEffect(() => {
    const getAttendanceForTheDay = async () => {
      const response = await api.get(
        `${process.env.NEXT_PUBLIC_API_URL}/attendance`,
        { params: { date: `${day}` } }
      );

      if (response.status === 404) {
        setAttendanceData([]);
      } else {
        const data = await response.data;
        setAttendanceData(data.attendances);
      }
    };
    const getUsers = async () => {
      const userResponse = await api.get(
        `${process.env.NEXT_PUBLIC_API_URL}/user`
      );
      const userData = await userResponse.data;
      setUserData(userData);
    };
    getAttendanceForTheDay();
    getUsers();
  }, []);

  useEffect(() => {
    const getAttendanceForTheDay = async () => {
      const response = await api.get(
        `${process.env.NEXT_PUBLIC_API_URL}/attendance`,
        { params: { date: `${day}` } }
      );

      if (response.status === 404) {
        setAttendanceData([]);
      } else {
        const data = await response.data;
        setAttendanceData(data.attendances);
      }
    };

    const intervalId = setInterval(getAttendanceForTheDay, 120000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const sorted = attendanceData?.sort((a, b) => Number(b.id) - Number(a.id));
  const uniqueNames = new Map<String, DayAttendanceResponse>();
  const filterUniqueByName = (data: DayAttendanceResponse[]) => {
    return data.filter((item) => {
      if (!uniqueNames.has(item.userId as String)) {
        uniqueNames.set(item.userId as String, item);
        return true; // Keep the item
      }
      return false; // Skip duplicates
    });
  };

  filterUniqueByName(sorted);

  return (
    <>
      <Header />
      {/* <Date>{timeNow}</Date> */}
      <Date>
        <span>{dayjs().format("dddd")}</span>
        <span style={{ margin: "0 22vw" }}>{dayjs().format("DD-MM-YYYY")}</span>
        <span>{dayjs().format("HH:mm")}</span>
      </Date>
      <Dashboard attendanceData={uniqueNames} userData={userData} />
      <ResidentsTable attendanceData={uniqueNames} userData={userData} />
    </>
  );
}

"use client";
import Header from "@/app/admin/components/Header";
import Dashboard from "@/app/admin/components/Dashboard";
import ResidentsTable from "../components/ResidentsTable";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Date } from "./styled";

export default function HomePage() {
  const [timeNow, setTime] = useState(
    dayjs().format("ddd DD-MM-YYYY hh:mm:ss A").toString(),
  );

  useEffect(() => {
    const updateTime = () => {
      setTime(dayjs().format("ddd DD-MM-YYYY hh:mm:ss A").toString());
    };

    // Set interval to update time every second
    const intervalId = setInterval(updateTime, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Header />
      <Date>{timeNow}</Date>
      <Dashboard />
      <ResidentsTable />
    </>
  );
}

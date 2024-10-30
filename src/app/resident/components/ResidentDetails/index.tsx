import {
  Text,
  Wrapper,
  Date,
} from "@/app/resident/components/ResidentDetails/styled";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { AttendanceResponse } from "../../../../../api/types";

interface Props {
  residentData: AttendanceResponse | null;
}

export default function ResidentDetails({ residentData }: Props) {
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

  const name = localStorage.getItem("name");
  return (
    <Wrapper>
      <Date>{timeNow}</Date>
      <Text>Hello {name}</Text>
      {residentData?.status === "Out" && (
        <>
          <Text>You are approved for</Text>
          <Text>{residentData?.reason}</Text>
          <Text>Please be back by</Text>
          <Text>{residentData?.returnBy}</Text>
        </>
      )}
      {residentData?.status === "In" && (
        <>
          <Text>Good day! Click below to Sign Out</Text>
        </>
      )}
    </Wrapper>
  );
}

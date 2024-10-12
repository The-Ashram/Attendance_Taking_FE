import {
  Text,
  Wrapper,
  Date,
} from "@/app/resident/components/ResidentDetails/styled";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

interface Props {
  residentData: any;
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

  return (
    <Wrapper>
      <Date>{timeNow}</Date>
      <Text>Hello {residentData.name}</Text>
      {residentData.status === "out" && (
        <>
          <Text>You are approved for</Text>
          <Text>{residentData.reason}</Text>
          <Text>Please be back by</Text>
          <Text>{residentData.approvedTime}</Text>
        </>
      )}
      {residentData.status === "in" && (
        <>
          <Text>Good day!</Text>
        </>
      )}
    </Wrapper>
  );
}

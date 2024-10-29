import { GoDotFill } from "react-icons/go";
import { DayAttendanceResponse, User } from "../../../../../api/types";

interface Props {
  attendanceData: DayAttendanceResponse[];
  userData: User | null;
  adminData: User[] | undefined;
}

export default function Row({ attendanceData, userData, adminData }: Props) {
  const aData = attendanceData?.filter((ad) => ad.userId === userData?.id);
  const isVerified = adminData?.filter(
    (ad) => ad.employeeID === aData?.[0]?.verifiedBy,
  );
  return (
    <tr>
      <td>{userData?.name}</td>
      <td>{userData?.phaseNumber}</td>
      <td>{aData?.[0]?.status === "In" && <GoDotFill />}</td>
      <td>{aData?.[0]?.status === "out" && <GoDotFill />}</td>
      <td>
        {aData?.length !== 0 ? (isVerified?.[0]?.name ?? "Unauthorized") : ""}
      </td>
      <td>{aData?.[0]?.reason}</td>
      <td>{aData?.[0]?.remarks}</td>
    </tr>
  );
}

import { GoDotFill } from "react-icons/go";
import { DayAttendanceResponse, User } from "../../../../../api/types";

interface Props {
  attendanceData: Map<String, DayAttendanceResponse>;
  userData: User | null;
  adminData: User[] | undefined;
}

export default function Row({ attendanceData, userData, adminData }: Props) {
  const aData = Array.from(attendanceData?.entries() ?? [])
    .flatMap((s) => s[1])
    ?.filter((ad) => ad.userId === userData?.id);
  function findVerifier(verifier: string) {
    return adminData?.find((ad: User) => ad.employeeID === verifier)?.name;
  }

  findVerifier("111");
  return (
    <tr>
      <td>{userData?.name}</td>
      <td>{userData?.toNote !== "Nil" ? userData.toNote : null}</td>
      <td>{aData?.[0]?.status !== "Out" && <GoDotFill />}</td>
      <td>{aData?.[0]?.status === "Out" && <GoDotFill />}</td>
      <td>
        {aData?.[0]?.status !== "Out" && !!aData?.[0]?.checkInVerifiedBy
          ? findVerifier(aData?.[0].checkInVerifiedBy ?? "")
          : aData?.[0]?.status === "Out"
            ? findVerifier(aData?.[0].checkOutVerifiedBy ?? "")
            : null}
      </td>
      <td>{aData?.[0]?.status === "Out" && aData?.[0]?.reason}</td>
      <td>{aData?.[0]?.status === "Out" && aData?.[0]?.remarks}</td>
    </tr>
  );
}

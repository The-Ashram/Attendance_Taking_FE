import { DayAttendanceResponse, UserResponse } from "../../../../../api/types";
import dayjs from "dayjs";

interface Props {
  row: DayAttendanceResponse;
  inModal: boolean;
  userData: UserResponse | null;
}

export default function Row({ row, inModal, userData }: Props) {
  const residentData = userData?.users.filter((ud) => ud.id === row.userId);
  return (
    <tr>
      <td>{residentData?.[0].name}</td>
      <td>{dayjs(row.checkOutTime).format("HH:mm")}</td>
      {!inModal && <td>{row.reason}</td>}
    </tr>
  );
}

import { DayAttendanceResponse, UserResponse } from "../../../../../api/types";

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
      <td>{row.checkOutTime}</td>
      {!inModal && <td>{row.reason}</td>}
    </tr>
  );
}

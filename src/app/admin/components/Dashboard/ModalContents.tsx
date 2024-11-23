import { ModalWrapper } from "@/app/admin/components/Dashboard/styled";
import { Table } from "@/app/admin/components/Table/styled";
import Row from "./Row";
import { DayAttendanceResponse, UserResponse } from "../../../../../api/types";
import { ReactNode } from "react";

interface ModalContentsProps {
  inModal: boolean;
  data: DayAttendanceResponse[];
  userData: UserResponse | null;
}

export default function ModalContents({
  inModal,
  data,
  userData,
}: ModalContentsProps) {
  return (
    <ModalWrapper>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>{inModal ? "Check In Time" : "Check Out Time"}</th>
            {!inModal && <th>Reason</th>}
          </tr>
        </thead>
        <tbody>
          {data?.map((row, index) => (
            <Row key={index} row={row} inModal={inModal} userData={userData} />
          ))}
        </tbody>
      </Table>
    </ModalWrapper>
  );
}

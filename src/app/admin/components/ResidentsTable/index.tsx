import { Table } from "@/app/admin/components/Table/styled";
import { Container } from "@/app/admin/components/ResidentsTable/styled";
import Row from "@/app/admin/components/ResidentsTable/Row";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import Cookies from "js-cookie";
import {
  AttendanceResponse,
  DayAttendanceResponse,
  UserResponse,
} from "../../../../../api/types";

interface Props {
  attendanceData: DayAttendanceResponse[];
  userData: UserResponse | null;
}

export default function ResidentsTable({ attendanceData, userData }: Props) {
  const residents = userData?.users.filter((u) => u.role === "resident");
  const others = userData?.users.filter(
    (u) => u.role === "admin" || u.role === "user",
  );
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phase</th>
            <th>In</th>
            <th>Out</th>
            <th>Verified by</th>
            <th>Reason</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {residents?.map((u, index) => (
            <Row
              attendanceData={attendanceData}
              userData={u}
              key={index}
              adminData={others}
            />
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

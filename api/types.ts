import { Dayjs } from "dayjs";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface User {
  id: string;
  name: string;
  role: string;
  email: string;
  phoneNumber: string;
  phaseNumber: string;
  employeeID: string;
}

export interface LoginResponse {
  message: string;
  user: User;
  accessToken: string;
  refreshToken: string;
}

export interface UserResponse {
  message: string;
  users: User[];
}

export interface CreateRPayload {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  phaseNumber: Number;
  role: "resident";
}

export interface CreateAPayload {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  employeeID: string;
  role: "admin";
}

export interface CreateUPayload {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  employeeID: string;
  role: "user";
}

export interface SignInPayload {
  userId: string;
  attendanceDate: Dayjs;
  checkInTime: Dayjs;
  verifiedBy: number;
  status: string;
}

export interface SignOutPayload {
  userId: string | undefined;
  attendanceDate: Dayjs;
  checkOutTime: Dayjs;
  verifiedBy: number;
  returnBy: Dayjs;
  reason: string;
  remarks: string;
}

export interface AttendanceResponse {
  status: string;
  reason: string;
  returnBy: string;
}

export interface ResidentPatchPayload {
  id?: string;
  password: string;
}

export interface UserPatchPayload {
  id?: string;
  password: string;
}

export interface AdminUserPatchPayload {
  id?: string;
  name?: string;
  password?: string;
  phaseNumber?: string;
  phoneNumber?: string;
  email?: string;
  employeeId?: string;
}

export interface DayAttendanceResponse {
  checkOutTime?: string;
  checkInTime?: string;
  reason?: string;
  remarks?: string;
  verifiedBy?: string;
  status?: string;
  userId?: string;
}

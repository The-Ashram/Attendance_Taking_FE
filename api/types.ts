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
  toNote: string;
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
  toNote: string;
  role: "resident";
}

export interface CreateAPayload {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  toNote: string;
  employeeID: string;
  role: "admin";
}

export interface CreateUPayload {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  toNote: string;
  employeeID: string;
  role: "user";
}

export interface SignInPayload {
  userId: string | null;
  attendanceDate: string;
  checkInTime: string;
  checkInVerifiedBy: number;
  status: string;
  id: string | null;
}

export interface SignOutPayload {
  userId: string | null;
  attendanceDate: string;
  checkOutTime: string;
  checkOutVerifiedBy: number;
  returnBy: string;
  reason: string;
  status: "Out";
  remarks: string;
}

export interface AttendanceResponse {
  status: string;
  reason: string;
  returnBy: string;
  id: string;
}

export interface ResidentPatchPayload {
  id?: string | null;
  toNote?: string;
  password: string;
}

export interface UserPatchPayload {
  id?: string | null;
  toNote?: string;
  password: string;
}

export interface AdminUserPatchPayload {
  name?: string;
  password?: string;
  phaseNumber?: string;
  phoneNumber?: string;
  email?: string;
  toNote?: string;
  employeeId?: string;
  role?: string;
}

export interface DayAttendanceResponse {
  checkOutTime?: string;
  checkInTime?: string;
  reason?: string;
  remarks?: string;
  checkInVerifiedBy?: string;
  checkOutVerifiedBy?: string;
  status?: string;
  userId?: string;
  id?: string;
}

export interface AttendanceReportPayload {}

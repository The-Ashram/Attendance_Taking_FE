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

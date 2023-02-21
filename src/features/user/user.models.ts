type Roles = "USER" | "ADMIN" | "SUPER_ADMIN";

export interface IUser {
  email: string;
  name: string;
  userId: number;
  role: string;
}

export interface IUserResponse {
  userName: object;
  userRole: Roles;
}

export interface IRegistrationPayload {
  email: string;
  password: string;
  role: string;
}

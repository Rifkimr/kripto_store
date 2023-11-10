export interface IUser {
  id: number;
  username: string;
  email: string;
  phone_number: string;
  role: string;
}

export interface IUserRegister {
  username: string;
  email: string;
  phone_number: string;
  password: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserUpdate {
  username: string;
  email: string;
  phone_number: string;
}

export interface ICreateUserReq {
  name: string;
  email: string;
  password: string;
}

export interface ILoginReq {
  email: string;
  password: string;
}

export interface IUpdateUserReq {
  name?: string;
  email?: string;
  password?: string;
}

export interface IUserResponse {
  user: {
    name: string;
    email: string;
    token?: string;
  };
}

export interface IDeleteUserRes {
  message: string;
}

import instance from "./APIConfig";
import * as I from "../interfaces/IUser";

const create = (data: I.ICreateUserReq): Promise<I.IUserResponse> => {
  const uri = "/user/signup";

  return instance.post(uri, { ...data }).then((result) => {
    return result.data;
  });
};

const login = (data: I.ILoginReq): Promise<I.IUserResponse> => {
  const uri = "user/signin";

  return instance.post(uri, { ...data }).then((result) => {
    return result.data;
  });
};

const getUser = (id: string, token: string): Promise<I.IUserResponse> => {
  const uri = `/user/${id}`;

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return instance.get(uri, { headers }).then((result) => {
    return result.data;
  });
};

const update = (
  data: I.IUpdateUserReq,
  id: string,
  token: string
): Promise<I.IUserResponse> => {
  const uri = `/user/${id}`;

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return instance.patch(uri, { ...data }, { headers }).then((result) => {
    return result.data;
  });
};

const deleteUser = (id: string, token: string): Promise<I.IDeleteUserRes> => {
  const uri = `/user/${id}`;

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return instance.delete(uri, { headers }).then((result) => {
    return result.data;
  });
};

export default { create, login, getUser, update, deleteUser };

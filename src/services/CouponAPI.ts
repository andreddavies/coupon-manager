import instance from "./APIConfig";
import * as I from "../interfaces/ICoupon";

const create = (
  data: I.ICreateCouponReq,
  token: string
): Promise<I.ICouponResponse> => {
  const uri = "/coupon";

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "multipart/form-data",
  };

  return instance.post(uri, { ...data }, { headers }).then((result) => {
    return result.data;
  });
};

const list = (token: string): Promise<I.ICouponListRes> => {
  const uri = "/coupon";

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return instance.get(uri, { headers }).then((result) => {
    return result.data;
  });
};

const getCoupon = (id: string, token: string): Promise<I.ICouponResponse> => {
  const uri = `/coupon/${id}`;

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return instance.get(uri, { headers }).then((result) => {
    return result.data;
  });
};

const update = (
  data: I.ICouponUpdateReq,
  token: string
): Promise<I.ICouponResponse> => {
  const uri = `/coupon/${data.id}`;

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-type": "multipart/form-data",
  };

  return instance.patch(uri, { ...data }, { headers }).then((result) => {
    return result.data;
  });
};

const deleteCoupon = (
  id: string,
  token: string
): Promise<I.ICouponDeleteRes> => {
  const uri = `/coupon/${id}`;

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return instance.delete(uri, { headers }).then((result) => {
    return result.data;
  });
};

export default { create, list, getCoupon, update, deleteCoupon };

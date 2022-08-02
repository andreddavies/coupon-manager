export interface ICreateCouponReq {
  link: string;
  code: string;
  due_date: string;
  description: string;
  company_name: string;
  // logo?: File | FileList;
  discount_percentage: number;
  status: "active" | "inactive";
}

export interface IGetCouponReq {
  id: string;
}

export interface ICouponUpdateReq {
  id: string;
  link?: string;
  code?: string;
  due_date?: string;
  description?: string;
  company_name?: string;
  logo?: File | FileList;
  discount_percentage?: number;
  status?: "active" | "inactive";
}

interface ICoupon {
  _id: string;
  link: string;
  logo: string;
  code: string;
  due_date: Date;
  description: string;
  company_name: string;
  discount_percentage: number;
  status: "active" | "inactive";
}

export interface ICouponListRes {
  coupon_list: ICoupon[];
}

export interface ICouponResponse {
  coupon: ICoupon;
}

export interface ICouponDeleteRes {
  message: string;
}

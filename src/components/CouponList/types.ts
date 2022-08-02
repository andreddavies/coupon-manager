export type TCoupon = {
  _id: string;
  link: string;
  logo: string;
  code: string;
  due_date: Date;
  description: string;
  company_name: string;
  discount_percentage: number;
  status: "active" | "inactive";
};

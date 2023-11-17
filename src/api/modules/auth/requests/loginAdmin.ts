import { Admin } from "../../../../entities/admin";
import request from "../../../request";

export const loginAdmin = async (
  email: string,
  password: string
): Promise<Admin> => {
  const response = await request.post("/auth/login", {
    email,
    password,
  });

  const adminDto = response.data;

  return adminDto;
};

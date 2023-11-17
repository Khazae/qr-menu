import { Admin } from "../../../../entities/admin";
import { withUnauthorizedHandler } from "../../../hooks/withUnauthorizedHandler";
import request from "../../../request";

export const fetchAllAdmins = async (): Promise<Admin[]> => {
  const response = await withUnauthorizedHandler(request.get("/user"));

  const adminDtos = response?.data;

  const admins = adminDtos;

  return admins;
};

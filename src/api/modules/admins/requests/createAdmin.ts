import { withUnauthorizedHandler } from "../../../hooks/withUnauthorizedHandler";
import request from "../../../request";

interface CreateAdminDto {
  email: string;
  name: string;
  password: string;
  position: string;
}

export const createAdmin = async (payload: CreateAdminDto) => {
  const response = await withUnauthorizedHandler(
    request.post("/user/create-personal", {
      ...payload,
    })
  );

  const adminDtos = response?.data;

  const admins = adminDtos;

  return admins;
};

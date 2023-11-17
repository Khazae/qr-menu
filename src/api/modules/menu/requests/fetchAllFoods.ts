import { Menu } from "../../../../entities/menu";
import { withUnauthorizedHandler } from "../../../hooks/withUnauthorizedHandler";
import request from "../../../request";

export const fetchAllFoods = async (): Promise<Menu[]> => {
  const response = await withUnauthorizedHandler(request.get("/menu"));

  const menu = response?.data?.data;

  return menu;
};

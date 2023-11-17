export interface AdminDto {
  id: string;
  name: string | null;
  email: string;
  createdAt: string;
  updatedAt: string;
  roles: string[];
  restaurantUsersId: string;
}

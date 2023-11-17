// export interface Admin {
//   id: string;
//   email: string;
//   name: string;
//   position: string;
//   createdAt?: string;
//   updatedAt?: string;
//   roles: string[];
//   restaurantUsersId: string;
// }

export interface Admin {
  id: number;
  email: string;
  name: string;
  position: string;
  token: string;
  createdAt?: string;
  updatedAt?: string;
}

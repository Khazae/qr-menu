import { createBrowserRouter } from "react-router-dom";
import GeneralLayout from "../common/layouts/GeneralLayout";
import NonAuthGuardLayout from "../common/layouts/NonAuthGuardLayout";
import AuthGuardLayout from "../common/layouts/AuthGuardLayout";
import NavigationLayout from "../common/layouts/NavigationLayout";
import ListAdminsView from "../modules/admins/views/ListAdminViews";
import LoginView from "../modules/auth/views/LoginView";
import ListMenuView from "../modules/menu/views/ListPersonalViews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GeneralLayout />,
    children: [
      {
        path: "auth",
        element: <NonAuthGuardLayout />,
        children: [
          {
            path: "login",
            element: <LoginView />,
          },
        ],
      },
      {
        path: "/",
        element: <AuthGuardLayout />,
        children: [
          {
            path: "/",
            element: <NavigationLayout />,
            children: [
              {
                path: "/",
                element: <ListAdminsView />,
              },
              {
                path: "/menu",
                element: <ListMenuView />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;

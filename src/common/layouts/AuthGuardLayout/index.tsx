import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { showInfoNotification } from "../../utils/notifications";
import { selectAdmin } from "../../../store/slices/auth";
import { useEffect } from "react";

const AuthGuardLayout = () => {
  const navigate = useNavigate();
  const admin = useSelector(selectAdmin);

  useEffect(() => {
    if (!admin) {
      showInfoNotification("Необходимо войти в аккаунт");
      navigate("/auth/login", { replace: true });
    }
  }, [admin]);

  return <Outlet />;
};

export default AuthGuardLayout;

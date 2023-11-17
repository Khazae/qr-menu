import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { selectAdmin } from "../../../store/slices/auth";
import { useEffect } from "react";

const NonAuthGuardLayout = () => {
  const navigate = useNavigate();
  const admin = useSelector(selectAdmin);

  useEffect(() => {
    if (admin) {
      navigate("/");
    }
  }, [admin]);

  return <Outlet />;
};

export default NonAuthGuardLayout;

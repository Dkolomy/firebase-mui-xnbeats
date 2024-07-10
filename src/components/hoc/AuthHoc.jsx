import { Navigate, useNavigate } from "react-router";
import Dashboard from "../dashboard";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const AuthHoc = () => {
  const isAuth = useSelector((state) => state.authUser.isAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <h2>AuthHoc</h2>
    </>
  );
};

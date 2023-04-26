import React from "react";
import LoginForm from "./LoginForm";
import { Navigate } from "react-router-dom";
import { useNewsContext } from "../../context/NewsContext";

const Login = () => {
  const { isLoggedIn } = useNewsContext();
  return <>{isLoggedIn ? <Navigate to="/home" /> : <LoginForm />}</>;
};

export default Login;

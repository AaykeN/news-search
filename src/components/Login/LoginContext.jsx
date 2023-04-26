import { users } from "../../data/data";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function useLoginContext() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginInProgress, setIsLoginInProgress] = useState(false);

  useEffect(() => {
    const isLoggedInFromStorage = localStorage.getItem("isLoggedIn");
    if (isLoggedInFromStorage) {
      setIsLoggedIn(isLoggedInFromStorage === "true");
    }
  }, []);

  const handleLogin = () => {
    setIsLoginInProgress(true);

    setTimeout(() => {
      const matchedUser = users.find(
        (user) => user.username === userName && user.password === password
      );
      if (matchedUser) {
        setIsLoggedIn(true);
        setUserName(matchedUser.username);
        setPassword("");
        setErrorMessage("");
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userName", matchedUser.username);
      } else {
        setErrorMessage("Incorrect username or password");
      }

      setIsLoginInProgress(false);
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === "" && password === "") {
      setUserNameError(true);
      setPasswordError(true);
    } else if (userName === "") {
      setUserNameError(true);
      setPasswordError(false);
    } else if (password === "") {
      setPasswordError(true);
      setUserNameError(false);
    } else {
      setUserNameError(false);
      setPasswordError(false);
      handleLogin();
    }
  };

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("userName", userName);
    setIsLoggedIn(false);
    setUserName("");
    setPassword("");
    navigate("/");
    window.location.reload();
  };

  return {
    userNameError,
    passwordError,
    userName,
    setUserName,
    password,
    setPassword,
    errorMessage,
    isLoggedIn,
    setIsLoggedIn,
    handleLogin,
    handleSubmit,
    handleLogout,
    isLoginInProgress,
  };
}

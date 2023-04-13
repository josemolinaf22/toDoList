import React, { useState } from "react";

const Auth = () => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmpassword, setConfirmPassword] = useState(null);
  const [isLogIn, setIsLogin] = useState(true);

  const viewLogin = (status) => {
    setError(null);
    setIsLogin(status);
  };

  const handleSubmit = async (e, endpoint) => {
    e.preventDefault();
    if (!isLogIn && password !== confirmpassword) {
      setError("Make Sure Pasword matches");
      return;
    }

    const response = await fetch(
      `${process.env.REACT_APP_SERVERURL}/${endpoint}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await response.json();

    if (data.detail) {
      setError(data.detail);
    } else {
      // setCookie('Email', data.email)
      // setCookie('AuthToken', data.token)
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-container-box">
        <form action="">
          <h2>{isLogIn ? "Login" : "Sign up"}</h2>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isLogIn && (
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}
          <input
            type="submit"
            className="create"
            onClick={(e) => handleSubmit(e, isLogIn ? "login" : "signup")}
          />
          {error && <p>{error}</p>}
        </form>
        <div className="auth-options">
          <button
            onClick={() => viewLogin(false)}
            style={{
              backgroundColor: !isLogIn
                ? "rgb(255,255,255)"
                : "rgb(188,188,188)",
            }}
          >
            Sign up
          </button>
          <button
            onClick={() => viewLogin(true)}
            style={{
              backgroundColor: isLogIn
                ? "rgb(255,255,255)"
                : "rgb(188,188,188)",
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;

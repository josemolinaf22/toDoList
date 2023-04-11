import React, { useState } from "react";

const Auth = () => {
  const [error, setError] = useState(null);
  const [isLogIn, setIsLogin] = useState(true);

  const viewLogin = (status) => {
    setError(null);
    setIsLogin(status);
  };

  return (
    <div className="auth-container">
      <div className="auth-container-box"></div>
      <form action="">
        <h2>{isLogIn ? "Login" : "Sign up"}</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        {!isLogIn && <input type="password" placeholder="Confirm Password" />}
        <input type="submit" className="create" />
        {error && <p>{error}</p>}
      </form>
      <div className="auth-options">
        <button
          onClick={() => viewLogin(false)}
          style={{
            backgroundColor: !isLogIn ? "rgb(255,255,255)" : "rgb(188,188,188)",
          }}
        >
          Sign up
        </button>
        <button
          onClick={() => viewLogin(true)}
          style={{
            backgroundColor: isLogIn ? "rgb(255,255,255)" : "rgb(188,188,188)",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Auth;

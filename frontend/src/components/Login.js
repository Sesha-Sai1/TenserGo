import React from "react";

const Login = () => {
  const googleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <center>
          <h1>TenserGo Communication Platform</h1>
          <h2>Login</h2>
          <button
            onClick={googleLogin}
            style={{ padding: "15px", fontSize: "20px", fontWeight: "bold" }}
          >
            <img src="/google.png" height={20} width={20} /> Login with Google
            <i
              class="fa-solid fa-arrow-right"
              style={{ marginLeft: "7px" }}
            ></i>
          </button>
        </center>
      </div>
    </div>
  );
};

export default Login;

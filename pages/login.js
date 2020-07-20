import React from "react";
import LoginForm from "../Components/LoginForm";

const Login = () => {
  return (
    <div className="h-screen w-screen">
      <div className="flex justify-center w-full h-full">
        <div className="w-full flex">
          <div
            className="w-full h-full bg-gray-400 hidden lg:block lg:w-5/12 bg-cover"
            style={{
              backgroundImage: "url('https://source.unsplash.com/SWTt-fTelyc')",
            }}
          ></div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;

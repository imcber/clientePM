import React from "react";

const LoginForm = () => {
  return (
    <div className="w-full lg:w-7/12  p-5 flex flex-col justify-center items-center h-screen bg-gray-200 main-container">
      <h2 className="py-4 text-2xl text-center w-full">Entra a tu cuenta!</h2>
      <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded w-3/4">
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            className="w-full px-3 py-2 mb-3  leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Contraseña"
          />
        </div>
        <div className="mb-6 text-center">
          <button
            className="w-2/4 px-4 py-2 font-bold text-white bg-blue-600 rounded-full hover:bg-blue-800 focus:outline-none focus:shadow-outline"
            type="button"
          >
            Login
          </button>
        </div>
        <hr className="mb-6 border-t" />
        <div className="text-center">
          <a
            className="inline-block text-sm text-blue-600 align-baseline hover:text-blue-800"
            href="#"
          >
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

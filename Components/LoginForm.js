import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputForm from "./Formik/InputForm";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const LOGIN_MUTATION = gql`
  mutation authenticate(
    $serviceName: String!
    $params: AuthenticateParamsInput!
  ) {
    authenticate(serviceName: $serviceName, params: $params) {
      sessionId
      tokens {
        accessToken
      }
    }
  }
`;

const LoginForm = () => {
  //Routing
  const router = useRouter();
  //Mutation to login
  const [authenticateMutation] = useMutation(LOGIN_MUTATION);
  //Message error
  const [errorForm, setErrorForm] = useState(null);
  //config Formik
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("El email no es valido")
        .required("El email no puede ser vacio"),
      password: Yup.string().required("La contraseña es obligatoria"),
    }),
    onSubmit: async ({ email, password }) => {
      try {
        const { data } = await authenticateMutation({
          variables: {
            params: { user: { email }, password },
            serviceName: "password",
          },
        });
        const { accessToken } = data.authenticate.tokens;
        localStorage.setItem("token", accessToken);
        router.push("/");
      } catch (error) {
        console.log(error);
        if (error.toString() === "Error: Invalid credentials")
          setErrorForm("La contraseña no es correcta. Compruébala.");
      }
    },
  });
  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/");
    }
  });
  return (
    <div className="w-full lg:w-7/12  p-5 flex flex-col justify-center items-center h-screen bg-gray-200 main-container">
      <h2 className="py-4 text-2xl text-center w-full">Entrale carnal!</h2>
      <form
        className="px-8 pt-6 pb-8 mb-4 bg-white rounded w-3/4"
        onSubmit={formik.handleSubmit}
      >
        <div className="mb-4">
          <InputForm
            id="email"
            type="email"
            placeholder="Email usuario"
            label="Email"
            formik={formik}
          />
        </div>
        <div className="mb-4">
          <InputForm
            id="password"
            type="password"
            placeholder="Password usuario"
            label="Contraseña"
            formik={formik}
          />
        </div>
        <div className="mb-4 text-center">
          <button
            className="w-2/4 px-4 py-2 font-bold text-white bg-blue-600 rounded-full hover:bg-blue-800 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
          {errorForm && (
            <p className="text-red-600 text-sm pt-4">{errorForm}</p>
          )}
        </div>
        <hr className="mb-5 border-t" />
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

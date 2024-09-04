import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";


import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Helmet } from "react-helmet";
import { isEmptyOrNull } from "../utils/helper";
import { AuthContext } from "../Context/AuthProvider";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);
  const { createUser } = useContext(AuthContext);

  const regx = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.* ).{6,}$/gm;

  const schema = yup
    .object({
      name: yup.string().required("Name is required"),
      email: yup
        .string()
        .email("Email is not valid")
        .required("Email is required"),
      password: yup
        .string()
        .min(6)
        .matches(regx, {
          message:
            "Password Must have an Uppercase, a Lowercase & at least 6 characters",
        })
        .required("Password  is required"),
    })
    .required("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    if (!isEmptyOrNull({ data })) {
      createUser(data, () => {
        navigate("/login");
      });
    }
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Ayat Craft | Register</title>
      </Helmet>
      <div
        className="w-full min-h-screen "
        style={{
          backgroundImage: `url(/images/login-bg-3.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
      >
        <div className="w-full min-h-screen flex flex-col items-center justify-center">
          <div className="card card-compact w-96 shadow-xl border-cyan-500 bg-[rgba(0,0,0,.7)] border">
            <div className="card-body">
              <div className=" flex flex-col justify-center items-center gap-4">
                <img src="https://i.ibb.co/vXVSfgm/login.png" className="w-12 h-12" />
                <h2 className="text-white text-xl font-bold"> User Register</h2>
              </div>
              <div className="py-4">
                <form
                  name="register"
                  className="flex flex-col gap-6 bg-transparent"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input
                      type="text"
                      className="grow"
                      placeholder="Name"
                      {...register("name")}
                    />
                  </label>
                  <p className="text-base text-red-600 font-semibold">
                    {errors.name?.message}
                  </p>
                  <label className="input input-bordered flex items-center gap-2">
                    <i className="fa-regular fa-envelope"></i>
                    <input
                      type="text"
                      className="grow"
                      placeholder="Email"
                      {...register("email")}
                    />
                  </label>
                  <p className="text-base text-red-600 font-semibold">
                    {errors.email?.message}
                  </p>
                  <label className="input input-bordered flex items-center gap-2">
                    <i className="fa-regular fa-image"></i>
                    <input
                      type="text"
                      className="grow"
                      placeholder="PhotoURL"
                      {...register("photoURL")}
                    />
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      type={isShow ? "text" : "password"}
                      className="grow"
                      placeholder="Password"
                      {...register("password")}
                    />
                    {isShow ? (
                      <i
                        className="fa-solid fa-eye-slash cursor-pointer"
                        onClick={() => {
                          setIsShow(false);
                        }}
                      ></i>
                    ) : (
                      <i
                        className="fa-solid fa-eye cursor-pointer"
                        onClick={() => {
                          setIsShow(true);
                        }}
                      ></i>
                    )}
                  </label>
                  <p className="text-base text-red-600 font-semibold">
                    {errors.password?.message}
                  </p>
                  <label className="input input-bordered flex items-center gap-2 !bg-green-700 text-white font-bold cursor-pointer">
                    <input
                      type="submit"
                      className="grow !bg-green-700 cursor-pointer"
                      value="Register"
                    />
                  </label>
                </form>
              </div>

              <div className="flex flex-row w-full justify-center items-center gap-7 h-24">
                <NavLink
                  to="/login"
                  className=" w-full border text-gray-800 text-center px-2 py-2 bg-white font-bold rounded-md"
                >
                  <i className="fa-solid fa-unlock"></i>&nbsp;Login
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

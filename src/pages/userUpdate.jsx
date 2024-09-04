import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Components/Context/AuthProvider";
import { isEmptyOrNull } from "../utility/helper";
import Loading from "../Components/Utils/Loading";
import { Helmet } from "react-helmet";

const UserUpdatePage = () => {
  const { user, updateUser, isLoading } = useContext(AuthContext);
  const { displayName, email, photoURL } = user;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      displayName: user?.displayName,
      email: user?.email,
      photoURL: user?.photoURL,
    },
  });

  const onSubmit = (values) => {
    updateUser(values);
  };
  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }
  return (
    <React.Fragment>
      <Helmet>
        <title>U-Estate | User Update</title>
      </Helmet>
      <div className="w-full min-h-screen grid grid-cols-12 gap-6">
        <div className="w-full min-h-screen col-span-2"></div>
        <div className="col-span-8">
          <div className="card bg-base-100 w-full shadow-xl py-6 border rounded-lg my-6 flex flex-col items-center">
            <div className="w-full p-4">
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
                    {...register("displayName", { required: true })}
                  />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                  <i className="fa-regular fa-envelope"></i>
                  <input
                    type="text"
                    className="grow"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <i className="fa-regular fa-image"></i>
                  <input
                    type="text"
                    className="grow"
                    placeholder="PhotoURL"
                    {...register("photoURL", { required: true })}
                  />
                </label>

                <label className="input input-bordered flex items-center gap-2 !bg-green-700 text-white font-bold cursor-pointer">
                  <input
                    type="submit"
                    className="grow !bg-green-700 cursor-pointer"
                    value="Update"
                  />
                </label>
              </form>
            </div>
          </div>
        </div>
        <div className="col-span-2 w-full">
          <div className="card bg-base-100 w-full shadow-xl py-6 border rounded-lg my-6 flex flex-col items-center">
            <div className="w-40 h-40 ">
              <img
                className="w-full h-full rounded-full"
                src={user?.photoURL}
                alt={displayName}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserUpdatePage;

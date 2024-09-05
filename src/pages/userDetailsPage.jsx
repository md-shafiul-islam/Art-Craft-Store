/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Components/Context/AuthProvider";
import { isEmptyOrNull } from "../utility/helper";
import Loading from "../Components/Utils/Loading";
import { Helmet } from "react-helmet";

const UserDetailsPage = () => {
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
        <title>Ayat Art & Craft | User Profile</title>
      </Helmet>
      <div className="w-full min-h-screen grid grid-cols-12 gap-6">
        <div className="w-full min-h-screen col-span-2"></div>
        <div className="col-span-8">
          <div className="card bg-base-100 w-full shadow-xl py-6 border rounded-lg my-6 flex flex-col items-center">
            <div className="w-full p-4 flex flex-col gap-4">
              <div className="flex flex-row text-lg font-bold gap-3">
                <span>Name:</span>
                <span>{displayName}</span>
              </div>
              <div className="flex flex-row text-lg font-bold gap-3">
                <span>Email:</span>
                <span>{email}</span>
              </div>
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
            <h2>{displayName}</h2>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserDetailsPage;

import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {
  isEmptyOrNull,
  onNotify,
  onNotifyError,
  onNotifySuccess,
} from "../../utils/helper";
import axios from "axios";

const AddProductForm = ({ initValues, categories = [] }) => {
  const schema = yup
    .object({
      itemName: yup.string().required("Name is required"),
      price: yup.number().required(),
      userEmail: yup
        .string()
        .email("Email is not valid")
        .required("Email is required"),
    })
    .required("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema), defaultValues: initValues });

  const onItemAddAction = (values) => {
    onNotify("Sending item add request. Please wait");
    axios
      .post(`${import.meta.env.VITE_API_URL}/products`, values)
      .then((resp) => {
        if (!isEmptyOrNull(resp.data)) {
          if (resp.data.status) {
            onNotifySuccess(resp.data.message);
            reset({
              itemName: null,
              price: null,
              stockStatus: false,
              category: null,
              rating: null,
              processingTime: null,
              description: null,
              image: null,
            });
          } else {
            onNotifyError("Item add failed");
          }
        }
      })
      .catch((error) => {
        onNotifyError(error.message);
      });
  };
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-2/3 sm:w-full xs:w-full md:w-full lg:w-2/3 flex flex-col my-7">
            <h2 className="text-2xl font-bold my-6">Add Art/Craft Item </h2>

            <form
              onSubmit={handleSubmit(onItemAddAction)}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col gap-3">
                <label className="font-bold block">Item Name:</label>
                <input
                  type="text"
                  placeholder="Name"
                  name="itemName"
                  className={`input input-bordered input-sm input-success w-full`}
                  {...register("itemName")}
                />
                <p className="text-base text-red-600 font-semibold">
                  {errors.itemName?.message}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-bold block">Image:</label>
                <input
                  type="text"
                  placeholder="Image URL"
                  name="image"
                  className={`input input-bordered input-sm input-success w-full`}
                  {...register("image")}
                />
                <p className="text-base text-red-600 font-semibold">
                  {errors.image?.message}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-bold block">Category:</label>
                <select
                  className="select select-success w-full"
                  {...register("category")}
                  name="category"
                >
                  <option disabled selected>
                    Pick One
                  </option>
                  {categories?.map((category) => {
                    return (
                      <option value={category.value}>{category?.name}</option>
                    );
                  })}
                </select>
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-bold block">Description:</label>
                <textarea
                  type="text"
                  placeholder="description"
                  name="description"
                  {...register("description")}
                  className={`input input-bordered input-sm input-success w-full h-40`}
                ></textarea>
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-bold block">Price:</label>
                <input
                  type="text"
                  placeholder="Price"
                  name="price"
                  {...register("price")}
                  className={`input input-bordered input-sm input-success w-full`}
                />
                <p className="text-base text-red-600 font-semibold">
                  {errors.price?.message}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-bold block">Rating:</label>
                <input
                  type="text"
                  name="rating"
                  {...register("rating")}
                  placeholder="Rating"
                  className={`input input-bordered input-sm input-success w-full`}
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-bold block">Customizable:</label>
                <div className="flex flex-row items-center gap-6">
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text">Yes&nbsp;</span>
                      <input
                        type="radio"
                        name="customization"
                        {...register("customization")}
                        className="radio checked:bg-green-500"
                        value={true}
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text">No&nbsp;</span>
                      <input
                        type="radio"
                        name="customization"
                        value={false}
                        className="radio checked:bg-red-500"
                        {...register("customization")}
                        defaultChecked
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-bold block"> Processing Time:</label>
                <input
                  type="text"
                  placeholder="Processing Time"
                  name="processingTime"
                  {...register("processingTime")}
                  className={`input input-bordered input-sm input-success w-full`}
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-bold block">StockS tatus:</label>
                <div className="flex flex-row items-center gap-6">
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text">Yes&nbsp;</span>
                      <input
                        type="radio"
                        name="stockStatus"
                        {...register("stockStatus")}
                        className="radio checked:bg-green-500"
                        value={true}
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text">No&nbsp;</span>
                      <input
                        type="radio"
                        name="stockStatus"
                        value={false}
                        className="radio checked:bg-red-500"
                        {...register("stockStatus")}
                        defaultChecked
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-bold block">Email:</label>
                <input
                  type="text"
                  name="userEmail"
                  {...register("userEmail")}
                  placeholder="User Email"
                  className={`input input-bordered input-sm input-success w-full`}
                />
                <p className="text-base text-red-600 font-semibold">
                  {errors.userEmail?.message}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-bold block">User Name:</label>
                <input
                  type="text"
                  placeholder="User Name"
                  {...register("userName")}
                  name="userName"
                  className={`input input-bordered input-sm input-success w-full`}
                />
              </div>

              <div className="flex flex-col gap-3">
                <div className="w-80">
                  <input
                    type="submit"
                    placeholder="Add"
                    className={`w-full cursor-pointer input input-bordered input-sm input-success bg-green-600 font-bold text-white`}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddProductForm;

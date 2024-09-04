import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { isEmptyOrNull, onNotifyError, onNotifySuccess } from "../utils/helper";

const HomePage = () => {
  const [craftItems, setCraftItems] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_API_URL
        }/products/query?stock=${true}&customizable=${true}`
      )
      .then((resp) => {
        if (!isEmptyOrNull(resp.data)) {
          if (!isEmptyOrNull(resp.data.status)) {
            setCraftItems(resp.data.response);
            onNotifySuccess(resp.data.message);
          }
        }
      })
      .catch((error) => {
        onNotifyError(error.message);
      });
  }, []);
  return (
    <React.Fragment>
      <Helmet>
        <title>Ayat Craft | Home</title>
      </Helmet>
      <section className="w-full flex flex-col justify-center items-center my-6">
        {/* Slider Start */}
        <div className="w-full grid grid-cols-3">
          <div className="col-span-1">
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Listen</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                alt="Album"
              />
            </figure>
          </div>
        </div>

        {/* Slider End */}
      </section>

      <section>
        <div className="grid grid-cols-12 gap-5 my-6">
          {craftItems?.map((item) => {
            return (
              <div
                key={`art&craft-${item?._id}`}
                className="box-border col-span-3 flex flex-col p-5 gap-4 border-gray-300 shadow-xl rounded-md border"
              >
                <div className="rounded-xl">
                  <img src={item?.image} alt={item.itemName} />
                </div>
                <h2 className="text-xl font-bold">{item.itemName}</h2>
                <h3 className="text-base font-semibold">{item?.category}</h3>
                <div className="text-lg font-medium flex flex-row justify-between">
                  <div className="">
                    Price:<i className="fa-solid fa-bangladeshi-taka-sign"></i>{" "}
                    {item?.price}
                  </div>
                  <div className="">
                    <i className="text-amber-600 fa-solid fa-star"></i>{" "}
                    {item?.rating}
                  </div>
                </div>
                <div className="w-full">
                  <NavLink
                    className="w-full rounded-sm bg-orange-500 text-white block text-center py-2 font-semibold hover:bg-orange-700"
                    to={`/products/${item?._id}`}
                  >
                    View Details
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </React.Fragment>
  );
};

export default HomePage;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { isEmptyOrNull, onNotifyError, onNotifySuccess } from "../utils/helper";
import ItemCard from "../Components/Utils/ItemCard";

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
              <div key={`key-${item?._id}`} className="box-border col-span-3">
                <ItemCard item={item} key={`home-art&craft-${item?._id}`} />{" "}
              </div>
            );
          })}
        </div>
      </section>
    </React.Fragment>
  );
};

export default HomePage;

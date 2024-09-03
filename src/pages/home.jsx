import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const HomePage = () => {
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
          <div className="box-border col-span-3 flex flex-col p-5 gap-4 border-gray-300 shadow-xl rounded-md border">

            <div className="rounded-xl">
              <img src={`/images/art-1.webp`} />
            </div>
            <h2>BeverleySavilleArt</h2>
            <div className="text-lg font-medium flex flex-row justify-between">
              <div className="">
                Price:<i className="fa-solid fa-bangladeshi-taka-sign"></i> 500
              </div>
              <div className="">
                <i className="fa-regular fa-star"></i> 4.5
              </div>
            </div>
            <div className="w-full">
              <NavLink
                className="w-full rounded-sm bg-orange-500 text-white block text-center py-2 font-semibold hover:bg-orange-700"
                to={`/products/1`}
              >
                View Details
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HomePage;

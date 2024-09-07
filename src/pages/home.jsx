import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { isEmptyOrNull, onNotifyError, onNotifySuccess } from "../utils/helper";
import ItemCard from "../Components/Utils/ItemCard";
import CraftSlider from "../Components/Utils/CraftSlider";
import ShortText from "../Components/Utils/ShortText";
import { Typewriter } from "react-simple-typewriter";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { REQUEST_HEADER } from "../utils/type";
const HomePage = () => {
  const [craftItems, setCraftItems] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_API_URL
        }/products/query?stock=${true}&customizable=${true}`,
        { headers: REQUEST_HEADER }
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

  const onSubscribe = (e) => {
    console.log("onSubscribe, ", e);
    e.preventDefault();
  };
  return (
    <React.Fragment>
      <Helmet>
        <title>Ayat Craft | Home</title>
      </Helmet>
      <section className="container mx-auto">
        {/* Slider Start */}
        <div className="w-full h-[480px] sm:h-[550px] xs:h-[550px] md:h-[480px] lg:h-[480px]  py-4 my-6 bg-gradient-to-r from-slate-500 to-slate-200 rounded-md p-5 ">
          <CraftSlider sliders={craftItems} />
        </div>

        {/* Slider End */}
      </section>

      <section className="container mx-auto">
        <div className="flex flex-row">
          <h1 className="font-semibold text-4xl sm:text-3xl xs:text-3xl md:text-4xl my-10">
            <span className="border-b py-2">
              Welcome Ayat{" "}
              <Typewriter
                words={["Craft", "Art", "Art & Craft"]}
                cursor
                deleteSpeed={120}
                typeSpeed={130}
              />
            </span>
          </h1>{" "}
        </div>
        <div className="grid grid-cols-12 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-5 my-6">
          {craftItems?.map((item) => {
            return (
              <div key={`key-${item?._id}`} className="box-border col-span-3">
                <ItemCard item={item} key={`home-art&craft-${item?._id}`} />{" "}
              </div>
            );
          })}
        </div>
      </section>
      <section className="container mx-auto">
        <div className="w-full flex flex-row justify-center items-center my-10 border-t border-b border-gray-300">
          <div className="w-2/3 xs:w-full sm:w-full md:w-2/3 lg:w-2/3">
            <div className="grid grid-cols-4 sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-4 gap-12 items-center my-16">
              <div className="col-span-2">
                <h3 className="text-2xl font-normal">
                  We love{" "}
                  <span>
                    <Typewriter
                      words={["Craft", "Art", "Art & Craft"]}
                      cursor
                      cursorColor="red"
                      typeSpeed={100}
                    />
                  </span>
                  . We want to share our news and great offers with you.
                </h3>
              </div>
              <div className="col-span-2">
                <div className="flex flex-row items-center">
                  <label className="w-full flex flex-row items-center pl-3 gap-3 h-10 border border-green-500 rounded-s-xl space-x-2 ">
                    <i className="fa-solid fa-envelope-open-text  "></i>
                    <input
                      type="text"
                      className="h-full outline-none "
                      placeholder="Your email address..."
                    />
                  </label>
                  <label className="flex flex-row bg-green-700 h-10 border-none rounded-e-xl items-center justify-center px-4 text-white font-bold">
                    <input
                      type="submit"
                      onSubmit={onSubscribe}
                      value="Subscribe"
                      className="cursor-pointer"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto my-6">
          <div className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-2  justify-center items-center">
            <div className="flex flex-col gap-5">
              <span>For large orders</span>
              <h2 className="text-3xl">Place a bulk order with us</h2>
              <p>
                Whether you want to place a large customised order for a single
                item or a large assortment of multiple craft products, we can
                sort it out for you! For years we have also worked on custom
                orders for our clients – it is one of the many benefits of
                having direct relationships with our artisans. Just drop us a
                note!
              </p>
              <div className="flex flex-row  items-center">
                <NavLink
                  id="get-in-tuch"
                  to="/contact-us"
                  className="bg-green-800 py-2 px-4 text-white font-semibold"
                >
                  Get In Touch
                </NavLink>
                <Tooltip
                  anchorSelect="#get-in-tuch"
                  content="More information Go"
                />
              </div>
            </div>
            <div className="p-5 xs:order-first sm:order-first md:order-none">
              <img src="https://i.ibb.co/xmKd306/il-1140x-N-3392291175-n6lk.webp" />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HomePage;

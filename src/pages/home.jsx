import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { isEmptyOrNull, onNotifyError, onNotifySuccess } from "../utils/helper";
import ItemCard from "../Components/Utils/ItemCard";
import CraftSlider from "../Components/Utils/CraftSlider";
import ShortText from "../Components/Utils/ShortText";

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
      <section className="container mx-auto">
        {/* Slider Start */}
        <div className="w-full h-[480px] py-4 my-6 bg-gradient-to-r from-slate-500 to-slate-200 rounded-md p-5 ">
          <CraftSlider sliders={craftItems} />
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

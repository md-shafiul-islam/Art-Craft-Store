import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ShortText from "./ShortText";
import { NavLink } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import RatingCard from "./RatingCard";

const CraftSlider = ({ sliders = [], ...props }) => {
  return (
    <React.Fragment>
      <div className="h-[450px]">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          loop={true}
          slidesPerView={1}
          modules={[Pagination, Navigation, Autoplay]} //
          className="mySwiper !h-full w-full"
        >
          {sliders?.map((item) => {
            return (
              <SwiperSlide>
                <div className="w-full grid grid-cols-3">
                  <div className="col-span-1 ">
                    <div className="card lg:card-side bg-base-100 shadow-xl h-[400px]">
                      <div className="card-body flex flex-col gap-4">
                        <h2 className="card-title ">{item?.itemName}</h2>
                        <div className="flex flex-row gap-4 font-bold items-center">
                          <span>Rating: {item?.rating}</span>
                          <RatingCard rating={item?.rating} />
                        </div>
                        <h3 className="text-md font-bold">
                          Category: {item?.category}
                        </h3>
                        <p>
                          <ShortText
                            size={130}
                            text={item?.description}
                            url={`/art-crafts/${item?._id}`}
                          />
                        </p>
                        <div className="card-actions justify-end">
                          <NavLink
                            className="w-full rounded-sm bg-orange-500 text-white block text-center py-2 font-semibold hover:bg-orange-700"
                            to={`/art-crafts/${item?._id}`}
                          >
                            View Details
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="w-full h-[420px] xs:h-56 sm:h-96 md:h-[420px] bg-slate-40 rounded-md border-transparent flex flex-col justify-center items-center">
                      <figure>
                        <img
                          src={item.image}
                          alt={item?.estate_title}
                          className="max-h-[95%] rounded-lg"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </React.Fragment>
  );
};

export default CraftSlider;

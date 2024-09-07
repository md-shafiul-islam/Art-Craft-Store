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
      <div className="h-[450px] sm:h-[545px] xs:h-[545px] md:h-[450px] lg:h-[450px]">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          // autoplay={{
          //   delay: 3500,
          //   disableOnInteraction: false,
          // }}
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
                <div className="w-full grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
                  <div className="col-span-1 xs:hidden sm:hidden md:block lg:block xl:block block">
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
                  <div className="col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2  xs:col-span-1 sm:col-span-1">
                    <div className="w-full sm:h-[480px] xs:h-[480px]  h-[420px]  md:h-[420px] bg-slate-40 rounded-md border-transparent flex flex-col justify-center items-center">
                      <figure>
                        <img
                          src={item.image}
                          alt={item?.estate_title}
                          className="max-h-[95%] xs:!max-h-[370px] sm:!max-h-[370px] rounded-lg"
                        />
                      </figure>
                      <div className="w-full xs:block sm:block md:hidden lg:hidden xl:hidden hidden ">
                        <div className="flex flex-col gap-4">
                          <h2 className="card-title font-semibold ">
                            {item?.itemName}
                          </h2>
                          <div className="flex flex-row gap-4 font-bold items-center">
                            <span>Rating: {item?.rating}</span>
                            <RatingCard rating={item?.rating} />
                          </div>
                          <h3 className="text-md font-bold">
                            Category: {item?.category}
                          </h3>
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

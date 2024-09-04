import React from "react";
import { NavLink } from "react-router-dom";

const ItemCard = ({ item, ...props }) => {
  return (
    <div className="w-full box-border flex flex-col p-5 gap-4 border-gray-300 shadow-xl rounded-md border">
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
          <i className="text-amber-600 fa-solid fa-star"></i> {item?.rating}
        </div>
      </div>
      <div className="w-full">
        <NavLink
          className="w-full rounded-sm bg-orange-500 text-white block text-center py-2 font-semibold hover:bg-orange-700"
          to={`/art-crafts/${item?._id}`}
        >
          View Details
        </NavLink>
      </div>
    </div>
  );
};

export default ItemCard;

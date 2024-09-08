import axios from "axios";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import {
  isEmptyOrNull,
  onConfrimAlert,
  onNotifyError,
  onNotifySuccess,
} from "../../utils/helper";

const MyItemCard = ({ item, ...props }) => {
  const navigate = useNavigate();

  const onItemRemoveAction = () => {
    onConfrimAlert(
      "You want to remove this item?",
      "Yes",
      "No",
      "Canceling Remove",
      removeItem
    );
  };

  const removeItem = () => {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/products/${item?._id}`)
      .then((resp) => {
        console.log("Items Is Rmoved ", resp);
        if (!isEmptyOrNull(resp?.data?.response)) {
          if (resp.data.response.acknowledged) {
            onNotifySuccess("Item Remove Successfully :)");
            navigate(0);
          }
        }
      })
      .catch((error) => {
        onNotifyError("Item Remove Failed. Please, Contact administrator!!");
      });
  };
  return (
    <div className="w-full box-border flex flex-row md:flex-row lg:flex-row xs:flex-col sm:flex-col  p-5 gap-4 border-gray-300 shadow-xl rounded-md border justify-between items-center">
      <div className="rounded-xl h-32 ">
        <img className="h-full" src={item?.image} alt={item.itemName} />
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
      <div className="flex flex-rowrounded-sm  text-xl font-bold gap-4 justify-center">
        <NavLink
          className="my-item-details cursor-pointer text-green-700 border rounded-md border-gray-400 py-1 px-2"
          to={`/my-crafts/${item?._id}`}
        >
          <i className="fa-solid fa-file-lines"></i>
        </NavLink>
        <Tooltip
          anchorSelect=".my-item-details"
          content={`Go To Details this Item`}
        />
        <div
          onClick={onItemRemoveAction}
          className="my-item-remove text-red-600 cursor-pointer border rounded-md border-gray-400 py-1 px-2"
        >
          <i className="fa-solid fa-trash-can"></i>
        </div>
        <Tooltip anchorSelect=".my-item-remove" content={`Remove this Item`} />
      </div>
    </div>
  );
};

export default MyItemCard;

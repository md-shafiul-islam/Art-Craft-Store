/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { onNotifyError, onNotifySuccess } from "../utils/helper";
import RatingCard from "../Components/Utils/RatingCard";
import ItemCard from "../Components/Utils/ItemCard";
import Loading from "../Components/Utils/Loading";

const MyItemDetailsPage = ({ ...props }) => {
  const itemResp = useLoaderData();
  const [isDataLoading, setIsDataLoading] = useState(true);

  const [artCraft, setArtCraft] = useState({});
  const [relatedItems, setRelatedItems] = useState([]);

  useEffect(() => {
    if (itemResp.status) {
      onNotifySuccess(itemResp.message);
      setArtCraft(itemResp.response.product);
      setRelatedItems(itemResp.response.cat);
      setIsDataLoading(false);
    } else {
      onNotifyError(`Item Not found`);
    }
  }, [itemResp]);
  const {
    userEmail,
    price,
    itemName,
    stockStatus,
    category,
    rating,
    processingTime,
    description,
    customization,
    userName,
    image,
  } = artCraft;

  if (isDataLoading) {
    return <Loading isLoading={isDataLoading} />;
  }

  return (
    <React.Fragment>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 my-10 gap-6 ">
          <div className="col-span-7 flex flex-col justify-center items-center  box-border shadow-xl p-6 border border-gray-300">
            <img
              src={image}
              title={itemName}
              alt={itemName}
              className="h-full"
            />
          </div>
          <div className="col-span-4 flex flex-col gap-5 shadow-xl p-5 text-lg font-semibold border border-gray-300 min-h-[400px]">
            <h1 className="text-2xl font-bold">{itemName}</h1>
            <h2>
              <span className="font-bold">Category:</span>
              &nbsp;{category}
            </h2>
            <div className="flex flex-row gap-4 items-center">
              Price:
              <span>
                <i className="fa-solid fa-bangladeshi-taka-sign"></i> {price}
              </span>
            </div>
            <div className="flex flex-row gap-4 items-center font-bold text-xl justify-between">
              <span>Rating: {rating}</span>
              <RatingCard rating={rating} />
            </div>

            <div className="flex flex-row">
              <span className="mr-4">Status:</span>
              {stockStatus ? (
                <div className="border-gray-300 border px-2">In Stock</div>
              ) : (
                <div className="border-red-300 border ">Stock Out</div>
              )}
            </div>
            <div className="flex flex-row gap-4">
              <span>Customizable:</span>
              {customization ? (
                <div className="bg-green-600  px-3 rounded-md ">Yes</div>
              ) : (
                <div className="bg-red-600 py-1 px-3">No</div>
              )}
            </div>
            <h3>
              Processing Time:{" "}
              <span>
                <i className="fa-regular fa-clock"></i> {processingTime}
              </span>
            </h3>
            <h3>
              <i className="fa-solid fa-user-tie"></i> {userName}
            </h3>
            <h3>
              <i className="fa-regular fa-envelope"></i> {userEmail}
            </h3>
          </div>
          <div className="w-full col-span-12 mt-10">
            <h2 className="text-2xl font-bold mb-6">
              <span className="border-b border-gray-400 pr-4">Description</span>
            </h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MyItemDetailsPage;

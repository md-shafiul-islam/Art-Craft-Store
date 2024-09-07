import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { isEmptyOrNull } from "../utils/helper";
import ItemCard from "../Components/Utils/ItemCard";

const ArtAndCraft = ({ ...props }) => {
  const artCrafItemsResp = useLoaderData();
  const [artCrafItems, setArtCrafItems] = useState([]);

  useEffect(() => {
    if (!isEmptyOrNull(artCrafItemsResp)) {
      if (artCrafItemsResp.status) {
        setArtCrafItems(artCrafItemsResp.response);
      }
    }
  }, [artCrafItemsResp]);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="flex flex-row xs:flex-col sm:flex-col md:flex-row lg:flex-row gap-12 items-center my-16">
          <div>
            <h2 className="text-xl font-bold text-nowrap">Art & Carft</h2>
          </div>
          <div className="px-6">
            <p>
              Over the years, we have cultivated direct relationships with a
              wide network of artisans and craft centric enterprises across the
              country. Our primary mission is to empower the Indian artisan and
              do our bit in contributing to the sustenance of artisan
              livelihoods as also the preservation of an amazing craft heritage.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {artCrafItems?.map((item) => {
            return (
              <div
                className="col-span-3 md:col-span-3 lg:col-span-3 xs:col-span-12 sm:col-span-12"
                key={`category-item-${item?._id}`}
              >
                <ItemCard item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ArtAndCraft;

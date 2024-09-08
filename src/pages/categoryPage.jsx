import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { isEmptyOrNull } from "../utils/helper";
import ItemCard from "../Components/Utils/ItemCard";
import Loading from "../Components/Utils/Loading";

const CategoryPage = ({ ...props }) => {
  const { cat } = useParams();
  const [isDataLoading, setIsDataLoading] = useState(true);

  const cateItemResp = useLoaderData();

  const [craftItems, setCraftItems] = useState([]);

  useEffect(() => {
    if (!isEmptyOrNull(cateItemResp)) {
      if (cateItemResp.status) {
        setCraftItems(cateItemResp.response);
        setIsDataLoading(false);
      }
    }
  }, [cateItemResp]);

  if (isDataLoading) {
    return <Loading isLoading={isDataLoading} />;
  }
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center gap-8">
        <h2 className="text-xl font-bold">Art & Carft By Category:: {cat}</h2>

        <div className="grid grid-cols-12 gap-4">
          {craftItems?.map((item) => {
            return (
              <div
                className="col-span-3 xs:col-span-12 sm:col-span-12 md:col-span-3 lg:col-span-3"
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

export default CategoryPage;

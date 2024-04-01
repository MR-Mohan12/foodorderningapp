
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { CDN_URL } from "../utils/Constant";
import { MENU_API } from "../utils/Constant";

const RestaurantsMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;



  // const { name, cuisines, costForTwoMessage, avgRating, cloudinaryImageId } =
  //   resInfo?.cards[4]?.card?.card?.info ;

  // const { itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
   

  const {name, cuisines, costForTwoMessage,areaName,cloudinaryImageId,avgRating,totalRatingsString} = 
  resInfo?.cards?.map((x)=>x.card)?.find((x) => 
   x && x.card["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant')?.card?.info

  const categories = resInfo?.cards.find((x)=>x.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => c.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  )
 


  // const categories =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  //     (c) =>
  //       c.card?.card?.["@type"] ==
  //       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  //   );

  return (
    <div className="menu bg-gray-100 p-4">
      <div className="sum bg-white p-4 rounded-md shadow-md mb-4 flex flex-col md:flex-row md:items-center">
        <img
          src={CDN_URL + cloudinaryImageId}
          className="mb-4 md:mr-4 md:mb-0 rounded-md w-full md:w-48 h-auto"
          alt={name}
        />
        <div className="flex flex-col md:flex-row md:flex-grow">
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold mb-2">{name}</h1>
            <div className="flex items-center mb-2">
              <span className="text-yellow-500 mr-1">&#9733;</span>
              <span className="text-gray-700">{avgRating}</span>
            </div>
            <p className="text-gray-600">
              {cuisines.join(", ")} - {costForTwoMessage}
            </p>
          </div>
          <div className="md:w-1/3 mt-4 md:mt-0">
            {/* Additional information or actions can be placed here */}
          </div>
        </div>
      </div>

      <div className="categeroius">
        {categories &&
          categories.map((category, index) => (
            <RestaurantCategory
              key={category.card.card.title}
              data={category.card.card}
              showItems={index === showIndex}
              setShowIndex={() => {
                setShowIndex(index === showIndex ? null : index);
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default RestaurantsMenu;

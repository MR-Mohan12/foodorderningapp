import React from "react";
import { CDN_URL } from "../utils/Constant";

const Card = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwoString, avgRating } = resData?.info;

  return (
    <div className="restaurantCard w-64 bg-white p-4 shadow-md rounded-md border border-gray-300 hover:border-gray-500 transition duration-300 transform hover:scale-105">
      <img
        src={CDN_URL + cloudinaryImageId}
        className="w-full  h-auto object-cover rounded-md mb-4"
        alt={name}
      />
      <h1 className="text-xl font-semibold mb-2">{name}</h1>
      <p className="text-gray-500 mb-2">{cuisines.join(" , ")}</p>
      <div className="flex items-center mb-2">
        <span className="text-yellow-500 mr-1">&#9733;</span>
        <span className="text-gray-700">{avgRating}</span>
      </div>
      <p className="text-gray-700">{costForTwoString}</p>
    </div>
  );
};


//Higher Order Component
//input -Restaurant Card  => RestaurantCardPromoted



export const withPromotedLablel = (Card) => {
  return (props)=>{
    return(
        <div>
        <label className='absolute m-3 bg-green-500 text-white py-1 px-3 rounded z-10 font-bold'>Veg</label>
        <Card {...props}/>
      </div>
    )
  }
} 
export default Card;


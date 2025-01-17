import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Card, { withPromotedLablel } from "./Card";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/Constant";
import UserContext from "../utils/UserContext.js";
import { IMG_CAROUSEL } from "../utils/Constant.js";


const Body = () => {
  const [listOfRest, setlistOfRest] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [ImageCarousel, setImageCarousel] = useState([]);
;

  const RestaurantCardPromoted = withPromotedLablel(Card);

  const handleFoodScrollLeft = () => {
    const foodCategory = document.querySelector(".food-category");
    foodCategory.scrollLeft = foodCategory.scrollLeft - 250;
  };

  const handleFoodScrollRight = () => {
    const foodCategory = document.querySelector(".food-category");
    foodCategory.scrollLeft = foodCategory.scrollLeft + 250;
  };

  useEffect(() => {
    getResData();
  }, []);

  async function getResData() {
    try {
      const response = await fetch(SWIGGY_API);
      const json = await response.json();

      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          let checkData =
            json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      const resData = await checkJsonData(json);
      const imgCarousel = json?.data?.cards?.find(
        (x) => x?.card?.card?.id === "whats_on_your_mind"
      )?.card?.card?.gridElements?.infoWithStyle?.info;

      setlistOfRest(resData);
      setFilteredRes(resData);
      
      setImageCarousel(imgCarousel);
    } catch (error) {
      console.log(error);
    }
  }

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks Like You are offline!! Please check Your internet Connection{" "}
      </h1>
    );

  const { setUserName, loggedInUser } = useContext(UserContext);

  return listOfRest.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body container mx-auto mt-2 mb-2 xl:px-0 md:px-2 px-0 overflow-x-hidden sm:px-4 lg:px-8">
      {ImageCarousel && ImageCarousel?.length !== 0 && (
        <>
          <section id="img-carousel" className="relative">
            <h2 className="font-GrotBlack ml-2 text-2xl pb-5">
              What's on your mind?
            </h2>

            <div className="scroll-buttons absolute top-0 flex gap-2 right-10">
              <button
                onClick={handleFoodScrollLeft}
                className="scroll-left text-white flex justify-center cursor-pointer"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  aria-hidden="true"
                  strokecolor="rgba(2, 6, 12, 0.92)"
                  fillcolor="rgba(2, 6, 12, 0.92)"
                >
                  <path
                    d="M7.46869 3.43394C7.79171 3.13249 8.29794 3.14998 8.59939 3.473C8.90083 3.79602 8.88334 4.30225 8.56033 4.60369L5.0839 7.84795C4.94511 7.97748 4.82252 8.0921 4.71414 8.19502L15.0937 8.19502C15.5355 8.19502 15.8937 8.5532 15.8937 8.99502C15.8937 9.43685 15.5355 9.79502 15.0937 9.79502L4.6665 9.79502C4.78625 9.90939 4.92436 10.0386 5.08389 10.1875L8.51791 13.3922C8.84092 13.6937 8.8584 14.1999 8.55695 14.5229C8.2555 14.8459 7.74927 14.8634 7.42626 14.5619L3.95463 11.3221C3.54648 10.9413 3.18179 10.601 2.92647 10.2871C2.64873 9.94573 2.41671 9.53755 2.41672 9.01769C2.41672 8.49783 2.64874 8.08965 2.92648 7.74824C3.18181 7.43439 3.54649 7.09412 3.95465 6.7133L7.46869 3.43394Z"
                    fill="rgba(2, 6, 12, 0.92)"
                    fillOpacity="0.92"
                  ></path>
                </svg>
              </button>
              <button
                onClick={handleFoodScrollRight}
                className="scroll-right flex justify-center cursor-pointer"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  aria-hidden="true"
                  strokecolor="rgba(2, 6, 12, 0.92)"
                  fillcolor="rgba(2, 6, 12, 0.92)"
                >
                  <path
                    d="M10.5164 3.43418C10.1934 3.13273 9.68714 3.15022 9.3857 3.47324C9.08425 3.79626 9.10174 4.30249 9.42476 4.60394L12.9012 7.84819C13.04 7.97772 13.1626 8.09234 13.2709 8.19527L2.89142 8.19527C2.44959 8.19527 2.09142 8.55344 2.09142 8.99527C2.09142 9.4371 2.44959 9.79527 2.89142 9.79527L13.3186 9.79527C13.1988 9.90964 13.0607 10.0388 12.9012 10.1877L9.46718 13.3924C9.14416 13.6939 9.12668 14.2001 9.42813 14.5231C9.72958 14.8462 10.2358 14.8636 10.5588 14.5622L14.0304 11.3224C14.4386 10.9415 14.8033 10.6012 15.0586 10.2874C15.3364 9.94598 15.5684 9.5378 15.5684 9.01793C15.5684 8.49807 15.3363 8.08989 15.0586 7.74849C14.8033 7.43463 14.4386 7.09437 14.0304 6.71354L10.5164 3.43418Z"
                    fill="rgba(2, 6, 12, 0.92)"
                    fillOpacity="0.92"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="food-category overflow-x-hidden sm:w-full w-[1500px] px-4 lg:px-0 top-chain-category  scroll-smooth scrollbar-hide ">
              <div className="flex gap-6">
                {ImageCarousel?.map((item) => (
                  <div className="cursor-pointer" key={item?.id}>
                    <div className="w-36">
                      <img
                        src={IMG_CAROUSEL + item?.imageId}
                        alt={item?.accessibility?.altText}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="divider"></div>
        </>
      )}



      <div className="rest-det flex flex-col lg:flex-row items-center">
        <div className="search-res m-4 p-4 flex flex-col lg:flex-row items-center sm:mx-2 lg:mx-0">
          <input
            placeholder="Enter Your Restaurant"
            type="text"
            className="border border-solid border-gray-300 px-4 py-2 rounded-md mb-2 lg:mb-0 lg:mr-2 focus:outline-none focus:border-blue-500 transition duration-300"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search bg-blue-500 text-white px-4 py-2 rounded-md ml-2 lg:ml-0 hover:bg-blue-600 focus:outline-none transition duration-300"
            onClick={() => {
              const filteredRes = listOfRest.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRes(filteredRes);
            }}
          >
            Search
          </button>
        </div>

        <div className="btn-cont flex lg:ml-4 mt-4 lg:mt-0">
          <button
            className="src-btn bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none transition duration-300"
            onClick={() => {
              const filteredRes = listOfRest.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilteredRes(filteredRes);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className="ml-4 mt-4 lg:mt-0">
          <label className="text-gray-700 p-4">UserName:</label>
          <input
            className="border border-solid border-gray-300 px-4 py-2 rounded-md "
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="res-container flex justify-center items-center flex-wrap sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRes.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurants/${restaurant.info.id}`}
          >
            <div className="mx-auto p-4">
              {restaurant.info.veg ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <Card resData={restaurant} />
              )}
             
            </div>
          </Link>
        ))}
      </div>
 
    </div>
    
  );
  
};

export default Body;

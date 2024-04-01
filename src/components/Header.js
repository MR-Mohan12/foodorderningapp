import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/Constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";



const Header = () => {
  const [btnState, setBtnState] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);


  //Subscribing our store using selector 
  const cartItems = useSelector((store)=>store.cart.items);
  console.log(cartItems);

  return (
    <div className="p-4 shadow-lg">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="log-container mb-4 sm:mb-0">
          <img className="w-16 rounded-full" src={LOGO_URL} alt="Logo" />
        </div>

        <div className="nav-items flex items-center font-serif text-white">
          <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <li className="text-gray-600 hover:text-gray-300 transition duration-300 ease-in-out">
              {onlineStatus ? "🟢" : "🟥"}
            </li>

            <li className="text-gray-600 hover:text-gray-300 transition duration-300 ease-in-out">
              <Link to="/">Home</Link>
            </li>
            <li className="text-gray-600 hover:text-gray-300 transition duration-300 ease-in-out">
              <Link to="/about">About Us</Link>
            </li>
            <li className="text-gray-600 hover:text-gray-300 transition duration-300 ease-in-out">
              <Link to="/contact">Contact Us</Link>
            </li>
            {/* <li className="text-gray-600 hover:text-gray-300 transition duration-300 ease-in-out">
              <Link to="/grocery">Grocery</Link>
            </li> */}
            <li className="text-gray-600 hover:text-gray-300 transition duration-300 ease-in-out">
              <Link to="/cart" className="flex items-center">
                <span>Cart-{cartItems.length}</span>
                
                <FaShoppingCart className="ml-1" />
              </Link>
            </li>

            <li>
              <button
                className={`login-btn px-4 py-2 rounded-full ${
                  btnState === "Login"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                <Link to="/login">Login</Link>
              </button>
            </li>

            <li className="text-gray-600 hover:text-gray-300 transition duration-300 ease-in-out">
              {loggedInUser}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

// import { Link } from "react-router-dom";
// import { LOGO_URL } from "../utils/Constant";
// import { useState,useContext } from "react";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";

// const Header = () => {
//   const [btnState, setBtnState] = useState("Login");
//   const onlineStatus = useOnlineStatus();

//   const {loggedInUser} = useContext(UserContext);
//   console.log(loggedInUser);

//   return (

//     <div className="  p-4 shadow-lg ">
//       <div className="flex flex-col sm:flex-row items-center justify-between">
//         <div className="log-container mb-4 sm:mb-0">
//           <img className="w-16  rounded-full" src={LOGO_URL} alt="Logo" />
//         </div>

//         <div className="nav-items flex items-center font-serif text-white">
//           <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
//             <li className=" text-gray-600  hover:text-gray-300 transition duration-300 ease-in-out">
//               <Link to="/">Home</Link>
//             </li>
//             <li className=" text-gray-600 hover:text-gray-300 transition duration-300 ease-in-out">
//               <Link to="/about">About Us</Link>
//             </li>
//             <li className=" text-gray-600 hover:text-gray-300 transition duration-300 ease-in-out">
//               <Link to="/contact">Contact Us</Link>
//             </li>
//             <li className=" text-gray-600 hover:text-gray-300 transition duration-300 ease-in-out">
//               <Link to="/grocery">Grocery</Link>
//             </li>
//             <li className=" text-gray-600 hover:text-gray-300 transition duration-300 ease-in-out">
//               <Link to="/login">login</Link>
//             </li>
//             <li>
//               <span
//                 className={`px-1 py-1 rounded-full ${
//                   onlineStatus ? "bg-green-500" : "bg-red-500"
//                 }`}
//               >
//                 {onlineStatus ? "🟢" : "🟥"}
//               </span>
//             </li>
//             <li>
//               <button
//                 className={`login-btn px-4 py-2 rounded-full ${
//                   btnState === "Login"
//                     ? "bg-blue-500 text-white"
//                     : "bg-gray-300 text-gray-700"
//                 }`}
//                 onClick={() => {
//                   setBtnState((prevState) =>
//                     prevState === "Login" ? "Logout" : "Login"
//                   );
//                 }}

//               >

//                {btnState}
//               </button>

//             </li>
//             <li className=" text-gray-600 hover:text-gray-300 transition duration-300 ease-in-out">{loggedInUser}</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

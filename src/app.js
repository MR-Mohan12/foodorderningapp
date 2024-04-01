import React, { Suspense, lazy, useEffect, useState } from "react"
import ReactDom from "react-dom/client";
import Header from "./components/Header.js";
import Header from "./components/Header.js";
import Body from "./components/Body";
import Home from "./components/Home";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter ,RouterProvider, createBrowserRouter,Outlet } from "react-router-dom";
import RestaurantsMenu from "./components/RestaurantsMenu";
// import Grocery from "./components/Grocery";
const Grocery = lazy(()=> import("./components/Grocery"));
import UserContext from "./utils/UserContext";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage.js";
import { Provider } from "react-redux";
import appStore from "./readux/appStore.js";
import Cart from "./components/Cart.js";
import Footer from "./components/Footer.js";



const AppLayOut = () => {

    const [userName, setUserName] = useState();

    //authetication
    useEffect(()=>{
          const data = {
            name: "Mohan Singh",
          };
          setUserName(data.name);
    },[]);


return(

    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userName , setUserName}}>

   {/* <> */}
   <Header/>
  
   <Outlet/>
   <Footer/>
   {/* </> */}
   </UserContext.Provider>
   </Provider>
)

}

const appRouter = createBrowserRouter([
    
    {
    path: "/",
    element: <AppLayOut/>, 
    children:[
        {
            path: "/",
            element: <Body/>
        },

        {
            path: "/home",
            element: <Home/>,   
        },
        {
            path: "/about",
            element: <About/>,   
        },
        {
            path: "/contact",
            element: <Contact/>,   
        },  {
            path: "/cart",
            element: <Cart/>,   
        },
        {
            path: "/login",
            element: <LoginPage/>,   
        },
        {
            path: "/login/register",
            element: <RegisterPage/>,   
        },  {
            path: "/login/login/register",
            element: <RegisterPage/>,   
        },
        // {
        //     path: "/grocery",
        //     element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>,   
        // },
        {
            path: "/restaurants/:resId",
            element:<RestaurantsMenu/>
        }
        
    ]  ,
    errorElement : <Error/>
}

])
   


const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(<AppLayOut/>);
root.render(
<RouterProvider router={appRouter}/>

);
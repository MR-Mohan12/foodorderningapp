
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ItemLists from './ItemLists.js';
import { clearCart } from '../readux/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = () => {
    const cartItems = useSelector((store)=> store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () =>{
    dispatch(clearCart());
    }
    const clearAllCart = () => toast("Clear Item Sucessfully");

  return (
    <div  className=' text-center m-4 p-4 '>
      <h1 className='text-2xl font-bold'>Cart</h1>
      <div className=' w-6/12 m-auto'>
        <button onClick={
        ()=>{
          handleClearCart();
          clearAllCart();
        }
           
        } className='p-2 m-2 bg-black text-white rounded-lg'>Clear Cart</button>
  <ItemLists items={cartItems}/>
   {cartItems.length===  0 && <h1>Your cart is empty </h1>}
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Cart;

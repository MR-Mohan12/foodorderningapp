import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/Constant";
import { addItem } from "../readux/cartSlice.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemLists = ({ items }) => {
  // console.log("listing", items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //disptahc an action
    dispatch(addItem(item));
   
  };

  const addOneItem = () => toast("Item add succesfully");

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2  border-gray-200 border-b-2 flex justify-between"
        >
          <div className="w-9/12">
            <div className=" p-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice}
              </span>
            </div>
            <p className=" text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className=" absolute">
              <button
                className="p-2 mx-16 bg-green-200  rounded-lg shadow-lg absolute "
                // onClick={()=>handleAddItem(item) }
                onClick={() => {
                  handleAddItem(item);
                  addOneItem();
                }}
                
               
              >
                Add+
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className=" w-full" />
          </div>
        </div>
      ))}
      <ToastContainer/>
    </div>
  );
};

export default ItemLists;
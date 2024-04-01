
import ItemLists from "./ItemLists";

const RestaurantCategory = ({ data , showItems ,setShowIndex}) => {

  
  const handleClick = () =>{
   setShowIndex();
    }

  return (
    <div>
    

      <div className=" w-6/12 bg-gray-50 shadow-lg p-4  mx-auto my-6 ">
        <div className="flex  justify-between cursor-pointer" onClick={handleClick }>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        
       {showItems &&  <ItemLists items={data.itemCards} />} 
    
        
      </div>
      {/* {Accordiean Body */}
    </div>
  );
};

export default RestaurantCategory;
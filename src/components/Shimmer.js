

// const Shimmer = () => {
//     return (
//       <div className="Shimmer-container flex flex-wrap">
//         {[...Array(10)].map((_, index) => (
//           <div key={index} className="shimmer-card bg-gray-200 h-72  w-72 rounded-md m-2 animate-shimmer"></div>
//         ))}
//       </div>
//     );
//   };
  
//   export default Shimmer;
  
  
const Shimmer = () => {
  return(
     <div className="shimmer-container w-[100%] h-fit flex flex-wrap justify-evenly gap-y-[2rem] my-[10rem] p-4">
       <div className="shimmer-card w-[270px] h-[40vh] flex flex-col gap-[0.3rem] animate-[flash_2s_infinite]">
         <div className="bg-gray-200 h-[37vh] mb-[0.3rem] rounded"></div>
         <div className="bg-gray-200 h-[1.5vh] rounded"></div>
         <div className="bg-gray-200 h-[1.5vh] rounded"></div>
       </div>
       <div className="shimmer-card w-[270px] h-[40vh] flex flex-col gap-[0.3rem] animate-[flash_2s_infinite]">
         <div className="bg-gray-200 h-[37vh] mb-[0.3rem] rounded"></div>
         <div className="bg-gray-200 h-[1.5vh] rounded"></div>
         <div className="bg-gray-200 h-[1.5vh] rounded"></div>
       </div>
       <div className="shimmer-card w-[270px] h-[40vh] flex flex-col gap-[0.3rem] animate-[flash_2s_infinite]">
         <div className="bg-gray-200 h-[37vh] mb-[0.3rem] rounded"></div>
         <div className="bg-gray-200 h-[1.5vh] rounded"></div>
         <div className="bg-gray-200 h-[1.5vh] rounded"></div>
       </div>
       <div className="shimmer-card w-[270px] h-[40vh] flex flex-col gap-[0.3rem] animate-[flash_2s_infinite]">
         <div className="bg-gray-200 h-[37vh] mb-[0.3rem] rounded"></div>
         <div className="bg-gray-200 h-[1.5vh] rounded"></div>
         <div className="bg-gray-200 h-[1.5vh] rounded"></div>
       </div>
       <div className="shimmer-card w-[270px] h-[40vh] flex flex-col gap-[0.3rem] animate-[flash_2s_infinite]">
         <div className="bg-gray-200 h-[37vh] mb-[0.3rem] rounded"></div>
         <div className="bg-gray-200 h-[1.5vh] rounded"></div>
         <div className="bg-gray-200 h-[1.5vh] rounded"></div>
       </div>
       <div className="shimmer-card w-[270px] h-[40vh] flex flex-col gap-[0.3rem] animate-[flash_2s_infinite]">
         <div className="bg-gray-200 h-[37vh] mb-[0.3rem] rounded"></div>
         <div className="bg-gray-200 h-[1.5vh] rounded"></div>
         <div className="bg-gray-200 h-[1.5vh] rounded"></div>
       </div>
       <div className="shimmer-card w-[270px] h-[40vh] flex flex-col gap-[0.3rem] animate-[flash_2s_infinite]">
         <div className="bg-gray-200 h-[37vh] mb-[0.3rem] rounded"></div>
         <div className="bg-gray-200 h-[1.5vh] rounded"></div>
         <div className="bg-gray-200 h-[1.5vh] rounded"></div>
       </div>
       <div className="shimmer-card w-[270px] h-[40vh] flex flex-col gap-[0.3rem] animate-[flash_2s_infinite]">
         <div className="bg-gray-200 h-[37vh] mb-[0.3rem] rounded"></div>
         <div className="bg-gray-200 h-[1.5vh] rounded"></div>
         <div className="bg-gray-200 h-[1.5vh] rounded"></div>
       </div>
     </div>
  )
}

export default Shimmer
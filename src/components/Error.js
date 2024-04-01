// import React from 'react'
// import { useRouteError } from 'react-router-dom';
// const Error = () => {
//     const err= useRouteError();
//     console.log(err);
//   return (
//     <div className='Body'>

// <div className='error-container'>
// <div className='error-content'>
//   <h1>Oops! Something went wrong!</h1>
//   <p>We apologize for the inconvenience.</p>
//   <p>Status: {err.status}</p>
//   <p>Status Text: {err.statusText}</p>
//   <p>{err.data}</p>
  
// </div>
// </div>
// </div>
//   )
// }

// export default Error;

import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();

  return (
    <div className='Body'>

      <div className='error-container flex items-center justify-center h-screen'>
        <div className='error-content text-center'>
          <h1 className='text-4xl font-bold text-red-600 mb-4'>Oops! Something went wrong!</h1>
          <p className='text-lg text-gray-700 mb-2'>We apologize for the inconvenience.</p>
          <p className='text-lg text-gray-700 mb-2'>Status: {err.status}</p>
          <p className='text-lg text-gray-700 mb-2'>Status Text: {err.statusText}</p>
          <p className='text-lg text-gray-700'>{err.data}</p>
        </div>
      </div>
      
    </div>
  );
}

export default Error;

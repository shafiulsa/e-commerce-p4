// import React from 'react';
// import FoodCard from '../../../Shared/FoodCard/FoodCard';




// const OrderTab = ({items}) => {
//     return (
//         <div className='grid grid-cols-3 gap-10'>
//         {
//            items.map(item => <FoodCard
//             key={item._id}
//             item={item}
//             ></FoodCard>)
//         }
//     </div>
//     );
// };

// export default OrderTab;

import React, { useState } from "react";
import FoodCard from "../../../Shared/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  const itemsPerPage = 6; // 6 cards per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Get current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      {/* Display Cards */}
      <div className="grid grid-cols-3 gap-5">
        {currentItems.map((item) => (
          <FoodCard key={item._id} item={item} />
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center mt-5 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-8 h-8 rounded-full text-white ${
              currentPage === index + 1 ? "bg-blue-500" : "bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OrderTab;

import React, { useState } from 'react';

function PaginationExample({ data, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleClick = (type) => {
    if (type === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (type === 'next' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      {/* Render current page items */}
      {currentItems.map((item, index) => (
        <div key={index}>{item}</div>
      ))}

      {/* Pagination buttons */}
      <button onClick={() => handleClick('prev')} disabled={currentPage === 1}>
        Previous
      </button>
      <button onClick={() => handleClick('next')} disabled={currentPage === totalPages}>
        Next
      </button>
    </>
  );
}

export default PaginationExample;

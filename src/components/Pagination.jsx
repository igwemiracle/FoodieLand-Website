import React, { useState } from 'react';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const changePage = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const getVisiblePages = () => {
    if (totalPages <= 5) {
      return [...Array(totalPages).keys()].map((_, i) => i + 1);
      //Result : [1, 2, 3, 4, 5].
    }
    const pages = [];
    if (currentPage <= 3) {
      pages.push(1, 2, 3, 4, 5, '...');

    } else if (currentPage >= totalPages - 2) {
      // Checks if the user is on one of the last three pages.
      // currentPages = 8, 9, 10;
      // totalPage = 10;
      // cP >= tP - 2;  8 >= 10-2(8) ✔️
      // cP >= tP - 2; 9 >= 10-2(8) ✔️
      //  cP >= tP - 2; 10 >= 10-2(8) ✔️
      // cP >= tP - 2; 7 >= 10-2(8) ╳
      // cP >= tP - 2; 6 >= 10-2(8) ╳
      pages.push(totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      // For Currentpages 8,9 and 10: 10 - 4 = 6
      // For Currentpages 8,9 and 10: 10 - 3 = 7
      // For Currentpages 8,9 and 10: 10 - 2 = 8
      // For Currentpages 8,9 and 10: 10 - 1 = 9
      // For Currentpages 8,9 and 10:          10 

    } else { // For pageNumbers: 4,5,6,7
      pages.push(currentPage - 2, currentPage - 1, currentPage, currentPage + 1, '...');
      // For currentPage 4: (4-2 = 2) | (4-1 = 3 )| (4) | (4+1 = 5) | (... )
      // For currentPage 5: (5-2 = 3) | (5-1 = 4 )| (5) | (5+1 = 6) | (... )
      // For currentPage 6: (6-2 = 4) | (6-1 = 5 )| (6) | (6+1 = 7) | (... )
      // For currentPage 7: (7-2 = 5) | (7-1 = 6 )| (7) | (7+1 = 8) | (... )


    }
    return pages;
  };

  return (
    <div className="text-center p-4">
      <div className="page-content border border-gray-300 rounded-lg p-6 max-w-lg mx-auto">
        Page {currentPage} Content
      </div>

      <ul className="pagination flex justify-center items-center space-x-2 mt-4">

        {getVisiblePages().map((page, index) => (
          <li key={index}>
            {page === '...' ? (
              <span className="px-3 py-1 border rounded bg-gray-200 cursor-default">...</span>
            ) : (
              <button
                onClick={() => changePage(page)}
                className={`px-3 py-1 border rounded ${currentPage === page ? 'bg-black text-white' : 'hover:bg-black hover:text-white'}`}
              >
                {page}
              </button>
            )}
          </li>
        ))}

        <li>
          <button
            onClick={() => changePage(currentPage + 1)}
            className={`px-3 py-1 border rounded ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-black hover:text-white'}`}
            disabled={currentPage === totalPages}
          >
            &raquo;
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
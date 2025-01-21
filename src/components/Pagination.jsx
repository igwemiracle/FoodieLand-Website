import React, { useState } from 'react';

export default function Pagination() {
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
    <div className="">
      {/* <div className="page-content border border-gray-300 rounded-lg p-6 max-w-lg mx-auto">
        Page {currentPage} Content
      </div> */}

      <ul className="pagination flex justify-center items-center lg:gap-4 ss:gap-1 sm:gap-2 ss:mb-6">

        {getVisiblePages().map((page, index) => (
          <li key={index} className='ss:text-[7px] sm:text-[10px] lg:text-[15px]'>
            {page === '...' ? (
              <span className="lg:w-[70px] lg:h-[70px] lg:p-[29px] border lg:rounded-[15px] cursor-default 
               ss:py-[8px] ss:px-[10px] ss:rounded-[8px]
               sm:py-[18px] sm:px-[18px] sm:rounded-[10px]">...</span>
            ) : (
              <button
                onClick={() => changePage(page)}
                className={`lg:w-[70px] lg:h-[70px] border rounded-[15px] flex items-center justify-center
                ss:w-[10px] ss:h-[10px] ss:p-3 ss:rounded-[8px] 
                sm:w-[14px] sm:h-[14px] sm:p-6 sm:rounded-[10px]
                ${currentPage === page ? 'bg-black text-white' : 'hover:bg-black hover:text-white'}`}
              >
                {page}
              </button>
            )}
          </li>
        ))}

        <li>
          <button
            onClick={() => changePage(currentPage + 1)}
            className={`lg:w-[70px] lg:h-[70px] border rounded-[15px]
            ss:w-[10px] ss:h-[10px] ss:p-3 ss:rounded-[8px] flex items-center justify-center 
            sm:w-[14px] sm:h-[14px] sm:p-6 sm:rounded-[10px]
            ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-black hover:text-white'}`}
            disabled={currentPage === totalPages}
          >
            &raquo;
          </button>
        </li>
      </ul>
    </div>
  );
};

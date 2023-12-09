export default function Pagination({
  page,
  setPage,
  limit,
  setLimit,
  hasNextPage,
  paginatedBreweries,
}) {
  // pagination settings
  const smallPagination = 8;
  const mediumPagination = 16;
  // Check if the end of the list is reached
  if (paginatedBreweries.length === 0) setPage(1);
  if (paginatedBreweries.length < limit) hasNextPage = false;
  else hasNextPage = true;

  return (
    <nav className="flex flex-col gap-5">
      {/* Current page with decoration */}
      <div className="flex justify-center items-center mb-10 gap-1">
        <div className="w-full bg-gradient-to-l from-mediumBrownBackgroundColor to-softBackgroundColor h-0.5"></div>
        <p className="bg-primaryColor font-bold flex justify-center items-center p-2 rounded-full w-6 h-6 text-almostBlackColor outline outline-offset-4 outline-2 outline-mediumBrownBackgroundColor">
          {page}
        </p>
        <div className="w-full  h-0.5 bg-gradient-to-r from-mediumBrownBackgroundColor to-softBackgroundColor"></div>
      </div>
      {/* Pagination controls */}
      <div className="flex gap-8 justify-between">
        <div className="flex gap-4">
          <button
            className="text-almostBlackColor font-semibold bg-primaryColor hover:bg-secondaryColor flex justify-center items-center p-2 rounded-full w-12 h-12 hover:text-white"
            onClick={() => setLimit(`${smallPagination}`)}
          >
            {smallPagination}
          </button>
          <button
            className=" text-almostBlackColor font-semibold bg-primaryColor hover:bg-secondaryColor flex justify-center items-center p-2 rounded-full w-12 h-12 hover:text-white"
            onClick={() => setLimit(`${mediumPagination}`)}
          >
            {mediumPagination}
          </button>
        </div>
        <div className="flex gap-4">
          <button
            className="disabled:opacity-75 font-medium bg-primaryColor hover:bg-secondaryColor hover:text-white p-2 rounded-md w-24"
            onClick={() => setPage(page - 1)}
          >
            previous
          </button>
          <button
            className="disabled:opacity-50 font-medium disabled:hover:bg-primaryColor disabled:hover:text-almostBlackColor bg-primaryColor hover:bg-secondaryColor hover:text-white p-2 rounded-md w-24 "
            disabled={!hasNextPage}
            onClick={() => setPage(page + 1)}
          >
            next
          </button>
        </div>
      </div>
    </nav>
  );
}

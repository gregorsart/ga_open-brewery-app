export default function Pagination({
  page,
  setPage,
  limit,
  setLimit,
  hasNextPage,
  paginatedExpenses,
}) {
  // pagination settings
  const smallPagination = 4;
  const mediumPagination = 10;
  // Check if the end of the list is reached
  if (paginatedExpenses.length === 0) setPage(1);
  if (paginatedExpenses.length < limit) hasNextPage = false;
  else hasNextPage = true;

  return (
    <nav className="flex flex-col gap-5">
      <div className="flex justify-center mb-10">
        <p className="bg-mediumBrownBackgroundColor flex justify-center items-center p-2 rounded-full w-6 h-6 text-white">
          {page}
        </p>
      </div>
      <div className="flex gap-8 justify-between">
        <div className="flex gap-4">
          <button
            className="text-almostBlackColor bg-primaryColor hover:bg-secondaryColor flex justify-center items-center p-2 rounded-full w-12 h-12 hover:text-white"
            onClick={() => setLimit(`${smallPagination}`)}
          >
            {smallPagination}
          </button>
          <button
            className=" text-almostBlackColor  bg-primaryColor hover:bg-secondaryColor flex justify-center items-center p-2 rounded-full w-12 h-12 hover:text-white"
            onClick={() => setLimit(`${mediumPagination}`)}
          >
            {mediumPagination}
          </button>
        </div>
        <div className="flex gap-4">
          <button
            className="disabled:opacity-75 bg-primaryColor hover:bg-secondaryColor hover:text-white p-2 rounded-md w-24"
            onClick={() => setPage(page - 1)}
          >
            previous
          </button>
          <button
            className="disabled:opacity-50 disabled:hover:bg-primaryColor disabled:hover:text-almostBlackColor bg-primaryColor hover:bg-secondaryColor hover:text-white p-2 rounded-md w-24 "
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

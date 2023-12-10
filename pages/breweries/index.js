import { useState } from "react";

import Headline from "@/components/headline";
import DetailsCard from "@/components/detailsCard";
import Pagination from "@/components/pagination";
export default function Breweries({ breweries }) {
  const [limit, setLimit] = useState(9);
  const [page, setPage] = useState(1);

  // Setting up the pagination
  const paginatedBreweries = breweries.slice((page - 1) * limit, page * limit);
  // To disable the previous button if necessary
  const hasNextPage = breweries.length >= (page + 1) * limit;

  return (
    <>
      {/* List of breweries */}
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-fr lg:max-w-5xl lg:w-full">
        <Headline>List of all Breweries</Headline>
        {paginatedBreweries.map((brewery) => {
          return <DetailsCard key={brewery.id} brewery={brewery} />;
        })}
      </section>
      <Pagination
        page={page}
        setPage={setPage}
        limit={limit}
        setLimit={setLimit}
        hasNextPage={hasNextPage}
        paginatedBreweries={paginatedBreweries}
      />
    </>
  );
}

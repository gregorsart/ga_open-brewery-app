import Link from "next/link";
import Headline from "@/components/headline";
import Subheadline from "@/components/subheadline";

export default function Breweries({ breweries }) {
  return (
    <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-fr lg:max-w-5xl lg:w-full">
      <Headline>List of all Breweries</Headline>
      {breweries.map((brewery) => {
        const { name, brewery_type, city, country, id } = brewery;
        return (
          <Link href={`/breweries/${id}`} className="group">
            <div className="mb-2 flex flex-col justify-between bg-mediumBrownBackgroundColor group-hover:bg-secondaryColor rounded-lg p-4 h-full">
              <Subheadline>{name}</Subheadline>
              <ul className="divide-y divide-secondaryColor group-hover:divide-mediumBrownBackgroundColor">
                <li className="flex justify-between py-2">
                  <p
                    className={
                      "text-m-0 max-w-[30ch] text-white font-light text-sm"
                    }
                  >
                    Browery type
                  </p>
                  <p
                    className={
                      "text-m-0 max-w-[30ch] text-white font-light text-sm"
                    }
                  >
                    {brewery_type}
                  </p>
                </li>
                <li className="flex justify-between py-2">
                  <p
                    className={
                      "text-m-0 max-w-[30ch] text-white font-light text-sm"
                    }
                  >
                    City
                  </p>
                  <p
                    className={
                      "text-m-0 max-w-[30ch] text-white font-light text-sm"
                    }
                  >
                    {city}
                  </p>
                </li>
                <li className="flex justify-between py-2">
                  <p
                    className={
                      "text-m-0 max-w-[30ch] text-white font-light text-sm"
                    }
                  >
                    Country
                  </p>
                  <p
                    className={
                      "text-m-0 max-w-[30ch] text-white font-light text-sm"
                    }
                  >
                    {country}
                  </p>
                </li>
              </ul>
            </div>
          </Link>
        );
      })}
    </section>
  );
}

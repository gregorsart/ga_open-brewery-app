import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import Subheadline from "@/components/subheadline";
import Headline from "@/components/headline";
import DetailsCard from "@/components/detailsCard";

export default function Home({ breweries }) {
  const [brewery, setBrewery] = useState({});
  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * breweries.length);
    const randomBrewery = breweries[randomNumber];
    setBrewery(randomBrewery);
  }, [breweries]);

  return (
    <>
      {/* Hero image */}
      <div className="block relative w-9/12 h-96">
        <Image
          quality={100}
          fill
          className="rounded-3xl object-cover"
          src="/open-brewery-app-hero-v05.jpg"
          alt="Heroimage"
        />
        <div class="absolute w-full h-full top-0 bottom-0 left-0 right-0 flex items-center justify-center">
          <Link
            href="/breweries"
            className="group flex gap:2 text-xl px-4 py-2 rounded  text-white bg-primaryColor hover:bg-secondaryColor"
          >
            <Image
              width={30}
              height={30}
              src="/arrow-right.svg"
              alt="Arrow icon"
              className="transition-all ease-in-out mr-0 group-hover:mr-4"
            />
            List of all breweries
          </Link>
        </div>
      </div>

      <div className="mb-32 flex flex-col">
        {/* Random brewery */}
        <section>
          <Headline>Brewery of the moment</Headline>
          <DetailsCard brewery={brewery} />
          {brewery.website_url && (
            <Link
              href={`${brewery.website_url}`}
              target="_blank"
              className="text-center text-sm font-normal text-white mt-4 mb-12 hover:bg-primaryColor bg-secondaryColor rounded-lg p-2 inline-block w-full"
            >
              {/* Remove https and trailing slash */}
              {brewery.website_url.replace(/^https?\:\/\//i, "")}
            </Link>
          )}
        </section>

        {/* Intro text */}
        <section className="mb-7">
          <Subheadline>About</Subheadline>
          <p className={"text-m-0 max-w-[30ch]"}>
            Goal is to render the data that I took from{" "}
            <Link
              href="https://www.openbrewerydb.org/"
              className=" hover:border-b-primaryColor hover:border-b-2 pb-1 font-medium"
            >
              openbrewerydb.org
            </Link>
          </p>
        </section>
      </div>
    </>
  );
}

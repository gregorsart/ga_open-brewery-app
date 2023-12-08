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
  // shorten url for displaying it
  console.log("www", brewery.website_url);

  return (
    <>
      {/* Hero Image */}
      <div className="block relative w-9/12 h-96">
        <Image
          quality={100}
          fill
          className="rounded-lg object-cover"
          src="/open-brewery-app-hero-v05.jpg"
          alt="Heroimage"
        />
      </div>

      <div className="mb-32 flex flex-col">
        {/* Random brewery */}
        <section>
          <Headline>Brewery of the moment</Headline>
          <DetailsCard brewery={brewery} />
          <Link
            href={`${brewery.website_url}`}
            target="_blank"
            className="text-center text-sm font-normal text-white mb-7 hover:bg-primaryColor bg-secondaryColor rounded-lg p-2 inline-block w-full"
          >
            {/* Remove https and trailing slash */}
            {brewery.website_url
              ? brewery.website_url.replace(/^https?\:\/\//i, "")
              : "Sry, no website provided"}
          </Link>
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

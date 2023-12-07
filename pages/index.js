import Image from "next/image";
import Link from "next/link";
import { bitterFontClass } from "@/lib/fonts.js";

export default function Home() {
  return (
    <>
      <div className="block relative w-9/12 h-96">
        <Image
          quality={100}
          fill
          className="rounded-lg object-cover"
          src="/open-brewery-app-hero-v03.jpg"
          alt="Heroimage"
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        {/* Intro text */}
        <div className="mb-7">
          <h2
            className={`${bitterFontClass} font-serif mb-3 text-4xl font-semibold text-secondaryColor`}
          >
            About
          </h2>
          <p className={"text-m-0 max-w-[30ch]"}>
            Goal is to render the data that I took from{" "}
            <Link
              href="https://www.openbrewerydb.org/"
              className=" hover:border-b-primaryColor hover:border-b-2 pb-1 font-medium"
            >
              openbrewerydb.org
            </Link>
          </p>
        </div>
        {/* Random brewery */}
        <div className="mb-7">
          <h2
            className={`${bitterFontClass} font-serif mb-3 text-4xl font-semibold text-secondaryColor`}
          >
            Brewery of the moment
          </h2>
          <p className={"text-m-0 max-w-[30ch]"}>
            Goal is to render the data that I took from{" "}
            <Link
              href="https://www.openbrewerydb.org/"
              className=" hover:border-b-primaryColor hover:border-b-2 pb-1 font-medium"
            >
              openbrewerydb.org
            </Link>
          </p>
        </div>
        {/* Something else */}
        <div className="mb-7">
          <h2
            className={`${bitterFontClass} font-serif mb-3 text-4xl font-semibold text-secondaryColor`}
          ></h2>
          <p className={"text-m-0 max-w-[30ch]"}>
            Goal is to render the data that I took from{" "}
            <Link
              href="https://www.openbrewerydb.org/"
              className=" hover:border-b-primaryColor hover:border-b-2 pb-1 font-medium"
            >
              openbrewerydb.org
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";

import Subheadline from "@/components/subheadline";
import Headline from "@/components/headline";

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
        {/* Random brewery */}
        <section>
          <Headline>Brewery of the moment</Headline>
          <Link href="https://www.1ofusbrewing.com" className="group">
            <div className="mb-2 bg-mediumBrownBackgroundColor group-hover:bg-secondaryColor rounded-lg p-4">
              <Subheadline>1 of Us Brewing Company</Subheadline>
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
                    micro
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
                    Mount Pleasant
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
                    United States
                  </p>
                </li>
              </ul>
            </div>
          </Link>
          <Link
            href="https://www.1ofusbrewing.com"
            className="text-sm font-normal text-white mb-7 hover:bg-primaryColor bg-secondaryColor rounded-lg p-2 inline-block w-full"
          >
            1ofusbrewing.com
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

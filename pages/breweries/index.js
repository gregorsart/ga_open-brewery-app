import Headline from "@/components/headline";
import DetailsCard from "@/components/detailsCard";
export default function Breweries({ breweries }) {
  return (
    <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-fr lg:max-w-5xl lg:w-full">
      <Headline>List of all Breweries</Headline>
      {breweries.map((brewery) => {
        return <DetailsCard key={brewery.id} brewery={brewery} />;
      })}
    </section>
  );
}

import { useRouter } from "next/router";

export default function Id({ breweries }) {
  const router = useRouter();
  const routerId = router.query.id;
  const brewery = breweries.find((arrayItem) => arrayItem.id === routerId);
  console.log("brewery---", brewery.name);
  return <div>Breweries {brewery.name} </div>;
}

import { useRouter } from "next/router";

export default function Id({ breweries }) {
  const router = useRouter();
  const routerId = router.query.id;
  const brewery = breweries.find((arrayItem) => arrayItem.id === routerId);
  return <div>Breweries {brewery.name} </div>;
}

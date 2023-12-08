import "@/styles/globals.css";
import { SWRConfig } from "swr";
import useSWR from "swr";
import Layout from "@/components/layout";

const url = "https://api.openbrewerydb.org/v1/breweries";

export default function App({ Component, pageProps }) {
  // fetching breweries list
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(url, fetcher);

  // error und loading screen
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  console.log("breweries from _app", data);
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((response) => response.json()),
      }}
    >
      <Layout>
        <Component {...pageProps} breweries={data} />
      </Layout>
    </SWRConfig>
  );
}

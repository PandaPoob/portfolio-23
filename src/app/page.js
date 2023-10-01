import baseURL from "@/api_endpoints/base";
import Home from "@/app/_views/Home";

async function getData() {
  const res = await fetch(`${baseURL}project-cards.json`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function HomePage() {
  const data = await getData();

  return <Home data={data} />;
}

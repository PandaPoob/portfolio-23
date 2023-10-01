import baseURL from "@/api_endpoints/base";
import Project from "@/app/_views/Project";

async function getData(params) {
  const res = await fetch(`${baseURL}project/${params.slug}.json`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function ProjectPage({ params }) {
  const data = await getData(params);
  console.log("data", data);
  return <Project />;
}

export async function generateStaticParams() {
  const res = await fetch(`${baseURL}project-cards.json`);
  const projects = await res.json();

  return projects.map((p) => ({
    slug: p.slug,
  }));
}

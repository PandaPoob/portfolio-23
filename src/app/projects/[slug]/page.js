import baseURL from "@/api_endpoints/base";
import Project from "@/app/_views/Project";

export default async function ProjectPage({ params }) {
  const data = await getData(params);

  return <Project {...data} />;
}

export async function generateStaticParams() {
  const res = await fetch(`${baseURL}project-cards.json`);
  const projects = await res.json();

  return projects.map((p) => ({
    slug: p.slug,
    title: p.title,
  }));
}

async function getData(params) {
  const res = await fetch(`${baseURL}project/${params.slug}.json`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function generateMetadata({ params }) {
  let title;
  switch (params.slug) {
    case "twitter-clone":
      title = "Twitter Clone";
      break;
    case "change-lingerie":
      title = "Change Lingerie";
      break;
    case "kattens-vaern":
      title = "Kattens Værn";
      break;
    case "hwaiting-festival":
      title = "Hwaiting Festival";
      break;
    case "hacked-hogwarts":
      title = "Hacked Hogwarts";
      break;
    case "whack-a-panda":
      title = "Whack-A-Panda";
      break;
    default:
      title = "Project";
  }

  return {
    title: `Projects // ${title}`,
  };
}

import ProjectCard from "@/app/_components/ProjectCard";

function Projects({ data }) {
  return (
    <section className="mt-20">
      <h2 className="font-display text-h4 text-center mb-14 md:text-h2">
        Projects
      </h2>
      <div className="md:flex md:justify-center md:items-center">
        <div className="grid justify-center gap-12 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4">
          {data.map((c) => (
            <ProjectCard {...c} key={c.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

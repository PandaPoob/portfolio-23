import ProjectCard from "@/app/_components/ProjectCard";
import Heading from "@/app/_components/Heading";

function ProjectList({ data }) {
  return (
    <section id="projects" className="mt-28">
      <Heading title={"Projects"} />
      <div className="md:flex md:justify-center md:items-center mt-10 md:mt-20">
        <div className="grid justify-center gap-16 md:gap-12 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4">
          {data.map((c) => (
            <ProjectCard {...c} key={c.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectList;

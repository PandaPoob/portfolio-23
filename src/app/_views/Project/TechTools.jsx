import IconList from "@/app/_components/IconList";
import Heading from "@/app/_components/Heading";

function TechTools({ data }) {
  return (
    <section className="bg-light py-16">
      <div className="pb-14 grid gap-7 px-3">
        <Heading title="Tech stack" />
        <IconList list={data.tech_stack} />
      </div>

      <div className="grid gap-7 px-3">
        <Heading title="Other tools" />
        <IconList list={data.other_tools} />
      </div>
    </section>
  );
}

export default TechTools;

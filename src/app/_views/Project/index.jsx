import Header from "./Header";
import Description from "./Description";
import TechTools from "./TechTools";
import Heading from "@/app/_components/Heading";

function Project(props) {
  console.log(props);
  return (
    <main className="pt-10">
      <Header data={props} />
      <Description data={props} />
      <TechTools data={props} />
      <section className="mx-3 my-16 md:my-28 ">
        <Heading title="Other projects" />
      </section>
    </main>
  );
}

export default Project;

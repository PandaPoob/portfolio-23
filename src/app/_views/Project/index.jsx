import Header from "./Header";
import Description from "./Description";
import IconList from "@/app/_components/IconList";

function Project(props) {
  console.log(props);
  return (
    <main className="pt-10">
      <Header data={props} />
      <Description data={props} />
      <section className="bg-bottom-grad">
        <h2 className="font-display text-h4 text-center mb-4 lg:text-h2">
          Tech stack
        </h2>
        <IconList list={props.tech_stack} />
      </section>
      <section>
        <h2 className="font-display text-h4 text-center mb-4 lg:text-h2">
          Other tools
        </h2>

        <IconList list={props.other_tools} />
      </section>
    </main>
  );
}

export default Project;

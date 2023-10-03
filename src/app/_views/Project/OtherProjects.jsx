import Heading from "@/app/_components/Heading";
import NavigationButton from "@/app/_components/NavigationButton";

function OtherProjects({ data }) {
  return (
    <section className="mx-3 my-16 md:my-28 ">
      <Heading title="Other projects" />
      <div className="flex justify-center">
        <div className="grid sm:grid-cols-3 items-center justify-center gap-10 mt-8">
          <NavigationButton url={data.next} title={"Next project"} />
          <NavigationButton
            url={data.prev}
            title={"Previous project"}
            variant="secondary"
          />
        </div>
      </div>
    </section>
  );
}

export default OtherProjects;

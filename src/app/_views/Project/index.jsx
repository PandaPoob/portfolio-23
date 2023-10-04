import Header from "./Header";
import Description from "./Description";
import TechTools from "./TechTools";
import OtherProjects from "./OtherProjects";
import Modal from "@/app/_components/Modal";

function Project(props) {
  return (
    <main className="pt-10">
      <Header data={props} />
      <section className="mx-3 mt-16 md:mt-28 grid justify-center">
        <Description data={props} />
        {props.detail_docu_text && <Modal props={props} />}
      </section>
      <TechTools data={props} />
      <OtherProjects data={props} />
    </main>
  );
}

export default Project;

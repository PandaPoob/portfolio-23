import Header from "./Header";
import Description from "./Description";
import TechTools from "./TechTools";
import OtherProjects from "./OtherProjects";

function Project(props) {
  console.log(props);
  return (
    <main className="pt-10">
      <Header data={props} />
      <Description data={props} />
      <TechTools data={props} />
      <OtherProjects data={props} />
    </main>
  );
}

export default Project;

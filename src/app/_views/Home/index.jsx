import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import ProjectList from "@/app/_components/ProjectList";

function Home({ data }) {
  return (
    <main>
      <Header />
      <About />
      <ProjectList data={data} />
      <Contact />
    </main>
  );
}

export default Home;

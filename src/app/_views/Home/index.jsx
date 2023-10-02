import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import Projects from "@/app/_components/Projects";

function Home({ data }) {

  return (
    <main>
      <Header />
      <About />
      <Projects data={data} />
      <Contact />
    </main>
  );
}

export default Home;

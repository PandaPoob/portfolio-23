import Image from "next/image";
import Heading from "@/app/_components/Heading";

function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center gap-16 mx-3 mt-3 lg:flex-row lg:justify-center lg:items-center xl:gap-28 lg:h-screen lg:mt-0"
    >
      <div
        data-aos-anchor="#about"
        className="flex flex-col gap-16 max-w-xl"
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <div>
          <Heading title={"about"} />
          <p className="mt-3">
            I am Freja Hee Eun Smith-Pedersen, a 26-year-old web developer based
            in Copenhagen. I hold a Bachelors degree in Web Development from
            KEA, which I completed in June 2024, following an AP degree in
            Multimedia Design with a Frontend Development elective.
          </p>
          <p className="mt-3">
            While I’m currently working as a developer, this portfolio reflects
            something more personal — a space for the things I build out of
            curiosity, creativity, and a love for code. Most of what you’ll find
            here are hobby projects, small freelance collaborations, and
            experiments with tools and technologies I enjoy. Some projects also
            date back to my time as a student — ones I’m still proud of, either
            because of what I learned through them or how they marked a
            milestone in my development journey.
          </p>
        </div>

        <div>
          <Heading title={"motivations"} />
          <p className="mt-3">
            What keeps me engaged in web development is the mix of creativity
            and continuous learning. I enjoy the process of building — seeing an
            idea take shape, solving problems along the way, and learning
            something new as I go. I find real motivation in using my skills to
            build things that are not only functional, but meaningful to the
            people who interact with them.
          </p>
        </div>

        <div>
          <Heading title={"interests"} />
          <p className="mt-3">
            When I’m not working on a project, I usually spend time with
            friends, family, or out in nature with my dog — long walks in
            Kalvebod Fælled are one of my favorite ways to unwind. I also enjoy
            playing video games when I have the time, from multiplayer to
            singleplayer, building worlds, or being competitive — I love all
            kinds of gaming!
          </p>
        </div>
      </div>

      <div
        data-aos-anchor="#about"
        className="relative w-full h-full lg:w-auto flex flex-col justify-center"
        data-aos="fade-left"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <div className="relative w-full h-auto min-h-[20rem] lg:w-auto lg:min-w-[30rem] lg:min-h-[30rem]">
          <Image
            src={"/about_img.png"}
            fill={true}
            alt="Freja"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
            style={{ objectFit: "contain" }}
          />
        </div>
        <p className="text-center italic mt-1">This is my beloved dog Cleo</p>
      </div>
    </section>
  );
}
export default About;

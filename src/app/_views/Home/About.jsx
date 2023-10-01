import Image from "next/image";

function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center gap-10 mx-3 mt-8 lg:flex-row lg:justify-center lg:items-center lg:gap-28 lg:h-screen lg:mt-0"
    >
      <div className="flex flex-col gap-14 max-w-xl">
        <div>
          <h2 className="font-display text-h4 text-center mb-4 lg:text-h2">
            about
          </h2>
          <p>
            I am Freja Hee Eun Smith-Pedersen, 24 years old and located in the
            Urban area of Copenhagen (Storkøbenhavn). I finished my AP degree
            Multimedia Design with the Frontend Development elective spring 2023
            and am currently studying the Top-up Bachelor’s degree Web
            development at KEA.
          </p>
        </div>

        <div>
          <h2 className="font-display text-h4 text-center mb-4 lg:text-h2">
            motivations
          </h2>
          <p>
            I am an aspiring web developer who loves coding and solving
            problems. What truly motivates me is learning something new and then
            implementing it in practice, not just hearing or reading about
            something but actually doing it. That is probably why I have come to
            enjoy coding and building web so much.
          </p>
        </div>

        <div>
          <h2 className="font-display text-h4 text-center mb-4 md:text-h2">
            interests
          </h2>
          <p>
            When I am not working on a new project I usually spend time with
            friends and family. I love long walks in the nearby forest with my
            dog and I also enjoy playing games if I have spare time.
          </p>
        </div>
      </div>

      <div className="relative w-full h-full lg:w-auto flex flex-col justify-center">
        <div className="relative w-full h-auto min-h-[20rem] lg:w-auto lg:min-w-[30rem] lg:min-h-[30rem]">
          <Image
            src={"/about_img.png"}
            fill={true}
            alt="Freja"
            style={{ objectFit: "contain" }}
          />
        </div>
        <p className="text-center italic mt-1">This is my beloved dog Cleo</p>
      </div>
    </section>
  );
}
export default About;

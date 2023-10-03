import Image from "next/image";
import Heading from "@/app/_components/Heading";

function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center gap-16 mx-3 mt-3 lg:flex-row lg:justify-center lg:items-center lg:gap-28 lg:h-screen lg:mt-0"
    >
      <div className="flex flex-col gap-16 max-w-xl">
        <div>
          <Heading title={"about"} />
          <p className="mt-3">
            I am Freja Hee Eun Smith-Pedersen, 24 years old and located in the
            Urban area of Copenhagen (Storkøbenhavn). I finished my AP degree
            Multimedia Design with the Frontend Development elective spring 2023
            and am currently studying the Top-up Bachelor’s degree Web
            development at KEA.
          </p>
        </div>

        <div>
          <Heading title={"motivations"} />
          <p className="mt-3">
            I am an aspiring web developer who has a passion for coding and a
            love for problem-solving. What truly motivates me is the process of
            learning something new and then applying it hands-on. This is why I
            have come to enjoy and appreciate coding and web development so much
            as it challenges me to continually learn and create.
          </p>
        </div>

        <div>
          <Heading title={"interests"} />
          <p className="mt-3">
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

import Link from "next/link";
import Image from "next/image";
import Heading from "@/app/_components/Heading";

function Contact() {
  return (
    <section
      id="contact"
      className="mt-28 bg-top-grad py-24 flex flex-col items-center md:pt-20"
    >
      <Heading title={"Get in touch"} />
      <p className="text-tag md:text-bodyS mt-4 mb-2">
        Email me at{" "}
        <Link href="mailto:frej400d@stud.kea.dk" className="font-semibold">
          frej400d@stud.kea.dk
        </Link>
      </p>
      <p>Or find me here:</p>
      <div className="flex gap-3 mt-2">
        <Link href="https://www.linkedin.com/in/freja-smith98/" target="_blank">
          <Image
            src={"/icon_linkedin_fill.svg"}
            width={36}
            height={12}
            alt="Linked in"
          />
        </Link>
        <Link href="https://github.com/PandaPoob" target="_blank">
          <Image
            src={"/icon_github_fill.svg"}
            width={36}
            height={12}
            alt="Github"
          />
        </Link>
      </div>
    </section>
  );
}

export default Contact;

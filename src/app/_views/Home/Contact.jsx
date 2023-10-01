import Link from "next/link";
import Image from "next/image";

function Contact() {
  return (
    <section className="mt-20 bg-top-grad py-14 flex flex-col items-center md:pt-20">
      <h2 className="font-display text-h4 text-center mb-8 md:text-h2">
        Get in touch
      </h2>
      <p className="text-tag md:text-bodyS mb-4">
        Email me at{" "}
        <Link href="mailto:frej400d@stud.kea.dk" className="font-semibold">
          frej400d@stud.kea.dk
        </Link>
      </p>
      <p>Or find me here:</p>
      <div className="flex gap-2 md:gap-3 mt-2">
        <Link href="https://www.linkedin.com/in/freja-smith98/" target="_blank">
          <Image
            src={"/icon_linkedin.svg"}
            width={36}
            height={12}
            alt="Linked in"
          />
        </Link>
        <Link href="https://github.com/PandaPoob" target="_blank">
          <Image src={"/icon_github.svg"} width={36} height={12} alt="Github" />
        </Link>
      </div>
    </section>
  );
}

export default Contact;

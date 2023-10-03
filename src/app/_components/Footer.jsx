import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-light flex flex-wrap justify-between py-5 px-3 items-center gap-1">
      <p className="text-dark text-bodys md:text-body">
        ©Freja Hee Eun Smith-Pedersen 2023
      </p>
      <div className="flex items-center justify-center gap-1 md:gap-3">
        <Link
          href="https://www.linkedin.com/in/freja-smith98/"
          target="_blank"
          scroll={false}
        >
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
        <Link href="https://github.com/PandaPoob" className="h-auto">
          <Image src={"/icon_mail.svg"} width={38} height={12} alt="Email" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;

import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className="bg-bottom-grad h-screen flex justify-center items-center">
      <div className="w-full">
        <div className="flex flex-col items-center gap-3 justify-center md:flex-row md:gap-10">
          <div className="relative w-full h-auto min-h-[20rem] md:w-auto md:min-w-[30rem] md:min-h-[40rem]">
            <Image
              src={"/header_img.png"}
              fill={true}
              alt="Freja"
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
              priority
            />
          </div>
          <div className="text-center md:flex md:flex-col md:items-start md:text-left">
            <h1 className="font-display text-h3 md:text-h1 mb-1 md:mb-3">
              Hi, I am <span className="font-semibold">Freja</span>
            </h1>
            <p className="text-tag">An aspiring Web Developer</p>
          </div>
        </div>
        <div className="flex justify-center self-center mt-14">
          <Link href="/#about" scroll={false}>
            <Image
              src={"/icon_arrow.svg"}
              width={36}
              height={12}
              alt="arrow_icon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;

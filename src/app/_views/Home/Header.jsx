import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div
      id="header"
      className="bg-bottom-grad h-screen flex justify-center items-center"
    >
      <div className="w-full">
        <div className="flex flex-col items-center gap-3 justify-center md:flex-row md:gap-10">
          <div
            id="img"
            className="relative w-full h-auto min-h-[20rem] md:w-auto md:min-w-[30rem] md:min-h-[40rem]"
            data-aos-anchor="#header"
            data-aos="zoom-in-up"
            data-aos-delay="50"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
          >
            <Image
              src={"/header_img.png"}
              fill={true}
              alt="Freja"
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
              priority
            />
          </div>
          <div
            className="text-center md:flex md:flex-col md:items-start md:text-left"
            data-aos-anchor="#header"
            data-aos="fade-up"
            data-aos-delay="850"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <h1 className="font-display text-xl md:text-xxl mb-1 md:mb-3">
              Hi, I am <span className="font-semibold">Freja</span>
            </h1>
            <p className="text-tag">An aspiring Web Developer</p>
          </div>
        </div>
        <div
          className="flex justify-center self-center mt-14"
          data-aos-anchor="#header"
          data-aos="fade-up"
          data-aos-delay="1850"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
        >
          <Link href="/#about" className="animate-bounce">
            <svg
              width="52"
              height="20"
              viewBox="0 0 58 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.65294"
                y1="1.24259"
                x2="29.6529"
                y2="26.2426"
                stroke="#201036"
                strokeWidth="2"
              />
              <line
                x1="28.3471"
                y1="26.2426"
                x2="57.3471"
                y2="1.24259"
                stroke="#201036"
                strokeWidth="2"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;

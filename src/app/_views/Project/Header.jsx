import ButtonLink from "@/app/_components/ButtonLink";

function Header({ data }) {
  function getPostion(slug) {
    let pos;
    switch (slug) {
      case "twitter-clone":
        pos = "w-full h-full bg-cover bg-center lg:bg-[center_top_-8rem]";
        break;
      case "change-lingerie":
        pos = "w-full h-full bg-cover bg-right lg:bg-[center_top_0]";
        break;
      case "kattens-vaern":
        pos = "w-full h-full bg-cover bg-center lg:bg-[center_top_-4rem]";
        break;
      case "hwaiting-festival":
        pos = "w-full h-full bg-cover bg-center";
        break;
      case "hacked-hogwarts":
        pos = "w-full h-full bg-cover bg-center md:bg-[center_top_-3rem]";
        break;
      case "whack-a-panda":
        pos = "w-full h-full bg-cover bg-center lg:bg-[center_top_-1rem]";
        break;
      default:
        pos = "w-full h-full bg-cover bg-center lg:bg-[center_top_0]";
    }
    return pos;
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="h-2/3 w-full relative">
        <div className="absolute w-full h-full top-0 left-0 bg-filter z-10"></div>
        <div
          className={`${getPostion(data.slug)}`}
          style={{
            backgroundImage: `url('/splash_img/${data.detail_img}')`,
          }}
        ></div>
      </div>
      <div className="relative z-20 bg-top-grad h-1/2 -mt-12">
        <div
          className="h-full flex flex-col items-center justify-center pb-8"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          <p className="italic font-light">{data.created_when}</p>
          <h1 className="font-display text-xl md:text-xxl">{data.title}</h1>
          <div className="flex gap-3 mt-6">
            {data.repo && (
              <ButtonLink
                title={"Repository"}
                url={data.repo}
                variant="secondary"
              />
            )}
            {data.website && (
              <ButtonLink
                title={data.title != "Whack-A-Panda" ? "Website" : "Play"}
                url={data.website}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

import ButtonLink from "@/app/_components/ButtonLink";

function Header({ data }) {
  function getPostion(slug) {
    let pos;
    switch (slug) {
      case "twitter":
        pos = "50% 50%";
        break;
      case "change":
        pos = "50% 50%";
        break;
      case "kv":
        pos = "50% 50%";
        break;
      case "hwating":
        pos = "50% 50%";
        break;
      case "hogwarts":
        pos = "50% 50%";
        break;
      case "panda":
        pos = "50% 50%";
        break;
      default:
        pos = "50% 50%";
    }
    return pos;
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="h-1/2 w-full relative">
        <div className="absolute w-full h-full top-0 left-0 bg-filter z-10"></div>
        <div
          className="w-full h-full bg-cover"
          style={{
            backgroundImage: `url('/splash_img/${data.detail_img}')`,
            backgroundPosition: getPostion(data.slug),
          }}
        ></div>
      </div>
      <div className="relative z-20 bg-top-grad h-1/2 -mt-8">
        <div className="h-full flex flex-col items-center justify-center pb-8">
          <p className="italic font-light">{data.created_when}</p>
          <h1 className="font-display text-xl md:text-xxl">{data.title}</h1>
          <div className="flex gap-3 mt-6">
            <ButtonLink
              title={"Repository"}
              url={data.repo}
              variant="secondary"
            />
            <ButtonLink title={"Website"} url={data.website} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

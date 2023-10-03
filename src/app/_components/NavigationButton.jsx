import Link from "next/link";

function NavigationButton({ url, title, variant = "primary" }) {
  function getProjectName(url) {
    let title;
    switch (url) {
      case "twitter-clone":
        title = "Twitter Clone";
        break;
      case "change-lingerie":
        title = "Change Lingerie";
        break;
      case "kattens-vaern":
        title = "Kattens Værn";
        break;
      case "hwaiting-festival":
        title = "Hwaiting Festival";
        break;
      case "hacked-hogwarts":
        title = "Hacked Hogwarts";
        break;
      case "whack-a-panda":
        title = "Whack-A-Panda";
        break;
      default:
        title = "Project";
    }
    return title;
  }

  function animateBtn() {}

  return (
    <Link
      href={url}
      className="flex items-center gap-3 group"
      onMouseOver={animateBtn()}
    >
      <span
        className={`${
          variant !== "primary"
            ? "border border-dark py-2 px-6 rounded-full flex items-center justify-center min-w-[10rem] transform translate-x-0 transition-transform ease-in-out duration-300 group-hover:-translate-x-4"
            : "bg-dark text-white py-2 px-6 rounded-full flex items-center justify-center min-w-[10rem] relative z-10 transform translate-x-0 transition-transform ease-in-out duration-300"
        }`}
      >
        {title}
      </span>
      <span className="opacity-0 absolute group-hover:opacity-100 group-hover:relative transition-opacity duration-300">
        {getProjectName(url)}
      </span>
      <span>
        <svg
          className="h-6 w-6 -rotate-90 group-hover:translate-x-4"
          width="58"
          height="27"
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
            stroke-width="2"
          />
          <line
            x1="28.3471"
            y1="26.2426"
            x2="57.3471"
            y2="1.24259"
            stroke="#201036"
            stroke-width="2"
          />
        </svg>
      </span>
    </Link>
  );
}

export default NavigationButton;

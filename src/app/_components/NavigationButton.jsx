"use client";
import Link from "next/link";
import { useState } from "react";

function NavigationButton({ url, title, variant = "primary" }) {
  const [isHovered, setIsHovered] = useState(false);
  let hoverTimeout;

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

  function animateBtn() {
    clearTimeout(hoverTimeout);

    hoverTimeout = setTimeout(() => {
      setIsHovered(true);
    }, 300);
  }

  function animateLeave() {
    clearTimeout(hoverTimeout);

    setTimeout(() => {
      setIsHovered(false);
    }, 300);
  }

  return (
    <Link
      href={url}
      className={`flex items-center gap-3 relative col-start-2 col-end-3 group ${
        variant !== "primary" ? "flex-row-reverse md:mr-9" : "md:ml-9"
      }`}
      onMouseEnter={animateBtn}
      onMouseLeave={animateLeave}
    >
      <span
        className={`
        py-2 px-6 rounded-full flex items-center justify-center min-w-[10rem] relative z-10 
        ${
          variant !== "primary"
            ? "border border-dark col-start-2 col-end-3"
            : "bg-dark border text-white col-start-1 col-end-2"
        }`}
      >
        {title}
      </span>
      <span
        className={`hidden sm:relative sm:flex items-center ${
          variant !== "primary" &&
          "col-start-1 col-end-2 row-start-1 justify-end"
        }`}
      >
        <span
          className={`absolute whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
            !isHovered && "delay-200"
          }`}
        >
          {getProjectName(url)}
        </span>
        <span
          className={`transform translate-x-0 ${
            variant == "primary"
              ? "group-hover:translate-x-[7.5rem]"
              : "group-hover:-translate-x-[7.5rem]"
          } transition-transform duration-200 ${isHovered && "delay-200"}`}
        >
          <svg
            className={`h-6 w-6 ${
              variant == "primary" ? "-rotate-90" : "rotate-90"
            } `}
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
        </span>
      </span>
    </Link>
  );
}

export default NavigationButton;

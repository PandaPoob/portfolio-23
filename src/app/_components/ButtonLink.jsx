import Link from "next/link";

function ButtonLink({ title, url, variant = "primary" }) {
  //bg-dark text-white py-2 px-6 rounded-full flex items-center justify-center w-full

  return (
    <Link
      href={url}
      target="_blank"
      className={`${
        variant !== "primary"
          ? "border border-dark py-2 px-6 rounded-full flex items-center justify-center min-w-[8rem]"
          : "bg-dark text-white py-2 px-6 rounded-full flex items-center justify-center min-w-[8rem]"
      }`}
    >
      {title}
    </Link>
  );
}

export default ButtonLink;

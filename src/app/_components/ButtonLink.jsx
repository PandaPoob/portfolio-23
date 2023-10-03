import Link from "next/link";

function ButtonLink({ title, url, variant = "primary" }) {
  return (
    <Link
      href={url}
      target="_blank"
      className={`
      py-2 px-6 rounded-full flex items-center justify-center min-w-[8rem]
      ${
        variant !== "primary"
          ? "border border-dark hover:bg-dark hover:text-white"
          : "bg-dark text-white border hover:bg-light hover:border-dark hover:text-dark"
      }`}
    >
      {title}
    </Link>
  );
}

export default ButtonLink;

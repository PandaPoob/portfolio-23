import Image from "next/image";
import Link from "next/link";

function Navigation() {
  return (
    <nav className="bg-light p-3">
      <div className="flex justify-between items-center">
        <div>
          <Link href="/">
            <Image src={"/logo.svg"} width={52} height={52} alt="Logo" />
          </Link>
        </div>
        <div>
          <ul className="flex gap-12 text-bodyS font-normal">
            <li>
              <Link href="/#about">about</Link>
            </li>
            <li>
              <Link href="/#projects">projects</Link>
            </li>
            <li>
              <Link href="/#contact">contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

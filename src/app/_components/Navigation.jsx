"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

function Navigation() {
  const [oldScrollPosition, setOldScrollPosition] = useState(0);
  const [isScrolling, setIsScrolling] = useState("default");

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setOldScrollPosition(position);
      if (oldScrollPosition > window.scrollY) {
        setIsScrolling("true");
      } else {
        setIsScrolling("false");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [oldScrollPosition]);

  function getTopValue() {
    // hvis vi ruller op eller lige er loaded
    if (isScrolling === "true" || isScrolling === "default") {
      return "0";
    } else if (oldScrollPosition <= 0) {
      return "0";
    } else {
      return "-5.1rem";
    }
  }

  return (
    <nav
      className="bg-light p-3 fixed left-0 w-full transition-transform duration-300 transform z-50"
      style={{
        transform: `translateY(${getTopValue()})`,
        ...(isScrolling &&
          oldScrollPosition !== 0 && {
            boxShadow: "2px 2px 4px 1px rgba(32, 16, 54, 0.20)",
          }),
      }}
    >
      <div className="flex justify-between items-center text-dark">
        <div>
          <Link href="/">
            <Image src={"/logo.svg"} width={52} height={52} alt="Logo" />
          </Link>
        </div>
        <div>
          <ul className="grid grid-cols-3 gap-5 md:gap-12 text-body font-normal">
            <li>
              <Link href="/#about" className="hover:font-semibold">
                about
              </Link>
            </li>
            <li className="min-w-[60px]">
              <Link href="/#projects" className="hover:font-semibold">
                projects
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:font-semibold">
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

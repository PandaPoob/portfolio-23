"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';

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
    <nav className="bg-light p-3 fixed left-0 w-full transition-transform duration-300 transform z-20"
    style={{
      transform: `translateY(${getTopValue()})`,
      ...(isScrolling && oldScrollPosition !== 0 && { boxShadow: "2px 2px 4px 1px rgba(32, 16, 54, 0.20)" })
    }}
    
    >
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

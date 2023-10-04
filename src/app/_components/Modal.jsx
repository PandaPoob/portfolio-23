"use client";
import Heading from "@/app/_components/Heading";
import Image from "next/image";
import { useState } from "react";

function Modal({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="mt-6">
        <button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <span>{data.detail_docu_text}</span>
          <span className="font-semibold"> {data.detail_docu_btn}</span>
        </button>
      </div>
      <div className={`${isOpen ? "block" : "hidden"}`}>
        <div className="fixed top-0 left-0 w-full h-full z-50  flex justify-center items-center">
          <div className="absolute bg-black opacity-80 top-0 left-0 w-full h-full"></div>
          <div className="relative bg-white w-full h-full max-w-screen-xxl md:max-h-[90vh] rounded-xl p-8 lg:m-6">
            <div className="flex justify-between w-full">
              <div>
                <Heading title="Relational diagram" />
              </div>
              <button
                className="group"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="1"
                    width="38"
                    height="38"
                    rx="3"
                    className="group-hover:fill-dark"
                    fill="white"
                  />
                  <line
                    className="group-hover:stroke-white"
                    x1="2.35355"
                    y1="2.64645"
                    x2="37.3536"
                    y2="37.6464"
                    stroke="#201036"
                  />
                  <line
                    className="group-hover:stroke-white"
                    x1="2.64645"
                    y1="37.6464"
                    x2="37.6465"
                    y2="2.64645"
                    stroke="#201036"
                  />
                  <line
                    className="group-hover:stroke-white"
                    x1="0.5"
                    y1="4"
                    x2="0.499999"
                    y2="36"
                    stroke="#201036"
                  />
                  <line
                    className="group-hover:stroke-white"
                    x1="39.5"
                    y1="4"
                    x2="39.5"
                    y2="36"
                    stroke="#201036"
                  />
                  <line
                    className="group-hover:stroke-white"
                    x1="36"
                    y1="39.5"
                    x2="4"
                    y2="39.5"
                    stroke="#201036"
                  />
                  <line
                    className="group-hover:stroke-white"
                    x1="36"
                    y1="0.5"
                    x2="4"
                    y2="0.499997"
                    stroke="#201036"
                  />
                </svg>
              </button>
            </div>
            <div className="relative w-full h-auto min-h-[90vh] md:min-h-[80vh]">
              <Image
                src={`/docu/${data.detail_docu_img}`}
                fill={true}
                alt="Freja"
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 100vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;

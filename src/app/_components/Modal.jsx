"use client";
import Heading from "@/app/_components/Heading";
import Image from "next/image";
import { useState } from "react";

function Modal({ props }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="mt-6" data-aos="fade-up">
        <button
          onClick={() => {
            setIsOpen(true);
            document.body.style.overflow = "hidden";
          }}
        >
          <span>{props.detail_docu_text}</span>
          <span className="font-semibold"> {props.detail_docu_btn}</span>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-80 z-50 justify-center items-center`}
      >
        <div className="relative bg-white w-full h-full max-w-screen-xxl md:max-h-[90vh] rounded-xl p-8 lg:m-6">
          <div className="flex justify-between md:justify-center w-full">
            <div className="flex-1">
              <Heading
                title={
                  props.detail_docu_btn
                    ? props.detail_docu_btn.charAt(0).toUpperCase() +
                      props.detail_docu_btn.slice(1)
                    : "Diagram"
                }
              />
            </div>
            <button
              className="group"
              onClick={() => {
                setIsOpen(false);
                document.body.style.overflow = "auto";
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
              src={`/docu/${props.detail_docu_img}`}
              fill={true}
              alt={props.detail_docu_btn}
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;

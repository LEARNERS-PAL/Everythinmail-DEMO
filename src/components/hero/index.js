import React from "react";
import Navbar from "../navbar";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <Navbar />
      <section className=" hero-email min-h-screen bg-cover bg-center bg-no-repeat font-inter">
        <article className="min-h-[90vh] flex flex-col gap-6 justify-center items-center">
          <h1 className="text-6xl flex flex-col font-extrabold text-black text-center lg:max-w-4xl leading-tight">
            <span className="text-[#009CE0]">Open-Source Email API </span>
            that allows you to seamlessly integrate email functionalities
          </h1>
          <div className="flex items center justify-center w-full gap-x-3">
            {" "}
            <a
              href="https://github.com/LEARNERS-PAL/everythingmail/#checkered_flag-starting"
              target="_blank"
            >
              <button className="bg-black text-white py-3 px-14 rounded-sm border-[2px] border-black">
                Get Started
              </button>
            </a>
            <Link href="/form">
              <button className="bg-white text-black py-3 px-14 rounded-sm border-[2px] border-black">
                View Demo
              </button>
            </Link>
          </div>
        </article>
      </section>
    </>
  );
};

export default Hero;

import React from "react";
import Image from "next/image";

const Objectives = () => {
  return (
    <section className="flex lg:flex-row flex-col items-center gap-6 bg-[#F2F7FF] font-inter lg:px-28 px-8 py-14">
      <div>
        <h2 className="text-xl font-bold pb-1 text-[#009CE0]">About</h2>
        <h1 className="lg:text-5xl text-3xl font-extrabold text-black pb-4">Everything Mail</h1>
        <p className="text-lg">
          Email communication is an essential feature of many web and mobile
          applications, and developers often face challenges integrating email
          functionality into their applications. Currently, there are limited
          open-source options available for developers to use, which creates a
          need for an open-source API for sending and receiving emails that is
          easy to use and flexible. This project aims to address this gap by
          developing an open-source API that can be used by developers to
          integrate email functionality into their applications quickly.
        </p>
      </div>
      <Image
        src="/images/abt.png"
        alt="Everything Mail"
        width={500}
        height={500}
      />
    </section>
  );
};

export default Objectives;

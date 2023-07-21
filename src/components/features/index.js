import React from "react";
import { BiCustomize } from "react-icons/bi";
import { FaHandsHelping } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import { VscServerProcess } from "react-icons/vsc";

const Features = () => {
  return (
    <div className="bg-[#F2F7FF] font-inter lg:px-28 px-8 py-14">
      <h1 className="text-5xl font-extrabold text-black">
        Why EverythingMail?
      </h1>
      <main className="grid lg:grid-cols-2 gap-16 lg:gap-0 justify-between py-16">
        <section className="grid grid-rows-2 gap-16">
          <article className="flex gap-6 items-start">
            <div className="text-white text-4xl bg-[#009ce0] p-4 rounded-full">
              <BiCustomize />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">Customizable</h3>
              <p className="text-lg max-w-lg">
                The API should provide developers with the ability to customize
                various aspects of the email sending process, including email
                content, attachments, and sender/receiver details.
              </p>
            </div>
          </article>
          <article className="flex gap-6 items-start">
            <div className="text-white text-4xl bg-[#009ce0] p-4 rounded-full">
              <GiPadlock />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">Secure</h3>
              <p className="text-lg max-w-lg">
                The API should implement industry-standard security measures to
                ensure that email data is protected during transit and at rest.
              </p>
            </div>
          </article>
        </section>
        <section className="grid grid-rows-2 gap-16">
          <article className="flex gap-6 items-start">
            <div className="text-white text-4xl bg-[#009ce0] p-4 rounded-full">
              <FaHandsHelping />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">Reliable</h3>
              <p className="text-lg max-w-lg">
                The API should be robust and able to handle high volumes of
                email traffic, with minimal downtime or errors.
              </p>
            </div>
          </article>
          <article className="flex gap-6 items-start">
            <div className="text-white text-4xl bg-[#009ce0] p-4 rounded-full">
              <VscServerProcess />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">Adaptable</h3>
              <p className="text-lg max-w-lg">
                The API should be adaptable to different programming languages
                and frameworks, enabling developers to use it in a wide range of
                projects.
              </p>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Features;

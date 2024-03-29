import React from 'react'
import Image from "next/image";

const Technologies = () => {
  return (
    <section className="flex flex-col gap-10 lg:px-14 px-8 py-14 font-inter bg-[#F2F7FF]">
      <h1 className="text-center text-xl font-bold">Developed with <span className='text-[#009CE0]'>common and popular</span> technologies</h1>
      <Image
          src="/images/line.png"
          alt="Line"
          width={200}
          height={200}
          className='mx-auto mt-[-35px]'
        />
      <article className="flex lg:flex-row flex-col gap-10 lg:gap-0 items-center justify-evenly w-full">
        <Image
          src="https://www.vectorlogo.zone/logos/nodejs/nodejs-horizontal.svg"
          alt="NodeJS"
          width={200}
          height={200}
        />
        <Image
          src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21.svg"
          alt="Typescript"
          width={200}
          height={200}
        />
        <Image
          src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg"
          alt="Express"
          width={200}
          height={200}
        />
        <Image
          src="/images/nodemailer.png"
          alt="Node Mailer"
          width={150}
          height={100}
        />
      </article>
    </section>
  );
}

export default Technologies
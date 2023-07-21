import React from 'react'
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-[#F2F7FF] flex justify-between items-center lg:px-14 px-8 py-3 text-black font-inter">
      <h1 className='font-semibold'>EVERYTHINGMAIL</h1>
      <Link href="/form">
        <button className="bg-[#009ce0] text-white py-3 px-6 rounded-sm">
          View Demo
        </button>
      </Link>
    </nav>
  );
}

export default Navbar
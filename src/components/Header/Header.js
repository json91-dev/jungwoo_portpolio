import React, { useCallback } from 'react'
import Link from 'next/link';

const Header = () => {
  const scrollTo = useCallback((yPos) => {
    window.scrollTo({ left: 0, top: yPos, behavior: "smooth" });
  }, [])

  return (
    <div className="text-gray-600 body-font w-full bg-[#1760C8] fixed top-0">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-3xl text-white">JSON's Portfolio</span>
          </a>
        </Link>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center text-2xl cursor-pointer">
          <a className="mr-10 hover:text-gray-900 text-white">About me</a>
          <a className="mr-10 hover:text-gray-900 text-white" onClick={() => scrollTo(525)}>Introduce</a>
          <a className="mr-10 hover:text-gray-900 text-white" onClick={() => scrollTo(1020)}>Skills</a>
        </nav>
      </div>
    </div>
  )
}

export default Header;

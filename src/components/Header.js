import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {
  const [applyHeaderEffect, setApplyHeaderEffect] = useState(false);

  const scrollTo = useCallback((yPos) => {
    window.scrollTo({ left: 0, top: yPos, behavior: "smooth" });
  }, []);

  const onScroll = useCallback((e) => {
    if (window.scrollY > 50) {
      setApplyHeaderEffect(true);
    } else if (window.scrollY < 20) {
      setApplyHeaderEffect(false);
    }
  }, []);

  useEffect(() => {
    // passive: true 일때 preventDefault 가 사용되지 않기때문에 검증하는 감시 비용 절감
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className={`flex justify-between text-gray-600 body-font w-full bg-[black] fixed top-0 h-6 transition-all duration-1000 align-middle ${
        applyHeaderEffect ? "bg-[white]" : "bg-[black]"
      }`}
    >
      <div className="pl-5">
        <Link href="/">
          <a className="flex title-font font-medium items-center text-gray-900">
            <span className="ml-3 text-3xl text-white">JSON's Portfolio</span>
          </a>
        </Link>
      </div>

      <nav className="align-middle flex flex-wrap items-center justify-center text-xl cursor-pointer pr-15">
        <a className="mr-5 hover:text-gray-900 text-white">About me</a>
        <a
          className="mr-5 hover:text-gray-900 text-white"
          onClick={() => scrollTo(525)}
        >
          Introduce
        </a>
        <a
          className="mr-5 hover:text-gray-900 text-white"
          onClick={() => scrollTo(1020)}
        >
          Skills
        </a>
      </nav>
    </div>
  );
};

export default Header;

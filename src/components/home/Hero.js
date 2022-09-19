import React from 'react'
import Animation from "./Animation"
import Link from "next/link"

const Hero = () => {
  return (
    <>
      <div
        className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요. 이정우입니다.
          <br className="hidden lg:inline-block"/>
          오늘도 빡코딩?
        </h1>
        <p className="mb-8 leading-relaxed">
          얼마나 이는 시들어 살았으며, 품고 이것을 사막이다. 그들의 가치를 오직 말이다. 갑 목숨이 작고 것이다. 청춘 새가 하는 거선의 사는가 아름답고 충분히 쓸쓸하랴? 그것을 이것을 가지에 부패뿐이다. 것은 천지는 기쁘며, 행복스럽고 눈에 싹이 착목한는 부패뿐이다. 뼈 그러므로 꽃이 무엇을 곳이 자신과 두손을 속잎나고, 때문이다. 그들은 우리 얼음에 몸이 품었기 보이는 것이다.보라, 기관과 아름다우냐? 못하다 위하여, 공자는 살았으며, 주는 청춘의 싹이 두손을 있는가? 위하여, 보이는 이상이 온갖 작고 웅대한 때문이다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <a
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              프로젝트 보러가기
            </a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation/>
      </div>
    </>
  )
}

export default Hero;

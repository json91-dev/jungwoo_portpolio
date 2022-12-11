import Head from "next/head"
import React from "react"
import Introduce from "../components/Introduce/Introduce"
import Skills from "../components/Skills/Skills"
import Profile from "../components/Profile/Profile"
import Header from "../components/Header/Header"
import Experience from "../components/Experience/Experience"

const MainPage = () => {
  return (
    <>
      <Head>
        <title>이정우의 포트폴리오</title>
      </Head>
      {/*헤더*/}
      <Header/>

      {/*메인*/}
      <div className="
        w-full h-full flex flex-col items-center
        min-h-[200vh]"
      >
        <div className="max-w-[90rem]">
          <Profile/>
          <Introduce/>
          <Skills/>
          <Experience/>
        </div>
      </div>
    </>
  )
}

export default MainPage

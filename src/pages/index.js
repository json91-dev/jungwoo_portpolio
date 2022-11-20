import Head from "next/head"
import React from "react"
import Introduce from "../components/Introduce/Introduce"
import Skiils from "../components/Skills/Skiils"
import Profile from "../components/Profile/Profile"

const Home = () => {
  return (
    <div className="
        w-full h-full flex flex-col items-center justify-center pl-10 pr-10
    "
    >
      <Head>
        <title>이정우의 포트폴리오</title>
      </Head>

      <div className="max-w-5xl">
        <Profile/>
        <Introduce/>
        <Skiils/>
      </div>
    </div>
  )
}

export default Home

import Head from "next/head"
import Hero from "../components/home/Hero"
import React from "react"
import Header from "../components/Header"
import Introduce from "../components/Introduce"
import Skiils from "../components/Skiils"
import Profile from "../components/Profile"

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

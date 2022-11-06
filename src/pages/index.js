import Head from "next/head"
import Hero from "../components/home/Hero"
import React from "react"
import Header from "../components/Header"
import Introduce from "../components/Introduce"
import Skiils from "../components/Skiils"
import Profile from "../components/Profile"

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center border-4 border-red-900">
      <Head>
        <title>빡코딩 포트폴리오</title>
        <meta name="description" content="오늘도 빡코딩!"/>
      </Head>

      <Header />

      <>
        <Profile/>
        <Introduce/>
        <Skiils/>
      </>
    </div>
  )
}

export default Home

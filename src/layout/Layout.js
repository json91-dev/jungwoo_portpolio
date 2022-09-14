import Header from "../components/Header"
import Footer from "../components/Footer"

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <h1>레이아웃</h1>
      <>{children}</>
      <Footer />
    </>
  )
}

export default Layout;

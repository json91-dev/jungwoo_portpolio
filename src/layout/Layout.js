import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

const Layout = ({children}) => {
  return (
    <div className="w-[50%]">
      <Header />
      <>{children}</>
      <Footer />
    </div>
  )
}

export default Layout;

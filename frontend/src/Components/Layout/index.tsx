import type { ReactNode } from "react"
import TopHeader from "./TopHeader"
import Navbar from "./Navbar"
import Footer from "./Footer"

function index({children}:{children:ReactNode}) {
  return (
    <>
        <TopHeader/>
        <Navbar/>
        {children}
        <Footer/>
    </>
  )
}

export default index

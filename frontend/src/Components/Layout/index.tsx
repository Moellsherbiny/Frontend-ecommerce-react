import type { ReactNode } from "react"
import TopHeader from "@/Components/Layout/TopHeader"
import Navbar from "@/Components/Layout/Navbar"
import Footer from "@/Components/Layout/Footer"
import styles from "@/Components/Layout/layout.module.scss"


function AppLayout({children}:{children:ReactNode}) {

  return (
    <>
        <TopHeader/>
        <Navbar/>
        <main className={styles.main}>
  
            {/* <Breadcrumb /> */}
            {children}
        </main>
        <Footer/>
    </>
  )
}

export default AppLayout

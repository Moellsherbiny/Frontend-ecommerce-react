import type { ReactNode } from "react"
import TopHeader from "./TopHeader"
import Navbar from "./Navbar"
import Footer from "./Footer"
import styles from "./layout.module.scss"

function index({children}:{children:ReactNode}) {
  return (
    <>
        <TopHeader/>
        <Navbar/>
        <main >
          <div className={styles.container}>
            {children}
          </div>
        </main>
        <Footer/>
    </>
  )
}

export default index

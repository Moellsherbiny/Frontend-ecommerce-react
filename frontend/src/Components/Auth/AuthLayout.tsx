import type { ReactNode } from "react"
import authStyles from "./auth.module.scss"
import AuthImage from "../../assets/images/login-register.jpg"

function Layout({ children }: { children: ReactNode }) {
  return (
      <div className={authStyles.container}>
    <div className={authStyles.authLayout} >
        <div className={authStyles.image}>
          <img src={AuthImage} alt="" />
        </div>
        {children}
      </div>
    </div>
  )
}

export default Layout

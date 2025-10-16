import type { ReactNode } from "react"
import styles from "@/Components/common/IconContainer/iconContainer.module.scss"

function IconContainer({icon, className}:{icon:ReactNode, className?:string}) {
  return (
    <div  className={`${styles.iconContainer} ${className}`}>
      {icon}
    </div>
  )
}

export default IconContainer
